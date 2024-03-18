import styles from './Home.module.css'
import commonStyle from '../Common.module.css'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { toast, Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Home() {

    const [country, setCountry] = useState("Country")
    const [city, setCity] = useState("City")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [make, setMake] = useState("Make")
    const [model, setModel] = useState("Model")

    function search() {
        if (minPrice >= maxPrice) {
            toast.error('Maximum price should be bigger than minimum price! ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });   

        } else if (city === "City") {
            toast.error('Please choose a city! ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });  
        } else if (make === "Make") {
            toast.error('Please choose a make! ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });  
        } else if (model === "Model") {
            toast.error('Please choose a model! ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });  
        }

        else {
            // /cars/:city/:make/:model/:minPrice/:maxPrice
            window.location.href = "/cars/" + city + "/" + make + "/" + model + "/" + minPrice + "/" + maxPrice;
        }
    }


    function returnCities(country) {
        if (country === "England") {
            return EnglandCities;
        } else if (country === "Northern Ireland") {
            return NorthernIrelandCities;
        } else if (country === "Scotland") {
            return ScotlandCities;
        } else if (country === "Wales") {
            return WalesCities;
        }
    }

    function returnModels(make) {
        if (make === "Audi") {
            return audiCarModels;
        } else if (make === "Bentley") {
            return bentleyModels;
        } else if (make === "BMW") {
            return bmwModels;
        } else if (make === "Bugatti") {
            return bugattiModels;
        } else if (make === "Dodge") {
            return dodgeModels;
        } else if (make === "Ferrari") {
            return ferrariModels;
        } else if (make === "Jaguar") {
            return jaguarModels;
        } else if (make === "Jeep") {
            return jeepModels;
        } else if (make === "Lamborghini") {
            return lamborghiniModels;
        } else if (make === "Land Rover") {
            return landRoverModels;
        } else if (make === "Maybach") {
            return maybachModels;
        } else if (make === "McLaren") {
            return mclarenModels;
        } else if (make === "Mercedes-Benz") {
            return mercedesBenzModels;
        } else if (make === "Rolls-Royce") {
            return rollsRoyceModels;
        } else if (make === "Toyota") {
            return toyotaModels;
        } else if (make === "Volkswagen") {
            return volkswagenModels;
        } else if (make === "Volvo") {
            return volvoModels;
        } else {
            return [];
        }
    }



    return (
        <div className={commonStyle.outerDiv}>
            <Form>
                <Form.Group className={styles.form} controlId="exampleForm.ControlInput1">

                    <Row className={styles.formRow}>
                        <Col className={styles.formCol}>
                            <Form.Select aria-label="Country"
                                onClick={(e) => setCountry(e.target.value)}
                            >
                                <option>Country</option>
                                <option value="England">England</option>
                                <option value="Northern Ireland">Northern Ireland</option>
                                <option value="Scotland">Scotland</option>
                                <option value="Wales">Wales</option>
                            </Form.Select>

                        </Col>
                        <Col className={styles.formCol}>
                            {
                                country !== "Country" ?
                                    <Form.Select aria-label="City" onClick={(e) => setCity(e.target.value)}>
                                        <option>City</option>
                                        {returnCities(country).map(
                                            function (city) {

                                                return <option key={city} value={city}>{city}</option>


                                            }
                                        )

                                        }
                                    </Form.Select>
                                    :
                                    <Form.Select aria-label="City" disabled>
                                        <option>City</option>
                                    </Form.Select>

                            }
                        </Col>
                    </Row>
                    <Row className={styles.formRow}>
                        <Col className={styles.formCol}>
                            <Form.Select type="make" placeholder="Make"
                                onClick={(e) => setMake(e.target.value)}
                            >
                                <option>Make</option>
                                {
                                    allCarMakes.map(
                                        function (make) {
                                            return <option key={make} value={make}>{make}</option>
                                        }
                                    )
                                }
                            </Form.Select>

                        </Col>
                        <Col className={styles.formCol}>
                            {
                                make !== "Make" ?
                                    <Form.Select aria-label="Model" onClick={(e) => setModel(e.target.value)}>
                                        <option>Model</option>
                                        {returnModels(make).map(
                                            function (model) {

                                                return <option key={model} value={model}>{model}</option>


                                            }
                                        )

                                        }
                                    </Form.Select>
                                    :
                                    <Form.Select aria-label="Model" disabled>
                                        <option>Model</option>
                                    </Form.Select>

                            }
                        </Col>
                    </Row>
                    <Row className={styles.formRow}>
                        <Col className={styles.formCol}>
                            <Form.Control type="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min price in £" />

                        </Col>
                        <Col className={styles.formCol}>
                            <Form.Control type="minPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max Price in £" />
                        </Col>
                    </Row>

                    <div className={styles.ButtonDiv}>
                        <Button variant="primary" onClick={() => search()}>Search Cars</Button>
                    </div>

                </Form.Group>

            </Form>
            <ToastContainer />

        </div >
    );

}

let EnglandCities = [
    "Bath",
    "Birmingham",
    "Bradford",
    "Brighton & Hove",
    "Bristol",
    "Cambridge",
    "Canterbury",
    "Carlisle",
    "Chelmsford",
    "Chester",
    "Chichester",
    "Colchester",
    "Coventry",
    "Derby",
    "Doncaster",
    "Durham",
    "Ely",
    "Exeter",
    "Gloucester",
    "Hereford",
    "Kingston-upon-Hull",
    "Lancaster",
    "Leeds",
    "Leicester",
    "Lichfield",
    "Lincoln",
    "Liverpool",
    "London",
    "Manchester",
    "Milton Keynes",
    "Newcastle-upon-Tyne",
    "Norwich",
    "Nottingham",
    "Oxford",
    "Peterborough",
    "Plymouth",
    "Portsmouth",
    "Preston",
    "Ripon",
    "Salford",
    "Salisbury",
    "Sheffield",
    "Southampton",
    "Southend-on-Sea",
    "St Albans",
    "Stoke on Trent",
    "Sunderland",
    "Truro",
    "Wakefield",
    "Wells",
    "Westminster",
    "Winchester",
    "Wolverhampton",
    "Worcester",
    "York"
];

let NorthernIrelandCities = [
    "Armagh",
    "Bangor",
    "Belfast",
    "Lisburn",
    "Londonderry",
    "Newry"
];

let ScotlandCities = [
    "Aberdeen",
    "Dundee",
    "Dunfermline",
    "Edinburgh",
    "Glasgow",
    "Inverness",
    "Perth",
    "Stirling"
];

let WalesCities = [
    "Bangor",
    "Cardiff",
    "Newport",
    "St Asaph",
    "St Davids",
    "Swansea",
    "Wrexham"
];

let allCarMakes = [

    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Dodge",
    "Ferrari",
    "Jaguar",
    "Jeep",
    "Lamborghini",
    "Land Rover",
    "Maybach",
    "McLaren",
    "Mercedes-Benz",
    "Rolls-Royce",
    "Toyota",
    "Volkswagen",
    "Volvo"
];

const volvoModels = [
    "S60",
    "S90",
    "V60",
    "V90",
    "XC40",
    "XC60",
    "XC90",
    "XC40 Recharge",
    "XC60 Recharge",
    "XC90 Recharge"
];


const volkswagenModels = [
    "Golf",
    "Jetta",
    "Passat",
    "Tiguan",
    "Atlas",
    "Arteon",
    "Touareg",
    "ID.4",
    "ID.3",
    "Taos"
];

const toyotaModels = [
    "Camry",
    "Corolla",
    "RAV4",
    "Highlander",
    "Tacoma",
    "Sienna",
    "Prius",
    "Yaris",
    "Supra",
    "4Runner",
    "Land Cruiser",
    "Avalon",
    "Tundra",
    "C-HR",
    "Sequoia",
    "Mirai",
    "Venza"
];

const rollsRoyceModels = [
    "Phantom",
    "Ghost",
    "Wraith",
    "Dawn",
    "Cullinan"
];



const mercedesBenzModels = [
    "A-Class",
    "B-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "CLA",
    "CLS",
    "GLA",
    "GLB",
    "GLC",
    "GLE",
    "GLS",
    "G-Class",
    "SLC",
    "SL",
    "AMG GT",
    "EQC"
];

const mclarenModels = [
    "570S",
    "570GT",
    "600LT",
    "620R",
    "720S",
    "765LT",
    "Artura",
    "Elva",
    "GT"
];

const maybachModels = [
    "S-Class",
    "GLS"
];

const landRoverModels = [
    "Defender",
    "Discovery",
    "Discovery Sport",
    "Range Rover",
    "Range Rover Evoque",
    "Range Rover Sport",
    "Range Rover Velar"
];

const lamborghiniModels = [
    "Aventador",
    "Huracán",
    "Urus",
    "Countach",
    "Diablo",
    "Gallardo",
    "Murciélago"
];

const jeepModels = [
    "Cherokee",
    "Compass",
    "Grand Cherokee",
    "Renegade",
    "Wrangler"
];

const jaguarModels = [
    "XE",
    "XF",
    "XJ",
    "F-Type",
    "E-Pace",
    "F-Pace",
    "I-Pace"
];

const ferrariModels = [
    "488 GTB",
    "488 Pista",
    "812 Superfast",
    "SF90 Stradale",
    "Portofino",
    "Roma",
    "F8 Tributo",
    "GTC4Lusso",
    "Monza SP1",
    "Monza SP2"
];

const dodgeModels = [
    "Challenger",
    "Charger",
    "Durango",
    "Grand Caravan",
    "Journey",
    "Viper"
];

const bugattiModels = [
    "Chiron",
    "Veyron",
    "Divo",
    "Centodieci",
    "La Voiture Noire"
];


const bmwModels = [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "6 Series",
    "7 Series",
    "8 Series",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
    "Z4",
    "i3",
    "i8"
];



const bentleyModels = [
    "Bentayga",
    "Continental GT",
    "Flying Spur",
    "Mulsanne"
];

const audiCarModels = [
    "A1",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "RS3",
    "RS4",
    "RS5",
    "RS6",
    "RS7",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "TT",
    "R8"
];


export default Home;