import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Wrapper from "../../styles/Wrapper";
import StudioModal from "../studioModal/StudioModal";

const StyledButton = styled(Button)`
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const StyledHeader = styled.h1`
	color: royalblue;
	margin: 1em;
	padding: 0.25em 1em;
	text-align: center;
`;

export default function Home() {
	const [film, setFilm] = useState([]);
	const [filmData, setFilmData] = useState({});
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

	const toggleModal = async (item) => {
		await setFilmData(item);
		setModalShow(!modalShow);
	};

	const randomFilm = async () => {
		const values = Object.values(film);
		const prop = values[Math.floor(Math.random() * values.length)]
		await setFilmData(prop);
		setModalShow(!modalShow);
	}

	return (
		<Wrapper
			className="jumbotron"
			styles={{
				display: "flex",
				//flexDirection: "column"
			}}
		>
			<StyledHeader>Studio Ghibli Movies</StyledHeader>
			{showLoading && (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			)}
			<Container
				style={{
					textAlign: "center",
					justifyContent: "center",
					alignItems: "center",
					margin: "auto",
				}}
				fluid
			>
				<StyledButton
					style={{
						background: "transparent",
					}}
					onClick = {randomFilm}>
					Click for Movie Recommendation
				</StyledButton>
				<Row
					style={{ padding: "20px", margin: "20px" }}
					className="g-4"
				>
					{film.map((item, id) => (
						<>
							<Card
								key={id}
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
								<StyledButton onClick={() => toggleModal(item)}>
									Learn More
								</StyledButton>
							</Card>
						</>
					))}
				</Row>
			</Container>
			<StudioModal
				filmData={filmData}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</Wrapper>
	);
}
