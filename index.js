import { faker } from '@faker-js/faker';

const products = Array.from({length: 10000}, () => faker.commerce.productName());
console.log(JSON.stringify(products));