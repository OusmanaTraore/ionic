// console.log('Hola Hermana');
// Déclaration de la méthode calcul
// function calcul(){
//     console.log("Difference entre var et let");
//     let i;
//     for ( i =0; i<15; i++){
//         console.log("i=" + i);
//     }
//     console.log("i final= " + i);
// }
// //Appel de la methode calcul
// calcul();

/**
 * les types en typescript
 */
//  type Number
//  let moy:number = 16;
//  console.log(moy);

//  moy = "abc";

// type Any
// let variable:any;

// variable =18;
// variable ="abd";

// Type Tableau
//Déclaration d'un tableau en utilisant un foreach

// // let tab: any[]= [20, "abc", true,false, 'a'];

// // let i:any;
// // for(i of tab){
// //     console.log(i);
// // }

// /**
//  * asting en TypeScript
//  */
// let message:string;
// message = "abc";
// let res:boolean = message.startsWith("a");


// let mes:any;
// mes = "abc";
// let r:boolean = (<string>mes).startsWith("a");

// //Expression lambda == arrow function

//Declaration classique
function test(x:number, y:number){
    return console.log(x+y);
}
test(10,20);

// Déclaration à l'aide de la  nouvelle syntaxe

let myfunction = (a:number, b:number) => {return console.log(a+b)};

myfunction(1,2);
/**
 * Interfaces
 * Les interfaces en TypeScript permettent de développer des modèles
 */
// Export est l'équivalent de public en java

import {Etudiant, Personne} from './modèles';
function affiche(p:Personne){
    {console.log(p.name + p.age)};
}
let affichage = ( p:Personne )=> {console.log(p.name + p.age)};

affichage(
    {
        name:"Jean",
        age:30
}
)
/**
 * ==========
 */
/**
 * Classes
 * Les classes en TypeScript
 */
 let e :Etudiant = new Etudiant("Ousmana","FST");
 let e2:Etudiant = new Etudiant();
 e.information();