
import { ExpensiveThing, Category, PriceInfo } from "../types/expensiveThings";
import { categories, expensiveThings } from "../data/expensiveThings";

export const getAllExpensiveThings = (): ExpensiveThing[] => {
  return Object.values(expensiveThings);
};

export const getExpensiveThingBySlug = (slug: string): ExpensiveThing | undefined => {
  return Object.values(expensiveThings).find(thing => thing.slug === slug);
};

export const getExpensiveThingsByCategory = (categoryId: string): ExpensiveThing[] => {
  return Object.values(expensiveThings).filter(thing => 
    thing.categoryIds.includes(categoryId) || thing.categoryId === categoryId
  );
};

export const getAllCategories = (): Category[] => {
  return categories;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const formatPrice = (price: PriceInfo): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price.amount);
};
