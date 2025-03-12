


// //import "bootstrap-icons/font/bootstrap-icons.min.css";
// import { BiLogoInstagramAlt } from "react-icons/bi";
// import { FaTwitter } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";




// const Footer = () => {
//   return (
//     <>
//       <div class="container">
//         <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//           <div class="col-md-4 d-flex align-items-center">
//             <a
//               href="/"
//               class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
//             >
//               <svg class="bi" width="30" height="24">
//                 <use xlink:href="#bootstrap"></use>
//               </svg>
//             </a>
//             <span class="mb-3 mb-md-0 text-body-secondary">
//               © 2024 Company, Inc
//             </span>
//           </div>
         
//           <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
//             <li className="ms-3">
//               <a className="text-body-secondary" href="#">
//                 <FaTwitter />

//               </a>
//             </li>
//             <li className="ms-3">
//               <a className="text-body-secondary" href="#">
//                <BiLogoInstagramAlt />

//               </a>
//             </li>
//             <li className="ms-3">
//               <a className="text-body-secondary" href="#">
//               <BiLogoGmail />

//               </a>
//             </li>
//           </ul>
//         </footer>
//       </div>
//       ;
//     </>
//   );
// };

// export default Footer;

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2024 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://x.com/Anirudh1681"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://instagram.com/_the_anirudha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoInstagramAlt />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="mailto:anirudhakolekar65@gmail.com"
              >
                <BiLogoGmail />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;


