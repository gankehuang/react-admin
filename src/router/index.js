 
import Error401 from '@/views/error/401'
import Error404 from '@/views/error/404'
import NewWorkTrend from '@/views/new/workTrend'
import NewIndustryInformation from '@/views/new/industryInformation'
import NewAcademicInformation from '@/views/new/academicInformation'

import SharingUnion from '@/views/networks/sharingUnion'
import DataCenter from '@/views/networks/dataCenter'
import TestSite from '@/views/networks/testSite'
import BrickHomeTeam from '@/views/networks/brickHomeTeam'

import MonitoringTasksCentres from '@/views/monitoringTask/monitoringTasksCentres';
import UserManual from '@/views/monitoringTask/userManual';
import ConcurrentSystem from '@/views/monitoringTask/concurrentSystem';
import ApplicationCase from '@/views/monitoringTask/applicationCase';

import AboutUs from '../views/aboutUs';
import NotificationAnnouncement from '@/views/notificationAnnouncement'

   
export const routes = [
  { path: '/new/workTrend', component: NewWorkTrend },
  { path: '/new/industryInformation', component: NewIndustryInformation },
  { path: '/new/academicInformation', component: NewAcademicInformation },

  { path: '/networks/sharingUnion', component: SharingUnion },
  { path: '/networks/dataCenter', component: DataCenter },
  { path: '/networks/testSite', component: TestSite },
  { path: '/networks/brickHomeTeam', component: BrickHomeTeam },

  { path: '/monitoringTask/monitoringTasksCentres', component: MonitoringTasksCentres },
  { path: '/monitoringTask/userManual', component: UserManual },
  { path: '/monitoringTask/concurrentSystem', component: ConcurrentSystem },
  { path: '/monitoringTask/applicationCase', component: ApplicationCase },

  { path: '/aboutUs', component: AboutUs },
  { path: '/notificationAnnouncement', component: NotificationAnnouncement },

  { path: '/error/401', component: Error401},
  { path: '/error/404', component: Error404},

]