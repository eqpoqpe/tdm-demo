export const active = {
  el: null,
  le: null,
  pushState(stateValue) {
    component_page._countState += 1;
    component_page._state.push(stateValue);
  },
  manyState() {
    console.log(component_page._state);
  },
  setExec(c) {
    component_page._exec = c;
  },
  reExec() {
    return component_page._exec();
  },
  stateIndex() {
    return component_page._countState;
  },
  componentInfo() {
    return component_page;
  },

  /**
   * @param {number} index
   */
  readyState() {
    component_page._countState += 1;
    return component_page._state[component_page._countState - 1];
  },

  /**
   * @param {number} index
   * @param {*} newValue
   */
  setState(index, newValue) {
    // console.log(index, newValue);
    component_page._state[index] = newValue;
  },
  resetCount() {
    component_page._countState = 0;
  },
  $() {
    console.log(component_page._state);
  },
};

const component_page = {
  _exec: null,
  _countState: 0,
  _state: [],
};

/**
 *              pull a active
 * exec createState -> [value_queue]
 *
 *         pull
 * setState -> [task_queue]
 *
 * createState access to [] 'hi im just now push one value'
 */
