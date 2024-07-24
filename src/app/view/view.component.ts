import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit{
  viewProduct:any={}

  constructor(private api:ApiService,private activated:ActivatedRoute){}
  ngOnInit(): void {
    this.activated.params.subscribe((data:any)=>{
      console.log(data);
      const{id}=data
      console.log(id); 

      this.getProduct(id)
    })
  }

  getProduct=(id:any)=>{
    this.api.viewProductApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.viewProduct=res
      },
      error:(err:any)=>{
        console.log(err);  
      }
    })
  }

}
