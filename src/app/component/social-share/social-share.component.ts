import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-load-compnent',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent implements OnInit {
  @Input() public config: string;
  constructor(
    private _modalSvc: ModalService
  ) { }

  ngOnInit(): void {
  }

  shareApplication(app: string) {
    console.log(this.config);
    switch (app) {
      case 'whatsapp':
        {
          window.open("whatsapp://send?text=" + window.location.hostname + this.config);
          return
        }
    }
    this._modalSvc.close('mod1');
  }
  close() {
    this._modalSvc.close('mod1');
  }



}
