export type Language = 'en' | 'fr' | 'zh' | 'ar';

export type CommodityCategory = 'energy' | 'solid_minerals' | 'industrial' | 'polymers';

export interface CommoditySpec {
  parameter: string;
  typicalValue: string;
  testStandard?: string;
}

export interface Commodity {
  id: string;
  name: string;
  chineseName?: string;
  frenchName?: string;
  arabicName?: string;
  category: CommodityCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  typicalSpecs: CommoditySpec[];
  applications: string[];
  origin: string;
  exportCapability: {
    monthlyCapacity: string;
    loadingPorts: string[];
    packaging: string[];
    minimumOrderQuantity: string;
    incoterms: ('FOB' | 'CIF' | 'CFR')[];
  };
  inspectionStandard: string;
  heroImage: string;
}

export interface RfqFormData {
  commodityId: string;
  grade: string;
  volumeMt: number;
  incoterm: 'FOB' | 'CIF' | 'CFR';
  destinationPort: string;
  packagingPreference: string;
  buyerName: string;
  buyerCompany: string;
  buyerEmail: string;
  buyerPhone: string;
  buyerCountry: string;
  notes: string;
}

export interface RfqQuoteRecord extends RfqFormData {
  referenceId: string;
  timestamp: string;
}

export interface SupplierApplicationData {
  companyName: string;
  registrationNumber: string;
  country: string;
  stateOrProvince: string;
  contactPerson: string;
  email: string;
  phone: string;
  mineralOrCommodity: string;
  miningLeaseNumber: string;
  monthlySupplyCapacity: string;
  laboratoryAssayAvailable: boolean;
  notes: string;
}
