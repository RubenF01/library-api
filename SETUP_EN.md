# Setup

Welcome to the development environment setup instructions!

## Required software

- [node](https://nodejs.org/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [postgresql](https://www.datacamp.com/tutorial/installing-postgresql-windows-macosx)

## Instructions

1. Clone the repository
2. Create a database in postgresql
3. Run npm install in the project folder
4. Configure your postgresql database connection string in the .env file using the example provided in the .env.example file
5. Run the following command to migrate the database: npx prisma migrate dev
6. Run the following command to seed the database: npx prisma db seed
7. Run the following command to start the server: nodemon

## Endpoints

- GET: /books
- GET: /book/:id
- GET: /book/:id/:page_number/:format (format can be html or text)
