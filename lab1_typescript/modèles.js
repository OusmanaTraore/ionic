"use strict";
exports.__esModule = true;
exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    //Declaration du constructeur
    function Etudiant(name, university) {
        this.name = name;
        this.university = university;
        console.log("Un objet Etudiant");
    }
    // Declaration d'une méthode
    Etudiant.prototype.information = function () {
        console.log(this.name + " " + this.university);
    };
    return Etudiant;
}());
exports.Etudiant = Etudiant;
