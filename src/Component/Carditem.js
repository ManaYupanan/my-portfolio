import React from "react";

function Carditem(prop) {
    return (

        <div class="row Cardabout ">
            <img className="mw-100 my-4" src={prop.url} />
            <figure class="text-end">
                <blockquote class="blockquote">
                    <p>{prop.title}</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite >{prop.discription}</cite>
                </figcaption>
            </figure>
        </div>


    )
}

export default Carditem;