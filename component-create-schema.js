/* global Components namedSlot */

import SomeComponent from './'

const createComponent = () => ({
  component: SomeComponent,
  name: 'new-component-name',
  createMethod: 'mapContext', // create method here
  context: {
    type: 'map', // Or here?
    mapValues: {
      propName: 'value',
      propName2: 'value2',
    },
    static: {
      propName: 'value',
      propName2: 'value2',
    },
    slots: {
      default: [ { Components } ],
      [namedSlot]: {} || [],
    },
  },
});
