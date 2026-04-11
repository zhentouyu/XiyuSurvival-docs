import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Minecraft Xiyu Survival",
  description: "Java 1.21.11",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '网页地图', link: 'http://mcmap.943689.top' }
    ],

    sidebar: [
      {
        text: '新手指南',
        items: [
          { text: '服务器概述', link: '/overview' },
          { text: '玩家命令列表', link: '/commands' },
          { text: '联系我们', link: '/contact' },
          { text: '服务器规则解释', link: '/rules' },
          { text: '文档更新日志', link: '/update' }
        ]
      },
      {
        text: '玩法和特性',
        items: [
          { text: '玩法和特性概述', link: '/features' },
          { text: '登录', link: '/login' },
          { text: '连锁挖矿', link: '/chain-mining' },
          { text: 'TPA', link: '/tpa' },
          { text: '每日任务', link: '/daily-quests' },
          { text: '长期任务', link: '/long-term-quests' },
          { text: '点数', link: '/points' },
          { text: '经济', link: '/eco' },
          { text: '箱子商店', link: '/quickshop' },
          { text: '商店', link: '/shop' },
          { text: '资源世界', link: '/mv' },
          { text: '游戏时长', link: '/playtime' },
          { text: 'McMMO', link: '/mcmmo' },
          { text: '箱子锁', link: '/blocklocker' },
          { text: '领地', link: '/dominion' },
          { text: '其他功能(投票 举报 svc)', link: '/other-features' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhentouyu/XiyuSurvival-docs', ariaLabel: 'github' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673c.54.065 2.103-2.472 2.103-2.472c0 1.469.756 3.387 2.394 4.771c-.612.188-1.363.479-1.845.835c-.434.32-.379.646-.301.778c.343.578 5.883.369 7.482.189c1.6.18 7.14.389 7.483-.189c.078-.132.132-.458-.301-.778c-.483-.356-1.233-.646-1.846-.836c1.637-1.384 2.393-3.302 2.393-4.771c0 0 1.563 2.537 2.103 2.472c.251-.03.581-1.39-.438-4.673"/></svg>'
        },
        link: 'https://qm.qq.com/q/OXzAtj5PSU',
        ariaLabel: 'qq'
      }
    ],
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/zhentouyu/XiyuSurvival-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    search: {
      provider: 'local'
    }
  }
})
