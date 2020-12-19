import * as fromPizzas from '../action/pizzas.action';
import { Pizza } from '../../models/pizza.model';


export interface PizzaState {
    entities:{ [id:number]:Pizza },
    loaded:boolean,
    loading:boolean
}


export const initialState : PizzaState = {
    entities:{},
    loaded:false,
    loading:false
}

export function reducer(state = initialState, action:fromPizzas.PizzasAction) {

    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return { ...state, loading:true };
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            console.log(action);
            const pizza =   action.payload;
            const entities = pizza.reduce((entities:{ [id:number]:Pizza },pizza)=>{
                return {...entities, [pizza.id]:pizza}
            },{...state.entities})
            return {...state,entities, loading:false, loaded:true};
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            console.log(action.payload)
            return {...state, loading:false, loaded:false };
        }
        default : {
            return state
        }
    }


}

export const getPizzaEntities =  (state:PizzaState) => state.entities;
export const getPizzaLoading =  (state:PizzaState) => state.loading;
export const getPizzaLoaded =  (state:PizzaState) => state.loaded;




