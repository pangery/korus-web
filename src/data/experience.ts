export interface Milestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}

export const experienceData: Milestone[] = [
  {
    year: '1999',
    badge: 'Zahájení distribuce',
    title: 'Zahájení distribuce certifikovaných OOPP',
    description:
      'Založení české rodinné společnosti v Mostě s vizí dodávat výrobním a průmyslovým podnikům v Čechách certifikované ochranné pracovní pomůcky s osobním poradenstvím.',
    highlights: [
      'Zahájení dodávek certifikovaných pomůcek dle norem ČSN EN',
      'Přímá partnerství s výrobními a hutními provozy',
      'Testování vzorků přímo u pracovníků na dílnách',
    ],
  },
  {
    year: '2005',
    badge: 'Pásky & Obaly',
    title: 'Rozšíření o průmyslové pásky a obalové materiály',
    description:
      'Reakce na poptávku průmyslových závodů – zařazení technických lepicích pásek, fólií a obalových materiálů pro výrobní a expediční linky.',
    highlights: [
      'Zavedení technických jednostranných i oboustranných pásek',
      'Kompletní obalový materiál pro průmyslovou expedici',
      'Vznik stálých dodavatelských smluv pro automotive',
    ],
  },
  {
    year: '2008',
    badge: 'Brusivo & Kovovýroba',
    title: 'Rozšíření sortimentu o brusné materiály',
    description:
      'Zavedení ucelené řady brusiva, řezných kotoučů a nástrojů pro strojírenství, slévárenství a kovovýrobu.',
    highlights: [
      'Průmyslové brusivo pro ruční i strojní obrábění',
      'Zavedení konsignačních skladů u zákazníků',
      'Technické poradenství přímo u linek',
    ],
  },
  {
    year: '2011',
    badge: 'Akciová společnost & ISO',
    title: 'Vznik společnosti KORUS EU a.s. & Certifikace ISO 9001',
    description:
      'Transformace na akciovou společnost KORUS EU a.s. a úspěšná certifikace systému řízení jakosti dle mezinárodní normy ISO 9001.',
    highlights: [
      'Založení akciové společnosti KORUS EU a.s.',
      'Certifikace ISO 9001 pro systém managementu jakosti',
      'Posílení obchodního a technického týmu v regionech',
    ],
  },
  {
    year: '2016',
    badge: 'Vlastní značka',
    title: 'Uvedení vlastní prémiové značky na trh',
    description:
      'Na základě 17 let zkušeností s riziky a ergonomií ve výrobě začíná vývoj vlastních modelů obuvi a oděvů s důrazem na špičkový komfort a lehkost.',
    highlights: [
      'Vlastní vývoj inovativní bezpečnostní obuvi a oděvů',
      'Příprava kompozitních karbonových a kevlarových technologií',
      'Vznik zakázkové dílny na potisk a výšivku',
    ],
  },
  {
    year: '2021',
    badge: 'Brand DYKENO®',
    title: 'Rebranding produktů značky KORUS na DYKENO®',
    description:
      'Vznik prémiové globální značky DYKENO® rozdělené do 3 jasných divizí: Work & Safety, Tech a Premium pro práci i volný čas.',
    highlights: [
      'Uvedení divizí DYKENO Work&Safety, Tech a Premium',
      'Karbonové tužinky a Vibram® podešve v sériové výrobě',
      'Spuštění mezinárodního portálu dykeno.cz',
    ],
  },
  {
    year: '2022',
    badge: 'Areál 5 000 m²',
    title: 'Otevření moderního logistického areálu v Podbořanech',
    description:
      'Dokončení výstavby moderního centrálního logistického areálu o rozloze 5 000 m² s plnou WMS automatizací a skladem přes 15 000 položek.',
    highlights: [
      '5 000 m² krytých moderních skladových prostor',
      'Implementace digitálního WMS pro expedici do 24 hodin',
      'Otevření nového moderního zákaznického centra',
    ],
  },
  {
    year: '2024',
    badge: '25 let na trhu',
    title: '25 let historie, export do 8 zemí a digitální transformace',
    description:
      'Čtvrtstoletí stability, partnerství s více než 200 nadnárodními korporacemi, export do 8 zemí EU a projekt Digitální transformace spolufinancovaný Evropskou unií.',
    highlights: [
      'Export do 8 států Evropské unie (CZ, SK, DE, PL, AT, HU, RO)',
      'Projekt Digitální transformace ERP a WMS spolufinancovaný EU',
      'Přes 15 000 položek trvale skladem k okamžitému odeslání',
    ],
  },
];
