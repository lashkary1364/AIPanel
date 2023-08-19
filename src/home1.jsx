import React from 'react'

export const home1 = () => {
    return (
        <div>
            <div className='table-home'>
                <table className='table-center'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                <a href="/mainomde" style={{ textAlign: "center" }}>
                                    <img src={require("./images/home/3.png")} className='table-img' ></img>
                                </a>
                            </td>
                            <td style={{ textAlign: "center" }}>
                                <a href="/mainsaham" style={{ textAlign: "center" }}>

                                    <img src={require("./images/home/2.png")} className='table-img'></img>
                                </a>
                            </td>
                            <td style={{ textAlign: "center" }}>
                                <a href="/home-chain" style={{ textAlign: "center" }}>

                                    <img src={require("./images/home/4.png")} className='table-img'></img>
                                </a>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className='div-home'><img src={require("./images/home/1.png")} ></img></div>
        </div>

    )
}
