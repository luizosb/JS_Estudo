/*=============Exercício 1==============

var endereco = {
      rua: "Rua dos pinheiros",
      numero: 1293,
      bairro: "Centro",
      cidade: "São Paulo",
      uf: "SP" 
};

function conteudo(endereco){
    String = "O usuário mora em " + cidade + " / " + uf + ", no bairro"
    + bairro + ", na rua " + rua + "com nº " + numero;
}
alert(conteudo())

==========Exercício 2============

function pares(x, y){
    for (ind = x; ind <= 35; ind ++){
        if (ind % 2 ==0){
            alert(ind);
        }
    }

}
pares(19, 35);

============Exercicio 3============

function temHabilidade(skill) {
    var j = false;
    for (var i = 0; i < 3; i++){
        if(skills[i] == skill){
            j = true;
        } 
        return j;

    }

    
} 
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade("Javascript")); // true ou false

===========Exercício 4============

function experiencia(anos){
    if (anos <=1){
        console.log("Iniciante");
    }else if(anos <=3){
        console.log("Intermediário")
    }else if(anos <=6){
        console.log("Avançado");
    }else{
        console.log("Jedi Master");
    }
}

var anosEstudo = 7;
experiencia(anosEstudo);

=============Exercício 5===============

var usuario = [
    {
        nome : "Luiz",
        habilidade : ["Ping pong", "Quimica", "Java"]
    },
    {
        nome : "Italo",
        habilidade : ["Robo", "fazer hamburger", "pegar pokemon"]
    }
];

function tarefa(user){
    for (var i = 0; i < 2; i++){
        var frase = "O " + user[i].nome + " possui as habilidades: " + user[i].habilidade[0] + ", " + user[i].habilidade[1] + " e " + user[i].habilidade[2];
        console.log(frase);
    }
}
tarefa(usuario);

*/