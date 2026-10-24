export interface Project {
  id: string;
  category: 'footwear' | 'clothing' | 'gloves' | 'head' | 'services';
  categoryLabel: string;
  series: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  specs: { label: string; value: string }[];
  actionUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'dykeno-carbon',
    category: 'footwear',
    categoryLabel: 'Bezpečnostní obuv',
    series: 'DYKENO Work & Safety',
    title: 'DYKENO S3S Carbon Shield',
    summary:
      'Vlajková bezpečnostní polobotka vyvinutá pro automotive, logistiku a moderní provozy. Karbonový kompozit, kevlarová ochrana a hmotnost pouze 460 g.',
    image: '/assets/worksafety-863x1024.jpg',
    tags: ['ČSN EN ISO 20345:2022', 'S3S ESD SR FO', 'Karbonový kompozit', 'Kevlar®', 'Vibram® podešev'],
    specs: [
      { label: 'Bezpečnostní norma', value: 'ČSN EN ISO 20345:2022 (S3S ESD SR FO)' },
      { label: 'Ochranná špička', value: 'Ultralehký karbonový kompozit (nemagnetická)' },
      { label: 'Ochrana proti propichu', value: 'Flexibilní aramidová kevlarová planžeta' },
      { label: 'Podešev', value: 'Dvojhustotní PU / pryž Vibram® s protiskluzem třídy SR' },
      { label: 'Hmotnost', value: 'Pouze 460 g (vel. 42)' },
      { label: 'ESD certifikace', value: 'Odpor 100 kΩ až 35 MΩ dle EN 61340-5-1' },
    ],
    actionUrl: 'https://www.dykeno.cz/produkty/work-and-safety/',
    featured: true,
  },
  {
    id: 'dykeno-motion-jacket',
    category: 'clothing',
    categoryLabel: 'Pracovní oděvy',
    series: 'DYKENO Premium',
    title: 'DYKENO Motion Pro Stretch Bunda',
    summary:
      'Ergonomická bunda z inovativního 4-směrného elastického materiálu. Zajišťuje neomezenou volnost pohybu se zesílením z extrémně odolné Cordury®.',
    image: '/assets/dykeno_premium-863x1024.jpg',
    tags: ['4-Way Stretch', 'Cordura® 500D', 'YKK® Zipy', 'Vodoodpudivá úprava', '3M™ Reflex'],
    specs: [
      { label: 'Materiál těla', value: '92% Polyamid, 8% Elastan (gramáž 260 g/m²)' },
      { label: 'Výztuhy namáhaných zón', value: 'Cordura® 500D na ramenou, loktech a lemu kapes' },
      { label: 'Funkční prvky', value: '6 multifunkčních kapes, větrací otvory v podpaží' },
      { label: 'Průmyslová údržba', value: 'Praní na 60 °C bez ztráty pružnosti a tvaru' },
    ],
    actionUrl: 'https://www.dykeno.cz/produkty/premium/',
  },
  {
    id: 'dykeno-puregrip-gloves',
    category: 'gloves',
    categoryLabel: 'Ochranné rukavice',
    series: 'DYKENO Tech',
    title: 'DYKENO PureGrip Cut Level D',
    summary:
      'Jemný 18-gauge úplet pro přesné montáže s vysokou protipořezovou odolností. Prodyšná nitrilová mikropěna a plná podpora dotykových displejů.',
    image: '/assets/tech-863x1024.jpg',
    tags: ['EN 388: 4X42D', 'HPPE 18-Gauge', 'Mikropěnový nitril', 'Touchscreen compatible'],
    specs: [
      { label: 'Protipořezová třída', value: 'Třída D dle EN ISO 13997 (vysoká odolnost)' },
      { label: 'Mechanická norma', value: 'EN 388:2016 (úroveň 4X42D)' },
      { label: 'Povrstvení', value: 'Prodyšná nitrilová mikropěna odolná vůči olejům' },
      { label: 'Jádro úpletu', value: '18 gauge HPPE vlákno vyztužené ocelovým mikrojádrem' },
    ],
    actionUrl: 'https://www.dykeno.cz/produkty/tech/',
  },
  {
    id: 'dykeno-visionsafe-evo',
    category: 'head',
    categoryLabel: 'Zrak & Hlava',
    series: 'DYKENO Work & Safety',
    title: 'DYKENO VisionSafe EVO Brýle',
    summary:
      'Panoramatické bezpečnostní brýle s hmotností pouhých 24 g. Prémiová vrstva s trvalou ochranou proti poškrábání i zamlžení.',
    image: '/assets/hp-1.jpg',
    tags: ['EN 166 1FT KN', 'UV400 Filtr', 'Anti-Fog Plus', 'Optická třída 1', 'Hmotnost 24 g'],
    specs: [
      { label: 'Certifikace normy', value: 'ČSN EN 166 (označení 1FT KN CE)' },
      { label: 'Optická kvalita', value: 'Třída 1 (pro trvalé celodenní nošení bez únavy zraku)' },
      { label: 'Mechanická odolnost', value: 'Odolnost proti nárazu částic do 45 m/s' },
      { label: 'Filtrace záření', value: 'Filtruje 99.9% UVA/UVB záření (UV400)' },
    ],
    actionUrl: 'https://www.dykeno.cz/produkty/work-and-safety/',
  },
  {
    id: 'korus-branding-service',
    category: 'services',
    categoryLabel: 'B2B Služby',
    series: 'KORUS Servis',
    title: 'Zakázkový potisk & Strojní výšivka',
    summary:
      'Vlastní profesionální dílna pro aplikaci firemních log na pracovní oděvy. Sítotisk, DTF technologie a reprezentativní výšivky s odolností do 90 °C.',
    image: '/assets/kariera-cta-1024x366.jpg',
    tags: ['Vlastní dílna v ČR', 'Sítotisk & DTF', 'Strojní výšivka', 'Praní do 90 °C'],
    specs: [
      { label: 'Týdenní kapacita', value: 'Až 1 500 označených oděvů týdně' },
      { label: 'Odolnost značení', value: 'Garance stálosti pro průmyslové praní' },
      { label: 'Grafická příprava', value: 'Digitální korektury a vizualizace zdarma' },
      { label: 'Vzorkování', value: 'Dovoz vzorků a zkoušení velikostí přímo ve výrobě' },
    ],
    actionUrl: 'https://www.korus.eu/',
  },
  {
    id: 'korus-b2b-portal',
    category: 'services',
    categoryLabel: 'B2B Služby',
    series: 'KORUS Digital',
    title: 'KORUS B2B Portál & Systémová integrace',
    summary:
      'Digitální platforma pro automatizované řízení nákupu OOPP. Přímé EDI propojení na SAP a Helios, limity na profese a schvalovací workflow.',
    image: '/assets/plocha-1.svg',
    tags: ['EDI Integrace', 'Katalogy na míru', 'Limity spotřeby', 'Náhradní plnění'],
    specs: [
      { label: 'ERP integrace', value: 'SAP, Helios Inuvio, QI, Pohoda, Money S4/S5' },
      { label: 'Řízení nákupu', value: 'Hierarchické schvalování objednávek vedoucími' },
      { label: 'Rychlost expedice', value: 'Garantovaná expedice do 24 h z centrálního skladu' },
      { label: 'Legislativa', value: 'Uplatnění náhradního plnění v plné výši' },
    ],
    actionUrl: 'https://www.korus.eu/',
  },
];
