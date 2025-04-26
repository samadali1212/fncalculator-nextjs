
export interface PriceInfo {
  amount: number;
  currency: string;
  year: number;
}

export interface Fact {
  title: string;
  value: string;
}

export interface ExpensiveThing {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
  price: PriceInfo;
  tags: string[];
  categoryId: string;
  categoryIds: string[];
  facts: Fact[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
}
