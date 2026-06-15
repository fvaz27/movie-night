function MovieCard(props) {
    const movie = props.movie;
    let text;

    if(movie.watched){
        text = "Watched"
    }else{
        text = "Not Watched"
    }

    return (
        <>
            <h2>{movie.title}:</h2>
            <p>
            {movie.genre} {movie.year}  
            {
              text
            }   
            </p>
            <br />
        </>
    )

}

export default MovieCard;