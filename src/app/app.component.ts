import { Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild } from '@angular/core';
// import {  } from "aos";
import * as AOS from 'aos';
import { SocialShareComponent } from './component/social-share/social-share.component';
import { ModalComponentComponent } from './component/modal-component/modal-component.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  storyBlogs = [] as any;
  videoInfo = [] as any;
  @ViewChild('navbar') navbar: any;
  constructor(
    private _resolver: ComponentFactoryResolver,
    private _modalSvc: ModalService
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
      {
        id: 0,
        blogImage: '../assets//marriage.png',
        isPopular: false,
        date: '17 जुलाई 2020',
        time: '3 मिनट',
        type: ['प्रेम', 'स्त्री - विमर्श'],
        summary: 'अबकी सावन प्रियतम संग',
        description: `
        अबकी सावन प्रियतम संग अबकी सावन प्रियतम संग, हा प्रियतम संग, इसबार हुआ है, मधुर मिलन, अबकी सावन प्रियतम संग। अबकी सावन प्रियतम संग, हा प्रियतम संग, अबकी बरस मैं भीगू   तुम संग, अबकी सावन प्रियतम संग। ...
      `,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा'
      },
      {
        id: 0,
        blogImage: '../assets//heroine.png',
        isPopular: false,
        date: '17 मई 2020',
        time: '3 मिनट',
        type: ['हॉरर', 'लघुकथा'],
        summary: 'मैं हीरोईन हूँ!',
        description: `
        यह कहानी है अप्पू की उर्फ अपर्णा सेन की।अप्पू अपने परिवार के साथ बंगाल प्रांत के दार्जीलिंग  की रहने वाली हैं, इनके पिता जी चाय के बागानों में काम करते हैं। अप्पू अपने माता-पिता की अकेली संतान ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा'
      },
      {
        id: 0,
        blogImage: '../assets//chai.png',
        isPopular: false,
        date: '04 जुलाई 2020',
        time: '1 मिनट',
        type: ['जीवन', 'छोटी कवितायें'],
        summary: 'मैं चायवाला,और ये मेरी टपरी!',
        description: `मैं चायवाला , और  ये मेरी टपरी! मैं चाय वाला हूँ,  मेरा रोज़ का धंधा यहाँ फिक्स है, अरे !ओ ग़ालिब ,ये चाय नहीं, मेरा इश्क है। लोग चुस्कियां ले मस्त हैं मैं पिलाकर मस्त हूँ। अरे !ओ ग़ालिब, ये चाय नहीं, ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा'
      },
      {
        id: 1,
        blogImage: '../assets//papa.png',
        isPopular: true,
        date: '21 जून 2020',
        time: '1 मिनट',
        type: ['जीवन', 'प्रेम'],
        summary: 'पापा 😍😘😊',
        description: `
        पापा रोटी, कपड़ा, मकान हैं पापा, इस नन्ही सी परिंदे के बड़े से आसमान हैं पापा, घर में फैली रोशनी के रोशनदान हैं पापा, मां के माथे की बिंदी और सुहाग हैं पापा, तेज़ धूप में मेहनत करने वाले इंसान हैं ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा'
      },
      {
        id: 2,
        blogImage: '../assets//cover.png',
        isPopular: true,
        date: '30 जून 2020',
        time: '3 मिनट',
        type: ['लघुकथा', 'प्रेम'],
        summary: 'मंटू',
        description: `मंटू सुनने में तो यह नाम किसी मनुष्य का लगता है किसी बालक का लेकिन यहाँ यह नाम एक तोते का है जी हाँ बिल्कुल सही समझा आपने, यह मंटू कोई और नहीं बल्कि एक तोता है। आज मंटू बहुत ही उदास था...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा'
      },
      {
        id: 3,
        blogImage: '../assets//sambhar.png',
        isPopular: false,
        date: '08 जून 2020',
        time: '1 मिनट',
        type: ['स्वास्थ्य', 'ज्ञानवर्धक'],
        summary: `सांभर बनाने की विधि
        चटोरों की रसोईं- अंजली मिश्रा`,
        description: `
        नमस्कार मेरे पाठकों मैं आपके लिए लेकर आयी हूँ सांभर बनाने की बहुत ही बेहतर विधि उम्मीद है मेरे इस वीडियो से आप बड़ी ही सरलता के साथ दक्षिणी भारत का प्रसिद्ध सांभर बनाना सीख जाएंगे और अगर आपको पहले ...
      `,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा'
      },

    ];


    AOS.init({
      duration: 500,
      easing: 'ease',
    });

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
      default: {
        break;
      }
    }
  }
  clickToView(item: any) {

  }
  share() {

    import(/*  webpackChunkName:'modal-dialog' */'../app/component/modal-component/modal-component.module').then((_resp) => {
      const compRef = this._resolver.resolveComponentFactory(ModalComponentComponent);
      const nativeElement = this._modalSvc.open('mod1', SocialShareComponent, compRef.componentType);

    });

  }
}
