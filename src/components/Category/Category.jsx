import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./Category.css";
import Products from '../Products/Products'

const Category = () => {

    const { id } = useParams();

    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
                <Products innerpage={true} products={data} />
            </div>
        </div>
    )
};

export default Category;
