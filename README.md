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
- [Contributing](#contributing)
- [License](#license)

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

   The application will be available at http://localhost:3000.

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
