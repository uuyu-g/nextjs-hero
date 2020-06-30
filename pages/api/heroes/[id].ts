import { NextApiRequest, NextApiResponse } from "next";
import { Hero } from "../../../lib/Hero";
import { HEROES } from "../../../api/mock-heroes";

export default (req: NextApiRequest, res: NextApiResponse<Hero>) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  if (method === "POST") {
    const index = HEROES.findIndex((hero) => hero.id === Number(id));
    if (index >= 0) {
      const item = HEROES[index];
      const _body = JSON.parse(body)
      item.name = _body.name;
      console.log(`Edit: ${JSON.stringify(item)}`);
    }
    res.status(200);
  } else {
    const hero = HEROES.find((hero) => hero.id === Number(id));
    res.status(200).json(hero);
  }
};
