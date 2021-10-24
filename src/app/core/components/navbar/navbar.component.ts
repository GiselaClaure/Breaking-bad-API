import { Component, Input, OnInit } from '@angular/core';
import { NavbarModel } from './models/navbar-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navbar!: NavbarModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
