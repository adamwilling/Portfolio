import React from "react"
import Typewriter from "typewriter-effect"

function Type() {
    return (
        <Typewriter
            options={{
                strings: ["FullStack Web Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Type
