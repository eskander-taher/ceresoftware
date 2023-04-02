
import React from "react";

import WFDV from "./WFDV";
import WFMV from "./WFMV";

export default function WorkFlow(){
    let width = window.innerWidth;
    return(
        <div>
        {width < 900? <WFMV/>:<WFDV/>}
        </div>
    )
}