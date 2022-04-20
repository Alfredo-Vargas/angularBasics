import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  givenTitle: string = "";
  givenAuthor: string = "";
  givenGenre: string = "";
  givenImage: string = "";
  isSciFi: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onTitleEntry(event: Event): void {
    if (this.givenTitle == "The Hunger Games" || this.givenTitle == "the hunger games") {
      this.givenAuthor = "Suzzane Collins";
      this.givenGenre = "sciefiction";
      this.givenImage = "../../assets/TheHungerGames.jpg";
    }
    // how to implement this most robust to any change?
    this.isSciFi = this.givenGenre === "sciefiction" ? true : false;
  }
}
