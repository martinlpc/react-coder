import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products }) => {
    // Se mapea el listado de items segun la categoria y se renderiza
    function renderItems() {
        return products?.map((item) => <Item prod={item} key={item.id} />);
    }

    return <Row>{renderItems()}</Row>;
};

export default ItemList;
