import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-carta-tutorial',
  templateUrl: './carta-tutorial.page.html',
  styleUrls: ['./carta-tutorial.page.scss'],
})
export class CartaTutorialPage implements OnInit {
  @ViewChild('popover') popover: any;
  isOpen = false;

  hiraganaA = ['あ']
  romaji = ['A']
  resposta = ''
  front = ''
  back = ''
  random = this.sortear()
  p: number
  // -----------------------------------------------------------------------
  nivel: number = 0;
  // -----------------------------------------------------------------------
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
    // ------------------------------------------------------------------------
    console.log(this.nivel); // <- MÉTODO PARA PEGAR DO BANCO DE DADOS FIREBASE
    // ------------------------------------------------------------------------
    
    this.presentPopover();
    
    // this.actRouter.params.subscribe((data: any) => {
    //   this.nivel = data.nivel;
    // });
  }

  presentPopover() {
    this.isOpen = true;
  }

  progredir(v: number) {
    this.p += v
    if (this.p == 80) {
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
    e?.classList.add('animate__animated', 'animate__zoomOut', 'animate__fast')
    this.resposta = this.romaji[this.hiraganaA.indexOf(r)]
    setTimeout(() => {
      this.verificar(r)
      this.virar()
      setTimeout(() => {
        this.resposta = ''
        this.desvirar()
        this.random = this.sortear()
        e?.classList.remove('animate__animated', 'animate__zoomOut', 'animate__faster')
        setTimeout(() => {
          this.front = this.hiraganaA[this.random]
          this.back = this.romaji[this.random]
        }, 240)
      }, 1500)
    }, 600)
    this.tocar();
  }

  verificar(r: string) {
    if (r == this.front) {
      this.progredir(20)
      setTimeout(() => {
        this.presentToast('Correto!', 'success')
      }, 200)
    }
  }

  sortear() {
    return Math.floor(Math.random() * 1)
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
    this.nivel++;
    console.log(this.nivel);
    // -----------------------------------------------------------------------
    // <---- MÉTODO PARA ALTERAR O NÍVEL NO BANCO DE DADOS FIREBASE
    // -----------------------------------------------------------------------
    const alert = await this.alertController.create({
      header: 'TUTORIAL CONCLUÍDO',
      message: `Agora vamos começar o ${this.nivel}`,
      buttons: ['OK']
    })
    this.router.navigateByUrl('/hiragana')
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

  tocar() {
    const a = new Audio('../../../assets/audio/A.mp3');
    setTimeout(() => {
      a.play();
    }, 1000);
  }
}
