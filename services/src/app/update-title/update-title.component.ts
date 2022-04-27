import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MyLogService } from '../my-log.service'

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  styleUrls: ['./update-title.component.css'],
  providers: [Title, MyLogService]
})
export class UpdateTitleComponent implements OnInit {

  inputTitle: string;
  constructor(private title: Title, private log: MyLogService) { }

  ngOnInit(): void {
    this.inputTitle = '';
  }

  onAddClick(): void {
    this.title.setTitle(this.inputTitle);
    this.log.sendToLog('New Title = ' + this.inputTitle);
  }

}
