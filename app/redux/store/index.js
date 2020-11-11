import { createStore } from 'redux';

import reducer from '../reducers';

const reduce = createStore(reducer);

export default reduce;