import { forwardRef } from "react"
import clsx from "clsx"
import Image from "next/image"
import { Art } from "@components/ArtWorks"

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
        <div className="flex h-full w-full flex-row items-center justify-center">
          <div className="relative flex h-full w-full items-center justify-center p-4 md:p-8 lg:p-32">
            <div className="relative flex h-full w-full rounded-lg bg-white">
              <Image alt={image.title} fill style={{ objectFit: "contain" }} src={image.url} />
            </div>
            <button
              onClick={() => onPrev()}
              className="absolute left-2 m-4 flex h-4 w-4 min-w-max shrink-0 items-center justify-center rounded-full bg-yellow-600 p-4 lg:left-32 lg:h-8 lg:w-8 lg:p-8"
            >
              <span className="w-full cursor-pointer text-white">{`< prev`}</span>
            </button>
            <button
              onClick={onClose}
              className="absolute top-8 flex h-4 w-4 min-w-max shrink-0 items-center justify-center rounded-full bg-yellow-600 p-4 lg:top-24 lg:-mt-5 lg:h-8 lg:w-8 lg:p-8"
            >
              <span className="w-full cursor-pointer text-white">X close</span>
            </button>
            <button
              onClick={() => onNext()}
              className="absolute right-2 m-4 flex h-4 w-4 min-w-max shrink-0 items-center justify-center rounded-full bg-yellow-600 p-4 lg:right-32 lg:h-8 lg:w-8 lg:p-8"
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

export default Modal
