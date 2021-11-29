let result = document. getElementById("test")
let aujourdhui = new Date();

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
