const fs = require('fs');

const message = fs.createWriteStream('persons.txt');

function returnRandom(amount){
    var number = Math.floor(Math.random() * amount);
    return number;
}

var names = ['James', 'Robert', 'John', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Ronald', 'George', 'Brian', 'Kevin', 'Kenneth', 'Joshua', 'Andrew', 'Paul', 'Steven', 'Donald'];

function returnName(){
    rand = Math.floor(Math.random() * arr1.length);
    return arr1[rand];     
}

message.write('create table Person(\r\n'
    + '  person_ID              NUMBER(7) PRIMARY KEY\r\n'
    + '  adress_ID              NUMBER(6) FOREIGN KEY\r\n'
    + ', first_name             VARCHAR2(50) NOT NULL\r\n'
    + ', last_name              VARCHAR2(50) NOT NULL\r\n'
    + ', email                  VARCHAR2(100) NOT NULL\r\n'
    + ', phone_number           NUMBER(8)\r\n'
    + ', Age                    NUMBER(3)\r\n'
    +');\r\n\r\n'
);

message.write('ALTER TABLE Person\r\n'
    + 'ADD CONSTRAINT fk_address'
    + 'FOREIGN KEY (adress_ID)'
    + 'REFERENCES address(adress_ID);'
)

message.write('CREATE SEQUENCE person_seq\r\n'
 + '  START WITH     1\r\n'
 + '  INCREMENT BY   1\r\n'
 + '  NOCACHE\r\n'
 + '  NOCYCLE;\r\n\r\n'
);

message.write('INSERT INTO Person ( person_ID \r\n , adress_ID \r\n , first_name \r\n  , last_name \r\n  , email \r\n  , phone_number \r\n  , Age \r\n) \r\n\r\n');
message.write('VALUES\r\n');
for (let i = 0; i <3000000; i++){
    var name = returnName();
    var lastname = returnLName();
    var email = returnEmail(name, lastname);

    message.write('(\r\n');
    message.write('      ' + 'person_seq.nextval' + '\r\n');
    message.write('    , \'' + returnRandom(3000) + '\'\r\n');
    message.write('    , ' + name + '\r\n');
    message.write('    , \'' + lastname + '\'\r\n');
    message.write('    , \'' + email + '\'\r\n');
    message.write('    , \'' + returnPhone() + '\'\r\n');
    message.write('    , \'' + returnAge() + '\'\r\n');
    message.write('),\r\n\r\n');
}