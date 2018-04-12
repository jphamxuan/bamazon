var inquirer = require('inquirer');
var mysql = require('mysql');
var amountOwed;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3308,
    user: "root",
    password: "root",
    database: "Bamazon"
  })

//function that shows items are in the database

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
        placeOrder()
		
		})
}

//function that lets user input product by id and the quantity they want to buy. 
function placeOrder(){
	inquirer.prompt([{
		name: 'selectId',
		message: 'Please enter the ID of the product you want to buy.',
		validate: function(value){
			var valid = value.match(/^[0-9]+$/)
			if(valid){
				return true
			}
				return 'Please enter a valid Product ID'
		}
    },
    {
		name:'quantity',
		message: 'How many of this product would you like to order?',
		validate: function(value){
			var valid = value.match(/^[0-9]+$/)
			if(valid){
				return true
			}
				return 'Please enter a numerical value'
		}
    }
])
//if quantity entered exceeds the quantity  left cancels order
    .then(function(answer){
	connection.query('SELECT * FROM products WHERE id = ?', [answer.selectId], function(err, res){
		if(answer.quantity > res[0].stock_quantity){
			console.log('Not enough minera....uh Not Enough Quantity. Order Canceled.');
			
        }
        //if item quantity is enough shows the total price. 
		else{
			amountOwed = res[0].price * answer.quantity;
			currentDepartment = res[0].DepartmentName;
			console.log('Thanks for your order');
			console.log('You owe $' + amountOwed);
			console.log('');
			//updates products table
			connection.query('UPDATE products SET ? Where ?', [{
				stock_quantity: res[0].stock_quantity - answer.quantity
			},{
				id: answer.selectId
			}], function(err, res){});
		}
	})

}, function(err, res){})
};

showProducts()