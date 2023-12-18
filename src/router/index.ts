import {createRouter, createWebHistory} from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import NotFoundView from "@/views/NotFoundView.vue";
import UnderConstruction from "@/views/UnderConstruction.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetailView,
      props: true,
    },
    {
      path: '/lab-test',
      name: 'LabTest',
      component: UnderConstruction,
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: UnderConstruction,
    },
    {
      path: '/medicine-order',
      name: 'MedicineOrder',
      component: UnderConstruction,
    },
    {
      path: '/message',
      name: 'Message',
      component: UnderConstruction,
    },
    {
      path: '/payment',
      name: 'Payment',
      component: UnderConstruction,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: UnderConstruction,
    },
    {
      path: '/help',
      name: 'Help',
      component: UnderConstruction,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
    },
  ]
});

export default router;
