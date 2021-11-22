import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

function StudioModal(props) {
	return (
		<Modal {...props} size="large">
			<Modal.Header closeButton>
				<Modal.Title>{props.item.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{props.item.description}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default function Home() {
	const [film, setFilm] = useState([]);
	const [showLoading, setShowLoading] = useState(true);
	const [modalShow, setModalShow] = useState(false);

	const apiUrl = `https://ghibliapi.herokuapp.com/films`;

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(apiUrl);
			setFilm(result.data);
			setShowLoading(false);
		};
		fetchData();
	}, []);

	const getId = (id) => {
		setModalShow(true);
	};

	return (
		<div className="jumbotron">
			{showLoading && (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			)}
			<Container>
				<Row style={{ padding: "20px" }} className="g-4">
					{film.map((item, id) => (
						<>
							<Card
								style={{
									width: "20rem",
									padding: "15px",
									margin: "15px",
								}}
							>
								<Card.Title style={{ textAlign: "center" }}>
									{item.title}
								</Card.Title>
								<Card.Img variant="bottom" src={item.image} />
								<Button
									variant="info"
									onClick={() => getId(item.id)}
								>
									Learn More
								</Button>
							</Card>
						</>
					))}
				</Row>
			</Container>
			{/* <StudioModal
				item={item}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/> */}
		</div>
	);
}
