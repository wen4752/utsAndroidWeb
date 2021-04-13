import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FotoService } from '../services/foto.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isiDataColl:AngularFirestoreCollection
  isiData:Observable<note_interface[]>;
  
  constructor(public afStorage:AngularFireStorage,afs:AngularFirestore, private fotoservice:FotoService) {
    this.isiDataColl=afs.collection('notedb')    
     
  }
  judul:string
  isi:string
  nilai
  tanggal
  gambar
  async ambilGambar(){
    await this.fotoservice.tambahFoto()
    
  }
  async tambah(){
    const imgFilePath=`imgStorage/${this.fotoservice.dataFoto[0].filePath}`
    await this.afStorage.upload(imgFilePath,(this.judul+'.jpeg'))
    this.isiDataColl.doc(this.judul).set({
      judul:this.judul,
      isi:this.isi,
      tanggal:this.tanggal,
      nilai:this.nilai
    })
  }
}




export interface note_interface{
  judul:string,
  isi:string,
  tanggal:string,
  nilai:string,
  // gambar:string,
}

