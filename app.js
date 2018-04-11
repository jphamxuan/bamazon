var inquirer = require('inquirer');

var userInput1 = process.argv[2]
var userInput2 = process.argv[3]

inquirer
  .prompt([
    {
      type: 'list',
      name: 'Choice',
      message: 'What do you want to do?',
      choices: [
        'Post an Item',
        'Bid on an Item',
      ]
    },
  ])
  .then(function(r){
      if(r.Choice=== 'Post an Item'){
          console.log('hi')
      }
  })