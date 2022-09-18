import React,{useState} from "react";
import Categories from "./Categories";

const Category = () => {

    const [data, setData] = useState(Categories)

    const filterProduct = (item) => {
        const result = Categories.filter((x) => {
            return x.category === item;
        });
        setData(result);
    }

    return(
        <div className="container">
            <div className="containerHeader">
                <h1>Product Filter</h1>
            </div>

            <div className="mainContainer">
                <div className="buttons">
                    <button className="btn btn1" onClick={() => setData(Categories)}>All</button>
                    <button className="btn btn2" onClick={() => filterProduct('Men')}>Men</button>
                    <button className="btn btn3" onClick={() => filterProduct('Women')}>Women</button>
                    <button className="btn btn4" onClick={() => filterProduct('Kids')}>Kids</button>
                </div>

                <div className="cards">
                    {data.map((values) => {
                        const {price,category} = values;
                        return(
                            <>
                            <div className="card">
                                <div className="cardBody">
                                    <h2 className="productCategory">{category}</h2>
                                    <span className="price">${price}</span>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Category;