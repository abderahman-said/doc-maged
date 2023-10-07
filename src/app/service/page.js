"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import gallery3 from "../../../public/img/gallery--1.jpg"

import img3 from "../../../public/img/gallery--2.jpg"

import gallery from "../../../public/img/gallery--4.jpg"
import { Container } from 'react-bootstrap'
import Aos from 'aos'
const page = () => {
    useEffect(() => {
		Aos.init({
		  duration: 1000, 
		//   easing: 'ease-in-out',
		//   offset: 200, 
		});
	  }, []);
  return (
   <Container >
  
  <section className="gallery ser_vise">
					<div className="row reverse-row">
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="0">
							<div className="img-wrapper lightgallery hover01" >
							
          			

<figure class="effect-jazz">
<Image src={gallery} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
							<div className="img-wrapper lightgallery hover01">
                            <figure class="effect-jazz">
<Image src={img3} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

				
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
							<div className="img-wrapper lightgallery hover01">
                            <figure class="effect-jazz">
<Image src={gallery} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

				
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
							<div className="img-wrapper lightgallery hover01">
                            <figure class="effect-jazz">
<Image src={img3} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

				
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
							<div className="img-wrapper lightgallery hover01">
                            <figure class="effect-jazz">
<Image src={gallery} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

				
							</div>
						</div>
						
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="500">
							<div className="img-wrapper lightgallery hover01">
                            <figure class="effect-jazz">
<Image src={gallery3} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

								</div>
						</div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
							<div className="img-wrapper lightgallery hover01" >
							<figure class="effect-jazz">
<Image src={gallery} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

				
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="700">
							<div className="img-wrapper lightgallery hover01">
                            <figure class="effect-jazz">
<Image src={gallery3} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

				
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay="800">
							<div className="img-wrapper lightgallery hover01">
                            <figure class="effect-jazz">
<Image src={img3} alt='' className="img" />
    <figcaption>
        <h2>جراحه عيون</h2>
        <p>افضل دكور لجراحه العيون </p>
    </figcaption>			
</figure>

				
							</div>
						</div>
				

					</div>
	</section>
   </Container>
  )
}

export default page