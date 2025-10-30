const express = require('express');
const helmet = require('helmet')
const app = express();














































let timeInSeconds = 90*24*60*60


module.exports = app;
const api = require('./server.js');
// app.use(helmet.frameguard({action: 'deny'})) // Restringe quem pode colocar seu site em um iframe, impedindo ClickJacking
// app.use(helmet.hidePoweredBy()); // Esconde em que tech o site roda (nesse exemplo o Express)
// app.use(helmet.xssFilter()) // Filtra com potenciais vulnerabilidades de XSS. Tem um limite, mas já ajuda
// app.use(helmet.noSniff()) // Faz com que os navegadores não tentem advinhar o Content-type e sobrescrever o mandado
// app.use(helmet.ieNoOpen()) // Impede que os usuários de internet Explorer executem downloads no contexto de sites confiaveis 
// app.use(helmet.hsts({maxAge: timeInSeconds, force: true})) // Recomda o uso de https para sites que rodam tal
// app.use(helmet.dnsPrefetchControl()) // desativa a pré-busca de DNS, perde desempenho, mas ganha segurança
// app.use(helmet.noCache()) // Desativa o cache da página, util para a produção.
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'"],
//     scriptSrc: ["'self'", 'trusted-cdn.com']
//   }
  
// })
// ) // Define uma lista de fontes confiaveis no qual a pagina pode baixar
app.use(helmet({
  frameguard: {
    action: 'deny'
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com']
    }
  },
  dnsPrefetchControl: flase
})) // incluirá automaticamente todos os middlewares apresentados acima, exceto noCache() e contentSecurityPolicy()

app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
