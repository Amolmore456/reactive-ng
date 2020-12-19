import { Injectable } from "@angular/core";
import { PizzaService } from '../../services';
import { Actions,Effect,ofType } from '@ngrx/effects';
import * as cardAction from '../action/card.action';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class CardEffect {
    
    constructor(private actions$:Actions,private pizzaService:PizzaService) {}

    @Effect() 
    postCardDetails$ = this.actions$.pipe(
        ofType(cardAction.ADD_CARD),
        mergeMap((action)=>{
            console.log(action)
            // this fn shoud have data from user 
            return this.pizzaService.postCardDetails()
            .pipe(
                map((cardDetails)=>{ new cardAction.AddCardSuccess(cardDetails)}),
                catchError((error:any) =>of(new cardAction.AddCardFail(error)))
            )
        })
    )

    

}
