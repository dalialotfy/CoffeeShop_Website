import React from 'react'
import style from './Coffee.module.css'
import image from '../Images/image.png'
import imageone from '../Images/image1.png'
import imagetwo from '../Images/image2.png'
import imagethree from '../Images/image3.png'
import imagefour from '../Images/image4.png'
export default function Coffee() {
  return (
    <>
    {/* ..........................Header Sec........................... */}
    <section className='header'>
    <div className="container">
        <div className="row">
    <div className="col-md-3 col-sm-12 mt-3 offset-lg-4 offset-md-0 offset-sm-0 ">
<div className="input-group mb-3 ">
  <input type="text" className="form-control" placeholder="what you want to learn" aria-label="what you want to learn" />
  <div className="input-group-append">
    <button className={style.btncolor} type="button"><i className="fas fa-search text-white py-2"></i></button>
  </div>
</div>
</div>

<div className={` mt-4 col-md-1 col-sm-12 offset-2 ${style.color}`}>
    Login
</div>
<div className="mt-3 col-md-2 col-sm-12">
<button className={`btn text-white p-2 ${style.btncolor}`} type="button">Join For Free  <i className="fa-solid fa-arrow-right text-white"></i></button>

</div>

</div>
</div>
</section>   


    {/* ..........................Title Sec........................... */}

<section className={style.background}>
    <div className={style.title}>
        <p>
    Caffee first , <br></br>
                 <span className='ms-5'>Schemes later</span> </p>
    </div>    
    </section>


    {/* ..........................Make_Coffee Sec........................... */}

<section className='make mt-5 pt-5'>
<div className="container w-75 m-auto">
<div className="row justify-content-center">
    <div className="col-lg-6 col-md-12 col-sm-12 ">
        <div className='d-flex m-auto position-relative'>
        <img src={image} alt="" width={250} className={`${style.image}`} />
        <div className={style.square}></div>
        <div className={style.circle}></div>
    </div></div>
    <div className="col-lg-3 col-md-12 col-sm-12 mt-5 pt-5" >

    <h3 className={style.imge1}>Make Your </h3>
    <h3 className={style.imge2}> Own Caffee</h3>
    </div>
</div>
</div>
</section>

    {/* ..........................coffeeProd Sec........................... */}
<section className='coffeeProd mt-5 pt-5'>
    <div className="container w-50 m-auto">
<div className="sent">
    <h6>practice advice </h6>
    <h3 className={`${style.prod}`}>Coffee products</h3>
    <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
        <img src={imagefour} alt="" className={`${style.shadow}`}/>
        <p className={style.para}>coffee <br />
        <i className={`fa-solid fa-star ${style.star}`}></i> 4.4 <span className={style.review}>429 reviews</span><br />
        New Cairo, Egypt
        </p>
        </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div>
        <img src={imageone} alt="" className={`${style.shadow}`}/>
        <p className={style.para}>coffee <br />
        <i className={`fa-solid fa-star ${style.star}`}></i> 4.4 <span className={style.review}>429 reviews</span><br />
         New Cairo, Egypt
        </p>
        </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12  ">
            <div>
        <img src={imagetwo} alt="" className={`${style.shadow}`}/>
        <p className={style.para}>coffee <br />
        <i className={`fa-solid fa-star ${style.star}`}></i> 4.4 <span className={style.review}>429 reviews</span><br />
        New Cairo, Egypt
        </p>
        </div>

        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
        <img src={imagethree} alt="" className={`${style.shadow}`}/>
        <p className={style.para}>coffee <br />
        <i className={`fa-solid fa-star ${style.star}`}></i> 4.4 <span className={style.review}>429 reviews</span><br />
         New Cairo, Egypt
        </p>    
        </div>
        </div>
    </div>
    </div>
</div>
</section>
    {/* ..........................JoinUs Sec........................... */}
    <section className='contact mt-5 pt-5'>
    <div className="container w-75 m-auto">
     <h3 className={style.join} >JOIN US </h3>
     <div className="input-group mb-3 w-50 m-auto mt-5">
  <input type="text" className="form-control" placeholder="Your Email" aria-label="Your Email" />
  <div className="input-group-append">
    <button className={`btn ${style.subBtn}`} type="button">Subscribe</button>
  </div>
</div>
</div>
    </section>


    </>
  )
}
