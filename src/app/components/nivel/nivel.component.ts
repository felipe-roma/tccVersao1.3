import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss'],
})
export class NivelComponent {

  @Input() nivel?: string;

}
