/**
 * 연세대학교 경영대학·경영전문대학원 재무분야 (Yonsei School of Business - Finance Division)
 * 통합 데이터 파일 (교수진, 일반대학원 재무전공 MS/PhD, Finance MBA)
 * 이 파일만 수정하면 홈페이지의 교수 정보, 교과과정, 내규, 입학 일정이 자동으로 반영됩니다.
 */

window.YSB_FINANCE_DATA = {
  meta: {
    titleKo: "연세대학교 경영대학 재무분야",
    titleEn: "Finance Division · Yonsei School of Business",
    address: "03722 서울특별시 서대문구 연세로 50 연세대학교 경영관(212동)",
    addressEn: "50 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea · Building 212 (Yonsei School of Business)",
    copyright: "Copyright © 2026 Yonsei School of Business Finance Division. All rights reserved.",
    leadership: [
      {
        role: "재무분야 주임교수",
        roleEn: "Chair of Finance Division",
        name: "한재훈 교수",
        nameEn: "Prof. Jaehoon Hahn",
        office: "경영관 615호",
        officeEn: "BIZ #615",
        email: "hahnj@yonsei.ac.kr",
        link: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22024"
      },
      {
        role: "Finance MBA 주임교수",
        roleEn: "Finance MBA Program Director",
        name: "한재훈 교수",
        nameEn: "Prof. Jaehoon Hahn",
        office: "경영관 615호",
        officeEn: "BIZ #615",
        email: "hahnj@yonsei.ac.kr",
        link: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22024",
        hideInEn: true
      },
      {
        role: "일반대학원 석박사 전공코디교수",
        roleEn: "MS/Ph.D. Program Coordinator",
        name: "변성준 교수",
        nameEn: "Prof. Sungjune Pyun",
        office: "경영관 643호",
        officeEn: "BIZ #643",
        email: "sjpyun@yonsei.ac.kr",
        link: "https://sjpyun.github.io/"
      }
    ]
  },

  about: {
    headline: "자본시장과 기업가치의 미래를 선도하는 글로벌 재무 연구·교육의 중심",
    subheadline: "연세대학교 경영대학 재무분야는 엄밀한 학술 연구를 지향하는 일반대학원(MS/Ph.D.) 재무전공 과정과 금융 전문 리더를 양성하는 Finance MBA(FMBA) 과정을 통해 이론과 실무를 겸비한 최고의 재무·금융 인재를 배출합니다.",
    pillars: [
      {
        id: "corporate-finance",
        title: "기업재무 및 지배구조",
        titleEn: "Corporate Finance & Governance",
        desc: "기업가치 극대화를 위한 자금조달, 자본구조, 배당정책, IPO, 인수합병(M&A), 기업지배구조, ESG 및 혁신(R&D) 투자의사결정과 기업가치 간의 관계를 이론적·실증적으로 규명합니다.",
        descEn: "Theoretical and empirical investigation of corporate financial decisions aimed at firm value maximization, including capital raising, capital structure, payout policy, IPOs, mergers and acquisitions (M&A), corporate governance, ESG, and innovation (R&D) investment.",
        keywords: ["자본구조", "M&A·구조조정", "기업지배구조", "ESG·혁신", "내부자본시장"],
        keywordsEn: ["Capital Structure", "M&A & Restructuring", "Corporate Governance", "ESG & Innovation", "Internal Capital Markets"]
      },
      {
        id: "asset-pricing",
        title: "자산가격결정 및 투자론",
        titleEn: "Asset Pricing & Investments",
        desc: "주식, 채권, 외환, 부동산 등 다양한 자산의 가격결정 메커니즘과 자본시장의 효율성, 시장미시구조, 거시·국제금융 변동, 투자전략 및 기관투자자 성과평가를 심도 있게 연구합니다.",
        descEn: "In-depth research on pricing mechanisms across equities, fixed income, foreign exchange, and real estate, alongside capital market efficiency, market microstructure, macro- and international finance dynamics, investment strategies, and institutional performance evaluation.",
        keywords: ["자산가격이론", "실증재무", "포트폴리오 전략", "거시·국제금융", "시장유동성"],
        keywordsEn: ["Asset Pricing Theory", "Empirical Finance", "Portfolio Strategy", "Macro & International Finance", "Market Liquidity"]
      },
      {
        id: "financial-institutions-derivatives",
        title: "금융기관 및 파생상품",
        titleEn: "Financial Institutions & Derivatives",
        desc: "선물, 옵션, 스왑 등 파생상품의 가격결정 이론과 위험관리, 금융기관의 경영 및 규제, 신용위험(Credit Risk) 모델링과 자본시장의 미시구조를 심도 있게 탐구합니다.",
        descEn: "Rigorous exploration of derivatives pricing theory (futures, options, swaps) and risk management, management and regulation of financial institutions, credit risk modeling, and capital market microstructure.",
        keywords: ["파생상품 가격결정", "금융기관 경영·규제", "신용위험", "위험관리", "시장미시구조"],
        keywordsEn: ["Derivatives Pricing", "Banking & Regulation", "Credit Risk", "Risk Management", "Market Microstructure"]
      },
      {
        id: "insurance-risk",
        title: "보험 및 리스크 관리",
        titleEn: "Insurance & Risk Management",
        desc: "보험의 경제·통계·법적 기본원리를 바탕으로 보험계약 설계, 전사적 리스크 관리, 연금시장 및 장수위험, 금융기관 규제 및 재보험 등 금융·보험 산업의 핵심 과제를 연구합니다.",
        descEn: "Research on core challenges in the financial and insurance sectors grounded in economic, statistical, and legal principles, including insurance contract design, enterprise risk management, pension markets, longevity risk, financial regulation, and reinsurance.",
        keywords: ["리스크 관리", "보험계리·연금", "금융기관 규제", "사모신용·안정성", "재보험"],
        keywordsEn: ["Risk Management", "Actuarial Science & Pensions", "Financial Regulation", "Private Credit & Stability", "Reinsurance"]
      }
    ],
    stats: [
      { number: "4대 핵심 분야", label: "재무금융 전 영역 심화 연구", sub: "자산가격 · 기업재무 · 금융기관 및 파생상품 · 보험 및 리스크" },
      { number: "Top Tier", label: "글로벌 연구역량을 갖춘 교수진", sub: "JF, JFE, RFS, MS, JFQA, QJE 등 게재" },
      { number: "MS / Ph.D.", label: "일반대학원 재무전공", sub: "학술 연구자 및 금융전문가 양성" },
      { number: "FMBA", label: "Finance MBA", sub: "금융공학·자산운용 특화 MBA" }
    ],
    statsEn: [
      { number: "4 Core Pillars", label: "Comprehensive Finance Research", sub: "Asset Pricing · Corporate Finance · Institutions & Derivatives · Insurance & Risk" },
      { number: "Top Tier", label: "Globally Recognized Faculty", sub: "Our faculty have published in JF, JFE, RFS, MS, JFQA, QJE, among others." },
      { number: "M.S. / Ph.D.", label: "Full-Time Graduate Program", sub: "Training Academic Scholars & Financial Economists" },
      { number: "Global Placement", label: "Academic & Research Careers", sub: "Global Ph.D. Programs, University Faculty & Leading Institutions" }
    ]
  },

  faculty: [
    {
      id: "hahn-jaehoon",
      name: "한재훈",
      nameEn: "Jaehoon Hahn",
      title: "교수",
      titleEn: "Professor",
      roleBadge: "재무분야 주임교수 · FMBA 주임교수",
      roleBadgeEn: "Chair of Finance Division",
      degree: "Ph.D. in Finance, Columbia University",
      office: "경영관 615호",
      officeEn: "BIZ #615",
      phone: "02-2123-5460",
      email: "hahnj@yonsei.ac.kr",
      website: "",
      websiteLabel: "",
      websiteLabelEn: "",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22024",
      photo: "images/faculty/hahn_jaehoon.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/7115_1772514980000.do",
      categories: ["asset-pricing"],
      researchTags: ["Asset Pricing", "Imperfect Capital Markets", "Macroeconomic Fluctuations", "Empirical Finance"],
      briefBio: "Columbia University 재무학 박사. University of Washington 조교수를 거쳐 연세대학교 경영대학 교수로 재직 중이며, 자산가격결정, 불완전 자본시장, 거시경제 변동과 투자를 연구하고 있습니다.",
      briefBioEn: "Ph.D. in Finance from Columbia University. Previously Assistant Professor at the University of Washington; his research focuses on asset pricing, imperfect capital markets, and macroeconomic fluctuations."
    },
    {
      id: "pyun-sungjune",
      name: "변성준",
      nameEn: "Sungjune Pyun",
      title: "부교수",
      titleEn: "Associate Professor",
      roleBadge: "일반대학원 석박사 전공코디교수",
      roleBadgeEn: "MS/Ph.D. Program Coordinator",
      degree: "Ph.D. in Finance, Univ. of Southern California",
      office: "경영관 643호",
      officeEn: "BIZ #643",
      phone: "02-2123-5489",
      email: "sjpyun@yonsei.ac.kr",
      website: "https://sjpyun.github.io/",
      websiteLabel: "개인 홈페이지",
      websiteLabelEn: "Personal Website",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22154",
      photo: "images/faculty/pyun_sungjun.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/14622_1781079584000.do",
      categories: ["asset-pricing"],
      researchTags: ["Empirical Asset Pricing", "Investment Theory", "International Finance", "Macrofinance"],
      briefBio: "USC Marshall 재무경제학 박사 및 Stanford 통계학 석사. 싱가포르국립대(NUS) 조교수를 거쳐 연세대학교 경영대학 부교수로 재직 중이며, 실증 자산가격결정, 국제금융, 거시금융을 연구합니다.",
      briefBioEn: "Ph.D. in Finance from USC Marshall and M.S. in Statistics from Stanford University. Previously Assistant Professor at NUS; his research centers on empirical asset pricing, international finance, and macro-finance."
    },
    {
      id: "shin-jinyoung",
      name: "신진영",
      nameEn: "Jinyoung Shin",
      title: "교수",
      titleEn: "Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Finance, Carnegie Mellon University",
      office: "경영관 501호",
      officeEn: "BIZ #501",
      phone: "02-2123-5467",
      email: "jshin@yonsei.ac.kr",
      website: "",
      websiteLabel: "",
      websiteLabelEn: "",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22000",
      photo: "images/faculty/shin_jinyoung.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/7046_1772514947000.do",
      categories: ["corporate-finance", "asset-pricing"],
      researchTags: ["Corporate Finance", "Investments", "Market Microstructure", "ESG & Governance"],
      briefBio: "Carnegie Mellon University 재무학 박사. 홍콩과기대(HKUST) 조교수, 한국증권학회 회장, 한국ESG기준원 원장, 자본시장연구원 원장을 역임하였으며 기업재무와 시장미시구조를 연구합니다.",
      briefBioEn: "Ph.D. in Finance from Carnegie Mellon University. Former Assistant Professor at HKUST, President of the Korean Securities Association, and President of KCMI & KCGS; researches corporate finance and market microstructure."
    },
    {
      id: "shin-hyunhan",
      name: "신현한",
      nameEn: "Hyun-Han Shin",
      title: "교수",
      titleEn: "Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Finance, The Ohio State University",
      office: "경영관 632호",
      officeEn: "BIZ #632",
      phone: "02-2123-5466",
      email: "hhanshin@gmail.com",
      website: "https://scholar.google.co.kr/citations?user=iqSChOAAAAAJ&hl=en&oi=sra",
      websiteLabel: "Google Scholar",
      websiteLabelEn: "Google Scholar",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22001",
      photo: "images/faculty/shin_hyunhan.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/14626_1781079701000.do",
      categories: ["corporate-finance", "insurance-risk"],
      researchTags: ["Corporate Investment Policy", "Corporate Governance", "M&A & Restructuring", "Family Enterprise"],
      briefBio: "The Ohio State University 재무학 박사. SUNY Buffalo 교수를 거쳐 연세대학교 경영대학 교수로 재직 중이며, 기업투자정책, 지배구조, 내부자본시장, 인수합병(M&A) 및 가족기업을 연구합니다.",
      briefBioEn: "Ph.D. in Finance from The Ohio State University. Previously faculty at SUNY Buffalo; his research focuses on corporate investment policy, corporate governance, internal capital markets, M&A, and family enterprises."
    },
    {
      id: "auh-junkyung",
      name: "어준경",
      nameEn: "Jun Kyung Auh",
      title: "부교수",
      titleEn: "Associate Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Finance & Economics, Columbia University",
      office: "경영관 504호",
      officeEn: "BIZ #504",
      phone: "02-2123-2505",
      email: "junkyung.auh@yonsei.ac.kr",
      website: "https://junkyung.yonsei.ac.kr/",
      websiteLabel: "개인 홈페이지",
      websiteLabelEn: "Personal Website",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22057",
      photo: "images/faculty/auh_junkyung.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/14628_1781079747000.do",
      categories: ["derivatives-quant", "asset-pricing"],
      researchTags: ["Fixed Income & Derivatives", "Portfolio Theory", "Systematic Investments", "Machine Learning in Finance"],
      briefBio: "Columbia University 재무경제학 박사 및 수학 석사. Deutsche Bank(NY) VP, Cubist Systematic Strategies Alpha Researcher, Georgetown University 조교수를 거쳐 채권·파생상품 및 금융 머신러닝을 연구합니다.",
      briefBioEn: "Ph.D. in Finance & Economics and M.A. in Mathematics from Columbia University. Former VP at Deutsche Bank (NY), Alpha Researcher at Cubist, and Assistant Professor at Georgetown University; studies fixed income, derivatives, and machine learning in finance."
    },
    {
      id: "eom-youngho",
      name: "엄영호",
      nameEn: "Young Ho Eom",
      title: "교수",
      titleEn: "Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Finance, New York University",
      office: "경영관 645호",
      officeEn: "BIZ #645",
      phone: "02-2123-4193",
      email: "yheom@yonsei.ac.kr",
      website: "",
      websiteLabel: "",
      websiteLabelEn: "",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22002",
      photo: "images/faculty/eom_youngho.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/7052_1772514950000.do",
      categories: ["derivatives-quant", "asset-pricing"],
      researchTags: ["Credit Risk", "Derivatives Pricing", "Empirical Asset Pricing", "Monetary Policy"],
      briefBio: "New York University 재무학 박사. 뉴욕연방준비은행(FRBNY) Economist, 제11대 연세대학교 경영대학장 겸 경영전문대학원장을 역임하였으며, 신용위험과 파생상품 가격결정, 자산가격결정을 연구합니다.",
      briefBioEn: "Ph.D. in Finance from New York University. Former Economist at the Federal Reserve Bank of New York and 11th Dean of Yonsei School of Business; his research focuses on credit risk, derivatives pricing, and empirical asset pricing."
    },
    {
      id: "lee-junghoon",
      name: "이정훈",
      nameEn: "Jung Hoon Lee",
      title: "부교수",
      titleEn: "Associate Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Finance, Indiana University",
      office: "경영관 651호",
      officeEn: "BIZ #651",
      phone: "02-2123-2495",
      email: "junghoonlee@yonsei.ac.kr",
      website: "https://sites.google.com/view/junghoonl/home",
      websiteLabel: "개인 홈페이지",
      websiteLabelEn: "Personal Website",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=54330",
      photo: "images/faculty/lee_junghoon.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/thumb_17438_1784860449000.do",
      categories: ["asset-pricing", "insurance-risk", "derivatives-quant"],
      researchTags: ["Asset Management", "Credit Risk & Private Credit", "Financial Regulation", "Mutual Funds"],
      briefBio: "Indiana University 재무학 박사. Tulane 및 Vanderbilt 대학 교수와 미 재무부 금융조사국(OFR) Senior Researcher를 거쳐 부임하였으며, 자산운용·뮤추얼펀드, 신용위험 및 금융규제를 연구합니다.",
      briefBioEn: "Ph.D. in Finance from Indiana University. Former faculty at Tulane and Vanderbilt Universities and Senior Researcher at the U.S. Treasury Office of Financial Research (OFR); studies asset management, credit risk, and financial regulation."
    },
    {
      id: "lee-jiyoon",
      name: "이지윤",
      nameEn: "Jiyoon Lee",
      title: "부교수",
      titleEn: "Associate Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Finance, Univ. of Illinois Urbana-Champaign",
      office: "경영관 545호",
      officeEn: "BIZ #545",
      phone: "02-2123-5486",
      email: "jiyoonlee@yonsei.ac.kr",
      website: "",
      websiteLabel: "",
      websiteLabelEn: "",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22083",
      photo: "images/faculty/lee_jiyoon.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/14636_1781079901000.do",
      categories: ["corporate-finance"],
      researchTags: ["Corporate Finance", "Corporate Governance", "ESG", "Innovation & R&D"],
      briefBio: "UIUC 재무학 박사. George Washington University 조교수를 거쳐 연세대학교 경영대학 부교수로 재직 중이며, 기업재무, 기업지배구조, ESG 및 기업 혁신(R&D)을 연구합니다.",
      briefBioEn: "Ph.D. in Finance from the University of Illinois Urbana-Champaign. Previously Assistant Professor at George Washington University; her research focuses on corporate finance, corporate governance, ESG, and innovation (R&D)."
    },
    {
      id: "jeong-seungyeon",
      name: "정승연",
      nameEn: "Seungyeon Jeong",
      title: "조교수",
      titleEn: "Assistant Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Actuarial Science, Bayes Business School, London",
      office: "경영관 607호",
      officeEn: "BIZ #607",
      phone: "02-2123-5462",
      email: "seung.jeong@yonsei.ac.kr",
      website: "",
      websiteLabel: "",
      websiteLabelEn: "",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22195",
      photo: "images/faculty/jeong_seungyeon.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/14638_1781079962000.do",
      categories: ["insurance-risk"],
      researchTags: ["Insurance & Risk Management", "Actuarial Science", "Pension Markets", "Longevity Risk"],
      briefBio: "영국 런던대 Bayes Business School 보험계리학 박사. 보험 및 리스크 관리, 보험계리학, 연금시장 및 주관적 기대수명·장수위험을 연구합니다.",
      briefBioEn: "Ph.D. in Actuarial Science from Bayes Business School, City, University of London. Researches insurance and risk management, actuarial science, pension markets, and subjective life expectancy and longevity risk."
    },
    {
      id: "choi-wonchang",
      name: "최원창",
      nameEn: "Won-chang Choi",
      title: "조교수",
      titleEn: "Assistant Professor",
      roleBadge: "",
      roleBadgeEn: "",
      degree: "Ph.D. in Economics, Washington Univ. in St. Louis",
      office: "경영관 614호",
      officeEn: "BIZ #614",
      phone: "02-2123-5464",
      email: "won-chang.choi@yonsei.ac.kr",
      website: "http://www.wonchangchoi.com",
      websiteLabel: "개인 홈페이지",
      websiteLabelEn: "Personal Website",
      ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/finance.do?mode=view&articleNo=22194",
      photo: "images/faculty/choi_wonchang.jpg",
      photoFallback: "https://ysb.yonsei.ac.kr/app/board/attach/image/7205_1772515070000.do",
      categories: ["asset-pricing", "derivatives-quant"],
      researchTags: ["Theoretical Asset Pricing", "Slow-Moving Capital", "Market Frictions", "Dynamic Portfolio Choice"],
      briefBio: "Washington University in St. Louis 경제학 박사 및 University of Rochester 재무학 석사. 시장 마찰과 비유동적 자본(Slow-Moving Capital), 자산가격 동학 및 동태적 포트폴리오 선택을 연구합니다.",
      briefBioEn: "Ph.D. in Economics from Washington University in St. Louis and M.S. in Finance from the University of Rochester. Studies theoretical asset pricing, market frictions, slow-moving capital, and dynamic portfolio choice."
    }
  ],

  emeritusFaculty: [
    { name: "구본일", nameEn: "Bon-Il Koo", title: "명예교수", titleEn: "Professor Emeritus", major: "재무", office: "410호", officeEn: "#410", phone: "02-2123-2517", email: "bku@yonsei.ac.kr", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/professor-emeritus.do?mode=view&articleNo=21996" },
    { name: "김인준", nameEn: "In-Joon Kim", title: "퇴임교수", titleEn: "Retired Professor", major: "재무", office: "-", officeEn: "-", phone: "-", email: "ijkim728@yonsei.ac.kr", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/retired-professor.do?mode=view&articleNo=21997" },
    { name: "김정동", nameEn: "Jung-Dong Kim", title: "퇴임교수", titleEn: "Retired Professor", major: "보험", office: "-", officeEn: "-", phone: "-", email: "jdkins@yonsei.ac.kr", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/retired-professor.do?mode=view&articleNo=21998" },
    { name: "박상용", nameEn: "Sang-Yong Park", title: "명예교수", titleEn: "Professor Emeritus", major: "재무", office: "413호", officeEn: "#413", phone: "02-2123-2510", email: "spark311@yonsei.ac.kr", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/professor-emeritus.do?mode=view&articleNo=21999" },
    { name: "연강흠", nameEn: "Kang-Heum Yon", title: "명예교수", titleEn: "Professor Emeritus", major: "재무", office: "410호", officeEn: "#410", phone: "02-2123-2517", email: "khyon@yonsei.ac.kr", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/professor-emeritus.do?mode=view&articleNo=22003" },
    { name: "이기을", nameEn: "Ki-Eul Lee", title: "명예교수", titleEn: "Professor Emeritus", major: "재무", office: "-", officeEn: "-", phone: "-", email: "-", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/professor-emeritus.do?mode=view&articleNo=22043" },
    { name: "임웅기", nameEn: "Ung-Ki Lim", title: "명예교수", titleEn: "Professor Emeritus", major: "재무", office: "413호", officeEn: "#413", phone: "02-2123-2510", email: "ungkilim@yonsei.ac.kr", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/professor-emeritus.do?mode=view&articleNo=22004" },
    { name: "정종락", nameEn: "Jong-Rock Chung", title: "명예교수", titleEn: "Professor Emeritus", major: "재무", office: "415호", officeEn: "#415", phone: "02-2123-2511", email: "cjr513@yonsei.ac.kr", ysbLink: "https://ysb.yonsei.ac.kr/ysb/faculty/professor-emeritus.do?mode=view&articleNo=22005" }
  ],

  msPhd: {
    intro: {
      title: "일반대학원 경영학과 재무전공 (MS / Integrated MS-Ph.D. / Ph.D.)",
      subtitle: "세계 연구 시장을 선도하는 탁월한 재무학자 및 고급 금융 연구인력 양성",
      description: "연세대학교 일반대학원 경영학과 재무전공 석·박사 과정은 자산가격결정과 투자이론, 기업의 재무적 의사결정과 지배구조, 파생상품 및 금융공학, 그리고 보험 및 리스크 관리의 핵심 원리를 심층적으로 탐구하는 단일 전공 트랙 과정입니다. 이론적·계량적 연구 역량을 갖춘 졸업생들은 국내외 유수 대학 교수진, 국책·민간 금융경제연구소 연구위원, 금융공기업 및 글로벌 금융기관 전문직으로 진출하고 있습니다. 대부분의 수업은 영어로 진행됩니다."
    },
    tracks: [
      {
        name: "석사과정 (M.S.)",
        duration: "2년 (4학기)",
        credits: "30학점",
        degreeReq: "학사학위 소지자 (전공 무관)",
        thesis: "석사 학위논문 작성",
        career: "국내외 금융기관·연구소 전문연구직 또는 국내외 유수 대학 Ph.D. 진학",
        highlights: [
          "재무전공 핵심 이론 및 실증·계량 분석 방법론 집중 이수",
          "비경영학 전공자의 경우 기초지식 보완을 위한 학부보충과목 지도 (학점 면제 신청 가능)",
          "3학기 종료 시점 이전 신청 및 분야교수회의 심의를 통해 석박사 통합과정 전환 가능"
        ]
      },
      {
        name: "박사과정 (Ph.D.)",
        duration: "4년 (8학기)",
        credits: "36학점 (부전공 9학점 면제)",
        degreeReq: "석사학위 소지자",
        thesis: "박사 학위논문 작성 (영문 권장)",
        career: "국내외 대학 전임교원, 금융·경제 국책연구원 및 글로벌 연구기관",
        highlights: [
          "재무 분야 심층 학술연구 및 SSCI 최상위 저널 게재 역량 강화",
          "재무분야 내규에 따라 타 분야 부전공 9학점 취득 요건 면제 (재무·경제·통계 심화 집중)",
          "전일제(Full-time) 코스워크 이수 시 RA·TA·성적우수 장학금 및 국제학회 발표 지원"
        ]
      }
    ],
    courses: [
      { code: "BIZ6018", nameKo: "재무론", nameEn: "INTRODUCTORY FINANCE THEORY", credits: 3, category: "전공필수 (석·박사 공통)" },
      { code: "BIZ7037", nameKo: "기업재무이론 I", nameEn: "CORPORATE FINANCE I", credits: 3, category: "전공필수 (석·박사 공통)" },
      { code: "BIZ8016", nameKo: "기업재무이론 II", nameEn: "CORPORATE FINANCE II", credits: 3, category: "전공필수 (박사)" },
      { code: "BIZ6020", nameKo: "자산가격이론", nameEn: "ASSET PRICING", credits: 3, category: "전공필수 (석·박사 공통)" },
      { code: "BIZ9007", nameKo: "재무실증연구", nameEn: "EMPIRICAL FINANCE", credits: 3, category: "전공필수 (석·박사 공통)" },
      { code: "BIZ6029", nameKo: "기업경제학", nameEn: "MICROECONOMICS FOR FINANCE", credits: 3, category: "방법론필수 (석·박사 공통)" },
      { code: "BIZ7018", nameKo: "파생상품론", nameEn: "FUTURES AND OPTIONS", credits: 3, category: "전공선택" },
      { code: "BIZ9019", nameKo: "자산가격론세미나", nameEn: "SEMINAR ON ASSET PRICING THEORY", credits: 3, category: "전공선택 · 분야세미나" },
      { code: "BIZ9008", nameKo: "기업재무 세미나", nameEn: "SEMINAR ON CORPORATE FINANCE", credits: 3, category: "전공선택 · 분야세미나" },
      { code: "BIZ8019", nameKo: "보험론", nameEn: "INSURANCE", credits: 3, category: "전공선택" },
      { code: "BIZ9012", nameKo: "보험 특수문제", nameEn: "SPECIAL TOPICS IN INSURANCE", credits: 3, category: "전공선택" },
      { code: "ECO/STA", nameKo: "수리통계학 · 계량경제학 I·II", nameEn: "MATHEMATICAL STATISTICS & ECONOMETRICS", credits: 3, category: "방법론필수·선택" }
    ],
    regulations: {
      phd: {
        title: "재무전공 박사과정 (및 석박사 통합과정) 내규 핵심 요약",
        updated: "재무분야 내규 기준",
        sections: [
          {
            heading: "1. 이수학점 및 코스워크",
            items: [
              "이수학점: 박사 36학점 / 석박사 통합과정 54학점 (타 분야 부전공 9학점 의무 면제)",
              "방법론 (12학점): 기업경제학, 수리통계학, 계량경제학 I (필수 9학점) + 방법론 선택 1과목(3학점)",
              "전공필수 (15학점): 재무론, 기업재무이론 I, 기업재무이론 II, 자산가격이론, 재무실증연구 (종합시험 출제 과목)",
              "전공선택 (9학점): 재무분야 정규 세미나/선택과목 또는 사전 승인된 경제·통계·수학 대학원 과목"
            ]
          },
          {
            heading: "2. 박사 종합자격시험 (Qualifying Exam) 및 3년차 논문",
            items: [
              "종합시험: 전공필수 5과목 대상 180분 필기시험, 총점 80% 이상 합격 (최대 2회 응시 가능, 4과목 합격 시 부분합격 인정)",
              "3년차 논문 (Third Year Paper): 종합시험 합격 후 독자적인 Working Paper를 작성하여 교수 3인 심사위원회 구두 발표 및 승인 통과"
            ]
          },
          {
            heading: "3. 학위논문 심사 및 졸업 연구실적 요건",
            items: [
              "분야 세미나 발표: 학위논문 본심 이전에 재무분야 정규 세미나 발표 1회 이상 필수",
              "연구실적 요건 (택1): ① 주요 국제학술대회(AFA, WFA, EFA 등) 논문 발표, ② SSCI 저널 1차 심사결과(Review Decision) 확보, ③ 국내 주요 학술지 1편 이상 게재",
              "연간 보고서: 박사 2년차 말 / 통합 3년차 말부터 매년 Research Progress Report 지도교수 승인 후 제출"
            ]
          }
        ]
      },
      ms: {
        title: "재무전공 석사과정 (M.S.) 내규 핵심 요약",
        updated: "재무분야 내규 기준",
        sections: [
          {
            heading: "1. 이수학점 및 교과목 구성 (4학기 과정, 총 30학점)",
            items: [
              "전공필수 (12학점): 재무론, 기업재무이론 I, 자산가격이론, 재무실증연구",
              "방법론 (9학점): 기업경제학, 수리통계학, 계량경제학 I",
              "전공선택 (9학점): 재무분야 개설 선택과목 또는 사전 승인된 타 학과(경제·통계 등) 대학원 과목"
            ]
          },
          {
            heading: "2. 방법론 과목 이수면제 제도",
            items: [
              "수리통계학 면제: 학부에서 수리통계학 관련 과목을 이수하고 B+ 이상 취득 시",
              "계량경제학 I 면제: 학부에서 계량경제학 관련 과목을 2과목(6학점) 이상 이수하고 모두 B+ 이상 취득 시 (주임교수 승인 필요)"
            ]
          },
          {
            heading: "3. 분야 세미나 및 학위논문 요건",
            items: [
              "분야 세미나: 재학 중 재무분야 정규 세미나(자산가격론 세미나 또는 기업재무 세미나) 1회 이상 수강 이수",
              "석사 학위논문: 지도교수 배정 후 석사 학위논문 작성 및 구두심사 통과",
              "석박사 통합과정 전환: 3학기 종료 시점 이전 신청 및 분야교수회의 승인을 거쳐 전환 가능"
            ]
          }
        ]
      },
      support: [
        {
          title: "국제학술대회 참가 경비 지원",
          badge: "",
          desc: "AFA, WFA, EFA, FMA, AEA, WEA, CAFM, APAD 등 주요 국제학술대회에서 단독 또는 공저 논문을 발표하는 대학원생에게 항공비·숙박비·등록비를 실비 지원합니다 (박사/통합과정 내 2회, 석사과정 내 1회, 회당 한도 200만원)."
        },
        {
          title: "조교(RA · TA · OA) 및 성적우수 장학금",
          badge: "",
          desc: "풀타임 박사/통합과정 연구조교(RA) 우수장학금, 전임교수 강의조교(TA) 장학금, 행정조교(OA) 근로장학금 및 BK21 연구장학금 등 폭넓은 등록금·연구비 지원 제도를 운영합니다."
        }
      ]
    }
  },

  fmba: {
    overview: {
      badge: "Finance Specialized MBA",
      title: "연세대학교 경영전문대학원 Finance MBA (FMBA)",
      subtitle: "금융공학·자산운용·IB 분야를 선도할 미래 금융 CEO 및 핵심 금융전문가 양성 과정",
      description: "연세대학교 Finance MBA(FMBA)는 금융공학과 자산운용, 기업금융 및 투자은행(IB) 분야에 특화된 심화 교육을 받고자 하는 금융산업 및 유관 분야의 초급·중간관리자를 위한 국내 최고 권위의 재무·금융 특화 MBA 학위 과정입니다. 글로벌 연구역량을 갖춘 연세경영 재무 전임교수진의 이론 강의와 현장 중심 사례연구, 그리고 40,000여 연세 경영 동문 네트워크를 통해 금융 리더로서의 도약을 지원합니다.",
      specs: [
        { label: "수여 학위", value: "경영학석사 (MBA)", sub: "국내 최초·유일 Triple Crown (AACSB·EQUIS·AMBA) 인증" },
        { label: "수업 연한", value: "2년 (4학기 / 22개월)", sub: "Part-time 야간 과정 (졸업논문 없음)" },
        { label: "강의 시간", value: "월 · 화 · 목 19:00 – 22:00", sub: "주 3일 야간 (계절학기: 월·화·목·금 또는 수·토)" },
        { label: "졸업 요건", value: "총 45학점 이수", sub: "전공필수 33학점 / 영어과목 1.5학점↑ / 리더십 3~6학점" },
        { label: "강의 언어", value: "한국어 강의 원칙", sub: "일부 글로벌·영어 개설 과목 1.5학점 이상 이수" },
        { label: "모집 인원", value: "매년 3월 입학 / 35명 내외", sub: "CFA Partnership Program 연계 및 엄격한 학사관리" }
      ]
    },
    curriculum: [
      {
        semester: "1년차 1학기 (Spring I)",
        theme: "재무·금융의 핵심 기초 확립 (Core Foundations)",
        totalCredits: "21학점",
        modules: [
          { name: "Module 1", period: "3월 ~ 4월 (8주)", courses: "금융경제학, 재무회계, 재무관리", credits: "9학점" },
          { name: "Module 2", period: "5월 ~ 6월 (8주)", courses: "금융경제학, 재무회계, 재무관리", credits: "9학점" },
          { name: "여름세션 (Summer)", period: "6월 ~ 7월 (4주)", courses: "금융통계학", credits: "3학점" }
        ]
      },
      {
        semester: "1년차 2학기 (Fall I)",
        theme: "기업재무·투자론 및 금융수리 분석 (Analytical Finance)",
        totalCredits: "21학점",
        modules: [
          { name: "Module 1", period: "9월 ~ 10월 (8주)", courses: "금융수학, 기업재무, 투자론", credits: "9학점" },
          { name: "Module 2", period: "11월 ~ 12월 (8주)", courses: "금융수학, 기업재무, 투자론", credits: "9학점" },
          { name: "겨울세션 (Winter)", period: "12월 ~ 1월 (4주)", courses: "마케팅, 전공선택 (Electives)", credits: "3학점" }
        ]
      },
      {
        semester: "2년차 3학기 (Spring II)",
        theme: "파생상품 및 전략적 의사결정 심화 (Derivatives & Strategy)",
        totalCredits: "21학점",
        modules: [
          { name: "Module 1", period: "3월 ~ 4월 (8주)", courses: "파생상품론, ODI 매니지먼트, 전공선택 (Electives)", credits: "9학점" },
          { name: "Module 2", period: "5월 ~ 6월 (8주)", courses: "파생상품론, 전략, 전공선택 (Electives)", credits: "9학점" },
          { name: "여름세션 (Summer)", period: "6월 ~ 7월 (4주)", courses: "조직행동, 전공선택 (Electives)", credits: "3학점" }
        ]
      },
      {
        semester: "2년차 4학기 (Fall II)",
        theme: "금융사례연구 및 실무 캡스톤 통합 (Financial Case Studies & Capstone)",
        totalCredits: "18학점",
        modules: [
          { name: "Module 1", period: "9월 ~ 10월 (8주)", courses: "금융사례연구, 전공선택 (Electives), 전공선택 (Electives)", credits: "9학점" },
          { name: "Module 2", period: "11월 ~ 12월 (8주)", courses: "금융사례연구, 전공선택 (Electives), 전공선택 (Electives)", credits: "9학점" }
        ]
      }
    ],
    electiveTracks: [
      {
        track: "금융공학 심화 트랙",
        trackEn: "Financial Engineering Track",
        courses: ["고급파생상품론 (Advanced Derivatives)", "재무모델링 (Financial Modeling)", "계산재무론 (Computational Finance)", "채권시장 및 이자율모형 (Fixed Income Markets)"],
        desc: "파생상품 설계·가격결정, 퀀트 모델링 및 수치해석 기법을 실무 데이터에 적용하는 역량을 배양합니다."
      },
      {
        track: "자산운용 / 투자은행(IB) 트랙",
        trackEn: "Asset Management & Investment Banking Track",
        courses: ["자산운용의 이론과 실제 (Theory & Practice of Asset Management)", "국제재무 (International Finance)", "기업재무와 인수합병 (Corporate Finance & M&A)", "가치평가 및 사모펀드"],
        desc: "기관투자자의 포트폴리오 운용 전략, 글로벌 자본시장 분석 및 M&A·기업금융 딜 구조화 전문성을 함양합니다."
      },
      {
        track: "금융시장 · 리스크 공통 트랙",
        trackEn: "Financial Markets & Risk Common Track",
        courses: ["금융시장론 (Financial Markets)", "금융포럼 (Finance Forum)", "대체투자와 구조화상품 (Alternative Investments & Structured Products)", "위험관리 (Risk Management)", "금융사회연구 · 리더십"],
        desc: "부동산·PE·인프라 등 대체투자와 구조화금융, 금융기관 전사적 위험관리 및 금융 현안 세미나를 아우릅니다."
      }
    ],
    admissions: {
      quota: "35명 내외 (매년 1회 전기 모집, 3월 입학)",
      competitionRate: "약 2 : 1 내외 (연도별 소폭 편차 있음)",
      tuition: "학기당 등록금 11,866,000원 / 첫 학기 입학금 1,211,000원 (2026학년도 기준)",
      eligibility: [
        "학사학위 소지자 또는 입학 전(2월)까지 학사학위 취득 예정인 자",
        "만 2년 이상 직장 근무 경력자이면서 현재 재직 중인 자 (금융권 및 일반 기업 재무·기획·투자 유관 업무 종사자 포함)"
      ],
      process: [
        { step: "STEP 01", title: "온라인 원서접수 및 서류제출", period: "매년 9월 중순 ~ 10월 중순", detail: "경영전문대학원 온라인 원서접수 시스템(applymba.yonsei.ac.kr)을 통해 지원서 작성 및 PDF 서류 업로드" },
        { step: "STEP 02", title: "1차 서류전형 합격자(면접대상자) 발표", period: "매년 11월 중순", detail: "학업역량, 직무경력, 자기소개서, 추천서 등을 종합적으로 정량·정성 평가하여 이메일 개별 통보" },
        { step: "STEP 03", title: "2차 면접전형 실시", period: "매년 11월 말 (토요일)", detail: "서류심사 합격자에 한하여 대면 면접 진행 (재무·금융 분야 수학 의지 및 리더십 역량 심층 평가)" },
        { step: "STEP 04", title: "최종 합격자 발표 및 등록", period: "매년 12월 중순 발표 / 익년 2월 등록", detail: "최종 합격 통보 및 신입생 오리엔테이션·수강신청 진행" }
      ],
      documents: [
        "입학지원서 (온라인 작성) 및 자기소개서 (본원 지정양식, 한글 또는 영문 워드 작성) 1부",
        "추천서 (본원 지정양식, 추천인 자필서명 또는 날인 후 스캔본 제출) 1부",
        "대학교(학사) 졸업증명서(또는 졸업예정증명서) 및 성적증명서 각 1부 (원본 스캔 PDF 또는 전자증명서)",
        "재직증명서 1부 (입사일, 재직기간 및 직급 명시, 원서접수 시작일 이후 발급분)",
        "경력증명서 1부 (이직 경력이 있는 경우 제출, 불가 시 건강보험자격득실확인서 대체 가능)",
        "공인영어성적표 (선택사항: TOEFL, TOEIC, TEPS, IELTS 접수일 기준 2년 이내 성적 보유 시 가점 반영)"
      ],
      faqs: [
        {
          q: "비금융권 재직자나 비경상계열 학부 졸업생도 Finance MBA(FMBA)에 지원할 수 있나요?",
          a: "네, 지원 가능합니다. 만 2년 이상의 재직 경력과 학사학위를 보유하고 있다면 학부 전공이나 현 직종에 제한 없이 지원하실 수 있습니다. 1년차 1학기부터 금융경제학, 재무회계, 재무관리, 금융통계학 등 기초 필수과목을 체계적으로 이수하도록 커리큘럼이 설계되어 있습니다."
        },
        {
          q: "공인영어성적표는 필수 제출 서류인가요?",
          a: "공인영어성적표(TOEFL, TOEIC, TEPS, IELTS)는 선택 제출 서류입니다. 미제출 시에도 지원 가능하나, 접수일 기준 최근 2년 이내의 유효 성적을 제출하실 경우 서류전형에서 일부 가점을 받으실 수 있습니다."
        },
        {
          q: "직장 업무와 학업을 병행할 수 있도록 수업 일정이 어떻게 운영되나요?",
          a: "FMBA는 재직자를 위한 Part-time 야간 MBA 과정으로, 정규학기 수업은 평일 야간(월·화·목 19:00~22:00)에 진행됩니다. 각 학기는 8주 단위의 모듈(Module 1, Module 2)과 4주 단위의 여름·겨울 계절세션으로 구성되어 집중도 높은 학습이 가능하며, 별도의 졸업논문 없이 45학점(전공필수 33학점 포함) 이수로 석사학위를 취득합니다."
        }
      ]
    }
  }
};
