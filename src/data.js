// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export function filtroEspecie(especie, personajes) {
  let filtroE = personajes.filter((item) => item.species === especie);
  // console.log(especie)
  return filtroE
}

export function filtroGenero(genero, personajes) {
  let filtroG = personajes.filter((item) => item.gender === genero);
  // console.log(filtroG)
  return filtroG
}

export function az(personajes) {
  let organizaAz = personajes.sort((personaje1, personaje2) => {
      return (personaje1.name < personaje2.name) ? - 1 : 1
  })
  // console.log (organizaAz)
  return organizaAz
}

export function za(personajes) {
  let organizaZa = personajes.sort((personaje1, personaje2) => {
      return (personaje1.name > personaje2.name) ? - 1 : 1
  })
  // console.log(organizaZa)
  return organizaZa
}

export const filtrar = (barraBusqueda, personajes) => {
  const texto = barraBusqueda.toLowerCase();
  const itemsFiltrados = personajes.filter((item) => item.name.toLowerCase().startsWith(texto));
  return itemsFiltrados;
  // console.log(itemsFiltrados)
}

