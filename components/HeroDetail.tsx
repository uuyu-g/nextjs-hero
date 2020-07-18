import React, { useState, useEffect } from "react";
import { Hero } from "../lib/Hero";
import { useRouter } from "next/router";
import { updateHero, loadHero } from "../lib/slices/heroSlice";
import { useAppDispatch } from "../store";
import { unwrapResult } from "@reduxjs/toolkit";

type Props = {
  hero: Hero;
  goBack: () => void;
  save: (hero: Hero) => void;
};

export const useHeroDetail = (): Props => {
  const router = useRouter();
  const { id } = router.query;

  const [hero, setHero] = useState<Hero | null>(null);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadHero(Number(id)))
      .then(unwrapResult)
      .then((hero) => {
        setHero(hero);
      });
  }, [id, dispatch]);

  const goBack = () => {
    router.back();
  };

  const save = (hero: Hero) => {
    dispatch(updateHero(hero));
  };

  return { hero, save, goBack };
};

export const HeroDetail: React.FC<Props> = (props) => {
  const { hero, goBack, save } = props;

  const [heroName, setName] = useState(hero.name);

  return (
    <>
      <h2>{heroName.toUpperCase()} Details</h2>
      <div>
        <span>id: </span>
        {hero.id}
      </div>
      <div>
        <label>
          name:
          <input
            type="text"
            placeholder="name"
            value={heroName}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <button onClick={() => save({ id: hero.id, name: heroName })}>
        save
      </button>
      <button onClick={goBack}>go back</button>

      <style jsx>{`
        label {
          display: inline-block;
          width: 3em;
          margin: 0.5em 0;
          color: #607d8b;
          font-weight: bold;
        }
        input {
          height: 2em;
          font-size: 1em;
          padding-left: 0.4em;
        }
        button {
          margin-top: 20px;
          font-family: Arial;
          background-color: #eee;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #cfd8dc;
        }
        button:disabled {
          background-color: #eee;
          color: #ccc;
          cursor: auto;
        }
      `}</style>
    </>
  );
};
