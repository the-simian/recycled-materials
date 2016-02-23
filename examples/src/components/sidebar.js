import {ul, li, a} from '@cycle/dom';

function Sidebar(sources, path$) {
  const {router: {createHref}} = sources;

  const inboxHref = createHref('/counter');
  const composeHref = createHref('/');

  const view$ = path$.map(() => {
    return ul([
      li([
        a({href: inboxHref}, 'Counter')
      ]),
      li([
        a({href: composeHref}, 'Home')
      ])
    ]);
  });

  return {
    DOM: view$
  };
}

export default Sidebar;
