import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import szlogo from "../assets/szlogo.png";
import { FaSearch } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
// import "../styles/dashboard.css";
import "../styles/dashboard.scss"

// import "../styles/app.scss"
const Dashboard = () => {
  return (
    <div className="adminContainer ">
      {/* sidebar */}
      <AdminSidebar />

      {/* main */}
      <main>
        {/* Dashboard
      <br />
      <Link to="/admin/dashboard/form"
      >
      <button>Insurance form</button>
      </Link>

      <Link to="/admin/dashboard/test-form"
      >
      <button>Dropdown form</button>
      </Link>
      <div>
        <SearchBar />
      </div> */}

        <div className=" maindashboard">
          <div className="dash_Header">
            <ul className="Ul_header">
              <li style={{ float: "left" }}>
                <a href="#home">Home | </a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#news">Edit profile |</a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#contact">Change password | </a>
              </li>
              <li style={{ float: "left" }}>
                <a href="#about">Sign Out </a>
              </li>
              <li style={{ float: "right" }}>
                <a href="#about">login Traffic </a>
              </li>
              <li style={{ float: "right" }}>
                <a href="#about">Set Alert | </a>
              </li>
              <li style={{ float: "right" }}>
                <a href="#contact">BackUp |</a>
              </li>
              <li style={{ float: "right" }}>
                <a href="#news"> | Manage | </a>
              </li>
              <li style={{ float: "right" }}>
                <a href="#home" style={{ color: "red" }}>
                  {" "}
                  Premium Ads on{" "}
                </a>
              </li>
            </ul>
            <div className="centerImage">
              <img src={szlogo} width={140} height={140} alt="Your Image" />
            </div>
          </div>

          <div className="SearchSection">
            <div className="searchfield">
              <label>
                {" "}
                <b> Search investor -:</b>
              </label>
              <input type="text" placeholder="Search investor." />{" "}
              <button value="Submit">
                {" "}
                <FaSearch size={23} />
              </button>
            </div>
          </div>
          <section>
          <div className="LinkSection">
              <div className="table">
                <div className="dash_containers">
                  <h2>Client Management</h2>
                  <ul>
                    <li>
                      <Link to="/search-folio-investor">
                        Search Folio / Investor
                      </Link>
                    </li>
                    <li>
                      <Link to="/add-new-investor">Add New Investor</Link>
                    </li>
                    <li>
                      <Link to="/groups-families">Groups / Families</Link>
                    </li>
                    <li>
                      <Link to="/recently-added-investors">
                        Recently added Investors
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="dash_containers">
                  <h2>Data Management</h2>
                  <ul>
                    <li>
                      <Link to="/import-client-master">
                        Import Client Master
                      </Link>
                    </li>
                    <li>
                      <Link to="/import-transactions">Import Transactions</Link>
                    </li>
                    <li>
                      <Link to="/import-brokerage">Import Brokerage</Link>
                    </li>
                    <li>
                      <Link to="/import-large-files">Import Large File(s)</Link>
                    </li>
                  </ul>
                </div>

                <div className="dash_containers">
                  <h2>Risk Management</h2>
                  <ul>
                    <li>
                      <Link to="/investor-risk-profiles">
                        Investor Risk Profiles
                      </Link>
                    </li>
                    <li>
                      <Link to="/set-asset-allocation">
                        Set Asset Allocation
                      </Link>
                    </li>
                    <li>
                      <Link to="/set-risk-review-period">
                        Set Risk Review Period
                      </Link>
                    </li>
                    <li>
                      <Link to="/risk-review-log">Risk Review Log</Link>
                    </li>
                  </ul>
                </div>
                <div className="dash_containers">
                  <h2>Business Management</h2>
                  <ul>
                    <li>
                      <Link to="/distributor-network">Distributor Network</Link>
                    </li>
                    <li>
                      <Link to="/distributor-mapping">Distributor Mapping</Link>
                    </li>
                    <li>
                      <Link to="/transaction-mis">Transaction MIS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
