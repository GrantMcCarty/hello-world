import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {

  dataSource;
  editing;
  displayedColumns = ['id', 'name', 'color', 'power', 'edit' ]

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.editing = false;
    this.heroService.getHeroes()
      .subscribe(heroes => this.dataSource = heroes);
  }

  saveHero(hero) {
    if (this.editing && hero) {
      this.heroService.getHero(hero.id).subscribe(data => data = hero);
    }
    this.editing = false;
    this.revertHidden(hero)
  }

  revertHidden(hero) {
    var element = document.getElementById(hero.id);
    console.log("parent " + element)
    for (let x = 1; x < element.children.length; x++) { //start at one to skip past Name column which is not editable
      let child = element.children[x];
      console.log("child " + child)
      for (let y = 0; y < child.children.length; y++) {
        let grandchild = child.children[y];
        console.log(grandchild)
        grandchild.hasAttribute("hidden") ? grandchild.removeAttribute("hidden") : grandchild.setAttribute("hidden", "");
      }
    }
  }

  editHero(hero) {
    if(this.editing) return;
    this.revertHidden(hero);
    this.editing = true;
  }

}
