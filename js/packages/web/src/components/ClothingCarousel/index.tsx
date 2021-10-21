import {Carousel} from "antd";


export const ClothingCarousel = () =>{
  return(
    <Carousel autoplay>
    <div>
      <img
        style={{height: "400px", width: "100%", objectFit: "cover"}}
        alt="example"
        src="https://martinvalen.com/15010-large_default/men-s-oversize-basic-hoodie-sweatshirt-with-kangaroo-pocket-in-white.jpg"
      />
    </div>
    <div>
      <img
        style={{height: "400px", width: "100%", objectFit: "cover"}}
        alt="example"
        src="https://martinvalen.com/15010-large_default/men-s-oversize-basic-hoodie-sweatshirt-with-kangaroo-pocket-in-white.jpg"
      />
    </div>
    <div>
      <img
        style={{height: "400px", width: "100%", objectFit: "cover"}}
        alt="example"
        src="https://martinvalen.com/15010-large_default/men-s-oversize-basic-hoodie-sweatshirt-with-kangaroo-pocket-in-white.jpg"
      />
    </div>
  </Carousel>
  );
}
