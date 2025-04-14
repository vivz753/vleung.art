export interface Art {
  url: string
  medium: "oil" | "gouache" | "charcoal" | "pencil" | "marker" | "acrylic" | "oil pastel" | "digital"
  title: string
}

export const images: Art[] = [
  {
    url: "/images/lessons/student-work_annie.jpg",
    medium: "oil",
    title: "student work in oil",
  },
  {
    url: "/images/lessons/student-work_yachuan.jpg",
    medium: "oil",
    title: "student work in oil",
  },
  {
    url: "/images/lessons/student-work_wishwe1.jpg",
    medium: "oil",
    title: "student work in oil",
  },
  {
    url: "/images/lessons/student-work_wishwe2.jpg",
    medium: "oil",
    title: "student work in oil",
  },
  {
    url: "/images/lessons/student-joyce.jpg",
    medium: "oil pastel",
    title: "student work in oil",
  },
  {
    url: "/images/lessons/student-work_ikshaan.jpg",
    medium: "oil pastel",
    title: "student work in oil",
  },
]
