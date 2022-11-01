/* 
1. Desenvolva encima da função `writeFileCallback` o seguinte comportamento:
  - Quando o primeiro parâmetro, `err` existir, a função deve escrever no arquivo `log.txt` o conteúdo da propriedade `message` do `err`, usando `fs.appendFileSync`
  - Quando o primeiro parâmetro não existir ou for falso, a função deve escrever no arquivo `users.txt` o usuário (user, segundo parâmetro) usando a função `fs.appendFileSync`
2. Desenvolva encima da função `validateUser` o seguinte comportamento:
  - Quando `user` não tiver alguma das propriedades `name` ou `age`, a `callback` recebida como segundo parâmetro da função deve ser executada com `new Error('dados inválidos')` como argumento;
  - Caso contrário a `callback` dever ser executada com `false` como primeiro argumento e `user` como o segundo.
*/

const fs = require('fs');
const user = { name: 'Clotilde', age: 21 };

function writeFileCallback(err, user) {
  console.log('user:', user);
  console.log('err:', err);
}


function validateUser(user, callback) {
  console.log('user:', user);
  console.log('callback:', callback);
}


// O teste só vai funcionar se as chamadas das funções `saveProduct` e `storeApi` estiverem comentadas  

/// validateUser(user, writeFileCallback)

module.exports = { writeFileCallback, validateUser }
