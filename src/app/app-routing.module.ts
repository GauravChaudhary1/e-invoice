import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './main/invoice/invoice.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'invoice', component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
