import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import auctionService from '../services/AuctionService';
import { BACKEND_URL, FRONTEND_URL } from '../config';
import styles from './MyAuctions.module.css';
import { useParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import ReactImageGallery from "react-image-gallery";


function MyAuctions() {

    const userID = useSelector(state => state.persistedData.userSlice.ID);


    const [imagesList, setImagesList] = useState([]);

    const { page } = useParams();

    const [auctions, setAuctions] = useState([])
    const numberOfItemsPerPage = 8;
    const maxPages = Math.ceil(auctions.length / numberOfItemsPerPage)



    useEffect(
        () => {

            auctionService.getAuctionsByUserId(userID)
                .then(response => {
                    setAuctions(response.data);
                    console.log(response.data)
                    response.data.map(
                        auction => {
                            let images = [];
                            auction.Images.map(image =>
                                images = [
                                    ...images,
                                    {
                                        original: BACKEND_URL + image.Path,
                                        thumbnail: BACKEND_URL + image.Path,
                                    },
                                ]
                            )

                            setImagesList(imagesList => [...imagesList, images])
                            return images;

                        }
                    )
                }
                ).catch(error => {
                    console.error('Error:', error);
                });

        }
        , []);





    function ReturnFirstIndex(page) {

        return (page - 1) * numberOfItemsPerPage;

    }

    function ReturnSecondIndex(page) {

        return page * numberOfItemsPerPage;

    }

    function RedirectToFirst() {
        window.location.href = FRONTEND_URL + "ending-soon/1";
    }
    function RedirectToPrevious() {
        if (page > 1) {
            window.location.href = FRONTEND_URL + "ending-soon/" + page - 1;
        }
    }

    function RedirectToNext() {
        if (page < maxPages) {
            window.location.href = FRONTEND_URL + "ending-soon/" + page + 1;
        }
    }

    function RedirectToLast() {
        if (page < maxPages) {
            window.location.href = FRONTEND_URL + "ending-soon/" + maxPages;
        }
    }

    function OpenAuction(id) {
        window.location.href = FRONTEND_URL + "auction/" + id;
    }


    return (
        <div className={styles.mainDiv}>
            {
                auctions.slice(ReturnFirstIndex(page), ReturnSecondIndex(page)).map((auction, index) =>


                    <div className={styles.div} onClick={() => OpenAuction(auction.ID)}>


                        <ReactImageGallery items={imagesList[index]} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false} />

                        <h6 key={index + 1 + "car"}>{auction.Car.Make} - {auction.Car.Model} ( {auction.Car.Year} )</h6>
                        <h6 key={index + 2 + "milage"} >Milage : {auction.Car.Milage} £ </h6>
                        <h6 key={index + 3 + "pricex"}>Starting Price : {auction.StartingPrice} £ </h6>
                        <h6 key={index + 4 + "test"}>Current Price : ? £ </h6>
                    </div>


                )
            }


            {

            }

            {maxPages > 1 ?
                <div className={styles.pagination}>
                    <Pagination>
                        <Pagination.First onClick={() => RedirectToFirst()} />
                        <Pagination.Prev onClick={() => RedirectToPrevious()} />
                        <Pagination.Item>{page}</Pagination.Item>
                        <Pagination.Next onClick={() => RedirectToNext()} />
                        <Pagination.Last onClick={() => RedirectToLast()} />
                    </Pagination>
                </div>
                :
                ""

            }


        </div>
    );
}


export default MyAuctions;