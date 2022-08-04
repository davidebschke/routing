import {useParams} from "react-router";
import React from "react";

export default function Details() {
    const {id} = useParams();

    return(
        <>
            {id}
            <img src={"https://source.unsplash.com/random/?"+id}/>

        </>
    );
}