import { NgModule } from '@angular/core';
import { ReceiptLineRoutingModule } from './receipt-line-routing.module';
import { ReceiptLineComponent } from './receipt-line.component';

@NgModule({
  declarations: [
    ReceiptLineComponent,
  ],
  imports: [
    ReceiptLineRoutingModule,
  ]
})
export class ReceiptLineModule { }
