import {Carousel} from "antd";


export const ClothingCarousel = () =>{
  return(
    <Carousel autoplay>
    <div>
      <img
        style={{height: "700px", width: "100%", objectFit: "scale-down"}}
        alt="example"
        src="/Hoodies/1.JPG"
      />
    </div>
    <div>
      <img
        style={{height: "700px", width: "100%", objectFit: "scale-down"}}
        alt="example"
        src="/Hoodies/2.JPG"      />
    </div>
    <div>
      <img
        style={{height: "700px", width: "100%", objectFit: "scale-down"}}
        alt="example"
        src="/Hoodies/3.JPG"      />
    </div>
  </Carousel>
  );
}
