import { useState, forwardRef, useEffect } from "react"
import clsx from "clsx"
import Image from "next/image"
import { Art } from "@schemas/global"
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid"

interface ModalProps {
  show: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  project: Art
  children?: React.JSX.Element
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ show, onClose, onPrev, onNext, children, project }, ref) => {
  const [img, setImg] = useState(project.images ? project.images[0] : project.url)

  useEffect(() => {
    setImg(project.url)
  }, [project])

  return (
    <div className={clsx("z-100 fixed top-0 h-full w-screen justify-center", show ? "flex" : "hidden")}>
      <div className="relative flex h-full w-full items-center justify-center">
        {/* TODO: fix the outer click to exit function */}
        <div
          onClick={() => {
            console.log("clicked")
            onClose()
          }}
          className="absolute h-full w-full bg-black opacity-70"
        />
        {/* <div  ref={ref} className="absolute bg-white rounded-xl inset-14 m-10 bg-contain bg-no-repeat bg-center"  style={{backgroundImage: `url(${activeproject})`}}>
        {children}
      </div> */}
        <div className="flex h-full w-full flex-row items-center justify-center">
          <div className="relative flex h-full w-full items-center justify-center p-4 md:p-8 lg:p-8">
            <div className="relative flex h-3/4 w-full items-center justify-center overflow-hidden rounded-md lg:h-full">
              <div className="relative inline-block h-full w-full flex-row overflow-hidden overflow-y-auto bg-white">
                <div className="relative flex h-full w-full overflow-hidden rounded-md">
                  <Image alt={project.title} fill style={{ objectFit: "contain" }} src={img} />
                </div>
                {/* Title */}
                <div className="absolute top-0 flex w-full items-center">
                  {project.title && <p className="w-full bg-black/50 p-2 text-center text-white">{project.title}</p>}
                  <button
                    onClick={onClose}
                    className="absolute right-1 flex min-w-max shrink-0 items-center justify-center p-1"
                  >
                    <span className="flex w-full cursor-pointer flex-row items-center text-white">
                      <span className="text-sm underline">close</span>
                      <XMarkIcon className="mt-1 size-5 text-white" />
                    </span>
                  </button>
                </div>
                <div className="absolute bottom-12 flex w-full flex-wrap items-center justify-center opacity-75 lg:bottom-4 lg:flex-row">
                  <div className=" flex flex-wrap">
                    {/* Thumbnails */}
                    {project.images &&
                      project.images.length &&
                      project.images.map((i) => (
                        <div
                          onClick={() => setImg(i)}
                          className={clsx(
                            "relative flex h-16 w-16 cursor-pointer rounded-sm lg:h-28 lg:w-28",
                            i === img ? "brightness-125" : " brightness-75 saturate-50"
                          )}
                        >
                          <Image alt={project.title} fill style={{ objectFit: "contain" }} src={i} />
                        </div>
                      ))}
                  </div>
                </div>
                {project.content && project.content}
              </div>
              <button
                onClick={() => onPrev()}
                className="absolute left-1 flex shrink-0 items-center justify-center bg-black/40 p-2"
              >
                <span className="w-full cursor-pointer text-white">
                  <ChevronLeftIcon className="size-5 text-white lg:size-7" />
                </span>
              </button>

              <button
                onClick={() => onNext()}
                className="absolute right-1 flex min-w-max shrink-0 items-center justify-center bg-black/40 p-2"
              >
                <span className="w-full cursor-pointer text-white">
                  <ChevronRightIcon className="size-5 text-white lg:size-7" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

Modal.displayName = "Modal"

export default Modal
