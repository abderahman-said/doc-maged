"use client"


import { Container } from "react-bootstrap";
import docto from "../../../public/img/megahed_clinic.jpeg";
import styles from "../../app/page.module.css"
import  imssg from "../../../public/img/header-bg.jpg"
import img from "../../../public/img/Icon-5.svg"
import img2 from "../../../public/img/Icon4-2.svg"
import img3 from "../../../public/img/Icon3-2.svg"
import img4 from "../../../public/img/Icon2-2.svg"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Aos from "aos";
import { useEffect } from "react";
const page = () => {
  useEffect(() => {
		Aos.init({
		  duration: 1000, 
		//   easing: 'ease-in-out',
		//   offset: 200, 
		});
	  }, []);
  return (
    <>




<section className="whoAreWe">
   <div className="container text-center">
     <p className="p">تعرف علينا</p>
     <h2 className="mb-4"> معنا، الرعاية الصحية متوفرة للجميع  </h2>
     
   <div className="row" dir='rtl'>
     <div className="col-12 col-md-12 col-lg-6" data-aos="fade-left">
       <div className="img">
       <Image src={imssg} className="img-fluid" />
       </div>
     
       <div className="states textl-left d-flex align-items-start justify-content-between mt-5 flex-nowrap">
           
               

       <div className="state">
       <Image src={img2} alt=''  className="img-fluid"   />
           <h6>120+</h6>
           <p>دكتور و متخصص</p>
         </div>
       
    
          

       <div className="state">
       <Image src={img3} alt=''  className="img-fluid"   />
           <h6>28+</h6>
           <p>تخصص طبي </p>
         </div>
       
    
          

       <div className="state">
       <Image src={img} alt=''  className="img-fluid"   />
           <h6>5</h6>
           <p>مراكز طبية</p>
         </div>
       
    
          

       <div className="state">
            <Image src={img4} alt=''  className="img-fluid"   />

           <h6>10000+</h6>
           <p className="text-center">مريض نخدمه كل شهر</p>
         </div>
       
    
              </div>
     </div>
     <div className="col-12 col-md-12 col-lg-6" data-aos="fade-right">
       
       <p className="content readMore">
           تقدم عيادات OneHealth  التخصصية خدمات الرعاية الطبية بمستوى عالمي، مما يتيح رحلة رعاية صحية عالية الجودة وفريدة من نوعها للعملاء في مصر، بهدف تغيير تجربة الرعاية الصحية إلى تجربة أكثر سهولة وسلاسة سواء كان ذلك داخل الفروع الموجودة في جميع أنحاء القاهرة أو من خلال الخدمات الطبية المتاحة عبر التليفون و الفيديو.<br/>
<br/>
ومن خلال نظرتنا المتطورة والحديثة تجاه خدمات الرعاية الصحية، ومع والاستجابة لاحتياجات العملاء المتزايدة للوصول إلى الرعاية الصحية على مدار الساعة طوال أيام الأسبوع ، تقدم عيادات OneHealth التخصصية استشارات طبية للعملاء داخل العيادات و عبر التليفون والفيديو مع أكثر من 30 تخصص أساسي و تخصص فرعي.<br/>
<br />
وبخبرة عالمية تهدف إلى الارتقاء برحلة الرعاية الصحية للعملاء ، توفر عيادات OneHealth التخصصية الوصول إلى التشخيصات المتقدمة مع وجود معامل متطورة والسجلات الطبية الإلكترونية لجميع العملاء ، مما يجعل الذهاب إلى العيادات التخصصية أو الاستفادة بخدمة الاستشارة الطبية عن بعد، تجربة لا مثيل لها.<br/>
<br />
عيادات OneHealth التخصصية تنتمي لمجموعة أكسا العالمية و هي تسعى لتحقيق أحد اهم استراتيجيتها لتوفير حلول الرعاية الصحية في الأسواق الناشئة؛ لخلق تجربة رعاية صحية موثوقة بها، بأسعار مناسبة، و في المقام الأول مريحة للعملاء.<br/>
 
        
           </p>
		 	   <span className="moreless-button d-none">إقرأ المزيد</span>
	              
              </div>
   </div>
  </div>
 </section>





<Container style={{maxWidth:"1200px" ,paddingTop:'4rem'}} dir='rtl'>
 <section className={styles.about_cv}>
<div className={styles.about_right}>
<Image alt="z" src={docto} width={350} height={300} data-aos="fade-up" data-aos-delay="0" ></Image>
<h3 data-aos="fade-up" data-aos-delay="200" >دكتور محمد عبد الحليم</h3>
<h6 data-aos="fade-up" data-aos-delay="400" >استشاري اول العيون و الشبكية</h6>
<div data-aos="fade-up" data-aos-delay="600" >
<i className="fa-solid fa-phone"></i>
<h5> رقم الهاتف : <span>    201148004734 +</span> </h5>
</div>
<p data-aos="fade-up" data-aos-delay="800" >الدكتور محمد عبد الحليم واحد من بين أفضل أطباء العيون بالمحلة بكالوريوس طب وجراحة العيون جامعة المنصورة2002 استشاري جراحة المياه البيضاء بالليزر</p>




</div>
<div className={styles.about_left}>
<div data-aos="fade-up" data-aos-delay="0" >
<h2>عن الدكتور</h2>
<p>الدكتور محمد عبد الحليم واحد من بين أفضل أطباء العيون بالمحلة، والآن لا تقم بالكثير من البحث عن افضل دكتور عيون في المحلة، بل تواصل معنا عبر أرقام العيادات الخاصة بنا للحجز، ويمكنك الاستفسار عن كافة أنواع العمليات التي نقوم بها، كما يمكنك التواصل معنا عبر الموقع، أو عبر صفحة الفيس بوك. عنوان العيادة موجود بالموقع ويمكنك زيارة العيادة للحجز مباشرة أو الاتصال على الرقم ومعرفة مواعيد الحجوزات المتاحة، كما نتمنى أن نكون عند حسن ظنك، وأن نقدم لكم أفضل الطرق العلاجية والرعاية ونتائج رائعة لصحة عيونكم.</p>
</div>
<div className={styles.about_left_fle}>
<div data-aos="fade-up" data-aos-delay="200" >
<h2>الشهادات </h2>
<ul>
<li>بكالوريوس طب وجراحة العيون جامعة المنصورة2002</li>
<li>ماجيستير طب وجراحة العيون جامعة القاهرة 2008</li>
<li>زمالة طب وجراحة العيون 2010</li>
</ul>
</div>
<div data-aos="fade-up" data-aos-delay="400" >
<h2>التعليم </h2>
<ul>
<li>استشاري اول جراحة المياه البيضاء بالليزر</li>
<li>استشاري اول جراحة الشبكية و الجسم الزجاجي
</li>
<li>استخدام الليزر في جميع مجالات العيون
</li>
</ul>
</div>
</div>
<div data-aos="fade-up" data-aos-delay="600" >
<h2   >مجالات الخبرة </h2>
<ul   >
<li>شهادة استشاري الليزر واجازة استخدام الليزر في مجال العيون و الشبكية من معهد الليزر القومي جامعة القاهرة</li>
<li>استشاري اول بنقابة الاطباء القاهرة</li>
<li>مدير مركز المنار للعيون بالمحلة
</li>
<li>عضو الجمعية الاوروبية لتصحيح الابصار و زرع العدسات
</li>
</ul>
</div>
</div>

</section>












<Swiper
      breakpoints={{
        100: {
              slidesPerView: 1,
              spaceBetween: 10,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
    },
        600: {
              slidesPerView: 2,
              spaceBetween: 10,
        },
        850: {
              slidesPerView: 3,
              spaceBetween: 10,
        },
        950: {
              slidesPerView: 3,
              spaceBetween: 10,
        },
         1100: {
              slidesPerView: 4,
              spaceBetween: 10,
        },

  }}
  loop={true}
  autoplay={true}
      spaceBetween={20}
      slidesPerView={4}
      className={styles.swip}
    >
      <SwiperSlide > 
            <div className={styles.partt}  data-aos="fade-up" data-aos-delay="0" >
            <figure><Image src={docto} alt='' width={270} /></figure>
                <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}  data-aos="fade-up" data-aos-delay="200" >
            <figure><Image src={docto} alt='' width={270} /></figure>
                <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}  data-aos="fade-up" data-aos-delay="400" >
            <figure><Image src={docto} alt='' width={270} /></figure>
            <h5>عمليات ترقيع القرنيه</h5>

            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}  data-aos="fade-up" data-aos-delay="600" >
            <figure><Image src={docto} alt='' width={270} /></figure>
            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}   data-aos="fade-up" data-aos-delay="800">
            <figure><Image src={docto} alt='' width={270} /></figure>
            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}  data-aos="fade-up" data-aos-delay="1000" >
            <figure><Image src={docto} alt='' width={270} /></figure>
            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}  data-aos="fade-up" data-aos-delay="1200" >
            <figure><Image src={docto} alt='' width={270} /></figure>

            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
      
      
    </Swiper>










</Container>






























    
    </>
  )
}

export default page