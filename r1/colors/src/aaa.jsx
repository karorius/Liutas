<ul>
{movies.map(movie => (
    <li key={movie.id}>
        {movie.title} ({movie.year}) - {categories.find(cat => cat.id === movie.categoryId)?.name || 'Unknown'} - Rating: {movie.rating}
        <button type="button" className="red" onClick={ _ => handleDeleteMovie(movie.id)}>Delete</button>
    </li>
))}
</ul>