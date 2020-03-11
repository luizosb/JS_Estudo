import axios from 'axios';

class Api{
    static getUserInfo(username){
        const response = await axios.get(`https://`)
    }
}




/*Fazer com que aconteça as coisas em tempo determinado
const minhaPromise = () => new Promise((resolve, reject)=>{
    setTimeout(()=> {resolve('OK')}, 2000);
});

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

 executaPromise();
IMPORTAR FUNÇÕES
import soma ,{sub} from './funcoes';
import soma from './soma'; 

console.log(soma(1,2));
console.log(sub(7,2));
*/