import * as fromPizzas from './pizzas.reducer';
import * as fromCard from './card.reducer';

import {ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { Card } from '../../models/card.model';


export interface ProductsState {
    pizzas:fromPizzas.PizzaState,
    
}

export interface CardState {
    cards:fromCard.CardState
}
// Register reducer 
export const reducer:ActionReducerMap<ProductsState> = {
    pizzas:fromPizzas.reducer,
 
};

export const cardReducer:ActionReducerMap<CardState> = {
    cards:fromCard.reducer
}


// Holds selector for entire module 

export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getCardsState =  createFeatureSelector<CardState>('card');

// Selector for Pizza Whole object
export const getPizzaState = createSelector(getProductsState, (state) => state.pizzas); 

// Selector for Card Whole Obj
export const getCards = createSelector(getCardsState,(state) => state.cards)

// Get Pizza State individual
export const getPizzaEntities = createSelector(getPizzaState, fromPizzas.getPizzaEntities);
export const getAllPizzas = createSelector(getPizzaEntities,
    (entities)=>{ 
        return Object.keys(entities).map(id=>entities[parseInt(id,10)])
    });
export const getPizzaLoaded =  createSelector(getPizzaState, fromPizzas.getPizzaLoaded);
export const getPizzaLoading = createSelector(getPizzaState,fromPizzas.getPizzaLoaded);



// Selector for Card whole object 
export const getCardsDetails = createSelector(getCards,fromCard.getCardDetails)