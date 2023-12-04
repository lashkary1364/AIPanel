import React from 'react'

export const Spinner3 = () => {
    return (
        // <div class="loader5">
        <div class="loader-wrapper d-flex justify-content-center align-items-center">
            <div class="loader">
                <div class="square-spin">
                    <img src={require("../src/images/logo.png")}></img>
                    <div className='text-center'>در حال بارگزاری ...</div>
                    <div></div></div></div>
        </div>
        // </div>
    )
}
