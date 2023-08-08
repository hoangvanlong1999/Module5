import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
function HomePageSlider(props) {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const slideImages = [
        {
            url: 'https://file.hstatic.net/1000369857/collection/1919_730_polo_8f469824b3b040c5acea0c28260c0ee9.jpg',
            
        },
        {
            url: 'https://pos.nvncdn.net/b5a043-19330/art/20210401_RRhGMiO45aFfqXXlU1HaKVxT.png',
            
        },
        {
            url: 'https://www.palamostore.com/wp-content/uploads/2021/04/ha%CC%80ng-cao-ca%CC%82%CC%81p-gia%CC%81-re%CC%89.png',
            
        },
    ];
    return (
        <>
            <section className="homepage-slider" id="home-slider">
                <div className="flexslider">
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                    <span style={spanStyle}>{slideImage.caption}</span>
                                </div>
                            </div>
                        ))}
                    </Slide>
                    {/* <ul className="slides">
                        <li>
                            <img
                                src="/assets/themes/images/carousel/banner-1.jpg"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="/assets/themes/images/carousel/banner-2.jpg"
                                alt=""
                            />
                            <div className="intro">
                                <h1>Mid season sale</h1>
                                <p>
                                    <span>Up to 50% Off</span>
                                </p>
                                <p>
                                    <span>On selected items online and in stores</span>
                                </p>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </section>

        </>
    );
}

export default HomePageSlider;