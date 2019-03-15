import React from "react"
import IosBug from "react-ionicons/lib/IosBug";
import MdHeart from "react-ionicons/lib/MdHeart";
import IosCog from "react-ionicons/lib/IosCog";
import IosRainy from "react-ionicons/lib/IosRainy";
import LogoNodejs from "react-ionicons/lib/LogoNodejs";

const IconList = [
    {
        id: "0",
        icon: <IosBug beat={true}fontSize="80px" color="#7c9ed6" />
    },
    {
        id: "1",
        icon: <LogoNodejs shake={true} fontSize="80px" color="#43853d" />
    },
    {
        id: "2",
        icon: <IosCog rotate={true} fontSize="80px" color="#f4f27f"/>
    },
    {
        id: "3",
        icon: <MdHeart beat={true} fontSize="80px" color="red" />
    },
     {
        id: "4",
        icon: <IosRainy shake={true} fontSize="80px" color="grey" />
    }

]

export default IconList
