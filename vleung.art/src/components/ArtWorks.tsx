import { Medium, Art } from "@schemas/global"

const RobotAwakeningContent = () => {
  return (
    <div className="relative my-24 h-[240px] w-full overflow-hidden rounded-lg lg:h-[480px] 2xl:h-[580px]">
      <iframe
        title={"Robot Awakening"}
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/x_DKgWtJE08"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
const ToastFactoryContent = () => {
  return (
    <div className="relative my-24 h-[240px] w-full overflow-hidden rounded-lg lg:h-[480px] 2xl:h-[580px]">
      <iframe
        title={"Toast Factory"}
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/SAmBJeq-SA4"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
const MonsterChestContent = () => {
  return (
    <div className="relative my-24 h-[240px] w-full overflow-hidden rounded-lg lg:h-[480px] 2xl:h-[580px]">
      <iframe
        title={"Monster Chest"}
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/7L7d3MgkgqQ"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
const ItalianFoodtruckContent = () => {
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
    url: "/images/art/RobotAwakening_right.png", // thumbnail img (prefer .webp, small size)
    images: ["/images/art/RobotAwakening_right.png", "/images/art/RobotAwakening_left.png"], // a collection of images to show process or different angles of the piece
    medium: Medium.THREED,
    title: "Robot Awakening 3D Model",
    content: <RobotAwakeningContent />,
  },
  {
    url: "/images/art/ToastFactory_left.png", // thumbnail img (prefer .webp, small size)
    images: [
      "/images/art/ToastFactory_left.png",
      "/images/art/ToastFactory_front.png",
      "/images/art/ToastFactory_back.png",
      "/images/art/ToastFactory_right.png",
    ], // a collection of images to show process or different angles of the piece
    medium: Medium.THREED,
    title: "Toast Factory 3D Model",
    content: <ToastFactoryContent />,
  },
  {
    url: "/images/art/MonsterChest_right1.png", // thumbnail img (prefer .webp, small size)
    images: [
      "/images/art/MonsterChest_right0.png",
      "/images/art/MonsterChest_right1.png",
      "/images/art/MonsterChest_right2.png",
      "/images/art/MonsterChest_left.png",
      "/images/art/MonsterChest_back.png",
    ], // a collection of images to show process or different angles of the piece
    medium: Medium.THREED,
    title: "Monster Chest 3D Model",
    content: <MonsterChestContent />,
  },
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
    content: <ItalianFoodtruckContent />,
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
  // TODO: Add watercolor medium

  {
    url: "/images/art/abandonedhouses-oil.jpg",
    medium: Medium.OIL,
    title: "Abandoned houses in Houtong Cat Village",
  },
  {
    url: "/images/art/decayingmotorcycle-oil.jpg",
    medium: Medium.OIL,
    title: "Decaying Motorcycle",
  },
  {
    url: "/images/art/catvillage-oil.jpg",
    medium: Medium.OIL,
    title: "Cat Village",
  },
  {
    url: "/images/art/landscape-chunkycloud-oil.jpg",
    medium: Medium.OIL,
    title: "Landscape study w/ chunky clouds",
  },
  {
    url: "/images/art/mystilllife-watercolor.jpg",
    medium: Medium.OIL,
    title: "Still life of 5 personal objects",
  },
  {
    url: "/images/art/sargeantstudy-watercolor.jpg",
    medium: Medium.OIL,
    title: "Study of Sargeant watercolor",
  },
  {
    url: "/images/art/sushituna-watercolor.jpg",
    medium: Medium.OIL,
    title: "Tuna Nigiri",
  },
  {
    url: "/images/art/fishingallen-watercolor.jpg",
    medium: Medium.OIL,
    title: "Fishing with Allen",
  },
  {
    url: "/images/art/halfmoonbaysunset-watercolor.jpg",
    medium: Medium.OIL,
    title: "Half Moon Bay Sunset",
  },
  {
    url: "/images/art/lassenemeraldlake-watercolor.jpg",
    medium: Medium.OIL,
    title: "Emerald Lake at Lassen Volcanic Park",
  },
  {
    url: "/images/art/minersloughsunset-watercolor.jpg",
    medium: Medium.OIL,
    title: "Miner Slough Sunset",
  },
  {
    url: "/images/art/backlit-windoworanges-watercolor.jpg",
    medium: Medium.OIL,
    title: "Backlit Window & Oranges",
  },
  {
    url: "/images/art/backlit-plantvase-watercolor.jpg",
    medium: Medium.OIL,
    title: "Backlit Plant vase",
  },
  {
    url: "/images/art/horse-watercolor.jpg",
    medium: Medium.OIL,
    title: "Horse study",
  },
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
