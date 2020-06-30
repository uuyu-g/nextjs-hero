import { Hero } from "./Hero";

class HeroService {
  url = "/api/heroes";

  async getHeroes(): Promise<Hero[]> {
    return fetch(this.url).then((res) => res.json());
  }

  async getHero(id: number): Promise<Hero> {
    return fetch(`${this.url}/${id}`).then((res) => res.json());
  }

  async updateHero(hero: Hero): Promise<Response> {
    return fetch(`${this.url}/${hero.id}`, {
      method: "POST",
      body: JSON.stringify(hero),
    });
  }
}

export const heroService = new HeroService();
