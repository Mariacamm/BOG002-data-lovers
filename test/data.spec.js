import {filtroEspecie, az, za, filtrar} from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';

const personajesPrueba =[{ "name": "Rick Sanchez" }, {"name": "Summer Smith"}, {"name": "Beth Smith"}, {"name": "Evil Morty"}]; 
const personajesAZ =[{"name": "Beth Smith"}, {"name": "Evil Morty"}, {"name": "Rick Sanchez"}, {"name": "Summer Smith"}]; 
const personajesZA =[{"name": "Summer Smith"}, {"name": "Rick Sanchez"}, {"name": "Evil Morty"}, {"name": "Beth Smith"}];


describe('filtroEspecie es una función', () => {
  it('is a function', () => {
    expect(typeof filtroEspecie).toBe('function');
  });

  it('cuando busquemos human nos retorne 244 personajes', () => {
    expect(filtroEspecie("Human", data.results)).toHaveLength(244);
  });
}); 

describe('az es una función', () => {
  it('is a function', () => {
    expect(typeof az).toBe('function');
  });

  it('cuando seleccionemos az nos organice los personajes alfabeticamente', () => {
    expect(az(personajesPrueba)).toStrictEqual(personajesAZ);
  });
  
});

describe('za es una función', () => {
  it('is a function', () => {
    expect(typeof za).toBe('function');
  });

  it('cuando seleccionemos za nos organice los personajes de la z a la a', () => {
    expect(za(personajesPrueba)).toStrictEqual(personajesZA);
  });
  
});

describe('filtrar es una función', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('cuando busquemos rick nos retorne un array con 13', () => {
    expect(filtrar("Rick", data.results)).toHaveLength(13);
  });
  
});
