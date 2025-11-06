import { useState, forwardRef, useEffect } from "react"
import clsx from "clsx"
import Image from "next/image"
import { Art } from "@schemas/global"
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { scrollToElement } from "@helpers/index"

interface ModalProps {
  show: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  project: Art
  children?: React.JSX.Element
}

const contentId = "content"

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
          {/* Fixed top bar */}
          <div className="fixed left-0 top-0 z-[1] flex w-full items-center">
            {/* Title */}
            {project.title && <p className="w-full bg-black/35 p-8 text-center text-white lg:p-4">{project.title}</p>}
            {/* X Close */}
            <button
              onClick={onClose}
              className="absolute left-2 flex min-w-max shrink-0 items-center justify-center p-1 lg:left-12"
            >
              <span className="flex w-full cursor-pointer flex-row items-center text-white">
                <XMarkIcon className="mt-1 size-7 text-white" />
                <span className="hidden underline lg:flex">close</span>
              </span>
            </button>
          </div>
          <div className="relative flex h-full w-full items-center justify-center lg:mr-4">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md">
              <div className="relative inline-block h-full w-full flex-row overflow-hidden overflow-y-auto bg-black">
                <div className="relative flex h-full w-full overflow-hidden rounded-md">
                  <Image alt={project.title} fill style={{ objectFit: "contain" }} src={img} />
                </div>
                {/* View More */}
                {project.content && (
                  <button
                    onClick={() => scrollToElement(contentId)}
                    className="absolute bottom-0 z-[1] flex items-center"
                  >
                    <p className="w-full bg-white/15 p-4 text-center text-sm text-white underline">View More</p>
                  </button>
                )}
                {/* Thumbnails */}
                <div className="absolute bottom-12 flex w-full flex-wrap items-center justify-center opacity-65 lg:bottom-4 lg:flex-row">
                  <div className="flex flex-wrap gap-1">
                    {project.images &&
                      project.images.length &&
                      project.images.map((i) => (
                        <div
                          onClick={() => setImg(i)}
                          className={clsx(
                            "relative flex h-16 w-16 cursor-pointer rounded-sm lg:h-28 lg:w-28",
                            i === img ? "brightness-150" : " brightness-75 saturate-50"
                          )}
                        >
                          <Image alt={project.title} fill style={{ objectFit: "contain" }} src={i} />
                        </div>
                      ))}
                  </div>
                </div>
                {project.content && (
                  <div id={contentId} className="flex h-screen items-center justify-center">
                    {project.content}
                  </div>
                )}
              </div>
              <button
                onClick={() => onPrev()}
                className="absolute left-1 flex shrink-0 items-center justify-center bg-black/25 p-2 lg:left-8 lg:bg-white/15"
              >
                <span className="w-full cursor-pointer text-white">
                  <ChevronLeftIcon className="size-5 text-white lg:size-7" />
                </span>
              </button>
              <button
                onClick={() => onNext()}
                className="absolute right-1 flex min-w-max shrink-0 items-center justify-center bg-black/25 p-2 lg:right-8 lg:bg-white/15"
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
