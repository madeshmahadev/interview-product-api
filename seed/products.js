const faker = require('faker');

module.exports = function generateProducts(len) {
  let products = [];

  for (let i=0;i<len;i++) {
    const pName = faker.commerce.productName();
    const pPrice = faker.commerce.price();
    const pDesc = faker.commerce.productDescription();
    const pCateg = faker.commerce.department();
    const pType = faker.commerce.productAdjective();
    const pImg = faker.image.image();
    const pManuf = faker.vehicle.manufacturer();
    const pSeller = faker.company.companyName();
    const pQuantity = faker.random.number();
    const pTax = faker.random.number({min:0, max:1, precision:0.01});

    products.push({
        "Name": pName,
        "Price": pPrice,
        "Description": pDesc,
        "Category": pCateg,
        "Type": pType,
        "Image": pImg,
        "Manufacturer": pManuf,
        "Seller": pSeller,
        "Quantity": pQuantity,
        "Tax": pTax,
    });
  }

  return products
}
