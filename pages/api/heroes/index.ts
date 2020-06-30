import { NextApiRequest, NextApiResponse } from "next";
import { Hero } from "../../../lib/Hero";
import { HEROES } from "../../../api/mock-heroes";

export default (req: NextApiRequest, res: NextApiResponse<Hero[]>) => {
  res.status(200).json(HEROES);
};
