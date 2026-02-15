# 🚨 Incident Tracker

A full-stack Incident Management System built using a modern
client-server architecture.\
This application allows users to view, filter, sort, and paginate
incidents efficiently with a structured backend response system.

------------------------------------------------------------------------

## 🏗️ Project Structure

    incident-tracker/
    │
    ├── client/                # Frontend (React + TypeScript + Vite)
    ├── server/                # Backend (Node.js + Express + MongoDB)
    ├── docker-compose.yml
    └── README.md

------------------------------------------------------------------------

## 🧰 Tech Stack

### Frontend

-   React
-   TypeScript
-   Vite
-   Axios

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   Docker

------------------------------------------------------------------------

# 🚀 Current Features

## 🖥️ Client (Frontend)

### ✅ Incident Listing

-   Displays incidents in a structured table
-   Fully typed using TypeScript models
-   Clean component-based architecture

### ✅ Pagination

-   Server-side pagination
-   Page-based navigation
-   Dynamic API calls based on page number

### ✅ Sorting

-   Sort incidents by fields (ascending / descending)
-   Controlled sort state
-   Backend-integrated sorting

### ✅ Filtering

-   Filter incidents using query parameters
-   Dynamic API updates based on filters

### ✅ Loader Handling

-   Loading spinner during API calls
-   Improved UX for async operations

------------------------------------------------------------------------

## ⚙️ Server (Backend)

### ✅ RESTful API

#### `GET /api/incidents`

Supports: - Pagination - Sorting - Filtering

------------------------------------------------------------------------

### ✅ Structured API Response System

Custom response classes: - ApiResponse - SuccessResponse -
FailResponse - ErrorResponse - PaginatedResponse

Example Response:

``` json
{
  "status": "success",
  "message": "Incidents fetched successfully",
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}
```

------------------------------------------------------------------------

### ✅ Centralized Error Handling

-   Custom AppError class
-   Global error handling middleware
-   Operational vs programming error separation

------------------------------------------------------------------------

### ✅ MVC Architecture

    server/src/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middlewares/
    ├── utils/
    ├── config/
    └── app.ts

------------------------------------------------------------------------

# 🌍 Environment Variables

Create a `.env` file inside the server folder:

    PORT=5000
    MONGO_URI=mongodb://localhost:27017/incident-tracker
    NODE_ENV=development

------------------------------------------------------------------------

# 🚀 Future Upgrades

## 🔐 Authentication & Authorization

-   JWT-based authentication
-   Role-based access control (Admin/User)
-   Protected routes

## 📝 Incident Management Enhancements

-   Create Incident API
-   Update Incident API
-   Delete Incident API
-   Soft delete
-   Incident lifecycle management

## 📊 Dashboard & Analytics

-   Incident trend charts
-   Severity distribution
-   Monthly reports

## 🧪 Testing

-   Unit testing (Jest)
-   Integration testing
-   Frontend component testing

## ⚡ Performance Improvements

-   Redis caching
-   DB indexing optimization
-   Response compression

------------------------------------------------------------------------

# 📌 Project Status

✅ Pagination\
✅ Sorting\
✅ Filtering\
✅ Structured API responses\
✅ Centralized error handling\
✅ Dockerized setup

🚧 Authentication & advanced features planned

------------------------------------------------------------------------

# 👨‍💻 Author

Built as a scalable full-stack project demonstrating production-level
backend structure and a strongly typed frontend architecture.
