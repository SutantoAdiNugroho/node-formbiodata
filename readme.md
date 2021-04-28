## Ondemand Rest API

A simple rest api used to on demand services. Connecting between customer and service providers.

### How to run the apps :

#### 1. Clone the repository
```
$ git clone https://github.com/SutantoAdiNugroho/node-ondemand-apps.git
```

#### 2. Install dependencies
```
$ cd node-ondemand-apps
```
and then
```
$ npm install
```

#### 3. Configure .env file on the project
There is already a sample env file, and all the keywords from the env file must be filled in.

| Keywords        | Description                      |
| ----------------|----------------------------------|
| HOST_DB         | MongoDB host connection          |
| PORT            | Port to run the apps             |
| JWT_SECRET_KEY  | Key for build and sync JWT token |

#### 4. Launch the apps
Example command for running it locally :
```
$ npm run dev
```
After the apps running is succesfully, we can start by calling routes. For example :
![Alt text](./src/assets/img/1-1-start.png "Calling '/' route")

### API Guide And Documentation :

#### /api/auth

| Path             | Method | Description                           |
| ---              | -----  | ----                                  |
| /user/login      | POST   | Customers login, and return the token |
| /user/register   | POST   | Costumers register                    |
| /driver/login    | POST   | Drivers login, and return the token   |
| /driver/register | POST   | Drivers register                      |

#### /api/order

| Path                              | Method | Description                                             |
| ---                               | -----  | ----                                                    |
| /cust/allorders/:customersId      | GET    | Showing all orders made by customerId                   |
| /cust/makerequest                 | POST   | This is used if the customer makes an order             |
| /drv/neworders                    | GET    | Displays all the orders recently made by the customer   |
| /drv/allorders/:driversId         | GET    | Displays all orders that have been processed by driver  |
| /drv/pickup/:ordersId             | PUT    | Used for drivers who want to take the order, or update the order status  |

* #### Customer's Register

    * Access endpoint : /api/auth/user/register 
    * Method     : POST
    * Parameters :
    
        | Name     | Type     | Description       |
        | ---      | -----    | ----              |
        | name     | string   | Name of customer  |
        | email    | string   | Email of customer |
        | password | string   | Password of user  |
        
    * Example success response :
