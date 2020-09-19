import { UpdateCondition } from './ConditionFactory';

const actionsInStudy = (projectActions, studyActions) => projectActions.filter(action => studyActions.find(studyAct => studyAct === action))

const actionsNotSameLength = (projectActions, studyActions) => projectActions.length !== studyActions.length
const differentActions = (projectActions, studyActions) => actionsInStudy(projectActions, studyActions).length !== studyActions.length

const createConditonOne = new UpdateCondition('createCustomActions', differentActions)
const createConditonTwo = new UpdateCondition('createCustomActions', actionsNotSameLength)

// Both actions call createCustomActions because they check for if the projectActions are different.
// Even if a delete is required it calls createCustomActions with []
export const customActionsConditions = [ createConditonOne, createConditonTwo ]
