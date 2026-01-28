import { NextPage } from "next"
import Link from "next/link"
import { FC } from "react"

const carrotsandhummus = `A functioning e-commerce web store built using Typescript, Next.js, Stripe, and Sanity IO. During COVID I started an art business and I wanted to make our products accessible through online sales. I worked on this for half a year before launching it in 2023. Below is an iframe of the live application. Yes, you will get charged if you put in your credit card during checkout!  The theme is inspired by Neopets.`
const materialsdesigner = `This proof of concept simulates a tool which can analyze crystal lattices in real time. Users can plot atoms in a 3D space by listing XYZ coordinates in the text box. Additionally, the dimensions of the cube can be modified and viewed in real time. I built this in 5 days using Next.js, Three.js, and Tailwind CSS. The theme is  inspired by command line interface font and colors`

const Personal: NextPage = () => {
  return (
    <div className="flex h-full min-h-screen w-full justify-center pb-24 pt-[72px]">
      <div className="flex w-full max-w-[1024px] flex-col gap-8 px-6 py-8">
        <span className="text-4xl">Personal Projects</span>
        <div className="flex h-full w-full flex-col">
          <div className="py-2 text-xl font-medium">Art Shoppe</div>
          <div className="font-regular text-base leading-relaxed">{carrotsandhummus}</div>
          <div className=" relative my-8 h-[85vh] max-h-[85vh] min-h-[650px] w-full overflow-hidden rounded-lg border-stone-900 bg-white">
            <iframe
              title={"title"}
              width="100%"
              height="100%"
              src={"https://carrotsandhummus.vercel.app/shoppe"}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex h-full w-full flex-col">
          <div className="py-2 text-xl font-medium">Materials Designer</div>
          <div className="font-regular text-base leading-relaxed">{materialsdesigner}</div>
          <div className=" relative my-8 h-[85vh] max-h-[85vh] min-h-[650px] w-full overflow-hidden rounded-lg border-stone-900 bg-white">
            <iframe
              title={"title"}
              width="100%"
              height="100%"
              src={"https://materials-designer.vercel.app/"}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-wrap">
          <VideoCard
            src="https://www.youtube.com/embed/o47EnZuYJrQ"
            title="Ray Tracing in 3D using an Octree"
            description="This is an assignment for my class CS134: Computer Game Design & Programming at San Jose State University taken with Kevin Smith during fall semester 2018. Created using openFrameworks library, and developed in XCode IDE."
          />
          <VideoCard
            src="https://www.youtube.com/embed/yUKTGlYq0QY"
            title="Pumpkin Cat & the Skulls"
            description="A 2D Vintage Arcade Shooter that demonstrates the use of game physics, collision detection, and particle/sprite systems while emphasizing a cleanly written object-oriented framework. This is a game I created for my CS134 class at SJSU with guidance from Professor Kevin Smith. It was coded in C++ and relies on the openFrameworks library. Sprites were drawn using Adobe Photoshop CS6."
          />
          <VideoCard
            src="https://www.youtube.com/embed/1EQnre0qbFg"
            title="Unbarrelble: A 3D Simulation"
            description="This is a demo of my final project for CS134, created with my partner, Cyrus. This game demonstrates the use of camera manipulation, above-height telemetry sensing, and collision detection using octrees. Collect as many fruits possible with the barrel which simulates a thrust and gravity force similar to one of a rocket in space. All 3D models were created using Maya."
          />
        </div>
      </div>
    </div>
  )
}

export default Personal

const VideoCard: FC<{ title: string; src: string; description: string }> = ({ title, src, description }) => (
  <div className="flex w-full flex-col md:w-full">
    <div className="py-2 text-xl font-medium">{title}</div>
    <div className="font-regular text-base leading-relaxed">{description}</div>
    <div className="relative my-8 h-[180px] overflow-hidden rounded-lg lg:h-[360px] 2xl:h-[580px]">
      <iframe
        title={title}
        width="100%"
        height="100%"
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)
