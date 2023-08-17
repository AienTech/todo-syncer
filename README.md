# **Todo Service**

A service for managing Todos. Developed as a part of my interview process with [Amie](https://amie.so).

## **Table of Contents**

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database Design](#database-design)
- [API Endpoints](#api-endpoints)
- [Third-party Integration](#third-party-integration)
- [Assumptions & Decisions](#assumptions--decisions)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## **Overview**

This service provides a robust GraphQL API for managing and synchronizing Todos. Emphasis was placed on ensuring the application could scale and support multiple simultaneous contributors.

## **Features**

- Querying Todos
  - Filter by status and list.
- Adding a new Todo.
- Updating Todos.
  - Marking them as done.
- Seamless synchronization with a third-party Todo service.

### **Features not implemented but must be considered**

- Authentication
- Data Loading (for scalability) to solve `n+1` issues

## **Tech Stack**

- **Language**: TypeScript
- **Backend Framework**: or NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **GraphQL**: Apollo Server
- **Containerization**: Docker & Docker Compose

## **Database Design**

- [Prisma](https://www.prisma.io/) is used to generate models for typescript.

## **API Endpoints**

1. `GET /graphql`: For playground (only available in `DEV` env).
2. `POST /graphql`: For the actual graphql queries.

## **Third-party Integration**

- Todos created in the third-party service are also created in our service.
- Todos' status is always in sync between our service and the third-party service.

## **Assumptions & Decisions**

[Placeholder]

## **Getting Started**

1. **Setup**:

   - Clone the repository: `git clone https://github.com/AienTech/aien-saidi-backend-coding-challenge`
   - Install dependencies: `yarn`
   - Setup the database: `docker compose pull`

2. **Running the Application**:

   - Start the database: `docker compose up`
   - Start the server: `yarn start:dev`

3. **Tests**:
   - Run tests: `yarn test`

## **Contributing**

### Conventional commits

I've adopted the Conventional Commits specification for my commit messages. This helps provide an easier-to-read history, ensuring my commits are clear and descriptive. This approach also facilitates a number of key benefits:

- **Automated Changelog Generation**: Conventional commit messages are structured in a way that makes it easier to auto-generate changelogs, ensuring that each change is clearly documented and easily accessible.

- **Semantic Versioning**: By categorizing commits (e.g., feat, fix, chore, docs, etc.), we can use automated tools to bump the semantic version of our project based on the commits since the last release.
