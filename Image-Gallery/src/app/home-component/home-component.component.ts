import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  public tabs: any;
  
  ngOnInit() {
    this.tabs = [
                  {
                    id: '1',
                    name: 'Bio',
                  },
                  {
                    id: '2',
                    name: 'Career'
                  },
                  {
                    id: '3',
                    name: 'Hobby'
                  },
                  {
                    id: '4',
                    name: 'Connections'
                  }
                ]
  }


}
