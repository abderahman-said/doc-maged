"use client"
import Image from 'next/image'
import styles from '../app/page.module.css'
import { Container } from 'react-bootstrap';
import logo from "../../public/img/logo.jpg";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
function Nav({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    // دالة للتحقق من موقف السكرول وتحديث حالة العنصر
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    // تسجيل الحدث عند تمرير الصفحة
    window.addEventListener('scroll', handleScroll);

    // إزالة الحدث عندما يتم إلغاء العنصر
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='back_nav'>
        <Container >
      <div className='back_flex'>
           
                    <div className="right-content d-flex">
						<span className=" reverse">
                        <i className="fa-solid fa-mobile-screen-button"></i>
							<h6 className="title">اتصل بنا :  </h6>
							<p className="content en"> +012 345 6789 </p>
						</span>
						
						<span className="line reverse">
                        <i className="fa-regular fa-clock"></i>
							<h6 className="title">مواعيد العمل :  </h6>
							<p className="content">السبت الي الخميس - 09:00 -  17:00</p>
						</span>
					</div>
                     <div className="left-content">
						<a href="" className="icon-wrapper"><i className="fa-brands fa-facebook" ></i></a>
						<a href="" className="icon-wrapper"><i className="fa-brands fa-twitter" ></i></a>
						<a href="" className="icon-wrapper"><i className="fa-brands fa-linkedin" ></i></a>
						<a href="" className="icon-wrapper"><i className="fa-brands fa-instagram" ></i></a>
						<a href="" className="icon-wrapper"><i className="fa-brands fa-youtube" ></i></a>
					</div>
				</div>
        </Container>
                

      </div>
      <div  className={isNavFixed ? 'nav_main_sh_fixed' : 'nav_main_sh'}>
      <Container >
            <div className='nav_main'>
            <Link href={"/"}><Image src={logo} className="logo-img" width={70} height={70}  /></Link>
            <div className="left-nav no_nav">
                <Link href={"/"}><h6>الرئيسية</h6></Link>
                <Link href={"/about"}><h6>عن الدكتور</h6></Link>
                <Link href={"/service"}><h6>صور واعمال</h6></Link>
                <Link href={"/video"}><h6>العمليات</h6></Link>
                <Link href={"/artical"}><h6>المقالات</h6></Link>
                <Link href={"/call-me"}><h6>اتصل بنا</h6></Link>
                <button className='button_nav'> 
                احجز الان
                </button>
                
                </div>
                <div variant="primary" onClick={handleShow} className={styles.but_mobile}>
<i className="fa-solid fa-bars-staggered"></i>
      </div>
            </div>
      </Container>
      </div>

     

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        <Image src={logo} className="logo-img" width={70} height={70}  />

        </Offcanvas.Header>
        <Offcanvas.Body>
        <section className={styles.nav_flex_mobile} >
        <Link href={"/"}><h6>الرئيسية</h6></Link>
                <Link href={"/about"}><h6>عن الدكتور</h6></Link>
                <Link href={"/service"}><h6>صور واعمال</h6></Link>
                <Link href={"/video"}><h6>العمليات</h6></Link>
                <Link href={"/artical"}><h6>المقالات</h6></Link>
                <Link href={"/call-me"}><h6>اتصل بنا</h6></Link>
                <button className='button_nav'> 
                احجز الان
                </button>
</section>
        </Offcanvas.Body>
      </Offcanvas>



   

    </>
  )
}

function Example() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <Nav key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Example;
