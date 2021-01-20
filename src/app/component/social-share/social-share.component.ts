import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-load-compnent',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent implements OnInit {

  constructor(
    private _modalSvc: ModalService
  ) { }

  ngOnInit(): void {
  }

  shareApplication(app: string) {
    this._modalSvc.close('mod1');
  }
  close() {
    this._modalSvc.close('mod1');
  }

}
