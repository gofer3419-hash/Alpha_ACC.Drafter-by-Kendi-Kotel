import {Route, Router} from '@vaadin/router';

const router = new Router(document.getElementById('main'));

const routes: Route[] = [
  {path: '/', component: 'home-route'},
  {path: '/teams', component: 'team-shuffle-route'},
  {path: '/maps', component: 'map-draw-route'},
  {path: '/lobby', component: 'lobby-route'},
  // Test tool: solo draft of a division picked from a list
  {path: '/test', component: 'test-tool-route'},
  // :dataset is "wif", "wif-extended" or "vanilla" (see types/dataset.ts)
  {path: '/drafter/:dataset', component: 'deck-drafter-route'},
  {path: '/drafter/:dataset/:sessionId', component: 'deck-draft-route'},
  {path: '(.*)', redirect: '/'},
];

router.setRoutes([
  {path: '/', component: 'application-route', children: routes},
]);

export {router};
