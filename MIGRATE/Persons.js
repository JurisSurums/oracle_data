// SHAISSEEE
//https://stackoverflow.com/questions/17288408/im-getting-an-error-in-sql-command-not-properly-ended
const fs = require('fs');

const message = fs.createWriteStream('./data/Persons.csv');

function returnRandom(amount){
    var number = Math.floor(Math.random() * amount) + 1;
    return number;
}

var Bnames = ['James', 'Robert', 'John', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Ronald', 'George', 'Brian', 'Kevin', 'Kenneth', 'Joshua', 'Andrew', 'Paul', 'Steven', 'Donald'];
var Gnames = ['Olivia','Emma', 'Ava', 'Charlotte', 'Sophia', 'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Camila', 'Gianna', 'Abigail', 'Luna', 'Ella', 'Elizabeth', 'Sofia', 'Emily', 'Avery', 'Mila', 'Scarlett', 'Eleanor', 'Madison', 'Layla', 'Penelope'];
var Lnames = ['Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez'];

function returnName(){
    var rand = Math.random();
    if (rand <= 0.5){
        var names = Math.floor(Math.random() * Bnames.length);
        return Bnames[names];    
    }
    else{
        var names = Math.floor(Math.random() * Gnames.length);
        return Gnames[names]; 
    }    
}

function returnLName(){
    var rand = Math.floor(Math.random() * Lnames.length);
    return Lnames[rand]; 
}

function returnEmail(name, lastname, i){
    var email = name + '_' + lastname + '_' + i + '@gmail.com';
    return email;
}

function returnPhone(){
    var phone = '+';
    for(var i=0; i<10; i++){
        var number = Math.floor(Math.random() * 9.99);
        phone += number;
    }
    return phone;
}

function returnAge(n){
    return n + Math.floor(Math.random()*19)
}

for (let i = 1; i <100001; i++){
    var name = returnName();
    var lastname = returnLName();
    var email = returnEmail(name, lastname, i);

    message.write(i + '');
    message.write(', '   + returnRandom(10000));
    message.write(', \'' + name + '\'');
    message.write(', \'' + lastname + '\'');
    message.write(', \'' + email + '\'');
    message.write(', \'' + returnPhone() + '\'');
    if(i>970000) {message.write(', \'' + returnAge(25) + '\'\r\n');}
    else {message.write(', ' + returnAge(18) + '\r\n');}
}
message.close();
