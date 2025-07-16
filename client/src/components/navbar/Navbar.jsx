import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import axiosInstance from "../../utils/axiosInstance.js";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    setActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);

  useEffect(() => {
    const menu = document.getElementById("scrollingMenu");
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        {/* -------- Logo -------- */}
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>

        {/* -------- Mobile User -------- */}
        <div className="mobile-right">
          {currentUser && (
            <div className="mobile-user" onClick={() => setOpenUser(!openUser)}>
              <img
                src={
                  currentUser.data.img ||
                  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                }
                alt=""
              />
              <span>{currentUser.data.username}</span>
              {openUser && (
                <div className="options">
                  {currentUser.data.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}

          <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FaXmark /> : "☰"}
          </div>
        </div>

        {/* -------- Desktop Links -------- */}
        <div className={`links ${openMenu ? "open" : ""}`}>
          <div className="link-items">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>

            {!currentUser && (
              <>
                <Link to="/login" className="link">
                  <span>Sign in</span>
                </Link>
                <Link to="/register" className="link">
                  <button>Join</button>
                </Link>
              </>
            )}

            {currentUser && !currentUser.data.isSeller && (
              <span>Become a Seller</span>
            )}

            {currentUser && (
              <div className="user" onClick={() => setOpenUser(!openUser)}>
                <img
                  src={
                    currentUser.data.img ||
                    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                  }
                  alt=""
                />
                <span>{currentUser.data.username}</span>
                {openUser && (
                  <div className="options">
                    {currentUser.data.isSeller && (
                      <>
                        <Link to="/mygigs" className="link">
                          Gigs
                        </Link>
                        <Link to="/add" className="link">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link to="/orders" className="link">
                      Orders
                    </Link>
                    <Link to="/messages" className="link">
                      Messages
                    </Link>
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* -------- Bottom Menu -------- */}
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu-wrapper">
            <div className="menu" id="scrollingMenu">
              <span>Graphics & Design</span>
              <span>Digital Marketing</span>
              <span>Writing & Translation</span>
              <span>Video & Animation</span>
              <span>Music & Audio</span>
              <span>Programming & Tech</span>
              <span>Business</span>
              <span>Lifestyle</span>
              <span>Trending</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
