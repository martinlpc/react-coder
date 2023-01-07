import Item from "../components/Item";

const ItemList = ({ products }) => {
    // Se mapea el listado de items segun la categoria y se renderiza
    function renderItems() {
        return products?.map((item) => <Item prod={item} key={item.id} />);
    }

    return <div className="row">{renderItems()}</div>;
};

export default ItemList;
