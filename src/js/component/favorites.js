import "../../styles/favorites.scss";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="ml-auto">
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					{"Favorites "}
					<span className="border-0 rounded bg-secondary px-1 fw-bold"> {store.favList.length}</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favList.map((item, index) => {
						return (
							<div className="container" key={index}>
								<li
									onMouseOver={() => {
										actions.setIndexHover(index);
									}}
									onMouseLeave={() => {
										actions.setIndexHover(-1);
									}}>
									<div className="cruzContainer">
										{item.tipo == "people" ? (
											<Link to={"/people/" + item.id} className="dropdown-item">
												{item.name}
											</Link>
										) : (
											<Link to={"/planets/" + item.id} className="dropdown-item">
												{item.name}
											</Link>
										)}

										{store.indexHover == index ? (
											<div className="cruz">
												<i
													className="fas fa-times"
													onClick={() => {
														actions.removeFav(index);
													}}
												/>
											</div>
										) : (
											""
										)}
									</div>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Favorites;
