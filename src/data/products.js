// src/data/products.js
// 🧍 Men Products
import productm1 from "../assets/product-image/productm1.jpg";
import productm2 from "../assets/product-image/productm2.jpg";
import productm3 from "../assets/product-image/productm3.jpg";
import productm4 from "../assets/product-image/productm4.jpg";
import productm5 from "../assets/product-image/productm5.jpg";
import productm6 from "../assets/product-image/productm6.jpg";
import productm7 from "../assets/product-image/productm7.jpg";
import productm8 from "../assets/product-image/productm8.jpg";
import productm9 from "../assets/product-image/productm9.jpg";
import productm10 from "../assets/product-image/productm10.jpg";
import productm11 from "../assets/product-image/productm11.jpg";
import productm12 from "../assets/product-image/productm12.jpg";
import productm13 from "../assets/product-image/productm13.jpg";
import productm14 from "../assets/product-image/productm14.jpg";
import productm15 from "../assets/product-image/productm15.jpg";

//  Women Products
import productw1 from "../assets/product-image/productw1.jpg";
import productw2 from "../assets/product-image/productw2.jpg";
import productw3 from "../assets/product-image/productw3.jpg";
import productw4 from "../assets/product-image/productw4.jpg";
import productw5 from "../assets/product-image/productw5.jpg";
import productw6 from "../assets/product-image/productw6.jpg";
import productw7 from "../assets/product-image/productw7.jpg";
import productw8 from "../assets/product-image/productw8.jpg";
import productw9 from "../assets/product-image/productw9.jpg";
import productw10 from "../assets/product-image/productw10.jpg";
import productw11 from "../assets/product-image/productw11.jpg";
import productw12 from "../assets/product-image/productw12.jpg";
import productw13 from "../assets/product-image/productw13.jpg";
import productw14 from "../assets/product-image/productw14.jpg";
import productw15 from "../assets/product-image/productw15.jpg";
import productw16 from "../assets/product-image/productw16.jpg";
import productw17 from "../assets/product-image/productw17.jpg";

//  Sneakers
import sneaker1 from "../assets/product-image/sneakers1.jpg";
import sneaker2 from "../assets/product-image/sneakers2.jpg";
import sneaker3 from "../assets/product-image/sneakers3.jpg";
import sneaker4 from "../assets/product-image/sneakers4.jpg";

//  Bags
import bag1 from "../assets/product-image/bag1.jpg";
import bag2 from "../assets/product-image/bag2.jpg";
import bag3 from "../assets/product-image/bag3.jpg";
import bag4 from "../assets/product-image/bag4.jpg";
import bag5 from "../assets/product-image/bag5.jpg";

// 🧍 Unisex (productmw)
import productmw1 from "../assets/product-image/productmw1.jpg";
import productmw2 from "../assets/product-image/productmw2.jpg";
import productmw3 from "../assets/product-image/productmw3.jpg";
import productmw4 from "../assets/product-image/productmw4.jpg";
import productmw5 from "../assets/product-image/productmw5.jpg";
import productmw6 from "../assets/product-image/productmw6.jpg";
import productmw7 from "../assets/product-image/productmw7.jpg";
import productmw8 from "../assets/product-image/productmw8.jpg";
import productmw9 from "../assets/product-image/productmw9.jpg";
import productmw10 from "../assets/product-image/productmw10.jpg";

//  Fashion Accessories
import FA1 from "../assets/fashion-accesory/FA1.jpg";
import FA3 from "../assets/fashion-accesory/FA3.jpg";
import FA5 from "../assets/fashion-accesory/FA5.jpg";
import FA6 from "../assets/fashion-accesory/FA6.jpg";
import FA8 from "../assets/fashion-accesory/FA8.jpg";
import FA10 from "../assets/fashion-accesory/FA10.jpg";
import FAcomb from "../assets/fashion-accesory/FAcomb.png";
import FAcomb1 from "../assets/fashion-accesory/FAcomb1.png";
import FApacker from "../assets/fashion-accesory/FApacker.png";
import FApacker1 from "../assets/fashion-accesory/FApacker1.png";

// Shoes
import shoe1 from "../assets/product-image/shoe1.jpg";
import shoe2 from "../assets/product-image/shoe2.jpg";
import shoe3 from "../assets/product-image/shoe3.jpg";
import shoe4 from "../assets/product-image/shoe4.jpg";
import shoe5 from "../assets/product-image/shoe5.jpg";

//  Tech
import earpodwireless from "../assets/Tech/earpodwireless.jpg";
import headphones from "../assets/Tech/headphones.jpg";
import powerbank from "../assets/Tech/powerbank.jpg";
import amazonmouse from "../assets/Tech/amazonmouse.jpg";
import phonecase1 from "../assets/Tech/phonecase1.jpg";
import applewatchseries9 from "../assets/Tech/apple-watch-series9.jpg";
import JBLspeaker from "../assets/Tech/JBL-speaker.jpg";
import cameralensprotector from "../assets/Tech/cameralens-protector.jpg";


const shoeImages = [shoe1, shoe2, shoe3, shoe4, shoe5];

const shoeProducts = shoeImages.map((image, index) => ({
  id: `shoe-${index + 1}`,
  brand: `Shoe Brand ${index + 1}`,
  name: `Shoe Style ${index + 1}`,
  image,
  price: 9000 + index * 1000,
}));

const sneakerImages = [sneaker1, sneaker2, sneaker3, sneaker4];
const sneakerProducts = sneakerImages.map((img, i) => ({
  id: `sneaker-${i + 1}`,
  brand: `Sneaker Brand ${i + 1}`,
  name: `Sneaker Style ${i + 1}`,
  image: img,
  price: 11000 + i * 700,
}));

const productmwImages = [ productmw1, productmw2,
  productmw3,productmw4,
  productmw5,
  productmw6,
  productmw7,
  productmw8,
  productmw9,
  productmw10,
];
const productmwItems = productmwImages.map((img, i) => ({
  id: `mw-${i + 1}`,
  brand: `Unisex Brand ${i + 1}`,
  name: `Unisex Style ${i + 1}`,
  image: img,
  price: 12000 + i * 300,
}));

const bagImages = [bag1, bag2, bag3, bag4, bag5];
const bagProducts = bagImages.map((img, i) => ({
  id: `bag-${i + 1}`,
  brand: `Bag Brand ${i + 1}`,
  name: `Bag Style ${i + 1}`,
  image: img,
  price: 7000 + i * 800,
}));
const womenImages = [
  productw1, productw2, productw3, productw4, productw5,
  productw6, productw7, productw8, productw9, productw10,
  productw11, productw12, productw13, productw14, productw15,
  productw16, productw17,
];

const womenProducts = womenImages.map((img, i) => ({
  id: `w${i + 1}`,
  brand: `Brand W${i + 1}`,
  name: `Women Product ${i + 1}`,
  image: img,
  price: 10000 + i * 400,
}));

const menImages = [
     productm5, productm6, productm7, productm8, productm9,
  productm10, productm11, productm12, productm13, productm14, productm15,
];
const menProducts = menImages.map((img, i) => ({
  id: `m-${i + 4}`, // starting at m-5
  brand: `Brand M${i + 5}`,
  name: `Men Product ${i + 5}`,
  image: img,
  price: 10000 + (i * 500),
}));


export const products = [
  
 {
    id: "m1",
    brand: "Bonton",
    name: "Limited Bonton Joggers",
    image: productm1,
    price: 10000,
  },
  {
    id: "m2",
    brand: "Advantage",
    name: "Blackline Joggers",
    image: productm2,
    price: 14500,
  },
  {
    id: "m3",
    brand: "Outline",
    name: "Double Nude Set",
    image: productm3,
    price: 13000,
  },
  {
    id: "m4",
    brand: "Outline",
    name: "Double Coral Set",
    image: productm4,
    price: 10000,
  },

 
  
   ...shoeProducts,

   // Accessories 
  { id: "FA1", image: FA1, brand: "Yiwu", name: "Mini Banana Bag", price: 3000, rating: 5 },
  { id: "FA3", image: FA3, brand: "Yiwu", name: "Fashion blue sunglasses", price: 3000, rating: 5 },
  { id: "FA5", image: FA5, brand: "Sanlee", name: "Blue Lens glasses", price: 3000, rating: 5 },
  { id: "FA6", image: FA6, brand: "Nike", name: "Baseball cap", price: 3000, rating: 5 },
  { id: "FA10", image: FA10, brand: "Fashion Jewellery", name: "17k MK Set Jewellery", price: 3500, rating: 4.5 },
  { id: "FAcomb", image: FAcomb, brand: "Ore's Accessories", name: "Big hair clips set", price: 2000, rating: 3.5 },
  { id: "FAcomb1", image: FAcomb1, brand: "Ore's Accessories", name: "Big hair clips set", price: 2000, rating: 3.5 },
  { id: "FApacker", image: FApacker, brand: "Ore's Accessories", name: "Mini silk scrunchies set", price: 3000, rating: 4 },
  { id: "FApacker1", image: FApacker1, brand: "Ore's Accessories", name: "Mini silk scrunchies set", price: 3000, rating: 4 },
  { id: "FA8", image: FA8, brand: "Yiwu Fashion Jewellery", name: "Stainless steel knuckle ring", price: 3000, rating: 5 },

...productmwItems,
{ id: "wirelesspod", image: earpodwireless, brand: "Samsung", name: "Earpod Wireless", price: 12000 },
  { id: "wirelessearpod", image: earpodwireless, brand: "Samsung", name: "Earpod Wireless", price: 12000 },
  { id: "headphones", image: headphones, brand: "Oraimo", name: "Headphone M2", price: 8000 },
  { id: "JBLspeaker", image: JBLspeaker, brand: "iPhone", name: "Wired Earpiece", price: 3000 },
  { id: "powerbank", image: powerbank, brand: "Oraimo", name: "20,000 mAh Powerbank", price: 25000 },
    { id: "cameralens", image:cameralensprotector, brand: "iPhone", name: "Camera", price: 14500 },
 { id: "smartwatch",image: applewatchseries9,brand: "Apple",name: "Reliogio Smartwatch",price: 50000, },
 
 { id: "mouse",image: amazonmouse,brand: "Amazon", name: "itel Mousepad", price: 10500,},
  { id: "phonecase1", image: phonecase1, brand: "Shangu",name: "iPhone 11 Pro Phone Case",price: 5000, },

  {id: "w1", brand: "Pretty Little Thing",name: "Hotty Pink",image: productw1,price: 10500, },
   ...menProducts,
 
  ...womenProducts,
 
  ...bagProducts,

  
...sneakerProducts,
  
];


