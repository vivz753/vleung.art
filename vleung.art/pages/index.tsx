import type { NextPage } from "next"
import Head from "next/head"
import { FC, useState, forwardRef } from "react"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import Rainbow from "@/src/components/core/Rainbow"
import { projects } from "@components/ArtWorks"
import Gallery from "@/src/components/core/Gallery"
import Modal from "@/src/components/core/Modal"
import { Medium, Art } from "@schemas/global"
import { scrollToElement } from "@helpers/index"

const title = `Vivian's Portfolio`
const traditionalProjects = projects.filter((x) => x.medium !== Medium.TWOD && x.medium !== Medium.THREED)
const digitalProjects = projects.filter((x) => x.medium === Medium.TWOD || x.medium === Medium.THREED)
console.log("traditional", traditionalProjects)
console.log("digital", digitalProjects)
const traditionalFilters = [Medium.OIL, Medium.GOUACHE, Medium.CHARCOAL, Medium.WATERCOLOR]
const digitalFilters = [Medium.TWOD, Medium.THREED]

const Home: NextPage = () => {
  const [filter, setFilter] = useState<Medium | null>(null)
  const [activeProject, setActiveProject] = useState<Art>(traditionalProjects[0])
  const [showModal, setShowModal] = useState(false)

  const onNext = (): void => {
    const currIndex = projects.findIndex((i) => i === activeProject)
    const nextIndex = currIndex < projects.length - 1 ? currIndex + 1 : 0
    setActiveProject(() => projects[nextIndex])
  }
  const onPrev = (): void => {
    const currIndex = projects.findIndex((i) => i === activeProject)
    const prevIndex = currIndex > 0 ? currIndex - 1 : projects.length - 1
    setActiveProject(() => projects[prevIndex])
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Oil painter, digital artist, cat lover." />
        <link rel="icon" href="/images/rainbows/rainbow-blue-svgrepo-com.svg" />
      </Head>
      <div className="flex h-full min-h-screen w-full flex-row pb-24 pt-[72px]">
        {/* Categories */}
        <div className="hidden flex-col sm:w-[320px] lg:flex">
          <div className="sticky top-0 flex flex-col items-center justify-start gap-4 p-20">
            <Link
              href="/#traditional"
              className="w-64 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500"
            >
              Traditional
            </Link>
            {traditionalFilters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f)
                  scrollToElement(f)
                }}
                className={clsx(
                  f === filter && "outline outline-2 outline-offset-2 outline-yellow-300",
                  "ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500"
                )}
              >
                {f}
              </button>
            ))}
            <Link href="#digital" className="w-64 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">
              Digital
            </Link>
            {digitalFilters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f)
                  scrollToElement(f)
                }}
                className={clsx(
                  f === filter && "outline outline-2 outline-offset-2 outline-yellow-300",
                  "ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500"
                )}
              >
                {f}
              </button>
            ))}
            <Link href="#software" className="w-64 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">
              Softtware
            </Link>
            {/*  Chat Dialogue */}
            <div className="m-16 flex items-center justify-center">
              <div
                className="group relative flex h-32 w-32 rounded-full bg-cover bg-right"
                style={{ backgroundImage: `url('/images/profile_mimi.jpg')` }}
              >
                <div
                  className={clsx(
                    "absolute -top-12 right-0 translate-x-full rounded-md border border-yellow-900  p-4 text-yellow-900 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  )}
                >
                  hello
                </div>
              </div>
            </div>
          </div>
          {/* For sticky purposes, needs empty box as sibling */}
          <div className="flex h-full w-full" />
        </div>
        {/* Galleries */}
        <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
          <div className="flex w-full flex-col items-center gap-4 lg:gap-10">
            <div className="flex flex-col items-center">
              <Rainbow />
              <span className="text-3xl">Portfolio</span>
            </div>
            <div className="flex h-full w-full flex-col justify-center gap-5 rounded-xl bg-yellow-700 p-2 pb-8 sm:p-8 lg:p-16">
              <h1 id="traditional" className="my-8 text-center text-3xl text-white lg:mb-12 lg:text-left">
                Traditional
              </h1>
              <Gallery
                filter={filter}
                setActiveProject={setActiveProject}
                setShowModal={setShowModal}
                projects={traditionalProjects}
              />
              <h1 id="digital" className="my-8 text-center text-3xl text-white lg:my-12 lg:text-left">
                Digital
              </h1>
              <Gallery
                filter={filter}
                setActiveProject={setActiveProject}
                setShowModal={setShowModal}
                projects={digitalProjects}
              />
              <h1 id="software" className="my-8 text-center text-3xl text-white lg:my-12 lg:text-left">
                Software
              </h1>
              <div className="flex w-full max-w-[1280px] flex-1 flex-col gap-14">
                <Link href="/software/flamenco" className="group flex flex-col gap-4">
                  <div className="drop-shadow-pink-300 h-[180px] w-full rounded-2xl bg-[url(/images/software/flamenco.webp)] bg-cover bg-top bg-no-repeat outline-pink-100 saturate-[.8] transition duration-150 ease-in-out group-hover:scale-105 group-hover:drop-shadow-xl group-hover:saturate-[1] lg:h-[360px]"></div>
                  <label className="cursor-pointer text-xl font-semibold text-orange-200 group-hover:text-orange-100">
                    Open-source development on Flamenco @ Blender
                  </label>
                </Link>
                <Link href="/software/personal" className="group flex flex-col gap-4">
                  <div className="drop-shadow-pink-300 h-[180px] w-full rounded-2xl bg-black bg-[url(/images/software/pumpkin-cat-game.png)] bg-contain bg-top bg-no-repeat outline-pink-100 saturate-[.8] transition duration-150 ease-in-out group-hover:scale-105 group-hover:drop-shadow-xl group-hover:saturate-[1] lg:h-[360px]"></div>
                  <label className="cursor-pointer text-xl font-semibold text-orange-200 group-hover:text-orange-100">
                    Personal Projects
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        project={activeProject}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  )
}

export default Home
