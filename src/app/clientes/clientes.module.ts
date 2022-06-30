import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { MaterialModule } from '../shared/material.module';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { ClienteAbertoComponent } from './components/cliente-aberto/cliente-aberto.component';
import { ClienteDeleteComponent } from './components/cliente-delete/cliente-delete.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteUpdateComponent,
    ClienteCreateComponent,
    ClienteAbertoComponent,
    ClienteDeleteComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
})
export class ClientesModule {}
