import Image from "next/image"
import { FC } from "react"
import { Art } from "@components/ArtWorks"

const Thumbnail: FC<{ onClick: () => void; image: Art }> = ({ onClick, image }) => {
  return (
    <div className="relative block h-64 w-64 transform cursor-pointer overflow-hidden rounded-lg bg-white transition duration-150 ease-in-out hover:scale-125">
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

export default Thumbnail
