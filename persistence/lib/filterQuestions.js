import { UpdateCondition, answersMatch, optionsMatch } from './ConditionFactory';

const filterQuestionOptions = ['question', 'requireAllAnswers', 'multipleAnswers']

const filterQuestionDifferent = (projectQuestion, studyQuestion)  => {
  return !answersMatch(projectQuestion, studyQuestion) && !optionsMatch(projectQuestion, studyQuestion, filterQuestionOptions)
}

const deleteCondition = (projectQuestion, studyQuestion) => !projectQuestion && studyQuestion
const updateCondition = (projectQuestion, studyQuestion) => studyQuestion && filterQuestionDifferent(projectQuestion, studyQuestion)
const createCondition = (projectQuestion, studyQuestion) => projectQuestion && !studyQuestion

const deleteFilterQuestion = new UpdateCondition('deleteFilterQuestions', deleteCondition)
const updateFilterQuestion = new UpdateCondition('updateFilterQuestions', updateCondition)
const createFilterQuestion = new UpdateCondition('createFilterQuestions', createCondition)

export const filterQuestionsConditions = [ deleteFilterQuestion, updateFilterQuestion, createFilterQuestion ]
