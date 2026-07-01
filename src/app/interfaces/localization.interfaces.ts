export type Language = 'ro' | 'fr' | 'be';

export interface LocalizationStrings {
  seo:     { title: string; description: string };
  header:  { servicii: string; despre: string; lucrari: string; contact: string; cta: string; tagline: string };
  hero: {
    tag: string;
    titlePre: string; titleUnderline: string; titleMid: string; titleMarker: string;
    paragraph: string;
    ctaOferta: string; ctaWhatsapp: string; ctaServicii: string;
    specTitle: string; specRev: string;
    specTipLabel: string; specTipVal: string;
    specAcoperireLabel: string; specAcoperireVal: string;
    specGarantieLabel: string; specGarantieVal: string;
    specPretLabel: string; specPretVal: string;
  };
  servicii: { title: string; items: { title: string; desc: string }[] };
  despre: {
    title: string;
    identitateTitle: string; identitateLabel: string; identitateP1: string; identitateP2: string;
    identitateSpecs: { k: string; v: string }[];
    metodaTitle: string; metodaLabel: string; metodaP1: string; metodaP2: string;
    metodaSteps: { k: string; v: string }[];
  };
  galerie: { title: string; captions: string[]; alts: string[] };
  contact: { tag: string; title: string; paragraph: string; program: string;
             line1Label: string; line2Label: string; line3Label: string };
  footer:  { desc: string; catalogTitle: string; catalogItems: string[];
             meniuTitle: string; contactTitle: string };
}

export const LOCALIZATIONS: Record<Language, LocalizationStrings> = {
  ro: {
    seo: {
      title: 'DrgConstruct — Sisteme termice personalizate | HVAC & sanitare RO·BE',
      description: 'Proiectăm și montăm sisteme de încălzire, climatizare, ventilație și instalații sanitare în România și Belgia. Garanție inclusă, preț stabilit la fața locului.'
    },
    header: {
      servicii: 'Servicii', despre: 'Despre', lucrari: 'Lucrări', contact: 'Contact',
      cta: 'Cere ofertă', tagline: 'ROMÂNIA / BELGIA'
    },
    hero: {
      tag: 'Sisteme HVAC · RO · BE',
      titlePre: 'Proiectăm și montăm ', titleUnderline: 'sisteme termice',
      titleMid: ' personalizate, ', titleMarker: 'la prețuri corecte',
      paragraph: 'Suntem o echipă dinamică specializată în încălzire, climatizare și instalații sanitare. Tratăm fiecare proiect cu responsabilitate și profesionalism. Dimensionăm, recomandăm, executăm și lăsăm totul în ordine. Lucrăm în România și în Belgia, cu garanție pentru fiecare lucrare predată.',
      ctaOferta: 'Cere ofertă', ctaWhatsapp: 'WhatsApp', ctaServicii: 'Vezi serviciile',
      specTitle: 'FIȘĂ TEHNICĂ', specRev: 'REV · 01',
      specTipLabel: 'Tipuri de lucrări', specTipVal: 'SOLUȚII INSTALAȚII',
      specAcoperireLabel: 'Acoperire geografică', specAcoperireVal: 'RO · BE',
      specGarantieLabel: 'Garanție', specGarantieVal: 'INCLUSĂ',
      specPretLabel: 'Stabilire preț', specPretVal: 'LA FAȚA LOCULUI'
    },
    servicii: {
      title: 'Catalog tehnic complet.',
      items: [
        { title: 'Aer condiționat', desc: 'Instalăm sisteme split, multi-split și casetă pentru locuințe și birouri. Asigurăm montaj, igienizare și service rapid, cu unități silențioase și consum redus de energie.' },
        { title: 'Ventilație VMC', desc: 'Două variante de sistem — simplu flux (extracție) și dublu flux (cu recuperare de căldură). Aer proaspăt permanent, fără pierderi termice și fără umiditate în pereți.' },
        { title: 'Centrale termice', desc: 'Centrale pe lemn, peleți sau gaz. Le dimensionăm corect pentru suprafața locuinței, le montăm și le punem în funcțiune. Service anual la cerere.' },
        { title: 'Încălzire în pardoseală', desc: 'Asigurăm o distribuție uniformă a căldurii, fără radiatoare la vedere. Lucrăm la temperaturi joase de tur, ceea ce înseamnă că sistemul se combină perfect cu o pompă de căldură.' },
        { title: 'Pompă de căldură aer-aer', desc: 'Un singur sistem care încălzește iarna și răcește vara. Tehnologie inverter, eficiență ridicată, instalare în câteva ore — fără lucrări majore în casă.' },
        { title: 'Pompă de căldură aer-apă', desc: 'Soluție completă: încălzirea casei, pardoseală radiantă și apă caldă menajeră. Funcționează inclusiv la temperaturi negative, cu randament real în condiții grele.' },
        { title: 'Instalații sanitare', desc: 'Executăm instalații de apă caldă, apă rece, canalizare și montăm obiecte sanitare. Realizăm lucrări complete pentru băi, bucătării și spații tehnice. Efectuăm probă la presiune înainte de predare.' },
        { title: 'Boilere electrice', desc: 'Asigurăm apă caldă constantă, indiferent de sezon. Oferim capacități între 30 și 200 de litri, în funcție de numărul de utilizatori. Montajul este rapid și garanția inclusă.' },
        { title: 'Boiler cu pompă de căldură', desc: 'Reducem consumul cu până la 70% față de un boiler clasic. Folosim căldura din aer pentru a încălzi apa — economie reală, simțită în factură de la prima lună.' }
      ]
    },
    despre: {
      title: 'Cum lucrăm. Pe scurt.',
      identitateTitle: 'Identitate', identitateLabel: '// CINE SUNTEM',
      identitateP1: 'DrgConstruct este o societate comercială cu activitate în România și Belgia, specializată în montajul și reparațiile sistemelor de încălzire, climatizare, ventilație și sanitare.',
      identitateP2: 'Răspundem în aceeași zi și ne încadrăm în termenele agreate. Avem experiență în lucrări rezidențiale și comerciale, de la apartamente până la case mari și mici clădiri de birouri.',
      identitateSpecs: [
        { k: 'Formă juridică', v: 'SRL/SPRL' },
        { k: 'Operațiuni', v: 'RO · BE' },
        { k: 'Tipuri de lucrări', v: 'SOLUȚII INSTALAȚII' },
        { k: 'Garanție', v: 'INCLUSĂ' }
      ],
      metodaTitle: 'Metodă', metodaLabel: '// CUM LUCRĂM',
      metodaP1: 'Tratăm fiecare proiect ca pe un calcul: aflăm ce vă trebuie, dimensionăm sistemul, recomandăm echipamentele potrivite și executăm lucrarea curat, până la punerea în funcțiune.',
      metodaP2: 'Cerem seriozitate și o oferim. Prețul se stabilește la fața locului, după evaluarea tehnică a lucrării.',
      metodaSteps: [
        { k: '01 · APEL', v: 'răspuns < 24h' },
        { k: '02 · VIZITĂ', v: 'măsurători + ofertă' },
        { k: '03 · MONTAJ', v: 'curat, cu protecții' },
        { k: '04 · PORNIRE', v: 'test + ghid utilizare' }
      ]
    },
    galerie: {
      title: 'Lucrări reale. Din teren.',
      captions: [
        'Unitate interioară split · montaj rezidențial',
        'Boiler cu pompă de căldură Ariston · apă caldă menajeră',
        'Unitate exterioară A/C GREE · inverter',
        'Probă de presiune și vacuumare · agregat digital',
        'Pompă de căldură aer-apă Vaillant · unitate exterioară',
        'Training tehnic · agent frigorific ecologic R290',
        'Tablou de conexiuni · cablaj alimentare unitate'
      ],
      alts: [
        'Unitate interioară aer condiționat montată pe perete',
        'Boiler cu pompă de căldură montat în colț',
        'Unitate exterioară aer condiționat GREE',
        'Aparat digital de probă de presiune pe circuit',
        'Pompă de căldură Vaillant montată pe perete de cărămidă',
        'Sesiune de training tehnic despre agentul R290',
        'Tablou de conexiuni electrice cu borne'
      ]
    },
    contact: {
      tag: 'Contact direct',
      title: 'Contactează-ne. Vorbim direct și stabilim un termen.',
      paragraph: 'Pentru o estimare corectă, e important să cunoaștem nevoile și parametrii lucrării. Sună-ne și îți vom spune dacă, în cât timp și contra cărui cost te putem ajuta. Lucrăm pe bază de seriozitate, fără surprize.',
      program: 'PROGRAM · LUNI — SÂMBĂTĂ · 08:00 — 20:00',
      line1Label: 'Linia 1 · RO', line2Label: 'Linia 2 · BE', line3Label: 'Linia 3 · RO'
    },
    footer: {
      desc: 'Societate comercială specializată în sisteme HVAC, sanitare și echipamente de preparare a apei calde. Lucrări cu garanție pe ambele piețe.',
      catalogTitle: 'Catalog', meniuTitle: 'Meniu', contactTitle: 'Contact',
      catalogItems: [
        'Aer condiționat', 'Ventilație VMC', 'Centrale termice', 'Încălzire în pardoseală',
        'Pompă de căldură aer-aer', 'Pompă de căldură aer-apă', 'Instalații sanitare',
        'Boilere electrice', 'Boiler cu pompă de căldură'
      ]
    }
  },

  fr: {
    seo: {
      title: 'DrgConstruct — Systèmes thermiques personnalisés | HVAC & sanitaires RO·BE',
      description: 'Nous concevons et installons des systèmes de chauffage, climatisation, ventilation et installations sanitaires en Roumanie et en Belgique. Garantie incluse, prix établi sur place.'
    },
    header: {
      servicii: 'Services', despre: 'À propos', lucrari: 'Réalisations', contact: 'Contact',
      cta: 'Demander un devis', tagline: 'ROUMANIE / BELGIQUE'
    },
    hero: {
      tag: 'Systèmes HVAC · RO · BE',
      titlePre: 'Nous concevons et installons des ', titleUnderline: 'systèmes thermiques',
      titleMid: ' personnalisés, ', titleMarker: 'à des prix justes',
      paragraph: 'Nous sommes une équipe dynamique spécialisée dans le chauffage, la climatisation et les installations sanitaires. Nous traitons chaque projet avec responsabilité et professionnalisme. Nous dimensionnons, recommandons, exécutons et laissons tout en ordre. Nous travaillons en Roumanie et en Belgique, avec garantie pour chaque travail livré.',
      ctaOferta: 'Demander un devis', ctaWhatsapp: 'WhatsApp', ctaServicii: 'Voir les services',
      specTitle: 'FICHE TECHNIQUE', specRev: 'REV · 01',
      specTipLabel: 'Types de travaux', specTipVal: 'SOLUTIONS INSTALLATIONS',
      specAcoperireLabel: 'Couverture géographique', specAcoperireVal: 'RO · BE',
      specGarantieLabel: 'Garantie', specGarantieVal: 'INCLUSE',
      specPretLabel: 'Établissement du prix', specPretVal: 'SUR PLACE'
    },
    servicii: {
      title: 'Catalogue technique complet.',
      items: [
        { title: 'Climatisation', desc: 'Nous installons des systèmes split, multi-split et cassette pour les logements et bureaux. Nous assurons le montage, la désinfection et le service rapide, avec des unités silencieuses et une faible consommation d\'énergie.' },
        { title: 'Ventilation VMC', desc: 'Deux variantes de système — simple flux (extraction) et double flux (avec récupération de chaleur). Air frais permanent, sans pertes thermiques et sans humidité dans les murs.' },
        { title: 'Chaudières', desc: 'Chaudières à bois, pellets ou gaz. Nous les dimensionnons correctement pour la superficie du logement, les installons et les mettons en service. Entretien annuel sur demande.' },
        { title: 'Chauffage par le sol', desc: 'Nous assurons une distribution uniforme de la chaleur, sans radiateurs apparents. Nous travaillons à basses températures de départ, ce qui signifie que le système se combine parfaitement avec une pompe à chaleur.' },
        { title: 'Pompe à chaleur air-air', desc: 'Un seul système qui chauffe en hiver et refroidit en été. Technologie inverter, haute efficacité, installation en quelques heures — sans travaux majeurs dans la maison.' },
        { title: 'Pompe à chaleur air-eau', desc: 'Solution complète : chauffage de la maison, plancher chauffant et eau chaude sanitaire. Fonctionne même à des températures négatives, avec un rendement réel dans des conditions difficiles.' },
        { title: 'Installations sanitaires', desc: 'Nous réalisons des installations d\'eau chaude, eau froide, évacuation et posons des appareils sanitaires. Nous effectuons des travaux complets pour salles de bain, cuisines et locaux techniques. Nous effectuons un test de pression avant livraison.' },
        { title: 'Chauffe-eau électriques', desc: 'Nous assurons une eau chaude constante, quelle que soit la saison. Nous proposons des capacités de 30 à 200 litres, selon le nombre d\'utilisateurs. L\'installation est rapide et la garantie incluse.' },
        { title: 'Chauffe-eau thermodynamique', desc: 'Nous réduisons la consommation jusqu\'à 70% par rapport à un chauffe-eau classique. Nous utilisons la chaleur de l\'air pour chauffer l\'eau — économie réelle, ressentie sur la facture dès le premier mois.' }
      ]
    },
    despre: {
      title: 'Comment nous travaillons. En bref.',
      identitateTitle: 'Identité', identitateLabel: '// QUI SOMMES-NOUS',
      identitateP1: 'DrgConstruct est une société commerciale active en Roumanie et en Belgique, spécialisée dans le montage et la réparation des systèmes de chauffage, climatisation, ventilation et sanitaires.',
      identitateP2: 'Nous répondons le jour même et respectons les délais convenus. Nous avons de l\'expérience dans les travaux résidentiels et commerciaux, des appartements aux grandes maisons et petits immeubles de bureaux.',
      identitateSpecs: [
        { k: 'Forme juridique', v: 'SRL/SPRL' },
        { k: 'Opérations', v: 'RO · BE' },
        { k: 'Types de travaux', v: 'SOLUTIONS INSTALLATIONS' },
        { k: 'Garantie', v: 'INCLUSE' }
      ],
      metodaTitle: 'Méthode', metodaLabel: '// COMMENT NOUS TRAVAILLONS',
      metodaP1: 'Nous traitons chaque projet comme un calcul : nous découvrons ce dont vous avez besoin, dimensionnons le système, recommandons les équipements appropriés et exécutons le travail proprement, jusqu\'à la mise en service.',
      metodaP2: 'Nous exigeons du sérieux et nous l\'offrons. Le prix est établi sur place, après l\'évaluation technique des travaux.',
      metodaSteps: [
        { k: '01 · APPEL', v: 'réponse < 24h' },
        { k: '02 · VISITE', v: 'mesures + devis' },
        { k: '03 · MONTAGE', v: 'propre, avec protections' },
        { k: '04 · DÉMARRAGE', v: 'test + guide utilisation' }
      ]
    },
    galerie: {
      title: 'Réalisations réelles. Du terrain.',
      captions: [
        'Unité intérieure split · montage résidentiel',
        'Chauffe-eau thermodynamique Ariston · eau chaude sanitaire',
        'Unité extérieure A/C GREE · inverter',
        'Test de pression et mise sous vide · groupe numérique',
        'Pompe à chaleur air-eau Vaillant · unité extérieure',
        'Formation technique · fluide frigorigène écologique R290',
        'Tableau de connexions · câblage alimentation unité'
      ],
      alts: [
        'Unité intérieure climatisation montée au mur',
        'Chauffe-eau thermodynamique installé dans un coin',
        'Unité extérieure climatisation GREE',
        'Appareil numérique de test de pression sur circuit',
        'Pompe à chaleur Vaillant montée sur mur en brique',
        'Session de formation technique sur le fluide R290',
        'Tableau de connexions électriques avec bornes'
      ]
    },
    contact: {
      tag: 'Contact direct',
      title: 'Contactez-nous. Nous parlons directement et fixons un délai.',
      paragraph: 'Pour une estimation correcte, il est important de connaître les besoins et les paramètres du travail. Appelez-nous et nous vous dirons si, dans quel délai et à quel coût nous pouvons vous aider. Nous travaillons avec sérieux, sans surprises.',
      program: 'HORAIRES · LUNDI — SAMEDI · 08:00 — 20:00',
      line1Label: 'Ligne 1 · RO', line2Label: 'Ligne 2 · BE', line3Label: 'Ligne 3 · RO'
    },
    footer: {
      desc: 'Société commerciale spécialisée dans les systèmes HVAC, sanitaires et équipements de préparation d\'eau chaude. Travaux garantis sur les deux marchés.',
      catalogTitle: 'Catalogue', meniuTitle: 'Menu', contactTitle: 'Contact',
      catalogItems: [
        'Climatisation', 'Ventilation VMC', 'Chaudières', 'Chauffage par le sol',
        'Pompe à chaleur air-air', 'Pompe à chaleur air-eau', 'Installations sanitaires',
        'Chauffe-eau électriques', 'Chauffe-eau thermodynamique'
      ]
    }
  },

  be: {
    seo: {
      title: 'DrgConstruct — Systèmes thermiques personnalisés | HVAC & sanitaires RO·BE',
      description: 'Nous concevons et installons des systèmes de chauffage, climatisation, ventilation et installations sanitaires en Roumanie et en Belgique. Garantie incluse, prix établi sur place.'
    },
    header: {
      servicii: 'Services', despre: 'À propos', lucrari: 'Réalisations', contact: 'Contact',
      cta: 'Demander un devis', tagline: 'ROUMANIE / BELGIQUE'
    },
    hero: {
      tag: 'Systèmes HVAC · RO · BE',
      titlePre: 'Nous concevons et installons des ', titleUnderline: 'systèmes thermiques',
      titleMid: ' personnalisés, ', titleMarker: 'à des prix justes',
      paragraph: 'Nous sommes une équipe dynamique spécialisée dans le chauffage, la climatisation et les installations sanitaires. Nous traitons chaque projet avec responsabilité et professionnalisme. Nous dimensionnons, recommandons, exécutons et laissons tout en ordre. Nous travaillons en Roumanie et en Belgique, avec garantie pour chaque travail livré.',
      ctaOferta: 'Demander un devis', ctaWhatsapp: 'WhatsApp', ctaServicii: 'Voir les services',
      specTitle: 'FICHE TECHNIQUE', specRev: 'REV · 01',
      specTipLabel: 'Types de travaux', specTipVal: 'SOLUTIONS INSTALLATIONS',
      specAcoperireLabel: 'Couverture géographique', specAcoperireVal: 'RO · BE',
      specGarantieLabel: 'Garantie', specGarantieVal: 'INCLUSE',
      specPretLabel: 'Établissement du prix', specPretVal: 'SUR PLACE'
    },
    servicii: {
      title: 'Catalogue technique complet.',
      items: [
        { title: 'Climatisation', desc: 'Nous installons des systèmes split, multi-split et cassette pour les logements et bureaux. Nous assurons le montage, la désinfection et le service rapide, avec des unités silencieuses et une faible consommation d\'énergie.' },
        { title: 'Ventilation VMC', desc: 'Deux variantes de système — simple flux (extraction) et double flux (avec récupération de chaleur). Air frais permanent, sans pertes thermiques et sans humidité dans les murs.' },
        { title: 'Chaudières', desc: 'Chaudières à bois, pellets ou gaz. Nous les dimensionnons correctement pour la superficie du logement, les installons et les mettons en service. Entretien annuel sur demande.' },
        { title: 'Chauffage par le sol', desc: 'Nous assurons une distribution uniforme de la chaleur, sans radiateurs apparents. Nous travaillons à basses températures de départ, ce qui signifie que le système se combine parfaitement avec une pompe à chaleur.' },
        { title: 'Pompe à chaleur air-air', desc: 'Un seul système qui chauffe en hiver et refroidit en été. Technologie inverter, haute efficacité, installation en quelques heures — sans travaux majeurs dans la maison.' },
        { title: 'Pompe à chaleur air-eau', desc: 'Solution complète : chauffage de la maison, plancher chauffant et eau chaude sanitaire. Fonctionne même à des températures négatives, avec un rendement réel dans des conditions difficiles.' },
        { title: 'Installations sanitaires', desc: 'Nous réalisons des installations d\'eau chaude, eau froide, évacuation et posons des appareils sanitaires. Nous effectuons des travaux complets pour salles de bain, cuisines et locaux techniques. Nous effectuons un test de pression avant livraison.' },
        { title: 'Chauffe-eau électriques', desc: 'Nous assurons une eau chaude constante, quelle que soit la saison. Nous proposons des capacités de 30 à 200 litres, selon le nombre d\'utilisateurs. L\'installation est rapide et la garantie incluse.' },
        { title: 'Chauffe-eau thermodynamique', desc: 'Nous réduisons la consommation jusqu\'à 70% par rapport à un chauffe-eau classique. Nous utilisons la chaleur de l\'air pour chauffer l\'eau — économie réelle, ressentie sur la facture dès le premier mois.' }
      ]
    },
    despre: {
      title: 'Comment nous travaillons. En bref.',
      identitateTitle: 'Identité', identitateLabel: '// QUI SOMMES-NOUS',
      identitateP1: 'DrgConstruct est une société commerciale active en Roumanie et en Belgique, spécialisée dans le montage et la réparation des systèmes de chauffage, climatisation, ventilation et sanitaires.',
      identitateP2: 'Nous répondons le jour même et respectons les délais convenus. Nous avons de l\'expérience dans les travaux résidentiels et commerciaux, des appartements aux grandes maisons et petits immeubles de bureaux.',
      identitateSpecs: [
        { k: 'Forme juridique', v: 'SRL/SPRL' },
        { k: 'Opérations', v: 'RO · BE' },
        { k: 'Types de travaux', v: 'SOLUTIONS INSTALLATIONS' },
        { k: 'Garantie', v: 'INCLUSE' }
      ],
      metodaTitle: 'Méthode', metodaLabel: '// COMMENT NOUS TRAVAILLONS',
      metodaP1: 'Nous traitons chaque projet comme un calcul : nous découvrons ce dont vous avez besoin, dimensionnons le système, recommandons les équipements appropriés et exécutons le travail proprement, jusqu\'à la mise en service.',
      metodaP2: 'Nous exigeons du sérieux et nous l\'offrons. Le prix est établi sur place, après l\'évaluation technique des travaux.',
      metodaSteps: [
        { k: '01 · APPEL', v: 'réponse < 24h' },
        { k: '02 · VISITE', v: 'mesures + devis' },
        { k: '03 · MONTAGE', v: 'propre, avec protections' },
        { k: '04 · DÉMARRAGE', v: 'test + guide utilisation' }
      ]
    },
    galerie: {
      title: 'Réalisations réelles. Du terrain.',
      captions: [
        'Unité intérieure split · montage résidentiel',
        'Chauffe-eau thermodynamique Ariston · eau chaude sanitaire',
        'Unité extérieure A/C GREE · inverter',
        'Test de pression et mise sous vide · groupe numérique',
        'Pompe à chaleur air-eau Vaillant · unité extérieure',
        'Formation technique · fluide frigorigène écologique R290',
        'Tableau de connexions · câblage alimentation unité'
      ],
      alts: [
        'Unité intérieure climatisation montée au mur',
        'Chauffe-eau thermodynamique installé dans un coin',
        'Unité extérieure climatisation GREE',
        'Appareil numérique de test de pression sur circuit',
        'Pompe à chaleur Vaillant montée sur mur en brique',
        'Session de formation technique sur le fluide R290',
        'Tableau de connexions électriques avec bornes'
      ]
    },
    contact: {
      tag: 'Contact direct',
      title: 'Contactez-nous. Nous parlons directement et fixons un délai.',
      paragraph: 'Pour une estimation correcte, il est important de connaître les besoins et les paramètres du travail. Appelez-nous et nous vous dirons si, dans quel délai et à quel coût nous pouvons vous aider. Nous travaillons avec sérieux, sans surprises.',
      program: 'HORAIRES · LUNDI — SAMEDI · 08:00 — 20:00',
      line1Label: 'Ligne 1 · RO', line2Label: 'Ligne 2 · BE', line3Label: 'Ligne 3 · RO'
    },
    footer: {
      desc: 'Société commerciale spécialisée dans les systèmes HVAC, sanitaires et équipements de préparation d\'eau chaude. Travaux garantis sur les deux marchés.',
      catalogTitle: 'Catalogue', meniuTitle: 'Menu', contactTitle: 'Contact',
      catalogItems: [
        'Climatisation', 'Ventilation VMC', 'Chaudières', 'Chauffage par le sol',
        'Pompe à chaleur air-air', 'Pompe à chaleur air-eau', 'Installations sanitaires',
        'Chauffe-eau électriques', 'Chauffe-eau thermodynamique'
      ]
    }
  }
};
