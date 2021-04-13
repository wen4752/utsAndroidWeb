import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private aroute:ActivatedRoute) { }
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
    this.gambar=this.aroute.snapshot.paramMap.get('gambar')
    console.log(this.judul)
  }

}
