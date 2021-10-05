import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Details = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// Que reciba desde la url 'people' o 'planets' y hacer la logica para renderizar condicionalmente
		<div classNameName="container">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">{store.people.length > 0 ? store.people[params.id].name : null}</h1>
				<p className="col-md-8 fs-4">
					Using a series of utilities, you can create this jumbotron, just like the one in previous versions
					of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Example button
				</button>
			</div>
		</div>
};

export default Details;
