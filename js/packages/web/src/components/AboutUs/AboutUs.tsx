import React from "react";
export const whyUs: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce tellus. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Donec quis nibh at felis congue commodo. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Duis condimentum augue id magna semper rutrum. In rutrum. Maecenas libero. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Fusce suscipit libero eget elit. Mauris elementum mauris vitae tortor. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam neque. Nunc dapibus tortor vel mi dapibus sollicitudin. Vivamus luctus egestas leo.'
export const aboutUs: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce tellus. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Donec quis nibh at felis congue commodo. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Duis condimentum augue id magna semper rutrum. In rutrum. Maecenas libero. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Fusce suscipit libero eget elit. Mauris elementum mauris vitae tortor. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam neque. Nunc dapibus tortor vel mi dapibus sollicitudin. Vivamus luctus egestas leo.'

export function WhyUs(){
    return(
        <div style={{paddingTop: '14%'}}>
            <div className="text-header"> Why you should choose us?</div>
            <span className="inside-text">{whyUs} </span>
        </div>
    );
}

export function AboutUs() {
    // const [picture, setPicture] = useState(0);
    //Logic for changing images
    // function changeImg(){
    //     setPicture(picture + 1);
    //     if (picture === 5 ){
    //         setPicture( 1);
    //     }
    //     return picture;
    // }
        return (
            <div className="about-us">
                <div>
                    <div className="text-header">Who we are?</div>
                    <span className="inside-text">{aboutUs}</span>
                </div>
                <div className="nft-holder">
                    <div className="nft" />
                </div>
            </div>
        );
}
