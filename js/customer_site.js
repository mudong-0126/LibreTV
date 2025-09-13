const CUSTOMER_SITES = {
  dyttzy: {
    api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
    name: '电影天堂资源',
    detail: 'http://caiji.dyttzyapi.com',
  },
  ruyi: {
    api: 'https://cj.rycjapi.com/api.php/provide/vod',
    name: '如意资源',
  },
  bfzy: {
    api: 'https://bfzyapi.com/api.php/provide/vod',
    name: '暴风资源',
  },
  tyyszy: {
    api: 'https://tyyszy.com/api.php/provide/vod',
    name: '天涯资源',
  },
  xiaomaomi: {
    api: 'https://zy.xmm.hk/api.php/provide/vod',
    name: '小猫咪资源',
  },
  ffzy: {
    api: 'http://ffzy5.tv/api.php/provide/vod',
    name: '非凡影视',
    detail: 'http://ffzy5.tv',
  },
  heimuer: {
    api: 'https://json.heimuer.xyz/api.php/provide/vod',
    name: '黑木耳',
    detail: 'https://heimuer.tv',
  },
  zy360: {
    api: 'https://360zy.com/api.php/provide/vod',
    name: '360资源',
  },
  iqiyi: {
    api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
    name: 'iqiyi资源',
  },
  wolong: {
    api: 'https://wolongzyw.com/api.php/provide/vod',
    name: '卧龙资源',
  },
  hwba: {
    api: 'https://cjhwba.com/api.php/provide/vod',
    name: '华为吧资源',
  },
  jisu: {
    api: 'https://jszyapi.com/api.php/provide/vod',
    name: '极速资源',
    detail: 'https://jszyapi.com',
  },
  dbzy: {
    api: 'https://dbzy.tv/api.php/provide/vod',
    name: '豆瓣资源',
  },
  mozhua: {
    api: 'https://mozhuazy.com/api.php/provide/vod',
    name: '魔爪资源',
  },
  mdzy: {
    api: 'https://www.mdzyapi.com/api.php/provide/vod',
    name: '魔都资源',
  },
  zuid: {
    api: 'https://api.zuidapi.com/api.php/provide/vod',
    name: '最大资源'
  },
  yinghua: {
    api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
    name: '樱花资源'
  },
  baidu: {
    api: 'https://api.apibdzy.com/api.php/provide/vod',
    name: '百度云资源'
  },
  wujin: {
    api: 'https://api.wujinapi.me/api.php/provide/vod',
    name: '无尽资源'
  },
  wwzy: {
    api: 'https://wwzy.tv/api.php/provide/vod',
    name: '旺旺短剧'
  },
  ikun: {
    api: 'https://ikunzyapi.com/api.php/provide/vod',
    name: 'iKun资源'
  },
  lzi: {
    api: 'https://cj.lziapi.com/api.php/provide/vod/',
    name: '量子资源站'
  },
  1080 zyku: {
    api: 'https://api.1080zyku.com/inc/api_mac10.php',
    name: 'TV-1080资源',
    detail: 'https://api.1080zyku.com'
  },
  155 api: {
    api: 'https://155api.com/api.php/provide/vod',
    name: 'AV-155资源',
    detail: 'https://155api.com'
  },
  360 zy: {
    api: 'https://360zy.com/api.php/provide/vod',
    name: 'TV-360资源',
    detail: 'https://360zy.com'
  },
  ckzy: {
    api: 'https://ckzy.me/api.php/provide/vod',
    name: 'TV-CK资源',
    detail: 'https://ckzy.me'
  },
  ukuapi: {
    api: 'https://api.ukuapi.com/api.php/provide/vod',
    name: 'TV-U酷资源',
    detail: 'https://api.ukuapi.com'
  },
  ukuapi88: {
    api: 'https://api.ukuapi88.com/api.php/provide/vod',
    name: 'TV-U酷资源88',
    detail: 'https://api.ukuapi88.com'
  },
  ikunzy: {
    api: 'https://ikunzyapi.com/api.php/provide/vod',
    name: 'TV-ikun资源',
    detail: 'https://ikunzyapi.com'
  },
  wujinapi_cc: {
    api: 'https://api.wujinapi.cc/api.php/provide/vod',
    name: 'TV-wujinapi无尽',
    detail: ''
  },
  yayazy: {
    api: 'https://cj.yayazy.net/api.php/provide/vod',
    name: 'TV-丫丫点播',
    detail: 'https://cj.yayazy.net'
  },
  guangsuapi: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod',
    name: 'TV-光速资源',
    detail: 'https://api.guangsuapi.com'
  },
  wolongzyw: {
    api: 'https://collect.wolongzyw.com/api.php/provide/vod',
    name: 'TV-卧龙点播',
    detail: 'https://collect.wolongzyw.com'
  },
  wolongzy_cc: {
    api: 'https://collect.wolongzy.cc/api.php/provide/vod',
    name: 'TV-卧龙资源',
    detail: ''
  },
  wolongzyw_com: {
    api: 'https://wolongzyw.com/api.php/provide/vod',
    name: 'TV-卧龙资源',
    detail: 'https://wolongzyw.com'
  },
  tyyszy: {
    api: 'https://tyyszy.com/api.php/provide/vod',
    name: 'TV-天涯资源',
    detail: 'https://tyyszy.com'
  },
  rycjapi: {
    api: 'https://cj.rycjapi.com/api.php/provide/vod',
    name: 'TV-如意资源',
    detail: ''
  },
  xiaomaomi: {
    api: 'https://zy.xmm.hk/api.php/provide/vod',
    name: 'TV-小猫咪资源',
    detail: 'https://zy.xmm.hk'
  },
  xinlangapi: {
    api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
    name: 'TV-新浪点播',
    detail: 'https://api.xinlangapi.com'
  },
  wujinapi_com: {
    api: 'https://api.wujinapi.com/api.php/provide/vod',
    name: 'TV-无尽资源',
    detail: ''
  },
  wujinapi_me: {
    api: 'https://api.wujinapi.me/api.php/provide/vod',
    name: 'TV-无尽资源',
    detail: ''
  },
  wujinapi_net: {
    api: 'https://api.wujinapi.net/api.php/provide/vod',
    name: 'TV-无尽资源',
    detail: ''
  },
  wwzy: {
    api: 'https://wwzy.tv/api.php/provide/vod',
    name: 'TV-旺旺短剧',
    detail: 'https://wwzy.tv'
  },
  wwzy_api: {
    api: 'https://api.wwzy.tv/api.php/provide/vod',
    name: 'TV-旺旺资源',
    detail: 'https://api.wwzy.tv'
  },
  bfzyapi: {
    api: 'https://bfzyapi.com/api.php/provide/vod',
    name: 'TV-暴风资源',
    detail: ''
  },
  zuidazy: {
    api: 'http://zuidazy.me/api.php/provide/vod',
    name: 'TV-最大点播',
    detail: 'http://zuidazy.me'
  },
  zuidapi: {
    api: 'https://api.zuidapi.com/api.php/provide/vod',
    name: 'TV-最大资源',
    detail: 'https://api.zuidapi.com'
  },
  apiyhzy: {
    api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
    name: 'TV-樱花资源',
    detail: ''
  },
  yparse: {
    api: 'https://api.yparse.com/api/json',
    name: 'TV-步步高资源',
    detail: ''
  },
  niuniuzy: {
    api: 'https://api.niuniuzy.me/api.php/provide/vod',
    name: 'TV-牛牛点播',
    detail: 'https://api.niuniuzy.me'
  },
  dyttzyapi: {
    api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
    name: 'TV-电影天堂资源',
    detail: 'http://caiji.dyttzyapi.com'
  }
};

// 调用全局方法合并
if (window.extendAPISites) {
  window.extendAPISites(CUSTOMER_SITES);
} else {
  console.error("错误：请先加载 config.js！");
}
