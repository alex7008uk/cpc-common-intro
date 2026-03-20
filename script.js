// ==================== 教師經歷資料 ====================
const experiences = [
  {
    title: "資深程式設計講師",
    period: "2020 - 至今",
    description:
      "專注於教授現代網頁開發技術,包括 HTML、CSS、JavaScript 及各種前端框架。曾指導超過 500 名學生成功轉職成為軟體工程師。",
  },
  {
    title: "全端工程師",
    period: "2015 - 2020",
    description:
      "在知名科技公司擔任全端工程師,負責大型專案的前後端開發,累積豐富的實戰經驗。參與多個企業級應用程式的開發與維護。",
  },
  {
    title: "技術顧問",
    period: "2018 - 至今",
    description:
      "為多家新創公司提供技術諮詢服務,協助制定技術架構、進行程式碼審查,並提供團隊培訓。成功輔導 20+ 專案上線。",
  },
  {
    title: "開源專案貢獻者",
    period: "2013 - 至今",
    description:
      "活躍於開源社群,為多個知名專案貢獻程式碼。定期參與技術研討會並分享最新的技術趨勢與實踐經驗。",
  },
];

// ==================== 課程資料 ====================
// ISO 系列課程推薦
const isoCourses = [
  {
    title: "AI撰寫ISO文件教學方案講師班",
    sessions: [
      {
        date: "04/08(三)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD0619",
      },
      {
        date: "07/06(一)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD0622",
      },
      {
        date: "11/05(四)",
        time: "09:00~17:00",
        session: "第3梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD0623",
      },
    ],
  },
  {
    title: "IATF 16949:2016 內部稽核員培訓",
    sessions: [
      {
        date: "02/05、06(四五)",
        time: "09:00~17:00",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC7951",
      },
      {
        date: "05/11、12(一二)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7952",
      },
      {
        date: "08/03、04(一二)",
        time: "09:00~17:00",
        session: "第3梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7953",
      },
      {
        date: "12/01、02(二三)",
        time: "09:00~17:00",
        session: "第4梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7954",
      },
    ],
  },
  {
    title: "IATF 16949的供應鏈的選擇、績效評核與稽核方法",
    sessions: [
      {
        date: "02/10(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8543",
      },
      {
        date: "06/03(三)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8544",
      },
    ],
  },
  {
    title: "ISO 22000：2018食品安全管理系統內部稽核員訓練",
    sessions: [
      {
        date: "09/15、16(二三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8587",
      },
    ],
  },
  {
    title: "ISO 9001:2015 內部稽核實務",
    sessions: [
      {
        date: "03/05、06(四五)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7949",
      },
      {
        date: "09/14、15(一二)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7950",
      },
    ],
  },
  {
    title: "ISO9001&ISO14001&ISO45001三合一整合型內部稽核員訓練",
    sessions: [
      {
        date: "06/01、02(一二)",
        time: "09:00~17:00",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC8045",
      },
      {
        date: "12/14、15(一二)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8046",
      },
    ],
  },
  {
    title: "ISO9001及IATF 16949 量測儀器校正管理實務",
    sessions: [
      {
        date: "01/20(二)",
        time: "09:00~17:00",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC7940",
      },
      {
        date: "04/13(一)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7941",
      },
      {
        date: "05/30(六)",
        time: "09:00~17:00",
        session: "第3梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7942",
      },
      {
        date: "07/13(一)",
        time: "09:00~17:00",
        session: "第4梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7943",
      },
      {
        date: "10/05(一)",
        time: "09:00~17:00",
        session: "第5梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7944",
      },
    ],
  },
  {
    title: "ISO文件管理及標準化建立技巧研習班",
    sessions: [
      {
        date: "05/25(一)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8043",
      },
      {
        date: "08/07(五)",
        time: "09:00~17:00",
        session: "第3梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8044",
      },
    ],
  },
  {
    title: "VDA 6.3:2023製程稽核人員訓練",
    sessions: [
      {
        date: "06/11、12(四五)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8040",
      },
      {
        date: "11/23、24(一二)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8041",
      },
    ],
  },
];

// 行政總務系列課程推薦
const adminCourses = [
  {
    title: "固定資產管理規劃、運用與查核",
    sessions: [
      {
        date: "08/14(五)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC9628",
      },
    ],
  },
  {
    title: "高效益總務行政管理實務",
    sessions: [
      {
        date: "04/15(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8050",
      },
      {
        date: "09/09(三)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8051",
      },
    ],
  },
  {
    title: "從繁瑣到自動化-生成式 AI 在行政自動化的應用",
    sessions: [
      {
        date: "03/02(一)",
        time: "09:30~16:30",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TD3806",
      },
      {
        date: "11/02(一)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD3807",
      },
    ],
  },
  {
    title: "新世代總務工作管理與問題解決技巧",
    sessions: [
      {
        date: "03/25(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC9629",
      },
      {
        date: "09/07(一)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC9630",
      },
    ],
  },
  {
    title: "總務工作常見問題與解決對策",
    sessions: [
      {
        date: "05/07(四)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8048",
      },
      {
        date: "10/07(三)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8049",
      },
    ],
  },
  {
    title: "總務行政人員入門實務指南",
    sessions: [
      {
        date: "09/02(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7761",
      },
    ],
  },
  {
    title: "職工福利委員會運作與職工福利方案設計實務",
    sessions: [
      {
        date: "04/27(一)",
        time: "09:30~16:30",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC9631",
      },
      {
        date: "10/14(三)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC9632",
      },
    ],
  },
  {
    title: "契約生命週期管理與風險控管-從條文理解到爭議處理的全方位契約實務課程",
    sessions: [
      {
        date: "04/01(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC9720",
      },
      {
        date: "10/23(五)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC9721",
       }
       ]
  }
 ]

// 採購系列課程推薦
const purchaseCourses = [
  {
    title: "ChatGPT & AI 在採購工作的應用",
    sessions: [
      {
        date: "07/01(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD3800",
      },
    ],
  },
  {
    title: "ChatGPT and AI 在採購專案管理之應用",
    sessions: [
      {
        date: "08/10(一)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD3804",
      },
    ],
  },
  {
    title: "ChatGPT and AI 在採購數據分析之應用",
    sessions: [
      {
        date: "04/01(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD3802",
      },
    ],
  },
  {
    title: "一次搞懂: 採購重要觀念,情報收集與利害關係人(跨部門&供應商)互動實務",
    sessions: [
      {
        date: "03/09(一)",
        time: "09:00~17:00",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC8570",
      },
      {
        date: "07/03(五)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8572",
      },
    ],
  },
  {
    title: "大碎鏈時代-採購如何避免斷鏈危機",
    sessions: [
      {
        date: "04/08(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7763",
      },
    ],
  },
  {
    title: "工程採購管理與實務解析",
    sessions: [
      {
        date: "01/21(三)",
        time: "09:30~16:30",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC8078",
      },
      {
        date: "08/11(二)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8079",
      },
    ],
  },
  {
    title: "如何參與政府採購與標案爭議處理",
    sessions: [
      {
        date: "04/01(三)",
        time: "09:30-16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD0061",
      },
      {
        date: "10/21(三)",
        time: "09:30-16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD0062",
      },
    ],
  },
  {
    title: "有效掌控採購交期與存貨管理實務",
    sessions: [
      {
        date: "08/25(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8058",
      },
    ],
  },
  {
    title: "供應商開發與管理完全指南",
    sessions: [
      {
        date: "09/02(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7863",
      },
    ],
  },
  {
    title: "供應商管理",
    sessions: [
      {
        date: "04/17(五)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7884",
      },
      {
        date: "07/03(五)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7885",
      },
    ],
  },
  {
    title: "供應鏈與物流管理",
    sessions: [
      {
        date: "08/05(三)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8578",
      },
    ],
  },
  {
    title: "政府採購法應用實務班",
    sessions: [
      {
        date: "05/07、08(四五)",
        time: "9:00-17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD0058",
      },
      {
        date: "11/11、12(三四)",
        time: "9:00-17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TD0060",
      },
    ],
  },
  {
    title: "基礎到菁英的採購工作實務班",
    sessions: [
      {
        date: "04/10(五)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7856",
      },
    ],
  },
  {
    title: "庶務採購作業計劃與議價技巧實務",
    sessions: [
      {
        date: "06/08(一)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8088",
      },
    ],
  },
  {
    title: "採購人員必備之談判與議價技巧實務",
    sessions: [
      {
        date: "04/28(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8054",
      },
    ],
  },
  {
    title: "採購工作實務問題與解決技巧",
    sessions: [
      {
        date: "10/13(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8060",
      },
    ],
  },
  {
    title: "採購外包與供應商管理實務",
    sessions: [
      {
        date: "05/05(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8055",
      },
    ],
  },
  {
    title: "採購合約管理流程與技巧",
    sessions: [
      {
        date: "06/16(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8056",
      },
    ],
  },
  {
    title: "採購合約審核與執⾏",
    sessions: [
      {
        date: "06/22(一)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8443",
      },
    ],
  },
  {
    title: "採購成本分析與價格管理效益",
    sessions: [
      {
        date: "11/06(五)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8089",
      },
    ],
  },
  {
    title: "採購成本分析與價格管理實務",
    sessions: [
      {
        date: "09/08(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8059",
      },
    ],
  },
  {
    title: "採購成本控制技巧與方法",
    sessions: [
      {
        date: "05/12(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7859",
      },
    ],
  },
  {
    title: "採購高手必備之議價談判學",
    sessions: [
      {
        date: "03/16(一)",
        time: "09:30~16:30",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC7864",
      },
      {
        date: "10/20(二)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7865",
      },
    ],
  },
  {
    title: "採購策略規劃與供應商開發管理",
    sessions: [
      {
        date: "04/29(三)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8442",
      },
    ],
  },
  {
    title: "採購管理實務工作坊",
    sessions: [
      {
        date: "11/02、03(一二)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8454",
      },
    ],
  },
  {
    title: "採購與供應鏈風險管理",
    sessions: [
      {
        date: "06/17(三)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8446",
      },
    ],
  },
  {
    title: "採購談判策略與合約管理實務",
    sessions: [
      {
        date: "03/04(三)",
        time: "09:30~16:30",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC8080",
      },
      {
        date: "10/02(五)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8081",
      },
    ],
  },
  {
    title: "採購談判與議價技術",
    sessions: [
      {
        date: "04/14(二)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8092",
      },
      {
        date: "09/03(四)",
        time: "09:00~17:00",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8093",
      },
    ],
  },
  {
    title: "提升採購價值與降低成本實務",
    sessions: [
      {
        date: "07/28(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8057",
      },
    ],
  },
  {
    title: "解構供應商價格與成本",
    sessions: [
      {
        date: "03/13(五)",
        time: "09:30~16:30",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC7857",
      },
      {
        date: "07/24(五)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7858",
      },
    ],
  },
  {
    title: "跨國採購實務解析與訣竅",
    sessions: [
      {
        date: "03/23(一)",
        time: "09:30~16:30",
        session: "第1梯次 確定開課",
        url: "https://store.cpc.org.tw/Train/Contents/TC7860",
      },
      {
        date: "06/25(四)",
        time: "09:30~16:30",
        session: "第2梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7861",
      },
    ],
  },
  {
    title: "總務採購策略與降低成本實務",
    sessions: [
      {
        date: "09/22(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7869",
      },
    ],
  },
  {
    title: "總務採購履約管理與爭議解決實務",
    sessions: [
      {
        date: "05/26(二)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8087",
      },
    ],
  },
  {
    title: "競爭性報價規劃與執行實務",
    sessions: [
      {
        date: "08/26(三)",
        time: "09:30~16:30",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC7862",
      },
    ],
  },
  {
    title: "議價談判",
    sessions: [
      {
        date: "09/10(四)",
        time: "09:00~17:00",
        session: "第1梯次",
        url: "https://store.cpc.org.tw/Train/Contents/TC8450",
      },
    ],
  },
];

// 研發系列課程推薦
const rdCourses = [
  {
    title: "研發人員應有的設計理念與品質意識研習班",
    sessions: [
      { date: "03/11(三)", time: "09:30-16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9634" },
      { date: "10/12(一)", time: "09:30-16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9635" },
    ],
  },
  {
    title: "研發成本管控與效益最大化研習班",
    sessions: [
      { date: "04/08(三)", time: "09:30-16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9636" },
      { date: "11/04(三)", time: "09:30-16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9637" },
    ],
  },
  {
    title: "研發品質管理技巧研習班",
    sessions: [
      { date: "05/18(一)", time: "09:30-16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9638" },
      { date: "09/18(五)", time: "09:30-16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9639" },
    ],
  },
  {
    title: "商品企劃與產品設計管理實務研習班",
    sessions: [
      { date: "08/19、26(三)", time: "09:30-16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9723" },
    ],
  },
  {
    title: "新產品開發到量產階段的品質工程管理",
    sessions: [
      { date: "04/28(二)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8535" },
    ],
  },
  {
    title: "新產品開發的日程控管方法與實務",
    sessions: [
      { date: "07/02(四)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8546" },
    ],
  },
  {
    title: "新產品開發的品質風險控管與問題預防",
    sessions: [
      { date: "08/10(一)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8548" },
    ],
  },
];

// 品管系列課程推薦
const qcCourses = [
  {
    title: "[套裝課程]IATF 16949 六大核心工具應用實務研習班",
    sessions: [
      { date: "04/09、10、17、20、23(一四五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8912" },
      { date: "07/09、10、16、17、23(四五)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8913" },
      { date: "10/15、16、22、29、30(四五)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8914" },
    ],
  },
  {
    title: "8D與三現的問題分析與解決工具",
    sessions: [
      { date: "04/27(一)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8038" },
      { date: "09/07(一)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8039" },
    ],
  },
  {
    title: "AIAG-VDA FMEA 失效模式與效應分析",
    sessions: [
      { date: "04/17(五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7926" },
      { date: "07/16(四)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7927" },
      { date: "10/22(四)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7928" },
    ],
  },
  {
    title: "AI撰寫ISO文件教學方案講師班",
    sessions: [
      { date: "04/08(三)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0619" },
      { date: "07/06(一)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0622" },
      { date: "11/05(四)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0623" },
    ],
  },
  {
    title: "APQP先期產品品質規劃",
    sessions: [
      { date: "04/09(四)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7887" },
      { date: "07/09(四)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7888" },
      { date: "10/15(四)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7889" },
    ],
  },
  {
    title: "CP管制計畫& PPAP零組件核准程序",
    sessions: [
      { date: "01/09(五)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7919" },
      { date: "04/10(五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7920" },
      { date: "07/10(五)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7921" },
      { date: "10/16(五)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7922" },
    ],
  },
  {
    title: "CQT品質技術師培訓班",
    sessions: [
      { date: "03/14~06/06(六)", time: "09:00-16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TD1388" },
      { date: "07/04~09/05(六)", time: "09:00-16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TD1389" },
      { date: "09/12~12/12(六)", time: "09:00-16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TD1390" },
    ],
  },
  {
    title: "DOE實驗設計",
    sessions: [
      { date: "03/19(四)", time: "08:40~17:40", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8024" },
      { date: "08/25(二)", time: "08:40~17:40", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8025" },
      { date: "12/07(一)", time: "08:40~17:40", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8026" },
    ],
  },
  {
    title: "Gen AI 驅動的品質管理工作流實戰",
    sessions: [
      { date: "06/17、18、24、25(三四)", time: "09:00-17:00", session: "", url: "https://store.cpc.org.tw/Train/Contents/TD3578" },
    ],
  },
  {
    title: "IATF 16949:2016 內部稽核員培訓",
    sessions: [
      { date: "02/05、06(四五)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7951" },
      { date: "05/11、12(一二)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7952" },
      { date: "08/03、04(一二)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7953" },
      { date: "12/01、02(二三)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7954" },
    ],
  },
  {
    title: "IATF 16949的供應鏈的選擇、績效評核與稽核方法",
    sessions: [
      { date: "06/03(三)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8544" },
    ],
  },
  {
    title: "IE手法與生產作業改善技巧研習班",
    sessions: [
      { date: "05/04(一)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8029" },
      { date: "09/22(二)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8030" },
    ],
  },
  {
    title: "ISO 22000：2018食品安全管理系統內部稽核員訓練",
    sessions: [
      { date: "09/15、16(二三)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8587" },
    ],
  },
  {
    title: "ISO 9001:2015 內部稽核實務",
    sessions: [
      { date: "09/14、15(一二)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7950" },
    ],
  },
  {
    title: "ISO9001&ISO14001&ISO45001三合一整合型內部稽核員訓練",
    sessions: [
      { date: "06/01、02(一二)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8045" },
      { date: "12/14、15(一二)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8046" },
    ],
  },
  {
    title: "ISO9001及IATF 16949 量測儀器校正管理實務",
    sessions: [
      { date: "01/20(二)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7940" },
      { date: "04/13(一)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7941" },
      { date: "05/30(六)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7942" },
      { date: "07/13(一)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7943" },
      { date: "10/05(一)", time: "09:00~17:00", session: "第5梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7944" },
    ],
  },
  {
    title: "ISO文件管理及標準化建立技巧研習班",
    sessions: [
      { date: "05/25(一)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8043" },
      { date: "08/07(五)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8044" },
    ],
  },
  {
    title: "MSA 量測系統分析",
    sessions: [
      { date: "04/23(四)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7935" },
      { date: "07/23(四)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7936" },
      { date: "10/30(五)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7937" },
    ],
  },
  {
    title: "SPC 統計製程管制",
    sessions: [
      { date: "04/20(一)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7930" },
      { date: "07/17(五)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7931" },
      { date: "10/29(四)", time: "09:00~17:00", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7932" },
    ],
  },
  {
    title: "VDA 6.3:2023製程稽核人員訓練",
    sessions: [
      { date: "06/11、12(四五)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8040" },
      { date: "11/23、24(一二)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8041" },
    ],
  },
  {
    title: "企業導入品管圈（QCC）實務",
    sessions: [
      { date: "05/19(二)", time: "09:00-17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8882" },
      { date: "09/23(三)", time: "09:00-17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8883" },
    ],
  },
  {
    title: "全方位生產管理手法研習",
    sessions: [
      { date: "09/04(五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8032" },
    ],
  },
  {
    title: "系統化的現場製程品質管理實務",
    sessions: [
      { date: "05/04(一)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8536" },
      { date: "10/08(四)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8537" },
    ],
  },
  {
    title: "防錯法(Fool Proof)在實務上之應用",
    sessions: [
      { date: "05/19(二)", time: "09:30~17:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0827" },
      { date: "08/18(二)", time: "09:30~17:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0828" },
    ],
  },
  {
    title: "供應商品質管理實務研習班",
    sessions: [
      { date: "07/24(五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8022" },
      { date: "11/06(五)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8023" },
    ],
  },
  {
    title: "品質改善活動推行實務",
    sessions: [
      { date: "04/22(三)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8531" },
      { date: "09/11(五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8532" },
    ],
  },
  {
    title: "品質策略與方針展開",
    sessions: [
      { date: "09/29(二)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8542" },
    ],
  },
  {
    title: "品質管理幹部精鍊班",
    sessions: [
      { date: "07/07、14、21(二)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9072" },
    ],
  },
  {
    title: "食品工廠設計與規劃",
    sessions: [
      { date: "05/21、22(四五)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7881" },
      { date: "08/27、28(四五)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7882" },
      { date: "11/05、06(四五)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7883" },
    ],
  },
  {
    title: "產品品質特殊特性CC/SC的鑑別、管理與監控",
    sessions: [
      { date: "07/31(五)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8554" },
    ],
  },
  {
    title: "新QC七大手法應用實務",
    sessions: [
      { date: "09/21(一)", time: "09:00~17:00", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8028" },
    ],
  },
  {
    title: "製造現場的變化點管理",
    sessions: [
      { date: "03/19(四)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8533" },
      { date: "09/01(二)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8534" },
    ],
  },
  {
    title: "製造現場品質向上提升的技法",
    sessions: [
      { date: "09/30(三)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8191" },
    ],
  },
  {
    title: "製造現場品質風險評估與監控管理實務",
    sessions: [
      { date: "04/16(四)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8549" },
    ],
  },
  {
    title: "製造現場幹部技能培訓",
    sessions: [
      { date: "03/30(一)", time: "09:00~17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8036" },
      { date: "08/21(五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8859" },
      { date: "11/13(五)", time: "09:00~17:00", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8037" },
    ],
  },
  {
    title: "製造業客訴調查、解析、對策實戰",
    sessions: [
      { date: "08/28(五)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8529" },
    ],
  },
];

// 生產系列課程推薦
const productionCourses = [
  {
    title: "7S管理實務(5S+安全+節約)",
    sessions: [
      { date: "05/19(二)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8480" },
      { date: "10/30(五)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8484" },
    ],
  },
  {
    title: "ERP與MES展開與運作實務",
    sessions: [
      { date: "06/04(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7774" },
      { date: "09/10(四)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7775" },
      { date: "12/17(四)", time: "09:30~16:30", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7776" },
    ],
  },
  {
    title: "人員管理流程再造",
    sessions: [
      { date: "07/29(三)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9411" },
    ],
  },
  {
    title: "工作流程改善與問題分析解決",
    sessions: [
      { date: "04/22(三)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8115" },
      { date: "09/22(二)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8116" },
    ],
  },
  {
    title: "工作管理與執行力提昇技巧班",
    sessions: [
      { date: "06/30(二)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8109" },
      { date: "10/22(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8110" },
    ],
  },
  {
    title: "工廠佈置規劃與工業4.0",
    sessions: [
      { date: "05/14(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7770" },
      { date: "09/03(四)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7771" },
      { date: "12/10(四)", time: "09:30~16:30", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7772" },
    ],
  },
  {
    title: "工廠物流管理技巧實務研習班",
    sessions: [
      { date: "07/20(一)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8108" },
    ],
  },
  {
    title: "中階主管管理才能研習班",
    sessions: [
      { date: "07/21、22(二三)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8111" },
    ],
  },
  {
    title: "生產現場主管之走動式管理技巧",
    sessions: [
      { date: "07/31(五)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8574" },
      { date: "10/23(五)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8575" },
    ],
  },
  {
    title: "生產管理法-交期、品質、成本、機台、備料、流程管控效益",
    sessions: [
      { date: "04/02(四)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8084" },
      { date: "07/14(二)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8085" },
    ],
  },
  {
    title: "生產管理幹部精鍊班",
    sessions: [
      { date: "04/14、21、28(二)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9069" },
      { date: "08/05、12、19(三)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9070" },
    ],
  },
  {
    title: "生產線管理運作實務",
    sessions: [
      { date: "05/07(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7765" },
      { date: "08/06(四)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7766" },
      { date: "12/03(四)", time: "09:30~16:30", session: "第4梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7767" },
    ],
  },
  {
    title: "企業如何落實現場品管與製程改善研習班",
    sessions: [
      { date: "04/02(四)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7783" },
      { date: "07/09(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7784" },
      { date: "10/15(四)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7785" },
    ],
  },
  {
    title: "如何做好現場管理與改善",
    sessions: [
      { date: "07/30(四)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8485" },
      { date: "10/01(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8486" },
    ],
  },
  {
    title: "如何運用三T(TPS.TPM.TQM)工具提升管理績效",
    sessions: [
      { date: "06/03(三)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0840" },
      { date: "10/20(二)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0840" },
    ],
  },
  {
    title: "物管、倉管及庫存管理運作實務",
    sessions: [
      { date: "03/12(四)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7780" },
      { date: "07/02(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7781" },
      { date: "10/08(四)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7782" },
    ],
  },
  {
    title: "非車廠製造業如何善用精實管理創造效能",
    sessions: [
      { date: "07/28(二)", time: "09:30~16:30", session: "", url: "https://store.cpc.org.tw/Train/Contents/TC8185" },
    ],
  },
  {
    title: "訂單、產能與排程運作實務",
    sessions: [
      { date: "06/11(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7778" },
      { date: "10/01(四)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7779" },
    ],
  },
  {
    title: "倉儲作業管理改善與實例研討",
    sessions: [
      { date: "04/20(一)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8082" },
      { date: "09/23(三)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8083" },
    ],
  },
  {
    title: "倉儲管理與存貨決策",
    sessions: [
      { date: "04/30(四)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8584" },
      { date: "07/27(一)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8586" },
    ],
  },
  {
    title: "庫存與倉儲管理實務研習班",
    sessions: [
      { date: "03/31(二)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8104" },
      { date: "10/29(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8107" },
    ],
  },
  {
    title: "效率化倉儲管理能力培訓",
    sessions: [
      { date: "08/26(三)", time: "09:00~17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9413" },
    ],
  },
  {
    title: "基層幹部如何强化管理能力提升企業競爭力",
    sessions: [
      { date: "04/09(四)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7786" },
      { date: "07/16(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7787" },
      { date: "11/05(四)", time: "09:30~16:30", session: "第3梯次", url: "https://store.cpc.org.tw/Train/Contents/TC7788" },
    ],
  },
  {
    title: "現場問題的反應與處置",
    sessions: [
      { date: "09/07(一)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8118" },
    ],
  },
  {
    title: "提昇生管價值~做好產銷協調以滿足出貨達交率研習班",
    sessions: [
      { date: "05/06(三)", time: "09:30-16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0334" },
      { date: "09/16(三)", time: "09:30-16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TD0335" },
    ],
  },
  {
    title: "精實生產管理-7大浪費鑑別與改善",
    sessions: [
      { date: "08/04(二)", time: "09:00-17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8858" },
    ],
  },
  {
    title: "精實管理-價值流分析與少量多樣混線生產機制",
    sessions: [
      { date: "04/24(五)", time: "09:00-17:00", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8860" },
      { date: "10/27(二)", time: "09:00-17:00", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8861" },
    ],
  },
  {
    title: "綠色生產力-永續考量的問題分析與解決能力",
    sessions: [
      { date: "04/15(三)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9414" },
      { date: "09/24(四)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC9415" },
    ],
  },
  {
    title: "豐田式生產管理-精實生產導入少量多樣之排程應對",
    sessions: [
      { date: "04/13(一)", time: "09:30~16:30", session: "第1梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8112" },
      { date: "08/24(一)", time: "09:30~16:30", session: "第2梯次", url: "https://store.cpc.org.tw/Train/Contents/TC8113" },
    ],
  },
];

// ==================== 生成經歷區塊 ====================
function renderExperiences() {
  const aboutContent = document.getElementById("aboutContent");

  experiences.forEach((exp, index) => {
    const expItem = document.createElement("div");
    expItem.className = "experience-item";
    expItem.style.animationDelay = `${index * 0.1}s`;

    expItem.innerHTML = `
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-period">${exp.period}</p>
            <p class="experience-description">${exp.description}</p>
        `;

    aboutContent.appendChild(expItem);
  });
}

// ==================== 生成課程卡片 ====================
function renderCourses() {
  const coursesGrid = document.getElementById("coursesGrid");

  // 生成行政總務系列課程區塊
  const adminSection = document.createElement("div");
  adminSection.className = "course-section";
  adminSection.id = "admin-courses";
  adminSection.innerHTML = `
    <h3 class="course-category-title">行政總務系列課程推薦</h3>
    <div class="course-list">
      ${adminCourses
        .map(
          (course) => `
        <div class="course-item course-item-no-image">
          <div class="course-header">
            <div class="course-title-text">${course.title}</div>
          </div>
          <div class="course-sessions">
            ${course.sessions
              .map(
                (s) => `
              <div class="session-item">
                <div class="session-info">
                  <span class="session-number">${s.session}</span>
                  <span class="session-date">${s.date}</span>
                  <span class="session-time">${s.time}</span>
                </div>
                <div class="session-date-info">
                  <a href="${s.url}" target="_blank" class="session-link">立即報名</a>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  coursesGrid.appendChild(adminSection);

  // 生成採購系列課程區塊
  const purchaseSection = document.createElement("div");
  purchaseSection.className = "course-section";
  purchaseSection.id = "purchase-courses";
  purchaseSection.innerHTML = `
    <h3 class="course-category-title">採購系列課程推薦</h3>
    <div class="course-list">
      ${purchaseCourses
        .map(
          (course) => `
        <div class="course-item course-item-no-image">
          <div class="course-header">
            <div class="course-title-text">${course.title}</div>
          </div>
          <div class="course-sessions">
            ${course.sessions
              .map(
                (s) => `
              <div class="session-item">
                <div class="session-info">
                  <span class="session-number">${s.session}</span>
                  <span class="session-date">${s.date}</span>
                  <span class="session-time">${s.time}</span>
                </div>
                <div class="session-date-info">
                  <a href="${s.url}" target="_blank" class="session-link">立即報名</a>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  coursesGrid.appendChild(purchaseSection);

  // 生成研發系列課程區塊
  const rdSection = document.createElement("div");
  rdSection.className = "course-section";
  rdSection.id = "rd-courses";
  rdSection.innerHTML = `
    <h3 class="course-category-title">研發系列課程推薦</h3>
    <div class="course-list">
      ${rdCourses
        .map(
          (course) => `
        <div class="course-item course-item-no-image">
          <div class="course-header">
            <div class="course-title-text">${course.title}</div>
          </div>
          <div class="course-sessions">
            ${course.sessions
              .map(
                (s) => `
              <div class="session-item">
                <div class="session-info">
                  <span class="session-number">${s.session}</span>
                  <span class="session-date">${s.date}</span>
                  <span class="session-time">${s.time}</span>
                </div>
                <div class="session-date-info">
                  <a href="${s.url}" target="_blank" class="session-link">立即報名</a>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  coursesGrid.appendChild(rdSection);

  // 生成品管系列課程區塊
  const qcSection = document.createElement("div");
  qcSection.className = "course-section";
  qcSection.id = "qc-courses";
  qcSection.innerHTML = `
    <h3 class="course-category-title">品管(ISO)系列課程推薦</h3>
    <div class="course-list">
      ${qcCourses
        .map(
          (course) => `
        <div class="course-item course-item-no-image">
          <div class="course-header">
            <div class="course-title-text">${course.title}</div>
          </div>
          <div class="course-sessions">
            ${course.sessions
              .map(
                (s) => `
              <div class="session-item">
                <div class="session-info">
                  <span class="session-number">${s.session}</span>
                  <span class="session-date">${s.date}</span>
                  <span class="session-time">${s.time}</span>
                </div>
                <div class="session-date-info">
                  <a href="${s.url}" target="_blank" class="session-link">立即報名</a>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  coursesGrid.appendChild(qcSection);

  // 生成生產系列課程區塊
  const productionSection = document.createElement("div");
  productionSection.className = "course-section";
  productionSection.id = "production-courses";
  productionSection.innerHTML = `
    <h3 class="course-category-title">生產系列課程推薦</h3>
    <div class="course-list">
      ${productionCourses
        .map(
          (course) => `
        <div class="course-item course-item-no-image">
          <div class="course-header">
            <div class="course-title-text">${course.title}</div>
          </div>
          <div class="course-sessions">
            ${course.sessions
              .map(
                (s) => `
              <div class="session-item">
                <div class="session-info">
                  <span class="session-number">${s.session}</span>
                  <span class="session-date">${s.date}</span>
                  <span class="session-time">${s.time}</span>
                </div>
                <div class="session-date-info">
                  <a href="${s.url}" target="_blank" class="session-link">立即報名</a>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  coursesGrid.appendChild(productionSection);
}

// ==================== 平滑滾動效果 ====================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ==================== 滾動動畫效果 ====================
function initScrollAnimations() {
  // 檢查瀏覽器是否支援 IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    // 不支援時直接顯示所有元素
    const animatedElements = document.querySelectorAll(
      ".experience-item, .course-section",
    );
    animatedElements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return;
  }

  const observerOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px -20px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        // 動畫完成後取消觀察，避免重複觸發
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 觀察所有需要動畫的元素
  const animatedElements = document.querySelectorAll(
    ".experience-item, .course-section",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // 備用：3秒後強制顯示所有元素，防止動畫失效導致內容不顯示
  setTimeout(() => {
    animatedElements.forEach((el) => {
      if (el.style.opacity === "0") {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }, 3000);
}

// ==================== 導航列滾動效果 ====================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
  });
}

// ==================== 初始化所有功能 ====================
document.addEventListener("DOMContentLoaded", () => {
  // 生成內容
  // renderExperiences(); // 已改為直接在 HTML 中顯示講師介紹
  renderCourses();

  // 初始化功能
  initSmoothScroll();
  initNavbarScroll();

  // 延遲初始化滾動動畫,確保元素已渲染
  setTimeout(() => {
    initScrollAnimations();
  }, 100);

  console.log("✅ 網站已成功載入!");
  console.log(`📚 共載入 ${experiences.length} 項經歷`);
  console.log(`🎓 行政總務系列課程: ${adminCourses.length} 門`);
  console.log(`🎓 採購系列課程: ${purchaseCourses.length} 門`);
  console.log(`🎓 研發系列課程: ${rdCourses.length} 門`);
  console.log(`🎓 品管系列課程: ${qcCourses.length} 門`);
  console.log(`🎓 生產系列課程: ${productionCourses.length} 門`);
});
