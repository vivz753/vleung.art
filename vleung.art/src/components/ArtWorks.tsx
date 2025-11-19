import { Medium, Art } from "@schemas/global"

const Content = () => {
  return (
    <div className="relative my-24 h-[240px] w-full overflow-hidden rounded-lg lg:h-[480px] 2xl:h-[580px]">
      <iframe
        title={"Italian Foodtruck"}
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/cFShsVvz1rc?si=pKr0bT1sVtHWSzt8"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
export const projects: Art[] = [
  // *** DIGITAL
  {
    url: "/images/art/Truck_Daylight_0.png", // thumbnail img (prefer .webp, small size)
    images: [
      "/images/art/Truck_Daylight_0.png",
      "/images/art/Truck_Daylight_1.png",
      "/images/art/Truck_Nightlight_0.png",
      "/images/art/Truck_Nightlight_1.png",
    ], // a collection of images to show process or different angles of the piece
    medium: Medium.THREED,
    title: "Italian Foodtruck 3D Model",
    content: <Content />,
  },
  {
    url: "/images/art/plein-air-sunny-day_digital.png",
    medium: Medium.TWOD,
    title: "Plein Air Sunny Day in digital",
  },
  {
    url: "/images/art/plein-air-cloudy_digital.png",
    medium: Medium.TWOD,
    title: "Plein Air Cloudy in digital",
  },
  {
    url: "/images/art/plein-air-sunset_digital.png",
    medium: Medium.TWOD,
    title: "Plein Air Sunset in digital",
  },
  {
    url: "/images/art/eggy-pinky_digital.png",
    medium: Medium.TWOD,
    title: "Eggy and Pinky in digital",
  },
  {
    url: "/images/art/lighting-fundamentals-hw4_digital.png",
    medium: Medium.TWOD,
    title: "Lighting 4 homework in digital",
  },
  {
    url: "/images/art/lighting-fundamentals-hw3_digital.png",
    medium: Medium.TWOD,
    title: "Lighting 3 homework in digital",
  },
  {
    url: "/images/art/lighting-fundamentals-hw2_digital.png",
    medium: Medium.TWOD,
    title: "Lighting 2 homework in digital",
  },
  {
    url: "/images/art/lighting-fundamentals-hw1_digital.png",
    medium: Medium.TWOD,
    title: "Lighting 1 homework in digital",
  },
  {
    url: "/images/art/marianne_digital.png",
    medium: Medium.TWOD,
    title: "Marianne in digital",
  },
  {
    url: "/images/art/prafull-sawant_digital.png",
    medium: Medium.TWOD,
    title: "Prafull Sawant study in digital",
  },
  {
    url: "/images/art/baby-monkey_digital.png",
    medium: Medium.TWOD,
    title: "baby monkey in digital",
  },
  {
    url: "/images/art/queens-gambit_digital.png",
    medium: Medium.TWOD,
    title: "queens gambit in digital",
  },
  // {
  // 	url: "/images/art/utah_digital.png",
  // 	medium: Medium.TWOD,
  // 	title: "friends in utah in digital",
  // },
  // {
  // 	url: "/images/art/raven-starfire_digital.jpg",
  // 	medium: Medium.TWOD,
  // 	title: "raven and star fire in digital",
  // },
  // {
  // 	url: "/images/art/little-nightmarees_digital.png",
  // 	medium: Medium.TWOD,
  // 	title: "little nightmares in digital",
  // },

  // *** TRADITIONAL
  {
    url: "/images/art/stilllife-pumpkininhalercandle-oil.jpg",
    medium: Medium.OIL,
    title: "Still life: Pumpkin, Mask, Candle",
  },
  {
    url: "/images/art/stilllife-vasemangochili-oil.jpg",
    medium: Medium.OIL,
    title: "Still life: Vase, Mango, Chili",
  },
  {
    url: "/images/art/stilllife-vasepearapple-oil.jpg",
    medium: Medium.OIL,
    title: "Still life: Vase, Pear, Apple",
  },
  // {
  //   url: "/images/art/stilllife-winegudetamapersimmon-oil.jpg",
  //   medium: Medium.OIL,
  //   title: "duck in oil",
  // },
  // {
  //   url: "/images/art/stilllife-vaseapplelemon-oil-glazing.jpg",
  //   medium: Medium.OIL,
  //   title: "duck in oil",
  // },
  // {
  //   url: "/images/art/stilllife-vaseapplelemon-oil-allaprima.jpg",
  //   medium: Medium.OIL,
  //   title: "duck in oil",
  // },
  {
    url: "/images/art/stilllife-femalecast-oil.jpg",
    medium: Medium.OIL,
    title: "Female cast",
  },
  {
    url: "/images/art/stilllife-pears-bw.jpg",
    medium: Medium.OIL,
    title: "Still life: Pears (black & white)",
  },
  {
    url: "/images/art/duck_oil.png",
    medium: Medium.OIL,
    title: "Duck",
  },
  {
    url: "/images/art/jose-doge_oil.png",
    medium: Medium.OIL,
    title: "Jose as a superior doge",
  },
  {
    url: "/images/art/stilllife-banana-oil.png",
    medium: Medium.OIL,
    title: "Still life: Banana, Cloth, Plushie",
  },
  {
    url: "/images/art/lady-portrait_oil.jpg",
    medium: Medium.OIL,
    title: "Lady",
  },
  {
    url: "/images/art/mimi-portrait_oil.png",
    medium: Medium.OIL,
    title: "Mimi (my cat)",
  },
  {
    url: "/images/art/playful-cat_oil.png",
    medium: Medium.OIL,
    title: "Playful cat",
  },
  {
    url: "/images/art/gary-gudetama_gouache.png",
    medium: Medium.GOUACHE,
    title: "Gary X Gudetama",
  },
  {
    url: "/images/art/mimi-drop-paint_acrylic.png",
    medium: Medium.ACRYLIC,
    title: "Psycho Mimi",
  },
  {
    url: "/images/art/ruth-bader-ginsberg_oil.jpg",
    medium: Medium.OIL,
    title: "Ruth Bader Ginsberg",
  },
  {
    url: "/images/art/anthony-bourdain_oil.jpg",
    medium: Medium.OIL,
    title: "Anthony Bourdain",
  },
  {
    url: "/images/art/froggy_gouache.jpg",
    medium: Medium.GOUACHE,
    title: "frog in gouache",
  },
  {
    url: "/images/art/vintage-ray_gouache.jpg",
    medium: Medium.GOUACHE,
    title: "portrait in gouache",
  },
  // {
  //   url: "/images/art/back-muscles_charcoal.jpg",
  //   medium: Medium.CHARCOAL,
  //   title: "back muscles in charcoal",
  // },
  {
    url: "/images/art/child-portrait_charcoal.jpg",
    medium: Medium.CHARCOAL,
    title: "Child",
  },
  {
    url: "/images/art/man-portrait_charcoal.png",
    medium: Medium.CHARCOAL,
    title: "Man",
  },
  {
    url: "/images/art/nude-model_charcoal.jpg",
    medium: Medium.CHARCOAL,
    title: "Nude Woman",
  },
  // {
  //   url: "/images/art/old-man_charcoal.jpg",
  //   medium: Medium.CHARCOAL,
  //   title: "old man in charcoal",
  // },
  {
    url: "/images/art/teen-portrait_charcoal.jpg",
    medium: Medium.CHARCOAL,
    title: "Teen",
  },
  // {
  //   url: "/images/art/skull.jpg",
  //   medium: Medium.MARKER,
  //   title: "skull in marker",
  // },
]

export default projects
