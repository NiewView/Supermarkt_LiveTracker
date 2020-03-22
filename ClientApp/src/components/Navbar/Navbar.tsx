import "./navbar.styles.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonTypes } from "..";
import { useLocation } from "react-router-dom";

export interface NavbarProps {}

export function NavBar(props: NavbarProps) {
  let location = useLocation();
  console.log(location.pathname);

  const routes = [
    {
      icon: "info",
      href: "/about",
      active_href: ["/about"]
    },
    {
      icon: "shopping_cart",
      href: "/home",
      active_href: ["/", "/home"]
    },
    {
      icon: "account_circle",
      href: "/auth",
      active_href: ["/auth", "/register", "/updatestatus"]
    }
  ];

  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        {routes.map(item => {
          return (
            <li
              className={[
                "navbar__listitem",
                item.active_href.includes(location.pathname) ? "active" : ""
              ].join(" ")}
              key={item.href}
            >
              <Button
                className='navbar__button'
                Type={ButtonTypes.Link}
                href={item.href}
              >
                <span className='material-icons'>{item.icon}</span>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
