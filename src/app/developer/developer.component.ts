import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer;

  constructor() { }

  ngOnInit() {
    this.developer = new Developer();
    this.developer.lastName = "Vauclin";
    this.developer.firstName = "Fabien";
    this.developer.age = 34;
    this.developer.sexe = "Homme";
    this.developer.bio = "Road to dev web.";
    this.developer.skills = [
      {name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png", site: "https://www.w3.org/TR/html52/"},
      {name: "CSS3", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png", site: "https://www.w3.org/Style/CSS/Overview.fr.html"},
      {name: "AngularJS 7", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png", site: "https://angular.io/"}
    ]


  }

}
