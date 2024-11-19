import Image from "next/image";
import localFont from "next/font/local";
import Intro from "@/components/Intro";
import Pricing from "@/components/Pricing";
// import Gallery from "@/components/Gallery";
import Skills from '@/components/Skills'
import SkillBox from "@/components/SkillBox";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import ProjectTemplate from "@/components/ProjectTemplate";
import Footer from "@/components/Footer";
import ProjectTemplateRL from "@/components/ProjectTemplateRL";
export default function Home() {
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])
  return (
    <>

    <Intro></Intro>
    {/* <Navbar></Navbar> */}
    <Skills></Skills>
    <ProjectTemplate></ProjectTemplate>
    <ProjectTemplateRL></ProjectTemplateRL>
    <ProjectTemplate></ProjectTemplate>
    <ProjectTemplateRL></ProjectTemplateRL>
    <Contact></Contact>
    <Footer></Footer>
    {/* <Pricing></Pricing> */}
    {/* <Gallery></Gallery> */}

    </>
  );
}
