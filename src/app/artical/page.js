"use client"
import { useEffect, useState , useRef} from 'react';

import Image from "next/image";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import styles from "../page.module.css"
import docto from "../../../public/img/megahed_clinic.jpeg";
import gallery3 from "../../../public/img/gallery--1.jpg"

import img3 from "../../../public/img/gallery--2.jpg"

import gallery from "../../../public/img/gallery--4.jpg"
import Link from 'next/link';
import Aos from 'aos';

function About() {

	useEffect(() => {
		Aos.init({
		  duration: 1000, 
		//   easing: 'ease-in-out',
		//   offset: 200, 
		});
	  }, []);

  return (
   <div>
   <section className="blog">
		<div className="container-fluid">
			<div className="row reverse-row">
				<div className="col-lg-3">
					<div className="box-title" data-aos="zoom-in" >
						<h2 className="title">المقالات والنصائح</h2>
						<p className="content">
                                                هذه مجموعة من النصائح المهمة والتي تعتبر من أهم أسباب انتشار أمراض العين، ولا بد من اتباع تلك النصائح بعناية فائقة لتجنب أمراض العيون.


                                                </p>
                                                <button className='button_wrapper'>
						<Link href="/" className="">مشاهدة المزيد</Link>

            </button>
					</div>
				</div>
				
				<div className="col-lg-9">
					<div className="row reverse-row">
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="0">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<figure class="effect-apollo">
            <Image src={img3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link  href={"/"} className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<figure class="effect-apollo">
            <Image src={gallery3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link href={"/"}   className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<Link href="/" >
								<figure class="effect-apollo">
            <Image src={gallery} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
                  </Link>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link href={"/"} className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<figure class="effect-apollo">
            <Image src={img3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link  href={"/"} className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<figure class="effect-apollo">
            <Image src={gallery3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link href={"/"}   className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="500">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<Link href="/" >
								<figure class="effect-apollo">
            <Image src={gallery} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
                  </Link>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link href={"/"} className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<figure class="effect-apollo">
            <Image src={img3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link  href={"/"} className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="700">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<figure class="effect-apollo">
            <Image src={gallery3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link href={"/"}   className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="800">
							<div className="card-wrapper">
								<div className="img-wrapper">
								<Link href="/" >
								<figure class="effect-apollo">
            <Image src={gallery} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
                  </Link>
								</div>
								<div className="info-wrapper">
									<h4 className="title">مثال مباشر يمكن تغييره</h4>
									<p className="sub-title">ابريل 19,2019 | دكتور احمد مجاهد</p>
									<p className="content">
										هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
									</p>
								</div>
								<Link href={"/"} className="btn btn-default">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


   </div>
  )
}
export default  About;