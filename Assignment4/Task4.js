const products = [
    { name: "prod1", price: 1000, category: "Elect" },
    { name: "prod2", price: 2000, category: "Cat2" },
    { name: "prod3", price: 3000, category: "Elect" },
    { name: "prod4", price: 4000, category: "Cat4" },
    { name: "prod5", price: 5000, category: "Cat5" },
];

//map()
const arr = products.map(product => product.name);
console.log(arr);

//filter()
const arr1 = products.filter(prod => prod.category == "Elect");
console.log(arr1);

//reduce()
const sum = products.reduce((sum, product) => sum + product.price, 0);
console.log(sum);

//map(), filter(), and reduce()
function totalCategoryPrice(category) {
    return products.filter(product => product.category === category).map(product => product.price).reduce((sum, price) => sum + price, 0);
}
console.log(totalCategoryPrice("Elect"))