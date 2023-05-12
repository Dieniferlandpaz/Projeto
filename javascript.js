
//Objeto de usuarios
const users = {
    nome: '',
    usuario: '',
    senha: '',
    logado: false,
}
// Array de objetos dos usuários
let usersArray = [];

function startApp(){
    let opcao = 999
    while(opcao !== 0){
        let result;
        switch(opcao){
            case 1:
                result = login();
                if(result){
                   alert('Entrar no menu principal');
                }else{
                    alert("Usuario e senha incorreta.")
                }
                break;
            case 2:
                result = register();
                if (!result){
                    alert ('Não foi possivel realizar o cadastro');
                }else {
                    alert('Usuário cadastrado com sucesso!👍 Agora é so acessar.')
                }
                break;

            case 999:
            alert("Vovê precisa estar logado para acessar o menu principal! \n\n Caso ainda não tenha usuário cadastrado, ultilize a opção 2 do menu e faça o seu registro")
                break;

            default:
            alert("Opção não encontrada!")
                break;

        }
        opcao = Number(prompt("Selecione a opção desejada: \n 1- Entrar \n 2- Cadastrar usuario \n 3- Esqueci minhas credencias \n 0-Sair"));
    }
}


function login(){
    let user   = prompt('Digite seu usuário: ');
    let pass   = prompt ('Digite sua senha: ');
    return validateLogin(user,pass);
}

function validateLogin(user, pass){
    let result = false;
    for(let i = 0; i < usersArray.length; i++){
        console.log(usersArray[i]);
        
        if(usersArray[i].usuario === user && usersArray[i].senha === pass){
            result = true;
            usersArray[i].logado = true;

        }

    }
    return result;
}

function register(){
    let result = false 

   users.nome       = prompt("Digite seu nome: ");
   users.usuario    = prompt("Digite seu usuário: ");
   users.senha      = prompt("Digite sua senha : ");

   if(users.nome !== '' && users.senha !== '' ){
    usersArray.push(users);
   result = true;
   } 
   return result;
}


// Inicia o sitema 
startApp();
