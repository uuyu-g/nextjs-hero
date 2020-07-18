import { NextApiRequest, NextApiResponse } from "next";
import { Hero } from "../../../lib/Hero";
import { HEROES } from "../../../api/mock-heroes";
import { Method } from "../type";

const genId = () => {
  return HEROES.length > 0
    ? Math.max(...HEROES.map((hero) => hero.id)) + 1
    : 11;
};

export default (req: NextApiRequest, res: NextApiResponse<Hero | Hero[]>) => {
  const { body, method, query } = req;

  switch (method as Method) {
    case "POST":
      const _body = JSON.parse(body);
      const newHero = {
        id: genId(),
        name: _body.name,
      };
      HEROES.push(newHero);
      console.log(`Add: ${JSON.stringify(newHero)}`);
      res.status(200).json(newHero);
      break;

    case "GET":
      const { name } = query;
      if (name == null) {
        console.log(`Heroes`);
        res.status(200).json(HEROES);
        break;
      }

      if (Array.isArray(name)) {
        console.log("Search: 配列は未実装");
        res.status(200).json(HEROES);
        break;
      }

      const searched = HEROES.filter((hero) => hero.name.includes(name));
      console.log(`Search: ${query.name}`);
      console.log("Searched: %s", searched.map(({ name }) => name).join(","));
      res.status(200).json(searched);
      break;

    default:
      res.status(200).json(HEROES);
      break;
  }
};
