import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '@/views/dashboard/DashboardPage.vue';
import UserProfilePage from '@/views/userProfile/UserProfilePage.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Dashboard' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: '/userProfile',
    name: 'UserProfile',
    component: UserProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
