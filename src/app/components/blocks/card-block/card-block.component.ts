import { Component } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent {
  titleCard = 'Willey';
  numberCard = '';
  subTitleCard = '';
  contentCard = '';
  angularImage: string;

  constructor() {
    this.angularImage = '/assets/img/willey_text.png'; 
  }
}
