import React from "react";
import EaseFarmHero from "../Components/EaseFarm/EaseFarmHero";
import EaseFarmOverview from "../Components/EaseFarm/EaseFarmOverview";
import EaseFarmDesignProcess from "../Components/EaseFarm/EaseFarmDesignProcess";
import EaseFarmDesignPhase from "../Components/EaseFarm/EaseFarmDesignPhase";
import EaseFarmInformation from "../Components/EaseFarm/EaseFarmInformation";
import EaseFarmWhatILearnt from "../Components/EaseFarm/EaseFarmWhatILearnt";

const EaseFarmsPage = () => {
  return (
    <div>
      <EaseFarmHero />
      <EaseFarmOverview />
      <EaseFarmDesignProcess />
      <EaseFarmDesignPhase />
      <EaseFarmInformation />
      <EaseFarmWhatILearnt />
    </div>
  );
};

export default EaseFarmsPage;
