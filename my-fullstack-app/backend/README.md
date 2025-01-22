# Backend API Documentation

## Overview
This is the backend part of the fullstack application built with Node.js and TypeScript. It serves as a REST API for the frontend application.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

### API Endpoints
- `GET /api/items`: Retrieve a list of items.
- `POST /api/items`: Create a new item.

## Folder Structure
- `src/app.ts`: Entry point of the application.
- `src/controllers/index.ts`: Contains the API controllers.
- `src/routes/index.ts`: Defines the API routes.
- `src/types/index.ts`: Contains TypeScript interfaces for requests and responses.

## License
This project is licensed under the MIT License.