# App de beleza - cliente

+ [Site oficial do ionic](https://ionicframework.com/getting-started)
+ [Tutorial Ionic com PWA](https://blog.ionicframework.com/how-to-make-pwas-with-ionic/)
+ [Ionic cli](https://ionicframework.com/docs/cli/generate/)

## Requisitos iniciais
Precisamos seguir o seguinte fluxo:
- Cadastro da cliente
- Login
- Página inicial com uma agenda das solicitações dela
- Fazer uma solicitação
- Confirmação da solicitação
- Acompanhamento da solicitação
- Pagamento
- Finalização do fluxo com avaliação do atendimento

# Angular

## Criar um componente
Para criar um componente, vá ao terminal e digite `ng g c nome-do-componente`

## Criar um serviço
Para criar um serviço, vá ao terminal e digite `ng g s nome-do-serviço`

## Servidor local
Para rodar um servidor local, vá ao terminal e digite `ng serve`, caso queira com que alguém da rede veja o site, digite `ng serve --host=ip-da-sua-maquina --port=numero-da-porta`. Navegue pela url `http://localhost:4200` ou pelo número do ip e a porta selecionada. Caso não escolha a porta, o padrão é 4200.

## Build
Para gerar a versão de produção, vá ao terminal e digite `ng build`. O Angular criará uma pasta `dist`. Utilize `--prod` para gerar os arquivos para produção. caso dê alguma erro no build, digite `ng build --prod --aot false`

## Gerar tags de versão
Toda sexta-feira, final de sprint ou o site estiver pronto, será gerada uma tag de versionamento. Para gerar uma tag no git, digite `git tag <tag-name>` e depois digite `git push origin --tags` para que a tag vá para o repositório remoto

