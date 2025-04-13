import type { NextPage } from "next"
import Rainbow from "../src/components/molecules/Rainbow"
import Link from "next/link"

const Home: NextPage = () => {
  return (
      <div className="flex flex-col w-full h-full items-center justify-center gap-10 rounded-xl p-20">
        <div className="flex flex-col items-center">
          <Rainbow />
          <span className="text-3xl">Lessons</span>
        </div>
        <div className="flex w-3/4 flex-row gap-24 rounded-xl border border-yellow-700 p-8 text-yellow-900">
          <div className="flex flex-col w-1/2 gap-5">
            <span className="font-semibold">Overview</span>
            <span className="">
              {`I work with traditional mediums like oil, gouache, and
            charcoal. For digital mediums, I use Clip Studio Paint, Procreate, and Adobe Photoshop.
						`}
            </span>
            <span className="">
              {`Lessons can be purchased by month or by session. They can be private or held in small groups of up to 3 students, whichever is preferred. 
							 Pricing varies depending on the medium. Oil painting is more expensive because of the cost of the paint and canvases. 
							 `}
            </span>
            <span className="">
              Supplies are included. However, for digital, students must bring their own devices (iPad with Procreate
              installed, or laptop with drawing tablet and Clip Studio or Adobe Photoshop installed).
            </span>
          </div>
          <div className="flex flex-col w-1/2 gap-5">
            <span className="font-semibold">Prices per month</span>
            <span className="">
              Oil painting: $180/1 hour session each week for 1 month or $200/1.5 hr session each week for 1 month or
              $220/2hrs
            </span>
            <span className="">
              Drawing (traditional or digital): $140/1 hour session each week for 1 month or $160/1.5 hr session each
              week for 1 month
            </span>
            <span className="">$20 off when using cash!</span>
            <span className="font-semibold">Prices per session</span>
            <span className="">Oil painting: $45/hr or $55/1.5 hrs or $65/2hrs</span>
            <span className="">Drawing (traditional or digital): $35/hr or $50/1.5 hrs</span>
            <span className="">$5 off when using cash!</span>
          </div>
        </div>
      </div>
  )
}

export default Home
