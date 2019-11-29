
export default class BookstoreService {

   data = [
      {
         id: 1,
         title: 'HTML5 Pocket Reference',
         author: 'Jennifer Robbins',
         pages: 260,
         price: 20,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41557We0myL._SX302_BO1,204,203,200_.jpg'
      },

      {
         id: 2,
         title: 'CSS: The Definitive Guide',
         author: 'Estelle Weyl',
         pages: 1092,
         price: 60,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/515X%2BRDM1LL._SX379_BO1,204,203,200_.jpg'
      },

      {
         id: 3,
         title: 'JavaScript: The Definitive Guide',
         author: 'David Flanagan',
         pages: 1096,
         price: 65,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._SX379_BO1,204,203,200_.jpg'
      },

      {
         id: 4,
         title: 'Learning React: React and Redux',
         author: 'Eve Porcello',
         pages: 350,
         price: 50,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'
      },

      {
         id: 5,
         title: 'Learning SQL: Master SQL Fundamentals',
         author: 'Alan Beaulieu',
         pages: 338,
         price: 18,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51%2B7PtL3BhL._SX379_BO1,204,203,200_.jpg'
      },

      {
         id: 6,
         title: 'Release It!',
         author: 'Michael T. Nygard',
         pages: 378,
         price: 45,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
      }
   ];

   getBooks() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (Math.random() > .75) {
               reject(new Error('Something bad happened'));
            } else {
               resolve(this.data);
            }
         }, 700);
      });
   };

}
