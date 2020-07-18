import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "../lib/Hero";
import { useAppDispatch } from "../store";
import { searchHeroes } from "../lib/slices/heroSlice";
import { unwrapResult } from "@reduxjs/toolkit";

export const HeroSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const search = async (term: string) => {
    const result = await dispatch(searchHeroes(term)).then(unwrapResult);
    setHeroes(result);
  };

  return (
    <>
      <div id="search-component">
        <h4>
          <label htmlFor="search-box">Hero Search</label>
        </h4>

        <input id="search-box" onChange={(e) => search(e.target.value)} />

        <ul className="search-result">
          {heroes.map((hero) => (
            <li key={hero.id}>
              <Link href={`/detail/[id]`} as={`/detail/${hero.id}`}>
                <a> {hero.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .search-result li {
          border-bottom: 1px solid gray;
          border-left: 1px solid gray;
          border-right: 1px solid gray;
          width: 195px;
          height: 16px;
          padding: 5px;
          background-color: white;
          cursor: pointer;
          list-style-type: none;
        }

        .search-result li:hover {
          background-color: #607d8b;
        }

        .search-result li a {
          color: #888;
          display: block;
          text-decoration: none;
        }

        .search-result li a:hover {
          color: white;
        }
        .search-result li a:active {
          color: white;
        }
        #search-box {
          width: 200px;
          height: 20px;
        }

        ul.search-result {
          margin-top: 0;
          padding-left: 0;
        }
      `}</style>
    </>
  );
};
