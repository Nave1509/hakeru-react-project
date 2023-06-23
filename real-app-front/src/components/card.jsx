import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "6px", boxShadow: "  0 0 10px 0" }}
    >
      <img
        style={{ height: "250px", objectFit: "cover" }}
        src={bizImage}
        className="card-img-top  "
        alt={bizName}
      />
      <div className="card-body">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>
        <ul className="list-group list-group-flush">
          <div className="list-group-item">Address: {bizAddress}</div>
          <div className="list-group-item">Phone: {bizPhone}</div>
        </ul>
        <Link
          to={`/my-cards/view/${_id}`}
          className="card-link btn btn-success pb-1"
        >
          <i className="bi bi-eye"></i>
        </Link>
        <Link
          to={`/my-cards/edit/${_id}`}
          className="card-link btn btn-primary pb-1"
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Link
          to={`/my-cards/delete/${_id}`}
          className="card-link btn btn-danger pb-1"
        >
          <i className="bi bi-trash"></i>
        </Link>
      </div>
    </div>
  );
};
export default Card;
