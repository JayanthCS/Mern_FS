import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel.js';
import ProductImage from '../components/ProductImage.js';
import axios from "axios"

let products_url_api = "https://fakestoreapi.com/products"
function Home() {
    // let images = new Array(18).fill("something")
    let [images, setImages] = useState(null)


    useEffect(() => {
        axios.get(products_url_api).then((res) => setImages(res.data))

    }, [])

    if (!images) return null;

    return (
        <div className='container-fluid p-0 m-0'>
            <Carousel />

            <div className='row mt-2 p-2 mx-0'>
                {images.map(el => <ProductImage key={el.id} product={el} />)}
            </div>
        </div>
    )
}
export default Home;