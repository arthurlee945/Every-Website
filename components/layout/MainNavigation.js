import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MainNavigation = () => {
  const router = useRouter();
  const handleLogoClick = (e) => {
    let lowerLetters = document.querySelectorAll('.lower');
    lowerLetters.forEach(letter => {
      letter.classList.toggle('logoToggle');
    })
    router.push('/');
  };
  useEffect(()=>{
    const logoBox = document.querySelector('.logo');
    let name = "EveryWebsiteAllAtOnce";
    for(let i = 0; i<name.length; i++){
      let newP = document.createElement('p');
      newP.innerHTML = name[i];
      if(i === 0 || i === 5 || i === 12 || i === 15 || i === 17){
        newP.classList.add('capital');
      }else{
        newP.classList.add('lower');
      }
      logoBox.appendChild(newP);
    }
    return(()=>{
      logoBox.innerHTML = ""
    })
  },[])
  const handleMobileMenuClick = (e) => {
    const mobileNav = document.querySelector(".mobile-nav__link-box");
    e.target.classList.toggle("rotate-nav");
    mobileNav.classList.toggle("rollback");
    setTimeout(() => {
      mobileNav.classList.toggle("drop-down");
    }, 100);
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={handleLogoClick}>

        </div>
        <nav className="header-container__desktop-nav">
          <ul>
            <li className="nav-link">
              <Link href="/product">Product</Link>
            </li>
            <li className="nav-link">
              <Link href="/resources">Resources</Link>
            </li>
            <li className="nav-link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav-link">
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="login-button">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <nav className="header-container__mobile-nav mobile-nav">
          <i
            className="fa-solid fa-plus mobile-nav__button"
            onClick={handleMobileMenuClick}
          ></i>
          <ul className="mobile-nav__link-box drop-down rollback">
            <li className="nav-link">
              <Link href="/product">Product</Link>
            </li>
            <li className="nav-link">
              <Link href="/resources">Resources</Link>
            </li>
            <li className="nav-link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav-link">
              <Link href="/contactus">Contact Us</Link>
            </li>
            <Link href="/login">
              <li className="login-button">Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
