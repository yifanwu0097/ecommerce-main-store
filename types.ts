export interface Product {
  id: string;
  category?: Category;
  name: string;
  price: string;
  description: string;
  isFeatured?: boolean;
  rating: number;
  videos: Video[];
  posters: Poster[];
  specifications: Specifications[];
  requiredSystems: RequiredSystems[];
  inTheBoxs: InTheBoxs[];
  filaments: Filament[];
  warranties: Warranty[];
  // size: Size;
  // color: Color;
  images: Image[];
}
export interface Filament {
  id: string;
  name: string;
  value: number;
  productId: string;
}
export interface Warranty {
  id: string;
  value: number;
  duration: number;
  productId: string;
}
export interface Image {
  id: string;
  url: string;
}
export interface Video {
  id: string;
  url: string;
}
export interface Poster {
  id: string;
  url: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Specifications {
  name: string;
  value: string;
}

export interface RequiredSystems {
  name: string;
}
export interface InTheBoxs {
  name: string;
}
// export interface Size {
//   id: string;
//   name: string;
//   value: string;
// }

// export interface Color {
//   id: string;
//   name: string;
//   value: string;
// }

export interface TempData {
  href: string;
  id: number;
  label: string;
  active: boolean;
}
export interface Order {
  id: string;
  orderNumber: string;
  isPaid: boolean;
  phone: string;
  address: string;
  name: string;
  email: string;
  createdAt: string;
  orderItems: OrderItem[];
}
export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product: Product;
  filament: Filament;
  warranty: Warranty;
}
