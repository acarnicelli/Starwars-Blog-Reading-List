import React from "react";
import "../../styles/cards.scss";
import PropTypes from "prop-types";

const Cards = props => {
	return (
		<div>
			<div classNameName="card" style={{ width: "18rem" }}>
				<img src="https://via.placeholder.com/400x200.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.item.name}</h5>
					<p>
						<ul>
							{props.tipo == "people" ? (
								<>
									<li>Gender : {props.item.gender}</li>
									<li>Hair Color : {props.item.hair_color}</li>
									<li>Eye Color : {props.item.eye_color}</li>
								</>
							) : (
								<>
									<li>Population : {props.item.population}</li>
									<li>Terrain : {props.item.terrain}</li>
								</>
							)}
						</ul>
					</p>

					<a href="#" className="btn btn-primary">
						Learn More!
					</a>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	item: PropTypes.object,
	key: PropTypes.number,
	tipo: PropTypes.string
};

export default Cards;