import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  nav: {
    commodities: string;
    insights: string;
    services: string;
    logistics: string;
    whyUs: string;
    about: string;
    contact: string;
    requestQuote: string;
    becomeSupplier: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    requestQuoteBtn: string;
    becomeSupplierBtn: string;
    exploreCatalogBtn: string;
    stats: {
      capacity: string;
      capacityLabel: string;
      destinations: string;
      destinationsLabel: string;
      compliance: string;
      complianceLabel: string;
      purity: string;
      purityLabel: string;
    };
  };
  catalog: {
    title: string;
    subtitle: string;
    allCategories: string;
    energy: string;
    solidMinerals: string;
    industrial: string;
    polymers: string;
    specsTitle: string;
    originLabel: string;
    capacityLabel: string;
    viewSpecs: string;
    requestQuote: string;
  };
  rfq: {
    title: string;
    subtitle: string;
    commoditySelect: string;
    volumeLabel: string;
    incotermLabel: string;
    destinationPortLabel: string;
    packagingLabel: string;
    nameLabel: string;
    companyLabel: string;
    emailLabel: string;
    phoneLabel: string;
    countryLabel: string;
    notesLabel: string;
    calculateBtn: string;
    submitRfqBtn: string;
    instantEstimate: string;
    estimatedTransit: string;
    loadingPort: string;
    requiredDocs: string;
    quoteGeneratedNotice: string;
  };
  supplier: {
    title: string;
    subtitle: string;
    companyName: string;
    regNumber: string;
    country: string;
    state: string;
    contactPerson: string;
    email: string;
    phone: string;
    commodityType: string;
    leaseId: string;
    monthlyTonnage: string;
    assayCheckbox: string;
    notes: string;
    submitBtn: string;
    submittedTitle: string;
    submittedDesc: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    experienceTitle: string;
    experienceText: string;
    ethicsTitle: string;
    ethicsText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    ukOfficeTitle: string;
    ukOfficeAddress: string;
    nigeriaOfficeTitle: string;
    nigeriaOfficeAddress: string;
    generalEmail: string;
    salesEmail: string;
    regDetailsTitle: string;
    sendEnquiry: string;
    submitMessage: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    commodities: string;
    compliance: string;
    corporateNotice: string;
    rightsReserved: string;
  };
}> = {
  en: {
    nav: {
      commodities: 'Commodities',
      insights: 'Market Insights',
      services: 'Services',
      logistics: 'Global Logistics',
      whyUs: 'Why HLC',
      about: 'About Us',
      contact: 'Contact',
      requestQuote: 'Request a Quote',
      becomeSupplier: 'Become a Supplier',
    },
    hero: {
      badge: 'INTERNATIONAL COMMODITY TRADING & SOURCING',
      headline: 'Connecting African Natural Resources with',
      headlineHighlight: 'Global Industrial Consumers',
      subheadline: 'HLC IMPERATIVE GRUPO LIMITED specializes in the sourcing, institutional procurement, and maritime export of premium solid minerals, energy commodities, and petrochemical polymers from Nigeria and West Africa to global markets.',
      requestQuoteBtn: 'Request a Quote',
      becomeSupplierBtn: 'Become a Supplier',
      exploreCatalogBtn: 'Explore Commodities',
      stats: {
        capacity: '150,000+ MT',
        capacityLabel: 'Annual Aggregation Capacity',
        destinations: '24+ Global Ports',
        destinationsLabel: 'Direct Deep-Water Discharge',
        compliance: '100% SGS / BV',
        complianceLabel: 'Pre-Shipment Quality Assured',
        purity: 'NEPC & CAC',
        purityLabel: 'Fully Licensed Export Entity',
      },
    },
    catalog: {
      title: 'Commodity Specifications & Catalog',
      subtitle: 'Technical specification sheets, certified chemical assays, and export capacities for our ten core mineral and industrial commodities.',
      allCategories: 'All Commodities',
      energy: 'Energy Commodities',
      solidMinerals: 'Solid Minerals',
      industrial: 'Industrial Minerals',
      polymers: 'Petrochemical Polymers',
      specsTitle: 'Key Technical Parameters',
      originLabel: 'Proven Provenance',
      capacityLabel: 'Monthly Export Capacity',
      viewSpecs: 'Full Technical Specs',
      requestQuote: 'Quote This Commodity',
    },
    rfq: {
      title: 'Institutional RFQ & Incoterms 2020 Estimator',
      subtitle: 'Configure real-time commercial quotation parameters, estimate maritime voyage transit, and generate formal stamped trade documentation.',
      commoditySelect: 'Select Target Commodity',
      volumeLabel: 'Volume (Metric Tons - MT)',
      incotermLabel: 'Incoterms 2020 Delivery Rule',
      destinationPortLabel: 'Destination Discharge Port',
      packagingLabel: 'Packaging Preference',
      nameLabel: 'Full Name / Procurement Officer',
      companyLabel: 'Corporate / Buyer Entity',
      emailLabel: 'Corporate Email',
      phoneLabel: 'Direct Telephone / WhatsApp',
      countryLabel: 'Destination Country',
      notesLabel: 'Specific Assay Requirements & Sizing Limits',
      calculateBtn: 'Calculate Logistics Manifest',
      submitRfqBtn: 'Submit Formal Trade RFQ',
      instantEstimate: 'Instant Commercial Transit Matrix',
      estimatedTransit: 'Estimated Ocean Transit',
      loadingPort: 'Designated Port of Loading',
      requiredDocs: 'Standard Export Documentation Package',
      quoteGeneratedNotice: 'Formal RFQ Generated & Transmitted to HLC Trade Desk',
    },
    supplier: {
      title: 'Verified Supplier & Mine Operator Onboarding',
      subtitle: 'Join HLC Imperative Grupo’s certified African supply network. We partner with legitimate concessionaires, quarry operators, and aggregators under ethical trade protocols.',
      companyName: 'Mining Concession / Company Legal Name',
      regNumber: 'CAC / Corporate Registration Number',
      country: 'Country of Operation',
      state: 'State / Mining District',
      contactPerson: 'Lead Contact Person',
      email: 'Corporate Email',
      phone: 'Direct Telephone / Mobile',
      commodityType: 'Primary Mineral / Commodity Produced',
      leaseId: 'Cadastral Mining Lease ID (ML / SSML)',
      monthlyTonnage: 'Current Monthly Output Capacity (MT)',
      assayCheckbox: 'Certified third-party lab analysis (SGS, Alex Stewart, NMDC) currently available',
      notes: 'Logistics capabilities, haulage access, and additional specifications',
      submitBtn: 'Submit Supplier Application',
      submittedTitle: 'Supplier Application Received',
      submittedDesc: 'Our Nigerian procurement committee will review your cadastral lease credentials and contact you within 48 business hours.',
    },
    services: {
      title: 'Integrated Sourcing & Maritime Services',
      subtitle: 'End-to-end supply chain execution bridging mine-site extraction to deep-water vessel discharge.',
    },
    whyUs: {
      title: 'Why Global Industrial Buyers Choose HLC',
      subtitle: 'Built on the bedrock of transparency, contract enforceability, and deep local Nigerian sourcing expertise.',
    },
    about: {
      title: 'About HLC IMPERATIVE GRUPO LIMITED',
      subtitle: 'Dedicated to connecting African mineral wealth with global manufacturing excellence.',
      missionTitle: 'Our Strategic Mission',
      missionText: 'To become one of Africa’s most trusted commodity sourcing and international trading companies, connecting verified African suppliers with global industrial buyers through rigorous quality assurance and dependable supply chains.',
      visionTitle: 'Our Long-Term Vision',
      visionText: 'To be a leading African commodity trading house recognized worldwide for integrity, contractual reliability, transparent governance, and sustainable international trade.',
      experienceTitle: 'Export Governance & Experience',
      experienceText: 'With extensive hands-on operational mastery across Nigeria’s primary mining belts and international shipping lanes, HLC coordinates end-to-end export compliance including Form NXP processing, NEPC clearance, and containerized or breakbulk vessel chartering.',
      ethicsTitle: 'Ethical Sourcing & ESG Commitment',
      ethicsText: 'We enforce zero tolerance for child labor, operate strictly with legally titled mining concessions, and champion environmental reclamation practices across all regional partner operations.',
    },
    contact: {
      title: 'Global Trade Desks & Contact',
      subtitle: 'Engage directly with our commercial trading desk in the United Kingdom or our sourcing headquarters in Nigeria.',
      ukOfficeTitle: 'United Kingdom International Trade Desk',
      ukOfficeAddress: 'London Commercial Trade Operations, United Kingdom',
      nigeriaOfficeTitle: 'Nigeria Sourcing & Operations Desk',
      nigeriaOfficeAddress: 'Plot 12 Commercial Marine Corridor, Apapa Maritime District, Lagos / Abuja FCT, Nigeria',
      generalEmail: 'info@hlcgrupo.co.uk',
      salesEmail: 'sales@hlcgrupo.co.uk',
      regDetailsTitle: 'Statutory Corporate Registrations',
      sendEnquiry: 'Direct Commercial Inquiries',
      submitMessage: 'Transmit Commercial Message',
    },
    footer: {
      tagline: 'Connecting African resources with global industries through integrity, transparency, and dependable trade logistics.',
      quickLinks: 'Navigation',
      commodities: 'Core Commodities',
      compliance: 'Compliance & Legal',
      corporateNotice: 'HLC IMPERATIVE GRUPO LIMITED operates in compliance with international maritime trade laws, Incoterms 2020 rules, and the Nigerian Export Promotion Council (NEPC) statutory framework.',
      rightsReserved: 'All rights reserved. Global Commodity Trading & Supply Chain Operations.',
    },
  },
  fr: {
    nav: {
      commodities: 'Matières Premières',
      insights: 'Marchés & Indices',
      services: 'Services',
      logistics: 'Logistique Globale',
      whyUs: 'Pourquoi HLC',
      about: 'À Propos',
      contact: 'Contact',
      requestQuote: 'Demander un Devis',
      becomeSupplier: 'Devenir Fournisseur',
    },
    hero: {
      badge: 'NÉGOCE ET APPROVISIONNEMENT INTERNATIONAL DE COMMODITÉS',
      headline: 'Connecter les Ressources Naturelles Africaines aux',
      headlineHighlight: 'Industries Mondiales',
      subheadline: 'HLC IMPERATIVE GRUPO LIMITED est une société internationale de négoce spécialisée dans l’approvisionnement et l’exportation maritime de minéraux solides, de ressources énergétiques et de polymères pétrochimiques.',
      requestQuoteBtn: 'Demander un Devis',
      becomeSupplierBtn: 'Devenir Fournisseur',
      exploreCatalogBtn: 'Explorer les Produits',
      stats: {
        capacity: '150 000+ TM',
        capacityLabel: 'Capacité Annuelle d’Agrégation',
        destinations: '24+ Ports Mondiaux',
        destinationsLabel: 'Déchargement Direct en Eau Profonde',
        compliance: '100% SGS / BV',
        complianceLabel: 'Qualité Contrôlée Avant Expédition',
        purity: 'Agréé NEPC & CAC',
        purityLabel: 'Entité d’Exportation Certifiée',
      },
    },
    catalog: {
      title: 'Spécifications Techniques et Produits',
      subtitle: 'Fiches techniques certifiées, analyses chimiques de laboratoire et capacités d’exportation pour nos dix matières premières stratégiques.',
      allCategories: 'Toutes les Matières',
      energy: 'Énergie & Carbone',
      solidMinerals: 'Minéraux Solides',
      industrial: 'Minéraux Industriels',
      polymers: 'Polymères Pétrochimiques',
      specsTitle: 'Paramètres Clés',
      originLabel: 'Provenance',
      capacityLabel: 'Capacité Mensuelle',
      viewSpecs: 'Fiche Complète',
      requestQuote: 'Demander Cotation',
    },
    rfq: {
      title: 'Estimateur RFQ et Incoterms 2020',
      subtitle: 'Configurez vos paramètres commerciaux en temps réel, estimez les délais maritimes et générez un manifeste officiel tamponné.',
      commoditySelect: 'Sélectionner le Produit',
      volumeLabel: 'Volume (Tonnes Métriques - TM)',
      incotermLabel: 'Règle Incoterms 2020',
      destinationPortLabel: 'Port de Déchargement',
      packagingLabel: 'Conditionnement',
      nameLabel: 'Nom / Responsable des Achats',
      companyLabel: 'Entreprise / Acheteur',
      emailLabel: 'Email Professionnel',
      phoneLabel: 'Téléphone / WhatsApp',
      countryLabel: 'Pays de Destination',
      notesLabel: 'Exigences Chimiques Particulières',
      calculateBtn: 'Calculer le Manifeste',
      submitRfqBtn: 'Soumettre la Demande Officielle',
      instantEstimate: 'Matrice de Transit Commercial',
      estimatedTransit: 'Transit Océanique Estimé',
      loadingPort: 'Port de Chargement',
      requiredDocs: 'Documentation Standard d’Exportation',
      quoteGeneratedNotice: 'RFQ Officiel Généré et Transmis au Desk Commercial HLC',
    },
    supplier: {
      title: 'Portail des Fournisseurs et Opérateurs Miniers',
      subtitle: 'Rejoignez le réseau certifié de HLC en Afrique. Nous collaborons avec des concessionnaires et carriers légitimes.',
      companyName: 'Nom de la Société Minière',
      regNumber: 'Numéro d’Enregistrement',
      country: 'Pays d’Opération',
      state: 'État / District Minier',
      contactPerson: 'Contact Principal',
      email: 'Email Professionnel',
      phone: 'Téléphone',
      commodityType: 'Minéral ou Produit Principal',
      leaseId: 'Numéro de Permis Minier (ML)',
      monthlyTonnage: 'Capacité Mensuelle Actuelle (TM)',
      assayCheckbox: 'Rapport d’analyse certifié tiers (SGS, Alex Stewart) disponible',
      notes: 'Capacités logistiques et détails d’accès routier',
      submitBtn: 'Soumettre la Candidature',
      submittedTitle: 'Candidature Reçue',
      submittedDesc: 'Notre comité d’approvisionnement examinera vos titres cadastraux sous 48 heures ouvrables.',
    },
    services: {
      title: 'Services Intégrés d’Approvisionnement et de Fret',
      subtitle: 'Exécution complète de la chaîne d’approvisionnement depuis l’extraction jusqu’au déchargement au navire.',
    },
    whyUs: {
      title: 'Pourquoi Choisir HLC Imperative Grupo',
      subtitle: 'Une expertise locale nigériane combinée aux standards rigoureux du commerce international.',
    },
    about: {
      title: 'À Propos de HLC IMPERATIVE GRUPO LIMITED',
      subtitle: 'Dédié à connecter les ressources minérales africaines aux acheteurs industriels internationaux.',
      missionTitle: 'Notre Mission Stratégique',
      missionText: 'Devenir l’une des entreprises de négoce et d’approvisionnement les plus respectées d’Afrique, garantissant une intégrité absolue et des livraisons fiables.',
      visionTitle: 'Notre Vision',
      visionText: 'Être reconnu comme le partenaire de choix pour l’accès transparent aux matières premières africaines certifiées.',
      experienceTitle: 'Expertise d’Exportation',
      experienceText: 'Gestion intégrée des procédures douanières, licences NEPC, Formulaire NXP et affrètement de navires conventionnels ou conteneurisés.',
      ethicsTitle: 'Approvisionnement Éthique & RSE',
      ethicsText: 'Tolérance zéro pour le travail des enfants, partenariat exclusif avec des concessions légales et engagement pour la réhabilitation des sols.',
    },
    contact: {
      title: 'Bureaux Internationaux et Contact',
      subtitle: 'Contactez notre desk commercial au Royaume-Uni ou notre siège opérationnel au Nigéria.',
      ukOfficeTitle: 'Bureau Commercial - Royaume-Uni',
      ukOfficeAddress: 'London Commercial Trade Operations, Royaume-Uni',
      nigeriaOfficeTitle: 'Siège Opérations & Fret - Nigéria',
      nigeriaOfficeAddress: 'Plot 12 Commercial Marine Corridor, Apapa Maritime District, Lagos / Abuja FCT, Nigéria',
      generalEmail: 'info@hlcgrupo.co.uk',
      salesEmail: 'sales@hlcgrupo.co.uk',
      regDetailsTitle: 'Immatriculations et Agréments',
      sendEnquiry: 'Demande Commerciale Directe',
      submitMessage: 'Transmettre le Message',
    },
    footer: {
      tagline: 'Connecter les ressources africaines aux industries mondiales avec intégrité, transparence et rigueur logistique.',
      quickLinks: 'Navigation',
      commodities: 'Matières Principales',
      compliance: 'Conformité & Légal',
      corporateNotice: 'HLC IMPERATIVE GRUPO LIMITED opère selon les règles maritimes internationales et les normes Incoterms 2020.',
      rightsReserved: 'Tous droits réservés. Négoce International de Matières Premières.',
    },
  },
  zh: {
    nav: {
      commodities: '大宗商品',
      insights: '市场洞察',
      services: '专业服务',
      logistics: '全球物流',
      whyUs: '选择HLC',
      about: '关于我们',
      contact: '联系我们',
      requestQuote: '索取报价',
      becomeSupplier: '成为供应商',
    },
    hero: {
      badge: '国际大宗商品采购与贸易集团',
      headline: '连接非洲丰富天然资源与',
      headlineHighlight: '全球工业终端用户',
      subheadline: 'HLC IMPERATIVE GRUPO LIMITED 专注于尼日利亚及西非高品位固体矿产、能源商品及石化原生聚合物的源头直采、国际检验与远洋出口供应。',
      requestQuoteBtn: '立即索取报价',
      becomeSupplierBtn: '矿企供应入驻',
      exploreCatalogBtn: '浏览产品目录',
      stats: {
        capacity: '150,000+ 公吨',
        capacityLabel: '年综合集货与供应能力',
        destinations: '24+ 全球核心港口',
        destinationsLabel: '直达深水港卸货网络',
        compliance: '100% SGS / BV 认证',
        complianceLabel: '装船前全流程化学品控',
        purity: 'NEPC与CAC正规牌照',
        purityLabel: '全资质合规出口贸易商',
      },
    },
    catalog: {
      title: '大宗商品技术规格与化验指标',
      subtitle: '涵盖十大核心矿物及石化产品，提供国际标准检测报告、典型化学成分及月度出口运力。',
      allCategories: '全部大宗商品',
      energy: '能源与碳素材料',
      solidMinerals: '固体金属矿石',
      industrial: '非金属与工业矿物',
      polymers: '石化高分子聚合物',
      specsTitle: '核心理化指标',
      originLabel: '产地来源',
      capacityLabel: '月出口运力',
      viewSpecs: '查看完整参数',
      requestQuote: '询价该商品',
    },
    rfq: {
      title: '在线询价与国际贸易术语 (Incoterms 2020) 计算器',
      subtitle: '在线配置商业采购参数，实时测算海运航程与指定港口装运方案，生成正式盖章贸易单据。',
      commoditySelect: '选择目标大宗商品',
      volumeLabel: '采购数量（公吨 - MT）',
      incotermLabel: '贸易交货术语 (Incoterms 2020)',
      destinationPortLabel: '目的港口 (青岛/上海/鹿特丹等)',
      packagingLabel: '包装方式',
      nameLabel: '采购代表姓名',
      companyLabel: '买方企业名称',
      emailLabel: '企业邮箱',
      phoneLabel: '电话 / 微信 / WhatsApp',
      countryLabel: '目的国家/地区',
      notesLabel: '特殊化学指标及粒度要求',
      calculateBtn: '测算物流方案',
      submitRfqBtn: '提交正式采购询盘 (RFQ)',
      instantEstimate: '实时航程与单证方案',
      estimatedTransit: '预计海运航程',
      loadingPort: '指定起运港口',
      requiredDocs: '标配全套出口清关单证',
      quoteGeneratedNotice: '正式询价单已生成并提交至 HLC 全球贸易台',
    },
    supplier: {
      title: '矿山企业与认证供应商入驻通道',
      subtitle: '加入 HLC 优质非洲直采供应网络。我们与拥有合法矿权、勘探许可及稳定产量的矿主建立长期合规采购合作。',
      companyName: '矿业公司或开采实体全称',
      regNumber: '企业注册号 (CAC/商业登记)',
      country: '运营国家',
      state: '开采所在州 / 矿区',
      contactPerson: '负责人姓名',
      email: '企业邮箱',
      phone: '联系电话',
      commodityType: '主营矿产或大宗商品',
      leaseId: '矿业许可证/租约号 (Mining Lease / SSML)',
      monthlyTonnage: '当前月开采及供货能力 (公吨)',
      assayCheckbox: '拥有近期第三方权威化验报告 (SGS, Alex Stewart 等)',
      notes: '矿区道路交通、装车能力及特别说明',
      submitBtn: '提交供应商申请',
      submittedTitle: '供应商申请已成功提交',
      submittedDesc: '我们的尼日利亚采购委员会将在48小时内审核您的矿权资质并与您接洽。',
    },
    services: {
      title: '全流程源头直采与海运贸易服务',
      subtitle: '覆盖从矿山开采、化学检验、海关合规到国际大洋散货租船的全链条供应链保障。',
    },
    whyUs: {
      title: '为什么全球工业用户选择 HLC',
      subtitle: '立足尼日利亚深度属地采销优势，秉承国际主流大宗商品交易行合规与契约精神。',
    },
    about: {
      title: '关于 HLC IMPERATIVE GRUPO LIMITED',
      subtitle: '致力于将非洲优质资源无缝对接至全球先进制造业与工业冶炼基地。',
      missionTitle: '企业使命',
      missionText: '成为非洲最受信赖的大宗商品直采与国际贸易领军企业，以透明的检验标准、可靠的履约能力为全球工业买家提供高品质原矿与原料保障。',
      visionTitle: '企业愿景',
      visionText: '打造享誉国际的非洲综合商品交易品牌，坚守商业诚信，推动阳光、可持续的全球跨境资源贸易。',
      experienceTitle: '深厚出口与报关清关经验',
      experienceText: '团队精通尼日利亚各主要矿带地质特性与阿帕帕 (Apapa)、奥内 (Onne) 深水港作业流程，熟练办理 Form NXP、NEPC 出口许可证及散杂货/集装箱海运。',
      ethicsTitle: '道德采购与 ESG 承诺',
      ethicsText: '严格杜绝童工，所有矿源均来自拥有合法矿权的合规矿区，大力支持矿区生态修复与社区安全开采标准。',
    },
    contact: {
      title: '全球贸易业务台与联系方式',
      subtitle: '直接联络我们位于英国伦敦的国际贸易台，或尼日利亚拉各斯的现场运营总部。',
      ukOfficeTitle: '英国国际贸易业务台 (UK Desk)',
      ukOfficeAddress: 'London Commercial Trade Operations, United Kingdom',
      nigeriaOfficeTitle: '尼日利亚现场运营与出口中心',
      nigeriaOfficeAddress: 'Plot 12 Commercial Marine Corridor, Apapa Maritime District, Lagos / Abuja FCT, Nigeria',
      generalEmail: 'info@hlcgrupo.co.uk',
      salesEmail: 'sales@hlcgrupo.co.uk',
      regDetailsTitle: '官方注册与行业执照',
      sendEnquiry: '直接业务询洽',
      submitMessage: '发送商业信息',
    },
    footer: {
      tagline: '以诚信、透明和高度可靠的供应链物流，连接非洲矿产资源与全球现代工业。',
      quickLinks: '快速导航',
      commodities: '重点大宗品类',
      compliance: '合规与法律声明',
      corporateNotice: 'HLC IMPERATIVE GRUPO LIMITED 严格遵循国际海事规则、国际商会 Incoterms 2020 及尼日利亚出口促进委员会 (NEPC) 法规运营。',
      rightsReserved: '版权所有。国际大宗商品供应链贸易集团。',
    },
  },
  ar: {
    nav: {
      commodities: 'السلع الأساسية',
      insights: 'رؤى الأسواق',
      services: 'الخدمات',
      logistics: 'اللوجستيات العالمية',
      whyUs: 'لماذا HLC',
      about: 'من نحن',
      contact: 'اتصل بنا',
      requestQuote: 'طلب عرض سعر',
      becomeSupplier: 'انضم كمورد',
    },
    hero: {
      badge: 'التجارة الدولية وتوريد السلع الأساسية',
      headline: 'ربط الموارد الطبيعية الأفريقية مع',
      headlineHighlight: 'الصناعات العالمية',
      subheadline: 'تتخصص شركة HLC IMPERATIVE GRUPO LIMITED في توريد وتصدير المعادن الصلبة وسلع الطاقة والبوليمرات البتروكيماوية عالية النقاء من نيجيريا وغرب أفريقيا إلى الأسواق الدولية.',
      requestQuoteBtn: 'طلب عرض سعر',
      becomeSupplierBtn: 'انضم كمورد معتمد',
      exploreCatalogBtn: 'استكشاف السلع',
      stats: {
        capacity: '+150,000 طن متري',
        capacityLabel: 'القدرة التجميعية السنوية',
        destinations: '+24 ميناء عالمي',
        destinationsLabel: 'تفريغ مباشر في المياه العميقة',
        compliance: '100% SGS / BV',
        complianceLabel: 'جودة مضمونة قبل الشحن',
        purity: 'ترخيص NEPC و CAC',
        purityLabel: 'كيان تصدير معتمد بالكامل',
      },
    },
    catalog: {
      title: 'كتالوج السلع والمواصفات الفنية',
      subtitle: 'بيانات مخبرية معتمدة، تحاليل كيميائية، وقدرات تصدير شهرية لسلعنا العشر الأساسية.',
      allCategories: 'جميع السلع',
      energy: 'سلع الطاقة والكربون',
      solidMinerals: 'المعادن الصلبة',
      industrial: 'المعادن الصناعية',
      polymers: 'البوليمرات البتروكيماوية',
      specsTitle: 'المعايير الفنية الرئيسية',
      originLabel: 'المنشأ المثبت',
      capacityLabel: 'القدرة التصديرية الشهرية',
      viewSpecs: 'المواصفات الكاملة',
      requestQuote: 'تسعير هذه السلعة',
    },
    rfq: {
      title: 'حاسبة عروض الأسعار وقواعد Incoterms 2020',
      subtitle: 'حدد معايير الشراء التجاري، واحسب زمن العبور البحري، وأنشئ مستندات التصدير الرسمية.',
      commoditySelect: 'حدد السلعة المطلوبة',
      volumeLabel: 'الحجم (بالطن المتري - MT)',
      incotermLabel: 'قاعدة التسليم (Incoterms 2020)',
      destinationPortLabel: 'ميناء الوصول والتفريغ',
      packagingLabel: 'نوع التعبئة والتغليف',
      nameLabel: 'اسم مسؤول المشتريات',
      companyLabel: 'اسم الشركة المشترية',
      emailLabel: 'البريد الإلكتروني للشركة',
      phoneLabel: 'الهاتف / واتساب',
      countryLabel: 'بلد الوجهة',
      notesLabel: 'المواصفات الكيميائية والأحجام المطلوبة',
      calculateBtn: 'حساب مسار الشحن',
      submitRfqBtn: 'تقديم طلب عرض السعر الرسمي (RFQ)',
      instantEstimate: 'مصفوفة العبور والشحن الفوري',
      estimatedTransit: 'المدة المقدرة للشحن البحري',
      loadingPort: 'ميناء التحميل المعتمد',
      requiredDocs: 'حزمة وثائق التصدير القياسية',
      quoteGeneratedNotice: 'تم إصدار طلب التسعير الرسمي وإرساله إلى مكتب تداول HLC',
    },
    supplier: {
      title: 'بوابة تسجيل الموردين وأصحاب المناجم',
      subtitle: 'انضم إلى شبكة التوريد المعتمدة لشركة HLC في أفريقيا. نتشارك مع أصحاب الامتيازات والمقالع المرخصة وفق أعلى معايير الشفافية.',
      companyName: 'اسم شركة التعدين أو المنشأة',
      regNumber: 'رقم السجل التجاري',
      country: 'بلد التشغيل',
      state: 'الولاية / منطقة التعدين',
      contactPerson: 'الشخص المسؤول للتواصل',
      email: 'البريد الإلكتروني المهني',
      phone: 'الهاتف المباشر',
      commodityType: 'السلعة أو المعدن الرئيسي',
      leaseId: 'رقم ترخيص التعدين السجل العقاري (ML)',
      monthlyTonnage: 'القدرة الإنتاجية الشهرية (بالطن)',
      assayCheckbox: 'يتوفر تقرير فحص مخبري من جهة ثالثة معتمدة (SGS، Alex Stewart)',
      notes: 'إمكانات النقل والخدمات اللوجستية',
      submitBtn: 'إرسال طلب الانضمام كمورد',
      submittedTitle: 'تم استلام طلب المورد بنجاح',
      submittedDesc: 'ستقوم لجنة المشتريات النيجيرية بمراجعة تراخيصكم والتواصل معكم خلال 48 ساعة عمل.',
    },
    services: {
      title: 'خدمات التوريد والشحن البحري المتكاملة',
      subtitle: 'إدارة متكاملة لسلاسل الإمداد من مواقع الاستخراج إلى التفريغ في السفن العابرة للمحيطات.',
    },
    whyUs: {
      title: 'لماذا يختارنا المشترون الصناعيون حول العالم',
      subtitle: 'قائمون على ركائز الشفافية، والالتزام الصارم بالعقود، والخبرة المحلية العميقة في التعدين النيجيري.',
    },
    about: {
      title: 'عن شركة HLC IMPERATIVE GRUPO LIMITED',
      subtitle: 'ملتزمون بربط الثروات التعدينية الأفريقية مع مصانع ومصاهر الإنتاج العالمية.',
      missionTitle: 'رسالتنا الاستراتيجية',
      missionText: 'أن نكون الشركة الرائدة والأكثر موثوقية في أفريقيا في مجال توريد السلع والتجارة الدولية، مع ربط الموردين المعتمدين بالمشترين الصناعيين.',
      visionTitle: 'رؤيتنا المستقبلية',
      visionText: 'أن نصبح بيت التجارة الأول المعترف به عالمياً للنزاهة والموثوقية والتجارة الدولية المستدامة.',
      experienceTitle: 'الخبرة والامتثال التصديري',
      experienceText: 'إشراف كامل على إجراءات الجمارك النيجيرية، تراخيص NEPC، نموذج Form NXP، واستئجار سفن الصب والحاويات.',
      ethicsTitle: 'التوريد الأخلاقي والحوكمة (ESG)',
      ethicsText: 'حظر تام لعمالة الأطفال، والتعامل الحصري مع المناجم المرخصة قانونياً، والالتزام بالسلامة البيئية والمجتمعية.',
    },
    contact: {
      title: 'مكاتب التداول الدولية وبيانات الاتصال',
      subtitle: 'تواصل مباشرة مع مكتب التجارة في المملكة المتحدة أو مقر العمليات في نيجيريا.',
      ukOfficeTitle: 'مكتب التداول التجاري - المملكة المتحدة',
      ukOfficeAddress: 'London Commercial Trade Operations, United Kingdom',
      nigeriaOfficeTitle: 'المقر الرئيسي للعمليات والشحن - نيجيريا',
      nigeriaOfficeAddress: 'Plot 12 Commercial Marine Corridor, Apapa Maritime District, Lagos / Abuja FCT, Nigeria',
      generalEmail: 'info@hlcgrupo.co.uk',
      salesEmail: 'sales@hlcgrupo.co.uk',
      regDetailsTitle: 'السجلات والتراخيص الرسمية',
      sendEnquiry: 'الاستفسارات التجارية المباشرة',
      submitMessage: 'إرسال الرسالة التجارية',
    },
    footer: {
      tagline: 'ربط الموارد الأفريقية بالصناعات العالمية بنزاهة وشفافية ولوجستيات شحن يعتمد عليها.',
      quickLinks: 'التنقل السريع',
      commodities: 'أبرز السلع',
      compliance: 'الامتثال والقوانين',
      corporateNotice: 'تعمل شركة HLC IMPERATIVE GRUPO LIMITED وفقاً للقوانين البحرية الدولية ومعايير غرفة التجارة الدولية Incoterms 2020 ومجلس ترويج الصادرات النيجيري (NEPC).',
      rightsReserved: 'جميع الحقوق محفوظة. عمليات تجارة وتوريد السلع الدولية.',
    },
  },
};
