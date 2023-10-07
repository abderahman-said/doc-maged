"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../public/img/download.png"
import img2 from "../../public/img/megahed3.jpg"
import gallery3 from "../../public/img/gallery--1.jpg"
import img3 from "../../public/img/gallery--2.jpg"
import gallery from "../../public/img/gallery--4.jpg"
import gallery2 from "../../public/img/gallery--5.jpg"
import img4 from "../../public/img/teeth.svg"
import img5 from "../../public/img/implant.svg"
import img6 from "../../public/img/play-button.svg"
import img7 from "../../public/img/dentist-chair.svg"
import img8 from "../../public/img/dental-checkup.svg"
import img9 from "../../public/img/dentist-chair (1).svg"
import img11 from "../../public/img/implant.svg"
import img12 from "../../public/img/extraction.svg"
import img13 from "../../public/img/favorite-heart-button.svg"
import img14 from "../../public/img/medical-report.svg"
import mag1 from "../../public/img/megahed_clinic3.jpeg"
import mag2 from "../../public/img/megahed_clinic.jpeg"
import mag3 from "../../public/img/megahed_clinic1.jpeg"
import vid from "../../public/img/play-bu.svg"
import vids from "../../public/img/header-bg.jpg"

import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Map from '@/components/Map';
import Aos from 'aos';
function Home() {
	useEffect(() => {
		Aos.init({
		  duration: 1000, 
		//   easing: 'ease-in-out',
		//   offset: 200, 
		});
	  }, []);
  return (
    <>
     <div className='home'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <div className='filter_img'></div>
        <Carousel.Caption >
          <h2 data-aos="zoom-in">دكتور <span>احمد مجاهد</span> لجراحة العيون</h2>
          <p data-aos="zoom-in" >علاج النظر بإستخدام أحدث تكنولوجيا ألمانية لليزك وتصحيح الإبصارلى النص</p>
           <button className='button_nav' data-aos="zoom-in" > 
                احجز الان
                </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <div className='filter_img'></div>
        <Carousel.Caption >
		<h2 data-aos="zoom-in">دكتور <span>احمد مجاهد</span> لجراحة العيون</h2>
          <p data-aos="zoom-in" >علاج النظر بإستخدام أحدث تكنولوجيا ألمانية لليزك وتصحيح الإبصارلى النص</p>
           <button className='button_nav' data-aos="zoom-in" > 
                احجز الان
                </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <div className='filter_img'></div>
        <Carousel.Caption >
		<h2 data-aos="zoom-in">دكتور <span>احمد مجاهد</span> لجراحة العيون</h2>
          <p data-aos="zoom-in" >علاج النظر بإستخدام أحدث تكنولوجيا ألمانية لليزك وتصحيح الإبصارلى النص</p>
           <button className='button_nav' data-aos="zoom-in" > 
                احجز الان
                </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>

{/*  */}
<Container >
<div className='booking_section'>
    <div className="box-title"data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0">
				<h2 className="title">مانقدمه من خدمات</h2>
				<p className="content">
                                بعض الخدمات التي يقوم دكتور أحمد مجاهد بتقديمها لمرضاه
                                </p>
			</div>
      <div className="row reverse-row" >
				<div className="col-12">
					<div className="info-wrapper">
						<div className="row reverse-row">
							<div className="col-lg-4" data-aos="fade-up" data-aos-delay="0">
								<div className="media reverse-row">
									<div className="img-wrapper">
										<Image src={img4} className="icon" />
									</div>
									<div className="media-body reverse">
										<h5 className="title">علاج أمراض الشبكية</h5>
										<p className="content">
                                                                                يتميز دكتور أحمد مجاهد بكونه متخصص في علاج كافة أمراض الشبكية والجسم الزجاجي
                                                                                </p>
									</div>
								</div>
							</div>
							
							<div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
								<div className="media reverse-row">
									<div className="img-wrapper">
										<Image src={img5} className="icon" />
									</div>
									<div className="media-body reverse">
										<h5 className="title">أجهزة حديثة</h5>
										<p className="content">
                                                                                يقدم دكتور أحمد مجاهد أحدث أجهزة الفحص الشامل للعين وعمل النظارات
                                                                                </p>
									</div>
								</div>
							</div>
							
							<div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
								<div className="media reverse-row">
									<div className="img-wrapper">
										<Image src={img6} className="icon" />
									</div>
									<div className="media-body reverse">
										<h5 className="title">الفحص الشامل والكشف الدوري للعين</h5>
										<p className="content">
                                                                                
يعتبر الكشف الدوري على العين أمرا بالغ الأهمية في الكثير من الحالات مثل مرضى قصر النظر والأستيجماتيزم لضبط قياس عدسات النظارة من آن لآخر، وكذلك مرضى السكر لمتابعة الشبكية ومدى تأثرها بالمرض، وتشخيص الارتشاحات السكرية مبكرا ومن ثم علاجها. كما يعتبر القياس الدوري لضغط العين من الأمور الهامة لتشخيص متابعة مرضى المياه الزرقاء، كذلك يعتبر الكشف الدوري على كبار السن من الأمور الهامة للتشخيص المبكر لأمراض الشيخوخة كالمياه البيضاء ومرض تحلل ماقولة الإبصار.

ويشمل تصوير العين أثناء الكشف وعرضها على شاشة عرض للتوضيح.

                                                                                </p>
									</div>
								</div>
							</div>
							
							<div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
								<div className="media reverse-row">
									<div className="img-wrapper">
										<Image src={img7} className="icon" />
									</div>
									<div className="media-body reverse">
										<h5 className="title">علاج أمراض العيون الحرجة</h5>
										<p className="content">
                                                                                يقوم دكتور أحمد مجاهد بعلاج أمراض العيون الحرجة مثل دخول سوائل كيميائية أو أجسام غريبة بالعين، ارتفاع ضغط العين الحاد، الالتهاب القزحي، انسداد الوريد أو الشريان الشبكي، والتدخل الجراحي السريع في حالات إصابة العين التي قد تستدعي ذلك.
                                                                                </p>
									</div>
								</div>
							</div>
							
							<div className="col-lg-4" data-aos="fade-up" data-aos-delay="800">
								<div className="media reverse-row">
									<div className="img-wrapper">
										<Image src={img8} className="icon" />
									</div>
									<div className="media-body reverse">
										<h5 className="title">تشخيص ومتابعة وعلاج المياه الزرقاء</h5>
										<p className="content">
                                                                                
يعتبر مرض المياه الزرقاء من أهم الأمراض التي تتسبب في العمى، إذ يؤدي ارتفاع ضغط العين أو قلة الدم الواصل إلى الألياف العصبية إلى تلف العصب البصري تدريجيا مما قد يؤدي إلى العمى التام إذا أهمل المرض أو لم يتم تشخيصه مبكرا. في مركز الدكتور أحمد مجاهد يتم تشخيص المياه الزرقاء مبكرا عن طريق الفحص الدوري للعين، وعمل رسم مقطعي للعصب البصري ومجال إبصار لتحديد درجة تأثر الألياف العصبية بالمرض، ومن ثم تقديم العلاج الأمثل للمريض إما بالقطرات أو بإجراء عملية المياه الزرقاء مع أو بدون وضع صمام.

                                                                                </p>
									</div>
								</div>
							</div>
							
							<div className="col-lg-4" data-aos="fade-up" data-aos-delay="1000">
								<div className="media reverse-row">
									<div className="img-wrapper">
										<Image src={img9} className="icon" />
									</div>
									<div className="media-body reverse">
										<h5 className="title">تصحيح عيوب الإبصار بالليزر</h5>
										<p className="content">
                                                                                
لأن كمية الرؤية ليست هي الهدف الوحيد، ولأن كفاءة الرؤية هي هدفنا الأول، فإننا لا نقدم الطرق التقليدية لتصحيح قصر وطول النظر والأستيجماتيزم. وإنما يتم استخدام الليزر التفصيلي بعد أخذ بصمة العين لعلاج جميع انواع عيوب الإبصار وتحسين كفاءة الرؤية الليلية. يخضع المريض لدينا لفحص دقيق وشامل وقياسي قبل اختيار نوع العملية الأكثر كفاءة والأكثر أمانا والأكثر ملائمة لحالته من أحدث التقنيات المتاحة جميعها لدينا (الليزك – الفيمتوليزك – الفمتوكاستم ليزك – الفيمتوسميل – الليزر السطحي التفصيلي – زراعة العدسات).

                                                                                </p>
									</div>
								</div>
							</div>
							
							<div className="col-12 cen_b" data-aos="zoom-in">
								<div className="button_wrapper">
									<Link href="/">مشاهدة المميزات</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
</div>

{/*  */}












</Container>
<section className="banner">
		<div className="overlay">
			<div className="container">
				<div className="row ">
					<div className="col-12">
						<div className="info-wrapper">
							<span className="sub-title" data-aos="fade-up">مايميزنا عن غيرنا</span>
							<h3 className="main-title" data-aos="fade-up">ماتجده عندنا فقط</h3>
							<p className="content" data-aos="fade-up">
                                                    ما يميزنا عن غيرنا
                                                        </p>
							<h4 className="title" data-aos="fade-up">
ما يميز دكتور أحمد مجاهد عن غيره من دكاترة العيون وتجعلك تقوم بإختياره هو فقط
</h4>
							<div className="row reverse-row ban_flex">
								<div className="col-lg-4" data-aos="fade-left" data-aos-delay="0">
									<div className="card-wrapper">
										<div className="media reverse-row">
											<div className="img-wrapper">
                      <Image src={img9}alt='' className="icon" />
											</div>
											<div className="media-body">
												<h5 className="media-title">  متابعة متميزة</h5>
                        			<p className="cat-content">
يتميز دكتور أحمد مجاهد بخدمة المتابعة الجيدة لمرضاه لضمان الحصول على أفضل النتائج</p>
											</div>
										</div>
							
									</div>
								</div>
								
								<div className="col-lg-4" data-aos="fade-left" data-aos-delay="400">
									<div className="card-wrapper">
										<div className="media reverse-row">
											<div className="img-wrapper">
                      <Image src={img9}alt='' className="icon" />
											</div>
											<div className="media-body">
												<h5 className="media-title">خدمة على مدار ال 24 ساعة  </h5>
                        <p className="cat-content">
يتميز دكتور أحمد مجاهد بخدمة المتابعة الجيدة لمرضاه لضمان الحصول على أفضل النتائج</p></div>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4" data-aos="fade-left" data-aos-delay="800">
									<div className="card-wrapper">
										<div className="media reverse-row">
											<div className="img-wrapper">
                      <Image src={img9}alt='' className="icon" />
											</div>
											<div className="media-body">
												<h5 className="media-title">  خبرة لسنوات كثيرة</h5>
										<p className="cat-content">حيث قام الدكتور أحمد مجاهد بالكثير من العمليات وقابل العديد من الحالات المتعلقة بأمراض العيون</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  {/*  */}


  <section className="statics">
		<div className="overlay">
			<div className="container" dir='rtl'>
				<div className="row">
					<div className="col-lg-3" data-aos="fade-up" data-aos-delay="0">
						<div className="card-wrapper">
							<div className="img-wrapper">
                <Image src={img11} alt='' className="img" />

							</div>
							<div className="info-wrapper">
								<h5 className="title">مثال مباشر</h5>
								<p className="count en">500</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3"data-aos="fade-up" data-aos-delay="300">
						<div className="card-wrapper">
							<div className="img-wrapper">
              <Image src={img12}alt=''  className="img" />
							</div>
							<div className="info-wrapper">
								<h5 className="title">مثال مباشر</h5>
								<p className="count en">500</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3" data-aos="fade-up" data-aos-delay="600">
						<div className="card-wrapper">
							<div className="img-wrapper">
              <Image src={img13} alt='' className="img" />
							</div>
							<div className="info-wrapper">
								<h5 className="title">مثال مباشر</h5>
								<p className="count en">500</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3" data-aos="fade-up" data-aos-delay="900">
						<div className="card-wrapper">
							<div className="img-wrapper">
              <Image src={img14} alt='' className="img" />
							</div>
							<div className="info-wrapper">
								<h5 className="title">مثال مباشر</h5>
								<p className="count en">500</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

{/*  */}


<section className="about">
		<div className="container">
			<div className="row reverse-row">
				<div className="col-lg-6" data-aos="fade-left" >
					<div className="info-wrapper reverse">
						<span className="sub-title">عن الدكتور</span>
						<h3 className="title">عن الدكتور احمد مجاهد</h3>
						<p className="content">
                                                

دكتوراة وزمالة بريطانية في مجال جراحة العيون

في مركز دكتور أحمد مجاهد لجراحات العيون مش بس بيعمل عمليات الفيمتو ليزك والليزك لا ده كمان بيعالج أي مشكلة تتعلق بالعيون مثل " إرتخاء الجفون - ترهلات الجفنين - إتنفاخات الجفون - جحوظ العين - إصابات في الجفون ما بعد الحوادث - مشاكل القنوات الدمعيه كبار أو أطفال " تحت إشراف دكتور أحمد مجاهد هنقدملك كل الفحوصات اللازمة والعلاج المناسب لأي مرض يخص عينيك.


                                                </p>
						<div className="flex-wrapper">
							<div className="img-wrapper" data-aos="fade-up" data-aos-delay="200">
				<figure class="effect-apollo">
            <Image src={mag1} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>  
							</div>
							
							<div className="img-wrapper" data-aos="fade-up" data-aos-delay="400">
			  <figure class="effect-apollo">
            <Image src={mag2} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>  
							</div>
							
							<div className="img-wrapper" data-aos="fade-up" data-aos-delay="600">
			  <figure class="effect-apollo">
            <Image src={mag3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure> 
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-6"  data-aos="fade-right" >
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={mag3}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={mag2}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={mag1}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
				</div>
			</div>
		</div>
	</section>

{/*  */}
<section className="blog">
		<div className="container-fluid">
			<div className="row reverse-row">
				<div className="col-lg-3">
					<div className="box-title" data-aos="fade-left">
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
						<div className="col-lg-4 mobile_width"  data-aos="fade-up" data-aos-delay="0">
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
						
						<div className="col-lg-4 mobile_width" data-aos="fade-up" data-aos-delay="300">
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
						
						<div className="col-lg-4 mobile_width" data-aos="fade-up" data-aos-delay="600">
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







  <section className="video" 
     >
		<div className="flex-wrapper">
			<div className="column">
				<div className="info-wrapper" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0">
					<h4 className="title">video   </h4>
					<p className="content">
                                        video
                                        </p>
				</div>
				
				<div className="video-wrapper" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300">
					<Link href="/" className="overlay">
          <Image src={vid} alt='' className="icon" />
					</Link>
          <Image src={vids} alt='' className="img" />
				</div>
			</div>
			
			<div className="column">
				<div className="info-wrapper" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="600">
					<h4 className="title">video  </h4>
					<p className="content">
                                        video
                                        </p>
				</div>
				
				<div className="video-wrapper" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="900">
					<Link href="/" className="overlay">
          <Image src={vid} alt='' className="icon" />
					</Link>
          <Image src={vids} alt='' className="img" />
				</div>
			</div>
		</div>
	</section>

  {/*  */}

  <section className="gallery">
		<div className="container-fluid">
			<div className="row reverse-row">
				<div className="col-lg-3">
					<div className="box-title" data-aos="fade-left" >
						<h2 className="title">صور العيادة</h2>
						<p className="content">
							هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
						</p>
            <button className='button_wrapper'>
						<Link href="/" className="">مشاهدة المزيد</Link>

            </button>
					</div>
				</div>
				
				<div className="col-lg-9">
					<div className="row reverse-row">
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="0">
							<div className="img-wrapper lightgallery hover01" >
								<Link href="/" >
									   <figure><Image src={gallery} alt='' className="img" /></figure>
          

                  </Link>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
							<div className="img-wrapper lightgallery hover01">
								<Link href="/">     <figure><Image src={img3} alt='' className="img" /></figure>

</Link>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
							<div className="img-wrapper lightgallery hover01">
								<Link href="/">        
								 <figure><Image src={gallery2} alt='' className="img" /></figure>
</Link>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
							<div className="img-wrapper lightgallery hover01">
<Link href="/">        
								 <figure><Image src={img3} alt='' className="img" /></figure>
</Link>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="800">
							<div className="img-wrapper lightgallery hover01">
							<Link href="/">        
								 <figure><Image src={gallery} alt='' className="img" /></figure>
</Link>
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="1000">
							<div className="img-wrapper lightgallery hover01">
							<Link href="/">        
								 <figure><Image src={gallery3} alt='' className="img" /></figure>
</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>




  <div className="volve">
		<div className="overlay"
>
			<div className="box-title" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0">
				<h2 className="title">اشترك معنا الأن ليصلك كل الاخبار والمقالات الجديدة</h2>
			</div>
			<form method="" action=""  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0">
				<div className="form-group">
					<input type="text" className="form-control" name="" placeholder="البريد الألكتروني" />
					<button type="submit" className="btn btn-default">اشترك الأن</button>
				</div>
			</form>
		</div>
	</div>






  <section className="fb-page">
		<div className="container">
			<div className="row reverse-row">
				<div className="col-lg-5" data-aos="fade-left">
					<div className="fb-wrapper">
					<iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
					</div>
				</div>
				
				<div className="col-lg-7" data-aos="fade-right">
					<div className="info-wrapper reverse">
						<h3 className="title">يمكنك متابعتنا والتواصل معنا عبر صفحتنا علي فيس بوك</h3>
						<p className="content">
                                                تواصل معنا عبر صفحتنا على الفيسبوك وتعرف على كل جديد، أو أترك لنا رسالة وسنقوم بالتواصل معك عبر فيسبوك.


                                                </p>
                                                <button className='button_wrapper'>
						<Link href="/" className="">مشاهدة المزيد</Link>

            </button>
					</div>
				</div>
			</div>
		</div>
	</section>





  <section className="appointment-section">
		<div className="container">
			<div className="info-wrapper" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0">
				<h2 className="title">تواصل معنا الأن واحجز موعد كشفك التالي واحصل علي فضل خدمة طبية</h2>
        <button className="btn-23">
  <span className="text">احجز الأن</span>
  <span aria-hidden="" className="marquee">احجز الأن</span>
</button>

			</div>
		</div>
	</section>


  <section className="contact" >
		<div className="container">
			<div className="box-title" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0">
				<h2 className="title">تواصل معنا الان</h2>
				<p className="content">
                                يمكنك التواصل عبر النموذج التالي ونحن سنقوم بالرد عليك في أسرع وقت ممكن، أو يمكنك الاتصال عبر أرقامنا الموجودة بالموقع. .


                                </p>
			</div>
			
			<div className="form-wrapper">
				<form method="" action="">
					<div className="row reverse-row">
						<div className="col-lg-6" data-aos="fade-up"
data-aos-delay="0">
							<div className="form-group">
								<input type="text" className="form-control" name="" id="name-2"/>
								<label for="name-2" className="control-label">الأسم</label>
							</div>
						</div>
						
						<div className="col-lg-6"data-aos="fade-up"
data-aos-delay="200">
							<div className="form-group">
								<input type="text" className="form-control" name="" id="mail-2"/>
								<label for="mail-2" className="control-label">البريد الألكتروني</label>
							</div>
						</div>
						
						<div className="col-lg-12"data-aos="fade-up"
data-aos-delay="400">
							<div className="form-group">
								<input type="text" className="form-control" name="" id="subject"/>
								<label for="subject" className="control-label">الموضوع</label>
							</div>
						</div>
						
						<div className="col-lg-12" data-aos="fade-up"
data-aos-delay="600">
							<div className="form-group">
								<textarea className="form-control" name="" id="message" rows="5"></textarea>
								<label for="message" className="control-label">الرسالة</label>
							</div>
						</div>
						
						<div className="col-lg-12" data-aos="zoom-in" data-aos-delay="800">
            					<button  className="btn_n" type="submit"> ارسال
            					</button>
						</div>
					
					</div>
				</form>
			</div>
			
		</div>
	</section>









<Map />
    </>
   
  )
}
export default Home;

