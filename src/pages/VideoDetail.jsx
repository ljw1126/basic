import React from "react";
import {useParams} from "react-router-dom";

export default function VideoDetail() {
    const {videoId} = useParams(); // 구조 할당
;
    return <>detail : {videoId}</>;
}
