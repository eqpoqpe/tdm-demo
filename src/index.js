import { singleLayout } from './lib/layout';
import { createState } from './lib/state';

/**
 * _execTimes: 2
 * _componentType: not pure
 */
function ComponentA() {
  const [count, setCount] = createState(0);
  const [style, setStyle] = createState('light');

  return {
    className: style,
    event: {
      plusOne: {
        type: 'click',
        handle() {
          setCount(22);
          setStyle('dark');

          // console.log('Count', count);
        },
      },
    },
    nodeText: count,
  };
}

singleLayout(ComponentA);
