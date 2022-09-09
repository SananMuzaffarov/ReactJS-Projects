import React,{useState, useEffect} from "react";

const Pagination = () => {

    const [items, setItems] = useState([]);

    const [visibility, setVisibility] = useState(3);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')

        .then(response => response.json())

        .then(data => setItems(data))
    });

    const loadMore = () => {
            setVisibility(previousValue => previousValue + 3)
    }

    return(
        <div className="container">
            {items.slice(0,visibility).map((item) => (
                <div className="card">
                    <span>{item.id}</span>
                    <p>{item.body}</p>
                </div>
            ))}
            <button type="button" onClick={loadMore}>Load More</button>
        </div>
    );
}

export default Pagination;