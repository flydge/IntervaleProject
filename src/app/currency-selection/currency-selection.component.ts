import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-currency-selection',
  templateUrl: './currency-selection.component.html',
  styleUrls: ['./currency-selection.component.css']
})
export class CurrencySelectionComponent implements OnInit {

  BYN = 'BYN';
  RUB = 'RUB';

  constructor() {
  }

  private _currency = '                               ';

  get currency(): string {
    return this._currency + this.BYN;
  }

  ngOnInit() {
  }


}
