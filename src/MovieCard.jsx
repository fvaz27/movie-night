function MovieCard(props) {
    const movie = props.movie;
    const toggle = props.onToggle;
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
            <button onClick={() => toggle(movie.id)}>
               {text}
            </button>
        </>
    )

}



export default MovieCard;