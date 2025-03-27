import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {removeFromFav} from "../../store/slices/movieSlice";

const MyFavoriteMovies = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) =>  state.addLogin.FavMovie);

    const removeMovie = (id) => {
        dispatch(removeFromFav(id));
    };

    return (
        <div style={{ background: "linear-gradient(to bottom, rgb(255, 255, 255), rgb(20, 70, 233))" }}>

            <h2 style={{ textAlign:"center" ,fontWeight:"bold" , color:"black"}}>Your Favorite Movies List</h2>
            {favorites.length === 0 ? (
                <p style={{ textAlign:"center" ,fontWeight:"bold" , color:"black"}}>Your Movie Section Is Empty</p>
            ) : (
                favorites.map((movie, index) => (
                    <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                        <img src={movie.Poster} alt={movie.Title} width="200px" />
                        <p style={{ fontWeight: "bold" }}>{movie.Title}</p>
                        <p>Year: {movie.Year}</p>
                        <p>ImdbRating:⭐{movie.imdbRating}</p>
                        <p>Awards: {movie.Awards}</p>
                        <Button variant="danger" onClick={() => removeMovie(movie.imdbID)}>Remove</Button>
                        
                    </div>
                ))
            )}
        </div>
    );
};

export default MyFavoriteMovies;
