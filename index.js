/* 
Verifique se é possível fazer login.
Para isso, é necessário que os campos email e password existam (não sejam nulos) e tenham mais de 5 caracteres.
Sua função deverá retornar true, caso as condições acima sejam satisfeitas e false caso algumas das condições não sejam satisfeitas.
Obs: Vale ressaltar que os campos email e password estão dentro de um objeto chamado body
object = {
  body {
    email: email@mail.com,
    password: 'segredosagrado',
  }
}

*/

const main = (object) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(object);

};

module.exports = main;


const main = (object) => {

  const { body } = object;
  if (body?.email?.length > 6 && body?.password?.length > 6) return true;
  return false;
};

module.exports = main; 