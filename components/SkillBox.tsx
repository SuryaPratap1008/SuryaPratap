import React from "react";
import { FaReact } from "react-icons/fa";
import styles from "@/styles/skillbox.module.css";
import prope from "./Types/skillbox";
function SkillBox(props: prope) {
  return (
 

      <div className={styles.tilting_card_body}>
        <div className="h-full w-full  rounded-lg p-0   flex flex-col   items-center justify-around py-8 ">
          <h1 className="text-lg tracking-widest title-font  font-medium text-center py-8  ">
            {props.title}
          </h1>
          <div className=" flex flex-row justify-center items-center overflow-hidden flex-wrap mx-auto gap-3   px-5  ">
            {props.list.map((element: string) => {
              return (
                <p className=" w-fit h-10 paras flex items-center justify-center   font-bold text-sm rounded-2xl p-3 py-4 text-or   bg-[rgb(21,45,50)] text-[rgb(45,212,191)]">

                  <span>{element}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>

  );
}

export default SkillBox;
