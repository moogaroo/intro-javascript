/* 
Exercice : trouver le résultat au bac selon la moyenne
*/

var moyenne = Number(prompt("Indiquer ici la moyenne"));

if ((moyenne < 10) && (moyenne >= 0 )) { //  0 <= moyenne < 10
        alert("le candidat est recalé");   
} else if ((moyenne >= 10) && (moyenne < 12))  { // 10 <= moyenne < 12
        alert("le candidat est reçu");
} else if ((moyenne >= 12)  && (moyenne <= 20)) { //  12 <= moyenne <= 20
        alert("le candidat est reçu avec mention");
} else { // ((moyenne < 0)  || (moyenne > 20) || (moyenne != Number))
        alert("Désolé, la note doit être un chiffre compris entre 0 et 20");
}
