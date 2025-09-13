// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    //ARCHIVE https://telegra.ph/APIs-08-12
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
    1080zyku: {
      api: 'https://api.1080zyku.com/inc/api_mac10.php',
      name: 'TV-1080资源',
      detail: 'https://api.1080zyku.com'
    },
    155api: {
      api: 'https://155api.com/api.php/provide/vod',
      name: 'AV-155资源',
      detail: 'https://155api.com'
    },
    360zy: {
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

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
