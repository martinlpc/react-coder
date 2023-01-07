import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/ItemStyles.css";

const Item = ({ prod }) => {
    return (
        <article className="item-card col-md-5 col-lg-3 mt-5" id={prod.id}>
            <Card>
                <Card.Img variant="top" src={prod.img} alt={prod.title} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>$ {prod.price}</span>
                    </Card.Subtitle>
                    <Link to={"/item/" + prod.id}>
                        <Button variant="outline-primary">Ver producto</Button>
                    </Link>
                </Card.Body>
                {prod.stock <= 10 && <Card.Footer as="small">Quedan pocas unidades de este producto!</Card.Footer>}
            </Card>
        </article>
    );
};

export default Item;
