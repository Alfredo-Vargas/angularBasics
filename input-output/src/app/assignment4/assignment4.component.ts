import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {

  constructor() {
    console.log("Here the Constructor gets called");
  }

  @Input() body: String = "Here is the content";

  @ViewChild('cardHeaderReference') headerHtmlObject!: ElementRef;

  ngAfterViewChecked(){
    console.log(this.headerHtmlObject.nativeElement.className);
  }

  header: String = "Here is the card header";

  ngOnInit(): void {
    console.log("ngOnInit was called");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges was called!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit was called!");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy was called!");
  }
}
