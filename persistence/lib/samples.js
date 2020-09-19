import { UpdateCondition } from './ConditionFactory';

const qualificationsDifferent = (sampleOne, sampleTwo) => {
  const qualifications = ['genders','regions','householdIncomes','ages','employments'];

  return qualifications.filter(q => compareQualifications(sampleOne[q], sampleTwo[q])).length
}

const compareQualifications = (qualOne, qualTwo) => {
  return (
    qualOne.length !== qualTwo.length ||
    qualOne.filter(qualInStudy => qualTwo.find(qualInProj => qualInProj === qualInStudy )).length !== qualOne.length
  )
}

// Delete natrep if project doesnt have natrep sample and study does
// Study has to have a sample, and then does the project have a sample,
const deleteNatRepCondition = (projectSample, studySample) => (studySample && studySample.natrep) && (!projectSample || !projectSample.natrep)

// Create natrep if project has a sample and it is natrep
// and there isn't a studySample or studySample isnt natrep
const createNatRepCondition = (projectSample, studySample) => (projectSample && projectSample.natrep) && (!studySample || !studySample.natrep)

const createCustomCondition = (projectSample, studySample) => (
  (projectSample && !projectSample.natrep) &&
  (!studySample || studySample.natrep)
);

const updateCustomCondition = (projectSample, studySample) => (
  // Both have samples
  (studySample && projectSample) &&
  // Neither sample is natrep
  (!studySample.natrep && !projectSample.natrep ) &&
  qualificationsDifferent(projectSample, studySample)
)

const deleteCustomCondition = (projectSample, studySample) => (
  !projectSample && studySample && !studySample.natrep ||
  (projectSample && projectSample.natrep) && studySample && !studySample.natrep
)

const deleteNatRep = new UpdateCondition('deleteNatRepSample', deleteNatRepCondition)
const createNatRep = new UpdateCondition('createNatRepSample', createNatRepCondition)
const createCustom = new UpdateCondition('createCustomSample', createCustomCondition);
const updateCustom = new UpdateCondition('updateCustomSample', updateCustomCondition)
const deleteCustom = new UpdateCondition('deleteCustomSample', deleteCustomCondition)

export const samplesConditions = [
  deleteNatRep,
  deleteCustom,
  createNatRep,
  createCustom,
  updateCustom,
]
