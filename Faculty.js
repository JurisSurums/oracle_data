//NEED FIX:
// karoč 50 pa katram kursam
// 100 professors for each faculty
// and db

const fs = require("fs");
math = require("mathjs");
stream = fs.createWriteStream("Faculty.txt")

var course_prof = Array.from(Array(50), () => new Array(2)) // 50 courses with 2 professors 

var sum = 1;

for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

function returnFiveCourses(min){
        var arr = [];
        while(arr.length < 5){
        var r = Math.floor(Math.random() * 50) + min;
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

for(var i=1; i<24850; i++){
    var five_courses = returnFiveCourses(1);
    for(var j=0; j<5; j++)
    {
        //stream.write(id); //just id
        //stream.write(i); // student id
        //stream.write(five_courses[j]) //course_id
        //stream.write(course_prof_law[five_courses[j]][randomOf()])

        stream.write(id); //just id
        stream.write(i); // student id
        stream.write(five_courses[j]) //course_id
        stream.write(course_prof[five_courses[j]][randomOf()]) //prof_id
        id++;
    }
}


sum = 101;
for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

for(var i=24850; i<49700; i++){
    var five_courses = returnFiveCourses(50);
    for(var j=0; j<5; j++)
    {
        stream.write(id); //just id
        stream.write(i); // student id
        stream.write(five_courses[j]) //course_id
        stream.write(course_prof[five_courses[j]][randomOf()]) //prof_id
        id++;
    }
}


sum = 201;
for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

for(var i=49700; i<74550; i++){
    var five_courses = returnFiveCourses(100);
    for(var j=0; j<5; j++)
    {
        stream.write(id); //just id
        stream.write(i); // student id
        stream.write(five_courses[j]) //course_id
        stream.write(course_prof[five_courses[j]][randomOf()]) //prof_id
        id++;
    }
}


sum = 301;
for(var o=0; o<50; o++){
    for(var t=0; t<2; t++)
    {
        course_prof[o][t] = sum;
        sum++;
    }
}

for(var i=74550; i<99400; i++){
    var five_courses = returnFiveCourses(150);
    for(var j=0; j<5; j++)
    {
        stream.write(id); //just id
        stream.write(i); // student id
        stream.write(five_courses[j]) //course_id
        stream.write(course_prof[five_courses[j]][randomOf()]) //prof_id
        id++;
    }
}