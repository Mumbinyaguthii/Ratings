const Star = ({
  star,
  rating,
  hover,
  color,
  ratingClick,
  hoverEnter,
  hoverLeave,
}) => {
  return (
    <span
      style={{
        color: star <= (hover || rating) ? color : "lightgray",
        cursor: "pointer",
      }}
      onClick={() => {
        ratingClick(star);
      }}
      onMouseEnter={() => {
        hoverEnter(star);
      }}
      onMouseLeave={hoverLeave}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
