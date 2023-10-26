class Product {
    constructor(name, unitPrice, gstPercentage, quantity) {
      this.name = name;
      this.unitPrice = unitPrice;
      this.gstPercentage = gstPercentage;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.unitPrice * this.quantity;
    }
  
    getGSTAmount() {
      return (this.unitPrice * this.gstPercentage * this.quantity) / 100;
    }
  
    getDiscount() {
      return this.unitPrice >= 500 ? (5 * this.getTotalPrice()) / 100 : 0;
    }
  }
  
  const shoppingBasket = [
    new Product("Leather wallet", 1100, 18, 1),
    new Product("Umbrella", 900, 12, 4),
    new Product("Cigarette", 200, 28, 3),
    new Product("Honey", 100, 0, 2),
  ];
  
  const productWithMaxGST = shoppingBasket.reduce((maxProduct, currentProduct) =>
    currentProduct.getGSTAmount() > maxProduct.getGSTAmount() ? currentProduct : maxProduct
  );
  
  const totalAmountToBePaid = shoppingBasket.reduce((total, product) =>
    total + product.getTotalPrice() + product.getGSTAmount() - product.getDiscount(), 0
  );
  
  console.log("Product with Maximum GST Amount:", productWithMaxGST.name);
  console.log("Customer Paid Amount:", totalAmountToBePaid);
  