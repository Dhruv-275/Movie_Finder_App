
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Spinner, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams, } from "react-router";
import {addToFav} from "../../store/slices/movieSlice"

const myApi = "42376b21";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const dispatch = useDispatch()


    useEffect(() => {
        getMovieDetails();
          }, [id]);

    async function getMovieDetails() {
        try {
            const apiResponse = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${myApi}`);
            if (apiResponse.data) {
                setMovieDetails(apiResponse.data);
            }
        } catch (error) {
            console.log("Error fetching movie details:", error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleAddToFavorites = (movie) => {
        dispatch(addToFav(movie));
        alert("Movie Added To The Favorites")
    };

      

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>

                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>

            </div>
        );
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Card style={{ width: "40rem", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>

                <h2 className="text-center mb-4">Movie Details</h2>

                <Card.Img variant="top" src={movieDetails.Poster} alt={movieDetails.Title} style={{ objectFit: "contain", height: "300px" }} />

                <Card.Body className="text-center">

                    <Card.Title>{movieDetails.Title}</Card.Title>
                    
                    <Card.Text><strong>Genre:</strong> {movieDetails.Genre}</Card.Text>
                    <Card.Text><strong>Rating:</strong> ⭐ {movieDetails.imdbRating}</Card.Text>
                    <Card.Text><strong>Actor:</strong> {movieDetails.Actors}</Card.Text>
                    <Card.Text><strong>Plot:</strong> {movieDetails.Plot}</Card.Text>

                    <Button variant="dark"  onClick={() => handleAddToFavorites(movieDetails)} >Add Favorites</Button>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default MovieDetails;
