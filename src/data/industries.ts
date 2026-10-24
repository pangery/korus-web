export interface Industry {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
  hazards: string[];
  recommended: string[];
}

export const industriesData: Industry[] = [
  {
    id: 'auto',
    name: 'Automobilový průmysl',
    tag: 'Automotive & Montážní závody',
    image: '/assets/prumysl-auto.jpg',
    description:
      'Komplexní ochrana pro montážní linky, lisovny a lakovny. Přísné požadavky na bezprašnost, ochranu lakovaných povrchů bez silikonů a prevenci únavy při směnném provozu.',
    hazards: ['Elektrostatický výboj (ESD)', 'Riziko pořezání o plechy (úroveň D/F)', 'Zátěž kloubů a chodidel'],
    recommended: ['DYKENO S3S Carbon Shield ESD', 'DYKENO PureGrip Cut Level D rukavice', 'Antistatické pláště a ESD trika'],
  },
  {
    id: 'drevo',
    name: 'Dřevozpracující průmysl',
    tag: 'Zpracování dřeva, pily & truhlářství',
    image: '/assets/prumysl-drevo.jpg',
    description:
      'Ochrana při práci s katry, formátovacími pilami a CNC linkami. Extrémní prašnost a vysoké hladiny hluku vyžadují certifikované útlumové a filtrační prostředky.',
    hazards: ['Rotující pilové kotouče a nástroje', 'Karcinogenní dřevný prach', 'Hluk přesahující 105 dB'],
    recommended: ['Protipořezové oděvy EN 381-5', 'Mušlové chrániče sluchu s SNR 33 dB', 'Filtrační polomasky FFP3'],
  },
  {
    id: 'strojirenstvi',
    name: 'Strojírenství',
    tag: 'Obrábění, sváření & těžký průmysl',
    image: '/assets/prumysl-strojirenstvi.jpg',
    description:
      'Práce s obráběcími stroji, lisovnami a svařovací technikou vyžaduje materiály odolné proti jiskrám, okujím, řezným kapalinám a mechanickému namáhání.',
    hazards: ['Svářečské jiskry a sálavé teplo', 'Odlétající kovové špony', 'Těžké padající předměty'],
    recommended: ['Nehořlavé svářečské oděvy EN ISO 11611', 'Svářečské kukly a brýle optické třídy 1', 'Obuv S3 s karbonovou tužinkou'],
  },
  {
    id: 'stavba',
    name: 'Stavebnictví',
    tag: 'Pozemní, inženýrské & dopravní stavby',
    image: '/assets/prumysl-stavba.jpg',
    description:
      'Celoroční práce v proměnlivém terénu s vysokými nároky na retroreflexní viditelnost, nepromokavost a mechanickou odolnost tkanin.',
    hazards: ['Práce ve výškách a pád předmětů', 'Zhoršená viditelnost techniky', 'Nepřízeň počasí a bláto'],
    recommended: ['Výstražné oděvy EN ISO 20471 třídy 3', 'Ochranné přilby s 4bodovým podbradním páskem', 'Zimní nepromokavé softshelly Cordura®'],
  },
  {
    id: 'zemedelstvi',
    name: 'Zemědělství',
    tag: 'Polní výroba, chov & agrochemie',
    image: '/assets/prumysl-stavba.jpg',
    description:
      'Specifická rizika spojená s manipulací s chemickými postřiky, hnojivy, těžkou technikou a organickými biologickými činiteli.',
    hazards: ['Pesticidy a agrochemikálie', 'Vlhkost a biologické nečistoty', 'Skluz na nerovném terénu'],
    recommended: ['Chemicky odolné holínky S5 SRC', 'Nitrilové rukavice EN ISO 374-1', 'Bariérové postřikové kombinézy'],
  },
  {
    id: 'energetika',
    name: 'Energetika',
    tag: 'Vysoké napětí, rozvodny & utility',
    image: '/assets/prumysl-energetika.jpg',
    description:
      'Ochrana proti fatálním následkům elektrického oblouku (Arc Flash) a bezpečná práce v elektromagnetických polích přenosových soustav.',
    hazards: ['Elektrický oblouk (teploty přes 10 000 °C)', 'Krokové napětí', 'Práce ve výškách na stožárech'],
    recommended: ['Obloukově odolné oděvy IEC 61482 APC 2', 'Dielektrické rukavice třídy 0 až 4', 'Dielektrická obuv do 1 000 V'],
  },
  {
    id: 'sklarsky',
    name: 'Sklářský průmysl',
    tag: 'Tavicí pece, tvarování & broušení',
    image: '/assets/prumysl-strojirenstvi.jpg',
    description:
      'Extrémní sálavé teplo u pecí v kombinaci s nejvyšší úrovní rizika hlubokého pořezání o střepy a ostré tabule skla.',
    hazards: ['Extrémní kontaktní teplo do 500 °C', 'Kritické pořezání hranou skla', 'Odlétající střepy'],
    recommended: ['Rukavice z ocelových vláken Cut F', 'Kevlarové rukávníky a zástěry', 'Aluminizované tepelné štíty'],
  },
  {
    id: 'letecky',
    name: 'Letecký průmysl',
    tag: 'Aerospace, kompozity & servis letadel',
    image: '/assets/prumysl-auto.jpg',
    description:
      'Ultračisté provozy, výroba karbonových dílů a leteckých motorů vyžadující absolutní certifikaci bez rizika zanechání cizích částic (FOD).',
    hazards: ['Statická elektřina ohrožující avioniku', 'Toxické pryskyřice a kompozity', 'Stísněné prostory trupů'],
    recommended: ['Certifikovaná ESD obuv a oděvy', 'Respirátory pro práci s uhlíkovými vlákny', 'Ergonomické chrániče kolen'],
  },
  {
    id: 'potraviny',
    name: 'Potravinářský průmysl',
    tag: 'Zpracování masa, mlékárenství & pekárny',
    image: '/assets/prumysl-chemie.jpg',
    description:
      'Přísné hygienické standardy HACCP a IFS. Ochrana pracovníků v chladírnách, mastných provozech a před zraněním vykosťovacími noži.',
    hazards: ['Práce v chladu (+4 °C až -25 °C)', 'Uklouznutí na mastném povrchu', 'Pořezání noži v bourárnách'],
    recommended: ['Kroužkové nerezové rukavice a zástěry', 'Termoizolační obuv s protiskluzem SRC', 'Bílé hygienické oděvy do 95 °C'],
  },
  {
    id: 'chemie',
    name: 'Chemický průmysl',
    tag: 'Petrochemie, syntéza & laboratoře',
    image: '/assets/prumysl-chemie.jpg',
    description:
      'Manipulace s těkavými rozpouštědly, kyselinami i zásadami. Nutnost kombinace antistatického provedení (ATEX) s chemickou nepropustností.',
    hazards: ['Agresivní kapaliny a plyny', 'Výbušné prostředí s nebezpečím jiskry', 'Kontaminace kůže'],
    recommended: ['Kombinézy typu 3/4/5/6 EN 14605', 'Celoobličejové masky s filtry ABEK2P3', 'Antistatické nitrilové rukavice'],
  },
];
