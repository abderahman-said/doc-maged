"use client"
import logo from "../../public/img/logo.jpg"
import img15 from "../../public/img/map-marker.svg"
import img14 from "../../public/img/close-envelope.svg"
import img13 from "../../public/img/smartphone.svg"
import del from "../../public/img/del.png"

import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
        <footer class="footer">
		<div class="container">
			<div class="row reverse-row">
				<div class="col-lg-4">
					<div class="about-wrapper reverse" style={{flexDirection:"column"}}>
						<div class="logo-wrapper">
							<Image src={logo} class="img" />
						</div>
						<p class="content">
							هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.	
						</p>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="info-content">
						<h5 class="title">طرق الحجز</h5>
						<ul class="info-menu">
							<li class="menu-item">عن طريق رقم الموبايل</li>
							<li class="menu-item">عن طريق التعليقات</li>
							<li class="menu-item">رسايل الصفحة</li>
							<li class="menu-item">التواصل عبر هذا الموقع</li>
							<li class="menu-item">واتس اب</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2">
					<div class="info-content">
						<h5 class="title">الصفحات</h5>
						<ul class="info-menu">
							<li class="menu-item"><a href="" class="menu-link">الرئيسية</a></li>
							<li class="menu-item"><a href="" class="menu-link">عن الدكتور</a></li>
							<li class="menu-item"><a href="" class="menu-link">صور واعمال</a></li>
							<li class="menu-item"><a href="" class="menu-link">الفيديوهات</a></li>
							<li class="menu-item"><a href="" class="menu-link">اتصل بنا</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="info-content">
						<h5 class="title">معلومات التواصل</h5>
						<ul class="info-menu">
							<li class="menu-item"><Image src={img13} class="icon" /><span class="content en">+012 345 6789</span></li>
							<li class="menu-item"><Image src={img14} class="icon" /><span class="content en">Infomail@Deltawy</span></li>
							<li class="menu-item"><Image src={img15} class="icon" /><span class="content">المحلة , شارع 45</span></li>

						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>



    <div class="copyrights">
		<p class="content">
			جميع الحقوق محفوظة لدي <span>دلتاوي نت</span>
			<Link href="https://deltawy.com/" target="_blank"
            ><Image src={del}  alt="" class="img" />
            </Link>
		</p>
	</div>
    </>
  )
}

export default Footer