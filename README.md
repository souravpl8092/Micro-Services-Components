<h1 align="center"> User Management Application </h1>

<br/>

<h2>Overview</h2>
 
### This is a User Management Application that allows you to manage user data, including creating new users, updating existing users, and exporting user data as a CSV file. It provides a web-based interface for interacting with the application.

<br/>

<table>
<tr>
    <td>
      <h2 align="center">User list page</h2>
    </td>
  <td>
      <h2 align="center">Add user page</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/f9IkTT8.png" alt="User Page">
    </td>
    <td>
      <img src="https://i.imgur.com/PLNKarN.png" alt="Add User">
    </td>
  </tr>  
  <tr>
   <tr>
    <td>
      <h2 align="center">Update user page</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/DwfstgJ.png" alt="Edit User">
    </td>
  </tr>
 </table>
  
  <br/>
  
<br/>

<table>
<tr>
    <td>
      <h2 align="center">Postman GET request</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/7oCOUkV.png" alt="Get">
    </td>
  </tr>  
 </table>
 
 <br/>
 
 <table>
  <tr>
    <td>
      <h2 align="center">Postman POST request</h2>
    </td>
  </tr>
  <tr> 
    <td>
      <img src="https://i.imgur.com/WyUn1C8.png" alt="Post">
    </td>
  </tr>  
  </table>
  
  <br/>
  
  <table>
  <tr>
    <td>
      <h2 align="center">Postman PUT request</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/91a3Q0n.png" alt="Put">
    </td>
  </tr>
</table>

<br/>

<h2>Features</h2>

- View a list of users with their names, email addresses, gender, and status.
- Add new users to the system.
- Update the details of existing users.
- Export user data as a CSV file.
- RESTful API endpoints for retrieving, creating, updating, and exporting user data.

<br/>

<h2>Technologies Used</h2>

- Front-end: React.js, Chakra UI, React Router DOM
- Back-end: Node.js, Express.js
- Database: MongoDB with Mongoose
- Other Libraries: json2csv, cors

<br/>

<h2>API Endpoints</h2>

### The server provides the following API endpoints for managing user data:

- GET /user: Retrieves users based on a query.
- GET /user/export: Exports user data as a CSV file.
- GET /user/:id: Retrieves a specific user by ID.
- POST /user: Creates a new user.
- PUT /user/:id: Updates an existing user.

<br/>

## Code Explanation

## Server: This directory contains the server-side code for the application.

### config/db.js

- This file connects to the MongoDB server using the mongoose library.

<br/>

### models/User.model.js

- This file defines a User schema using the mongoose.Schema method.

<br/>

### routes/user.routes.js

- This file defines the routes and handlers for user-related API endpoints.

<br/>

### index.js

- This file defines the entry point of the server, sets up the Express server, establishes the database connection, and defines the routes.

<br/>

## Client: This directory contains the client-side code for the application.

### Components/AllRoutes.js

- Defines the routes for different pages in the application using React Router DOM.

<br/>

### Components/Navbar.js

- Renders the navigation bar at the top of the application with different options based on the screen size.

<br/>

### App.js

- Entry point of the client-side code, renders the overall structure of the application including the navigation bar and routes.

<br/>

### Pages/UserList.jsx

- This file defines the UserList component, which displays a list of users. It fetches user data from the server using the fetchData function and renders the list using the Chakra UI components.

<br/>

### Pages/AddUser.jsx

- This file defines the AddUser component, which provides a form for adding a new user. It captures user input and sends a POST request to the server to create a new user.

<br/>

### Pages/EditUser.jsx

- This file defines the EditUser component, which allows editing the details of a specific user. It fetches the user data based on the provided ID and updates the user's information with a PUT request to the server.

<br/>

<h2 align="center">Thank You</h2>
