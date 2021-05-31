import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CounterDetailComponent } from './detail/counter-detail.component';

@NgModule({
    declarations: [
        CounterDetailComponent
    ],
    exports: [
        CounterDetailComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CounterModule {

}
