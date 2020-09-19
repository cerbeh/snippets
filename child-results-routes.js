/**
* We could use a routing pattern like this to allow for a single page toggle between a single study and project view
* It's clever as shit but Gawain doesn't have time to understand what im on about, it's not my job to do, and 2.0 probably won't even need it as a solution.
*/
const routes =
  { path: '/projects/:projectId/results',
    component: ProjectResults,
    props: true,
    meta: { scrollToTop: false, auth: 'user' },
    children: [
      {
        name: 'default', path: '', component: ProjectMemorability
      },
      {
        name: 'project-memorability',
        path: 'memorability',
        components: {
          default: ProjectMemorability,
          singleStudy: Memorability
        },
      },
      {
        name: 'project-love-hate',
        path: 'love-hate',
        components: {
          default: ProjectLoveHate,
          singleStudy: LoveHate
        },
        meta: { scrollToTop: false, auth: 'user' }
      },
      {
        name: 'project-association',
        path: 'association',
        components: {
          default: ProjectWordAssociation,
          singleStudy: WordAssociation
        },
        meta: { scrollToTop: false }
      },
      {
        name: 'project-actions',
        path: 'actions',
        component: {
          default: ProjectActions,
          singleStudy: Actions,
        },
        meta: { scrollToTop: false, auth: 'user' }
      },
      {
        name: 'project-quotes',
        path: 'quotes',
        component: {
          default: ProjectQuotes,
          singleStudy: Quotes,
        },
        meta: { scrollToTop: false, auth: 'user' }
      },
      {
        name: 'project-custom-question',
        path: 'custom-question',
        components: {
          default: ProjectCustomQuestionTab,
          singleStudy: CustomQuestionTab,
        },
        meta: { scrollToTop: false, auth: 'user' }
      },
    ]
  };
