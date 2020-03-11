/*  Listar as coisas do meu GIT
var exe = new XMLHttpRequest();

//Buscar a url
exe.open('GET', 'https://api.github.com/user/luizosb');
exe.send(null);

exe.onreadystatechange = function(){
    if(exe.readyState === 4){
        console.log(JSON.parse(exe.responseText));
    }
}
*/

/*Promisse criada no curso

var minhaPromise = function(){
    return new Promisse(function(resolve, reject){
        var exe = new XMLHttpRequest();
        exe.open('GET', 'https://api.github.com/users/luizosb');
        exe.send(null);

        exe.onreadystatechange = function(){
            if (exe.readyState === 4){
                if(exe.status === 200){
                    resolve(JSON.parse(exe.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}


//Utilizando Axios para utilizar API
axios.get('https://api.github.com/users/luizosb')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
*/