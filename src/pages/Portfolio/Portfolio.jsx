// import React from "react";
// import "./portfolio.scss";
// import { Link, Outlet } from "react-router-dom";
// import Scroll from "../../components/Scroll/Scroll";
// import { Fade } from "react-reveal";

// const Portfolio = () => {
//   return (
//     <div className="portfolio">
//       <Scroll />
//       {/* portfolio header */}
//       <div className="por-have text-center">
//         <Fade bottom>
//           <h1>Have a Project in Mind</h1>
//         </Fade>
//         <Fade top>
//           <p>
//             Send us your project details and get a free, personalized quote that
//             best suits your budget and time constraints
//           </p>
//         </Fade>
//         <Fade top>
//           <p className="just">just a minute if your internet is slow!</p>
//         </Fade>
//         <div className="row gap-1 d-flex justify-content-center align-items-center">
//           <Fade bottom>
//             <Link to="/">
//               <button>contact us / home</button>
//             </Link>
//           </Fade>
//           {/* <nav> */}
//             <Fade bottom>
//               <Link to="vlogs">
//                 <button className="m-2 button-vlogs">Vlogs</button>
//               </Link>
//             </Fade>

//             <Fade top>
//               <Link to="animation">
//                 <button className="button-animation">animation</button>
//               </Link>
//             </Fade>
//           {/* </nav> */}
//           <Outlet />
//         </div>
//       </div>

//       <div className="container">
//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/15QSAslZKqqrzbGeyxwoCYje73IG_1iDS/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Wedding</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1-9CxIXghh1nSscq9cXMnwpbASNI5OLMq/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Food Promo</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1-dsWsVwfOKa4maTuFouO2ftrUIVXVPy-/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">unbelivable rain "cash cow"</p>
//           </div>
//         </div>

//         {/* for michael videos */}
//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1nd8CDTj7wAcbS4DPT-sPX5KO77H4hoFU/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">london bridge fall</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1cQnZ52_NRdmTmp9IS3VTlRllhwQxV916/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">The legend of the east</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1gucnmEgf0Q3QAJYqQP4ap2N5f1KUpTVc/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">food promo -2</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1TR8WuVOYzoUr7E9hwfQ5PnA3RlL11YR5/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">google emplyees</p>
//           </div>

//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1pKc8tEQaNm-5AuVr3dLgaJ3Jo80pyIJB/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Elon musk slams CM'...</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1jzHWnypiHYON5fm8ZFxo6EIrxmaGSYDk/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">have you seen...</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/11fRgk_EVw0zPM4KRYUXWou4La0gJIHtY/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">train your... "promo</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1PR9QnVE5cfVbWgWAFhg_JQ2iC3fsG0rS/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">zedny "speaking"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1Tr3LV1stxsfh2VE4yuWA5-l0mi4fL9x5/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">why do we... "film"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1oTBgd30vMsXt7qO79DU1egfXxFLWwCxv/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Idex 2021 "building"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1RlLy9Ak3cVG8hlV7PSghk-lth4mY3d2Z/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">cooking promo</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1d7WLbS_ZpVCbJqGjNrpiDmGFo8gFvTEx/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">resturant's food promo</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1f9Gg22GduOHxlCFG7Mnuae0iyqadw5FY/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">venus "make up"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1p5Ti0ffPASdqKZ40pAg0Szdp4eAcend3/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">resturant's food promo</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1Tk6ougazslcJV0QpBCVYLWx4ODXOK2hM/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">music promo</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1wRVRkklJwnMvqCh7Zt-dEubSTghJ3Ba3/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">zedney "speaking promo"</p>
//           </div>

//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1WqpJvuStHrbzQXNgckEsK11SNGcywRnL/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Nuclear monsters clash</p>
//           </div>

//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1XG1QMl-IxtcsarsuH1c1UfqV7nnZPU1X/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">gg</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1pV7r4OItBUIlQf1TJVR4MpyooZtizf8P/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">product videography "promo"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1KicwQsihzJ3NDCADRDEB6QEg9q_KRVxe/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">pato "football"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1C3j0S_2BF7RJ3YBtYEP0agzwAM_KuWAw/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">elon musk just officially</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/12mT8R0iqH3TZA7mIvXeVtjVCZ1cdaSvw/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">steelo mechanics "promo"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe className="portfolio-iframe" allow="autoplay"></iframe>
//             <p className="portfolio-par"></p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe className="portfolio-iframe" allow="autoplay"></iframe>
//             <p className="portfolio-par"></p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe className="portfolio-iframe" allow="autoplay"></iframe>
//             <p className="portfolio-par"></p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe className="portfolio-iframe" allow="autoplay"></iframe>
//             <p className="portfolio-par"></p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe className="portfolio-iframe" allow="autoplay"></iframe>
//             <p className="portfolio-par"></p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/11yrEBowfuKKLv61RDSKDvo_sl58IG_zS/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">nasa</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1bFsF7xBXwn_Nrk92ZnyB1vm9ZX-9bCjp/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Boxing fign " short video "</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1nqpUQHk7VIfI-bwRvOmrcWhCThvwpGE4/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Food recipe promo</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1VVg_Tu40kixTdo6ItPvIvlIAeY2FBt7V/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">OUT LET AVE PROMO</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1bMq3B4SBJeCQR4JmLjs_67gHuSL4V5eQ/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">rev.com</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1-E2RPErjZM2fALbx5Fvrgh3cj6vKXcEq/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">lets get into...</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1L8dfFiyH09h-2yyH6yAqZvwutZ0d4VhA/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">make money with coding</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1kkK6U5x7hM5f211-X957cFtDg5oEHxcf/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">short film</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/16jbqpVX2iKVqZXVd2xGfwXlAoNpbMgIK/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">tiktok subtitles -3</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1o-i3RJkweicDFRRYe-n4ZD0FfQ6Vm050/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">plane fly promo</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1eo-Bl0IprptXoMuHTYtpC-P6XisjaUBK/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">EMC "motion"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1oBvoWPctMXunv8Rf7hrqNf0WK1vbbuPD/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">the party pros...</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1Ohbfxmkv7t36tvbh_dfXM35NrZqC0Ac3/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">SPINNING "promo ad"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1DTUyL4-2eJ1MYT7AJy2auJJ9se3sSGdm/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Elogic Tech "ad"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1CCSvbim3YnNMkS1RhEYcS4-6cNjXTTTt/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Exams "Dahheeh style"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1Ebv5woQoMhLUVvh8MO1FmJRJEQAxZ9V9/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Jordanian house chips</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1bYwa1huOC5z7S3YswHXbjlLRR-6jz-Jc/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">ٍStudio 150 "promo ad"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1zUdWivypkv-zI1dtZnD55Y6FLkevrQWL/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Caloos Amazing workout</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1hXE1gUid3KpTl54080WKWhKv9AYteFad/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Vodafone cash "animation"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/12rwlocHoJXz8DfoMLflcU8AnFdZ1c3o2/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Fifa game play</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1j76aGcrflGVSnnCxSMv32_q3tCq_VAg4/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Animals & doctors "animation"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1Chltm3DWPq_FQWcr2PRPzEOKtWb6gtDG/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">digest "indian"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1Asy6jbe5c_JM3Mmsvi8nUUOSf2YgWy8f/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Bazzier food</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/19VEon03ny49QLGO-ry2hc_6ZWfecjh0-/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Caffe promo</p>
//           </div>
//           {/* <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1rJ7DoYB2xmeTg8tP3lTreGrDTK_QBoaF/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">fashion girl "promo"</p>
//           </div> */}
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1PQAABpSulZo-zVEp1sNGz8y8yb2pD28c/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">kala pani "indian"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1QXwTqpslQTq7yPKa6mtahPYL4Cjd--PU/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Party promo</p>
//           </div>
//           {/* <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1LJky1BHyf8HFft2gvh_gyYt3ytV0KTXV/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">fashion girl -2</p>
//           </div> */}
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1szK9DNsJpiPp97UpFzE-NxiiUtI-htWU/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">wedding sammary</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1q3rnl3b0qpFIw_C0IXfoZfsR3x8t3NUO/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">VFX change sky</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1ZVGjCYTd0qRc0O-O9hHK_2vOkaa4q_cR/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">dress and make up</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1OOL6lW0PVEKJyYrbLpJdogBrVoScnpMa/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">cool transitions with a cup</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1qkctn1BoeFXq77Vib4Wj9BywBWiIf8--/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Color correction</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1iwi2h3WSQsxI6V_aZt4XABLd4WA2_J5n/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">baby drvier "movie"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1TY9IHdIHO16A-V1UFMHTNEU2WGdG1mRJ/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Paris "movie"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1NHbl_8gvM7YB5UBdecGzDP_gS_U9f15C/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">the wolf of... "movie"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1jGyiR3Rm-KM_wMgA-Yo1Ob9FzgAgbEf4/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Millie bobby... "actress"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1krxdIkb3Zv4hswZywmNa-O-_WOHA478L/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">HBL Corporate</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1sgn0m4-YUQbXl0GM9zcQt1Dr0kkj2gWr/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Hoorain Fashion Film</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1ZJQ1ccqY8gph7pcoPgP7fg2q4jUrBFs4/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">simple promo</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1mBD8rKCWlpULuRsOKM0sV8ga5im7ToZC/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">hold tight</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/14oFx5Btp7AGRBt39vqcaVYJv-CA8Jx-2/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">The Farmer Boy</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1r9q1vL6V97gIkwGpdyfBStK_tntK6YRp/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Vlado Interview</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1UD1xIoRktDLCVpJCbXdFUtoKFnraoNvu/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Watch - Facebook</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1q3aThynnqwKkPQbr5bbVUUbtDM822Ye3/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">spicey "food promo"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1iZmxU4HBO2TcimZL68UVvdLZsctQ8tM1/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">to keep in shape...</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1Ko2SkWLc6V4_rnXgvu4LtXRJ8SvdlxiD/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">tiktok subtitles -1</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1KzmuoHwsOrhKfdm8-U8xL_AwGAl91wm5/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">tiktok subtitles -2</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1ncFSKz-L4A9CC-tsackpSjqfyvRLrLqq/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">tesla</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1bCezIbW9YsuXEytskLgsv558oTfT9dCA/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">journey in las...</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1lWuAhDLJjMYMtNYcN7uDD0bB226e7D9m/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">usman baig fragnances</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/12wd0DYqhBRA-z0ZGhgg-rplwNPkz57vn/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Goat</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1OOL6lW0PVEKJyYrbLpJdogBrVoScnpMa/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">shwepps</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1OOL6lW0PVEKJyYrbLpJdogBrVoScnpMa/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">beverly beauty clinics</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1SSQjEFW1_mKcr6HfgckOjiAd45xJ_r4D/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">mahmoud alaraby</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1xU5clGzG2RrTXw715c3xQEpp8bfAmZeW/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">to top "animation"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1eoHeQUxDAhtbykIzjUKuX_952eOIl101/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">god is great "shorts"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1CHUo-d1nYkyff8yBh0KsoFtB1H1emMKd/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">boxing "sound design"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1swXIqXyCY7q76WjtyuK5JsX5zWG9Qu7s/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">top 10 passive incomes</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/147QidHDb3-g4Rz_opH27klOWDyGyDlRS/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">best products for cars</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1WsXG5L0qpAdcH52xfBFf7tD2Ko4v1Enx/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">GTA5 "gaming video"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1b9h0il5fifrOFG9aD81dwNC6PDYStPn2/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">FIFA "gaming video"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1cSmqbbewuYtmqKM1pW9s0YqxhhtwraW7/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Mr Beast's content ...</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1AlqgOXp6BKzm5uh9SbAz7Jyv5gzSHniI/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Christmas "animation video"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/14gJdUnlUuEvLaHr1AvmgvUCDIr9ARX-W/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">World war 3 "animation video"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1pa8ujHaizAEzzLQCZWcH3V2Nd-EM8bIc/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">one day you ... "movie trailer"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1QFRcHNEOQ_a-aVlk38bnt20XMiI4ZuMM/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">fast coocking</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1mTEC-97qeWDsLG_FRbM04iFctr-7BDwO/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">space "shorts"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1KYKQ3nAyWiyzSTfyJFgI4z-Q3TGGPTZW/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Podcast</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1t-oN9YSF6TCK81ictEK_UxQEOj2WXhXS/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Carbon Underground</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/18XBu_ill7KwxuvEMX2l2a5YWFMZ9_tNm/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">cooking "shorts"</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1aHlBa43HXLzTKUeB5E6y1o_xU-4pW8__/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">war "cash cow"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1hrqUDp8prBXDBrpl8RAMNVaKnTxe-gbA/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Relations warnings "Cash Cow"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1XL1OtT9eRSfS3o7mDlLnFzvM68zh3jnk/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Do you like recieving it</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           {/* <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1NRml9saROGsSQHbG9PgrbB6clBWMdPcz/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Marketing video "shorts"</p>
//           </div> */}
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1fVVFLz2pnkGfXEtE_k0c8YPLUdopQDrF/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Showing the house "shorts"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1iAF0iov1ys3qiuBTUT7-6mM9YWk-EbDe/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Coaches "youtube edit"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1bltT97VP6JHIAbT1ipdFzB8fU2OFlee2/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Mysterious found things ever</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           {/* <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1N76S_HGD3Um2iHLOxZ0-zZ7F9yqgI-We/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">wedding</p>
//           </div> */}
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1MIzc9d5jnNWLppUndPxtjnk0W0KVJ6d-/preview"
//               width="640"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">this feeling "shorts"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/C_rSmt82c0c"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">green screen "animation"</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/OS2laXlOOmU"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">The Cons of Violence</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           {/* <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/7ijrW06MCj0"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">fast paced video</p>
//           </div> */}
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/PCCoVZVZkrQ"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">real state</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/gqdtjJqVv7Q"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">workouut</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/1FIA5PHPvbk"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">shoes promo</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           {/* <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/NxZCWXAuCRE"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">Perfume shop advertisement "Aloma"</p>
//           </div> */}
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/q2xk19Korw8"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">crypto currency</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/p4QwF6Wtcw8"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">movie conclusion</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/vQlp4nLR7DI"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">arabic chemistry lesson</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           {/* <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/oT77PdxMng8"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">pluto planet</p>
//           </div> */}
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/nyKqObmb2GY"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">minecraft</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/ncVtDlejXFo"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">Warren Buffet</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/W0PRxKJyyM8"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">Nature cinematic</p>
//           </div>
//         </div>

//         <div className="row mb-4 d-flex justify-content-center align-items-center gap-4">
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1aPw8wkh07g9iZWn5RxhD5T3r1cnFzEnP/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">best car's products</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               width="340"
//               height="195"
//               src="https://www.youtube.com/embed/q7gjaczQigo"
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//               className="portfolio-iframe"
//             ></iframe>
//             <p className="portfolio-par">Tourism Ireland</p>
//           </div>
//           <div className="portfolio-item col-lg-3 col-md-6 col-sm-12">
//             <iframe
//               className="portfolio-iframe"
//               src="https://drive.google.com/file/d/1epPbTVYl96TFQfyug_2JprVEp6M4ehId/preview"
//               allow="autoplay"
//             ></iframe>
//             <p className="portfolio-par">Real state ad</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
