//every student (994000) has 10 courses
//every professor (3000) has 2 courses

// karoč 50 pa katram kursam

// 24850 students for each faculty
// 100 professors for each faculty

const fs = require("fs");
stream = fs.createWriteStream("Faculty.txt")

var id = 1;
var prof_id = 1;
var student_id = 24850;

for(var i=1; i<51; i++){ // LAW courses
    for(var k=0; k<34; k++) //CHECK DIS NUMBER also students for each professor un profesori ir 2x vairāk pa kursiem
    {
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Law studies")
        id++;
        prof_id++;
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Law studies")
        prof_id--;
        id++;
        student_id++;
    }
    prof_id+=2;
}

for(var i=1; i<51; i++){ // med courses
    for(var k=0; k<34; k++) //CHECK DIS NUMBER also students for each professor un profesori ir 2x vairāk pa kursiem
    {
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Medical studies")
        id++;
        prof_id++;
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Medical studies")
        prof_id--;
        id++;
        student_id++;
    }
    prof_id+=2;
}
for(var i=1; i<51; i++){ // history courses
    for(var k=0; k<34; k++) //CHECK DIS NUMBER also students for each professor un profesori ir 2x vairāk pa kursiem
    {
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Law studies")
        id++;
        prof_id++;
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Law studies")
        prof_id--;
        id++;
        student_id++;
    }
    prof_id+=2;
}
for(var i=1; i<51; i++){ // LAW courses
    for(var k=0; k<34; k++) //CHECK DIS NUMBER also students for each professor un profesori ir 2x vairāk pa kursiem
    {
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Law studies")
        id++;
        prof_id++;
        stream.write(id);
        stream.write(student_id);
        stream.write(prof_id);
        stream.write(i);
        stream.write("Law studies")
        prof_id--;
        id++;
        student_id++;
    }
    prof_id+=2;
}