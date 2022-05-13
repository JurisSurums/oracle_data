//
const fs = require('fs');
math = require("mathjs")

const message = fs.createWriteStream('./data/students.csv');

function returnDegree(){
    var degrees =  ['Instructor', 'Assistant Professor', 'Associate Professor', 'Professor'];
    var deg = math.floor(math.random()*4);
    return degrees[deg];
}

function returnRandom(n){
    var r = Math.floor(Math.random() * n) + 1;
    return r;
}

for(var i=1; i<99601; i++)
{
    message.write(i + '');
    message.write(', ' + i);
    message.write(', ' + returnRandom(12) + '\r\n');
}
message.close();

const message1 = fs.createWriteStream('./migrations/professors.csv');

var prof_id = 1;
for(var k=99601; k<100001; k++)
{
    message1.write(prof_id + '');
    message1.write(', '   + k);
    message1.write(', \'' + returnDegree() + '\'\r\n');
    prof_id++;
}

message1.close();