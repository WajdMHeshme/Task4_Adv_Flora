import type { ReactNode } from "react";

export interface NavProps<T> {
  logo: T;
  btnTitle: T;
}

export interface NavData<T> {
  label: T;
  link: T;
}

export interface SectionTitleProps<T> {
  title: T;
  desc: T;
}

export interface InfoCardsProps<T> {
  icon?: T;
  title: T;
  desc: T;
  styling?: T;
  infoCard?: T;
  delay?: T;
}

export interface TrendingCardsProps {
  img: string ;
  price: string ;
  title: string ;
  locationIcon: ReactNode ;
  info: string ;
  delay: string;
  dataAos: string;
}


type Category = 'Residential' | 'Commercial' | 'Agriculture' | 'Industrial';

export interface PropertyItem {
  id: number;
  imageUrl: string;
  category: Category;
  featured: boolean;
  has3D: boolean;
}
