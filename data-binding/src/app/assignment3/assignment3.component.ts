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

  genreOutput = window.document.getElementById("genre-output");

  constructor() { }

  ngOnInit(): void {
  }

  onTextEntry(event: Event): void {
    // this.genreOutput = window.document.getElementById("genre-output");
    if (this.givenGenre == "sciencefiction"){
      // The line below does not work, why? <-- genreOtuput is NULL !!, but why?
      // this.genreOutput.setAttribute("style", "color:red;");
      this.genreOutput.classList.add("scifi");
    }
  }
}
