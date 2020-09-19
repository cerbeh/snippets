import { UpdateCondition, answersMatch, optionsMatch } from './ConditionFactory'

const customQuestionOptions = ['question', 'answerType', 'fixOther', 'instruction', 'randomiseAnswers', 'type']

const customQuestionDifferent = (questionOne, questionTwo) => (
  !optionsMatch(questionOne, questionTwo, customQuestionOptions) && !answersMatch(questionOne, questionTwo)
)

const deleteCondition = (projectQuestion, studyQuestion) => !projectQuestion && studyQuestion
const updateCondition = (projectQuestion, studyQuestion) => (
  (projectQuestion && studyQuestion) &&
  customQuestionDifferent(projectQuestion, studyQuestion)
)
const createCondition = (projectQuestion, studyQuestion) => projectQuestion && !studyQuestion

const deleteCustomQuestion = new UpdateCondition('deleteCustomQuestions', deleteCondition)
const updateCustomQuestion = new UpdateCondition('updateCustomQuestions', updateCondition)
const createCustomQuestion = new UpdateCondition('createCustomQuestions', createCondition)

export const customQuestionsConditions = [ deleteCustomQuestion, updateCustomQuestion, createCustomQuestion ]
