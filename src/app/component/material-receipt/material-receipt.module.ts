import { NgModule } from '@angular/core';
import { MaterialReceiptRoutingModule } from './material-receipt-routing.module';
import { MaterialReceiptComponent } from './material-receipt.component';

@NgModule({
  declarations: [
    MaterialReceiptComponent,
  ],
  imports: [
    MaterialReceiptRoutingModule,
  ]
})
export class MaterialReceiptModule { }
