import { useParams } from "react-router-dom";
import auctionService from "../services/AuctionService";
import { useState } from "react";
import { useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import { BACKEND_URL } from "../config";
import styles from './Auction.module.css'
function Auction() {

    let { auctionID } = useParams();

    const [auction, setAuction] = useState(
        {
            Images: [],
            Car: []
        }
    )

    const [images, setImages] = useState([]);


    useEffect(
        () => {
            auctionService.getAuctionById(auctionID)
                .then(response =>
                    setAuction(response.data)
                ).catch(error => {
                    console.error('Error:', error); // TODO: not found
                });

        }
        , [auctionID]);

    useEffect(
        () => {
            auction.Images.map(
                image =>
                    setImages(images => [...images, {
                        original: BACKEND_URL + image.Path,
                        thumbnail: BACKEND_URL + image.Path,
                    },])
            )
        }
        , [auction]);


    return (
        <div className={styles.outerDiv}>
            <div className={styles.container}>


                <div className={styles.divLeft}>
                    <ReactImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} />
                </div>
                <div className={styles.divRight}>
                    <h3>Auction</h3>
                    <hr></hr>
                    <h6>Starts : {auction.StartTime}</h6>
                    <h6>Ends : {auction.EndTime}</h6>
                    <h6>Starting Price : {auction.StartingPrice} £</h6>
                    <h6>Minimum Bid : {auction.MinimumBid} £</h6>

                    <h3>Car</h3>
                    <hr></hr>
                    {
                        auction.Car.CatStatus === "No Cat Status" ?
                            ""
                            :
                            <h6>Cat Status : {auction.Car.CatStatus}</h6>
                    }
                    <h6>Make : {auction.Car.Make}</h6>
                    <h6>Model : {auction.Car.Model}</h6>
                    <h6>Milage : {auction.Car.Milage}</h6>
                    <h6>Year : {auction.Car.Year}</h6>
                    <h6>City : {auction.Car.City}</h6>

                    <h3>Bid</h3>
                    <hr></hr>
                    <h6>Current Bid : ? </h6>
                    <h6>Bid Field & Button</h6>

                </div>


            </div>

            <div className={styles.bottomDiv}>
                <h3>Car Details</h3>
                <hr></hr>
                <h6>BodyType : {auction.Car.BodyType}</h6>
                <h6>Doors : {auction.Car.Doors}</h6>
                <h6>Seats : {auction.Car.Seats}</h6>
                <h6>Color : {auction.Car.Color}</h6>
                <h6>EnginePower : {auction.Car.EnginePower} hp</h6>
                <h6>EngineSize : {auction.Car.EngineSize} L</h6>
                <h6>DriveTrain : {auction.Car.DriveTrain}</h6>
                <h6>Gearbox : {auction.Car.Gearbox}</h6>
                <h6>FuelType : {auction.Car.FuelType}</h6>
            </div>
        </div>
    )
}

export default Auction;