import { FC } from "react"
import Thumbnail from "@/src/components/core/Thumbnail"
import { Medium, Art } from "@schemas/global"

const Gallery: FC<{
  setActiveProject: (project: Art) => void
  setShowModal: (show: boolean) => void
  projects: Art[]
  filter: Medium | null
}> = ({ setActiveProject, setShowModal, projects, filter }) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-6 md:gap-10">
      {projects.map((project, i) => (
        <Thumbnail
          highlight={project.medium === filter}
          project={project}
          key={i}
          onClick={() => {
            setActiveProject(project)
            setShowModal(true)
          }}
        />
      ))}
    </div>
  )
}

export default Gallery
