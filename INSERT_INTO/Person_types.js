//
const fs = require('fs');
math = require("mathjs")

const message = fs.createWriteStream('./data/Person_types.txt');

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
    message.write('INSERT INTO Students (\r\n    Student_ID \r\n  , Person_ID \r\n  , Semester\r\n) \r\n\r\n');
    message.write('VALUES\r\n');

    message.write('(\r\n');
    message.write('      '   + i + '\r\n');
    message.write('    , '   + i + '\r\n');
    message.write('    , '   + returnRandom(12) + '\r\n');
    message.write(');\r\n\r\n');
}

var prof_id = 1;
for(var k=99601; k<100001; k++)
{
    message.write('INSERT INTO Professors (\r\n    Professor_ID \r\n  , Person_ID \r\n  , Academic_rank\r\n) \r\n\r\n'); // NEED CHANGE
    message.write('VALUES\r\n');

    message.write('(\r\n');
    message.write('      '   + prof_id + '\r\n');
    message.write('    , '   + k + '\r\n');
    message.write('    , \''   + returnDegree() + '\'\r\n');
    message.write(');\r\n\r\n');
    prof_id++;
}

message.close();