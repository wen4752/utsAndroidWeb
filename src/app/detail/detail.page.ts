import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  isiDataColl:AngularFirestoreCollection
  constructor(private aroute:ActivatedRoute, afs:AngularFirestore) { 
    this.isiDataColl=afs.collection('notedb')   
  }
  judul
  isi
  tanggal
  nilai
  gambar
  ngOnInit() {
    this.judul=this.aroute.snapshot.paramMap.get('judul')
    this.isi=this.aroute.snapshot.paramMap.get('isi')
    this.tanggal=this.aroute.snapshot.paramMap.get('tanggal')
    this.nilai=this.aroute.snapshot.paramMap.get('nilai')
    
    
  }
  update(){
    this.isiDataColl.doc(this.judul).set({
      judul:this.judul,
      isi:this.isi,
      tanggal:this.tanggal,
      nilai:this.nilai
    })
  }

}
