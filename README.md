# Mamak
![](https://i.imgur.com/EyZTKCo.jpg)

This web-app is for a ficticious Malaysian restaurant named Mamak. There is a menu, an order form, and an inventory management component where authorised users can immediately update product information. 

The application was built using React. I utilised [Create React App](https://github.com/facebook/create-react-app) for Webpack Tooling. Real-time application persistence and authentication was done through Firebase, and browser persistence with HTML5 LocalStorage. I deployed the app on Netlify.

The application can be viewed live [here](https://mamak.netlify.com/). Please note that as a customer on the app, you can try logging in with GitHub or Facebook, but you will not gain access to the inventory. A demo of the app is available on [Vimeo](https://vimeo.com/267439050). 


Design and Functionality
------
The application is divided into three columns: 
1. **Menu** - View items on the menu, and add to order
2. **Order** - View total order, add/remove items, and place order
3. **Inventory** - Log in to manage inventory
Like most applications, there is CRUD (Create, Read, Update, Delete) functionality.


Creation Process
------- 
I started out by building the React components, with the main ones being App.js, Order.js, and Inventory.js. After that, I added the CRUD functionality to the Inventory and Order sections. The next step was linking up with application with Firebase for authentication and state persistence. I also utilised LocalStorage for order state persistence. Finally, I added added some test cases with Jest, tidied up the CSS, and deployed the app on Netlify.


Issues
------
+ When I installed a new package (React.js pop-up), I encountered an issue where a lot of my dependencies were removed in the process. This was an npm issue, and I could workaround it by either deleting the `package-lock.json` file, or by using Yarn. I used Yarn for this instance.

+ Testing - I wrote a test for the `formatPrice` function (which converts cents to dollars), and for my Login component (to ensure that the slogan rendered out correctly). I realised that I need to learn more about testing, as I was unsure if I should have include for integration tests for the app.

+ Unfortunately, my `AddDish` functionality (the ability to create a new menu item from scratch in the inventory) worked perfectly in development, but not in production. 
** UPDATE: 8th May 2018: This issue has been resolved.

 
Future Improvements
------
If I create a new release of the app, I will include the following improvements:
+ More robust test cases
+ Integrate a payment service, like Stripe or PayPal
+ Create more items on the menu, and split them into different sections. I would also add the ability to filter based on food types, and potentially diet restrictions

