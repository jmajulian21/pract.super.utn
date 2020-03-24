import { url } from '../config/config';

var datos;

export var findAll = () => {
    fetch(url + '/carreras')
        .then(data => {
            return data.json();
        }).catch(p => 0)
        .then(data => {
            datos=data;
        })
}