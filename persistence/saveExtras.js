import * as conditions from './lib';

export default {
  actions: {
    saveCustomCallToActions({ dispatch, getters }) {
      const customCallToActions = getters.customCallToActions
      const studies = getters.studiesCustomisations('customActions')

      studies.forEach(({ studyId, customActions }) => {
        const condition = conditions.customActions.find(condition => condition.check(customActions, customCallToActions))
        if (condition) dispatch(condition.action, studyId)
      })
    },
    saveFilterQuestions({ dispatch, getters }) {
      const [projectQuestion] = getters.filterQuestions;
      const studies = getters.studiesCustomisations('filterQuestions');

      studies.forEach(study => {
        const [studyQuestion] = study.filterQuestions;
        const condition = conditions.filterQuestions.find(condition => condition.check(projectQuestion, studyQuestion));

        if (condition) dispatch(condition.action, study);
      })
    },
    saveSamples({ dispatch, getters }) {
      const [projectSample] = getters.samples
      const studies = getters.studiesCustomisations('samples');

      studies.forEach(study => {
        const [studySample] = study.samples
        const conditionList = conditions.samples.filter(condition => condition.check(projectSample, studySample));

        if (conditionList.length) Promise.all(conditionList.map(async e => dispatch(e.action, study)));
      })
    },
    saveCustomQuestions({ dispatch, getters }) {
      const [projectCustomQuestion] = getters.customQuestions
      const studies = getters.studiesCustomisations('customQuestions');

      studies.forEach(study => {
        const [studyCustomQuestion] = study.customQuestions
        const condition = conditions.customQuestions.find(condition => condition.check(projectCustomQuestion, studyCustomQuestion));

        if (condition) dispatch(condition.action, study);
      })
    }
  }
}
