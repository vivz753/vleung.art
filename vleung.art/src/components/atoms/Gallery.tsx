import { FC } from "react"
import { Art } from "@components/ArtWorks"
import Thumbnail from "@components/atoms/Thumbnail"

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

export default Gallery
