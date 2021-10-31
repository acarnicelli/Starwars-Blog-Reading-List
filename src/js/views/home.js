import React, { useContext } from "react";
import "../../styles/home.scss";
import Cards from "../component/cards";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<h2>Characters</h2>
				<div className="row">
					{store.people.map((item, index) => {
						return <Cards item={item} key={index} id={index} tipo="people" />;
					})}
				</div>
			</div>
			<br />
			<div className="container">
				<h2>Planets</h2>
				<div className="row">
					{store.planets.map((item, index) => {
						return <Cards item={item} key={index} id={index} tipo="planets" />;
					})}
				</div>
			</div>
		</div>
	);
};
