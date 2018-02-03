import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'material-receipt', pathMatch: 'full' },    
    { path: 'material-receipt', loadChildren: './component/material-receipt/material-receipt.module#MaterialReceiptModule' },
    { path: 'receipt-line', loadChildren: './component/receipt-line/receipt-line.module#ReceiptLineModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})                                  
export class AppRoutingModule { }
