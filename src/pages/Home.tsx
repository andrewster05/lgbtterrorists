import * as React from "react";
import Carousel from "../components/Carousel/Carousel";
import PhotoBanner from "../components/PhotoBanner/PhotoBanner";
import ColumnsBanner from "../components/ColumnsBanner/ColumnsBanner";
import Video from "../components/Video/Video";
import CastBanner from "../components/CastBanner/CastBanner";


export default function Home() {

    return (
        <>
            <Video />
            <Carousel />
            {/* <PhotoBanner /> */}
            <ColumnsBanner />
            <CastBanner />
        </>
    );
}


