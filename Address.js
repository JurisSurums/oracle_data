const fs = require('fs');
math = require("mathjs")

//Should be checked for duplicated values - possible 19000 unique, 3000 generated

var arr1 = ['Krisjana Valdemara', 'Brīvības', 'Aleksandra Caka', 'Ieriku', 'Dzelzavas', 'Augusta Deglava', 'Bikernieku', 'Pernavas', 'Tallinas', 'Satekles', 'Hanzas']; // Riga
var arr2 = ['Valnu', 'Vidzemes', '18. novembra', 'Kaunas']; // Dpils
var arr3 = ['Pulvera', 'Zirnu', 'Ganibu', 'Uliha']; // Liepaja

function returnCity() { 
    var rand = Math.random();
    var R = 'Rīga'; var D = 'Daugavpils'; var L = 'Liepāja';
    
    if (rand <= 0.6)
    {
        return R;
    }
    else
    {
        if (rand <= 0.8)
            return D;
        else
            return L;
    }
 } 

 function returnStreet(city) {
    var rand;
    if(city=='Rīga')
    {
        rand = Math.floor(Math.random() * arr1.length);
        return arr1[rand];       
    }
    else
    {
        if(city=='Daugavpils')
        {
            rand = Math.floor(Math.random() * arr2.length);
            return arr2[rand];
        }
        else
        {
            rand = Math.floor(Math.random() * arr3.length);
            return arr3[rand];
        }
    }

}

function returnZIP(city, street) {
    if(city=='Rīga')
    {
        var ZIP1 = ['Krišjāņa Valdemāra', 'Brīvības', 'Aleksandra Čaka'];
        var ZIP2 = ['Ieriķu', 'Dzelzavas', 'Augusta Deglava', 'Biķernieku'];
        
        if(ZIP1.includes(street))
        {
            return 'LV-1023';
        }
        else if(ZIP2.includes(street))
        {
            return 'LV-1046';
        }
        else
        {
            return 'LV-1060';
        }
    }
    else
    {
        if(city=='Daugavpils')
        {
            var ZIP1 = ['Vaļņu', 'Vidzemes'];
            if(ZIP1.includes(street))
            {
                return 'LV-2023';
            }
            else
            {
                return 'LV-2040';
            }
        }
        else
        {
            var ZIP1 = ['Pulvera', 'Zirņu'];
            if(ZIP1.includes(street))
            {
                return 'LV-3033';
            }
            else
            {
                return 'LV-3015';
            }
        }
    }
}

function returnRandom(amount){
    var number = Math.floor(Math.random() * amount);
    return number;
}

// https://livesql.oracle.com/apex/livesql/file/content_GL1PAE2CYMKDK32A42NZIGJVR.html
const message = fs.createWriteStream("address.txt");

/*message.write('CREATE SEQUENCE address_seq\r\n'
 + '  START WITH     1\r\n'
 + '  INCREMENT BY   1\r\n'
 + '  NOCACHE\r\n'
 + '  NOCYCLE\r\n\r\n'
);*/

for (let j = 1; j <10001; j++){

    var city = returnCity();
    var street = returnStreet(city)
    var ZIP = returnZIP(city, street)

    message.write('INSERT INTO Address (\r\n    address_ID \r\n  , street \r\n  , street_number \r\n  , city \r\n  , ZIP \r\n  , Country \r\n) \r\n\r\n');
    message.write('VALUES\r\n');

    message.write('(\r\n');
    message.write('      '   + j + '\r\n');
    message.write('    , \'' + street + '\'\r\n');
    message.write('    , '   + returnRandom(1000) + '\r\n');
    message.write('    , \'' + city + '\'\r\n');
    message.write('    , \'' + ZIP + '\'\r\n');
    message.write('    , \'' + 'Latvia' + '\'\r\n');
    message.write(');\r\n\r\n');
}

// for international students + beigas ';'
message.write('INSERT INTO Address (\r\n    address_ID \r\n  , street \r\n  , street_number \r\n  , city \r\n  , ZIP \r\n  , Country \r\n) \r\n\r\n');
message.write('VALUES\r\n');
message.write('(\r\n');
message.write('      ' + 10001 + '\r\n');
message.write('    , \'' + 'Punjaba' + '\'\r\n');
message.write('    , ' + returnRandom(1000) + '\r\n');
message.write('    , \'' + 'New Delhi' + '\'\r\n');
message.write('    , \'' + 'IND-1111' + '\'\r\n');
message.write('    , \'' + 'India' + '\'\r\n');
message.write(');\r\n\r\n');

message.write('INSERT INTO Address (\r\n    address_ID \r\n  , street \r\n  , street_number \r\n  , city \r\n  , ZIP \r\n  , Country \r\n) \r\n\r\n');
message.write('VALUES\r\n');
message.write('(\r\n');
message.write('      ' + 10002 + '\r\n');
message.write('    , \'' + 'Ultrecht' + '\'\r\n');
message.write('    , ' + returnRandom(1000) + '\r\n');
message.write('    , \'' + 'Amsterdam' + '\'\r\n');
message.write('    , \'' + 'NL-2211' + '\'\r\n');
message.write('    , \'' + 'Netherlands' + '\'\r\n');
message.write(');\r\n\r\n');

message.write('INSERT INTO Address (\r\n    address_ID \r\n  , street \r\n  , street_number \r\n  , city \r\n  , ZIP \r\n  , Country \r\n) \r\n\r\n');
message.write('VALUES\r\n');
message.write('(\r\n');
message.write('      ' + 10003 + '\r\n');
message.write('    , \'' + 'Naploeon' + '\'\r\n');
message.write('    , ' + returnRandom(1000) + '\r\n');
message.write('    , \'' + 'Paris' + '\'\r\n');
message.write('    , \'' + 'FR-9911' + '\'\r\n');
message.write('    , \'' + 'France' + '\'\r\n');
message.write(');\r\n\r\n');

message.write('INSERT INTO Address (\r\n    address_ID \r\n  , street \r\n  , street_number \r\n  , city \r\n  , ZIP \r\n  , Country \r\n) \r\n\r\n');
message.write('VALUES\r\n');
message.write('(\r\n');
message.write('      ' + 10004 + '\r\n');
message.write('    , \'' + 'Mozzarella' + '\'\r\n');
message.write('    , ' + returnRandom(1000) + '\r\n');
message.write('    , \'' + 'Milan' + '\'\r\n');
message.write('    , \'' + 'IT-01247' + '\'\r\n');
message.write('    , \'' + 'Italy' + '\'\r\n');
message.write(');\r\n\r\n');

message.write('INSERT INTO Address (\r\n    address_ID \r\n  , street \r\n  , street_number \r\n  , city \r\n  , ZIP \r\n  , Country \r\n) \r\n\r\n');
message.write('VALUES\r\n');
message.write('(\r\n');
message.write('      ' + 10005 + '\r\n');
message.write('    , \'' + 'Puskins street' + '\'\r\n');
message.write('    , ' + returnRandom(1000) + '\r\n');
message.write('    , \'' + 'Saint Petersburg' + '\'\r\n');
message.write('    , \'' + 'RU-3416' + '\'\r\n');
message.write('    , \'' + 'Russia' + '\'\r\n');
message.write(');\r\n\r\n');

message.close();