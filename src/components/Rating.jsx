import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({
  heading = "Rate Your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [Submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };
  //close modal function to reset the state of the rating component when the modal is closed
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      {/* <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0 || Submitted}
      >
        Submit
      </button> */}

      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0 || Submitted}
      >
        Submit
      </button>

      <Modal isOpen={Submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
