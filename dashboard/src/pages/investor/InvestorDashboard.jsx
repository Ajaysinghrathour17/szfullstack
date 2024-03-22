import React from 'react';
import "../../styles/investor.css";
import { Link } from 'react-router-dom';
import szlogo from '../../assets/szlogo.png';
import { FaHome,FaFolderOpen,FaSignOutAlt,  } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBox } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BiPieChartAlt } from "react-icons/bi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoNewspaperSharp,IoPersonAddSharp } from "react-icons/io5";


const Investor = () => {
  return (
    <main>
      <div className='mainInvestor'>
        <div className='InvesHeader'>
          <div className='headerImage'>
            <img src={szlogo} alt='Your Image' />
          </div>
          <div className='headerLink'>
            <ul>
            <div className='link1'>
            <li>
                <Link to="">
                  My SIP/SIP 
                </Link>
              </li>
              </div>
              <div className='link2'>
              <li>
                <Link to=""> <span className="blinking">⚠️</span>
                  My Alert   |
                </Link>
              </li>
              </div>
              <div className='link3'>
              <li>
                <Link to=""> <span className="blinking">🛒</span>
                  My Transaction card ()  |
                </Link>
              </li>
              </div>
            
            </ul>
          </div>
        </div>
      <div className='sidebarSection'>
      <p>hellos</p>
      <div className='innerSection'>
     <p>hellos</p>
       
       <ul>
        <div className='linkSectionTwo'>
        <li> <Link to=''> <FaHome size={15} /> Home</Link></li>
       </div>
       <div className='linkSectionTwo'>
        <li> <Link to=''> <FaFolderOpen size={15} /> Portfolio </Link></li>
       </div>
       <div className='linkSectionTwo'>
        <li> <Link to=''><GrTransaction  size={15}/> Transaction online</Link></li>
       </div>
       <div className='linkSectionTwo'>
        <li> <Link to=''> <MdAccountBox size={15}/> My account </Link></li>
       </div>
       <div className='linkSectionTwo'>
        <li> <Link to=''> <RiContactsFill size={15}/> Contact us </Link></li>
       </div>
       <div className='linkSectionTwo'>
        <li> <Link to=''><FaSignOutAlt size={15}/> Signout</Link></li>
       </div>
       

        </ul>
      <h5> Logged in as :</h5>
      </div>
      <h5> Your last logged in on : </h5>
      </div>
<div className='portfolioSection'>
    <h5> Portfolio snapshot</h5>
 <div className='innerPort'>

  <div className='row1'>
   
    <div className='column'>
    <BiPieChartAlt  size={60}/>
    </div>
    <div className='column'>
    <HiMiniBellAlert size={60} />
    </div>
  </div>
  <div className='row2'>
   
    <div className='column'>
    <IoPersonAddSharp size={60}/>
    </div>
    <div className='column'>
    
<IoNewspaperSharp size={60} />
    </div>

  </div>
 </div>
</div>

<div className='aboutSection'>
  <p>Important/Disclaimer: We strive to keep our records updated at all times. However there may be delays in updating our records or there may be changes which we are not aware of. If you come across any errors or omissions please tell us immediately. We will not accept liability for any claims for damages or loss arising from an inaccurate record. Any valuations quoted are the most recent available to us and you are not guaranteed to receive these amounts if you wish to withdraw money from your investments.

</p>
</div>

      </div>
    </main>
  );
};

export default Investor;