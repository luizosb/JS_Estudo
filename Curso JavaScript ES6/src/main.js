import api from './api';

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEL = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
        

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if (loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }       
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEL.value;

        if(repoInput.length === 0)
         return;


        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url}} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEL.value = '';

            this.render();
        } catch (err) {
            alert('O repositório não existe!');
        }

        this.setLoading(false);
    }
    

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl); 

        });

    }
}

const MeuApp = new App();





/* API
import axios from 'axios';
class Api{
    static getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
    
    }
}
Api.getUserInfo('luizosb');
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