import type { NextPage } from "next"
import Image from "next/image"
import Rainbow from "../src/components/core/Rainbow"

const Home: NextPage = () => {
  return (
    <div className="mb-24 mt-[72px] flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl p-8">
      <div className="flex flex-col items-center">
        <Rainbow />
        <span className="text-3xl">Lessons</span>
      </div>
      <div className="flex w-full flex-wrap items-center gap-8 rounded-xl border border-yellow-700 p-8 text-yellow-900 lg:w-3/4 lg:gap-16">
        <div className="relative flex h-96 w-full rounded-lg lg:w-1/3">
          <Image
            src="/images/lessons/vivian-painting.jpg"
            alt="Vivian instructing oil painting"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <span className="text-xl font-semibold">Overview</span>
          <span className="">
            {`I work with traditional mediums like oil, gouache, and
              charcoal. For digital mediums, I use Clip Studio Paint, Procreate, and Adobe Photoshop.
              `}
          </span>
          <span className="">
            {`Lessons are offered for children (minimum age 9), teens, and adults and can be purchased by month or by session. They can be private or held in small groups of up to 3 students, whichever is preferred. 
                Pricing varies depending on the medium. Oil painting is more expensive because of the cost of the paint and canvases. 
                `}
          </span>
          <span className="">
            Supplies are included. However, for digital, students must bring their own devices (iPad with Procreate
            installed, or laptop with drawing tablet and Clip Studio or Adobe Photoshop installed).
          </span>
        </div>
        <div className="relative flex h-64 w-full sm:h-96 lg:w-2/5">
          <Image
            src="/images/lessons/group-painting.jpg"
            alt="Group oil painting"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <span className="text-xl font-semibold">Prices</span>
          <caption className="text-lg font-semibold">Oil Painting</caption>
          <table className="whitespace-pre-wrap outline">
            <tbody className="">
              <tr className="border-b-2 border-yellow-900">
                <th>Hours</th>
                <th scope="col" className="p-4">
                  Per Session
                </th>
                <th scope="col">4 Session package</th>
              </tr>
              <tr className="text-center">
                {/* <th className="border-b">Hours</th> */}
                <td className="p-4">1</td>
                <td>$45</td>
                <td>$180</td>
              </tr>
              <tr className="text-center">
                {/* <th className="outline">Per Session</th> */}
                <td className="">1.5</td>
                <td>$65</td>
                <td>$240</td>
              </tr>
              <tr className="text-center">
                {/* <th className="outline">Monthly</th> */}
                <td className="p-4">2</td>
                <td>$80</td>
                <td>$280</td>
              </tr>
            </tbody>
          </table>
          <caption className="text-lg font-semibold">Drawing</caption>
          <table className="whitespace-pre-wrap outline">
            <tbody className="">
              <tr className="border-b-2 border-yellow-900">
                <th>Hours</th>
                <th scope="col" className="p-4">
                  Per Session
                </th>
                <th scope="col">4 Session package</th>
              </tr>
              <tr className="text-center">
                {/* <th className="border-b">Hours</th> */}
                <td className="p-4">1</td>
                <td>$35</td>
                <td>$140</td>
              </tr>
              <tr className="text-center">
                {/* <th className="outline">Per Session</th> */}
                <td className="">1.5</td>
                <td>$50</td>
                <td>$180</td>
              </tr>
              <tr className="text-center">
                {/* <th className="outline">Monthly</th> */}
                <td className="p-4">2</td>
                <td>$60</td>
                <td>$200</td>
              </tr>
            </tbody>
          </table>
          <div className="gap-2">
            <span>Cash discounts:</span>
            <div className="ml-2 flex flex-col">
              <span>$20 off of 4 session packages</span>
              <span>$5 off per session</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
