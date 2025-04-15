import React from "react";
import styles from "../../../styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div class={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        class={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" class={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 class="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </Link>
        <button
          type="button"
          class={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          class={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div class={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              class={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </Link>
            <Link href="/about" class={`${styles.nav_link}`}>
              About
            </Link>
            <Link href="/services" class={`${styles.nav_link}`}>
              Service
            </Link>
            <Link href="/menu" class={`${styles.nav_link}`}>
              Menu
            </Link>
            <div class={`${styles.dropdown}`}>
              <Link
                href="#"
                class={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div class={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <Link href="/Reservation" class={`${styles.dropdown_item}`}>
                  Reservation
                </Link>
                <Link href="/testimonial" class={`${styles.dropdown_item}`}>
                  Testimonial
                </Link>
              </div>
            </div>
            <a href="/contact" class={`${styles.nav_link}`}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
