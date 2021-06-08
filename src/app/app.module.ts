import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InvoiceComponent } from './main/invoice/invoice.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js"; 
import "@ui5/webcomponents/dist/Label.js"; 
import "@ui5/webcomponents/dist/Button.js"; 
import "@ui5/webcomponents-fiori/dist/Bar.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/add-document.js";



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InvoiceComponent,
    AuthComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
