import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cartservive';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  allproducts:any=[]

   // Search Key

   public filterCategory : any

   searchKey : string = ""

  constructor(private api:ApiService,  private cartService : CartService){}
    ngOnInit(): void {
      this.getAllProductApi()
      this.cartService.search.subscribe((val : any) => {
        this.searchKey = val
      })
    }

    getAllProductApi=()=>{

      this.api.getAllProducts().subscribe({

        next:(res:any)=>{
          console.log(res);
          this.allproducts=res
          
        this.filterCategory = res

        this.allproducts.forEach((a : any) => {
          if(a.category === "women's clothing" || a.category === "men's clothing"){
            a.category = "fashion"
          }
          Object.assign(a, {quantity : 1, total : a.price})
        });
        },

        error:(err:any)=>{
          console.log(err); 
        }

      })

    }
    // Add to Cart

    addtocart = (product : any) => {
      this.cartService.addtoCart(product)
    }
  
    filter(category : string){
      this.filterCategory = this.allproducts
      .filter((a : any) => {
        if(a.category == category || category == ''){
          return a
        }
      })
    }
  

}
