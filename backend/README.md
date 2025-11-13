# Sala de Aula - Backend API

Sistema para armazenar as notas dos alunos - Backend REST API

## Overview

This is the backend API for Sala de Aula, an academic management system for storing and managing student grades, attendance, and performance data.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: Microsoft SQL Server
- **Validation**: Zod
- **Testing**: Jest

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── instances/              # Service instances
├── constants/              # Application constants
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- SQL Server instance available
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your database credentials and settings

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v1`

### Building

Build for production:
```bash
npm run build
```

### Running Production

Start the production server:
```bash
npm start
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Linting

Run ESLint:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## API Documentation

### Health Check

```
GET /health
```

Returns API health status.

### API Versioning

All API endpoints are versioned:
- Version 1: `/api/v1/`

### Authentication

Authenticated endpoints require an Authorization header:
```
Authorization: Bearer <token>
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 1433 |
| DB_USER | Database user | sa |
| DB_PASSWORD | Database password | - |
| DB_NAME | Database name | sala_de_aula |
| DB_ENCRYPT | Enable encryption | true |
| CORS_ORIGINS | Allowed CORS origins | - |
| BCRYPT_ROUNDS | Bcrypt rounds | 10 |
| CACHE_TTL | Cache TTL in seconds | 3600 |

## Features

The system includes the following main features:

1. **Student Management** - Complete student registration and profile management
2. **Teacher Management** - Teacher registration with subject and class assignments
3. **Subject Management** - Subject creation with workload and evaluation criteria
4. **Grade Registration** - Grade entry and management for activities and assessments
5. **Average Calculation** - Automatic grade average calculation
6. **Report Card Generation** - Individual student performance reports
7. **Grade History** - Complete academic history tracking
8. **Attendance Control** - Student attendance tracking
9. **Performance Reports** - Analytical reports on student performance
10. **Notifications** - Automated notifications for grades and academic status
11. **Integrated Academic Management** - Unified platform for complete academic cycle management

## Contributing

Please follow the established coding standards and patterns documented in the architecture files.

## License

ISC