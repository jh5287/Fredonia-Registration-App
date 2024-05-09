"use client";

import { useState, useEffect } from "react";
import { getDoc, setDoc, doc, ref, Timestamp } from "firebase/firestore";
import { firestoreDB } from "@/firebase/config";
import { useSession } from "next-auth/react";

export default function AdvisorChat({ role }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const {data: session, status} = useSession();
    
    useEffect(() => {
        const fetchMessages = async () => {
            console.log("Fetching messages...");
            try {
                const messagesRef = doc(firestoreDB, "messages", session.user.email);
                const messagesDoc = await getDoc(messagesRef);
                if (messagesDoc.exists()) {
                setMessages(messagesDoc.data().messages);
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
            console.log("Messages fetched!");
        };
        
        fetchMessages();
    }, [status]);
    
    const sendMessage = async (author) => {
        if (messages === undefined) {
            var newMessages = [{ text: newMessage, sender: session.user.name, timestamp: Timestamp.now()}];
        }
        else {
            var newMessages = [...messages, { text: newMessage, sender: author, timestamp: Timestamp.now()}];
        }
        try {
            const messagesRef = doc(firestoreDB, "messages", session.user.email);
            await setDoc(messagesRef, { messages: newMessages });
            setMessages(newMessages);
            setNewMessage("");
        } 
        catch (error) {
            console.error("Error sending message:", error);
        }
    };
    
    return (
        <>
            <h1 className="p-3 pt-6 text-2xl text-center">Advisor Chat</h1>
            <h2 className="text-lg text-center m-2">Your advisor is Shahin Mehdipour Atatee!</h2>
            {status === "authenticated" ? (
                <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4">
                    {loading ? ( <p>Loading...</p> ) : (
                            messages ? (
                            messages.map((message, index) => (
                                <div key={index} className={`p-2 mb-2 ${message.sender === session.user.name ? "bg-primary text-white" : "bg-neutral"} rounded-md `}>
                                {message.text} <br/> <small>({message.sender})</small> <small className="ml-auto">{message.timestamp.toDate().toLocaleString()}</small>
                                </div>
                            ))
                            ) : ( <p>No messages here yet!</p> )
                        )}
                </div>
                <div className="flex p-4">
                    <input
                    type="text"
                    placeholder="Type your message here"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-md bg-neutral"
                    />
                    <button
                    onClick={() => sendMessage(session.user.name)}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                    Send as Student
                    </button>
                    <button
                    onClick={() => sendMessage("Shahin Mehdipour Ataee")}
                    className="ml-2 px-4 py-2 bg-gray-100 text-black rounded-md"
                    >
                    Send as Advisor
                    </button>

                </div>
                </div>
            ) : (<></>)}
        </>
    );
}