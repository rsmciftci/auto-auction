import ImageGallery from "react-image-gallery";
import styles from './EndingSoon.module.css';

function EndingSoon() {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <div className={styles.mainDiv}>


            <div className={styles.div} onClick={() => console.log("TEST")}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false} />
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>
            <div className={styles.div}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false}/>
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>
            <div className={styles.div}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false}/>
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>
            <div className={styles.div}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false}/>
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>
            <div className={styles.div}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false} />
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>
            <div className={styles.div}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false}/>
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>
            <div className={styles.div}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false}/>
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>
            <div className={styles.div}>
                <ImageGallery items={images} thumbnailPosition="bottom" showPlayButton={false} showNav={false} showFullscreenButton={false}/>
                <h6>BMW - M6 ( 2015 )</h6>
                <h6>2000 £</h6>
            </div>

        

            <>
                Pagination
            </>
            


        </div>
    );
}

export default EndingSoon;