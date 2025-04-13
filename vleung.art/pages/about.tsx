import type { NextPage } from "next"
import Rainbow from "../src/components/molecules/Rainbow"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="flex h-full w-full px-20">
      <div className="flex flex-row items-center justify-center gap-10 rounded-xl p-20">
        <div className="flex flex-col items-center">
          <Rainbow />
          <span className="text-3xl">About</span>

          <div className="rounded-xl bg-yellow-700 p-20">
            <div
              className="h-72 w-72 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('/images/profile_mimi.jpg')` }}
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-col gap-5 rounded-xl border border-yellow-700 p-8 text-yellow-900">
          <span className="">name: vivian leung (she/they)</span>
          <span className="">
            {`bio: an artist based in Northern California with 2 years of traditional training under José Luis Andrade
            Leon and 2 years of experience teaching at `}
            <Link href="https://arthub.academy" className="underline hover:text-yellow-700">
              Arthub Academy
            </Link>{" "}
            in Saratoga, CA.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
