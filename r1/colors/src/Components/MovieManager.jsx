import React, { useState, useEffect } from 'react';
import '../Styles/buttons.scss';
import '../Styles/filmai.scss';

const MovieManager = _ => {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [movieDetails, setMovieDetails] = useState({
        title: '',
        year: '',
        categoryId: '',
        rating: ''
    });

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        setMovies(storedMovies);
        setCategories(storedCategories);
    }, []);
    

    const handleAddMovie = _ => {
        const newMovie = { id: Date.now(), ...movieDetails, year: Number(movieDetails.year), rating: Number(movieDetails.rating) };
        const updatedMovies = [...movies, newMovie];
        setMovies(updatedMovies);
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
        setMovieDetails({ title: '', year: '', categoryId: '', rating: '' });
    };

    const handleDeleteMovie = (id) => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
    };

    return (
        <div>
            <div className='filmai'>
                <h2 style={{ fontSize: '30px', color: 'skyblue' }}>Filmai</h2>
                <div className="container">
                    <input
                        type="text"
                        value={movieDetails.title}
                        onChange={(e) => setMovieDetails({ ...movieDetails, title: e.target.value })}
                        placeholder="Title"
                    />
                    <input
                        type="number"
                        value={movieDetails.year}
                        onChange={(e) => setMovieDetails({ ...movieDetails, year: e.target.value })}
                        placeholder="Year"
                    />
                    <select
                        value={movieDetails.categoryId}
                        onChange={(e) => setMovieDetails({ ...movieDetails, categoryId: e.target.value })}
                    >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        value={movieDetails.rating}
                        onChange={(e) => setMovieDetails({ ...movieDetails, rating: e.target.value })}
                        placeholder="Rating (1-10)"
                    />
                </div>
                <div className='button'>
                    <button type="button" className="blue" onClick={handleAddMovie}>Add Movie</button>
                    <ul>
                        {movies.map(movie => (
                            <li key={movie.id}>
                                {movie.title} ({movie.year}) - {categories.find(cat => cat.id == movie.categoryId)?.name || 'Unknown'} - Rating: {movie.rating}
                                <button type="button" className="red" onClick={_ => handleDeleteMovie(movie.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieManager;