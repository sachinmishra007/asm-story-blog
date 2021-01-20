import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponentComponent } from "./main-component.component";

const _routes: Routes = [
    {
        path: '',
        component: MainComponentComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(_routes)
    ],
    declarations: [MainComponentComponent],
    exports: [],
    providers: []
})
export class MainModule {

}