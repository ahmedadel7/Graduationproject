import ViewAllComplaints from './ViewComplaintsForm';

const Complaints = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.Complaint.map((p) => (
        <ViewAllComplaints Complaint={p} key={p._id} />
      ))}
    </div>
  );
};

export default Complaints;