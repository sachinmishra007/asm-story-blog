import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing-story',
  templateUrl: './landing-story.component.html',
  styleUrls: ['./landing-story.component.scss']
})
export class LandingStoryComponent implements OnInit {
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
}
