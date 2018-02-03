import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'material-receipt',
    templateUrl: './material-receipt.component.html',
    styleUrls: ['./material-receipt.component.scss']
})
export class MaterialReceiptComponent implements OnInit, AfterViewInit {
    public nativeEl: any;
    constructor(private el: ElementRef) {
        this.nativeEl = this.el.nativeElement;
    }

    ngOnInit() {
        console.log('Hello Material Receipt '); 
    }

    ngAfterViewInit() {
        jQuery('#dateOrdered').datepicker({
            uiLibrary: 'bootstrap4',
            format: 'dd/mm/yyyy'
        });
        jQuery('#movementDate').datepicker({
            uiLibrary: 'bootstrap4',
            format: 'dd/mm/yyyy'
        });  
        jQuery('#accountDate').datepicker({
            uiLibrary: 'bootstrap4',
            format: 'dd/mm/yyyy'
        });      
    }
}
