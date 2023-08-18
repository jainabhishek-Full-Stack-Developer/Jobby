# Jobby App

Brief description of your app.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Routes and Functionality](#routes-and-functionality)
- [Data](#data)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Login and logout functionality
- Viewing and filtering job listings
- Job details page with similar jobs

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage

1. Run `npm start` to start the development server.
2. Open your browser and navigate to `http://localhost:3000` to access the app.

## Routes and Functionality

### Login Route

- Provides login form.
- Displays error message for invalid credentials.
- Navigates to Home Route on successful login.

### Home Route

- Displays welcome content to authenticated users.
- Allows users to find jobs.

### Jobs Route

- Fetches profile data and displays it.
- Allows filtering jobs by various criteria (employment type, salary range, search).
- Displays list of jobs based on applied filters.
- Handles HTTP request failures with retry functionality.

### Job Item Details Route

- Fetches and displays details of a selected job.
- Displays similar job listings.
- Allows visiting the company website.

### Not Found Route

- Displays a "404 - Page Not Found" message for invalid routes.

### Header

- Provides navigation links to Home, Jobs, and Logout.
- Allows returning to Home by clicking on the logo.

## Data

- `employmentTypesList`: List of employment types.
- `salaryRangesList`: List of salary ranges.

## Technologies Used
- Html
- CSS
- Bootstrap
- JavaScript
- React
- React Router
-  REST API Calls
- Local Storage
- JWT Token
- Authorization
- Authentication


## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your improvements and commits.
4. Push your branch to your forked repository.
5. Create a pull request.

## License

This project is licensed under the [Your License Name] License - see the [LICENSE](LICENSE) file for details.

---

Please replace placeholders with actual information where necessary. This README template provides a general structure, and you can expand upon it based on the specific details and nuances of your app.
