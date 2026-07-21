export interface BookEdition {
  id: 'hardcover' | 'paperback';
  title: string;
  price: number;
  shipping: string;
  note: string;
  description: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  rating: number;
  text: string;
  role?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  fallbackImage?: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
