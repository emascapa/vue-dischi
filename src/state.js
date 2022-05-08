//importo Vue
import Vue from 'vue';

//inserisco qui le variabili che voglio 
//raggiungere dai componenti non parenti
const state = Vue.observable({
    observablePokemonSelect: '1',
    observablePokemonSearch: '',
    observableSpotifySelect: '1',
    observableSpotifySearch: '',
})

//esporto
export default state