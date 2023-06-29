
import React from "react";

import WFDV from "./WFDV";
import WFMV from "./WFMV";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function WorkFlow(){

    const matches = useMediaQuery('(min-width:900px)');
    
    return(
        <div>
        {matches? <WFDV/>:<WFMV/>}
        </div>
    )
}