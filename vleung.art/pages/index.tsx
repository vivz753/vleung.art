import type { NextPage } from "next"
import Head from "next/head"
import { FC, useState, forwardRef } from "react"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import Rainbow from "../src/components/molecules/Rainbow"

const Home: NextPage = () => {
  const [activeImage, setActiveImage] = useState<Art>(traditionalImages[0])
  const [showModal, setShowModal] = useState(false)
  const title = `Vivian's Portfolio`

  const onNext = (): void => {
    const currIndex = images.findIndex((i) => i === activeImage)
    const nextIndex = currIndex < images.length - 1 ? currIndex + 1 : 0
    console.log("setting indx to:", nextIndex)
    setActiveImage(() => images[nextIndex])
  }
  const onPrev = (): void => {
    const currIndex = images.findIndex((i) => i === activeImage)
    const prevIndex = currIndex > 0 ? currIndex - 1 : images.length - 1
    console.log("setting indx to:", prevIndex)
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
            <button className="ml-8 w-56 rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500">
              Lighting Series
            </button>
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

interface Art {
  url: string
  medium: "oil" | "gouache" | "charcoal" | "pencil" | "marker" | "digital"
  title: string
}
const images: Art[] = [
  {
    url: "/images/art/froggy.jpg",
    medium: "gouache",
    title: "frog in gouache",
  },
  {
    url: "/images/art/VintageRayCommission.jpg",
    medium: "gouache",
    title: "portrait in gouache",
  },
  {
    url: "/images/art/skull.jpg",
    medium: "marker",
    title: "skull in marker",
  },
  {
    url: "/images/art/BabyMonkeyPostcard.PNG",
    medium: "digital",
    title: "baby moneky in digital",
  },
  {
    url: "/images/art/UtahComic.PNG",
    medium: "digital",
    title: "friends in utah in digital",
  },
  {
    url: "/images/art/ravenxstarfire.JPG",
    medium: "digital",
    title: "raven and star fire in digital",
  },
]

const traditionalImages = images.filter((x) => x.medium !== "digital")
const digitalImages = images.filter((x) => x.medium === "digital")
console.log("traditional", traditionalImages)
console.log("digital", digitalImages)

const Gallery: FC<{ setActiveImage: (image: Art) => void; setShowModal: (show: boolean) => void; images: Art[] }> = ({
  setActiveImage,
  setShowModal,
  images,
}) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-10">
      {images.map((image, i) => (
        <Thumbnail
          image={image}
          key={i}
          onClick={() => {
            setActiveImage(image)
            setShowModal(true)
          }}
        />
      ))}
    </div>
  )
}

interface ModalProps {
  show: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  image: Art
  children?: JSX.Element
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ show, onClose, onPrev, onNext, children, image }, ref) => {
  return (
    <div className={clsx("fixed top-0 h-full w-screen justify-center", show ? "flex" : "hidden")}>
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          onClick={() => {
            console.log("clicked")
            onClose()
          }}
          className="absolute h-full w-full bg-black opacity-70"
        />
        {/* <div  ref={ref} className="absolute bg-white rounded-xl inset-14 m-10 bg-contain bg-no-repeat bg-center"  style={{backgroundImage: `url(${activeImage})`}}>
        {children}
      </div> */}
        <div className="flex h-full w-full flex-row items-center justify-center border">
          <div className="relative flex h-full w-full items-center justify-center p-32">
            <div className="relative flex h-full w-full rounded-lg bg-white">
              <Image alt={image.title} fill style={{ objectFit: "contain" }} src={image.url} />
            </div>
            <button
              onClick={() => onPrev()}
              className="absolute left-32 m-4 flex h-8 w-8 min-w-max shrink-0 items-center justify-center rounded-full bg-yellow-600 p-8"
            >
              <span className="w-full cursor-pointer text-white">{`< prev`}</span>
            </button>
            <button
              onClick={onClose}
              className="absolute top-24 -mt-5 flex h-8 w-8 min-w-max shrink-0 items-center justify-center rounded-full bg-yellow-600 p-8"
            >
              <span className="w-full cursor-pointer text-white">X close</span>
            </button>
            <button
              onClick={() => onNext()}
              className="absolute right-32 m-4 flex h-8 w-8 min-w-max shrink-0 items-center justify-center rounded-full bg-yellow-600 p-8"
            >
              <span className="w-full cursor-pointer text-white">{`next >`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

Modal.displayName = "Modal"

const Thumbnail: FC<{ onClick: () => void; image: Art }> = ({ onClick, image }) => {
  return (
    <div className="relative block h-64 w-64 transform cursor-pointer rounded-lg bg-white transition duration-150 ease-in-out hover:scale-125">
      <Image
        alt={image.title}
        onClick={onClick}
        className="contrast-125 filter"
        src={image.url}
        style={{ objectFit: "contain" }}
        fill
      />
    </div>
  )
}
