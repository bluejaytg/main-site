export interface NavItem {
  title: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}