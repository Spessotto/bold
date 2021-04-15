# Instructions

   # start products-api - run this commands in the product-api folder
    npm install
    docker-compose up
   # start cart-api - run this commands in the cart-api folder
    npm install
    docker-compose up
   # start api-principal
    npm install
    npm start


# Endpoints  - you can test the endpoints in the swagger (localhost:port)
   getProducts - GET - localhost:8080/products 
   getCart - GET - localhost:8080/cart/1
   insertProduct - POST - localhost:8080/cart/insert
   deleteProduct - DELETE - localhost:8080/cart/remove
   getToken - POST - localhost:8080/auth/token