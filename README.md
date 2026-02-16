# Incident Tracker -- Full Stack Incident Management System

A production-ready full-stack Incident Management System built with a
scalable client-server architecture.\
The system is designed with clean architecture principles, structured
API responses, centralized error handling, and optimized data querying
(pagination, sorting, filtering).

This project demonstrates real-world backend structuring,
performance-aware frontend design, and Docker-based deployment.

---

# Architecture Overview

    incident-tracker/
    │
    ├── client/                 # React + TypeScript (Vite)
    ├── server/                 # Node.js + Express + MongoDB
    ├── docker-compose.yml
    └── README.md

### Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Axios
- Modular Component Architecture

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Centralized Error Handling
- Structured API Response Classes

---

# Complete Feature Breakdown

---

# CLIENT FEATURES (Frontend)

## 1. Incident Listing Dashboard

- Displays incidents in a structured table layout
- Dynamic data rendering
- Fully typed using TypeScript interfaces
- Clean separation of UI and data layer

## 2. Server-Side Pagination

- Page-based data loading
- Prevents loading large datasets at once
- Optimized network usage
- Scalable for large databases

## 3. Sorting Functionality

- Ascending / Descending sorting
- Sort by different fields
- Backend-controlled sorting for consistency
- UI state synchronization with API query parameters

## 4. Advanced Filtering

- Query-based filtering
- Filter results dynamically
- Prevents unnecessary client-side heavy computations

## 5. Loading State Handling

- Loader/spinner during API calls
- Better user experience
- Clear async state management

## 6. Modular Component Architecture

- Reusable components
- Clear folder structure
- Maintainable UI codebase

## 7. Type-Safe Architecture

- Strict TypeScript types
- Reduced runtime errors
- Predictable data contracts between client and server

---

# SERVER FEATURES (Backend)

## 1. RESTful API Design

### GET /api/incidents

Supports: - Pagination - Sorting - Filtering

Query Parameters: - page - limit - sortBy - order - search

---

## 2. Structured API Response System

Custom Response Classes: - ApiResponse - SuccessResponse -
FailResponse - ErrorResponse - PaginatedResponse

Example:

```json
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

Benefits: - Consistent API contract - Easy frontend integration -
Predictable error handling - Clean response structure

---

## 3. Centralized Error Handling

- Custom AppError class
- Global error middleware
- Differentiation between operational and programming errors
- Cleaner controller logic

---

## 4. Async Wrapper Utility

- Eliminates repetitive try/catch blocks
- Reduces boilerplate
- Cleaner codebase

---

## 5. MongoDB Optimized Query Handling

- Server-side filtering
- Server-side pagination
- Controlled sorting
- Efficient query building

---

## 6. Dockerized Deployment

- Separate Dockerfiles for client & server
- docker-compose for full stack setup
- Environment-based configuration

---

# Why This Architecture Is Optimal

## 1. Performance Optimization

- Server-side pagination reduces payload size
- Sorting handled at database level
- Filtering at query level avoids unnecessary memory usage

## 2. Scalability

- MVC backend structure
- Clean separation between client and server
- Easy to migrate to microservices

## 3. Maintainability

- Centralized error handling
- Structured response classes
- Clear folder structure
- Modular frontend components

## 4. Developer Experience

- TypeScript for predictability
- Docker for environment consistency
- Clear API contracts

---

# Installation

## Option 1 -- Docker (Recommended)

    docker-compose up --build

## Option 2 -- Manual Setup

### Backend

    cd server
    npm install
    npm run dev

### Frontend

    cd client
    npm install
    npm run dev

---

# Future Improvements & Feature Additions

---

## Authentication & Authorization

- JWT-based authentication
- Role-based access control
- Protected routes
- Refresh token mechanism

---

## Incident CRUD Expansion

- Create incident
- Update incident
- Delete incident
- Soft delete implementation
- Status lifecycle (Open → In Progress → Resolved)

---

## Dashboard & Analytics

- Incident trends over time
- Severity distribution charts
- Real-time statistics

---

## Advanced Search

- Full-text search indexing
- Multi-field filtering
- Date range queries

---

## Testing & Quality

- Unit tests (Jest)
- Integration tests
- API contract testing
- Frontend component testing

---

## Performance Upgrades

- Redis caching layer
- Database indexing
- Response compression
- Rate limiting

---

## Production-Grade Enhancements

- CI/CD pipeline
- Logging (Winston/Pino)
- Monitoring (Prometheus/Grafana)
- Health check endpoints

---

## Microservices Migration (Advanced)

- Separate Auth Service
- Incident Service
- Notification Service
- API Gateway
- Event-driven architecture (RabbitMQ/Kafka)

---

# Author

Srijan Shankar Dubey
