import type { NextPage } from "next"
import Head from "next/head"
import { FC, useState, forwardRef } from "react"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import Rainbow from "@/src/components/core/Rainbow"
import { images, Art } from "@components/ArtWorks"
import Gallery from "@/src/components/core/Gallery"
import Modal from "@/src/components/core/Modal"

const traditionalImages = images.filter((x) => x.medium !== "digital")
const digitalImages = images.filter((x) => x.medium === "digital")
console.log("traditional", traditionalImages)
console.log("digital", digitalImages)

const Home: NextPage = () => {
  const [activeImage, setActiveImage] = useState<Art>(traditionalImages[0])
  const [showModal, setShowModal] = useState(false)
  const title = `Vivian's Portfolio`

  const onNext = (): void => {
    const currIndex = images.findIndex((i) => i === activeImage)
    const nextIndex = currIndex < images.length - 1 ? currIndex + 1 : 0
    setActiveImage(() => images[nextIndex])
  }
  const onPrev = (): void => {
    const currIndex = images.findIndex((i) => i === activeImage)
    const prevIndex = currIndex > 0 ? currIndex - 1 : images.length - 1
    setActiveImage(() => images[prevIndex])
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Oil painter, digital artist, cat lover." />
        <link rel="icon" href="/images/rainbows/rainbow-blue-svgrepo-com.svg" />
      </Head>
      <div className="flex h-full w-full flex-row">
        {/* Categories */}
        <div className="flex w-[320px] flex-col">
          <div className="sticky top-0 flex flex-col items-center justify-start gap-8 p-20">
            <Link
              href="/#traditional"
              className="w-64 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500"
            >
              Traditional
            </Link>
            <button className="ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">Oil</button>
            <button className="ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">
              Gouache
            </button>
            <button className="ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">
              Charcoal
            </button>
            <Link href="#digital" className="w-64 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">
              Digital
            </Link>
            <button className="ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">2d</button>
            <button className="ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">3d</button>
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
        <div className="flex h-full w-full items-center justify-center p-8">
          <div className="flex w-full flex-col items-center">
            <Rainbow />
            <span className="text-3xl">Portfolio</span>

            <div className="flex h-full w-full flex-col justify-center gap-5 rounded-xl bg-yellow-700 p-20">
              <h1 id="traditional" className="m-12 text-3xl text-white">
                Traditional
              </h1>
              <Gallery setActiveImage={setActiveImage} setShowModal={setShowModal} images={traditionalImages} />
              <h1 id="digital" className="m-12 text-3xl text-white">
                Digital
              </h1>
              <Gallery setActiveImage={setActiveImage} setShowModal={setShowModal} images={digitalImages} />
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} image={activeImage} onNext={onNext} onPrev={onPrev} />
    </>
  )
}

export default Home
