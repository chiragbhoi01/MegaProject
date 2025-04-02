import React from "react";
import { Container, Logo, LogoutBtn } from "../components";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.authStatus);
  const navigate = useNavigate();
  const navitems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header>
      <Container>
        <nav>
          <div className="mr-4">
            <Logo/>
          </div>
          <ul>
            {navitems.map((items) => (
              items ? <li key={items.name}>
                <button 
                className="inline-block px-6 py-6"
                onClick={() => navigate(items.slug)}></button>
              </li> : null
            ))}
            {authStatus && (
              <li >
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header;
