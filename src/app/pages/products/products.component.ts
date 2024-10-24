import { ActivatedRoute, Routes } from '@angular/router';
import { routes } from './../../app.routes';
import { ApiService } from './../../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public api:  ApiService,private route : ActivatedRoute) { }
  item: any;

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');



    this.api.getDataById(id).subscribe((data) => {
      this.item = data;
      console.log(this.item);


    })
  }

}


