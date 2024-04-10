import './Banner.scss';

function Banner ({img, img2, title}) {
  return(
    <div className='banner row justify-content-center align-items-center m-0'>
      <div className='col-md-1'></div>
      <img src={img} className='banner-img col-md-2 text-center'/>
      <div className='col-md text-center'><h1>{title}</h1></div>
      <img src={img2 ? img2 : img} className='banner-img col-md-2 text-center'/>
      <div className='col-md-1'></div>
    </div>
  )
}

export default Banner;