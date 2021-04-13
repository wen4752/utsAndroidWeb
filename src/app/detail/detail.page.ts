import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  isiDataColl:AngularFirestoreCollection
  constructor(private aroute:ActivatedRoute, afs:AngularFirestore, public toastController:ToastController,private afStorage:AngularFireStorage) { 
    this.isiDataColl=afs.collection('notedb')   
  }
  judul
  isi
  tanggal
  nilai
  gambar
  urlImageStorage=[]
  srcgambar
  async ngOnInit() {
    this.judul=this.aroute.snapshot.paramMap.get('judul')
    this.isi=this.aroute.snapshot.paramMap.get('isi')
    this.tanggal=this.aroute.snapshot.paramMap.get('tanggal')
    this.nilai=this.aroute.snapshot.paramMap.get('nilai')
    this.gambar=await this.aroute.snapshot.paramMap.get('gambar')   
    
    
    var refImage=this.afStorage.storage.ref('imgStorage')        
    await refImage.listAll()
      .then((res)=>{
        res.items.forEach((itemRef)=>{      
          console.log(itemRef)     
          itemRef.getDownloadURL().then((url)=>{      
            if(this.gambar==itemRef.name){
              this.srcgambar=url
            }      
            this.urlImageStorage.unshift({
              url:url,
              nama:itemRef.name,
              itemRef:itemRef
            })
            
            
          })
        })
      }).catch((error)=>{
        console.log(error)
      })
    

  }
  update(){
    this.isiDataColl.doc(this.judul).set({
      judul:this.judul,
      isi:this.isi,
      tanggal:this.tanggal,
      nilai:this.nilai
    })
    this.presentToast("update berhasil")
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  

}
