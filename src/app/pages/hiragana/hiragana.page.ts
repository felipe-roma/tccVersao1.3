import { Component, OnInit } from '@angular/core';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.page.html',
  styleUrls: ['./hiragana.page.scss'],
})
export class HiraganaPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  avancar(item: IonItem) {
    item.disabled = false;
  }
}
