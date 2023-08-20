const products = [
    { name: "Apples", price: 1.5 },
    { name: "Bananas", price: 0.75 },
    // ...
  ];
  
  products.forEach(product => {
    product.price *= 1.1; // Increase prices by 10% change original
  });
  products.map(product => {
    product.price /= 1.1; // decrease prices by 10% donot change original array
  });
  

  console.log(products)