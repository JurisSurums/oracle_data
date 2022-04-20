//
message.write('INSERT INTO Students (\r\n    Student_ID \r\n  , Person_ID \r\n  , semester\r\n) \r\n\r\n');
message.write('VALUES\r\n');
for(var i=1; i<99401; i++)
{
    message.write('(\r\n');
    message.write('      ' + i + '\r\n');
    message.write('    , \'' + i + '\'\r\n');
    message.write('    , ' + returnRandom(12) + '\r\n');
    message.write('),\r\n\r\n');
}

var prof_id = 1;
for(var k=99401; k<99701; k++)
{
    message.write('(\r\n');
    message.write('      ' + prof_id + '\r\n');
    message.write('    , \'' + k + '\'\r\n');
    message.write('    , ' + returnDegree(12) + '\r\n');
    message.write('),\r\n\r\n');
    prof_id++;
}
for(var j=99701; j<100001; j++)
{
    //employyes
}