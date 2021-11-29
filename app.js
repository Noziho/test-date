let result = document. getElementById("test");
let result2 = document.getElementById("test2");

let aujourdhui = new Date();

let  aujourdhui2 = new Date();
aujourdhui2.setDate(5);
aujourdhui2.setMonth(10);
aujourdhui2.setFullYear(2019);
aujourdhui2.setHours(23);
aujourdhui2.setMinutes(59);
aujourdhui2.setSeconds(35);
aujourdhui2.setMilliseconds(200);

result.innerHTML =
" Jour de la semaine: " + aujourdhui.getDay() + "<br>" +
" Jour du mois: " + aujourdhui.getDate() + "<br>" +
" Mois en cours version JS: " + aujourdhui.getMonth() + "<br>" +
" Mois en cours version humaine: " + aujourdhui.getMonth() + 1 + "<br>" +
" Année au format 4 chiffres:" + aujourdhui.getFullYear() + "<br>" +
" Année au format 2 chiffres : " + aujourdhui.getFullYear().toString().slice(2) + "<br>" +
" Heure: " + aujourdhui.getHours() + "<br>" +
" Heure avec un 0 devant si besoin: " + aujourdhui.getHours().toString().padStart(2, 0)  + "<br>" +
" Minutes: " + aujourdhui.getMinutes() + "<br>" +
"Minutes avec un zéro devant si besoin: " + aujourdhui.getMinutes().toString().padStart(2, 0) + "<br>" +
"Secondes: " + aujourdhui.getSeconds() + "<br>" +
"Millisecondes: " + aujourdhui.getMilliseconds();

result2.innerHTML =
    " Jour de la semaine: " + aujourdhui2.getDay() + "<br>" +
    " Jour du mois: " + aujourdhui2.getDate() + "<br>" +
    " Mois en cours version JS: " + aujourdhui2.getMonth() + "<br>" +
    " Mois en cours version humaine: " + aujourdhui2.getMonth() + 1 + "<br>" +
    " Année au format 4 chiffres:" + aujourdhui2.getFullYear() + "<br>" +
    " Année au format 2 chiffres : " + aujourdhui2.getFullYear().toString().slice(2) + "<br>" +
    " Heure: " + aujourdhui2.getHours() + "<br>" +
    " Heure avec un 0 devant si besoin: " + aujourdhui2.getHours().toString().padStart(2, 0)  + "<br>" +
    " Minutes: " + aujourdhui2.getMinutes() + "<br>" +
    "Minutes avec un zéro devant si besoin: " + aujourdhui2.getMinutes().toString().padStart(2, 0) + "<br>" +
    "Secondes: " + aujourdhui2.getSeconds() + "<br>" +
    "Millisecondes: " + aujourdhui2.getMilliseconds();
