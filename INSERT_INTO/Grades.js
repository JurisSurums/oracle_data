//NEED FIX:
// karoč 50 pa katram kursam
// 100 professors for each faculty
// and db

const fs = require("fs");
math = require("mathjs");
stream = fs.createWriteStream("./data/Grades.txt")

var course_prof = Array.from(Array(50), () => new Array(2)) // 50 courses with 2 professors 

var sum = 1;

for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

//returns 5 random courses, min value is the faculty id begining number (1,50,100,150) 1-50, 50-100, 100-150, 150-200
function returnFiveCourses(){
        var arr = [];
        while(arr.length < 5){
        var r = Math.floor(Math.random() * 49) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

function randomOf(){
        var one = math.random();
        if(one<0.5){
            return 0;
        }
        return 1;
}

var id = 1;
var five_courses;
var ZeroOne;
var oneCourse

// computer science
for(var i=1; i<24901; i++){
    five_courses = returnFiveCourses();
    for(var j=0; j<5; j++)
    {
        stream.write('INSERT INTO Grades ( Grades_ID \r\n , Student_ID \r\n , Professor_ID \r\n , Course_ID \r\n , Faculty_name \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');
      
        stream.write('(\r\n');
        stream.write('      ' + id + '\r\n'); //just id
        stream.write('    , ' + i + '\r\n'); // student id
        ZeroOne = randomOf();
        oneCourse = five_courses[j];

        stream.write('    , ' + course_prof[oneCourse][ZeroOne] + '\r\n') //prof_id
        stream.write('    , ' + five_courses[j] + '\r\n') //course_id
        stream.write('    , \'Computer science\'\r\n'); //type
        stream.write(');\r\n\r\n');
        id++;
    }
}

//medicine
sum = 101;
for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

for(var i=24901; i<49801; i++){
    var five_courses = returnFiveCourses();
    for(var j=0; j<5; j++)
    {
        stream.write('INSERT INTO Grades ( Grades_ID \r\n , Student_ID \r\n , Professor_ID \r\n , Course_ID \r\n , Faculty_name \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');

        stream.write('(\r\n');
        stream.write('      ' + id + '\r\n'); //just id
        stream.write('    , ' + i + '\r\n'); // student id
        ZeroOne = randomOf();
        oneCourse = five_courses[j];
        
        stream.write('    , ' + course_prof[oneCourse][ZeroOne] + '\r\n') //prof_id
        stream.write('    , ' + (50 + five_courses[j]) + '\r\n') //course_id
        stream.write('    , \'Medicine\'\r\n'); //type
        stream.write(');\r\n\r\n');
        id++;
    }
}

//law
sum = 201;
for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

for(var i=49801; i<74701; i++){
    var five_courses = returnFiveCourses();
    for(var j=0; j<5; j++)
    {
        stream.write('INSERT INTO Grades ( Grades_ID \r\n , Student_ID \r\n , Professor_ID \r\n , Course_ID \r\n , Faculty_name \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');
      
        stream.write('(\r\n');
        stream.write('      ' + id + '\r\n'); //just id
        stream.write('    , ' + i + '\r\n'); // student id
        ZeroOne = randomOf();
        oneCourse = five_courses[j];

        stream.write('    , ' + course_prof[oneCourse][ZeroOne] + '\r\n') //prof_id
        stream.write('    , ' + (100 + five_courses[j]) + '\r\n') //course_id

        stream.write('    , \'Law\'\r\n'); //type
        stream.write(');\r\n\r\n');
        id++;
    }
}

//history
sum = 301;
for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

for(var i=74701; i<99601; i++){
    var five_courses = returnFiveCourses();
    for(var j=0; j<5; j++)
    {
        stream.write('INSERT INTO Grades ( Grades_ID \r\n , Student_ID \r\n , Professor_ID \r\n , Course_ID \r\n , Faculty_name \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');
      
        stream.write('(\r\n');
        stream.write('      ' + id + '\r\n'); //just id
        stream.write('    , ' + i + '\r\n'); // student id
        ZeroOne = randomOf();
        oneCourse = five_courses[j];

        stream.write('    , ' + course_prof[oneCourse][ZeroOne] + '\r\n') //prof_id
        stream.write('    , ' + (150 + five_courses[j]) + '\r\n') //course_id
        stream.write('    , \'History\'\r\n'); //type
        stream.write(');\r\n\r\n');
        id++;
    }
}

stream.close();