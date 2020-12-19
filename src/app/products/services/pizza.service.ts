import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pizza } from '../models/pizza.model';
import { catchError } from 'rxjs/operators';
import { Card } from '../models/card.model';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  readonly uri = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  getPizzas():Observable<any> {
    return this.http.get(`${this.uri}/pizzas`)
    .pipe(catchError((error:any) => {
      return throwError(error);
    }))
  }

  postPizzas(pizza:Pizza):Observable<any> {
    return this.http.post(`${this.uri}/pizzas`,pizza)
    .pipe(catchError((error:any)=>{
      console.log(error);
      return throwError(error.error);
    }))
  }

  postCardDetails(cardDetails:Card):Observable<any>{
    return this.http.post(`${this.uri}/cardDetails`,cardDetails)
    .pipe(catchError((error:any) =>{
      console.log(error)
      return throwError(error)
    
    }))
  }

}
