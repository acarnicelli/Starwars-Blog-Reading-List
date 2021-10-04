import React, { useContext } from "react";
import "../../styles/home.scss";
import Cards from "../component/cards";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<h2 style={{ color: "red" }}>Characters</h2>
				<div className="text-center mt-5 d-flex">
					{store.people.map((item, index) => {
						return <Cards item={item} key={index} tipo="people" />;
					})}
				</div>
			</div>
			<br />
			<div>
				<h2 style={{ color: "red" }}>Planets</h2>
				<div className="text-center mt-5 d-flex">
					{store.planets.map((item, index) => {
						return <Cards item={item} key={index} tipo="planets" />;
					})}
				</div>
			</div>
		</div>
	);
};
