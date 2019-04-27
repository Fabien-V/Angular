import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette party';


  isThisIngredientVital:boolean = true;

  displayGuestList:boolean=true;

  firstMovieList:boolean=true;

  showlist:boolean=true;


  songList:string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
}


