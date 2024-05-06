'use client'
import Registration from "./registration/page";
import RoadMap from "./roadmap/page";
import FuturePlan from "./future-plan/page";
import AdvisorChat from "./advisor-chat/page";

const Page = () => {

  return (
    <div className="m-3 relative px-3 bg-base-100 rounded-lg">
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

    </div>
  );
};

export default Page;
