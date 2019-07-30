 
import Error401 from '@/views/error/401'
import Error404 from '@/views/error/404'
import NewWorkTrend from '@/views/new/workTrend'
import NewIndustryInformation from '@/views/new/industryInformation'
import NewAcademicInformation from '@/views/new/academicInformation'

import SharingUnion from '@/views/networks/sharingUnion'
import DataCenter from '@/views/networks/dataCenter'
import TestSite from '@/views/networks/testSite'
import BrickHomeTeam from '@/views/networks/brickHomeTeam'

   
export const routes = [
  { path: '/new/workTrend', component: NewWorkTrend },
  { path: '/new/industryInformation', component: NewIndustryInformation },
  { path: '/new/academicInformation', component: NewAcademicInformation },

  { path: '/networks/sharingUnion', component: SharingUnion },
  { path: '/networks/dataCenter', component: DataCenter },
  { path: '/networks/testSite', component: TestSite },
  { path: '/networks/brickHomeTeam', component: BrickHomeTeam },

  { path: '/error/401', component: Error401},
  { path: '/error/404', component: Error404},

]