export type LawsuitContent = {
  realStories: {
    name: string;
    story: string;
  }[];

  eligibilityPoints: {
    title: string;
    description: string;
  }[];

  healthRisks: {
    number: string;
    title: string;
    description: string;
  }[];

  whoQualifies: {
    description: string;
  }[];

  compensation: {
    title: string;
    description: string;
  }[];

  pageContent: {
    mainTitle: string;
    mainParagraphs: string[];
    allegationsTitle: string;
    allegationsParagraph: string;
    allegationsSubtitle: string;
    eligibleTitle:string;
    eligibleParagrapg:string;
    eligibleSubtitle:string;
    healthRisksTitle: string;
    healthRisksParagraph: string;
    healthRisksSubtitle: string;
    whoQualifiesTitle: string;
    whoQualifiesParagraph: string;
    whoQualifiesSubtitle: string;
    compensationTitle: string;
    compensationParagraph: string;
    compensationSubtitle: string;
    realStoriesTitle: string;
    stepsTitle: string;
    stepsParagraph: string;
  };

  ctaContent: {
    title: string;
    description: string;
    buttonText: string;
  };

  steps: {
    step: number;
    title: string;
    description: string;
  }[];

 sectionIds: SectionIds;
};
export type SectionIds = {
  mainTitle: string;
  allegationsTitle: string;
  eligibleTitle:string;
  healthRisksTitle: string;
  whoQualifiesTitle: string;
  compensationTitle: string;
  realStoriesTitle: string;
  stepsTitle: string;
};

