export default function handler(req:any, res:any) {
    const products = [
      { id: 1, name: 'Product 1', price: 100, imageUrl: '/images/product1.jpg' },
      { id: 2, name: 'Product 2', price: 150, imageUrl: '/images/product2.jpg' },
      { id: 3, name: 'Product 3', price: 200, imageUrl: '/images/product3.jpg' },
    ];
    
    res.status(200).json(products);
}