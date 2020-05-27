// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: 'https://status.qwq.best/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'u890604-7efc750ea85e4837a345fa33',
    // 'm784490063-7b5da437e7f1e0d67613714d',
    // 'm784497419-de55aa09902ccb3ab22d548a',
    // 'm784496436-71a4bf7b1e3bdf7756be131b',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Blog',
      url: 'https://qwq.best/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/AyagawaSeirin/status'
    }
  ]
};
