import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LandingStoryComponent } from "./landing-story.component";

const _routes: Routes = [
    {
        path: '',
        component: LandingStoryComponent
    }
]

@NgModule({
    declarations: [
        LandingStoryComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(_routes)
    ],
    exports: [],
    bootstrap: [],
    providers: []
})
export class LandingStoryModule {

}