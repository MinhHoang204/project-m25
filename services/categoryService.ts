export interface Category {
    id: number;
    name: string;
  }
  
let categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Furniture' },
];
  
export const getCategories = (): Promise<Category[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(categories), 500);
    });
};
  
export const addCategory = (category: Category): Promise<void> => {
    return new Promise((resolve) => {
      categories.push(category);
      resolve();
    });
};
  
export const updateCategory = (category: Category): Promise<void> => {
    return new Promise((resolve) => {
      categories = categories.map((cat) =>
        cat.id === category.id ? category : cat
      );
      resolve();
    });
};
  
export const deleteCategory = (id: number): Promise<void> => {
    return new Promise((resolve) => {
      categories = categories.filter((cat) => cat.id !== id);
      resolve();
    });
};