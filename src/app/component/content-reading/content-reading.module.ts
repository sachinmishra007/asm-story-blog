import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GoogleAdsComponent } from "../google-ads/google-ads.component";
import { ContentReadingComponent } from "./content-reading.component";

const _routes: Routes = [
    {
        path: '',
        component: ContentReadingComponent
    }
]


@NgModule({
    declarations: [
        ContentReadingComponent,
        GoogleAdsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(_routes)
    ],
    exports: [],
    providers: []
})
export class ContentReadingModule {

}