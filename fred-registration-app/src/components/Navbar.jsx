'use client'; 
import Link from "next/link";
import React from "react";
import { useSession } from 'next-auth/react'
import Image from 'next/image';

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="navbar sticky top-0 z-50 border-b-2 bg-blue-200">
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex="0" className="m-1 btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 absolute z-50"
          >
            <li>
              <Link href="/customRoadmap">Roadmap Builder</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/vs-one-line_no_suny.png" width={200} height={50}/>
          Advising Roadmap
        </Link>
      </div>
      <div className="flex-none m-5">
        {status === 'authenticated' ? (
          <Link href="/api/auth/signout">
            { session.user?.name }
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
