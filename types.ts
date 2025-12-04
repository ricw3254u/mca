export interface TeamMember {
  role: string;
  name: string;
  description: string;
  image_placeholder: string;
}

export interface Manifesto {
  title: string;
  content: string;
  values: string[];
}

export interface ServiceItem {
  label: string;
  iconType: 'transport' | 'emergency' | 'commerce' | 'tourism';
}

export interface NavigationLink {
  label: string;
  href: string;
}