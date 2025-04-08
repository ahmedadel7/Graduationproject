import AdminViewAllReviews from '../Components/auth/AdminViewReviews';

const AdminReviewLIst = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.Review.map((p) => (
        <AdminViewAllReviews Review={p} key={p._id} />
      ))}
    </div>
  );
};

export default AdminReviewLIst;