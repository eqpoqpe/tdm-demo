/**
 *             r       r/w
 * createState - active - setState
 *
 * when state has motified, re-execl active_component,
 * intercepts return value of createStatein of the active_component
 *
 * state = []
 *
 * createState -> [0] -> setState {0}
 * createState -> [1] -> setState {1}
 *
 * setState.. -> state[]
 *
 * intercepts
 *
 * intercepts to make different value to cmp to re-render
 *
 * 0 exec state[0] -> createState
 * 1 exec state[1] -> createState
 */

/**
 * +-------------------+
 * |  active control   |
 * | +---------------+ |
 * | |  createState  | |
 * | | +-----------+ | |
 * | | | component | | |
 * | | +-----------+ | |
 * | +---------------+ |
 * +-------------------+
 */

import { active } from './active';

/**
 *@param {*} initialState
 @returns {[*, Function]}
 */
export function createState(initialState) {
  let _value;
  let _state_index_set_v0;

  if (active.el !== null && active.le !== null) {
    _state_index_set_v0 = active.stateIndex();
    _value = active.readyState();
  } else {
    _state_index_set_v0 = active.stateIndex();
    _value = typeof initialState !== 'undefined' ? initialState : 0;
    active.pushState(_value);
  }

  // console.log(_value);

  return [
    _value,
    (newValue) => {
      const state_index_set_v0 = _state_index_set_v0;

      const _value = newValue;

      // setState for cmp
      active.setState(state_index_set_v0, _value);

      // runtime_layout
      active.resetCount();

      const page = active.reExec();

      // re-render different
      (function () {
        active.el.removeEventListener(
          page.event.plusOne.type,
          active.le.event.plusOne.handle
        );

        active.el.addEventListener(
          page.event.plusOne.type,
          page.event.plusOne.handle
        );

        if (!Object.is(active.le.className, page.className)) {
          active.el.className = page.className;
        }

        if (!Object.is(active.le.nodeText, page.nodeText)) {
          active.el.innerText = page.nodeText;
        }

        active.le = page;
      })(page);
    },
  ];
}
