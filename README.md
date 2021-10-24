# Express API Sequelize + Mysql

## COMANDOS BÁSICOS
<br>
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