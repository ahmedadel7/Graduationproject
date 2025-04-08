import ViewAllReviews from './viewReviews';

const ReviewLIst = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.Review.map((p) => (
        <ViewAllReviews Review={p} key={p._id} />
      ))}
    </div>
  );
};

export default ReviewLIst;