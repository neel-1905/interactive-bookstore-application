# interactive-bookstore-application

## Project Setup

### Frontend

- For the frontend of this project, React Js library is used.

- Along with React Js, React Router is used for routing and Redux Toolkit is used for state management of the application

- For the styling of user interface, Bootstrap CSS is used

- Toast library is used for displaying toast messages.

- In src folder, Components folder has all the components, Redux folder slices and redux store and Styles folder has CSS files

### Backend

- For backend of this project, Node Js is used and MongoDb for data storage.

- Express Js is used as framework for routing and creating APIs.

- Nodemon is used for refreshing the node server on saving. In package.json file nodemon config is included.

- Jsonwebtoken is used for creating token, bcrypt for hashing passwords, mongoose for connecting to MongoDB database.

- Routes folder has all the routes for books and users.

- Models folder has user and book models.

- Controller folder has functions which handle the API request and response.

- Middleware folder has token verification.

- Sensitive secrets are stored in .env file.

## Usage

- To add books to the database, I have created an api. You can add books using postman or any other api platform

- Install all the libraries and packages used in the project.

- Run frontend using npm start

- For backend, if you are using nodemon, use npm run dev or simply use node index.js.

- Navigate to Register page and register as a user. Then go to login page and login.

- On homepage, navigate to books. Here you will see all the books which are there in the database.

- Use the search input to search for a book.

- You can use the any option from the select list to filter by genre.

- Click add to cart to add the particular book to cart.

- Navigate to cart. Here you will see all the books that were added.

- Click on + or - to increase or decrease the amount of that particular book.

- Click on Checkout to navigate to checkout page. Here you will see your order summary.

- Click on logout on home page navbar to logout user.
