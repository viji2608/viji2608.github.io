
export interface CodingProfile {
  name: string;
  username: string;
  description: string;
  stats: string;
  color: string;
  icon: string;
  url: string;
}

export interface CodingProfilesProps {
  nextSection: () => void;
  prevSection: () => void;
}
