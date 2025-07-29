import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from 'src/app/features/services/components/services/services.component';
import { ServicesRoutingModule } from 'src/app/features/services/service-routing.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
     ServicesRoutingModule
  ]
})
export class ServicesModule { }
