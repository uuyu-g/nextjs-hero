import { NextApiRequest, NextApiResponse } from "next";
import { Hero } from "../../../lib/Hero";
import { HEROES } from "../../../api/mock-heroes";
import { Method } from "../type";

export default (req: NextApiRequest, res: NextApiResponse<Hero>) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  const index = HEROES.findIndex((hero) => hero.id === Number(id));

  switch (method as Method) {
    case "PUT":
      if (index >= 0) {
        const item = HEROES[index];
        const _body = JSON.parse(body);
        item.name = _body.name;
        console.log(`Edit: ${JSON.stringify(item)}`);
        res.status(200).json(item);
        return;
      }
      res.status(400);
      break;

    case "DELETE":
      if (index >= 0) {
        const [deleted] = HEROES.splice(index, 1);
        console.log(`Delete: ${JSON.stringify(deleted)}`);
        res.status(200).json(deleted);
        return;
      }
      res.status(400);
      break;

    case "POST":
    case "GET":
    default:
      const hero = HEROES.find((hero) => hero.id === Number(id));
      console.log(`Read: ${JSON.stringify(hero)}`);
      res.status(200).json(hero);
      break;
  }
};
