import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Solicitacao } from '../../models/solicitacao/Solicitacao';
import { SolicitacaoService } from '../../services/solicitacao-list/solicitacao-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-envio-solicitacao',
  templateUrl: 'envio-solicitacao.html',
})
export class EnvioSolicitacaoPage {

  solicitacao: Solicitacao = {
    servico: '',
    nomeCli: '',
    cep: '',
    idProf: '',
    data: undefined,
    hora: undefined,
    status: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private solicitacaoService: SolicitacaoService, private toast: ToastService) {

  }


  addEnvioSolicitacao(solicitacao: Solicitacao){
    this.solicitacaoService.addEnvioSolicitacao(solicitacao).then(ref => {
      this.toast.show(`Solicitação de ${solicitacao.nomeCli} enviada!`);
      this.navCtrl.setRoot(HomePage, {key: ref.key});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvioSolicitacaoPage');
  }

}
