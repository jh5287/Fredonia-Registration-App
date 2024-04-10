import Registration from "./registration/page";
import RoadMap from "./roadmap/page";
import WhatIf from "./what-if/page";

const Page = () => {

  

  return (
    <div className="m-3">
      <div role="tablist" className="tabs tabs-bordered w-full">
        <input type="radio" name="home_tabs" role="tab" className="tab" aria-label="Registration" defaultChecked/>
        <div role="tabpanel" className="tab-content p-10">
          <Registration />
        </div>

        <input type="radio" name="home_tabs" role="tab" className="tab" aria-label="Roadmap" />
        <div role="tabpanel" className="tab-content p-10">
          <RoadMap />
        </div>

        <input type="radio" name="home_tabs" role="tab" className="tab" aria-label="WhatIf" />
        <div role="tabpanel" className="tab-content p-10">
          <WhatIf />
        </div>
      </div>
    </div>
  );
};

export default Page;
