import * as fromCardAction from '../action/card.action';
import { Card } from '../../models/card.model';
import { reduce } from 'rxjs/operators';



export interface CardState {
    entities:{[id:number]:Card},
    loading:boolean,
    loaded:boolean
} 

export const initialState:CardState = {
    entities:{},
    loaded:false,
    loading:false
}


export function reducer(state = initialState, action:fromCardAction.CardAction) {
    switch(action.type) {
        case fromCardAction.ADD_CARD: {
            return { ...state, loading:true }
        }
        case fromCardAction.ADD_CARD_SUCCESS: {
            console.log(action.payload)
            return { ...state, loaded:true, loading:false }
        }
        case fromCardAction.ADD_CARD_FAIL: {
            console.log(action.payload)
            return { ...state, loaded:false, loading:false}
        }
        default: {
            return state
        }
    }
}

export const getCardDetails =  (state:CardState) => state.entities;
export const getCardLoading =  (state:CardState) => state.loading;
export const getCardLoaded =  (state:CardState) => state.loaded;