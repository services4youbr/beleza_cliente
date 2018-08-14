import { DateTime } from "ionic-angular";


export class Solicitacao{
    key?: string;
    servico: string;
    nomeCli: string;
    cep: string;
    idProf: string;
    data: DateTime;
    hora: DateTime;
    status: string;
}