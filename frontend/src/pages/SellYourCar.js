import { useSelector } from "react-redux";
import CarInfo from "../components/auction/CarInfo";

function SellYourCar() {

    const user = useSelector(state => state.persistedData.userSlice)

    return (
        <div>
            {user.ID === null ?
                <h1>You need to login</h1>
                :
                <CarInfo />
            }

        </div>
    );
}

export default SellYourCar;