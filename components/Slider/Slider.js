import React from "react";
import style from "./slider.module.css"
import {Carousel} from "react-responsive-carousel";

const Slider = () => {
    return (
        <div className={style.slider}>
            <Carousel autoPlay={true} swipeable={true}
                      infiniteLoop={true}
                      dynamicHeight={true}
                      showThumbs={false}
                      showArrows={true}
                      onChange={() => ''}
                      onClickItem={() => console.log('clicked to iyem')}
                      onClickThumb={() => console.log('thumb clicked')}>
                <div>
                    <img alt={"slider"} src={'/carousel/slide-item-1.png'}/>
                </div>
                <div>
                    <img alt={"slider"} src={'/carousel/slide-item-1.png'}/>
                </div>
                <div>
                    <img alt={"slider"} src={'/carousel/slide-item-1.png'}/>
                </div>
                <div>
                    <img alt={"slider"} src={'/carousel/slide-item-1.png'}/>
                </div>
                <div>
                    <img alt={"slider"} src={'/carousel/slide-item-1.png'}/>
                </div>
                <div>
                    <img alt={"slider"} src={'/carousel/slide-item-1.png'}/>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;