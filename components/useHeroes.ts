import { useState, useEffect } from "react";
import { Hero } from "../lib/Hero";
import { heroService } from "../lib/heroService";
import { useMessageAction } from "./MessageProvider";
import { useRouter } from "next/router";

export function useHeroes(id?: number) {
  const { pathname } = useRouter();
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const { add } = useMessageAction();

  useEffect(() => {
    const getHeroes = async () => {
      const h = await heroService.getHeroes();
      setHeroes(h);
    };

    if (!heroes.length) {
      getHeroes();
      add("HeroService: fetched heroes");
    }
  }, [pathname]);

  const [hero, setHero] = useState<Hero>();
  useEffect(() => {
    const getHero = async (id: number) => {
      const h = await heroService.getHero(id);
      setHero(h);
    };

    if (!hero && id) {
      getHero(id);
      add(`HeroService: fetched hero id=${id}`);
    }
  }, [pathname, id]);

  const updateHero = async (hero: Hero) => {
    await heroService.updateHero(hero);
  };

  return { heroes, hero, updateHero };
}
