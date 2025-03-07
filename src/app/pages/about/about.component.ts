import { CommonModule, DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SlicesPipe } from '../../pipes/slices.pipe';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SlicesPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  chain: string = 'Daki';
  html: string = '';
  nombre: number = 3.14;
  date: Date = new Date();
  tableau: string[] = [ 'Riri', 'Fifi', 'LouLou'];
  estAdmin: boolean = false;

}
