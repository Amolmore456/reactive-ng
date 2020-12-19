import { Action } from '@ngrx/store';
import { Card } from '../../models/card.model';




export const ADD_CARD = '[Card Component] Add Card';
export const ADD_CARD_SUCCESS = '[Card Effect] Add Card Success';
export const ADD_CARD_FAIL = '[Card Effect] Add Card Fail';


export class AddCard implements Action {
    readonly type = ADD_CARD;
}

export class AddCardSuccess implements Action {
    readonly type = ADD_CARD_SUCCESS;
    constructor(public payload:Card) {}
}

export class AddCardFail implements Action {
    readonly type = ADD_CARD_FAIL;
    constructor(public payload:any) {}
}


export type CardAction = AddCard | AddCardSuccess | AddCardFail; 