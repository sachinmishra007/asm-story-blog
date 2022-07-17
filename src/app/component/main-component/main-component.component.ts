import { Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import {  } from "aos";
// import * as AOS from 'aos';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponentComponent } from '../modal-component/modal-component.component';
import { SocialShareComponent } from '../social-share/social-share.component';
import { ModalService } from 'src/app/services/modal.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  storyBlogs = [] as any;
  videoInfo = [] as any;
  @ViewChild('navbar') navbar: any;
  @ViewChild('content', { static: true, read: ViewContainerRef }) content: ViewContainerRef;
  constructor(
    private _route: Router,
    private _router: ActivatedRoute,
    private _resolver: ComponentFactoryResolver,
    private _modalSvc: ModalService,
    private _dataSvc: DataService
  ) {

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    if (window.scrollY > 20) {
      this.navbar.nativeElement.classList.add('sticky');
    }
    else {
      this.navbar.nativeElement.classList.remove('sticky');

    }

  }
  ngOnInit() {

    this.storyBlogs = [
      ...this._dataSvc.mainInfoArray

    ];




    // import(/*  webpackChunkName:'landing-story-page' */'../app/component/landing-story/landing-story.module').then((resp) => {
    //   const comRef = this._resolver.resolveComponentFactory(LandingStoryComponent);
    //   this.content.createComponent(comRef);
    // })


  }

  example(element: any) {

    if (element.children[0].classList.contains('fa-bars')) {
      element.children[0].classList.remove('fa-bars')
      element.children[0].classList.add('fa-times')
      this.navbar.nativeElement.children[0].children[1].classList.add('active')
    }
    else {
      element.children[0].classList.add('fa-bars');
      element.children[0].classList.remove('fa-times');
      this.navbar.nativeElement.children[0].children[1].classList.remove('active')
    }
  }

  clickOnIcon(str: string) {
    switch (str) {
      case 'youtube':
        {
          window.open('https://www.youtube.com/channel/UCrWa0zRS7O8b6C9c_Fwd39A', '_blank')
          return;
        }
      case 'linkedin':
        {
          window.open('https://www.linkedin.com/in/anjali-mishra-097a9222b', '_blank');
          return;
        }
      case 'insta':
        {
          window.open('https://www.instagram.com/lovelymadangel/?hl=en', '_blank');
          return;
        }
      default: {
        break;
      }
    }
  }
  clickToView(item: any) {

  }
  share(item: string) {

    import(/*  webpackChunkName:'modal-dialog' */'../modal-component/modal-component.module').then((_resp) => {
      const compRef = this._resolver.resolveComponentFactory(ModalComponentComponent);
      const nativeElement = this._modalSvc.open<SocialShareComponent>('mod1', SocialShareComponent, SocialShareComponent);
      // debugger;
      // (nativeElement.componentInstance as SocialShareComponent).config = item;

    });

  }

  read(item: any) {
    this._route.navigateByUrl('/blogs/' + item.summary);
  }
}
