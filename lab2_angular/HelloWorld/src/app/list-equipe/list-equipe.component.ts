import { Component, OnInit } from '@angular/core';
import {Candidat} from '../models';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  equipe:string= "Global Knowledge - Equipe mobile";
  names:string[] = ['Bédélo', "Nassim", "Mariem","Isabelle","Liam","Ilhem","Safa","Kenji","Ousmana","Olivier","Assia","Wendong","Rado","Catherine"];
  // students:Candidat[]
  students:Candidat[]= [
    {
      name:"Claude",
      age:25,
      email:"@gmail.com"
    },
    {
      name:"Olivier",
      age:35,
      email:"@yahoo.com"
    },
    {
      name:"Ousmana",
      age:36,
      email:"@gmail.fr"
    },
    {
      name:"Hade",
      age:28,
      email:"@yahoo.fr"
    }
  
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
