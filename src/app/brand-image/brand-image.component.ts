import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-brand-image',
  templateUrl: './brand-image.component.html',
  styleUrls: ['./brand-image.component.css']
})
export class BrandImageComponent implements OnInit {

  inputStr = '';

  constructor() {
    this.getFirstSymb();
  }

  getFirstSymb() {
    if (('' + this.inputStr).length !== 0) {

      switch ((this.inputStr + ' ').charAt(0)) {

        case '4':
          return 'visa.svg';
        case '5':
          return 'mastercard.svg';
        case '6':
          return 'maestro.svg';
      }
    }
  }

  onUpdateBrandImage(event: Event) {
    this.inputStr = (<HTMLInputElement>event.target).value;
    this.getFirstSymb();


  }

  ngOnInit() {
  }


}
