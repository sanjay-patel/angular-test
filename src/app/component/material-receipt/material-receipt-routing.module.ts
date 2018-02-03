import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialReceiptComponent } from './material-receipt.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: '', component: MaterialReceiptComponent}
    ])
  ]
})
export class MaterialReceiptRoutingModule { }
