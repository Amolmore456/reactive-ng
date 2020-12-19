import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Pizza } from '../../models/pizza.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(private store:Store<fromStore.ProductsState>, private fb:FormBuilder ) {
    this.formValidation();
   }
  cardDetails:FormGroup
  
  ngOnInit(): void {
  
  //   this.store.select<any>('products').subscribe( 
  //     (state) => { console.log(state) }
  //   )

  this.pizzas$ = this.store.select(fromStore.getAllPizzas)
  this.store.dispatch(new fromStore.LoadPizzas())
  // .subscribe((state) =>{ console.log(state) })
  
  this.store.select(fromStore.getPizzaLoading)
  .subscribe((state) =>{ console.log(state) })

  }

  formValidation() {
    this.cardDetails =  this.fb.group({
      'cardNumber':['',Validators.compose([Validators.required])],
      'cardHolderName':[],
      'experationDate':[],
      'cvv':[],
      'amount':[]
    })
  }

  onSubmit(cardDetails:any) {
    console.log(cardDetails.value);
  }
  
}
