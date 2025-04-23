import React from "react";
import RadishHero from "../Components/RadishPlan/RadishHero";
import RadishProjectOverview from "../Components/RadishPlan/RadishProjectOverview";
import RadishDesignProcess from "../Components/RadishPlan/RadishDesignProcess";
import RadishDesignPhase from "../Components/RadishPlan/RadishDesignPhase";

const RadishPlansPage = () => {
  return (
    <div>
      <RadishHero />
      <RadishProjectOverview />
      <RadishDesignProcess />
      <RadishDesignPhase />
    </div>
  );
};

export default RadishPlansPage;
