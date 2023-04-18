import React from 'react'
import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button
} from "shards-react";
import PageTitle from './components/common/PageTitle';
//import '../src/images/home/'
export const Home2 = () => {


    const [PostsListOne] = useState([
        {
            backgroundImage: require("../src/images/content-management/1.jpeg"),
            category: "زنجیره تامین",
            categoryTheme: "dark",
            //author: "Anna Kunis",
           // authorAvatar: require("../src/images/avatars/1.jpg"),
            title: "زنجیره تامین",
            body:
                "زنجیره تامین فعالیت هایی است که سازمان ها برای ارائه کالا یا خدمات به مصرف کننده، نیاز دارد. تمرکز اصلی زنجیره تامین بر فعالیت های اصلی سازمان است که برای تبدیل مواد خام یا قطعات به محصولات یا خدمات نهایی مورد استفاده قرار می گیرد. در یک محیط تولید سنتی، فعالیت ارتباط با تامین کنندگان به طور کلی توسط تدارکات پشتیبانی خواهد شد؛ همچنین مدیریت عملیات، در سراسر زنجیره تامین از طریق لجستیک، نقش اساسی در جابجایی مواد ورودی و کالاهای خروجی ایفا می کند تا اطمینان حاصل شود که محصول نهایی به دست مصرف کننده خواهد رسید."+
                "یک زنجیره تامین می تواند به شکل یک زنجیره تامین مبتنی بر محصول یک سرویس باشد که در آن خدمات گرد هم می آیند تا یک خدمات کلی به مشتری را در مقابل محصول نهایی ارائه دهند، نمونه ای از آن می تواند حمل و نقل کالاها، کارکنان و مشتریان باشد. زمانی که زنجیره تامین با مصرف کنندگان و تامین کنندگان ما مرتبط است، شروع به ایجاد یک شبکه زنجیره تامین می کنیم."
                //date: "28 February 2019"
        },
        {
            backgroundImage: require("../src/images/content-management/2.jpeg"),
            category: "سهام",
            categoryTheme: "info",
            //author: "James Jamerson",
            //authorAvatar: require("../src/images/avatars/2.jpg"),
            title: "سهام",
            body:"سهام به نوعی برگه بهادار گفته می‌شود که تصدیقی بر مالکیت دارنده آن بر سهم مشخصی از شرکت سهامی خاص یا سهامی عام، درآمدها و دارایی‌های آن است."+
            "لازم به ذکر است که سهام یک شرکت سهامی عام می‌تواند به‌راحتی در بورس معامله شود و مالک آن‌ ثابت نباشد. این در حالی است که سهام شرکت سهامی خاص همان‌طور که از نام آن پیدا است،"+
            "، به عده‌ای خاص تعلق دارد. سهامداران هردو شرکت با خرید سهام در پروژه‌ها و سود و زیان شرکت (به نسبت میزان سهم خود از شرکت) شریک خواهند بود."+
            "در گذشته از اوراق بهادار یا همان برگه‌های سهام برای معامله و اثبات مالکیت تعداد مشخصی از سهام شرکت استفاده می‌شد. در اوراق مذکور مشخصاتی مانند نام شرکت، نام و مشخصات دارنده اوراق، شماره ثبت و مبلغ اسمی آورده می‌شد. "+
            ". بر اساس قوانین بازار بورس ایران، امروزه تمام اوراق باید با مبلغ اسمی ۱۰۰۰ ریال ثبت شوند. بنابراین، اگر یک شرکت فرضی دارای ۱۰۰۰ سهم باشد، ارزش سرمایه شرکت یک‌میلیون ریال خواهد بود." ,
            //date: "29 February 2019"
        },
        {
            backgroundImage: require("../src/images/content-management/3.jpeg"),
            category: "عمده فروش",
            categoryTheme: "royal-blue",
            //author: "Jimmy Jackson",
           // authorAvatar: require("../src/images/avatars/2.jpg"),
            title: "عمده فروش",
            body:
                "چنانچه بخواهید به‌صورت آنلاین محصولی را به فروش برسانید یا از طریق فروشگاه‌های خرده‌فروشی این کار را انجام دهید، در هر صورت اگر خودتان تولیدکننده‌ی محصول نباشید، باید محصولات مورد نظر را از عمده فروش تهیه کنید. عمده فروشی کسب‌وکاری است که به مقدار زیادی اجناس را خریداری کرده و آنها را به سایر کسب‌وکارها می‌فروشد."+
               " عمده فروش با خرید محصول از تولیدکننده به قیمتی پایین‌تر از سایر کسب‌وکارها، به سود می‌رسد و این کار را معمولا از طریق تخفیف‌هایی انجام می‌دهد که به‌خاطر خرید در حجم بالا دریافت می‌کند.",
          //  date: "29 February 2019"
        },
        // {
        //     backgroundImage: require("../src/images/content-management/4.jpeg"),
        //     category: "Business",
        //     categoryTheme: "warning",
        //     author: "John James",
        //     authorAvatar: require("../src/images/avatars/3.jpg"),
        //     title: "It so numerous if he may outlived disposal",
        //     body:
        //         "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
        //     date: "29 February 2019"
        // }
    ])

    return (
        <div style={{  fontSize: "13px", fontFamily: "IRANSans" }}>

            <Container fluid className="main-content-container px-4" >
                <Row></Row>
                {/* Page Header */}
                <Row className="page-header py-4 " dir="rtl" >
                    {/* <PageTitle sm="4" title="شرکت نرم افزاری دکا" subtitle="Components" className="text-sm-right" /> */}
                    <PageTitle sm="4" title="شرکت نرم افزاری دکا"  className="text-sm-right" />
                </Row>

                {/* First Row of Posts */}
                <Row>
                    {PostsListOne.map((post, idx) => (
                        <Col lg="4" md="6" sm="12" className="mb-4" key={idx} >
                            <Card small className="card-post card-post--1" >
                                <div
                                    className="card-post__image" 
                                    style={{ backgroundImage: `url(${post.backgroundImage})` , height:"300px" }}
                                >
                                    <Badge
                                        pill
                                        className={`card-post__category bg-${post.categoryTheme}`}
                                    >
                                        {post.category}
                                    </Badge>
                                    {/* <div className="card-post__author d-flex">
                                        <a
                                            href="#"
                                            className="card-post__author-avatar card-post__author-avatar--small"
                                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                                        >
                                            Written by {post.author}
                                        </a>
                                    </div> */}
                                </div>
                                <CardBody dir="rtl" >
                                    <h5 className="card-title" >
                                        <a href="#" className="text-fiord-blue"  >
                                            {post.title}
                                        </a>
                                    </h5>
                                    <p className="card-text d-inline-block mb-3" style={{minHeight:"250px"}}>{post.body}</p>
                                    <span className="text-muted">{post.date}</span>
                                </CardBody>
                                <CardFooter dir="rtl" className="text-muted border-top py-3">
                                    <span className="d-inline-block">
                                       
                                        <a className="text-primary" href="/main">
                                           ورود به سیستم
                                        </a>{" "}
                                        {/* in
                    <a className="text-fiord-blue" href={post.categoryUrl}>
                      {post.category}
                    </a> */}
                                    </span>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* <footer className="main-footer d-flex p-2 px-3 bg-white border-top" style={{position:"fixed",bottom:"0",left:"0", width:"100%",height: "5%"}}><div className="container"><div className="row">
                <ul class="nav"><li class="nav-item"><a class="nav-link" href="/customer-crud">Home</a></li><li class="nav-item"><a class="nav-link" href="/customer-crud">Services</a></li><li class="nav-item"><a class="nav-link" href="/customer-crud">About</a></li><li class="nav-item"><a class="nav-link" href="/customer-crud">Products</a></li><li class="nav-item"><a class="nav-link" href="/customer-crud">Blog</a></li></ul> */}
                {/* <span class="copyright ml-auto my-auto mr-2"><span>Copyright © 2018 DesignRevision</span> */}
                {/* </div></div></footer> */}
        </div>

    )


    // return(<div style={{backgroundImage:'require("../src/images/home/webdeka.png")',width:"100%",height:"100%"}}>Hello World</div>)

}
