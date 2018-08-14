import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvioSolicitacaoPage } from './envio-solicitacao';

@NgModule({
  declarations: [
    EnvioSolicitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvioSolicitacaoPage),
  ],
})
export class EnvioSolicitacaoPageModule {}
