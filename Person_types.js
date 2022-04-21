//
const fs = require('fs');
const message = fs.createWriteStream('persons.txt');

for(var i=1; i<99301; i++)
{
    message.write('INSERT INTO Students (\r\n    Student_ID \r\n  , Person_ID \r\n  , semester\r\n) \r\n\r\n');
    message.write('VALUES\r\n');

    message.write('(\r\n');
    message.write('      '   + i + '\r\n');
    message.write('    , \'' + i + '\'\r\n');
    message.write('    , '   + returnRandom(12) + '\r\n');
    message.write('),\r\n\r\n');
}

var prof_id = 1;
for(var k=99301; k<99701; k++)
{
    message.write('INSERT INTO Students (\r\n    Student_ID \r\n  , Person_ID \r\n  , semester\r\n) \r\n\r\n'); // NEED CHANGE
    message.write('VALUES\r\n');

    message.write('(\r\n');
    message.write('      '   + prof_id + '\r\n');
    message.write('    , \'' + k + '\'\r\n');
    message.write('    , '   + returnDegree(12) + '\r\n');
    message.write('),\r\n\r\n');
    prof_id++;
}
for(var j=99701; j<100001; j++)
{
    
}