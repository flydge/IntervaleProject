import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-currency-selection',
  templateUrl: './currency-selection.component.html',
  styleUrls: ['./currency-selection.component.css']
})
export class CurrencySelectionComponent implements OnInit {

  BYN = 'BYN';
  RUB = 'RUB';

  transferAmountMin = 500;
  transferAmountMax = 500000;
  totalAmountMin = 680;
  totalAmountMax = 530150;
  private _currency = '                               ';
  curForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.curForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      transferAmount: new FormControl('', [Validators.required]),
      totalAmount: new FormControl('', [Validators.required, this.totalAmountCheck.bind(this)])
    });

  }

  onSubmit() {
    console.log('submitted!', this.curForm.valid);
    console.log('transferAmount', this.curForm.value.transferAmount);
    console.log(this.curForm);
  }

  transferAmountCheck() {
    if (this.curForm.value.transferAmount === '' || this.curForm.value.transferAmount === null) {
      return 'transfer amount is empty!';
    } else if (this.curForm.value.transferAmount < this.transferAmountMin) {
      return 'transfer amount is too small! less than ' + this.transferAmountMin;
    } else if (this.curForm.value.transferAmount > this.transferAmountMax) {
      return 'transfer amount is too large! more than ' + this.transferAmountMax;
    }
    return null;
  }

  totalAmountCheck(control: FormControl) {
    if (control.value === '' || control.value === null) {
      return {'emptySpaceErr': true};
    } else if (control.value < this.totalAmountMin) {
      return {'smallAmountErr': true};
    } else if (control.value > this.totalAmountMax) {
      return {'largeAmountErr': true};
    }
    return null;
  }

  transferAmountPlaceholder() {
    return ' От ' + this.transferAmountMin + ' до ' + this.transferAmountMax + this._currency + this.BYN;
  }

  totalAmountPlaceholder() {
    return ' От ' + this.totalAmountMin + ' до ' + this.totalAmountMax + this._currency + this.BYN;
  }



}
