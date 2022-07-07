
  
# E-Commerce Backend
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is an e-commerce backend. The project uses several frameworks: express.js, sequelize, mysql2, and dotenv. The project can be run using Insomnia to view the contents of the database.

## Table of contents
* [usage](#Usage)
* [contribution](#Contributing)
* [install](#Install)
* [tests](#Tests)
* [username](#Username)
* [email](#Email)
* [license](#License)

## Usage

The app is uses Insomnia to view the database. The user must create the database in in mysql and seed the database. The user must also connect to the database using the .env file.

## Contributing

The user can fork the repo for further development.

## Install and Run
```
npm i express mysql2 dotenv seqelize
```

Configure the username, password, and datebase name.
```
DB_USER=''
DB_PW=''
DB_NAME='ecommerce_db'
```

Run the seed file
```
npm run seed
```

Start the server
```
node server.js
```

## Video link of working application

https://drive.google.com/file/d/1F7Em-dWq7F63IitEkHERDkbUmIXg7Edg/view

## Username

tenues0

## Email

theodore.ayoub@gmail.com

## License

Information about the MIT can be found at: https://opensource.org/licenses/MIT
You are licensing this product in the year 2022.


Copyright 2022 Theodore Ayoub
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
