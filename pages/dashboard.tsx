import { AppLayout } from "../components/AppLayout";
import { DashBoard } from "../components/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadHeroes, selectHeroes } from "../lib/slices/heroSlice";

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadHeroes());
  }, [dispatch]);

  const heroes = useSelector(selectHeroes);

  return (
    <AppLayout>
      <DashBoard heroes={heroes}/>
    </AppLayout>
  );
};
