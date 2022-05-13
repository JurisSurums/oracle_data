// SHAISSEEE
//https://stackoverflow.com/questions/17288408/im-getting-an-error-in-sql-command-not-properly-ended
const fs = require('fs');

const message = fs.createWriteStream('./data/Persons.txt');

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

    message.write('INSERT INTO Persons ( Person_ID \r\n , Adress_ID \r\n , First_name \r\n  , Last_name \r\n  , Email \r\n  , Phone_number \r\n  , Age \r\n) \r\n\r\n');
    message.write('VALUES\r\n');

    message.write('(\r\n');
    message.write('      '   + i + '\r\n');
    message.write('    , '   + returnRandom(3000) + '\r\n');
    message.write('    , \'' + name + '\'\r\n');
    message.write('    , \'' + lastname + '\'\r\n');
    message.write('    , \'' + email + '\'\r\n');
    message.write('    , \'' + returnPhone() + '\'\r\n');
    if(i>970000) {message.write('    , \'' + returnAge(25) + '\'\r\n');}
    else {message.write('    , \'' + returnAge(18) + '\'\r\n');}
    message.write(');\r\n\r\n');
}
message.close();
