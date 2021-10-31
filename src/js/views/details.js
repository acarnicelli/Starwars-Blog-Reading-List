import "../../styles/details.scss";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

// TODO: Hacer el sistema de favoritos.

const Details = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div classNameName="container">
			<div className="container-fluid py-5">
				<div className="row">
					<div className="col-6">
						<div classNameName="container">
							<img src="https://via.placeholder.com/800x600.png" className="img-fluid" />
						</div>
					</div>
					<div className="col-6 text-center d-flex align-items-center flex-column">
						<div>
							<h1 className="display-5 fw-bold">
								{params.tipo == "people"
									? store.people.length > 0
										? store.people[params.id].name
										: null
									: store.planets.length > 0
										? store.planets[params.id].name
										: null}
							</h1>
						</div>
						<div>
							<p className="fs-4 text-center">
								La Fuerza era un campo de energía que conectaba a todos los seres vivos en la galaxia.
								El poder de la Fuerza podía ser utilizado por individuos que fueran sensibles a ella, un
								poder que se aprovechaba a través de los midiclorianos. La Fuerza hablaba a través de
								los midiclorianos, permitiendo a ciertos seres usar la Fuerza si eran lo suficientemente
								sensibles a sus poderes. Para medir el potencial de un individuo en la Fuerza, se usaban
								análisis de sangre con el fin de estimar el número de midiclorianos dentro de las
								células del sujeto.
							</p>
						</div>
					</div>
				</div>
				<div className="row datos">
					<div className="col-2">
						<p>Name:</p>

						<p>
							{params.tipo == "people"
								? store.people.length > 0
									? store.people[params.id].name
									: null
								: store.planets.length > 0
									? store.planets[params.id].name
									: null}
						</p>
					</div>
					<div className="col-2">
						{params.tipo == "people" ? (
							<>
								<p>Birth Year:</p>
								<p>{store.people.length > 0 ? store.people[params.id].birth_year : null}</p>
							</>
						) : (
							<>
								<p>Climate:</p>
								<p> {store.planets.length > 0 ? store.planets[params.id].climate : null}</p>
							</>
						)}
					</div>
					<div className="col-2">
						{params.tipo == "people" ? (
							<>
								<p>Gender:</p>
								<p>{store.people.length > 0 ? store.people[params.id].gender : null}</p>
							</>
						) : (
							<>
								<p>Pupulation:</p>
								<p> {store.planets.length > 0 ? store.planets[params.id].population : null}</p>
							</>
						)}
					</div>
					<div className="col-2">
						{params.tipo == "people" ? (
							<>
								<p>Height:</p>
								<p>{store.people.length > 0 ? store.people[params.id].height : null}</p>
							</>
						) : (
							<>
								<p>Orbital Period:</p>
								<p> {store.planets.length > 0 ? store.planets[params.id].orbital_period : null}</p>
							</>
						)}
					</div>
					<div className="col-2">
						{params.tipo == "people" ? (
							<>
								<p>Skin Color:</p>
								<p>{store.people.length > 0 ? store.people[params.id].skin_color : null}</p>
							</>
						) : (
							<>
								<p>Rotation Period:</p>
								<p> {store.planets.length > 0 ? store.planets[params.id].rotation_period : null}</p>
							</>
						)}
					</div>
					<div className="col-2">
						{params.tipo == "people" ? (
							<>
								<p>Eye Color:</p>
								<p>{store.people.length > 0 ? store.people[params.id].eye_color : null}</p>
							</>
						) : (
							<>
								<p>Diameter:</p>
								<p> {store.planets.length > 0 ? store.planets[params.id].diameter : null}</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
