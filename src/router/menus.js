export const menus = [
  {
    path: '/new', title: '新闻动态', icon: 'bars',
    children: [
      { path: '/new/workTrend', title: '工作动态' },
      { path: '/new/industryInformation', title: '行业资讯' },
      { path: '/new/academicInformation', title: '学术资讯' },
    ],
  },
  {
    path: '/networks', title: '工作网络', icon: 'dribbble', 
    children: [
      { path: '/networks/sharingUnion', title: '共享联盟' },
      { path: '/networks/dataCenter', title: '数据中心' },
      { path: '/networks/testSite', title: '试验站点' },
      { path: '/networks/brickHomeTeam', title: '专家队伍' },
    ],
  },
  {
    path: '/monitoringTask', title: '监测任务', icon: 'copy',
    children: [
      { path: '/monitoringTask/monitoringTasksCentres', title: '各中心监测任务' },
      { path: '/monitoringTask/userManual', title: '用户手册' },
      { path: '/monitoringTask/concurrentSystem', title: '汇交系统FAQ' },
      { path: '/monitoringTask/applicationCase', title: '应用案例' },
    ],
  },
  { path: '/aboutUs', title: '关于我们', icon: 'team' },
  { path: '/notificationAnnouncement', title: '通知公告', icon: 'sound' },
]