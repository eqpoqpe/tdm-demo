/**
 * [  ] - [set]
 *  |   /   |
 * [  ]   [DOM]
 */

/**
 * [singleLayout] - [puppet]
 *       |
 *    [active] -> [DOM]
 *
 * when state has motified, re-exec component,
 * cmp the new returns and old and re-render the have changed properties or nodeTexts
 */

import { active } from './active';

export default function Layout(le) {}

export function singleLayout(l) {
  /**
   * create proot
   */
  const proot = (function () {
    let proot = document.querySelector('#page-root');

    if (proot !== null) {
      return proot;
    }

    proot = document.createElement('div');

    proot.setAttribute('id', 'page-root');
    document.body.appendChild(proot);

    return proot;
  })();

  if (proot !== null && typeof l === 'function') {
    // exec state counter
    const page = l();
    active.le = page;
    active.setExec(l);

    (function () {
      active.el = document.createElement('div');

      let pk = [...Object.keys(page)];

      if (pk.includes('className')) {
        active.el.setAttribute('class', `${page.className}`);
      }

      if (pk.includes('nodeText')) {
        // active.el.appendChild(document.createTextNode(page.nodeText));

        active.el.innerText = page.nodeText;
      }

      if (pk.includes('event')) {
        active.el.addEventListener(
          page.event.plusOne.type,
          page.event.plusOne.handle
        );
      }

      proot.appendChild(active.el);
    })();
  }
}

function runtime_layout() {}
