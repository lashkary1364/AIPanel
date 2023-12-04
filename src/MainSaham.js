import React from 'react'
import "./assets/test.css"
import { NotFound } from "./NotFound"
import { Resiliency } from './Saham/Resiliency';
import { Profitability } from './Saham/Profitability';
import { NaghdinegiSal } from './Saham/NaghdinegiSal';
import { Productivity } from './Saham/Productivity';
import { TahlilGeymat } from './Saham/TahlilGeymat';
import { WordCloudPos } from './Saham/WordCloudPos';
import { WatifZanjire } from './Zanjire/WatifZanjire';
import { Dion } from './Saham/Dion';

let tabs = [];
let contents = [];
const TAB_DATA = [
    ["تاب آوری", <Resiliency></Resiliency>],
    ["سودآوری", <Profitability></Profitability>],
    ["پرداخت دیون", <Dion></Dion>],
    ["نقدینگی", <NaghdinegiSal></NaghdinegiSal>],
    ["بهره وری", <Productivity></Productivity>],
    ["تحلیل قیمت", <TahlilGeymat></TahlilGeymat>],
    ["تحلیل احساسات", <WordCloudPos></WordCloudPos>],
    ["واتیف", <WatifZanjire></WatifZanjire>]
];

export class MainSaham extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    clickHandler = (e) => {



        e.preventDefault();

        this.setState({
            active: parseInt(e.currentTarget.attributes.tabIndex.value)
        });

        // TAB_DATA.map(([label, text], i) => {



        //     const myStyle = {
        //         zIndex: this.state.active === i ? TAB_DATA.length : TAB_DATA.length - i - 1
        //     };

        //     // tabs.push(<li
        //     //     className={this.state.active === i ? "tab active" : "tab"}
        //     //     key={label}
        //     //     tabIndex={i}
        //     //     onClick={this.clickHandler}
        //     //     style={myStyle}>
        //     //     <a href={"#" + label}>{label}</a>
        //     // </li>);

        //     //  contents.push(<div style={{ zIndex: TAB_DATA.length }} className={this.state.active === i ? "active" : ""} key={label}><div style={{ minHeight: "800px" }} >{text}</div></div>);
        //     console.log(contents);
        // });

        //contents.push(<div style={{ zIndex: TAB_DATA.length }} className={this.state.active === i ? "active" : ""} key={label}><div style={{ minHeight: "800px" }} >{text}</div></div>);
    }

    render() {


        let tabs = [];
        let contents = [];

        TAB_DATA.map(([label, text], i) => {

            const myStyle = {
                zIndex: this.state.active === i ? TAB_DATA.length : TAB_DATA.length - i - 1
            };

            tabs.push(<li
                className={this.state.active === i ? "tab active" : "tab"}
                key={label}
                tabIndex={i}
                onClick={this.clickHandler}
                style={myStyle}>
                <a href={"#" + label}>{label}</a>
            </li>);

            contents.push(<div style={{ zIndex: TAB_DATA.length }} className={this.state.active === i ? "active" : ""} key={label}><div style={{ minHeight: "800px" }} >{text}</div></div>);
        });



        return (
            <section className="tabs">
                <menu>
                    <ul>
                        {tabs}
                    </ul>
                </menu>
                <div className='content'>
                    {contents}
                </div>
            </section>)

    }
}