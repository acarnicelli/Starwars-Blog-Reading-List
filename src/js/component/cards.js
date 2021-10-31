import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-lg-3 col-md-4 col-sm-6">
			<div className="card">
				<img src="https://via.placeholder.com/400x200.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.item.name}</h5>
					<p>
						{props.tipo == "people" ? (
							<div className="detalles">
								<p>Gender : {props.item.gender}</p>
								<p>Hair Color : {props.item.hair_color}</p>
								<p>Eye Color : {props.item.eye_color}</p>
							</div>
						) : (
							<div className="detalles">
								<p>Population : {props.item.population}</p>
								<p>Terrain : {props.item.terrain}</p>
							</div>
						)}
					</p>
					<div className="botones">
						{props.tipo == "people" ? (
							<>
								<Link to={"/people/" + props.id} className="btn btn-outline-primary">
									<span>Learn More!</span>
								</Link>

								{/* Favoritos */}
								<Link
									className="btn btn-outline-warning"
									onClick={e => {
										actions.setFav(props.item.name, "people", props.id);
									}}>
									<span>
										{store.favList.some(value => value.name == props.item.name) ? (
											<i className="fas fa-heart btn-outline-danger" />
										) : (
											<i className="far fa-heart" />
										)}
									</span>
								</Link>
							</>
						) : (
							<>
								<Link to={"/planets/" + props.id} className="btn btn-outline-primary">
									<span>Learn More!</span>
								</Link>

								{/* Favoritos */}
								<Link
									className="btn btn-outline-warning"
									onClick={e => {
										actions.setFav(props.item.name, "planets", props.id);
									}}>
									<span>
										{store.favList.some(value => value.name == props.item.name) ? (
											<i className="fas fa-heart btn-outline-danger" />
										) : (
											<i className="far fa-heart" />
										)}
									</span>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	item: PropTypes.object,
	id: PropTypes.number,
	tipo: PropTypes.string
};

export default Cards;
