 
import Error401 from '@/views/error/401'
import Error404 from '@/views/error/404'
import NewWorkTrend from '@/views/new/workTrend'
import NewIndustryInformation from '@/views/new/industryInformation'
import NewAcademicInformation from '@/views/new/academicInformation'

   
export const routes = [
  { path: '/new/workTrend', component: NewWorkTrend },
  { path: '/new/industryInformation', component: NewIndustryInformation },
  { path: '/new/academicInformation', component: NewAcademicInformation },
  { path: '/error/401', component: Error401},
  { path: '/error/404', component: Error404},

]