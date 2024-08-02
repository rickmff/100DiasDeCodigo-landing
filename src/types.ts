export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface BeneficiosItem {
  description: string;
  icon: string;
}

export interface LinksUteisItem {
  name: string;
  url: string;
  thumbnail_url: string;
  description: string;
  tags?: Array<string>;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}
