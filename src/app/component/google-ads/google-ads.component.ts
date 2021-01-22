import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-ads',
  templateUrl: './google-ads.component.html',
  styleUrls: ['./google-ads.component.scss']
})
export class GoogleAdsComponent implements OnInit, AfterViewInit {
  // @Input() data;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      try {
        ((window as any)["adsbygoogle"] = (window as any)["adsbygoogle"] || []).push({});
      } catch (e) {
        // console.error(e);
      }
    }, 2000);
  }

}