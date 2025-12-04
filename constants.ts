import { TeamMember, Manifesto, ServiceItem, NavigationLink } from './types';

export const NAV_LINKS: NavigationLink[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Nuestra Identidad", href: "#manifesto" },
  { label: "Comité Local", href: "#leadership" },
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#footer" }
];

export const MANIFESTO_DATA: Manifesto = {
  title: "Raíces y Futuro",
  content: "Mariscala no es solo un lugar en el mapa, es el corazón de nuestra historia compartida. Creemos en la tecnología como puente para unir a los paisanos que se fueron con los que aquí seguimos. Este portal es un tributo a nuestras familias y una herramienta para el progreso.",
  values: ["Tradición", "Unidad", "Transparencia", "Servicio"]
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    role: "Coordinación del Proyecto",
    name: "Lic. Roberto Martínez",
    description: "Vecino de la comunidad impulsando la conectividad digital para nuestra gente.",
    image_placeholder: "https://picsum.photos/id/1005/400/400"
  },
  {
    role: "Representación Vecinal",
    name: "Comité de Barrio",
    description: "Voz y voto de las familias locales, asegurando que nuestras costumbres perduren.",
    image_placeholder: "https://picsum.photos/id/1011/400/400"
  },
  {
    role: "Cultura y Tradición",
    name: "Mtra. Elena García",
    description: "Promotora de nuestras fiestas patronales y guardiana del archivo histórico.",
    image_placeholder: "https://picsum.photos/id/1027/400/400"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  { label: "Sitios de Taxi", iconType: 'transport' },
  { label: "Centro de Salud", iconType: 'emergency' },
  { label: "Mercado Municipal", iconType: 'commerce' },
  { label: "Parajes y Fiestas", iconType: 'tourism' }
];

export const SOCIAL_IMAGES = [
  "https://picsum.photos/id/1015/600/600",
  "https://picsum.photos/id/1016/600/800",
  "https://picsum.photos/id/1018/600/600",
  "https://picsum.photos/id/1019/600/800"
];