# Express API Sequelize + Mysql

## COMANDOS BÁSICOS
<br>

![image](https://user-images.githubusercontent.com/16636086/138618084-e6776834-ff59-4763-9489-98afb98b9283.png)


```
npm init
npm install
npm update
npm run dev
npm run start

npm install sequelize-cli -g
npm install --save sequelize mysql2 sequelize-cli
sequelize
sequelize init
sequelize model:generate --name movie --attributes title:string
sequelize model:generate --name category --attributes type:string, age:integer
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-movie
sequelize seed:generate --name demo-category
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all
```
