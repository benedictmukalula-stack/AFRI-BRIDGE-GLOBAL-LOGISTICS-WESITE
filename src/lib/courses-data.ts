export const coursesData: Record<string, {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  duration: string;
  price: string;
  overview: string[];
  outcomes: string[];
  modules: { title: string; description: string }[];
}> = {
  'customs-clearance-fundamentals': {
    slug: 'customs-clearance-fundamentals',
    title: 'Customs Clearance Fundamentals',
    category: 'Customs & Clearing',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    description: 'Master SARS customs procedures, tariff classification, and duty calculation for seamless border crossings.',
    duration: '3 Days',
    price: 'R 15,000 per learner',
    overview: [
      'This comprehensive three-day programme provides a solid foundation in South African customs clearance procedures. Participants will gain practical knowledge of SARS customs requirements, tariff classification systems, and duty calculation methodologies used in daily customs operations.',
      'The course covers the complete import and export process, from documentation preparation to final clearance, with emphasis on compliance requirements and risk management. Real-world case studies and practical exercises ensure participants can apply their knowledge immediately in the workplace.',
      'Designed for customs practitioners, freight forwarders, import/export coordinators, and logistics professionals who need a thorough understanding of customs processes and regulations.',
    ],
    outcomes: [
      'Understand the South African customs legislative framework and SARS requirements',
      'Perform accurate tariff classification using the Harmonised System',
      'Calculate customs duties, VAT, and other import charges correctly',
      'Prepare and process complete customs documentation for imports and exports',
      'Identify and manage customs compliance risks in trade operations',
    ],
    modules: [
      {
        title: 'Introduction to South African Customs',
        description: 'Overview of the customs legislative framework, SARS structure, role of customs in trade, and key definitions and concepts.',
      },
      {
        title: 'Tariff Classification & HS Codes',
        description: 'Understanding the Harmonised System, reading tariff headings, classification rules (GIRs), and practical classification exercises.',
      },
      {
        title: 'Customs Valuation & Duty Calculation',
        description: 'Methods of customs valuation (transaction value, deductive, computed), duty calculation, VAT on imports, and anti-dumping duties.',
      },
      {
        title: 'Import & Export Documentation',
        description: 'Commercial invoices, bills of lading, packing lists, certificates of origin, DA forms, and customs declaration procedures.',
      },
      {
        title: 'Compliance & Risk Management',
        description: 'Customs audits, penalties, preferred trader schemes, risk assessment frameworks, and dispute resolution processes.',
      },
    ],
  },
  'freight-forwarding-professional': {
    slug: 'freight-forwarding-professional',
    title: 'Freight Forwarding Professional',
    category: 'Freight Forwarding',
    categoryColor: 'bg-sky-100 text-sky-700',
    description: 'Comprehensive freight forwarding covering air, ocean, and road transport documentation and operations.',
    duration: '5 Days',
    price: 'R 25,000 per learner',
    overview: [
      'This intensive five-day programme covers all aspects of freight forwarding across air, ocean, and road transport modes. Participants will develop expertise in international freight operations, documentation, and multimodal logistics management.',
      'From understanding Incoterms and booking procedures to managing complex multimodal shipments, this course provides the practical skills and knowledge needed to excel as a professional freight forwarder in the African trade context.',
      'Ideal for aspiring and current freight forwarders, shipping coordinators, logistics managers, and trade professionals seeking to deepen their knowledge of international freight operations.',
    ],
    outcomes: [
      'Master Incoterms 2020 rules and their practical application in trade transactions',
      'Process air freight shipments including AWB preparation, airline booking, and cargo handling',
      'Manage ocean freight operations for both FCL and LCL shipments',
      'Coordinate cross-border road freight with proper documentation and compliance',
      'Plan and execute multimodal transport solutions across African corridors',
    ],
    modules: [
      {
        title: 'Freight Forwarding Fundamentals',
        description: 'Role of the freight forwarder, industry structure, key stakeholders, and introduction to international trade logistics.',
      },
      {
        title: 'Air Freight Operations',
        description: 'IATA procedures, air waybill (AWB), cargo acceptance, airline bookings, rates and charges, dangerous goods awareness.',
      },
      {
        title: 'Ocean Freight Operations',
        description: 'Bill of lading, FCL/LCL operations, shipping line bookings, freight rates, demurrage and detention, and port operations.',
      },
      {
        title: 'Road & Cross-Border Freight',
        description: 'Cross-border documentation, road consignment notes, transit bonds, border processing, and SADC trade facilitation.',
      },
      {
        title: 'Incoterms & Multimodal Transport',
        description: 'Incoterms 2020 in detail, multimodal transport planning, combined transport documents, and risk management.',
      },
    ],
  },
  'oil-gas-logistics-management': {
    slug: 'oil-gas-logistics-management',
    title: 'Oil & Gas Logistics Management',
    category: 'Oil & Gas Logistics',
    categoryColor: 'bg-orange-100 text-orange-700',
    description: 'Specialised logistics for the oil and gas sector including rig moves, pipe transport, and HAZMAT.',
    duration: '4 Days',
    price: 'R 20,000 per learner',
    overview: [
      'This specialised four-day programme focuses on the unique logistics challenges of the oil and gas industry. Participants will gain expertise in managing upstream and downstream logistics operations including rig moves, pipe transportation, and hazardous materials handling.',
      'The course covers the complete oil and gas supply chain from wellhead to consumer, with emphasis on safety, regulatory compliance, and operational efficiency in African markets. Case studies from African oil and gas operations provide practical context.',
      'Designed for logistics professionals working in or aspiring to work in the oil and gas sector, including supply chain managers, HSE officers, and operations coordinators.',
    ],
    outcomes: [
      'Understand the oil and gas supply chain from upstream production to downstream distribution',
      'Plan and coordinate rig move logistics including heavy-lift and marine operations',
      'Manage hazardous materials (HAZMAT) transportation in compliance with international regulations',
      'Coordinate pipeline logistics and bulk fuel distribution across African markets',
      'Apply health, safety, and environmental (HSE) standards in oil and gas logistics operations',
    ],
    modules: [
      {
        title: 'Oil & Gas Supply Chain Overview',
        description: 'Upstream, midstream, and downstream operations, key logistics challenges, and the African oil and gas landscape.',
      },
      {
        title: 'Rig Move & Heavy-Lift Logistics',
        description: 'Planning rig moves, heavy-lift equipment, marine logistics, port coordination, and project cargo management.',
      },
      {
        title: 'HAZMAT & Dangerous Goods',
        description: 'IMDG Code, IATA DGR, classification of hazardous materials, packaging requirements, and emergency response procedures.',
      },
      {
        title: 'Pipeline & Bulk Transport',
        description: 'Pipeline logistics, bulk fuel distribution, tank farm operations, and last-mile delivery to service stations.',
      },
      {
        title: 'HSE & Regulatory Compliance',
        description: 'Health, safety, and environmental standards, regulatory frameworks, auditing, incident reporting, and best practices.',
      },
    ],
  },
};

export const courseSlugs = Object.keys(coursesData);
