var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3308,
    user: "root",
    password: "root",
    database: "Bamazon"
  })


inquirer
  .prompt([
    {
      type: 'list',
      name: 'Choice',
      message: 'What do you want to do?',
      choices: [
        'View Products for Sale',
        'View Low Inventory',
        'Add to Inentory',
        'Add New Product',
      ]
    },
  ])
  .then(function(r){
      if(r.Choice=== 'View Products for Sale'){
          showProducts()
      }
  })

  function showProducts(){
    connection.query('SELECT * FROM products', function(err, res){
      if (err) throw err;
      console.log('=================================================');
      console.log('=================Items in Store==================');
      console.log('=================================================');
  
      for(i=0;i<res.length;i++){
        console.log(' Item ID: ' + res[i].id + '\n Product Name: ' + res[i].product_name + '\n Price: ' + '$' + res[i].price + '\n Quantity: ' + res[i].stock_quantity + '\n')
      }
          console.log('=================================================');
          
      })
  }