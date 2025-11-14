const products = [
  // New Arrivals
  {
    id: 1,
    name: 'Quilted Puffer Jacket',
    price: 129.99,
    salePrice: 99.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167d1e1beb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167d1e1beb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1551028719-00167d1e1beb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1551028719-00167d1e1beb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Outerwear',
    colors: ['Black', 'Beige', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Stay warm and stylish with this quilted puffer jacket. Perfect for cold weather with its water-resistant exterior and cozy insulation.',
    // New Arrivals only
    isNew: true,
    sku: 'JKT001'
  },
  
  // On Sale
  {
    id: 2,
    name: 'Wool Blend Coat',
    price: 249.99,
    salePrice: 199.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Coats',
    colors: ['Camel', 'Black', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A classic wool blend coat that combines style and warmth. Perfect for formal occasions or everyday wear during colder months.',
    sale: true,
    sku: 'COT002'
  },
  
  // Bestsellers
  {
    id: 3,
    name: 'Classic Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Jackets',
    colors: ['Blue', 'Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A timeless denim jacket that never goes out of style. Made from high-quality denim for durability and comfort.',
    bestseller: true,
    sku: 'JKT003'
  },
  
  // Regular Items
  {
    id: 4,
    name: 'Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'T-Shirts',
    colors: ['White', 'Black', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A comfortable and versatile cotton t-shirt that can be dressed up or down. Perfect for layering or wearing on its own.',
    // New Arrivals only
    isNew: true,
    sku: 'TSH004'
  },
  
  {
    id: 5,
    name: 'Slim Fit Chinos',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-3f65ffb0c465?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1542272604-3f65ffb0c465?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1542272604-3f65ffb0c465?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1542272604-3f65ffb0c465?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Pants',
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Classic slim fit chinos that offer both comfort and style. Perfect for both casual and semi-formal occasions.',
    // New Arrivals only
    isNew: true,
    sku: 'PAN005'
  },
  
  {
    id: 6,
    name: 'Knit Sweater',
    price: 79.99,
    salePrice: 59.99,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Sweaters',
    colors: ['Cream', 'Gray', 'Navy', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A cozy knit sweater perfect for layering during colder months. Made from soft, breathable material for all-day comfort.',
    // On Sale only
    sale: true,
    sku: 'SWT006'
  },
  
  {
    id: 7,
    name: 'Leather Crossbody Bag',
    price: 159.99,
    salePrice: 129.99,
    image: 'https://images.unsplash.com/photo-1556302011-78b3d3457610?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1556302011-78b3d3457610?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1556302011-78b3d3457610?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1556302011-78b3d3457610?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Bags',
    colors: ['Black', 'Cognac', 'Burgundy'],
    description: 'A stylish and practical leather crossbody bag with multiple compartments for your essentials. Perfect for everyday use.',
    // On Sale only
    sale: true,
    sku: 'BAG007'
  },
  
  {
    id: 8,
    name: 'Wool Beanie',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Accessories',
    colors: ['Black', 'Gray', 'Navy'],
    sizes: ['One Size'],
    description: 'A warm and stylish wool beanie to keep you cozy during the winter months. Made from high-quality, soft wool for maximum comfort.',
    // Bestsellers only
    bestseller: true,
    sku: 'ACC008'
  },

  // Extra New Arrivals
  {
    id: 9,
    name: 'Linen Summer Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1528701800489-20be3c30c1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1528701800489-20be3c30c1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Shirts',
    colors: ['White', 'Light Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight linen shirt perfect for warmer days and resort wear.',
    // New Arrivals only
    isNew: true,
    sku: 'SHI009'
  },

  // Extra On Sale
  {
    id: 10,
    name: 'High-Rise Mom Jeans',
    price: 89.99,
    salePrice: 69.99,
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Jeans',
    colors: ['Light Blue', 'Mid Blue'],
    sizes: ['24', '26', '28', '30', '32'],
    description: 'Vintage-inspired high-rise jeans with a relaxed fit through the leg.',
    // On Sale only
    sale: true,
    sku: 'JEA010'
  },

  // Extra Bestseller
  {
    id: 11,
    name: 'Everyday Sneakers',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    category: 'Shoes',
    colors: ['White', 'Black'],
    sizes: ['38', '39', '40', '41', '42', '43'],
    description: 'Minimalist sneakers designed for all-day comfort and everyday wear.',
    // Bestsellers only
    bestseller: true,
    sku: 'SHO011'
  }
];

export default products;
