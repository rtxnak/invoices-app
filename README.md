# invoices App
## About project
This project was developed to a technical test with the [skills](#skills) on a full stack situation. Its a single front page and an API connected to a relational database that show an invoices list based on the information below:

[Figma](https://www.figma.com/proto/NY1fe6PAZ6DKeD9eOzyrju/Teste-Cashfroce)<br>
[Database](https://gist.githubusercontent.com/Allan96/a3538e88600559587155a01b0330124e/raw/c7ad85e464dca320fbf54b5e84fb1dd79a888511/teste.sql)

## Skills 
On FrontEnd:
 - VueJs and Tailwindcss to create the pages;

On BackEnd:
 - Express framework from Node.js and ORM library Sequelize for MySQL database modeling;

## Opening the app locally

On terminal:

1. Please install and check the version of the following services on your system:

[NPM & Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
```bash
  npm -v
```
```bash
  node -v
```
[MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
```bash
  mysql --version
```
[Docker](https://docs.docker.com/get-docker/)
```bash
  docker -v
```
[Docker-Compose](https://docs.docker.com/compose/install/)
```bash
  docker-compose -v
```
2. Clone the repository in your preferred folder
```bash
  git clone git@github.com:rtxnak/invoices-app.git
```
3. Install the dependencies
  * move to app folder:
    ```bash
       cd invoices-app/
    ```
  * Install front-end and back-end dependencies:
    ```bash
       npm run install:all
    ```
4. Create enviroment file for database conection:
  * move to backend folder:
    ```bash
       cd back-end/
    ```
  * create the file _.env_ on invoices-app/back-end based on the exemple:
    ```bash
       MYSQL_USER=root #your MySQL user
       MYSQL_PASSWORD=PASSWORD #your MySQL password
       MYSQL_DATABASE=cashforce_v3
       MYSQL_HOST=localhost
    ```
  * move back to main folder:
    ```bash
       cd ..
    ```
5.1 Run the application without docker-compose
  * Start the back-end:
    ```bash
       npm run backend
    ```
  * On a new terminal start the front-end:
    ```bash
       npm run frontend
    ```
5.2 Run the application with docker-compose
```bash
  npm run compose:up
```

6. The application can be accessed through:

    http://localhost:8080/
    
7. Finishing the application
  * Without docker-compose:
      ```bash
         CTRL+C OR CMD+C on terminal
    ```
    
  * With docker-compose:
    ```bash
       npm run compose:down
    ```
