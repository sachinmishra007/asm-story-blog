import { Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import {  } from "aos";
import * as AOS from 'aos';
import { SocialShareComponent } from './component/social-share/social-share.component';
import { ModalComponentComponent } from './component/modal-component/modal-component.component';
import { ModalService } from './services/modal.service';
import { LandingStoryComponent } from './component/landing-story/landing-story.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MainComponentComponent } from './component/main-component/main-component.component';
// import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('content', { static: true, read: ViewContainerRef }) content: ViewContainerRef;

  constructor(
    private _router: ActivatedRoute,
    private _resolver: ComponentFactoryResolver
  ) {

  }
  ngOnInit(): void {

    this._router.paramMap.subscribe((resp) => {
      console.log(resp);
    })

    // import(/*  webpackChunkName:'main-component-module' */'../app/component/main-component/main-component.module').then((resp) => {
    //   const comRef = this._resolver.resolveComponentFactory(MainComponentComponent);
    //   this.content.createComponent(comRef);
    // })
  }

  title = 'story-blog';

}
