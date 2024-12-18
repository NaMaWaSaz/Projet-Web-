export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
  reviews: number;
  specs?: Array<{
    label: string;
    value: string;
  }>;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'seller' | 'admin';
}

export interface CartItem {
  product: Product;
  quantity: number;
}