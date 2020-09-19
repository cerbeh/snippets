12|Study Title|1|tap||5|90|2||[0,1,2]|draft|0|0|2019-10-24 12:52:44.562 +00:00|2019-10-24 13:30:37.807 +00:00|||[{"id":"4ca1dab5-2d20-483e-877a-428658999bd7","respondents":"100","totalRespondents":"100","name":"Study Title - National Representative Sample","price":null,"quotas":[{"name":"Males 18-24","proportion":5.848,"genders":["male"],"ages":[18,19,20,21,22,23,24],"respondents":6},{"name":"Females 18-24","proportion":5.602,"genders":["female"],"ages":[18,19,20,21,22,23,24],"respondents":6},{"name":"Males 25-32","proportion":6.893,"genders":["male"],"ages":[25,26,27,28,29,30,31,32],"respondents":7},{"name":"Females 25-32","proportion":6.876,"genders":["female"],"ages":[25,26,27,28,29,30,31,32],"respondents":7},{"name":"Males 33-40","proportion":6.426,"genders":["male"],"ages":[33,34,35,36,37,38,39,40],"respondents":6},{"name":"Females 33-40","proportion":6.505,"genders":["female"],"ages":[33,34,35,36,37,38,39,40],"respondents":7},{"name":"Males 41-47","proportion":6.01,"genders":["male"],"ages":[41,42,43,44,45,46,47],"respondents":6},{"name":"Females 41-47","proportion":6.159,"genders":["female"],"ages":[41,42,43,44,45,46,47],"respondents":6},{"name":"Males 48-54","proportion":6.19,"genders":["male"],"ages":[48,49,50,51,52,53,54],"respondents":6},{"name":"Females 48-54","proportion":6.359,"genders":["female"],"ages":[48,49,50,51,52,53,54],"respondents":6},{"name":"Males 55+","proportion":17.37,"genders":["male"],"ages":[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"respondents":17},{"name":"Females 55+","proportion":19.763,"genders":["female"],"ages":[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"respondents":20}],"meta":{"sampleType":"strata","natrep":true},"natrep":true}]|375.0|450.0|0|0.74||{}|£|["memorability","actions","love-hate","association"]|22df7137-e017-44a8-943d-08112767398e|0const objectA = [{
  'id':'829d7772-e357-4140-b0d2-22415f730c30',
  'name':'sample name',
  'respondents':'100',

  'genders':['male'],
  'ages':[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
  'regions':['greater london'],
  'householdIncomes':[],
  'household incomes':[],
  'employments':['student'],

  'price':5,
  'providerId':22941902,
}];

const objectC = [{
  'id':'829d7772-e357-4140-b0d2-22415f730c30', // all
  'name':'sample name', // all

  // Old Schema
  'respondents':'100', // all
  natrep: true, // old natrep,

  'genders':['male'], // old custom
  'ages':[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34], // old custom
  'regions':['greater london'], // old custom
  'householdIncomes':[], // old custom (duplication?!)
  'household incomes':[], // old custom
  'employments':['student'], // old custom

  'price':5, // old redundant (?)
  'providerId':22941902, // old redundant

  // New Schema
  'totalRespondents':'100', // new all

  'quotas':[{
    'respondents':'100',
    'genders':['male','female'],
    'ages':[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
    'regions':['greater london'],
    'householdIncomes':[],
    'employments':['student'],
  }], // new both

  'meta':{'sampleType':'random'}, // new both
}];

const objectB = [{
  'id':'829d7772-e357-4140-b0d2-22415f730c30',
  'name':'sample name',
  'totalRespondents':'100',

  'quotas':[{
    'respondents':'100',
    'genders':['male','female'],
    'ages':[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
    'regions':['greater london'],
    'householdIncomes':[],
    'employments':['student'],
  }],

  'meta':{'sampleType':'random'},
}];

[objectA, objectB, objectC];

[{
  'id':'dcee0c06-1927-447e-8184-fd88cfb08413',
  'respondents':'100',
  'totalRespondents':'100',
  'name':'Whatsupppp - National Representative Sample',
  'quotas': [
    {'name':'Males 18-24','proportion':5.848,'genders':['male'],'ages':[18,19,20,21,22,23,24],'respondents':6},
    {'name':'Females 18-24','proportion':5.602,'genders':['female'],'ages':[18,19,20,21,22,23,24],'respondents':6},
    {'name':'Males 25-32','proportion':6.893,'genders':['male'],'ages':[25,26,27,28,29,30,31,32],'respondents':7},
    {'name':'Females 25-32','proportion':6.876,'genders':['female'],'ages':[25,26,27,28,29,30,31,32],'respondents':7},
    {'name':'Males 33-40','proportion':6.426,'genders':['male'],'ages':[33,34,35,36,37,38,39,40],'respondents':6},
    {'name':'Females 33-40','proportion':6.505,'genders':['female'],'ages':[33,34,35,36,37,38,39,40],'respondents':7},
    {'name':'Males 41-47','proportion':6.01,'genders':['male'],'ages':[41,42,43,44,45,46,47],'respondents':6},
    {'name':'Females 41-47','proportion':6.159,'genders':['female'],'ages':[41,42,43,44,45,46,47],'respondents':6},
    {'name':'Males 48-54','proportion':6.19,'genders':['male'],'ages':[48,49,50,51,52,53,54],'respondents':6},
    {'name':'Females 48-54','proportion':6.359,'genders':['female'],'ages':[48,49,50,51,52,53,54],'respondents':6},
    {'name':'Males 55+','proportion':17.37,'genders':['male'],'ages':[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],'respondents':17},
    {'name':'Females 55+','proportion':19.763,'genders':['female'],'ages':[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],'respondents':20}],
  'meta':{'sampleType':'strata','natrep':true},
  'natrep':true,
  }];

// [{
//   'id':'517-1568032256988',
//   'respondents':'100',
//   'natrep':true,
//   'ids':[22402538,22402521,22402529,22402522,22402523,22402527,22402536,22402534,22402519,22402528,22402526,22402524],
//   'price':5,
// }]


8|
scheduler two|
1|
tap|
|
5|
90|
2|
|
[0,1,2]|
status: draft|
0|
0|
2019-10-24 10:35:57.651 +00:00|
2019-10-24 10:36:18.468 +00:00|
launchedAt|
|
[{"id":"cca9d871-3d7f-42b0-9ed6-178d1c51a48a","respondents":"100","totalRespondents":"100","name":"scheduler two - National Representative Sample","quotas":[{"name":"Males 18-24","proportion":5.848,"genders":["male"],"ages":[18,19,20,21,22,23,24],"respondents":6},{"name":"Females 18-24","proportion":5.602,"genders":["female"],"ages":[18,19,20,21,22,23,24],"respondents":6},{"name":"Males 25-32","proportion":6.893,"genders":["male"],"ages":[25,26,27,28,29,30,31,32],"respondents":7},{"name":"Females 25-32","proportion":6.876,"genders":["female"],"ages":[25,26,27,28,29,30,31,32],"respondents":7},{"name":"Males 33-40","proportion":6.426,"genders":["male"],"ages":[33,34,35,36,37,38,39,40],"respondents":6},{"name":"Females 33-40","proportion":6.505,"genders":["female"],"ages":[33,34,35,36,37,38,39,40],"respondents":7},{"name":"Males 41-47","proportion":6.01,"genders":["male"],"ages":[41,42,43,44,45,46,47],"respondents":6},{"name":"Females 41-47","proportion":6.159,"genders":["female"],"ages":[41,42,43,44,45,46,47],"respondents":6},{"name":"Males 48-54","proportion":6.19,"genders":["male"],"ages":[48,49,50,51,52,53,54],"respondents":6},{"name":"Females 48-54","proportion":6.359,"genders":["female"],"ages":[48,49,50,51,52,53,54],"respondents":6},{"name":"Males 55+","proportion":17.37,"genders":["male"],"ages":[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"respondents":17},{"name":"Females 55+","proportion":19.763,"genders":["female"],"ages":[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"respondents":20}],"meta":{"sampleType":"strata","natrep":true},"natrep":true}]|
375.0|
450.0|
0|
0.74|
|
{}|
£|
["memorability","actions","love-hate","association"]|
c0bfd001-c932-4174-893f-a56dbb2f08e1|
0



12|Study Title|1|tap||5|90|2||[0,1,2]|draft|0|0|2019-10-24 12:52:44.562 +00:00|2019-10-24 13:30:37.807 +00:00|||
[{
  "id":"4ca1dab5-2d20-483e-877a-428658999bd7",
  "respondents":"100",
  "totalRespondents":"100",
  "name":"Study Title - National Representative Sample",
  "price":null,
  "quotas":[
    {"name":"Males 18-24","proportion":5.848,"genders":["male"],"ages":[18,19,20,21,22,23,24],"respondents":6},
    {"name":"Females 18-24","proportion":5.602,"genders":["female"],"ages":[18,19,20,21,22,23,24],"respondents":6},
    {"name":"Males 25-32","proportion":6.893,"genders":["male"],"ages":[25,26,27,28,29,30,31,32],"respondents":7},
    {"name":"Females 25-32","proportion":6.876,"genders":["female"],"ages":[25,26,27,28,29,30,31,32],"respondents":7},
    {"name":"Males 33-40","proportion":6.426,"genders":["male"],"ages":[33,34,35,36,37,38,39,40],"respondents":6},
    {"name":"Females 33-40","proportion":6.505,"genders":["female"],"ages":[33,34,35,36,37,38,39,40],"respondents":7},
    {"name":"Males 41-47","proportion":6.01,"genders":["male"],"ages":[41,42,43,44,45,46,47],"respondents":6},
    {"name":"Females 41-47","proportion":6.159,"genders":["female"],"ages":[41,42,43,44,45,46,47],"respondents":6},
    {"name":"Males 48-54","proportion":6.19,"genders":["male"],"ages":[48,49,50,51,52,53,54],"respondents":6},
    {"name":"Females 48-54","proportion":6.359,"genders":["female"],"ages":[48,49,50,51,52,53,54],"respondents":6},
    {"name":"Males 55+","proportion":17.37,"genders":["male"],"ages":[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"respondents":17},
    {"name":"Females 55+","proportion":19.763,"genders":["female"],"ages":[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"respondents":20}
  ],
  "meta":{"sampleType":"strata","natrep":true},
  "natrep":true
}]|375.0|450.0|0|0.74||{}|£|["memorability","actions","love-hate","association"]|22df7137-e017-44a8-943d-08112767398e|0
