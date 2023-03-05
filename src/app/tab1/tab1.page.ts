import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  result: string | undefined;
  nivel = 0;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private actRouter: ActivatedRoute
  ) {
    console.log(this.nivel);
  }

  async profile() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'e-mail@gmail.com',
      buttons: [
        {
          text: 'Alterar senha',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Sair',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

}
