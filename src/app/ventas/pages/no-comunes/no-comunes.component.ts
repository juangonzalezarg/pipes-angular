import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Lucía';
  genero: string = 'F'; // F = Femenino; M = Masculino

  invitacionMapa = {
    M: 'invitarlo',
    F: 'invitarla'
  }

  cambiarPersona() {
    if (this.genero === 'M') {
      this.nombre = 'Lucía';
      this.genero = 'F';
    } else {
      this.nombre = 'Juan';
      this.genero = 'M';
    }
  }

  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos a un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  borrarCliente() {
    this.clientes.shift();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Juan',
    edad: 32,
    direccion: 'Ottawa, Canadá'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6,7,8,9

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);

  });

}
