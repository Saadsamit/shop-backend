# How to run the application locally.

First you need to install all dependencies. For installing you need to run **`yarn`** in your terminal.

```
yarn
```

Then you need to add **`.env`** file in projects Root directory. On **`.env`** file you need to add `PORT` and `DATABASE_URL`

**`Example:`**

```
//The env should be placed on project root

PORT=3000 // add a port like that

DATABASE_URL=mongodb+srv://car-doctor:lgrOvzRSR0Xk5P@cluster0.amhrtlq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0  //add a mongoDB database url like that
```

Then you can run server useing **`yarn dev`** on your terminal.

```
yarn dev
```

Now to can run the server locally.

## The Routes Have

### 1. Create a New Product

Endpoint: **`/api/products`**

Method: **`POST`**

Sample Request Body:

```
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}
```

### 2. All Products or Search a product

All Products Endpoint: **`/api/products`**

Search Endpoint: **`/api/products?searchTerm=iphone`**

Method: **`GET`**

### 3. Specific Product by ID

Endpoint: **`/api/products/:productId`**

Method: **`GET`**

### 4. Update Product Information

Endpoint: **`/api/products/:productId`**

Method: **`PUT`**

### 5. Delete a Product

Endpoint: **`/api/products/:productId`**

Method: **`DELETE`**

### 6. New Order

Endpoint: **`/api/orders`**

Method: **`POST`**

Request Body:

```
{
    "email": "abc@gmail.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
}
```

### 7. All Orders or User Email Orders Data

All Orders Endpoint: **`/api/orders`**

Orders by User Email Endpoint: **`/api/orders?email=level2@programming-hero.com`**

Method: **`GET`**
