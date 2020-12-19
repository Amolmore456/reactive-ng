import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer, effects } from './store';
// import { effects } from './store/effects';
import { ProductComponent } from './components/product/product.component';
import { ProductMatModule } from './matrial.module';




const ROUTES : Routes = [ 
    {
        path:'',
        component:ProductComponent,
        children:[]
        
    }
];


@NgModule({
    declarations:[
        ProductComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature('products', reducer),
        EffectsModule.forFeature(effects),
        ...ProductMatModule,
    ],
    providers:[],
    exports:[
    ]
    
})

export class ProductsModule {
    constructor(){
        console.log("Product loading")
    }
}