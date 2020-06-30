import { HeroDetail, useHeroDetail } from "../../components/HeroDetail";
import { AppLayout } from "../../components/AppLayout";

export default () => {
  const { hero, save, goBack } = useHeroDetail();

  if (!hero) {
    return (
      <AppLayout>
        <div>loading...</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <HeroDetail hero={hero} goBack={goBack} save={save}/>
    </AppLayout>
  );
};
