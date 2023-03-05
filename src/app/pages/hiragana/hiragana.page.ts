import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.page.html',
  styleUrls: ['./hiragana.page.scss'],
})
export class HiraganaPage implements OnInit {
  // -----------------------------------------------------------------------
  nivel: number = 1;
  // -----------------------------------------------------------------------
  display1 = 'block';
  niveis: Array<string> = [];

  constructor(
    private router: Router,
    private actRouter: ActivatedRoute,
  ) {}

  ngOnInit() {
    //   this.actRouter.params.subscribe((data: any) => {
    //   this.nivel = data.nivel;
    //   console.log(this.nivel);
    // });

    // ------------------------------------------------------------------------
    console.log(this.nivel); // <- MÉTODO PARA PEGAR DO BANCO DE DADOS FIREBASE
    // ------------------------------------------------------------------------
      
      if ( this.nivel > 0 ) {
        for (let i = 0; i < this.nivel; i++) {
          this.niveis.push(`Nível ${(i+1)}`);  
        }
      }
  }

}
