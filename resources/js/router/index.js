import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import { routes as routes } from './modules';
import beforeEach from './beforeEach';

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach(beforeEach);

export default router;
