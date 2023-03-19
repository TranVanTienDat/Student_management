import config from '~/config';
import Home from '~/pages/Home';
import ProfileUser from '~/pages/ProfileUser';
import LogIn from '~/features/Auth/Sign/LogIn';
// Public routes
const publicRoutes = [
  { path: config.routes.login, component: LogIn, layout: null },
  { path: config.routes.home, component: Home },
  { path: config.routes.profileUser, component: ProfileUser },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
