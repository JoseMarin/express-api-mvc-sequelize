# Express API Sequelize + Mysql + jwt

## COMANDOS BÁSICOS
<br>

![image](https://user-images.githubusercontent.com/16636086/138780246-dc69ba86-c111-42e6-8079-35ffeba723f9.png)


```
npm init
npm install
npm update
npm run dev
npm run start

npm install cors jsonwebtoken bcrypt
sequelize model:generate --name user --attributes name:string, password:string, email:string
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all
```

## END-POINTS

```

#### Register
POST - localhost:3000/api/signup - { "name": "root", "email": "root@email.com",  "password": "password" }

#### Login
POST - localhost:3000/api/signin - { "email": "root@email.com",  "password": "password" }

#### Home
GET - localhost:3000

#### Movies
GET - localhost:3000/movies
GET - localhost:3000/movies/:id
GET - localhost:3000/movies/name/:title
POST - localhost:3000/movies
PUT - localhost:3000/movies:id
DELETE - localhost:3000/movies
DELETE - localhost:3000/movies:id

#### Categories
GET - localhost:3000/categories
GET - localhost:3000/categories/:id
GET - localhost:3000/categories/name/:title
POST - localhost:3000/categories
PUT - localhost:3000/categories:id
DELETE - localhost:3000/categories
DELETE - localhost:3000/categories:id
```
