# HLC IMPERATIVE GRUPO LIMITED — Global Commodity Trading & Sourcing Web Portal

An institutional-grade, $100,000-tier digital presence and trading platform for **HLC IMPERATIVE GRUPO LIMITED**, connecting verified Nigerian and African solid minerals, energy commodities, and petrochemical raw materials with global industrial consumers across Europe, Asia, the Middle East, and the Americas.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following core strategic choices were confirmed in Phase 1 and are baked into this architectural design:

- **Confirmed Decision 1 (Multilingual Trade Support)**: Full 4-language international switcher supporting **English (EN)**, **French (FR - Français)**, **Mandarin Chinese (ZH - 中文)**, and **Arabic (AR - العربية)** with localized terminology for international commodity trade, Incoterms, and specifications.
- **Confirmed Decision 2 (Interactive Buyer Workflow)**: Interactive **Commodity Technical Spec Explorer with Instant RFQ & Incoterm 2020 Estimator** (calculating FOB Lagos/Onne vs. CIF destination ports, transit timelines, and generating formal stamped RFQ reference manifests).
- **Confirmed Decision 3 (Visual Direction)**: **Deep Maritime Navy (`#0A192F` / `#0D2040`) and Polished Gold (`#D4AF37` / `#C5A059`)** with architectural slate accents, crisp white typography, global shipping route graphics, and the official 3D globe crest logo.

---

## 1. Overview & Core Concept

### What It Does
The portal serves as the primary international commercial and operations interface for HLC IMPERATIVE GRUPO LIMITED. It projects the trust, compliance, and operational scale of an established multinational commodity merchant (e.g., Trafigura, Glencore, ABTC). It enables global procurement heads, smelters, cement plants, and manufacturers to inspect lab-grade technical specifications for 10 core commodities, configure custom RFQs with Incoterms (FOB/CIF/CFR), verify export documentation standards, onboard regional mine suppliers, and contact international trading desks in the UK and Nigeria.

### Target Audience & Personas
1. **Global Procurement Directors & Smelter Traders** (China, India, Japan, EU, UAE, USA) seeking reliable, ethical supply contracts for high-grade non-ferrous and bulk ores.
2. **Industrial Raw Material Consumers** (Plastic converters, foundry operators, cement manufacturers) needing consistent deliveries of PP/PE resins, limestone, and thermal fuels.
3. **African Mining Leaseholders & Mineral Aggregators** seeking an established export partner with vetted logistics, banking instruments (DLC/LC), and international market access.
4. **Trade Finance Institutions, Inspection Agencies (SGS, Bureau Veritas), & Maritime Carriers** validating corporate governance, export licenses (NEPC), and ESG commitments.

### Key Value Delivered
- **Institutional Credibility**: Replaces generic brochureware with a mathematically rigorous specifications hub, compliance checklists, and corporate governance documentation.
- **Transparent Commercial Engagement**: Instant RFQ configuration with Incoterm 2020 delivery models, volume pricing bands, and loading port logistics.
- **Dual-Sided Marketplace Pipeline**: Dedicated workflows for international buyers requesting quotes and African mine operators applying for verified supplier status.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Buyer Journey**:
   - Lands on hero section featuring the official brand mark, global trade corridor metrics, and direct CTAs.
   - Explores the **Interactive Commodity Explorer** or selects a specific product (e.g., Copper Ore 20%+, Coal 6,500+ kcal/kg, Polypropylene Raffia).
   - Reviews chemical assays, sizing distributions, minimum order quantities (MOQ), and port capabilities.
   - Launches the **Interactive RFQ & Incoterms Estimator**, selecting tonnage, delivery port (e.g., Rotterdam, Qingdao, Dubai, Antwerp), and Incoterm.
   - Receives an immediate trade dossier preview with a generated Quotation Reference ID, downloadable PDF spec summary, and submission to the sales desk.
2. **Supplier Onboarding Journey**:
   - Clicks "Become a Verified Supplier" in top bar or dedicated portal section.
   - Enters mine/quarry location, Cadastral lease ID, mineral type, monthly production capacity, and assay standards.
   - Submits KYC profile to join HLC's certified supply chain network.
3. **Due Diligence & Compliance Journey**:
   - Accesses the Governance & ESG hub: NEPC registration, UK Companies House standing, Form M/NXP procedures, Pre-shipment Inspection (SGS/Cotecna) protocols, and anti-child labor / conflict-free mineral guarantees.
4. **Language Switching**:
   - Toggles between English, French, Mandarin Chinese, and Arabic instantly across navigation, commodity names, Incoterm descriptors, and contact desks.

### Visual Identity & Theme
- **Color Palette (60-30-10 Rule)**:
  - **60% Dominant Canvas**: Deep Maritime Obsidian/Navy (`#070F1E` to `#0B172B`) with soft slate card surfaces (`#112240` / `#162C50`) providing unmatched depth and authority.
  - **30% Structural Surfaces & Typography**: Hairline borders in subtle maritime slate (`rgba(255,255,255,0.08)`), high-legibility crisp text (`#F8FAFC` and `#94A3B8`), and tabular figures.
  - **10% Accent Budget**: Polished Sovereign Gold (`#D4AF37`, hover `#E5C07B`, gradient `#F3E8C8`) applied strictly to primary CTAs, active indicators, and the brand mark crest.
- **Typography & Font Pairing**:
  - **Display / Headings**: `Plus Jakarta Sans` with tight tracking (`tracking-tight`) and balanced headlines (`text-wrap: balance`).
  - **Body Prose**: `DM Sans` / `Plus Jakarta Sans` for clean, international readability.
  - **Data, Assays & Incoterms**: Monospace tabular numerals (`font-mono tabular-nums`) for composition percentages, tonnage, and RFQ numbers.
- **Top Bar Contract**:
  - Single-line brand zone with the official HLC logo mark + wordmark.
  - 4-5 single-line nav links: *Commodities*, *Services*, *Global Logistics*, *Compliance & ESG*, *Company*.
  - Right zone: Language Switcher dropdown + Primary CTA button `"Request a Quote"`.
- **Anti-Slop Discipline**:
  - No generic rounded pill badge clusters; unboxed metadata with subtle `·` separators.
  - No decorative fake pulse dots or mock status tickers.
  - Clean human editorial titles and real trade terminology.

---

## 3. Core Commodity Catalog (10 Products)

Each commodity will feature a dedicated detail modal and full spec drawer with laboratory grade data:

| # | Commodity | Category | Typical Grade / Spec | Origin Hub | Export Logistics |
|---|---|---|---|---|---|
| 01 | **Coal** | Energy | Gross Calorific Value: 6,200–6,800 kcal/kg, Ash < 10%, Low Sulfur (< 0.8%) | Kogi / Benue Basin | Bulk vessel loading at Apapa / Port Harcourt |
| 02 | **Charcoal** | Energy & Carbon | Hardwood lump & shisha grade, Fixed Carbon > 75%, Moisture < 6% | Oyo / Kwara / Niger | 40ft High Cube FCL containerized, bagged |
| 03 | **Copper Ore** | Solid Minerals | Cu grade 15.00% – 28.00%+, low bismuth, flotation concentrate | Nasarawa / Plateau | 20ft heavy-duty containers, bulk liner / jumbo bags |
| 04 | **Lead Ore** | Solid Minerals | Galena ore, Pb 50.00% – 65.00%+, Ag content 250–600 g/t | Ebonyi / Zamfara | Containerized, 50kg double-layered PP bags / 1MT bags |
| 05 | **Antimony Ore** | Solid Minerals | Stibnite, Sb 35.00% – 58.00%+, As < 0.25%, Pb < 0.50% | Taraba / Plateau | Containerized, sealed 1MT bulk bags |
| 06 | **Iron Ore** | Solid Minerals | Hematite & Magnetite lump/fines, Fe 62.00% – 65.50% | Kogi / Kaduna | Breakbulk vessel & 20ft containerized shipments |
| 07 | **Bauxite** | Industrial Minerals | Al2O3 48.00% – 54.00%, Total Reactive Silica < 3.5% | Ekiti / Ondo / Cross River | Bulk carriers / Handymax charters |
| 08 | **Limestone** | Industrial Minerals | Calcium Carbonate (CaCO3) > 95.5%, low magnesium, cement & flux grade | Cross River / Ogun / Edo | Bulk vessel & containerized jumbo bags |
| 09 | **Polypropylene (PP)** | Petrochemicals | Homopolymer Raffia (MFI: 2.5–3.5 g/10min), Injection molding grades | Rivers / Delta (Petrochemical complex) | 25kg palletized PE/PP bags, 40ft FCL shipments |
| 10 | **Polyethylene (PE)** | Petrochemicals | HDPE (Film/Blow mold, density 0.952), LDPE & LLDPE film grades | Port Harcourt Petrochemical Hub | 25kg multi-wall bags with shrink-wrapped pallets |

---

## 4. Key Interactive Modules & Features

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       HLC IMPERATIVE GRUPO PORTAL                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Top Navigation [Logo] [Products] [Services] [Logistics] [About] [Lang] [RFQ]│
├─────────────────────────────────────────────────────────────────────────────┤
│  HERO: Global Commodity Sourcing & Maritime Supply Chains                   │
│  - "Request a Quote" (Triggers RFQ)  |  "Become a Supplier" (Supplier KYC)  │
├─────────────────────────────────────────────────────────────────────────────┤
│  COMMODITIES HUB: Filterable Grid (Energy, Base Metals, Industrial, Polymers)│
│  - Instant Spec Drawer | Full Chemical Breakdown | SGS Verification         │
├─────────────────────────────────────────────────────────────────────────────┤
│  INTERACTIVE RFQ & INCOTERM 2020 ESTIMATOR:                                 │
│  - Commodity & Grade Selector  ──>  Volume (MT)  ──>  Incoterm (FOB/CIF/CFR)│
│  - Destination Port (Rotterdam/Qingdao/Dubai/Antwerp/Houston/Singapore)     │
│  - Live Summary: Estimated Lead Time, Port of Loading, Stamped Trade Quote   │
├─────────────────────────────────────────────────────────────────────────────┤
│  GLOBAL LOGISTICS & CORRIDORS MAP:                                          │
│  - Interactive transit visualizer: Lagos/Onne -> Global Deep-Water Terminals│
├─────────────────────────────────────────────────────────────────────────────┤
│  SERVICES & VALUE PROPOSITION:                                              │
│  - Sourcing, Export Licensing, Lab Verification, Chartering, Buyer Rep      │
├─────────────────────────────────────────────────────────────────────────────┤
│  DUAL OFFICE TRADING DESKS & CONTACT:                                       │
│  - UK Office (London Mayfair) & Nigeria Office (Lagos Commercial Port Hub)  │
│  - Direct Inquiries Form with File Attachment capability                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. Instant RFQ & Incoterms 2020 Estimator
- **Commodity Selection**: Live select from any of the 10 commodities with automatic grade presets.
- **Tonnage & Packaging**: Volume slider / number input (from trial 25 MT FCL container batches to 25,000 MT bulk charters).
- **Incoterms Switcher**: FOB (Free on Board - Apapa/Onne), CIF (Cost, Insurance & Freight), CFR (Cost and Freight).
- **Destination Matrix**: Major world ports (Rotterdam, Qingdao, Shanghai, Antwerp, Dubai Jebel Ali, Houston, Singapore, Mumbai).
- **Real-Time Calculation**: Estimates typical voyage duration, required documentation package (Bill of Lading, SGS Certificate of Quality & Weight, Certificate of Origin, Form NXP, Phytosanitary where applicable), and generates a stamped RFQ code with an instant print/export modal.

### 2. Supplier Onboarding & KYC Application
- Multi-step modal for African mine concessionaires and quarry owners.
- Collects corporate information, mining license numbers, concessions, laboratory assay capabilities, and direct submission to the HLC procurement committee.

### 3. Multilingual Localization Engine
- Full dictionary containing English, French, Mandarin Chinese, and Arabic translations for:
  - Header & footer navigation
  - Core hero claims and value propositions
  - Commodity categories and technical spec labels
  - RFQ form fields and Incoterm explanations
  - Office locations and company mission

### 4. Interactive Global Trade Routes & Port Network
- Interactive visualizer showcasing the export journey from Nigerian loading ports (Apapa Port, Tin Can Island, Onne Deepwater Port, Calabar) along primary maritime lanes to Europe, Asia, and North America with typical sailing days and vessel classes.

### 5. Corporate Governance, Legal, & Downloadable Dossier
- UK & Nigeria corporate registration details clearly presented.
- Printable/downloadable Company Profile summary modal with company credentials, bank trade instrument support (Letters of Credit, DLC), and standard operating procedures.

---

## 5. Technical Implementation Strategy

- **Single-page React + Vite + Tailwind CSS Architecture**: Ultra-fast performance with zero lag.
- **Lucide Icons & Custom SVG Nautical / Trade Visuals**: Crisp, bespoke graphics representing shipping vessels, mineral assays, metallurgical extraction, and global trade corridors.
- **Motion (framer-motion)**: Smooth tab transitions, drawer reveals, and RFQ calculation updates under the 200ms budget.
- **Persistent State**: RFQ draft state stored in local session so users don't lose entered details if they navigate between views.
- **Strict Brand Asset Integration**: Incorporating the official 3D globe crest logo from `/public/assets/aistudio/Screenshot_2026-11-06_211450_8dc35734.png` with clean transparency handling and gold accents.
