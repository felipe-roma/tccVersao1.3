import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  AlertController,
  IonBackButton,
  IonButton,
  IonCol,
  ToastController,
} from '@ionic/angular'

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {
  hiraganaA = ['あ', 'い', 'う', 'え', 'お']
  romaji = ['A', 'I', 'U', 'E', 'O']
  resposta = ''
  front = ''
  back = ''
  random = this.sortear()
  p: number
  nivel: string = '1'
  modificar = 1
  display1 = 'block'
  display2 = 'none'

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router,
    private actRouter: ActivatedRoute,
  ) {
    this.front = this.hiraganaA[this.random]
    this.back = this.romaji[this.random]
    this.p = 0
    this.modificar = 1
  }

  ngOnInit() {
    // this.actRouter.params.subscribe((data: any) => {
    //   this.nivel = data.nivel;
    // });
  }

  progredir(v: number) {
    this.p += v
    if (this.p == 100) {
      setTimeout(() => {
        this.concluir()
        this.p = 0
      }, 1500)
    } else if (this.p <= 0) {
      this.p = 0
    }
  }

  responder(r: string, id: string) {
    const e = document.querySelector(`#${id}`)
    e?.classList.add('animate__animated', 'animate__zoomOut', 'animate__faster')
    console.log(e)

    this.resposta = this.romaji[this.hiraganaA.indexOf(r)]
    setTimeout(() => {
      this.verificar(r)
      this.virar()
      setTimeout(() => {
        this.resposta = ''
        this.desvirar()
        this.random = this.sortear()
        e?.classList.remove('animate__animated', 'animate__zoomOut', 'animate__faster')
        console.log(e)
        setTimeout(() => {
          this.front = this.hiraganaA[this.random]
          this.back = this.romaji[this.random]
        }, 240)
      }, 1500)
    }, 600)
  }

  verificar(r: string) {
    if (r == this.front) {
      this.progredir(10)
      setTimeout(() => {
        this.presentToast('Correto!', 'success')
      }, 200)
    } else {
      this.progredir(-10)
      setTimeout(() => {
        this.presentToast('Errado', 'danger')
      }, 200)
    }
  }

  sortear() {
    return Math.floor(Math.random() * 5)
  }

  virar() {
    var checkbox = document.querySelector('#flip')
    function ativarCheckbox(el: any) {
      el.checked = true
    }
    ativarCheckbox(checkbox)
  }

  desvirar() {
    var checkbox = document.querySelector('#flip')
    function desativarCheckbox(el: any) {
      el.checked = false
    }
    desativarCheckbox(checkbox)
  }

  async concluir() {
    const alert = await this.alertController.create({
      header: 'MUITO BEM!',
      subHeader: `Nível ${this.nivel} concluído`,
      buttons: [
        {
          text: 'Voltar',
          handler: () => {
            this.router.navigateByUrl('/hiragana')
          },
        },
        {
          text: 'Próximo nível',
          handler: () => {
            this.router.navigateByUrl('/carregando')
          },
        },
      ],
    })
    alert.classList.add('animate__animated', 'animate__heartBeat')
    await alert.present()
  }

  async presentToast(m: string, c: string) {
    const toast = await this.toastController.create({
      message: m,
      duration: 500,
      position: 'middle',
      color: c,
    })

    await toast.present()
  }

  trocarTeclado() {
    if (this.modificar == 1) {
      this.display1 = 'none'
      this.display2 = 'block'
      this.modificar = 0
    } else {
      this.display1 = 'block'
      this.display2 = 'none'
      this.modificar = 1
    }
  }
}
