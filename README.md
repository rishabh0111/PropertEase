# PropertEase

PropertEase is a web application that allows users to list and manage properties for rent or sale. It provides a user-friendly interface for property owners and potential buyers/renters to interact with each other.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Routes](#api-routes)
- [Contributing](#contributing)

## Installation

To run the PropertEase application locally, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/propertease.git


2. Navigate to the project directory:

cd propertease


3. Install the required dependencies for the server:

cd api npm install


4. Install the required dependencies for the client:

cd ../client npm install


5. Create a `.env` file in the `api` directory and provide the necessary environment variables (e.g., MongoDB connection string, Firebase configuration).

6. Start the development server:

Start the server
cd ../api npm start

Start the client (in a separate terminal)
cd ../client npm run dev


The application should now be running locally at `http://localhost:5173`.

## Configuration

The PropertEase application requires some configuration before it can be used. Here are the steps to configure the application:

1. **Firebase Configuration**: In the `client/src/firebase.js` file, update the `firebaseConfig` object with your Firebase project's configuration details.

2. **MongoDB Configuration**: In the `api/.env` file, set the `MONGO_URI` variable to your MongoDB connection string.

3. **Other Environment Variables**: Depending on your setup, you may need to configure additional environment variables in the `api/.env` file (e.g., JWT secret, Google OAuth credentials).

## API Routes

The PropertEase application provides the following API routes:

### Auth Routes

- `POST /api/auth/signup`: Register a new user
- `POST /api/auth/signin`: Authenticate an existing user
- `POST /api/auth/google`: Authenticate with Google
- `GET /api/auth/signout`: Sign out the current user

### Listing Routes

- `POST /api/listing/create`: Create a new listing
- `DELETE /api/listing/delete/:id`: Delete a listing
- `POST /api/listing/update/:id`: Update a listing
- `GET /api/listing/get/:id`: Get a specific listing
- `GET /api/listing/get`: Get all listings

### User Routes

- `GET /api/user/test`: Test route (for debugging purposes)
- `POST /api/user/update/:id`: Update a user's profile
- `DELETE /api/user/delete/:id`: Delete a user
- `GET /api/user/listings/:id`: Get a user's listings
- `GET /api/user/:id`: Get a user's profile


## Contributing

Contributions to the PropertEase project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.