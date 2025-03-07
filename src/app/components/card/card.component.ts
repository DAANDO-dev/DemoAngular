import { Component, Input, input } from '@angular/core';
import { CardModel } from '../../models/card.models';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  data: CardModel = {
    title: 'Title',
    description: 'Default description',
    imageUrl: 'https://picsum.photos/200'
  }

}
