import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectHeroes, addHero, deleteHero } from "../lib/slices/heroSlice";
import { Hero } from "../lib/Hero";
import { useAppDispatch } from "../store";

export const Heroes = () => {
  const dispatch = useAppDispatch();
  const heroes = useSelector(selectHeroes);
  const [name, setName] = useState("");

  const onAdd = async () => {
    if (!name) return;
    await dispatch(addHero({ name } as Hero));
    setName("");
  };

  const remove = (hero: Hero) => {
    dispatch(deleteHero(hero));
  };

  return (
    <>
      <h2>My Heroes</h2>

      <div>
        <label>
          Hero name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button onClick={onAdd}>add</button>
      </div>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link href={`/detail/[id]`} as={`/detail/${hero.id}`}>
              <a>
                <span className="badge" key={hero.id}>
                  {hero.id}
                </span>
                {hero.name}
              </a>
            </Link>
            <button
              className="delete"
              title="delete hero"
              onClick={() => remove(hero)}
            >
              x
            </button>
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
            position: relative;
            cursor: pointer;
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

          .heroes a {
            color: #333;
            text-decoration: none;
            position: relative;
            display: block;
            width: 250px;
          }

          .heroes a:hover {
            color: #607d8b;
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
            min-width: 16px;
            text-align: right;
            margin-right: 0.8em;
            border-radius: 4px 0 0 4px;
          }

          button {
            background-color: #eee;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            cursor: hand;
            font-family: Arial;
          }

          button:hover {
            background-color: #cfd8dc;
          }

          button.delete {
            position: relative;
            left: 194px;
            top: -32px;
            background-color: gray !important;
            color: white;
          }
        `}
      </style>
    </>
  );
};
