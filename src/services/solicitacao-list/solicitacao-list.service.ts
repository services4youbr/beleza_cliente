import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Solicitacao } from "../../models/solicitacao/Solicitacao";

@Injectable()
export class SolicitacaoService{

    private solicitacaoListRef = this.db.list<Solicitacao>('eventos/solicitacao-list');

    constructor(private db: AngularFireDatabase){

    }


    addEnvioSolicitacao(solicitacao: Solicitacao){
        return this.solicitacaoListRef.push(solicitacao);
    }

    /*getSolicitacaoList(){
        return this.solicitacaoListRef;
    }

    editEnvio(solicitacao: Solicitacao){
        return this.solicitacaoListRef.update(solicitacao.key, solicitacao);
    }

    removeEnvio(solicitacao: Solicitacao){
        return this.solicitacaoListRef.remove(solicitacao.key);
    }*/


}