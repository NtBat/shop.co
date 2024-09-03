export type Product = {
  id: string;
  title: string;
  price: number;
  priceBefore?: number;
  discountValue?: number;
  imageUrl: string;
  rating: number;
  link: string;
  size: string[];
  color: string[];
  category: string;
};
