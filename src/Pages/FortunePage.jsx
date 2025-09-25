import React from "react";
import FortuneHero from "../Components/Fortune/FortuneHero";
import FortuneOverview from "../Components/Fortune/FortuneOverview";
import FortuneDesignProcess from "../Components/Fortune/FortuneDesignProcess";
import FortuneUserPerson from "../Components/Fortune/FortuneUserPerson";
import FortuneInfromation from "../Components/Fortune/FortuneInfromation";
import FortuneWhatILearnt from "../Components/Fortune/FortuneWhatILearnt";

const FortunePage = () => {
  return (
    <div>
      <FortuneHero />
      <FortuneOverview />
      <FortuneDesignProcess />
      <FortuneUserPerson />
      <FortuneInfromation />
      <FortuneWhatILearnt />
    </div>
  );
};

export default FortunePage;
