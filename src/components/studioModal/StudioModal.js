import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function StudioModal(props) {
	const { show, onHide, filmData } = { ...props };
	return (
		<div>
			<Modal show={show} onClick={onHide} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>{filmData.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img
						src={filmData.movie_banner}
						alt="Movie Banner"
						className="img-fluid"
					/>
					<p>{filmData.description}</p>
					<p>Director: {filmData.director}</p>
					<p>Release Date: {filmData.release_date}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default StudioModal;
