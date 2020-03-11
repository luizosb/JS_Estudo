/*OBJECT SHORT  SYNTAX
const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'GFT'
};

console.log(usuario)

/*TEMPLATE LITERALS
const nome = "Luiz";
const idade = 23;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

/*SPREAD MUDAR NOME DENTRO DO ARRAY

const usuario1= {
    nome : 'Luiz',
    idade : 23,
    empresa: 'GFT'
};

const usuario2 = {...usuario1, nome : 'Italo'};

/*SPREAD JUNTAR 2 VETORES
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];


/*REST EM NUMEROS 
function soma(...params){
    return params.reduce((total, next) => total + next);
}

/*REST EM VETORES
const arr = [1,2,3,4];

const [ a,...c] = arr;

console.log(a);
console.log(c);
/*REST

const usuario = {
    nome : 'Luiz',
    idade : 23,
    empresa: 'GFT'
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

/*DESESTRUTURAÇÃO DE OBJETOS NO JAVASCRIPT

const usuario = {
    nome : 'Luiz',
    idade : 23,
    endereco:{
        cidade: 'São Paulo',
        estado: 'SP'
    },
};

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);

//Destruturação
const { nome, idade, endereco: {cidade, estado} } = usuario;

/*
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());



/*const arr = [1,3,4,5,6];

const newArr = arr.map((item) => item * 2);

/*retornamos um objeto por arrow functions
const teste = () => ({ nome : 'Luiz'});

/*assim construmimos funçoes q pode ser numero ou string, porem objeto nao
const teste = () => 'teste';

/*é bom utilizar arrow function em funções anonimas como essa
const newArr = arr.map(function(item){
    return item * 2;
})
 
/*
const arr = [1,3,4,5,8,9];

//map serve para percorrer um vetor e retornar uma informação
const newArr = arr.map(function(item, index){
    return item + index;
});

//reduce serve para consumir todo nosso vetor e transformar em uma informação, como um numero
const sum = arr.reduce(function(total, next){
    return total + next;
});

//filter serve para filtrar valores
const filter = arr.filter(function(item){
    return item % 2 === 0;//retorna true ou false
});

console.log(filter);

//find serve para verificar existe uma informação dentro do array
//ou se a gente consegue encontrar dentro do array

const find = arr.find(function(item){
    return item === 4; //retorna true ou false
});

/*dentro de toda chave chamos de escopo no JS
function teste(x){
    let y = 2;

    if(x>5){
        let y = 4;
        console.log(x,y);
    }
}
teste(10);

/* Trabalha com o mesmo formato do objeto porém altera valores dentro do objeto
const usuario = { nome: 'Luiz'};

usuario.nome = 'Raul';
console.log(usuario);

const a = 1;

o valor de const não pode ter seu valor reatribuido

/*Quando criamos classes colocando como estatico (static) não precisamos colocar um constructor
class Matematica{
       static soma(a, b){
        return a + b;
    }
}
 console.log(Matematica.soma(1,2));


/*
CRIAÇÃO DE CLASSES
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

UTILIZAÇÃO DE HERANÇA
class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Luiz';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

CRIAR UM TODO NA LISTA
const MinhaLista = new TodoList();

AO CLICAR NO BOTAO MOSTRAR OS USUARIOS
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}


/* Crianção de metodos
class Teste{
    metodo(){

    }

    outro(){

    }
}
*/