import faker from 'faker';

const mealFaker = {
  newMeal: {
    name: faker.name.title(),
    description: faker.lorem.paragraph(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
    
  },
  newCenter1: {
    name: faker.name.findName(),
    city: '',
    address: faker.address.streetAddress(),
    facility: faker.random.arrayElement(),
    about: 'this is a test',
    availability: 'availability',
    imageurl: 'pictue.png',
    publicUrlId: 'picture'
  },
  newMeal2: {
    name: faker.name.findName(),
    description: faker.lorem.paragraph(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
  },
  newCenter3: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: 'no 3 adestreet',
    facility: faker.random.arrayElement(),
    about: 'this is a test',
    availability: 'availability',
    imageurl: 'pictue.png',
    publicUrlId: ''
  },
  newCenter4: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: '',
    facility: faker.random.arrayElement(),
    about: '',
    availability: 'availability',
    imageurl: 'pictue.png',
    publicUrlId: 'picture'
  },
  newCenter5: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: ['car pack', 'free wifi', 'sound system'],
    about: 'this is a test',
    availability: 'availability',
    imageurl: 'pictue.png',
    publicUrlId: 'picture'
  },
  newCenter6: {
    name: 'center name updated',
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: ['car pack', 'free wifi', 'sound system'],
    about: 'this is a test',
    availability: 'availability',
    imageurl: 'pictue.png',
    publicUrlId: 'picture'
  },
  newCenter33: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: 'no 3 adestreet',
    facility: faker.random.arrayElement(),
    about: 'this is a test',
    availability: 'availability',
    imageurl: '',
    publicUrlId: 'pictue.png'
  },
};

export default mealFaker;