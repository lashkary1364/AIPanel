import React, { useState, useEffect } from 'react'
import MainNavbar from './components/layout/MainNavbar/MainNavbar';
export const MainOmde1 = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        getWindowDimensions();
    }, []);

    const handleWatif = (e) => {
        e.preventDefault();
        window.location.replace('/watifomde')
    }
    const handleDashboard = (e) => {
        e.preventDefault();
        window.location.replace('/dashboardomde')
    }


    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        console.log({
            width,
            height
        });

        if (width <= 500) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        return {
            width,
            height
        };

    }


    window.addEventListener('resize', function () {
        setTimeout(function () {
            if (window.innerWidth <= 500) {
                //alert("window resize .....");
                // gridOptions.setColumnDefs(mobileColumn);
                // params.api.sizeColumnsToFit();

                setVisible(false);
            } else {
                setVisible(true);
            }


        })
    });

    return (
        <>
            {
                visible ?
                    <div>
                        <div className='div-dashboard'   >
                            <table className='table-omde'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={require("./images/main/2.png")} className="img-omde-dashboard1"></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className='btn btn-dashboard1' onClick={(e) => handleDashboard(e)}>داشبورد</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={require("./images/main/1.png")} className="img-omde-dashboard2"></img>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='div-dashboard' >
                            <table className='table-dashboard'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <img src={require("./images/main/6.png")} className="img-omde-watif1" ></img>
                                            </div>
                                            <button className='btn btn-watif1' onClick={(e) => handleWatif(e)} >واتیف</button>
                                        </td>
                                        <td >
                                            <img src={require("./images/main/4.png")} className="img-omde-watif2"></img>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className='container1' dir="rtl">
                            <img src={require("./images/main/3.png")} ></img>
                        </div>

                    </div>
                    :
                    <div>
                        <div className='div-dashboard'   >
                            <table className='table-watif-mobile'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={require("./images/main/1.png")} className="img-dashboard-mobile"></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className='btn btn-dashboard-mobile'  onClick={(e) => handleDashboard(e)}>داشبورد</button>
                                                 </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='div-dashboard' >
                            <table className='table-dashboard-mobile'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={require("./images/main/4.png")} className="img-watif-mobile"></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <button className='btn btn-watif-mobile' onClick={(e) => handleWatif(e)} >واتیف</button>                                         
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
            }

        </>





    )
}
