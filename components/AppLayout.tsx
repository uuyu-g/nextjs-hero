import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Messages } from "./Messages";

export const AppLayout: React.FC = (props) => {
  const [title, setTitle] = useState("Tour of Hero");

  return (
    <>
      <main>
        <Head>
          <title>{title}</title>
        </Head>

        <h1>{title}</h1>
        <nav>
          <Link href="/hero">
            <a>Heroes</a>
          </Link>
          <Link href="/dashboard">
            <a>DashBoard</a>
          </Link>
        </nav>

        {props.children}

        <Messages />
      </main>

      <style jsx>{`
        h1 {
          font-size: 1.2em;
          margin-bottom: 0;
        }
        h2 {
          font-size: 2em;
          margin-top: 0;
          padding-top: 0;
        }
        nav a {
          padding: 5px 10px;
          text-decoration: none;
          margin-top: 10px;
          display: inline-block;
          background-color: #eee;
          border-radius: 4px;
        }
        nav a:visited,
        a:link {
          color: #334953;
        }
        nav a:hover {
          color: #039be5;
          background-color: #cfd8dc;
        }
        nav a.active {
          color: #039be5;
        }
      `}</style>
    </>
  );
};
