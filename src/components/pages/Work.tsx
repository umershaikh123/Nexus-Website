import React from "react"
import { buttonCss } from "@/css"
import glow from "/public/Images/glow.svg"
import diagram from "/public/Images/flow.svg"

import Image from "next/image"
export function WorkPage() {
  return (
    <div
      className={`justify-center items-center flex  z-10    md:px-16  mx-auto`}
    >
      <div className="       h-full -z-20  my-16 bg-[#010305] w-full relative rounded-2xl p-8 ">
        {/* draw circle her  bg-[#010305] */}
        {/* <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[10%] h-full bg-[#0e223f33]  rounded-2xl blur-3xl "></div>   */}
        <Image
          src={glow}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }} // optional
          alt="image effect"
          className="  -z-10   absolute  top-0"
        />

        <div className="  flex items-center justify-center  mt-8 ">
          <h1 className="md:text-4xl    text-3xl  text-wrap text-center ">
            {" "}
            How does Nexus Network Work ?
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={diagram}
            // width={1200}
            // height={1200}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }} // optional
            alt="image effect"
            className="     "
          />
        </div>
      </div>
    </div>
  )
}

//  <div className=" absolute  top-0 left-40  " />
