import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer = new Developer("Vauclin", "Fabien", 34, "Masculin", "Road to dev Web", [
    new Skill ("HTML","https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png","https://fr.wikipedia.org/wiki/HTML5"),
    new Skill ( "Angular7","https://angular.io/assets/images/logos/angular/angular.png","https://angular.io/")
  ]);

  constructor() { }

  ngOnInit() {
  }

}
