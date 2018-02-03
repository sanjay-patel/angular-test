import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReceiptLineComponent } from './receipt-line.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: '', component: ReceiptLineComponent}
    ])
  ]
})
export class ReceiptLineRoutingModule { }
