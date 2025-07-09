import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState(false);        // scrollY wala
  const [openMenu, setOpenMenu] = useState(false);    // sidebar menu
  const [openUser, setOpenUser] = useState(false);    // profile options
  const { pathname } = useLocation();

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const isActive = () => {
    setActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);

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

        {/* -------- Mobile Menu + User -------- */}
        <div className="mobile-right">
          {currentUser && (
            <div className="mobile-user" onClick={() => setOpenUser(!openUser)}>
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                alt=""
              />
              <span>{currentUser.username}</span>
              {openUser && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link to="mygigs" className="link">Gigs</Link>
                      <Link to="add" className="link">Add New Gig</Link>
                    </>
                  )}
                  <Link to="orders" className="link">Orders</Link>
                  <Link to="messages" className="link">Messages</Link>
                  <Link className="link">Logout</Link>
                </div>
              )}
            </div>
          )}
          
          <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FaXmark /> : "☰"}
          </div>

        </div>

        <div className={`links ${openMenu ? "open" : ""}`}>
          <div className="link-items">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button>Join</button>}
            {currentUser && (
              <div className="user" onClick={() => setOpenUser(!openUser)}>
                <img
                  src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                  alt=""
                />
                <span>{currentUser.username}</span>
                {openUser && (
                  <div className="options">
                    {currentUser.isSeller && (
                      <>
                        <Link to="mygigs" className="link">Gigs</Link>
                        <Link to="add" className="link">Add New Gig</Link>
                      </>
                    )}
                    <Link to="orders" className="link">Orders</Link>
                    <Link to="messages" className="link">Messages</Link>
                    <Link className="link">Logout</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
