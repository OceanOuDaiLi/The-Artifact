import Link from "next/link";
// import box_logo from "../public/logo_white.png";
import Head from 'next/head';
import { Fragment } from "react";

const Layout = props => {
  return (
    <Fragment>
      <Head>
        <title>The Artifact|Home</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Most Reliable News Feed" />
        <meta
          name="author"
          content="Sebastian Gruia https://sebagruia.github.io/SebastianGruia-Project-Page/"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Quicksand:300,400&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/388729e045.js" crossorigin="anonymous"></script>
      </Head>
      <header>
        <ul className="nav">
          <li className="nav-element nav-logo">
            <div className="box-logo">
              {/* <img src="https://i.postimg.cc/x8DLqWCw/logo-white.png" alt="A white box" /> */}
              <img src="/images/logo_white.png" alt="A white box" />
            </div>
            <div className="logo-text">
              <h1>The Artifact</h1>
              <h5>News You Can Trust</h5>
            </div>
          </li>
            <li className="nav-links">
              <Link href="/" >
                <a>Deutchland - Top Headlines</a>
              </Link>
              <Link href="/science" >
                <a>Science</a>
              </Link>
            </li>
        </ul>
      </header>
      {props.children}

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
        .container {
          width: 100%;
          background-color: #000;
          justify-content: center;
        }

        header {
          position:fixed;
          top:0;
          left:0;
          display: flex;
          width: 100%;
          margin: 0 auto;
          justify-content: center;
          height: 150px;
          background-color: #000;
        }

        .nav {
          display: flex;
          width: 992px;
          justify-content: center;
          align-items: center;
          padding: 0;
        }
        .nav-logo {
          display: flex;
          margin-right:auto;
          margin-left:20px;
        }
        .nav-links{
          display:flex;
          height:50px;
          align-items:flex-end;
          font-size:1.1rem;
          padding-top: 11px;
          margin-right: 20px;
        }

        .nav-links a{
          padding-right:10px;
        }
        .box-logo {
          width: 70px;
          height: auto;
          margin-right: 10px;
        }

        .logo-text h1,
        .logo-text h5 {
          margin: -8px 0 0 0;
          color: #ededec;
        }
        .logo-text h1 {
          font-size: 2.8rem;
          font-variant: small-caps;
        }
        .logo-text h5 {
          font-family: "Quicksand", sans-serif;
          font-weight: 300;
          font-size: 1rem;
        }

      `}</style>

      {/* =====GLOBAL STYLES===== */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Open Sans Condensed", sans-serif;
          font-size: 16px;
          background-color: #fff;
        }
        a {
          color: #ededec;
          text-decoration: none;
        }
        a:hover {
          color: #72c1bf;
        }
        img {
          width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;