import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
    declarations: [
        HeroDetailComponent, 
        HeroListComponent
    ],
    exports: [
        HeroDetailComponent, 
        HeroListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroModule {

}
