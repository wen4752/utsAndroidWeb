import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  judul:string
  isi:string
  nilai

  tambah(){
    let today= new Date()
    let data:note_interface={
      judul:this.judul,
      isi:this.isi,
      tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      nilai:this.nilai
    }
  }
}
export interface note_interface{
  judul:string,
  isi:string,
  tanggal:string,
  nilai:string,
  // gambar:string,
}

