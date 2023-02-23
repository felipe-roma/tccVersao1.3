import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carregando',
  templateUrl: './carregando.page.html',
  styleUrls: ['./carregando.page.scss'],
})
export class CarregandoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/carta');
    }, 1000);
  }

}
