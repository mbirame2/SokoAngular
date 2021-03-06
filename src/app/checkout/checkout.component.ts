import { Component, OnInit } from '@angular/core';
import Swal  from 'sweetalert2';
import { SokoService } from './../soko.service';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product.Model';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItemCount: number = 0;
  productAddedTocart:Product[];
  allTotal:number;
  loginUserData = {product:[]}

  constructor(private productService:ProductService,private aut:SokoService) { }

  ngOnInit() {
    this.productAddedTocart=this.productService.getProductFromCart();
  //  this.loginUserData.product=this.productAddedTocart
  //  console.log(this.productAddedTocart)
   this.productService.removeAllProductFromCart();
   this.productService.addProductToCart(this.productAddedTocart);
   this.calculteAllTotal(this.productAddedTocart); 
  }
  calculteAllTotal(allItems:Product[])
  {
    let total=0;
    for (let i in allItems) {
      total= total+(allItems[i].article.Prix);
      this.loginUserData.product.push(allItems[i].article_id)
     // console.log(allItems[i].article.Prix)
   }
  
   this.allTotal=total+1500;
  // console.log(this.allTotal)
  }
  commande(){
   console.log(this.loginUserData)
    this.aut.commande(this.loginUserData).subscribe((result) => {
     
        console.log( result);    
      
          Swal.fire(
            'Ok',
            'Enregistrement fait avec succés',
            'success'
          )
            },
      error => {
        console.log(error);
        Swal.fire(
          'Erreur',
          'Veillez verifier la saisie de vos champs',
          'error'
        )
      },)
    }
  

}
