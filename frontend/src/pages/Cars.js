import { useParams } from "react-router-dom"

function Cars() {
    let { city, make, model, minPrice, maxPrice } = useParams();
    return(
        <div>
            <h6>{"city : " + city}</h6>
            <h6>{"make : " + make}</h6>
            <h6>{"model : " + model}</h6>
            <h6>{"minPrice : " + minPrice}</h6>
            <h6>{"maxPrice : " + maxPrice}</h6>

        </div>
    );    
}

export default Cars;