import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <header className="header_area">
        <div className="main_menu" id="mainNav">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h">
                <img src={ "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMi8wOTYvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzY4NzM2NTg3Mi5qcGc=" } alt=""/>
              </a>
              {/*<div className="collapse navbar-collapse offset" id="navbarSupportedContent">*/}
                {/*<ul className="nav navbar-nav menu_nav ml-auto">*/}
                  {/*<li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>*/}
                  {/*<li className="nav-item"><a className="nav-link" href="#feature">FEATURES</a></li>*/}
                  {/*<li className="nav-item"><a className="nav-link" href="#video">VIDEO</a>*/}
                    {/*<li className="nav-item"><a className="nav-link" href="#price">PRICING</a>*/}
                      {/*<li className="nav-item"><a className="nav-link" href="#screen">SCREENS</a>*/}
                        {/*<li className="nav-item submenu dropdown">*/}
                          {/*<a href="#" className="nav-link dropdown-toggle"*/}
                             {/*data-toggle="dropdown"*/}
                             {/*role="button"*/}
                             {/*aria-haspopup="true"*/}
                             {/*aria-expanded="false">Pages</a>*/}
                          {/*<ul className="dropdown-menu">*/}
                            {/*<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>*/}
                          {/*</ul>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item submenu dropdown">*/}
                          {/*<a href="#" className="nav-link dropdown-toggle"*/}
                             {/*data-toggle="dropdown"*/}
                             {/*role="button"*/}
                             {/*aria-haspopup="true"*/}
                             {/*aria-expanded="false">Blog</a>*/}
                          {/*<ul className="dropdown-menu">*/}
                            {/*<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>*/}
                            {/*<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>*/}
                          {/*</ul>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>*/}
                      {/*</li>*/}
                    {/*</li>*/}
                  {/*</li>*/}
                {/*</ul>*/}
              {/*</div>*/}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
