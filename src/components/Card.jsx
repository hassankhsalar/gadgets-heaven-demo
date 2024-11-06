import { Navigate, useNavigate } from "react-router-dom";


const Card = ({ gadget }) => {
    const navigate = useNavigate()
    const { id, name, image, category, price, description, specification, availability, rating } = gadget || {}
    return (
        <div className="card bg-base-100 w-72 shadow-xl lg:w-96">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt={name}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Price: $ {price}</p>
    <div className="card-actions">
      <button className="p-1 px-2 rounded-3xl border-2 text-purple-400 border-purple-400" onClick={() => navigate(`/gadgetDetails/${id}`)}>View Details</button>
    </div>
  </div>
</div>
    );
};

export default Card;