import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Banner() {
    return (
        <div>
            <div className='absolute bottom-0 bg-gradient-to-t from-gray-100 to-transparent w-full h-32 z-20' />
            <Carousel
               infiniteLoop
               autoPlay
               interval={5000}
               showIndicators= {false}
               showStatus= {false}
               showThumbs= {false}
            >
                <div className='relative'>
                    <img loading='lazy' src="https://links.papareact.com/gi1" alt="banner" />
                </div>

                <div className='relative'>
                    <img loading='lazy' src="https://links.papareact.com/6ff" alt="banner" />
                </div>

                <div className='relative'>
                    <img loading='lazy' src="https://links.papareact.com/7ma" alt="banner" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner
