import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function Intro() {
  const intro1 = useRef<HTMLDivElement>(null);
  const introCont = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (intro1.current) {
        let fraction = window.innerHeight / 90;
        intro1.current.style.transform = `rotateX(-${
          window.scrollY / fraction
        }deg)`;
      }
    });
  }, []);
  // function scrollFlip(){
  //     // console.log("scrolling")

  //         // console.log("hello")
  //     }

  return (
    <>
      <div className="perspective-cont h-fit snap-start" ref={introCont}>
        <div
          className="wrapper mx-auto w-s bg-orange-400  h-screen flex flex-col justify-center transition-transform ease-linear delay-0 duration-0"
          ref={intro1}
        >
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <Image
                className="rounded-full overflow-hidden mb-16"
                alt="hero"
                src={require("../bg.png")}
                width={400}
                height={100}
              />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-10 font-bold font-sans text-black">
                  Hi There, I Am Surya Pratap. Nice to meet you
                </h1>
                {/* <p className="mb-8 leading-relaxed text-gray-800">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p> */}
                <div className="flex justify-center align-middle gap-2 ">
                  <a href="">
                    <AiFillTwitterCircle size={50} color="black" />
                  </a>
                  <a href="">
                    <BsFacebook size={45} color="black" />
                  </a>
                  <a href="">
                    <AiFillInstagram size={50} color="black" />
                  </a>
                  <a href="">
                    <FaLinkedin size={45} color="black" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </>
  );
}

export default Intro;
