  import { Card, Button } from "react-bootstrap";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router";
  import {addToFav} from "../../store/slices/movieSlice"

  const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleAddToFavorites = (movie) => {
      dispatch(addToFav(movie));
      alert("Movie Added To The Favorites")
  };

    return (
      <Card style={{ width: "16rem" }}>
        <Card.Img  src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
          <div className="d-flex justify-content-between gap-1">
                <Button style={{ fontSize: '14px' }}  variant="success"onClick={() => navigate(`/movie/${movie.imdbID}`)} >View Details</Button>
              <Button  style={{ fontSize: '14px' }}  variant="success"  onClick={() => handleAddToFavorites(movie)} >Add Favorites</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }; 

  export default MovieCard;
