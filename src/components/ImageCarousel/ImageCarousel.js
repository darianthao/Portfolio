import {Component} from "react";
import {Carousel, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import stock1 from "./Videos/stock1.mp4"
import stock2 from "./Videos/stock2.mp4"
import stock3 from "./Videos/stock3.mp4"

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel fade className="my-auto">
                <Carousel.Item style={{
                    height: "100%",
                    width: "100%",
                    background: "#191919",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <video autoPlay loop muted width="1920px" height="750px">
                        <source src={stock3} type="video/mp4"/>
                    </video>
                    <Carousel.Caption className="my-auto">
                        <h3>DSLR's/Cinematography</h3>
                        <p>Interchangeable Lenses, Perfect For Any Professional</p>
                        <div className="d-grid gap-2">
                            <a href="/DSLRPage">
                                <Button variant="dark" size="lg">
                                    See Our DSLR Camera's & Lenses
                                </Button>
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{
                    height: "100%",
                    width: "100%",
                    background: "#191919",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <video autoPlay loop muted width="1920px" height="750px">
                        <source src={stock2} type="video/mp4"/>
                    </video>
                    <Carousel.Caption className="my-auto">
                        <h3>Point & Shoot Camera's</h3>
                        <p>Portable, Powerful, Easy To Use</p>
                        <div className="d-grid gap-2">
                            <a href="/PSPage">
                                <Button variant="dark" size="lg">
                                    See Our Point and Shoot Camera's
                                </Button>
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default ImageCarousel