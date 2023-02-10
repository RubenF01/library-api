# Configuración

¡Bienvenido a las instrucciones de configuración del entorno de desarrollo!

## Software requerido

- [node](https://nodejs.org/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [postgresql](https://www.datacamp.com/tutorial/installing-postgresql-windows-macosx)

## Instrucciones

1. Clona el repositorio
2. Crea una base de datos en postgresql
3. Ejecuta npm install en la carpeta del proyecto
4. Configura el string de conexión a tu base de datos de postgresql en el archivo .env usando el ejemplo proporcionado en el archivo .env.example
5. Ejecuta el siguiente comando para migrar la base de datos: npx prisma migrate dev
6. Ejecuta el siguiente comando para poblar la base de datos: npx prisma db seed
7. Ejecuta el siguiente comando para iniciar el servidor: nodemon

## Endpoints

- GET: /books
- GET: /book/:id
- GET: /book/:id/:page_number/:format (el formato puede ser text o html)
