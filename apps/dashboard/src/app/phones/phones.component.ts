import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '@mdv16/core-data';
import { PhonesFacade } from '@mdv16/core-state';

@Component({
  selector: 'mdv16-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phones$: Observable<Phone[]> = this.facade.allPhones$;
  phone$: Observable<Phone> = this.facade.selectedPhone$;

  constructor(
    private facade: PhonesFacade
  ) { }

  ngOnInit() {
    this.facade.loadPhones();
  }

  onSelectPhone(phone: Phone) {
    this.facade.selectPhone(phone);
  }

  onDeletePhone(phone: Phone) {
    this.facade.deletePhone(phone);
  }

  savePhone(phone: Phone) {
    if(phone.id) {
      this.facade.updatePhone(phone);
    } else {
      this.facade.createPhone(phone);
    }

    this.reset();
  }

  reset() {
    this.facade.selectPhone(null);
  }
}

