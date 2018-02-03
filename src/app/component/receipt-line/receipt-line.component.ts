import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'receipt-line',
    templateUrl: './receipt-line.component.html',
    styleUrls: ['./receipt-line.component.scss']
})
export class ReceiptLineComponent implements OnInit, AfterViewInit {
    public nativeEl: any;
    constructor(private el: ElementRef) {
        this.nativeEl = this.el.nativeElement;
    }

    ngOnInit() {
        console.log('Hello Receipt Line'); 
    }

    ngAfterViewInit() {
    }
}
