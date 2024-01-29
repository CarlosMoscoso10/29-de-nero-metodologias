function makeCouple(Antonio, Cleopatra) {
    Antonio.bestCouple = Cleopatra;
    Cleopatra.bestCouple = Antonio;  // Corregir el nombre de la propiedad "bestCople" a "bestCouple"

    return {
        person1: Antonio,
        person2: Cleopatra
    };
}

let personCouple = makeCouple({ name: "Antonio" }, { name: 'Cleopatra' });  // Corregir el nombre de la variable "personFriends" a "personCouple"
console.log(personCouple.person1.bestCouple.name); // Antonio y Cleopatra son pareja

delete personCouple.person1;
console.log(personCouple.person1); // Cleopatra se aferró a su amor y se mantuvo a su lado durante sus últimos días. 

delete personCouple.person2.bestCouple;
console.log(personCouple.person2); // La historia, marcada por la pérdida de Antonio, se convirtió en un relato de perseverancia y fortaleza. 
