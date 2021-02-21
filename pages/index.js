import Layout from "../components/Layout/Layout";
import {Carousel} from 'react-responsive-carousel'

const Home = () => {
    return (
        <Layout>
            <div>
                <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false} showArrows={true} onChange={()=>console.log('here')} onClickItem={()=>console.log('clicked to iyem')} onClickThumb={()=>console.log('thumb clicked')}>
                    <div>
                        <img alt={"slider"} src={'/carousel/slide-item-1.png'} />
                    </div>
                    <div>
                        <img alt={"slider"} src={'/carousel/slide-item-1.png'} />
                    </div>
                    <div>
                        <img alt={"slider"} src={'/carousel/slide-item-1.png'} />
                    </div>
                    <div>
                        <img alt={"slider"} src={'/carousel/slide-item-1.png'} />
                    </div>
                    <div>
                        <img alt={"slider"} src={'/carousel/slide-item-1.png'} />
                    </div>
                    <div>
                        <img alt={"slider"} src={'/carousel/slide-item-1.png'} />
                    </div>
                </Carousel>
            </div>
        </Layout>
    )
}

export default Home;