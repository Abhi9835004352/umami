export const CURRENT_VERSION = process.env.currentVersion;
export const AUTH_TOKEN = 'umami.auth';
export const LOCALE_CONFIG = 'umami.locale';
export const TIMEZONE_CONFIG = 'umami.timezone';
export const DATE_RANGE_CONFIG = 'umami.date-range';
export const THEME_CONFIG = 'umami.theme';
export const DASHBOARD_CONFIG = 'umami.dashboard';
export const VERSION_CHECK = 'umami.version-check';
export const SHARE_TOKEN_HEADER = 'x-umami-share-token';
export const HOMEPAGE_URL = 'https://umami.is';
export const DOCS_URL = 'https://umami.is/docs';
export const REPO_URL = 'https://github.com/umami-software/umami';
export const UPDATES_URL = 'https://api.umami.is/v1/updates';
export const TELEMETRY_PIXEL = 'https://i.umami.is/a.png';
export const FAVICON_URL = 'https://icons.duckduckgo.com/ip3/{{domain}}.ico';
export const LINKS_URL = `${globalThis?.location?.origin}/q`;
export const PIXELS_URL = `${globalThis?.location?.origin}/p`;

export const DEFAULT_LOCALE = 'en-US';
export const DEFAULT_THEME = 'light';
export const DEFAULT_ANIMATION_DURATION = 300;
export const DEFAULT_DATE_RANGE_VALUE = '24hour';
export const DEFAULT_WEBSITE_LIMIT = 10;
export const DEFAULT_RESET_DATE = '2000-01-01';
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_DATE_COMPARE = 'prev';

export const REALTIME_RANGE = 30;
export const REALTIME_INTERVAL = 10000;

export const UNIT_TYPES = ['year', 'month', 'hour', 'day', 'minute'];

export const EVENT_COLUMNS = [
  'path',
  'entry',
  'exit',
  'referrer',
  'domain',
  'title',
  'query',
  'event',
  'tag',
  'hostname',
];

export const SESSION_COLUMNS = [
  'browser',
  'os',
  'device',
  'screen',
  'language',
  'country',
  'city',
  'region',
];

export const SEGMENT_TYPES = {
  segment: 'segment',
  cohort: 'cohort',
};

export const FILTER_COLUMNS = {
  path: 'url_path',
  entry: 'url_path',
  exit: 'url_path',
  referrer: 'referrer_domain',
  domain: 'referrer_domain',
  hostname: 'hostname',
  title: 'page_title',
  query: 'url_query',
  os: 'os',
  browser: 'browser',
  device: 'device',
  country: 'country',
  region: 'region',
  city: 'city',
  language: 'language',
  event: 'event_name',
  tag: 'tag',
  eventType: 'event_type',
};

export const COLLECTION_TYPE = {
  event: 'event',
  identify: 'identify',
} as const;

export const EVENT_TYPE = {
  pageView: 1,
  customEvent: 2,
  linkEvent: 3,
  pixelEvent: 4,
} as const;

export const DATA_TYPE = {
  string: 1,
  number: 2,
  boolean: 3,
  date: 4,
  array: 5,
} as const;

export const OPERATORS = {
  equals: 'eq',
  notEquals: 'neq',
  set: 's',
  notSet: 'ns',
  contains: 'c',
  doesNotContain: 'dnc',
  true: 't',
  false: 'f',
  greaterThan: 'gt',
  lessThan: 'lt',
  greaterThanEquals: 'gte',
  lessThanEquals: 'lte',
  before: 'bf',
  after: 'af',
} as const;

export const DATA_TYPES = {
  [DATA_TYPE.string]: 'string',
  [DATA_TYPE.number]: 'number',
  [DATA_TYPE.boolean]: 'boolean',
  [DATA_TYPE.date]: 'date',
  [DATA_TYPE.array]: 'array',
} as const;

export const ROLES = {
  admin: 'admin',
  teamManager: 'team-manager',
  teamMember: 'team-member',
  teamOwner: 'team-owner',
  teamViewOnly: 'team-view-only',
  user: 'user',
  viewOnly: 'view-only',
} as const;

export const PERMISSIONS = {
  all: 'all',
  websiteCreate: 'website:create',
  websiteUpdate: 'website:update',
  websiteDelete: 'website:delete',
  websiteTransferToTeam: 'website:transfer-to-team',
  websiteTransferToUser: 'website:transfer-to-user',
  teamCreate: 'team:create',
  teamUpdate: 'team:update',
  teamDelete: 'team:delete',
} as const;

export const ROLE_PERMISSIONS = {
  [ROLES.admin]: [PERMISSIONS.all],
  [ROLES.user]: [
    PERMISSIONS.websiteCreate,
    PERMISSIONS.websiteUpdate,
    PERMISSIONS.websiteDelete,
    PERMISSIONS.teamCreate,
  ],
  [ROLES.viewOnly]: [],
  [ROLES.teamOwner]: [
    PERMISSIONS.teamUpdate,
    PERMISSIONS.teamDelete,
    PERMISSIONS.websiteCreate,
    PERMISSIONS.websiteUpdate,
    PERMISSIONS.websiteDelete,
    PERMISSIONS.websiteTransferToTeam,
    PERMISSIONS.websiteTransferToUser,
  ],
  [ROLES.teamManager]: [
    PERMISSIONS.teamUpdate,
    PERMISSIONS.websiteCreate,
    PERMISSIONS.websiteUpdate,
    PERMISSIONS.websiteDelete,
    PERMISSIONS.websiteTransferToTeam,
  ],
  [ROLES.teamMember]: [
    PERMISSIONS.websiteCreate,
    PERMISSIONS.websiteUpdate,
    PERMISSIONS.websiteDelete,
  ],
  [ROLES.teamViewOnly]: [],
} as const;

export const THEME_COLORS = {
  light: {
    primary: '#2680eb',
    text: '#838383',
    line: '#d9d9d9',
    fill: '#f9f9f9',
  },
  dark: {
    primary: '#2680eb',
    text: '#7b7b7b',
    line: '#3a3a3a',
    fill: '#191919',
  },
} as const;

export const CHART_COLORS = [
  '#2680eb',
  '#9256d9',
  '#44b556',
  '#e68619',
  '#e34850',
  '#f7bd12',
  '#01bad7',
  '#6734bc',
  '#89c541',
  '#ffc301',
  '#ec1562',
  '#ffec16',
];

export const DOMAIN_REGEX =
  /^(localhost(:[1-9]\d{0,4})?|((?=[a-z0-9-_]{1,63}\.)(xn--)?[a-z0-9-_]+(-[a-z0-9-_]+)*\.)+(xn--)?[a-z0-9-_]{2,63})$/;
export const SHARE_ID_REGEX = /^[a-zA-Z0-9]{8,50}$/;
export const DATETIME_REGEX =
  /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{3}(Z|\+[0-9]{2}:[0-9]{2})?)?$/;

export const URL_LENGTH = 500;
export const PAGE_TITLE_LENGTH = 500;
export const EVENT_NAME_LENGTH = 50;

export const UTM_PARAMS = ['utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term'];

export const OS_NAMES = {
  'Android OS': 'Android',
  'Chrome OS': 'ChromeOS',
  'Mac OS': 'macOS',
  'Sun OS': 'SunOS',
  'Windows 10': 'Windows 10/11',
} as const;

export const BROWSERS = {
  android: 'Android',
  aol: 'AOL',
  bb10: 'BlackBerry 10',
  beaker: 'Beaker',
  chrome: 'Chrome',
  'chromium-webview': 'Chrome (webview)',
  crios: 'Chrome (iOS)',
  curl: 'Curl',
  edge: 'Edge',
  'edge-chromium': 'Edge (Chromium)',
  'edge-ios': 'Edge (iOS)',
  facebook: 'Facebook',
  firefox: 'Firefox',
  fxios: 'Firefox (iOS)',
  ie: 'IE',
  instagram: 'Instagram',
  ios: 'iOS',
  'ios-webview': 'iOS (webview)',
  kakaotalk: 'KakaoTalk',
  miui: 'MIUI',
  opera: 'Opera',
  'opera-mini': 'Opera Mini',
  phantomjs: 'PhantomJS',
  safari: 'Safari',
  samsung: 'Samsung',
  searchbot: 'Searchbot',
  silk: 'Silk',
  yandexbrowser: 'Yandex',
} as const;

export const SOCIAL_DOMAINS = [
  'bsky.app',
  'facebook.com',
  'fb.com',
  'ig.com',
  'instagram.com',
  'linkedin.',
  'news.ycombinator.com',
  'pinterest.',
  'reddit.',
  'snapchat.',
  't.co',
  'threads.net',
  'tiktok.',
  'twitter.com',
  'x.com',
];

export const SEARCH_DOMAINS = [
  'baidu.com',
  'bing.com',
  'chatgpt.com',
  'duckduckgo.com',
  'ecosia.org',
  'google.',
  'msn.com',
  'perplexity.ai',
  'search.brave.com',
  'yandex.',
];

export const SHOPPING_DOMAINS = [
  'alibaba.com',
  'aliexpress.com',
  'amazon.',
  'bestbuy.com',
  'ebay.com',
  'etsy.com',
  'newegg.com',
  'target.com',
  'walmart.com',
];

export const EMAIL_DOMAINS = [
  'gmail.',
  'hotmail.',
  'mail.yahoo.',
  'outlook.',
  'proton.me',
  'protonmail.',
];

export const VIDEO_DOMAINS = ['twitch.', 'youtube.'];

export const PAID_AD_PARAMS = [
  'ad_id=',
  'aid=',
  'dclid=',
  'epik=',
  'fbclid=',
  'gclid=',
  'li_fat_id=',
  'msclkid=',
  'ob_click_id=',
  'pc_id=',
  'rdt_cid=',
  'scid=',
  'ttclid=',
  'twclid=',
  'utm_medium=cpc',
  'utm_medium=paid',
  'utm_medium=paid_social',
  'utm_source=google',
];

export const GROUPED_DOMAINS = [
  { name: 'Baidu', domain: 'baidu.com', match: 'baidu.' },
  { name: 'Bing', domain: 'bing.com', match: 'bing.' },
  { name: 'Brave', domain: 'brave.com', match: 'brave.' },
  { name: 'ChatGPT', domain: 'chatgpt.com', match: 'chatgpt.' },
  { name: 'DuckDuckGo', domain: 'duckduckgo.com', match: 'duckduckgo.' },
  { name: 'Facebook', domain: 'facebook.com', match: 'facebook.' },
  { name: 'GitHub', domain: 'github.com', match: 'github.' },
  { name: 'Google', domain: 'google.com', match: 'google.' },
  { name: 'Hacker News', domain: 'news.ycombinator.com', match: 'news.ycombinator.com' },
  { name: 'Instagram', domain: 'instagram.com', match: ['instagram.', 'ig.com'] },
  { name: 'LinkedIn', domain: 'linkedin.com', match: 'linkedin.' },
  { name: 'Pinterest', domain: 'pinterest.com', match: 'pinterest.' },
  { name: 'Reddit', domain: 'reddit.com', match: 'reddit.' },
  { name: 'Snapchat', domain: 'snapchat.com', match: 'snapchat.' },
  { name: 'Twitter', domain: 'twitter.com', match: ['twitter.', 't.co', 'x.com'] },
  { name: 'Yahoo', domain: 'yahoo.com', match: 'yahoo.' },
  { name: 'Yandex', domain: 'yandex.ru', match: 'yandex.' },
];

export const MAP_FILE = '/datamaps.world.json';

export const ISO_COUNTRIES = {
  ANT: 'AN',
  ARE: 'AE',
  AUT: 'AT',
  BLM: 'BL',
  CHE: 'CH',
  DEU: 'DE',
  ESH: 'EH',
  ESP: 'ES',
  FSM: 'FM',
  GBR: 'GB',
  JAM: 'JM',
  JEY: 'JE',
  JOR: 'JO',
  JPN: 'JP',
  KAZ: 'KZ',
  KEN: 'KE',
  KGZ: 'KG',
  KIR: 'KI',
  KNA: 'KN',
  KOR: 'KR',
  KWT: 'KW',
  LAO: 'LA',
  LBN: 'LB',
  LBR: 'LR',
  LBY: 'LY',
  LCA: 'LC',
  LIE: 'LI',
  LKA: 'LK',
  LSO: 'LS',
  LTU: 'LT',
  LUX: 'LU',
  LVA: 'LV',
  MAF: 'MF',
  MAR: 'MA',
  MCO: 'MC',
  MDA: 'MD',
  MDG: 'MG',
  MDV: 'MV',
  MEX: 'MX',
  MHL: 'MH',
  MKD: 'MK',
  MLI: 'ML',
  MLT: 'MT',
  MMR: 'MM',
  MNE: 'ME',
  MNG: 'MN',
  MNP: 'MP',
  MOZ: 'MZ',
  MRT: 'MR',
  MSR: 'MS',
  MTQ: 'MQ',
  MUS: 'MU',
  MWI: 'MW',
  MYS: 'MY',
  MYT: 'YT',
  NAM: 'NA',
  NCL: 'NC',
  NER: 'NE',
  NFK: 'NF',
  NGA: 'NG',
  NIC: 'NI',
  NIU: 'NU',
  NLD: 'NL',
  NOR: 'NO',
  NPL: 'NP',
  NRU: 'NR',
  NZL: 'NZ',
  OMN: 'OM',
  PAK: 'PK',
  PAN: 'PA',
  PCN: 'PN',
  PER: 'PE',
  PHL: 'PH',
  PLW: 'PW',
  PNG: 'PG',
  POL: 'PL',
  PRI: 'PR',
  PRK: 'KP',
  PRT: 'PT',
  PRY: 'PY',
  PSE: 'PS',
  QAT: 'QA',
  REU: 'RE',
  ROU: 'RO',
  RUS: 'RU',
  RWA: 'RW',
  SAU: 'SA',
  SDN: 'SD',
  SEN: 'SN',
  SGP: 'SG',
  SGS: 'GS',
  SHN: 'SH',
  SJM: 'SJ',
  SLB: 'SB',
  SLE: 'SL',
  SMR: 'SM',
  SOM: 'SO',
  SPM: 'PM',
  SRB: 'RS',
  SSD: 'SS',
  STP: 'ST',
  SUR: 'SR',
  SVK: 'SK',
  SVN: 'SI',
  SWE: 'SE',
  SWZ: 'SZ',
  SYC: 'SC',
  SYR: 'SY',
  TCA: 'TC',
  TGO: 'TG',
  THA: 'TH',
  TJK: 'TJ',
  TKL: 'TK',
  TKM: 'TM',
  TLS: 'TL',
  TON: 'TO',
  TTO: 'TT',
  TUN: 'TN',
  TUR: 'TR',
  TUV: 'TV',
  TWN: 'TW',
  TZA: 'TZ',
  UGA: 'UG',
  UKR: 'UA',
  UMI: 'UM',
  URY: 'UY',
  USA: 'US',
  UZB: 'UZ',
  VCT: 'VC',
  VEN: 'VE',
  VIR: 'VI',
  VNM: 'VN',
  VUT: 'VU',
  WLF: 'WF',
  WSM: 'WS',
  XKX: 'XK',
  YEM: 'YE',
  ZAF: 'ZA',
  ZMB: 'ZM',
  ZWE: 'ZW',
};

export const CURRENCIES = [
  { id: 'USD', name: 'US Dollar' },
  { id: 'EUR', name: 'Euro' },
  { id: 'GBP', name: 'British Pound' },
  { id: 'JPY', name: 'Japanese Yen' },
  { id: 'CNY', name: 'Chinese Renminbi (Yuan)' },
  { id: 'CAD', name: 'Canadian Dollar' },
  { id: 'HKD', name: 'Hong Kong Dollar' },
  { id: 'AUD', name: 'Australian Dollar' },
  { id: 'SGD', name: 'Singapore Dollar' },
  { id: 'CHF', name: 'Swiss Franc' },
  { id: 'SEK', name: 'Swedish Krona' },
  { id: 'PLN', name: 'Polish Złoty' },
  { id: 'NOK', name: 'Norwegian Krone' },
  { id: 'DKK', name: 'Danish Krone' },
  { id: 'NZD', name: 'New Zealand Dollar' },
  { id: 'ZAR', name: 'South African Rand' },
  { id: 'MXN', name: 'Mexican Peso' },
  { id: 'THB', name: 'Thai Baht' },
  { id: 'HUF', name: 'Hungarian Forint' },
  { id: 'MYR', name: 'Malaysian Ringgit' },
  { id: 'INR', name: 'Indian Rupee' },
  { id: 'KRW', name: 'South Korean Won' },
  { id: 'BRL', name: 'Brazilian Real' },
  { id: 'TRY', name: 'Turkish Lira' },
  { id: 'CZK', name: 'Czech Koruna' },
  { id: 'ILS', name: 'Israeli New Shekel' },
  { id: 'RUB', name: 'Russian Ruble' },
  { id: 'AED', name: 'United Arab Emirates Dirham' },
  { id: 'IDR', name: 'Indonesian Rupiah' },
  { id: 'PHP', name: 'Philippine Peso' },
  { id: 'RON', name: 'Romanian Leu' },
  { id: 'COP', name: 'Colombian Peso' },
  { id: 'SAR', name: 'Saudi Riyal' },
  { id: 'ARS', name: 'Argentine Peso' },
  { id: 'VND', name: 'Vietnamese Dong' },
  { id: 'CLP', name: 'Chilean Peso' },
  { id: 'EGP', name: 'Egyptian Pound' },
  { id: 'KWD', name: 'Kuwaiti Dinar' },
  { id: 'PKR', name: 'Pakistani Rupee' },
  { id: 'QAR', name: 'Qatari Riyal' },
  { id: 'BHD', name: 'Bahraini Dinar' },
  { id: 'UAH', name: 'Ukrainian Hryvnia' },
  { id: 'PEN', name: 'Peruvian Sol' },
  { id: 'BDT', name: 'Bangladeshi Taka' },
  { id: 'MAD', name: 'Moroccan Dirham' },
  { id: 'KES', name: 'Kenyan Shilling' },
  { id: 'NGN', name: 'Nigerian Naira' },
  { id: 'TND', name: 'Tunisian Dinar' },
  { id: 'OMR', name: 'Omani Rial' },
  { id: 'GHS', name: 'Ghanaian Cedi' },
];
