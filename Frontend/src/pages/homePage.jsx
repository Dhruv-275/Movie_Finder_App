import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import SearchBar from "../components/private/search";
import MovieCard from "../components/private/movieCard";
import Loader from "../components/private/loader";
import { Pagination } from "react-bootstrap";

const myApi = "42376b21";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState();


  useEffect(() => {
     
    const searchData = searchParams.get("search") || "avengers"
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page)
    allMoviesData(searchData,page);

    console.log("searchData",searchData);
    
  }, [searchParams]);

  const allMoviesData = async (searchData , page = 1) => {
    setLoading(true);
  
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchData}&page=${page}&apikey=${myApi}`);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };
     
  const searchFunc = (searchData) => {
    setCurrentPage(1)
    setSearchParams({ search: searchData,page:1 });
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
    searchParams.set("page", page);
    setSearchParams(searchParams);
};

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>

        <SearchBar onSearch={searchFunc}  />

        {loading ? (
        <Loader />
      ) : movies.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center gap-4 p-3">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-5">No movies found.</p>
      )}

         <Pagination className="justify-content-center mt-4">
                <Pagination.Prev onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1} />
                <Pagination.Item active>{currentPage}</Pagination.Item>
                <Pagination.Next onClick={() => handlePagination(currentPage + 1)} />
            </Pagination>
    </div>
  );
};

export default Home;
