
import { AfterViewInit, Component, ComponentFactoryResolver, HostListener, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { DataService } from 'src/app/services/data.service';
import { SocialShareComponent } from '../social-share/social-share.component';

@Component({
  selector: 'app-content-reading',
  templateUrl: './content-reading.component.html',
  styleUrls: ['./content-reading.component.scss']
})
export class ContentReadingComponent implements OnInit, AfterViewInit {

  @ViewChild('mainElement', { read: ViewContainerRef }) mainElement: ViewContainerRef;
  @ViewChild('h3', { read: TemplateRef }) h3: TemplateRef<any>;
  @ViewChild('p', { read: TemplateRef }) p: TemplateRef<any>;
  @ViewChild('img', { read: TemplateRef }) img: TemplateRef<any>;
  @ViewChild('ads', { read: TemplateRef }) ads: TemplateRef<any>;
  // @ViewChild('socialShare', { read: ViewContainerRef }) socialShare: ViewContainerRef;
  content = [] as any;
  navigationList = [] as any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _location: Location,
    private _dataSvc: DataService,
    private _component: ComponentFactoryResolver
  ) { }

   
  ngOnInit(): void {


    this.activeRoute.paramMap.subscribe((_resp: any) => {
      this.content = this._dataSvc.mainContentInfo.find((_value: any, _key) => {
        if (_value.partId == _resp.params.partName) { return _value; }
      });

      this._dataSvc.mainInfoArray.find((_value: any, _key: any) => {
        if (_value.summary == this.content.name) { this.navigationList = _value.partDescription };
      })
    })
  }

  ngAfterViewInit() {

    setTimeout(() => {
      try {
        ((window as any)["adsbygoogle"] = (window as any)["adsbygoogle"] || []).push({});
      } catch (e) {
        console.error(e);
      }
    }, 2000);

    // console.log(this.navigationList);
    setTimeout(() => { this.createContent(); }, 100);


  }

  public createContent() {
    this.mainElement.clear();
    this.content.content.forEach((_value: any, _key: any) => {
      if (_value.type == 'h3') {
        this.mainElement.createEmbeddedView(this.h3, {
          config: _value
        });
      }
      else if (_value.type == 'img') {
        this.mainElement.createEmbeddedView(this.img, {
          config: _value
        });
      }
      else if (_value.type == 'p') {
        this.mainElement.createEmbeddedView(this.p, {
          config: _value
        });
      }
      else if (_value.type == 'ads') {
        this.mainElement.createEmbeddedView(this.ads, {
          config: _value
        });
      }
    })

  }
  goback() {
    this.router.navigateByUrl('');
  }
  click(e: any, item: any): any {
    this.router.navigateByUrl('read/' + item.partId);
    this.content = this._dataSvc.mainContentInfo.find((_value: any, _key) => {
      if (_value.partId == item.partId) { return _value; }
    });
    this.createContent();
    e.preventDefault();
  }
}
