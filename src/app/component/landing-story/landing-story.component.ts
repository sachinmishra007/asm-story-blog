import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing-story',
  templateUrl: './landing-story.component.html',
  styleUrls: ['./landing-story.component.scss']
})
export class LandingStoryComponent implements OnInit, AfterViewInit {
  @Input() mainConfig: any;
  
  constructor(
    private _router: Router,
    private _dataSvc: DataService,
    private _acRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this._acRoute.paramMap.subscribe((_response: any) => {
      const _find: any = this._dataSvc.mainInfoArray.find((_value: any, _key: any) => {
        return _value.summary == _response.params.name;
      });
      this.mainConfig = _find
    })
  }
  shareApplication(appName: string) {

  }

  goback() {
    this._router.navigateByUrl('');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        ((window as any)["adsbygoogle"] = (window as any)["adsbygoogle"] || []).push({});
      } catch (e) {
        console.error(e);
      }
    }, 2000);
  }

  navigateContent() {
    this._router.navigateByUrl('/read/' + this.mainConfig.defaultRoute);
  }
}