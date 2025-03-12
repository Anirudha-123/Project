// import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     navigate("/"); // Navigate to home
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
//   };

//   return (
//     <>
//       <div className="footer1">
//         <div className="container footer">
//           <hr />
//           <footer className="py-5 ">
//             <div className="row">
//               <div className="col-6 col-md-2 mb-3">
//                 {/* <h5>Section</h5> */}
//                 <ul className="nav flex-column">
//                   {/* <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Home
//                     </a>
//                   </li> */}
//                   {/* <li className="nav-item mb-2">
//                     <Link to="/" className="nav-link p-0 text-body-secondary">
//                       Home
//                     </Link>
//                   </li> */}

//                   <li className="nav-item mb-2">
//                     <button
//                       className="nav-link text-body-secondary "
//                       onClick={handleHomeClick}
//                       // style={{ background: "none", border: "none", cursor: "pointer" }}
//                     >
//                       Home
//                     </button>
//                   </li>
//                   {/* <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Features
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Pricing
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       FAQs
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       About
//                     </a>
//                   </li> */}
//                 </ul>
//               </div>

//               <div className="col-6 col-md-2 mb-3">
//                 {/* <h5>Section</h5> */}
//                 <ul className="nav flex-column">
//                   {/* <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Home
//                     </a>
//                   </li> */}
//                   {/* <li className="nav-item mb-2">
//                     <Link to="/" className="nav-link p-0 text-body-secondary">
//                       Home
//                     </Link>
//                   </li> */}{" "}
//                   {/* <li className="nav-item mb-2">
//                     <button
//                       className="nav-link text-body-secondary "
//                       onClick={handleHomeClick}
//                       // style={{ background: "none", border: "none", cursor: "pointer" }}
//                     >
//                       Home
//                     </button>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Features
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Pricing
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       FAQs
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       About
//                     </a>
//                   </li> */}
//                 </ul>
//               </div>

//               <div className="col-6 col-md-2 mb-3">
//                 {/* <h5>Section</h5> */}
//                 <ul className="nav flex-column">
//                   {/* <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Home
//                     </a>
//                   </li> */}
//                   {/* <li className="nav-item mb-2">
//                     <Link to="/" className="nav-link p-0 text-body-secondary">
//                       Home
//                     </Link>
//                   </li> */}
//                   <li className="nav-item mb-2">
//                     <button
//                       className="nav-link text-body-secondary "
//                       onClick={handleHomeClick}
//                       // style={{ background: "none", border: "none", cursor: "pointer" }}
//                     >
//                       Home
//                     </button>
//                   </li>
//                   {/* <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Features
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       Pricing
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       FAQs
//                     </a>
//                   </li>
//                   <li className="nav-item mb-2">
//                     <a href="#" className="nav-link p-0 text-body-secondary">
//                       About
//                     </a>
//                   </li> */}
//                 </ul>
//               </div>

//               <div className="col-md-5 offset-md-1 mb-3">
//                 <form>
//                   <h5>Subscribe to our newsletter</h5>
//                   <p>Monthly digest of what's new and exciting from us.</p>
//                   <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//                     <label htmlFor="newsletter1" className="visually-hidden">
//                       Email address
//                     </label>
//                     <input
//                       id="newsletter1"
//                       type="text"
//                       className="form-control"
//                       placeholder="Email address"
//                     />
//                     <button className="btn btn-primary" type="button">
//                       Subscribe
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
//               <p>© 2024 Company, Inc. All rights reserved.</p>
//               <ul className="list-unstyled d-flex">
//                 <li className="ms-3">
//                   <a className="link-body-emphasis" href="#">
//                     <svg className="bi" width="24" height="24">
//                       <use xlinkHref="#twitter"></use>
//                     </svg>
//                   </a>
//                 </li>
//                 <li className="ms-3">
//                   <a className="link-body-emphasis" href="#">
//                     <svg className="bi" width="24" height="24">
//                       <use xlinkHref="#instagram"></use>
//                     </svg>
//                   </a>
//                 </li>
//                 <li className="ms-3">
//                   <a className="link-body-emphasis" href="#">
//                     <svg className="bi" width="24" height="24">
//                       <use xlinkHref="#facebook"></use>
//                     </svg>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

// // // import { Link } from "react-router-dom";

// // // const Footer = () => {
// // //   return (
// // //     <div className="footer1">
// // //       <div className="container footer">
// // //         <hr />
// // //         <footer className="py-5">
// // //           <div className="row">
// // //             <div className="col-6 col-md-2 mb-3">
// // //               <h5>Section</h5>
// // //               <ul className="nav flex-column">
// // //                 <li className="nav-item mb-2">
// // //                   <Link to="/" className="nav-link p-0 text-body-secondary">
// // //                     Home
// // //                   </Link>
// // //                 </li>
// // //                 <li className="nav-item mb-2">
// // //                   <Link
// // //                     to="/features"
// // //                     className="nav-link p-0 text-body-secondary"
// // //                   >
// // //                     Features
// // //                   </Link>
// // //                 </li>
// // //                 <li className="nav-item mb-2">
// // //                   <Link
// // //                     to="/pricing"
// // //                     className="nav-link p-0 text-body-secondary"
// // //                   >
// // //                     Pricing
// // //                   </Link>
// // //                 </li>
// // //                 <li className="nav-item mb-2">
// // //                   <Link to="/faqs" className="nav-link p-0 text-body-secondary">
// // //                     FAQs
// // //                   </Link>
// // //                 </li>
// // //                 <li className="nav-item mb-2">
// // //                   <Link
// // //                     to="/about"
// // //                     className="nav-link p-0 text-body-secondary"
// // //                   >
// // //                     About
// // //                   </Link>
// // //                 </li>
// // //               </ul>
// // //             </div>

// // //             <div className="col-md-5 offset-md-1 mb-3">
// // //               <form>
// // //                 <h5>Subscribe to our newsletter</h5>
// // //                 <p>Monthly digest of what's new and exciting from us.</p>
// // //                 <div className="d-flex flex-column flex-sm-row w-100 gap-2">
// // //                   <label htmlFor="newsletter1" className="visually-hidden">
// // //                     Email address
// // //                   </label>
// // //                   <input
// // //                     id="newsletter1"
// // //                     type="text"
// // //                     className="form-control"
// // //                     placeholder="Email address"
// // //                   />
// // //                   <button className="btn btn-primary" type="button">
// // //                     Subscribe
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>

// // //           <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
// // //             <p>© 2024 Company, Inc. All rights reserved.</p>
// // //             <ul className="list-unstyled d-flex">
// // //               <li className="ms-3">
// // //                 <a className="link-body-emphasis" href="#">
// // //                   <svg className="bi" width="24" height="24">
// // //                     <use xlinkHref="#twitter"></use>
// // //                   </svg>
// // //                 </a>
// // //               </li>
// // //               <li className="ms-3">
// // //                 <a className="link-body-emphasis" href="#">
// // //                   <svg className="bi" width="24" height="24">
// // //                     <use xlinkHref="#instagram"></use>
// // //                   </svg>
// // //                 </a>
// // //               </li>
// // //               <li className="ms-3">
// // //                 <a className="link-body-emphasis" href="#">
// // //                   <svg className="bi" width="24" height="24">
// // //                     <use xlinkHref="#facebook"></use>
// // //                   </svg>
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </footer>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Footer;

// // import { useNavigate } from "react-router-dom";

// // const Footer = () => {
// //   const navigate = useNavigate();

// //   const handleHomeClick = () => {
// //     navigate("/"); // Navigate to home
// //     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
// //   };

// //   return (
// //     <>
// //       <div className="footer1">
// //         <div className="container footer">
// //           <hr />
// //           <footer className="py-5 ">
// //             <div className="row">

// //               <div className="col-6 col-md-2 mb-3">
// //                 <h5>Section</h5>
// //                 <ul className="nav flex-column">
// //                   <li className="nav-item mb-2">
// //                     <button
// //                       className="nav-link p-0 text-body-secondary"
// //                       onClick={handleHomeClick}
// //                       style={{ background: "none", border: "none", cursor: "pointer" }}
// //                     >
// //                       Home
// //                     </button>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <a href="#" className="nav-link p-0 text-body-secondary">
// //                       Features
// //                     </a>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <a href="#" className="nav-link p-0 text-body-secondary">
// //                       Pricing
// //                     </a>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <a href="#" className="nav-link p-0 text-body-secondary">
// //                       FAQs
// //                     </a>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <a href="#" className="nav-link p-0 text-body-secondary">
// //                       About
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </div>

// //             </div>
// //           </footer>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Footer;



import "bootstrap-icons/font/bootstrap-icons.min.css";

const Footer = () => {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">
              © 2024 Company, Inc
            </span>
          </div>
          {/* 
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul> */}
          {/* <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <i class="bi bi-facebook"></i>
              </a>
            </li> */}
          {/* </ul> */}
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <i className="bi bi-twitter"></i> {/* Correct Class */}
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <i className="bi bi-instagram"></i> {/* Correct Class */}
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <i className="bi bi-facebook"></i> {/* Correct Class */}
              </a>
            </li>
          </ul>
        </footer>
      </div>
      ;
    </>
  );
};

export default Footer;

