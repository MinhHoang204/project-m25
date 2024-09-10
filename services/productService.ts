export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
  
let products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000, description: 'A high-performance laptop' },
    { id: 2, name: 'Smartphone', price: 500, description: 'A fast smartphone' },
];
  
export const getProducts = (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });
};
  
export const addProduct = (product: Product): Promise<void> => {
    return new Promise((resolve) => {
      products.push(product);
      resolve();
    });
};
  
export const updateProduct = (product: Product): Promise<void> => {
    return new Promise((resolve) => {
      products = products.map((p) => (p.id === product.id ? product : p));
      resolve();
    });
};
  
export const deleteProduct = (id: number): Promise<void> => {
    return new Promise((resolve) => {
      products = products.filter((p) => p.id !== id);
      resolve();
    });
};