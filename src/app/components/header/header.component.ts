import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSearching: boolean = false;
  constructor() { }

  ngOnInit() {}

  public displaySearchBar(): void {
    this.isSearching = !this.isSearching;
  }

}
