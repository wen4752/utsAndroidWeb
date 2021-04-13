import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { note_interface } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isiData:Observable<note_interface[]>
  isiDataColl:AngularFirestoreCollection<note_interface>
  data=[]
  constructor(private afs:AngularFirestore,private router:Router) {
    this.isiDataColl=afs.collection('notedb')
    this.isiData=this.isiDataColl.valueChanges();

  }
  detail(judul,isi,tanggal,nilai,gambar){
    console.log(judul,isi,tanggal,nilai,gambar)
    this.router.navigate(['/detail',judul,isi,tanggal,nilai,gambar])
    
  }
  delete(judul){
    console.log(judul)
    this.isiDataColl.doc(judul).delete()
  }
}
