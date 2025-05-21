import type { NavData } from "./Types/Type";
import type { InfoCardsProps } from "./Types/Type";
import type { TrendingCardsProps } from "./Types/Type";
import type { PropertyItem } from "./Types/Type";
import icon1 from "./assets/Group (1).svg";
import icon2 from "./assets/Group (2).svg";
import icon3 from "./assets/Group (3).svg";
import img1 from "./assets/Rectangle 50.png"
import img2 from "./assets/Rectangle 50 (1).png"
import img3 from "./assets/Rectangle 50 (2).png"
import img4 from "./assets/Rectangle 50 (3).png"
import img5 from "./assets/Rectangle 51.png"
import img6 from "./assets/Rectangle 52.png"

import img7 from './assets/Image 01.jpg'
import img8 from './assets/Image 02.jpg'
import img9 from './assets/Image 03.jpg'

import { CiLocationOn } from "react-icons/ci";
export const NavLinkData: NavData<string>[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Service",
    link: "/service",
  },
  {
    label: "New Property",
    link: "/property",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const InfoCardsData: InfoCardsProps<string>[] = [
  {
    icon: icon1,
    title: "Search Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    infoCard: "infoCard",
    delay: "100",
  },
  {
    icon: icon3,
    title: "Search Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    styling: "styling",
    delay: "300",
  },
  {
    icon: icon2,
    title: "Search Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    infoCard: "infoCard",
    delay: "600",
  },
];


export const TrendingCardData: TrendingCardsProps[] =[
{
  img: img1,
  price: "$300000",
  title: "Luxury Apartment inCalifornia",
  locationIcon: <CiLocationOn />,
  info: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  delay: "100",
  dataAos: "fade-down-right",
},
{
  img: img2,
  price: "$300000",
  title: "Luxury Apartment inCalifornia",
  locationIcon: <CiLocationOn />,
  info: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  delay: "400",
  dataAos: "fade-down",
},
{
  img: img3,
  price: "$300000",
  title: "Luxury Apartment inCalifornia",
  locationIcon: <CiLocationOn />,
  info: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  delay: "600",
  dataAos: "fade-down-left",
},
{
  img: img4,
  price: "$250000",
  title: "Luxury Apartment inCalifornia",
  locationIcon: <CiLocationOn />,
  info: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  delay: "800",
  dataAos: "fade-down-right",
},
{
  img: img5,
  price: "$250000",
  title: "Luxury Apartment inCalifornia",
  locationIcon: <CiLocationOn />,
  info: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  delay: "1000",
  dataAos: "fade-down",
},
{
  img: img6,
  price: "$250000",
  title: "Luxury Apartment inCalifornia",
  locationIcon: <CiLocationOn />,
  info: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  delay: "1300",
  dataAos: "fade-down-left",
},
]

export const items: PropertyItem[] = [
  { id: 1,  imageUrl: img7, category: 'Residential', featured: true, has3D: true , },
  { id: 2,  imageUrl: img8, category: 'Residential', featured: false, has3D: true },
  { id: 3,  imageUrl: img9, category: 'Residential', featured: true, has3D: true },
  { id: 4,  imageUrl: img7, category: 'Agriculture', featured: false, has3D: false },
  { id: 5,  imageUrl: img2, category: 'Agriculture', featured: false, has3D: false },
  { id: 6,  imageUrl: img3, category: 'Agriculture', featured: false, has3D: false },
  { id: 7,   imageUrl: img9, category: 'Industrial', featured: true, has3D: false },
  { id: 8,   imageUrl: img2, category: 'Industrial', featured: true, has3D: false },
  { id: 9,   imageUrl: img1, category: 'Industrial', featured: true, has3D: false },
  { id: 10,   imageUrl: img1, category: 'Commercial', featured: true, has3D: false },
  { id: 11,   imageUrl: img2, category: 'Commercial', featured: true, has3D: false },
  { id: 12,   imageUrl: img4, category: 'Commercial', featured: true, has3D: false },
];
// Commercial