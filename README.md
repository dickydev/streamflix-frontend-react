# React + Vite Project

## Overview

This project provides a minimal setup for a modern React application powered by Vite. It offers a fast development experience with features like Hot Module Replacement (HMR), and integrates Material-UI (MUI) components to build a stylish and functional user interface. The app also includes basic authentication (login functionality), a custom dark theme, and a clean project structure.

---

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Custom Theme](#custom-theme)
- [Authentication Flow](#authentication-flow)
- [Custom Button Styles](#custom-button-styles)

---

# Step-by-Step Guide

## Step 1: Register

To begin using the app, you need to create an account. Follow these steps:

1. **Navigate to the Registration Page**:
   - On the homepage or login page, click on the **"Register"** link to access the registration page.
2. **Fill in the Registration Form**:
   - **Username**: Enter a unique username.
   - **Email**: Provide a valid email address.
   - **Password**: Choose a secure password.
3. **Submit**:

   - After filling out the form, click the **"Register"** button to create your account.

4. **Success**:
   - Upon successful registration, you will be redirected to the login page.

---

## Step 2: Login

Once you've registered, log in to access the main features of the app:

1. **Navigate to the Login Page**:
   - After registration, you will be redirected to the login page (or you can manually navigate to it).
2. **Enter Credentials**:

   - **Username**: Enter the username you registered with.
   - **Password**: Enter your password.

3. **Submit**:

   - Click the **"Login"** button.

4. **Home Page**:
   - Upon successful login, you will be redirected to the homepage, where you can browse movies and purchase them.

---

## Step 3: Browse Movies

Now that you are logged in, you can browse the available movies:

1. **Navigate to the Movies Section**:
   - On the homepage, you will see a list of available movies.
2. **View Movie Details**:

   - Click on any movie to see its details, including a description, price, and genre.

3. **Search for Movies**:

   - Use the search bar to filter movies by title or genre.

4. **Sort Movies**:
   - You can sort movies by release date or price (low to high/high to low).

---

## Step 4: Add Movie to Cart

If you want to purchase a movie, you can add it to your cart:

1. **Select a Movie**:
   - Choose a movie that you wish to purchase by clicking on its card.
2. **Add to Cart**:

   - On the movie details page, click the **"Add to Cart"** button.

3. **View Cart**:
   - You can click on the **"Cart"** icon in the top navigation to view the movies you’ve added.

---

## Step 5: Purchase Movie

Once you’ve added movies to your cart, it’s time to purchase them:

1. **Go to the Cart**:

   - Click on the **"Cart"** icon in the top navigation bar to view all the items in your cart.

2. **Review Items**:

   - Ensure the correct movies are in your cart, check the total price, and make any necessary changes.

3. **Proceed to Checkout**:

   - Click on the **"Proceed to Checkout"** button.

4. **Enter Payment Information**:

   - Fill in your payment details (credit card, PayPal, etc.).

5. **Complete Purchase**:

   - Click on **"Confirm Purchase"** to finalize your transaction.

6. **Success**:
   - Upon successful purchase, you will receive a confirmation message, and the movie will be available in your **"Purchased"** section.

---

## Technologies Used

This project utilizes the following technologies:

- **React**: A JavaScript library for building user interfaces, providing a declarative way to manage UI components.
- **Vite**: A build tool that enhances the development experience with fast build times and Hot Module Replacement (HMR).
- **Material-UI (MUI)**: A React UI component library that offers a rich set of pre-built components to design a responsive and attractive interface.
- **React Router DOM**: A routing library for navigation within the React application.
- **ESLint**: A tool to enforce code quality and consistent styles.
- **Axios**: A promise-based HTTP client for making API requests.

**Vite Plugins**:

- `@vitejs/plugin-react`: Fast refresh support for React applications using Babel.
- `@vitejs/plugin-react-swc`: An alternative plugin for Fast Refresh using SWC.

---

## Features

- **Authentication System**: Basic login page with form validation using React hooks. Redirects to the home page upon successful login.
- **Dark Theme**: Custom theme using Material-UI with a black background and red accents.
- **Routing**: Easy navigation between the login page and future pages (e.g., registration).
- **Responsive UI**: Built using Material-UI components to ensure the app works well on all screen sizes.
- **ESLint Integration**: Helps maintain consistent code style and detect potential issues during development.

---

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   Navigate to the project directory:
   ```

   ```bash
   cd your-project-name
   Install dependencies:
   ```

   ```bash
   npm install
   ```

   Run the development server:

   ```bash
   npm run dev
   ```

   The application will be available at http://localhost:5173/.

## Project Structure

The project structure is organized as follows:

```bash
/src
/components # React components
/Auth # Login & Registration pages
/Theme # Theme customization and MUI overrides
/services # Service functions (e.g., API requests)
/App.js # Main React app component
/index.js # Entry point for the React app
/public # Static files
/index.html # HTML template
```

Custom Theme
This app uses a custom Material-UI theme with the following features:

- **Primary Color**: A darker red (#b71c1c) used for buttons and accents.
- **Background**: Dark mode with a black background (#141414) for a clean, modern look.
- **Typography**: Custom typography settings with bold headings and buttons, and consistent font sizes across the app.

Authentication Flow

- **Login**: Users can log in with their username and password. Upon successful authentication, the user is redirected to the home page.
- **Register**: A button is available to navigate users to the registration page (which can be implemented in the future).

Custom Button Styles
The MuiButton component has been customized as follows:

Outlined Button:
Light border color and text color.
On hover, background transitions to a darker red with white text.
