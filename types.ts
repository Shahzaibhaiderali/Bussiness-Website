export interface NavItem {
  label: string;
  path: string;
}

export interface PricingPackage {
  name: string;
  price: number;
  features: string[];
  isBestValue?: boolean;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  iconName: string;
}