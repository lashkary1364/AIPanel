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
// import PageTitle from './components/common/PageTitle';
//import '../src/images/home/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faTriangleExclamation, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import MainNavbar from './components/layout/MainNavbar/MainNavbar';

export const Home = () => {

    // const signOut = () => {
    //     sessionStorage.clear();
    //     localStorage.clear();
    //     window.location.replace('/login');
    // }

    const [PostsListOne] = useState([
        {
            backgroundImage: require("../src/images/content-management/1.jpeg"),
            category: "زنجیره تامین",
            categoryTheme: "dark",
            //author: "Anna Kunis",
            // authorAvatar: require("../src/images/avatars/1.jpg"),
            title: "زنجیره تامین",
            body:
                "زنجیره تامین فعالیت هایی است که سازمان ها برای ارائه کالا یا خدمات به مصرف کننده، نیاز دارد. تمرکز اصلی زنجیره تامین بر فعالیت های اصلی سازمان است که برای تبدیل مواد خام یا قطعات به محصولات یا خدمات نهایی مورد استفاده قرار می گیرد. در یک محیط تولید سنتی، فعالیت ارتباط با تامین کنندگان به طور کلی توسط تدارکات پشتیبانی خواهد شد؛ همچنین مدیریت عملیات، در سراسر زنجیره تامین از طریق لجستیک، نقش اساسی در جابجایی مواد ورودی و کالاهای خروجی ایفا می کند تا اطمینان حاصل شود که محصول نهایی به دست مصرف کننده خواهد رسید." +
                "یک زنجیره تامین می تواند به شکل یک زنجیره تامین مبتنی بر محصول یک سرویس باشد که در آن خدمات گرد هم می آیند تا یک خدمات کلی به مشتری را در مقابل محصول نهایی ارائه دهند، نمونه ای از آن می تواند حمل و نقل کالاها، کارکنان و مشتریان باشد. زمانی که زنجیره تامین با مصرف کنندگان و تامین کنندگان ما مرتبط است، شروع به ایجاد یک شبکه زنجیره تامین می کنیم."
            //date: "28 February 2019"
            , href: "/mainzanjire"
        },
        {
            backgroundImage: require("../src/images/content-management/2.jpeg"),
            category: "سهام",
            categoryTheme: "info",
            //author: "James Jamerson",
            //authorAvatar: require("../src/images/avatars/2.jpg"),
            title: "سهام",
            body: "سهام به نوعی برگه بهادار گفته می‌شود که تصدیقی بر مالکیت دارنده آن بر سهم مشخصی از شرکت سهامی خاص یا سهامی عام، درآمدها و دارایی‌های آن است." +
                "لازم به ذکر است که سهام یک شرکت سهامی عام می‌تواند به‌راحتی در بورس معامله شود و مالک آن‌ ثابت نباشد. این در حالی است که سهام شرکت سهامی خاص همان‌طور که از نام آن پیدا است،" +
                "، به عده‌ای خاص تعلق دارد. سهامداران هردو شرکت با خرید سهام در پروژه‌ها و سود و زیان شرکت (به نسبت میزان سهم خود از شرکت) شریک خواهند بود." +
                "در گذشته از اوراق بهادار یا همان برگه‌های سهام برای معامله و اثبات مالکیت تعداد مشخصی از سهام شرکت استفاده می‌شد. در اوراق مذکور مشخصاتی مانند نام شرکت، نام و مشخصات دارنده اوراق، شماره ثبت و مبلغ اسمی آورده می‌شد. " +
                ". بر اساس قوانین بازار بورس ایران، امروزه تمام اوراق باید با مبلغ اسمی ۱۰۰۰ ریال ثبت شوند. بنابراین، اگر یک شرکت فرضی دارای ۱۰۰۰ سهم باشد، ارزش سرمایه شرکت یک‌میلیون ریال خواهد بود.",
            //date: "29 February 2019"
            href: "/mainsaham"
        },
        {
            backgroundImage: require("../src/images/content-management/3.jpeg"),
            category: "تحلیل مشتریان",
            categoryTheme: "royal-blue",
            //author: "Jimmy Jackson",
            // authorAvatar: require("../src/images/avatars/2.jpg"),
            title: "تحلیل مشتریان",
            body:
                "چنانچه بخواهید به‌صورت آنلاین محصولی را به فروش برسانید یا از طریق فروشگاه‌های خرده‌فروشی این کار را انجام دهید، در هر صورت اگر خودتان تولیدکننده‌ی محصول نباشید، باید محصولات مورد نظر را از عمده فروش تهیه کنید. عمده فروشی کسب‌وکاری است که به مقدار زیادی اجناس را خریداری کرده و آنها را به سایر کسب‌وکارها می‌فروشد." +
                " عمده فروش با خرید محصول از تولیدکننده به قیمتی پایین‌تر از سایر کسب‌وکارها، به سود می‌رسد و این کار را معمولا از طریق تخفیف‌هایی انجام می‌دهد که به‌خاطر خرید در حجم بالا دریافت می‌کند.",
            //  date: "29 February 2019"
            href: "/mainomde"
        },

    ])

    return (
        <div>
            <MainNavbar></MainNavbar>
            <div style={{ fontSize: "13px", fontFamily: "IRANSans" }}>
                <Container fluid className="main-content-container" style={{ marginTop: "70px" }} >
                    <Row>
                        {PostsListOne.map((post, idx) => (
                            <Col lg="4" md="6" sm="12" key={idx} >
                                <Card small className="card-post card-post--1"   >
                                    <div
                                        className="card-post__image"
                                        style={{ backgroundImage: `url(${post.backgroundImage})`, height: "300px" }}>
                                        <Badge
                                            pill
                                            className={`card-post__category bg-${post.categoryTheme}`}>
                                            {post.category}
                                        </Badge>
                                    </div>
                                    <CardBody dir="rtl" style={{ height: "400px" }} >
                                        <h5 className="card-title" >
                                            <a href="#" className="text-fiord-blue"  >
                                                {post.title}
                                            </a>
                                        </h5>
                                        <p className="card-text d-inline-block mb-3"  >{post.body}</p>
                                        <span className="text-muted">{post.date}</span>
                                    </CardBody>
                                    <CardFooter dir="rtl" className="text-muted border-top py-3">
                                        <span className="d-inline-block">
                                            <a className="text-primary" href={post.href}>
                                                ورود به سیستم
                                            </a>
                                        </span>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </div>
    )


}
