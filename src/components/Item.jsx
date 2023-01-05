import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Item = ({ prod }) => {
    return (
        <article className="col-md-5 col-lg-3 mt-5" id={prod.id}>
            <Link to={"/item/" + prod.id}>
                <div className="card" style={{ width: "13rem" }}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img className="card-img-top" src={prod?.img_src} alt={prod?.title} />
                        </div>
                        <button className="btn col-md-12">
                            <div className="card-body">
                                <h4 className="card-title">{prod?.title}</h4>
                                <p className="card-text">$ {prod?.price}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default Item;
