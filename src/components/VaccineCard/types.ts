/* eslint-disable prettier/prettier */
export interface VaccineCardProps{
  title: string;
  shot: 'single-dose' | 'first-dose' | 'second-dose';
  date: string;
  onPress?: () => void;
}

export interface BadgeLeftProps{
  color: string;
}

export interface ChipsProps{
  color: string;
}
