import type { NextPage } from "next"
import Rainbow from "../src/components/core/Rainbow"
import Link from "next/link"
import Image from "next/image"

const About: NextPage = () => {
  return (
    <div className=" flex h-full justify-center p-8 md:px-12 xl:px-20 pb-24 pt-[80px] border">
      <div className="py-4 sm:py-8 grid w-full grid-flow-row items-center justify-center gap-4 rounded-xl md:grid-cols-5 lg:w-3/4 lg:grid-cols-4 lg:gap-10">
        <div className="justify-centeer flex flex-col items-center md:col-span-2">
          <Rainbow />
          <span className="text-3xl">About</span>
        </div>
        <div className="grid gap-10 md:col-span-5 md:grid-cols-5 lg:col-span-4 lg:grid-cols-4">
          <div className="flex items-center justify-center md:col-span-2">
            <SelfPortrait />
          </div>
          <div className="flex items-center md:col-span-3 lg:col-span-2">
            <BioCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

const SelfPortrait: React.FC = () => {
  return (
    <div className="flex items-center justify-center rounded-xl bg-yellow-700 p-10 lg:p-16 xl:p-20">
      <div className="relative h-60 w-60 overflow-hidden rounded-xl xl:h-72 xl:w-72">
        <Image alt={"vivian's profile pic"} src={"/images/profile_mimi.jpg"} style={{ objectFit: "cover" }} fill />
      </div>
    </div>
  )
}

const BioCard: React.FC = () => {
  return (
    <div className="flex w-full flex-col rounded-xl border border-yellow-700 p-8 text-yellow-900 xl:w-3/4">
      <span className="">name:</span>
      <span className="mt-2">vivian leung (she/they)</span>
      <span className="mt-8">bio:</span>
      <span className="mt-2">
        {`an artist based in Northern California with 2 years of traditional training under José Luis Andrade
      Leon and 2 years of experience teaching at `}
        <Link href="https://arthub.academy" className="underline hover:text-yellow-700">
          Arthub Academy
        </Link>{" "}
        in Saratoga, CA.
      </span>
    </div>
  )
}
