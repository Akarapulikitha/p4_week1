import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 29.99, image:  '/https://therichero.com/cdn/shop/files/17copy_19655ad7-f0fe-4f6f-9532-e2bd98e29c16.jpg?v=1707480527&width=3000' },
  { id: 2, name: 'Product 2', price: 68.99, image:  'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24749794/2023/9/15/c8e3a8dc-ac5b-4d5a-998b-231d4609defb1694772337169-Mast--Harbour-Men-Shirts-4141694772336729-1.jpg' },
  { id: 3, name: 'Product 3', price: 25.99, image:  'https://thefoomer.in/cdn/shop/products/jpeg-optimizer_4_e4fbe428-c126-4685-a308-0fa48f884537_1200x1200.jpg?v=1682078123' },
  { id: 4, name: 'Product 4', price: 5.99, image:   '/https://thehouseofrare.com/cdn/shop/files/Prunos---beige.jpg?v=1734353064' },
  { id: 5, name: 'Product 5', price: 49.99, image:  '/https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg' },
  { id: 6, name: 'Product 6', price: 19.99, image:  '/https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/navy_blue_cotton_solid_shirts_for_men_base_02_05_2024_400x533.jpg' },
  { id: 7, name: 'Product 7', price: 29.99, image:  '/https://assets.ajio.com/medias/sys_master/root/20240716/0tWC/6696adfc1d763220fac88f77/-473Wx593H-466961091-olive-MODEL.jpg' },
  { id: 8, name: 'Product 8', price: 49.99, image:  '/https://pinksupply.in/cdn/shop/files/ink-blue-full-sleeve-pure-linen-shirt-for-men.jpg?v=1706434432&width=480' },
  { id: 9, name: 'Product 9', price: 19.99, image:  '/https://images-cdn.ubuy.co.in/66860cc5b5fd042393618a6d-mens-t-shirts-men-s-summer-fashion.jpg' },
  { id: 10, name: 'Product 10', price: 29.99, image: 'https://www.tistabene.com/cdn/shop/files/MSH-0037A.jpg' },
  { id: 11, name: 'Product 11', price: 49.99, image: 'https://m.media-amazon.com/images/I/415iB-ZUvZL._AC_UY1100_.jpg' },
  { id: 12, name: 'Product 12', price: 19.99, image: '/https://m.media-amazon.com/images/I/415iB-ZUvZL._AC_UY1100_.jpg' },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: 'center', margin: '1rem' }}>Featured Products</h2>
      <ProductList products={mockProducts} />
    </div>
  );
};

export default HomePage;
