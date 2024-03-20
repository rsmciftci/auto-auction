import { useSelector } from "react-redux";

function SellYourCar() {

    const user = useSelector(state => state.persistedData.userSlice)

    return (
        <div>
            {user.ID === null ?
                "need to login"
                :
                "logged in"
            }

        </div>
    );
}

export default SellYourCar;