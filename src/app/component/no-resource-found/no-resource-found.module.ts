import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoResourceFoundComponent } from "./no-resource-found.component";


const _routes: Routes = [
    {
        path: '',
        component: NoResourceFoundComponent
    }
]


@NgModule({
    declarations: [
        NoResourceFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(_routes)
    ],
    exports: []
})
export class NoResourceModule {

}