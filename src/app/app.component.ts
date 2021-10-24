import { Component } from '@angular/core';
import { NavbarModel } from './core/components/navbar/models/navbar-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nabvar: NavbarModel[]=[
    {
      icon:{
        src:'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4155.png',
        alt:'',
      },
      name: 'Home',
      link:'/home',
    },
    {
      icon:{
        src:'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4155.png',
        alt:'',
      },
      name: 'Characters',
      link:'/characters',
    },
    {
      icon:{
        src:'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4155.png',
        alt:'',
      },
      name: 'Episodes',
      link:'/episodes',
    },
    {
      icon:{
        src:'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4155.png',
        alt:'',
      },
      name: 'quotes',
      link:'/quotes',
    },
  ]
}
