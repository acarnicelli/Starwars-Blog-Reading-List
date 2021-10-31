const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favList: [],
			indexHover: -1
		},
		actions: {
			getData: () => {
				fetch("https://swapi.dev/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));
				fetch("https://swapi.dev/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
			},

			addFav: (nombre, tipo, id) => {
				setStore({
					favList: [...getStore().favList, { name: nombre, tipo: tipo, id: id }]
				});
			},
			//Para el botón de eliminar
			setIndexHover: index => {
				setStore({ indexHover: index });
			},

			removeFav: index => {
				let newFavList = getStore().favList.filter(element => element != getStore().favList[index]);
				setStore({ favList: newFavList });
			},

			setFav: (nombre, tipo, id) => {
				if (getStore().favList.some(value => value.name == nombre)) {
					//Busco el elemento que corresponda en el favList y obtengo el index para borrarlo.
					let idInFavArray = getStore().favList.findIndex(elem => elem.name == nombre);
					getActions().removeFav(idInFavArray);
				} else {
					getActions().addFav(nombre, tipo, id);
				}
			}
		}
	};
};

export default getState;
