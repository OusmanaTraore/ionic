export interface Personne{
    name: string;
    age: number;
}

export class Etudiant {
   private name: string;
   private   university: string;

    //Declaration du constructeur
    public constructor(name?:string, university?:string){
        this.name= name;
        this.university= university;
        console.log("Un objet Etudiant");
    }
// Declaration d'une méthode
    public information(){
        console.log(this.name + " " + this.university);
    }
}
