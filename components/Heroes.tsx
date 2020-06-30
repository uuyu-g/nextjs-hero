import React from "react";
import { useHeroes } from "./useHeroes";
import Link from "next/link";

export const Heroes = () => {
  const { heroes } = useHeroes();

  return (
    <>
      <h2>My Heroes</h2>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link href={`/detail/${hero.id}`}>
              <a>
                <span className="badge" key={hero.id}>
                  {hero.id}
                </span>
                {hero.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>
        {`
          .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
          }
          .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #eee;
            margin: 0.5em;
            padding: 0.3em 0;
            height: 1.6em;
            border-radius: 4px;
          }
          .heroes li:hover {
            color: #607d8b;
            background-color: #ddd;
            left: 0.1em;
          }
          .heroes li.selected {
            background-color: #cfd8dc;
            color: white;
          }
          .heroes li.selected:hover {
            background-color: #bbd8dc;
            color: white;
          }
          .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #405061;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: 0.8em;
            border-radius: 4px 0 0 4px;
          }
        `}
      </style>
    </>
  );
};
