import { AppLayout } from "../components/AppLayout";
import { Heroes } from "../components/Heroes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadHeroes } from "../lib/slices/heroSlice";

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadHeroes());
  }, [dispatch]);

  return (
    <AppLayout>
      <Heroes />
    </AppLayout>
  );
};
