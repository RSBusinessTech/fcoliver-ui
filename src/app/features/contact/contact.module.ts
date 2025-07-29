import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule ,
    //HttpClientModule           //Http Client module in order to call Rest-APIs.
  ],
  //providers: [ContactService]  //Services (Dependency Injection).
})
export class ContactModule { }
