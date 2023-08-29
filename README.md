# **Todo Service**

A service for managing Todos. Developed as a fun project.

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
- Integration with MS Graph, due to account issues

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

### Data Synchronization with Microsoft Graph

One of the challenges in our application is keeping the local storage (Postgres database) and the third-party storage (Microsoft Graph) synchronized. Here's the approach I've adopted and the rationale behind it.

#### Synchronization Strategies:

- **Polling**: Regularly check Microsoft Graph for updates.
- **Webhooks**: Rely on Microsoft Graph's notifications for data changes.
- **Transactional Sync**: Keep both storages in sync in real-time with every change.
- **Batch Processing**: Synchronize accumulated changes either periodically or upon reaching a threshold.

#### Adopted Strategy: Polling

Given the simplicity and swiftness of its implementation, I've opted for the polling method, particularly suitable for projects at this scale.

### Handling Race Conditions in Polling

Although, race conditions in this project are almost 100% rare, to demonstrate the issue with synching many providers, I thought about providing more info about my approach.

Top challenges I have/had when choosing polling are/were:

- Concurrency: If multiple users/requests try to perform CRUD operations at the same time, it may lead to race conditions.
- Data Inconsistency: There's a risk of the in-memory array and local database drifting out of sync if operations on one are not reflected in the other.
- Error Handling: Failures during CRUD operations on either storage solution need to be handled gracefully to ensure one doesn't have an operation succeed while the other fails.
- Overlapping polls leading to data duplication or misses.
- Simultaneous data updates causing inconsistencies.
- Mismatched data processing sequences.

Now for them I had two solutions:

- Use **mutex locks** to prevent overlapping polls. I chose this one.
- Prioritize updates with timestamps.

**Note, this approach introduces latency in the app.**

Another more "real-world" solution would have be to use a **sequential message queue**, which is completly out of the context if this project.

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
