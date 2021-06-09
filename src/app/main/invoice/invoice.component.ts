import { Component, OnInit } from '@angular/core';

interface invoice{
  invoiceNumber : string | number;
  billto : string | number;
  customer : string | number;
  invoicedate : string;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoices = [
    {invoiceNumber : 1, billto:1, customer: 'Gaurav Industries Ltd', invoicedate: '31.12.9999' },
    {invoiceNumber : 1, billto:1, customer: 'Gaurav Industries Ltd', invoicedate: '31.12.9999' },
    {invoiceNumber : 1, billto:1, customer: 'Gaurav Industries Ltd', invoicedate: '31.12.9999' },
    {invoiceNumber : 1, billto:1, customer: 'Gaurav Industries Ltd', invoicedate: '31.12.9999' },
    {invoiceNumber : 1, billto:1, customer: 'Gaurav Industries Ltd', invoicedate: '31.12.9999' },
    {invoiceNumber : 1, billto:1, customer: 'Gaurav Industries Ltd', invoicedate: '31.12.9999' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
