const fs = require('fs');
math = require("mathjs")

//Should be checked for duplicated values - possible 19000 unique, 3000 generated

var arr1 = ['Krišjāņa Valdemāra', 'Brīvības', 'Aleksandra Čaka', 'Ieriķu', 'Dzelzavas', 'Augusta Deglava', 'Bikernieku', 'Pernavas', 'Tallinas', 'Satekles', 'Hanzas']; // Riga
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
const message = fs.createWriteStream("./data/Address.csv");

for (let j = 1; j <10001; j++){

    var city = returnCity();
    var street = returnStreet(city)
    var ZIP = returnZIP(city, street)

    message.write(j + '');
    message.write(', \'' + street + '\'');
    message.write(', '   + returnRandom(1000));
    message.write(', \'' + city   + '\'');
    message.write(', \'' + ZIP    + '\'');
    message.write(', \'' + 'Latvia' + '\'\r\n');
}

message.close();