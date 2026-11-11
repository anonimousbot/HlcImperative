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
      subheadline: 'HLC IMPERATIVE GRUPO LIMITED focuses on sourcing solid minerals, industrial raw materials and energy commodities from Nigeria and across Africa for international buyers.',
      requestQuoteBtn: 'Request a Quote',
      becomeSupplierBtn: 'Become a Supplier',
      exploreCatalogBtn: 'Explore Commodities',
      stats: {
        capacity: 'Case by case',
        capacityLabel: 'Supply confirmed per lot',
        destinations: 'Buyer-led',
        destinationsLabel: 'Destination agreed per enquiry',
        compliance: 'By agreement',
        complianceLabel: 'Independent inspection can be arranged',
        purity: '11 commodities',
        purityLabel: 'Plus industrial procurement services',
      },
    },
    catalog: {
      title: 'Products & Sourcing',
      subtitle: 'Explore our sourcing categories. Specifications, origin, volume and delivery options are confirmed for each available lot.',
      allCategories: 'All Commodities',
      energy: 'Energy Commodities',
      solidMinerals: 'Solid Minerals',
      industrial: 'Industrial Minerals',
      polymers: 'Petrochemical Polymers',
      specsTitle: 'Lot information',
      originLabel: 'Origin',
      capacityLabel: 'Availability',
      viewSpecs: 'Full Technical Specs',
      requestQuote: 'Quote This Commodity',
    },
    rfq: {
      title: 'Request a Commodity Quote',
      subtitle: 'Share your product, volume, destination and delivery requirements. Our team will review availability and follow up to discuss terms.',
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
      submitRfqBtn: 'Send Quote Request',
      instantEstimate: 'Planning information',
      estimatedTransit: 'Transit time',
      loadingPort: 'Designated Port of Loading',
      requiredDocs: 'Documents and inspection',
      quoteGeneratedNotice: 'Your quote request has been sent to HLC',
    },
    supplier: {
      title: 'Supplier Enquiry',
      subtitle: 'Share your company, product, source and available documentation. HLC will review the information and contact you about possible supply discussions.',
      companyName: 'Company Name',
      regNumber: 'CAC / Corporate Registration Number',
      country: 'Country of Operation',
      state: 'State / Mining District',
      contactPerson: 'Lead Contact Person',
      email: 'Corporate Email',
      phone: 'Direct Telephone / Mobile',
      commodityType: 'Primary Mineral / Commodity Produced',
      leaseId: 'Cadastral Mining Lease ID (ML / SSML)',
      monthlyTonnage: 'Available Monthly Volume (MT)',
      assayCheckbox: 'A recent independent laboratory analysis is available',
      notes: 'Logistics capabilities, haulage access, and additional specifications',
      submitBtn: 'Submit Supplier Application',
      submittedTitle: 'Supplier Application Received',
      submittedDesc: 'Thank you. HLC will review your enquiry and contact you if further information is needed.',
    },
    services: {
      title: 'Integrated Sourcing & Maritime Services',
      subtitle: 'Sourcing and procurement support is discussed against each buyer enquiry and confirmed supply opportunity.',
    },
    whyUs: {
      title: 'How We Work',
      subtitle: 'We aim to build trust through clear communication, careful checks and realistic commercial commitments.',
    },
    about: {
      title: 'About HLC IMPERATIVE GRUPO LIMITED',
      subtitle: 'Dedicated to connecting African mineral wealth with global manufacturing excellence.',
      missionTitle: 'Our Strategic Mission',
      missionText: 'To become one of Africa’s most trusted commodity sourcing and international trading companies, connecting verified African suppliers with global industrial buyers through rigorous quality assurance and dependable supply chains.',
      visionTitle: 'Our Long-Term Vision',
      visionText: 'To be a leading African commodity trading house recognized worldwide for integrity, contractual reliability, transparent governance, and sustainable international trade.',
      experienceTitle: 'Sourcing & Export Approach',
      experienceText: 'Our work focuses on understanding buyer requirements, reviewing supplier and source information, and planning the documentation, inspection and logistics steps for each potential transaction. Export arrangements and any applicable licences are confirmed before an offer is made.',
      ethicsTitle: 'Ethical Sourcing & ESG Commitment',
      ethicsText: 'We enforce zero tolerance for child labor, operate strictly with legally titled mining concessions, and champion environmental reclamation practices across all regional partner operations.',
    },
    contact: {
      title: 'Global Trade Desks & Contact',
      subtitle: 'Contact HLC about buyer requirements, supplier enquiries and potential sourcing opportunities.',
      ukOfficeTitle: 'United Kingdom contact',
      ukOfficeAddress: 'United Kingdom contact desk',
      nigeriaOfficeTitle: 'Nigeria Sourcing & Operations Desk',
      nigeriaOfficeAddress: 'Nigeria sourcing contact',
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
      compliance: 'Business Information',
      corporateNotice: 'Product origin, availability, specifications and export arrangements are confirmed with the parties before any transaction.',
      rightsReserved: 'All rights reserved.',
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
        capacity: 'Au cas par cas',
        capacityLabel: 'Disponibilité confirmée par lot',
        destinations: 'Selon l’acheteur',
        destinationsLabel: 'Destination convenue par demande',
        compliance: 'بالاتفاق',
        complianceLabel: 'Inspection indépendante possible',
        purity: '11 produits',
        purityLabel: 'Et services d’approvisionnement',
      },
    },
    catalog: {
      title: 'Spécifications Techniques et Produits',
      subtitle: 'Découvrez nos catégories de produits. Les spécifications, l’origine, le volume et les options de livraison sont confirmés pour chaque lot disponible.',
      allCategories: 'Toutes les Matières',
      energy: 'Énergie & Carbone',
      solidMinerals: 'Minéraux Solides',
      industrial: 'Minéraux Industriels',
      polymers: 'Polymères Pétrochimiques',
      specsTitle: 'Paramètres Clés',
      originLabel: 'Provenance',
      capacityLabel: 'Disponibilité confirmée par lot',
      viewSpecs: 'Fiche Complète',
      requestQuote: 'Demander Cotation',
    },
    rfq: {
      title: 'Estimateur RFQ et Incoterms 2020',
      subtitle: 'Indiquez le produit, le volume, la destination et le mode de livraison souhaités. Nous examinerons la disponibilité et vous contacterons pour discuter des conditions.',
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
      title: 'Demande fournisseur',
      subtitle: 'Présentez votre entreprise, votre produit, son origine et vos documents disponibles. HLC étudiera votre demande et vous contactera pour discuter d’une éventuelle offre.',
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
      subtitle: 'Les options d’approvisionnement et d’achat sont étudiées selon chaque demande et disponibilité confirmée.',
    },
    whyUs: {
      title: 'Notre approche',
      subtitle: 'Nous souhaitons établir la confiance par une communication claire, des vérifications soigneuses et des engagements commerciaux réalistes.',
    },
    about: {
      title: 'À Propos de HLC IMPERATIVE GRUPO LIMITED',
      subtitle: 'Dédié à connecter les ressources minérales africaines aux acheteurs industriels internationaux.',
      missionTitle: 'Notre Mission Stratégique',
      missionText: 'Devenir l’une des entreprises de négoce et d’approvisionnement les plus respectées d’Afrique, garantissant une intégrité absolue et des livraisons fiables.',
      visionTitle: 'Notre Vision',
      visionText: 'Être reconnu comme le partenaire de choix pour l’accès transparent aux matières premières africaines certifiées.',
      experienceTitle: 'Expertise d’Exportation',
      experienceText: 'Nous examinons les besoins des acheteurs, les informations sur les fournisseurs et les étapes de documentation, inspection et logistique. Les modalités d’exportation et les autorisations applicables sont confirmées avant toute offre.',
      ethicsTitle: 'Approvisionnement Éthique & RSE',
      ethicsText: 'Tolérance zéro pour le travail des enfants, partenariat exclusif avec des concessions légales et engagement pour la réhabilitation des sols.',
    },
    contact: {
      title: 'Bureaux Internationaux et Contact',
      subtitle: 'Contactez HLC pour vos besoins d’achat, demandes fournisseurs et possibilités d’approvisionnement.',
      ukOfficeTitle: 'Contact au Royaume-Uni',
      ukOfficeAddress: 'Contact au Royaume-Uni',
      nigeriaOfficeTitle: 'Siège Opérations & Fret - Nigéria',
      nigeriaOfficeAddress: 'Contact sourcing au Nigéria',
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
      compliance: 'Informations commerciales',
      corporateNotice: 'L’origine, la disponibilité, les spécifications et les modalités d’exportation sont confirmées avec les parties avant toute transaction.',
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
        capacity: '逐批确认',
        capacityLabel: '每批确认供应情况',
        destinations: '按买方需求',
        destinationsLabel: '按询价协商目的地',
        compliance: '协商确定',
        complianceLabel: '可商议独立检验',
        purity: '11类商品',
        purityLabel: '另提供工业采购服务',
      },
    },
    catalog: {
      title: '产品与采购',
      subtitle: '浏览我们的采购品类。每批货物的规格、来源、数量和交付方式均需逐批确认。',
      allCategories: '全部大宗商品',
      energy: '能源与碳素材料',
      solidMinerals: '固体金属矿石',
      industrial: '非金属与工业矿物',
      polymers: '石化高分子聚合物',
      specsTitle: '批次信息',
      originLabel: '产地来源',
      capacityLabel: '按批次确认供应',
      viewSpecs: '查看完整参数',
      requestQuote: '询价该商品',
    },
    rfq: {
      title: '在线询价与国际贸易术语 (Incoterms 2020) 计算器',
      subtitle: '请提供产品、数量、目的地和交付要求。我们将核实供应情况，并联系您讨论交易条件。',
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
      title: '供应商申请',
      subtitle: '请提供公司、产品、来源及现有文件信息。HLC 将审核资料，并联系您讨论潜在供应合作。',
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
      subtitle: '根据买方询价和已确认的供应机会讨论采购及供应支持。',
    },
    whyUs: {
      title: '我们的工作方式',
      subtitle: '我们希望通过清晰沟通、认真核实和切实可行的商业承诺建立信任。',
    },
    about: {
      title: '关于 HLC IMPERATIVE GRUPO LIMITED',
      subtitle: '致力于将非洲优质资源无缝对接至全球先进制造业与工业冶炼基地。',
      missionTitle: '企业使命',
      missionText: '成为非洲最受信赖的大宗商品直采与国际贸易领军企业，以透明的检验标准、可靠的履约能力为全球工业买家提供高品质原矿与原料保障。',
      visionTitle: '企业愿景',
      visionText: '打造享誉国际的非洲综合商品交易品牌，坚守商业诚信，推动阳光、可持续的全球跨境资源贸易。',
      experienceTitle: '深厚出口与报关清关经验',
      experienceText: '我们会了解买方需求，审查供应商和货源信息，并讨论每笔潜在交易所需的文件、检验和物流步骤。出口安排及适用许可将在报价前确认。',
      ethicsTitle: '道德采购与 ESG 承诺',
      ethicsText: '严格杜绝童工，所有矿源均来自拥有合法矿权的合规矿区，大力支持矿区生态修复与社区安全开采标准。',
    },
    contact: {
      title: '全球贸易业务台与联系方式',
      subtitle: '联系 HLC，讨论采购需求、供应商申请及潜在的采购机会。',
      ukOfficeTitle: '英国联系方式',
      ukOfficeAddress: 'United Kingdom contact desk',
      nigeriaOfficeTitle: '尼日利亚现场运营与出口中心',
      nigeriaOfficeAddress: 'Nigeria sourcing contact',
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
      compliance: '商业信息',
      corporateNotice: '每笔交易前，均与相关方确认产品来源、供应情况、规格及出口安排。',
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
        capacity: 'حسب كل شحنة',
        capacityLabel: 'تُؤكد الإتاحة لكل شحنة',
        destinations: 'حسب طلب المشتري',
        destinationsLabel: 'يُتفق على الوجهة لكل طلب',
        compliance: 'بالاتفاق',
        complianceLabel: 'يمكن ترتيب فحص مستقل',
        purity: '11 سلعة',
        purityLabel: 'بالإضافة إلى خدمات الشراء',
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
      capacityLabel: 'تُؤكد الإتاحة لكل شحنة',
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
      subtitle: 'شارك معلومات شركتك والمنتج والمصدر والمستندات المتاحة. ستراجع HLC المعلومات وتتواصل معك لمناقشة فرص التوريد المحتملة.',
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
      experienceText: 'يركز عملنا على فهم متطلبات المشترين ومراجعة معلومات الموردين والمصادر ومناقشة الوثائق والفحص والخدمات اللوجستية لكل معاملة محتملة. يتم تأكيد ترتيبات التصدير والتراخيص المطلوبة قبل تقديم العرض.',
      ethicsTitle: 'التوريد الأخلاقي والحوكمة (ESG)',
      ethicsText: 'حظر تام لعمالة الأطفال، والتعامل الحصري مع المناجم المرخصة قانونياً، والالتزام بالسلامة البيئية والمجتمعية.',
    },
    contact: {
      title: 'مكاتب التداول الدولية وبيانات الاتصال',
      subtitle: 'تواصل مع HLC لمناقشة احتياجات الشراء واستفسارات الموردين وفرص التوريد المحتملة.',
      ukOfficeTitle: 'جهة الاتصال في المملكة المتحدة',
      ukOfficeAddress: 'United Kingdom contact desk',
      nigeriaOfficeTitle: 'المقر الرئيسي للعمليات والشحن - نيجيريا',
      nigeriaOfficeAddress: 'Nigeria sourcing contact',
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
      compliance: 'معلومات تجارية',
      corporateNotice: 'يتم تأكيد منشأ المنتج وتوافره ومواصفاته وترتيبات التصدير مع الأطراف قبل أي معاملة.',
      rightsReserved: 'جميع الحقوق محفوظة. عمليات تجارة وتوريد السلع الدولية.',
    },
  },
};
