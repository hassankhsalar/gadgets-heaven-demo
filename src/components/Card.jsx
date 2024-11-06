

const Card = ({ gadget }) => {
    const { id, name, image, category, price, description, Specification, availability, rating } = gadget || {}
    return (
        <div>
           {name}
        </div>
    );
};

export default Card;