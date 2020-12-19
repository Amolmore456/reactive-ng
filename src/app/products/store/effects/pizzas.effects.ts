import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs'; 
import * as pizzaAction from '../action/pizzas.action';
// import service here

import * as fromService from '../../services';




@Injectable()
export class PizzasEffect{
    constructor(private actions$:Actions,private pizzasService:fromService.PizzaService  ) {}
    
    @Effect()
    loadPizzas$ = this.actions$
    .pipe(
        ofType(pizzaAction.LOAD_PIZZAS),
        switchMap(()=>{
            return this.pizzasService.getPizzas()
            .pipe(
                map(pizzas => new pizzaAction.LoadPizzasSuccess(pizzas)),
                catchError(error=> of(new pizzaAction.LoadPizzasFail(error)))
            )
        })
    )
}