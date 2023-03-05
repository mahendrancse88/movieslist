// List Heading Component
const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1 className="list-heading">{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
