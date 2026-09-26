// ==================== 課程資料（2027課程總覽） ====================
const allCourses = [
  {
    title: "AIAG-VDA FMEA 失效模式與效應分析",
    category: "品質管理",
    sessions: [
      { date: "01/04(一)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "04/12(一)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "07/16(五)", time: "09:00~17:00", hours: 7, session: "3" },
      { date: "10/15(五)", time: "09:00~17:00", hours: 7, session: "4" },
    ],
  },
  {
    title: "AIAG-VDA SPC統計製程管製",
    category: "品質管理",
    sessions: [
      { date: "01/05(二)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "04/19(一)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "07/23(五)", time: "09:00~17:00", hours: 7, session: "3" },
      { date: "10/22(五)", time: "09:00~17:00", hours: 7, session: "4" },
    ],
  },
  {
    title: "生產線管理運作實務",
    category: "生產管理",
    sessions: [
      { date: "01/07(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "05/13(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "09/09(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "MSA 量測系統分析",
    category: "品質管理",
    sessions: [
      { date: "01/08(五)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "04/26(一)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "07/30(五)", time: "09:00~17:00", hours: 7, session: "3" },
      { date: "10/29(五)", time: "09:00~17:00", hours: 7, session: "4" },
    ],
  },
  {
    title: "ISO文件管理及標準化建立技巧研習班",
    category: "品質管理",
    sessions: [
      { date: "01/11(一)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "05/21(五)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "08/30(一)", time: "09:00~17:00", hours: 7, session: "3" },
    ],
  },
  {
    title: "策略性供應商關係管理",
    category: "採購管理",
    sessions: [
      { date: "01/12(二)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "08/17(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "新產品開發的品質風險控管與問題預防",
    category: "研發管理",
    sessions: [
      { date: "01/13(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "07/12(一)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "工廠佈置規劃與工業4.0",
    category: "生產管理",
    sessions: [
      { date: "01/14(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "05/20(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "09/09(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "ISO9001及IATF 16949 量測儀器校正管理實務",
    category: "品質管理",
    sessions: [
      { date: "01/15(五)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "04/15(四)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "07/05(一)", time: "09:00~17:00", hours: 7, session: "3" },
      { date: "10/04(一)", time: "09:00~17:00", hours: 7, session: "4" },
    ],
  },
  {
    title: "採購高手必備之議價談判學",
    category: "採購管理",
    sessions: [
      { date: "01/19(二)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "08/31(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "「運用WHY WHY 分析解決問題」實務訓練",
    category: "生產管理",
    sessions: [
      { date: "01/20(三)", time: "09:30-16:30", hours: 6, session: "1" },
      { date: "06/16(三)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "工程採購管理與實務解析",
    category: "採購管理",
    sessions: [
      { date: "01/21(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "07/13(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "採購品類策略與議價談判",
    category: "採購管理",
    sessions: [
      { date: "01/25(一)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/06(一)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "效率化倉儲管理能力培訓",
    category: "生產管理",
    sessions: [
      { date: "01/26(二)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "07/21(三)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "IATF 16949:2016 內部稽核員培訓",
    category: "品質管理",
    sessions: [
      { date: "02/15、16(一二)", time: "09:00~17:00", hours: 14, session: "1" },
      { date: "06/07、08(一二)", time: "09:00~17:00", hours: 14, session: "2" },
      { date: "11/01、02(一二)", time: "09:00~17:00", hours: 14, session: "3" },
    ],
  },
  {
    title: "訂單、產能與排程運作實務",
    category: "生產管理",
    sessions: [
      { date: "02/18(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "06/03(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "10/07(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "全方位生產管理手法研習",
    category: "品質管理",
    sessions: [
      { date: "02/22(一)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "06/04(五)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "採購商情搜集與資料整合應用",
    category: "採購管理",
    sessions: [
      { date: "02/23(二)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "ISO 22000：2018食品安全管理系統內部稽核員訓練",
    category: "品質管理",
    sessions: [
      { date: "02/24 、25(三四)", time: "09:30~16:30", hours: 12, session: "1" },
      { date: "08/25、26(三四)", time: "09:30~16:30", hours: 12, session: "2" },
    ],
  },
  {
    title: "物管、倉管及庫存管理運作實務",
    category: "生產管理",
    sessions: [
      { date: "02/25(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "06/10(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "10/14(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "精實生產VSM價值溪流圖與改善手法實務運用",
    category: "生產管理",
    sessions: [
      { date: "02/26(五)", time: "09:00-17:00", hours: 7, session: "1" },
      { date: "06/30(三)", time: "09:00-17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "倉儲物流實戰：找得到、管得清、出得快",
    category: "品質管理",
    sessions: [
      { date: "03/02(二)", time: "09:00-17:00", hours: 7, session: "1" },
      { date: "09/13(一)", time: "09:00-17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "研發人員應有的設計理念與品質意識研習班",
    category: "研發管理",
    sessions: [
      { date: "03/03(三)", time: "09:30-16:30", hours: 6, session: "1" },
      { date: "08/16(一)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "韌性採購與敏捷供應鏈建立",
    category: "採購管理",
    sessions: [
      { date: "03/03(三)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "ERP與MES展開與運作實務",
    category: "生產管理",
    sessions: [
      { date: "03/04(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "07/01(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "11/04(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "採購即戰力：供應鏈⾵險管理",
    category: "採購管理",
    sessions: [
      { date: "03/05(五)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "10/26(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "採購外包與供應商管理實務",
    category: "採購管理",
    sessions: [
      { date: "03/08(一)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "ISO9001&ISO14001&ISO45001三合一整合型內部稽核員訓練",
    category: "品質管理",
    sessions: [
      { date: "03/08、09(一二)", time: "09:00~17:00", hours: 14, session: "1" },
      { date: "08/23、24(一二)", time: "09:00~17:00", hours: 14, session: "2" },
    ],
  },
  {
    title: "解構供應商價格與成本",
    category: "採購管理",
    sessions: [
      { date: "03/09(二)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/07(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "企業策略規劃管理",
    category: "領導管理",
    sessions: [
      { date: "03/10(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "06/17(四)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "企業如何落實現場品管與製程改善研習班",
    category: "生產管理",
    sessions: [
      { date: "03/11(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "07/08(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "11/11(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "AI 在採購數據分析之應用",
    category: "總務行政",
    sessions: [
      { date: "03/12(五)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "07/14(三)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "ISO 9001:2026 內部稽核實務",
    category: "品質管理",
    sessions: [
      { date: "03/15、16(一二)", time: "09:00~17:00", hours: 14, session: "1" },
      { date: "08/02、03(一二)", time: "09:00~17:00", hours: 14, session: "2" },
    ],
  },
  {
    title: "跨部門問題解決與協作技巧工作坊",
    category: "生產管理",
    sessions: [
      { date: "03/17(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/16(四)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "精實生產管理-7大浪費鑑別與改善",
    category: "生產管理",
    sessions: [
      { date: "03/17(三)", time: "09:30-16:30", hours: 6, session: "2" },
      { date: "07/07(三)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "生產管理法-交期、品質、成本、機台、備料、流程管控效益",
    category: "生產管理",
    sessions: [
      { date: "03/18(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/08(三)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "製造業有效進行進料檢驗管制實務運用訓練",
    category: "生產管理",
    sessions: [
      { date: "03/19(五)", time: "09:30-16:30", hours: 6, session: "1" },
      { date: "10/20(三)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "APQP先期產品品質規劃",
    category: "品質管理",
    sessions: [
      { date: "03/22(一)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "07/02(五)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "10/01(五)", time: "09:00~17:00", hours: 7, session: "3" },
    ],
  },
  {
    title: "[套裝課程]IATF 16949 六大核心工具應用實務研習班",
    category: "品質管理",
    sessions: [
      { date: "03/22、29、04/12、19、26(一)", time: "09:00~17:00", hours: 35, session: "1" },
      { date: "07/02、09、16、23、30(五)", time: "09:00~17:00", hours: 35, session: "2" },
      { date: "10/01、08、15、22、29(五)", time: "09:00~17:00", hours: 35, session: "3" },
    ],
  },
  {
    title: "競爭性報價規劃與執行實務",
    category: "採購管理",
    sessions: [
      { date: "03/23(二)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "10/19(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "新產品開發到量產階段的品質工程管理",
    category: "研發管理",
    sessions: [
      { date: "03/24(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "08/20(五)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "ISO 文管新手實戰入門工作坊",
    category: "品質管理",
    sessions: [
      { date: "03/25(四)", time: "09:30~16:30", hours: 6, session: "" },
      { date: "08/27(五)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "供應商品質管理實務研習班",
    category: "品質管理",
    sessions: [
      { date: "03/26(五)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "06/28(一)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "09/27(一)", time: "09:00~17:00", hours: 7, session: "3" },
    ],
  },
  {
    title: "CP管制計畫& PPAP零組件核准程序",
    category: "品質管理",
    sessions: [
      { date: "03/29(一)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "07/09(五)", time: "09:00~17:00", hours: 7, session: "2" },
      { date: "10/08(五)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "DOE實驗設計",
    category: "品質管理",
    sessions: [
      { date: "03/30(二)", time: "08:40~17:40", hours: 8, session: "1" },
      { date: "08/10(二)", time: "08:40~17:40", hours: 8, session: "2" },
    ],
  },
  {
    title: "IPQC製程管控實務運用訓練",
    category: "生產管理",
    sessions: [
      { date: "03/31(三)", time: "09:30-16:30", hours: 6, session: "1" },
      { date: "10/19(二)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "基層幹部如何强化管理能力提升企業競爭力",
    category: "生產管理",
    sessions: [
      { date: "04/01(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "07/15(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "12/02(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "工廠幹部如何做好人員管理",
    category: "生產管理",
    sessions: [
      { date: "04/08(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "08/05(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "12/09(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "研發成本管控與效益最大化研習班",
    category: "研發管理",
    sessions: [
      { date: "04/09(五)", time: "09:30-16:30", hours: 6, session: "1" },
      { date: "09/22(三)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "系統化防誤防錯手法實務運用訓練",
    category: "生產管理",
    sessions: [
      { date: "04/09(五)", time: "09:30-16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "精實設計DFMA",
    category: "生產管理",
    sessions: [
      { date: "04/14(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "10/07(四)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "採購成本控制技巧與方法",
    category: "採購管理",
    sessions: [
      { date: "04/14(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "10/05(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "如何善用開會管理公司",
    category: "生產管理",
    sessions: [
      { date: "04/15(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "08/12(四)", time: "09:30~16:30", hours: 6, session: "2" },
      { date: "12/16(四)", time: "09:30~16:30", hours: 6, session: "3" },
    ],
  },
  {
    title: "Gen AI 驅動的品質管理工作流實戰",
    category: "品質管理",
    sessions: [
      { date: "04/15.16.22.23(四五)", time: "09:00-17:00", hours: 28, session: "1" },
      { date: "08/04.05.11.12(三四)", time: "09:00-17:00", hours: 28, session: "2" },
    ],
  },
  {
    title: "供應鏈與物流管理",
    category: "採購管理",
    sessions: [
      { date: "04/21(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/09(四)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "SQM供應商管理與輔導",
    category: "品質管理",
    sessions: [
      { date: "04/21(三)", time: "09:00~17:00", hours: 7, session: "" },
      { date: "09/24(五)", time: "09:00~17:00", hours: 7, session: "" },
    ],
  },
  {
    title: "8D與三現的問題分析與解決工具",
    category: "品質管理",
    sessions: [
      { date: "04/23(五)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "08/09(一)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "採購合約管理流程與技巧",
    category: "採購管理",
    sessions: [
      { date: "04/26(一)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "供應商開發與管理完全指南",
    category: "採購管理",
    sessions: [
      { date: "04/27(二)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "11/02(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "倉儲管理與存貨決策",
    category: "生產管理",
    sessions: [
      { date: "04/28(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "10/21(四)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "新產品開發的日程控管方法與實務",
    category: "研發管理",
    sessions: [
      { date: "04/29(四)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/14(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "製造現場幹部技能培訓",
    category: "品質管理",
    sessions: [
      { date: "05/03(一)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "09/17(五)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "研發品質管理技巧研習班",
    category: "研發管理",
    sessions: [
      { date: "05/04(二)", time: "09:30-16:30", hours: 6, session: "1" },
      { date: "11/03(三)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "AI, ChatGPT和 Gemini Notebook在採購工作的應用",
    category: "採購管理",
    sessions: [
      { date: "05/05(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "08/18(三)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "有效掌握現場管理工作實務運用訓練",
    category: "生產管理",
    sessions: [
      { date: "05/06(四)", time: "09:30-16:30", hours: 6, session: "1" },
      { date: "09/23(四)", time: "09:30-16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "製造現場品質向上提升的技法",
    category: "品質管理",
    sessions: [
      { date: "05/07(五)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/07(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "採購作業計畫與供應商管理",
    category: "採購管理",
    sessions: [
      { date: "05/11(二)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "AI採購管理實戰：破解缺料、庫存與採購成本問題",
    category: "品質管理",
    sessions: [
      { date: "05/12(三)", time: "09:00-17:00", hours: 7, session: "1" },
      { date: "11/05(五)", time: "09:00-17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "VDA 6.3:2023製程稽核人員訓練",
    category: "品質管理",
    sessions: [
      { date: "05/17、18(一二)", time: "09:00~17:00", hours: 14, session: "1" },
      { date: "11/23、24(二三)", time: "09:00~17:00", hours: 14, session: "2" },
    ],
  },
  {
    title: "食品工廠設計與規劃",
    category: "品質管理",
    sessions: [
      { date: "05/20、21(四五)", time: "09:30~16:30", hours: 12, session: "1" },
      { date: "10/28、29(四五)", time: "09:30~16:30", hours: 12, session: "2" },
    ],
  },
  {
    title: "AI採購專案管理及決策優化",
    category: "採購管理",
    sessions: [
      { date: "05/24(一)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/24(五)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "採購貨源搜尋與策略分析實務",
    category: "採購管理",
    sessions: [
      { date: "05/25(二)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "採購談判策略與合約管理實務",
    category: "採購管理",
    sessions: [
      { date: "05/26(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "10/06(三)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "製造業客訴調查、解析、對策實戰",
    category: "品質管理",
    sessions: [
      { date: "05/27(四)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "10/13(三)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "最有效率的企業問題解決術：AI+數據的力量",
    category: "品質管理",
    sessions: [
      { date: "05/28(五)", time: "09:00-17:00", hours: 7, session: "" },
      { date: "10/18(一)", time: "09:00-17:00", hours: 7, session: "" },
    ],
  },
  {
    title: "新QC七大手法應用實務",
    category: "品質管理",
    sessions: [
      { date: "05/31(一)", time: "09:00~17:00", hours: 7, session: "" },
    ],
  },
  {
    title: "結構化-問題分析與解決",
    category: "生產管理",
    sessions: [
      { date: "06/01(二)", time: "09:30~16:30", hours: 6, session: "1" },
    ],
  },
  {
    title: "職場表達力 ：⾼效溝通與跨部門關係管理",
    category: "採購管理",
    sessions: [
      { date: "06/02(三)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "11/12(五)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "AI導入企業實踐策略規劃課程",
    category: "採購管理",
    sessions: [
      { date: "06/04(五)", time: "09:30~16:30", hours: 6, session: "1" },
    ],
  },
  {
    title: "提升採購價值與降低成本實務",
    category: "採購管理",
    sessions: [
      { date: "06/07(一)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "如何參與政府採購與標案爭議處理",
    category: "採購管理",
    sessions: [
      { date: "06/08(二)", time: "09:30-16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "六標準差綠帶",
    category: "品質管理",
    sessions: [
      { date: "06/10、11、17、18、24、25(四五)", time: "09:00~17:00", hours: 42, session: "1" },
      { date: "12/06、07、13、14、20、21(一二)", time: "09:00~17:00", hours: 42, session: "2" },
    ],
  },
  {
    title: "品質改善活動推行實務",
    category: "品質管理",
    sessions: [
      { date: "06/14(一)", time: "09:00~17:00", hours: 7, session: "1" },
      { date: "11/08(一)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "有效掌控交期與存貨管理要訣",
    category: "採購管理",
    sessions: [
      { date: "06/15(二)", time: "09:30~16:30", hours: 6, session: "1" },
      { date: "09/21(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "AI破解製造業缺工與成本困局實戰",
    category: "品質管理",
    sessions: [
      { date: "06/21、22(一二)", time: "09:00-17:00", hours: 14, session: "" },
    ],
  },
  {
    title: "製造業AI導入實戰班：從痛點盤點到 AI 導入提案",
    category: "品質管理",
    sessions: [
      { date: "06/25(五)", time: "09:30-16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "創造企業績效的採購術",
    category: "採購管理",
    sessions: [
      { date: "06/29(二)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "IECQ QC080000：2017 有害物質管理系統條文暨內部稽核訓練",
    category: "品質管理",
    sessions: [
      { date: "06/30、07/01(三四)", time: "09:30~16:30", hours: 12, session: "" },
    ],
  },
  {
    title: "有效掌控採購交期與存貨管理實務",
    category: "採購管理",
    sessions: [
      { date: "07/05(一)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "採購績效與內控管理實務",
    category: "採購管理",
    sessions: [
      { date: "07/06(二)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "總務採購策略與降低成本實務",
    category: "採購管理",
    sessions: [
      { date: "07/20(二)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "製造現場3T(TPS、TPM 、TQM)生產管理模式",
    category: "生產管理",
    sessions: [
      { date: "07/22(四)", time: "09:30-16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "全⽅位採購管理實務工作坊",
    category: "採購管理",
    sessions: [
      { date: "07/22、23(四五)", time: "09:00~17:00", hours: 14, session: "" },
    ],
  },
  {
    title: "生產計畫與控制實戰：破解排程混亂與交期壓力",
    category: "品質管理",
    sessions: [
      { date: "07/26、27(一二)", time: "09:00-17:00", hours: 14, session: "" },
    ],
  },
  {
    title: "採購成本分析與價格管理實務",
    category: "採購管理",
    sessions: [
      { date: "08/02(一)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "跨國採購實務解析與訣竅",
    category: "採購管理",
    sessions: [
      { date: "08/03(二)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "課題達成型QC STORY-新QC七大手法實務運用訓練",
    category: "生產管理",
    sessions: [
      { date: "08/19(四)", time: "09:00-17:00", hours: 7, session: "" },
    ],
  },
  {
    title: "政府採購法應用實務班",
    category: "採購管理",
    sessions: [
      { date: "08/25、26(三四)", time: "9:00-17:00", hours: 14, session: "" },
    ],
  },
  {
    title: "ISO13485醫療器材管理系統內部稽核員-2016版",
    category: "品質管理",
    sessions: [
      { date: "08/5、6(四五)", time: "09:30~16:30", hours: 12, session: "" },
    ],
  },
  {
    title: "韌性採購與敏捷供應鏈建立",
    category: "總務行政",
    sessions: [
      { date: "09/02(四)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "IE手法與生產作業改善技巧研習班",
    category: "品質管理",
    sessions: [
      { date: "09/13(一)", time: "09:00~17:00", hours: 7, session: "2" },
    ],
  },
  {
    title: "採購工作實務問題與解決技巧",
    category: "採購管理",
    sessions: [
      { date: "09/13(一)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "問題分析與決策(PSDM)能力提昇技巧",
    category: "品質管理",
    sessions: [
      { date: "09/20、21(一二)", time: "09:00~16:00", hours: 12, session: "" },
    ],
  },
  {
    title: "AI製造現場改善實戰：破解效率低落與人機浪費問題",
    category: "品質管理",
    sessions: [
      { date: "09/29、30(三四)", time: "09:00-17:00", hours: 14, session: "" },
    ],
  },
  {
    title: "AI導入企業實踐策略規劃課程",
    category: "總務行政",
    sessions: [
      { date: "10/08(五)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "AI賦能高階5S實戰：從環境管理到企業改善",
    category: "品質管理",
    sessions: [
      { date: "10/27、28(三四)", time: "09:00-17:00", hours: 14, session: "" },
    ],
  },
  {
    title: "採購人員必備之談判與議價技巧實務",
    category: "採購管理",
    sessions: [
      { date: "11/01(一)", time: "09:30~16:30", hours: 6, session: "" },
    ],
  },
  {
    title: "結構化-問題分析與解決",
    category: "品質管理",
    sessions: [
      { date: "11/09(二)", time: "09:30~16:30", hours: 6, session: "2" },
    ],
  },
  {
    title: "庫存管理實戰：破解缺料與庫存浪費問題",
    category: "品質管理",
    sessions: [
      { date: "11/29、30(一二)", time: "09:00-17:00", hours: 14, session: "" },
    ],
  },
];

// 分項分類清單（依資料出現順序去重）
const courseCategories = [...new Set(allCourses.map((c) => c.category))];

// ==================== 篩選狀態 ====================
const filterState = {
  keyword: "",
  category: "",
  month: "",
};

// ==================== 工具函式 ====================
function getMonthFromDate(dateStr) {
  const match = dateStr.match(/^(\d{1,2})\//);
  return match ? match[1].padStart(2, "0") : "";
}

function courseMatchesMonth(course, month) {
  if (!month) return true;
  return course.sessions.some((s) => getMonthFromDate(s.date) === month);
}

function filterCourses() {
  const kw = filterState.keyword.trim().toLowerCase();
  return allCourses.filter((course) => {
    const matchesKeyword = !kw || course.title.toLowerCase().includes(kw);
    const matchesCategory =
      !filterState.category || course.category === filterState.category;
    const matchesMonth = courseMatchesMonth(course, filterState.month);
    return matchesKeyword && matchesCategory && matchesMonth;
  });
}

// ==================== 報名彈窗 ====================
function openEnrollModal() {
  const modal = document.getElementById("enrollModal");
  if (!modal) return;
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeEnrollModal() {
  const modal = document.getElementById("enrollModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function initEnrollModal() {
  const modal = document.getElementById("enrollModal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close");
  const overlay = modal.querySelector(".modal-overlay");

  closeBtn?.addEventListener("click", closeEnrollModal);
  overlay?.addEventListener("click", closeEnrollModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeEnrollModal();
    }
  });
}

// ==================== 生成課程卡片 ====================
function renderCourseCard(course) {
  return `
    <div class="course-item course-item-no-image">
      <div class="course-header">
        <div class="course-title-text">${course.title}</div>
        <span class="course-category-tag">${course.category}</span>
      </div>
      <div class="course-sessions">
        ${course.sessions
          .map(
            (s) => `
          <div class="session-item">
            <div class="session-info">
              ${s.session ? `<span class="session-number">第${s.session}梯次</span>` : ""}
              <span class="session-date">${s.date}</span>
              <span class="session-time">${s.time}</span>
            </div>
            <div class="session-date-info">
              <button type="button" class="session-link enroll-trigger">立即報名</button>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCourses() {
  const coursesGrid = document.getElementById("coursesGrid");
  if (!coursesGrid) return;

  const filtered = filterCourses();

  if (filtered.length === 0) {
    coursesGrid.innerHTML = `<p class="courses-empty">找不到符合條件的課程，請試試其他關鍵字或篩選條件。</p>`;
    return;
  }

  coursesGrid.innerHTML = `
    <div class="course-list">
      ${filtered.map(renderCourseCard).join("")}
    </div>
  `;
}

// ==================== 自訂下拉選單 ====================
function buildCustomSelect(container, options, onChange) {
  const placeholder = container.dataset.placeholder || "請選擇";
  container.classList.add("custom-select");
  container.setAttribute("tabindex", "0");
  container.setAttribute("role", "listbox");

  let selectedValue = "";

  container.innerHTML = `
    <button type="button" class="custom-select-trigger">
      <span class="custom-select-label">${placeholder}</span>
      <svg class="custom-select-chevron" width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M5.5 8L10 12.5L14.5 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <ul class="custom-select-menu">
      <li class="custom-select-option is-selected" data-value="">${placeholder}</li>
      ${options
        .map((opt) => `<li class="custom-select-option" data-value="${opt.value}">${opt.label}</li>`)
        .join("")}
    </ul>
  `;

  const trigger = container.querySelector(".custom-select-trigger");
  const label = container.querySelector(".custom-select-label");
  const menu = container.querySelector(".custom-select-menu");
  const items = Array.from(container.querySelectorAll(".custom-select-option"));

  function closeMenu() {
    container.classList.remove("open");
  }

  function openMenu() {
    document
      .querySelectorAll(".custom-select.open")
      .forEach((el) => el !== container && el.classList.remove("open"));
    container.classList.add("open");
  }

  trigger.addEventListener("click", () => {
    container.classList.contains("open") ? closeMenu() : openMenu();
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      selectedValue = item.dataset.value;
      items.forEach((i) => i.classList.toggle("is-selected", i === item));
      label.textContent = item.textContent;
      closeMenu();
      onChange(selectedValue);
    });
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) closeMenu();
  });

  container.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  return { menu };
}

function initCourseFilters() {
  const searchInput = document.getElementById("courseSearch");
  const categoryContainer = document.getElementById("categoryFilter");
  const monthContainer = document.getElementById("monthFilter");

  searchInput?.addEventListener("input", (e) => {
    filterState.keyword = e.target.value;
    renderCourses();
  });

  if (categoryContainer) {
    buildCustomSelect(
      categoryContainer,
      courseCategories.map((cat) => ({ value: cat, label: cat })),
      (value) => {
        filterState.category = value;
        renderCourses();
      },
    );
  }

  if (monthContainer) {
    const months = Array.from({ length: 12 }, (_, i) =>
      String(i + 1).padStart(2, "0"),
    );
    buildCustomSelect(
      monthContainer,
      months.map((m) => ({ value: m, label: `${Number(m)}月` })),
      (value) => {
        filterState.month = value;
        renderCourses();
      },
    );
  }
}

// 使用事件委派處理「立即報名」按鈕點擊（因課程卡片為動態產生）
function initEnrollDelegation() {
  const coursesGrid = document.getElementById("coursesGrid");
  if (!coursesGrid) return;

  coursesGrid.addEventListener("click", (e) => {
    if (e.target.closest(".enroll-trigger")) {
      openEnrollModal();
    }
  });
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

// ==================== 導航列滾動效果 ====================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }
  });
}

// ==================== 初始化所有功能 ====================
document.addEventListener("DOMContentLoaded", () => {
  // 漢堡選單 toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });
  }

  // 生成課程篩選列與卡片
  initCourseFilters();
  renderCourses();
  initEnrollDelegation();
  initEnrollModal();

  // 初始化功能
  initSmoothScroll();
  initNavbarScroll();

  console.log("✅ 網站已成功載入!");
  console.log(`🎓 課程總數: ${allCourses.length} 門`);
});
