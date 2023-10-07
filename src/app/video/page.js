"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import gallery3 from "../../../public/img/gallery--1.jpg"
import gallery4 from "../../../public/img/gallery--2.jpg"
import gallery from "../../../public/img/gallery--4.jpg"
import gallery2 from "../../../public/img/gallery--5.jpg"
const video = () => {
	
	useEffect(() => {
			Aos.init({
			  duration: 1000, 
			//   easing: 'ease-in-out',
			//   offset: 200, 
			});
		  }, []);
	
	return (  
    <>
        <section className="sub-video">
		<div className="container">
			<div className="box-title" data-aos="zoom-in" >
				<h2 className="title">فيديوهات العمليات</h2>
				<p className="content">
					هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز.
				</p>
			</div>
{/* 			
			<div style="display:none;" id="video1">
				<video className="lg-video-object lg-html5" controls="controls" preload="none">
					<source src="videos/test.mp4" type="video/mp4" />
					 Your browser does not support HTML5 video.
				</video>
			</div>
			 */}
			<div className="row">
				<div className="col-lg-4" data-aos="fade-up" data-aos-delay="0">
					<div className="card-wrapper">
						<div className="video-wrapper html5-videos">
							<div data-poster="images/gallery--2.jpg" data-sub-html="video caption1" data-html="#video1">
                            <Link href="/">        
                            <figure class="effect-apollo">
            <Image src={gallery2} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>
</Link>							</div>
						</div>
						<div className="info-wrapper">
							<h4 className="title">مثال مباشر</h4>
							<p className="content">
								هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
							</p>
						</div>
					</div>
				</div>
				
				<div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
					<div className="card-wrapper">
						<div className="video-wrapper html5-videos">
							<div data-poster="images/gallery--5.jpg" data-sub-html="video caption1" data-html="#video1">
                            <Link href="/">     
                            <figure class="effect-apollo">
            <Image src={gallery3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>    
</Link>							</div>
						</div>
						<div className="info-wrapper">
							<h4 className="title">مثال مباشر</h4>
							<p className="content">
								هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
							</p>
						</div>
					</div>
				</div>
				
				<div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
					<div className="card-wrapper">
						<div className="video-wrapper html5-videos">
							<div data-poster="images/gallery--4.jpg" data-sub-html="video caption1" data-html="#video1">
                            <Link href="/">   
                            <figure class="effect-apollo">
            <Image src={gallery4} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>  
</Link>							</div>
						</div>
						<div className="info-wrapper">
							<h4 className="title">مثال مباشر</h4>
							<p className="content">
								هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
							</p>
						</div>
					</div>
				</div>
				
				<div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
					<div className="card-wrapper">
						<div className="video-wrapper html5-videos">
							<div data-poster="images/gallery--3.jpg" data-sub-html="video caption1" data-html="#video1">
                            <Link href="/">    
                            <figure class="effect-apollo">
            <Image src={gallery} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>      
</Link>							</div>
						</div>
						<div className="info-wrapper">
							<h4 className="title">مثال مباشر</h4>
							<p className="content">
								هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
							</p>
						</div>
					</div>
				</div>
				
				<div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
					<div className="card-wrapper">
						<div className="video-wrapper html5-videos">
							<div data-poster="images/gallery--2.jpg" data-sub-html="video caption1" data-html="#video1">
                            <Link href="/">   
                            <figure class="effect-apollo">
            <Image src={gallery3} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>         
</Link>							</div>
						</div>
						<div className="info-wrapper">
							<h4 className="title">مثال مباشر</h4>
							<p className="content">
								هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
							</p>
						</div>
					</div>
				</div>
				
				<div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
					<div className="card-wrapper">
						<div className="video-wrapper html5-videos">
							<div data-poster="images/gallery--1.jpg" data-sub-html="video caption1" data-html="#video1">
                            <Link href="/">    
                            <figure class="effect-apollo">
            <Image src={gallery2} alt='' className="img img_deta" />
						<figcaption></figcaption>			
					</figure>     
</Link>							</div>
						</div>
						<div className="info-wrapper">
							<h4 className="title">مثال مباشر</h4>
							<p className="content">
								هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
							</p>
						</div>
					</div>
				</div>
				
				<div className="col-12" data-aos="zoom-in">
					<div id="pagiWrapper" className="pagi-wrapper">
						<Link href="/" className="pagi-content en"><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
						<Link href="/" className="pagi-content en"><i className="fa fa-angle-left" aria-hidden="true"></i></Link>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default video