# Petshop Price Calculator

This application calculates the best petshop for you based on the number of small and large dogs you have, considering the prices and distances of different petshops. It uses React for the frontend and Express for the backend.

[![NodeJs](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png)](https://nodejs.org/en/) [![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png)](https://reactjs.org/) 

http://localhost:3000/?date=03/08/2018&smallDogs=3&largeDogs=5 

## Tech

- [node.js](https://nodejs.org/en/) - evented I/O for the backend

- [![React](https://legacy.reactjs.org/) - React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
## Setup

- To run the application before we need to install dependencies at Backend an Frontend folders, go uder /Backend and run the command:
```sh
  command npm install
```
- After install dependencies run the application with the command:
```sh
  command npm start
```
- The application will start at 
```
http://localhost:3001
```
- Go under /Frontend and run the command:
```sh
  command npm install
```
- After install dependencies run the application with the command:
```sh
  command npm start
```
- The application will start at 
```
http://localhost:3000
```
- Verify the deployment by navigating to your server address in
  your preferred browser.


## Usage

Make a GET request to the root URL (/) with the following query parameters:

    1. Enter the date, number of small dogs, and number of large dogs in the form.
    2. Click the "Submit" button.
    3. The application will display the best petshop and the total price.

## Example request:

# Example 1:

Input:

    Date: 2024-03-17
    Small Dogs: 2
    Large Dogs: 1

Output:

    Best Petshop: Vai Rex
    Total Price: 80

# Example 2:

Input:

    Date: 2024-03-17
    Small Dogs: 1
    Large Dogs: 2

Output:

    Best Petshop: ChowChawgas
    Total Price: 135

# Example 3:

Input:

    Date: 2024-03-17
    Small Dogs: 3
    Large Dogs: 3
Output:

    Best Petshop: Meu Canino Feliz
    Total Price: 240

# To send request directly to the backend server 
```
  GET http://localhost:3001/?date=2024-03-17&smallDogs=2&largeDogs=1
```
  Example response:
```
  {
    "bestPetshop": "Vai Rex",
    "totalPrice": 80
  }
```


  
