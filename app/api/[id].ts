export default function handler(req:any, res:any) {
    const { id } = req.query;
    const products = [
      { id: 1, name: 'Product 1', price: 100, description: 'Description for product 1', imageUrl: '/images/product1.jpg' },
      { id: 2, name: 'Product 2', price: 150, description: 'Description for product 2', imageUrl: '/images/product2.jpg' },
      { id: 3, name: 'Product 3', price: 200, description: 'Description for product 3', imageUrl: '/images/product3.jpg' },
    ];
  
    const product = products.find(p => p.id === parseInt(id as string));
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
}