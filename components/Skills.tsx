import React, { useEffect, useRef } from "react";
import SkillBox from "./SkillBox";
function Pricing() {
  const pricing = useRef<HTMLDivElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      // if (window.scrollY>window.innerHeight){
      //     return
      // }
      if (pricing.current&&sidebar.current) {
        // let fraction = window.innerHeight / 90;
        // pricing.current.style.transformOrigin="right"
        // pricing.current.style.transform = `rotateY(${
        //   90 - window.scrollY / fraction
        // }deg)`;
        // pricing.current.style.left = `${pricing.current.offsetWidth - (pricing.current.offsetWidth/window.innerHeight)*window.scrollY}px`
        sidebar.current.style.left = `-${sidebar.current.offsetWidth - (1.3*sidebar.current.offsetWidth/window.innerHeight)*window.scrollY}px`
        
      }
    });
  }, []);
  return (
    <>
    <div id="pri-wrapper  " className='flex flex-row w-full h-screen relative '>
      <div id="section " className="w-4/12 h-full bg-orange-400 relative -left-full rounded-br-3xl rounded-tr-3xl" ref={sidebar}>
        hwllo
      </div>
      <div className="wrapper-one perspective-cont flex flex-col  w-8/12  items-start justify-start px-10 ">
      <h1 className="text-5xl font-bold text-orange-400">WHAT I FIDDLE WITH</h1>
        <div  className="flex flex-row  justify-start gap-y-10  relative gap-10 h-fit flex-wrap  py-10 border-3 rounded-3xl overflow-hidden " id="skill-cont" ref={pricing}>
          <SkillBox title="LANGUAGES" list={["HTML","CSS",'Python',"Javascript",'Typescript']}></SkillBox>
          <SkillBox title="UI/UX" list={['Tailwind','ShadCN','BootStrap','Framer']}></SkillBox>
          <SkillBox title="DATA SOLUTIONS" list={['Mongo DB','PostgreSQL' ,'Prima','MySQL']}></SkillBox>
          <SkillBox title="INTEGRATIONS" list={['O-Auth','Google Maps','Payment Gateways','ES-Lint']}></SkillBox>

          <SkillBox title="FRAMEWORKS" list={['React','Next','Angular','Express']}></SkillBox>
          <SkillBox title="DEVOPS" list={['GIT','GitHub','Docker']}></SkillBox>
          


        </div>
    </div>
      </div>
    </>
  );
}

export default Pricing;
