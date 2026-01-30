Backend Authentication API
Description

This project is a Backend Authentication API built using Node.js, Express.js, and MongoDB as part of a machine test.
It implements secure user registration, login, and protected profile access using JWT authentication with proper request validation.

Features

User registration with input validation

User login with JWT token generation

Password hashing using bcrypt

Protected route accessible only with valid JWT

Centralized error handling

Structured JSON API responses

Tech Stack

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Express Validator

API Endpoints

POST /api/auth/register – Register new user

POST /api/auth/login – Login and get JWT token

GET /api/user/profile – Protected user profile route

API Testing

All APIs were tested using Postman / Thunder Client.
Screenshots are available in the postman-tests/ folder.

Environment Variables
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


<img width="1019" height="433" alt="register-success" src="https://github.com/user-attachments/assets/8fec264d-65fb-4aef-b35c-81ff70a0f597" />
<img width="1015" height="704" alt="register-validation-fail" src="https://github.com/user-attachments/assets/0db6f869-6b25-4cfe-a16d-6cf992fc52d8" />
<img width="1018" height="431" alt="login-success" src="https://github.com/user-attachments/assets/b566c6cb-2869-417c-9523-ff854164fbbf" />
<img width="1019" height="434" alt="profile-with-token" src="https://github.com/user-attachments/assets/65af4f44-64f6-4d80-856c-b6692e778447" />
<img width="1017" height="434" alt="profile-without-token" src="https://github.com/user-attachments/assets/566488fe-aa86-42d7-8a95-230112b5187b" />
