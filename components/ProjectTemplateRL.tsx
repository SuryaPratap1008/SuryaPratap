import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ProjectTemplate() {
    const monitor = useRef<HTMLDivElement>(null)
    const mobile = useRef<HTMLDivElement>(null)
    // const [startingPosition,setStartingPosition] = useState(0)
    const startingPosition = useRef(0)

    useEffect(()=>{

        document.addEventListener('scroll',()=>{
          
            if(monitor.current && mobile.current){
              
                const rect= monitor.current.getBoundingClientRect()

                console.log(window.innerHeight)
                if (rect.top<=window.innerHeight &&rect.top>=1*window.innerHeight/4 ){

                   
                        monitor.current.style.right = `-${monitor.current.offsetWidth-((monitor.current.offsetWidth/(3*window.innerHeight/4))*(window.scrollY-startingPosition.current))}px`
                       console.log(`this is the monitor right position -${monitor.current.offsetWidth-((monitor.current.offsetWidth/(3*window.innerHeight/4))*(window.scrollY-startingPosition.current))}px`)
                        mobile.current.style.right = `-${(2*mobile.current.offsetWidth)-(((2*mobile.current.offsetWidth)/(3*window.innerHeight/4))*(window.scrollY-startingPosition.current))}px`
                       

    
                }
                else if(rect.top>window.innerHeight){
                    // console.log(window.scrollY)
                    startingPosition.current = window.scrollY
                }
                else{
                    console.log(monitor.current.style.left)
                    console.log(mobile.current.style.left)
                    // monitor.current.style.left = "0px"
                }
                

    
            }


        })
    },[])
  return (
    <>
      <div className=" w-screen  py-5 h-96  flex flex-row project relative ">
      <div className="w-1/3 flex justify-center items-center bg-orange-400 relative  -right-2/3 project-displays project-mobile z-20" ref={mobile} id="bobo">
          <div className="flex flex-col  items-center justify-center w-5/6  h-5/6 relative">
            <div className="w-3/5 h-full  border-8 border-[black]  rounded-3xl bg-img bg-cover  ">
              {/* <iframe
                src="http://localhost:3001"
                className="w-full h-full iframe-mobile"
              ></iframe> */}
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center bg-orange-400 relative  -right-1/3 project-displays project-monitor z-10" ref={monitor} id="hoho">
          <div className="flex flex-col  items-center  w-5/6  h-5/6 relative">
            <div className="w-full h-3/4  border-8 border-[black]  rounded-3xl bg-img bg-cover  ">
              {/* <Image src={require('../website.PNG')} alt="" className='w-full h-full rounded-xl' /> */}
              {/* <iframe
                src="http://localhost:3001"
                className="w-full h-full iframe-desktop "
              ></iframe> */}
            </div>
            <div className="w-1/4  bg-[black] h-1/4 z-10 border-y-0 "></div>
            <div className="perspective-cont w-3/4  h-1/8 z-1 ">
              <div className="w-full  h-full monitor rounded-3xl border-8 border-[black] bg-gray-900  "></div>
            </div>
          </div>
        </div>

       
        <div className="w-1/3 flex justify-center items-center bg-gradient-to-tr from-[rgb(27,25,25)] to-[rgb(16,24,41)] relative z-1 ">
      <h2 className="font-bold text-4xl">ELECTRO.COM</h2>
          {/* <div className="flex flex-col  items-center justify-center w-5/6  h-5/6 relative">
            <div className="w-full h-4/5  border-8 border-[rgb(45,212,191)] rounded-3xl bg-img bg-cover  ">
              <iframe
                src="http://localhost:3000"
                className="w-full h-full iframe-desktop"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProjectTemplate;
