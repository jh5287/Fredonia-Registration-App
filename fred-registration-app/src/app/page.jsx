'use client'
import Registration from "./registration/page";
import RoadMap from "./roadmap/page";
import FuturePlan from "./future-plan/page";
import AdvisorChat from "./advisor-chat/page";
import { useSession } from "next-auth/react";
import { BarLoader } from "react-spinners";

const Page = () => {
  const { data: session, status } = useSession();

  return (

    <div className="m-3 p-3 relative bg-base-100 rounded-lg shadow ">
      {status === "authenticated" ? (
        <div role="tablist" className="tabs tabs-bordered w-full">
          <input type="radio" name="home_tabs" role="tab" className="tab text-nowrap" aria-label="Registration" defaultChecked/>
          <div role="tabpanel" className="tab-content">
            <Registration />
          </div>

          <input type="radio" name="home_tabs" role="tab" className="tab text-nowrap" aria-label="Roadmap" />
          <div role="tabpanel" className="tab-content">
            <RoadMap />
          </div>

          <input type="radio" name="home_tabs" role="tab" className="tab text-nowrap " aria-label="Future Plan" />
          <div role="tabpanel" className="tab-content">
            <FuturePlan />
          </div>

          <input type="radio" name="home_tabs" role="tab" className="tab text-nowrap" aria-label="Advisor Chat" />
          <div role="tabpanel" className="tab-content">
            <AdvisorChat role={'student'} />
          </div>
        </div>
      ) : status === 'loading' ? (<div className="flex m-10 justify-center"><BarLoader color="black" width={200} height={5} /></div>) : (<h1 className="text-center text-2xl font-bold m-10">Welcome, please sign in above.</h1>)}
    </div>
  );
};

export default Page;
