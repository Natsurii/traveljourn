import React from "react";
import Log from "./Log"
import data from '../data.js'
function Main() {

    const locationElements = data.map(loc => {
        return (
            <Log {...loc} />
        )
    })

    return (
        
        <main>
            {locationElements}
        </main>
    )
}

export default Main