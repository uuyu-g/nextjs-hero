import React, { useState } from "react";
import { Hero } from "../lib/Hero";
import { useRouter } from "next/router";
import { useHeroes } from "./useHeroes";

type Props = {
  hero: Hero;
  goBack: () => void;
  save: (hero: Hero) => void;
};

export const useHeroDetail = (): Props => {
  const router = useRouter();
  const { id } = router.query;
  const { hero, updateHero } = useHeroes(Number(id));

  const goBack = () => {
    router.back();
  };

  const save = (hero: Hero) => {
    updateHero(hero);
  };

  return { hero, save, goBack };
};

export const HeroDetail: React.FC<Props> = (props) => {
  const [heroName, setName] = useState(props.hero.name);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <h2>{heroName.toUpperCase()} Details</h2>
      <div>
        <span>id: </span>
        {props.hero.id}
      </div>
      <div>
        <label>
          name:
          <input
            type="text"
            placeholder="name"
            value={heroName}
            onChange={onChange}
          />
        </label>
      </div>
      <button
        onClick={() => props.save({ id: props.hero.id, name: heroName })}
      >
        save
      </button>
      <button onClick={props.goBack}>go back</button>
    </>
  );
};
