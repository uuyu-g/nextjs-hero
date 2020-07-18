import { Hero } from "./Hero";

const baseUrl = "/api/heroes";

export const getHeroes = async (): Promise<Hero[]> => {
  return fetch(baseUrl).then((res) => res.json());
};

export const getHero = async (id: number): Promise<Hero> => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const updateHero = async (hero: Hero): Promise<Hero> => {
  const res = await fetch(`${baseUrl}/${hero.id}`, {
    method: "PUT",
    body: JSON.stringify(hero),
  });
  return (await res.json()) as Hero;
};

export const addHero = async (hero: Hero): Promise<Hero> => {
  const res = await fetch(`${baseUrl}`, {
    method: "POST",
    body: JSON.stringify(hero),
  });
  return (await res.json()) as Hero;
};

export const deleteHero = async (hero: Hero): Promise<Hero> => {
  const res = await fetch(`${baseUrl}/${hero.id}`, {
    method: "DELETE",
  });
  return (await res.json()) as Hero;
};

export const searchHeroes = async (term: string): Promise<Hero[]> => {
  if (!term.trim()) {
    return [];
  }

  return fetch(`${baseUrl}?name=${term}`).then((res) => res.json());
};
