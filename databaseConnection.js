const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;


// const dbConfigHeroku = {
// 	host: "us-cdbr-east-03.cleardb.com",
// 	user: "b7e39fcf1edef6",
// 	password: "0e3a5140",
// 	database: "heroku_4361c9a7ea9551c",
// 	multipleStatements: false
// };

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b314d31c9e4e2d",
	password: "800cb4bc",
	database: "heroku_b44c5164b905863",
	multipleStatements: false,
  };

  
const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "rootpw",
	database: "lab_example",
	multipleStatements: false,
  };

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		