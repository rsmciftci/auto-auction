import Form from 'react-bootstrap/Form';
import styles from './CarInfo.module.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { ALLMAKES, AUDI_MODELS, BENTLEY_MODELS, BMW_MODELS, BODY_TYPE, BUGATTI_MODELS, CAR_COLORS, CAR_DOORS, CAR_SEATS, CAT_STATUS, COUNTRIES, DODGE_MODELS, DRIVETRAINS, ENGINE_POWER, ENGINE_SIZE, ENGLAND_CITIES, FERRARI_MODELS, FUEL_TYPE, GEARBOX, JAGUAR_MODELS, JEEP_MODELS, LAMBORGHINI_MODELS, LANDROVER_MODELS, MAYBACH_MODELS, MCLAREN_MODELS, MERCEDESBENZ_MODELS, NORTHERN_IRELAND_CITIES, ROLLSROYCE_MODELS, SCOTLAND_CITIES, TOYOTA_MODELS, VOLKSWAGEN_MODELS, VOLVO_MODELS, WALES_CITIES } from '../../constants';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import auctionService from '../../services/AuctionService';
import { BACKEND_URL } from '../../config';
import axios from 'axios';
function CarInfo() {

    const [componentState, setComponentState] = useState("initialState");
    const [auctionID, setAuctionID] = useState();


    const [uploadedFiles, setUploadedFiles] = useState([])

    const [auctionStartDate, setAuctionStartDate] = useState("");
    const [auctionEndDate, setAuctionEndDate] = useState("");
    const [startingPrice, setStartingPrice] = useState();
    const [minimumBid, setMinimumBid] = useState();

    const [country, setCountry] = useState("Country");
    const [city, setCity] = useState("City");
    const [make, setMake] = useState("Make");
    const [model, setModel] = useState("Model");
    const [bodyType, setBodyType] = useState("Body Type");
    const [gearbox, setGearbox] = useState("Gearbox");
    const [fuelType, setFuelType] = useState("Fuel Type");
    const [color, setColor] = useState("Color");
    const [doors, setDoors] = useState();
    const [seats, setSeats] = useState();
    const [engineSize, setEngineSize] = useState();
    const [enginePower, setEnginePower] = useState();
    const [driveTrain, setDriveTrain] = useState("Drive Train");
    const [catStatus, setCatStatus] = useState("Cat Status");
    const [milage, setMilage] = useState();
    const [year, setYear] = useState("Year");


    const RequestBody = {

        Car: {

            City: city,
            Make: make,
            Model: model,
            BodyType: bodyType,
            Milage: parseInt(milage),
            Gearbox: gearbox,
            FuelType: fuelType,
            Year: year,
            Color: color,
            Doors: parseInt(doors),
            Seats: parseInt(seats),
            EngineSize: parseInt(engineSize),
            EnginePower: parseInt(enginePower),
            DriveTrain: driveTrain,
            CatStatus: catStatus

        },

        Auction: {
            StartTime: convertDateFormat(auctionStartDate) + "T00:00:00Z",
            EndTime: convertDateFormat(auctionEndDate) + "T00:00:00Z",
            StartingPrice: parseInt(startingPrice),
            MinimumBid: parseInt(minimumBid)
        }

    }

    function convertDateFormat(dateString) {
        var parts = dateString.split('/');
        var newDateString = parts[2] + '-' + parts[1] + '-' + parts[0];
        return newDateString;
    }


    function returnCities() {
        if (country === "England") {
            return ENGLAND_CITIES;
        } else if (country === "Wales") {
            return WALES_CITIES;
        } else if (country === "Northern Ireland") {
            return NORTHERN_IRELAND_CITIES;
        } else if ((country === "Scotland")) {
            return SCOTLAND_CITIES;
        }
    }

    function returnModels() {
        switch (make) {
            case "Audi":
                return AUDI_MODELS;
            case "Bentley":
                return BENTLEY_MODELS;
            case "BMW":
                return BMW_MODELS;
            case "Bugatti":
                return BUGATTI_MODELS;
            case "Dodge":
                return DODGE_MODELS;
            case "Ferrari":
                return FERRARI_MODELS;
            case "Jaguar":
                return JAGUAR_MODELS;
            case "Jeep":
                return JEEP_MODELS;
            case "Lamborghini":
                return LAMBORGHINI_MODELS;
            case "Land Rover":
                return LANDROVER_MODELS;
            case "Maybach":
                return MAYBACH_MODELS;
            case "McLaren":
                return MCLAREN_MODELS;
            case "Mercedes-Benz":
                return MERCEDESBENZ_MODELS;
            case "Rolls-Royce":
                return ROLLSROYCE_MODELS;
            case "Toyota":
                return TOYOTA_MODELS;
            case "Volkswagen":
                return VOLKSWAGEN_MODELS;
            case "Volvo":
                return VOLVO_MODELS;
            default:
                return [];
        }
    }

    function saveAuctionAndCar() {
        auctionService.createAuction(RequestBody)
            .then(function (response) {
                setAuctionID(response.data.ID)
                setComponentState("Render Image Upload")
              
            })
            .catch(function (error) {
                alert("Fail")
            });

    }




    const [formData, setFormData] = useState({
        files: []
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            files: event.target.files
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('auctionId', auctionID); // TODO: auction ID
        for (let i = 0; i < formData.files.length; i++) {
            formDataToSend.append('files', formData.files[i]);
        }

        try {

            const axiosInstance = axios.create({
                baseURL: BACKEND_URL,
            });

            const response = await axiosInstance.post('/upload', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };






    return (

        <div className={styles.container}>
            {
                componentState === "initialState" ?
                    <div className={styles.mainDiv}>

                        <div>
                            <b>Auction Details</b>
                        </div>
                        <hr></hr>

                        <Row>

                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Date Auction Starts</Form.Label>
                                    <Form.Control type="text" placeholder="DD/MM/YYYY" onChange={(e) => setAuctionStartDate(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicText" onChange={(e) => setAuctionEndDate(e.target.value)} >
                                    <Form.Label>Date Auction Ends</Form.Label>
                                    <Form.Control type="text" placeholder="DD/MM/YYYY" />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row>

                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicText" onChange={(e) => setStartingPrice(e.target.value)}  >
                                    <Form.Label>Starting Price</Form.Label>
                                    <Form.Control type="text" placeholder="Starting price in £" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicText" onChange={(e) => setMinimumBid(e.target.value)} >
                                    <Form.Label>Minimum Bid</Form.Label>
                                    <Form.Control type="text" placeholder="Minimum bid in £" />
                                </Form.Group>
                            </Col>


                        </Row>

                        <div>
                            <b>Car Details</b>
                        </div>
                        <hr></hr>

                        <Row className={styles.row}>
                            <Col>

                                <Form.Select aria-label="Country" onClick={(e) => { setCountry(e.target.value); setCity("City"); }}>
                                    <option>Country</option>
                                    {
                                        COUNTRIES.map(
                                            country =>
                                                <option value={country}>{country}</option>
                                        )

                                    }
                                </Form.Select>


                            </Col>
                            <Col>
                                {country !== "Country" ?
                                    <Form.Select aria-label="City" onChange={(e) => setCity(e.target.value)}>

                                        <option>City</option>
                                        {
                                            returnCities().map(
                                                city =>
                                                    <option key={city} value={city}>{city}</option>
                                            )
                                        }

                                    </Form.Select>

                                    :
                                    <Form.Select aria-label="Default select example" disabled>
                                        <option>City</option>
                                    </Form.Select>


                                }
                            </Col>

                        </Row>
                        <Row className={styles.row}>
                            <Col>

                                <Form.Select aria-label="Default select example" onChange={(e) => setMake(e.target.value)}>
                                    <option>Make</option>
                                    {
                                        ALLMAKES.map(
                                            make =>
                                                <option key={make} value={make}>{make}</option>
                                        )

                                    }
                                </Form.Select>


                            </Col>
                            <Col>
                                {make !== "Make" ?
                                    <Form.Select aria-label="Default select example" onChange={(e) => setModel(e.target.value)}>
                                        <option>Model</option>
                                        {
                                            returnModels().map(
                                                model =>
                                                    <option key={model} value={model}>{model}</option>
                                            )
                                        }

                                    </Form.Select>
                                    :
                                    <Form.Select aria-label="Default select example" disabled>
                                        <option>Model</option>
                                    </Form.Select>
                                }
                            </Col>
                        </Row>

                        <Row className={styles.row}>
                            <Col>

                                <Form.Select aria-label="Default select example" onChange={(e) => setBodyType(e.target.value)}>
                                    <option>Body Type</option>
                                    {
                                        BODY_TYPE.map(
                                            type =>
                                                <option value={type} key={type}>{type}</option>
                                        )
                                    }
                                </Form.Select>


                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" onChange={(e) => setGearbox(e.target.value)}>
                                    <option>Gearbox</option>
                                    {
                                        GEARBOX.map(
                                            gearbox =>
                                                <option value={gearbox} key={gearbox}>{gearbox}</option>
                                        )
                                    }
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className={styles.row}>
                            <Col>

                                <Form.Select aria-label="Default select example" onChange={(e) => setFuelType(e.target.value)}>
                                    <option>Fuel Type</option>
                                    {
                                        FUEL_TYPE.map(
                                            fueltype =>
                                                <option value={fueltype} key={fueltype}>{fueltype}</option>
                                        )
                                    }
                                </Form.Select>


                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" onChange={(e) => setColor(e.target.value)}>
                                    <option>Color</option>
                                    {
                                        CAR_COLORS.map(
                                            color =>
                                                <option value={color} key={color}>{color}</option>
                                        )
                                    }
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className={styles.row}>
                            <Col>

                                <Form.Select aria-label="Default select example" onChange={(e) => setDoors(e.target.value)}>
                                    <option>Doors</option>
                                    {
                                        CAR_DOORS.map(
                                            doors =>
                                                <option value={doors} key={doors}>{doors}</option>
                                        )
                                    }
                                </Form.Select>


                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" onChange={(e) => setSeats(e.target.value)}>
                                    <option>Seats</option>
                                    {
                                        CAR_SEATS.map(
                                            seats =>
                                                <option value={seats} key={seats}>{seats}</option>
                                        )
                                    }
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className={styles.row}>
                            <Col>

                                <Form.Select aria-label="Default select example" onChange={(e) => setEngineSize(e.target.value)}>
                                    <option>Engine Size</option>
                                    {
                                        ENGINE_SIZE.map(
                                            size =>
                                                <option value={size} key={size}>{size}</option>
                                        )
                                    }
                                </Form.Select>


                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" onChange={(e) => setEnginePower(e.target.value)}>
                                    <option>Engine Power</option>
                                    {
                                        ENGINE_POWER.map(
                                            power =>
                                                <option value={power} key={power}>{power}</option>
                                        )
                                    }
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className={styles.row}>
                            <Col>

                                <Form.Select aria-label="Default select example" onChange={(e) => setDriveTrain(e.target.value)}>
                                    <option>DriveTrain</option>
                                    {
                                        DRIVETRAINS.map(
                                            driveTrain =>
                                                <option value={driveTrain} key={driveTrain}>{driveTrain}</option>
                                        )
                                    }
                                </Form.Select>


                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" onChange={(e) => setCatStatus(e.target.value)}>
                                    <option>Cat Status</option>
                                    {
                                        CAT_STATUS.map(
                                            status =>
                                                <option value={status} key={status}>{status}</option>
                                        )
                                    }
                                </Form.Select>
                            </Col>
                        </Row>


                        <Row className={styles.row}>
                            <Col>
                                <Form.Control aria-label="Default select example" placeholder='Milage' onChange={(e) => setMilage(e.target.value)} />

                            </Col>
                            <Col>
                                <Form.Control aria-label="Default select example" placeholder='Year' onChange={(e) => setYear(e.target.value)} />
                            </Col>
                        </Row>

                        <hr></hr>

                        <div className={styles.buttonDiv}>
                            <Button onClick={() => saveAuctionAndCar()}>Create Auction</Button>
                        </div>

                    </div>
                    :
                    <div className={styles.mainDiv}>

                        <div>
                            <b>Images</b>
                        </div>
                        <hr></hr>

                        <form >
                            <div>
                                <label htmlFor="images">Upload Images:</label>
                                <br></br>
                                <input
                                    type="file"
                                    id="images"
                                    name="images"
                                    accept="image/*"
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </div>
                           
                        </form>
                       


                        <hr></hr>
                        <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>

                      
                    </div>
            }
        </div>
    );


}

export default CarInfo;