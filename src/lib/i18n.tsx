import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "nl" | "en";
export type Audience = "wedding" | "business";

export const copy = {
  nl: {
    common: {
      tagline: "Live illustratie & stationery",
      switchToBusiness: "Voor bedrijven",
      switchToWedding: "Voor koppels",
      footer: {
        nav: "Navigatie",
        contact: "Contact",
        legal: "Algemene voorwaarden",
        privacy: "Privacybeleid",
        rights: "Alle rechten voorbehouden.",
      },
    },

    choice: {
      intro: "Waarvoor bent u hier?",
      hint: "Kies een richting",
      panels: [
        {
          key: "wedding",
          to: "/huwelijk",
          eyebrow: "Voor koppels",
          label: "Huwelijk",
          note: "Live illustratie, uitnodigingen & drukwerk",
          img: "/foto/bride-watching.webp",
        },
        {
          key: "business",
          to: "/bedrijven",
          eyebrow: "Voor bedrijven",
          label: "Bedrijven",
          note: "Events, beurzen & branded give-aways",
          img: "/foto/biz-setup.webp",
        },
      ],
    },

    wedding: {
      nav: [
        { label: "Live illustratie", href: "#live" },
        { label: "Drukwerk", href: "#aanbod" },
        { label: "Portfolio", href: "#werk" },
        { label: "Templates", href: "#templates" },
        { label: "Over Eve", href: "#over" },
      ],
      navCta: "Kennismaking plannen",
      ornaments: {
        heroMain: "/illustraties/couple.webp",
        heroFloat: "/illustraties/cupid.webp",
        spotA: "/illustraties/dog.webp",
        spotB: "/illustraties/cat.webp",
        quote: "/illustraties/cupid.webp",
        about: "/illustraties/cupid.webp",
      },
      hero: {
        eyebrow: "Live illustratie voor huwelijken",
        titleA: "Live getekend,",
        titleB: "voor altijd bewaard.",
        lead: "Aquarelillustraties die ter plaatse ontstaan op uw trouwdag. Uw gasten zien hun portret groeien, nemen het mee naar huis en praten er maanden later nog over.",
        ctaPrimary: "Bekijk mijn werk",
        ctaHref: "#werk",
        ctaSecondary: "Kennismaking plannen",
        caption: "Live illustratie op locatie — elk portret in een handvol minuten",
        img: "/foto/hero-eve.webp",
        imgAlt: "Evelien tekent live aquarelportretten aan haar tekentafel",
      },
      strip: ["Huwelijken", "België & buitenland", "Bespoke drukwerk", "Aquarel"],
      services: {
        eyebrow: "Het aanbod",
        title: "Drie manieren om samen te werken",
        lead: "Van een tekenaar aan uw feest tot drukwerk dat de toon zet — alles met dezelfde hand en dezelfde aandacht.",
        items: [
          {
            n: "01",
            title: "Live illustratie",
            text: "Ik teken uw gasten ter plaatse in aquarel. Entertainment tijdens de receptie én een tastbaar aandenken dat iedereen meeneemt.",
            link: "Ontdek live illustratie",
            img: "/foto/line-lights.webp",
            alt: "Live getekende portretten aan een lichtjesslinger op een huwelijk",
          },
          {
            n: "02",
            title: "Huwelijksdrukwerk",
            text: "Bespoke uitnodigingen, menukaarten, tafelnummers en een 'Map of Us' — helemaal op maat van uw verhaal en uw locatie.",
            link: "Ontdek het drukwerk",
            img: "/foto/menu-table.webp",
            alt: "Getekende menukaart op een gedekte huwelijkstafel",
          },
          {
            n: "03",
            title: "Templates",
            text: "Klaar-om-te-gebruiken digitale ontwerpen voor wie zelf aan de slag wil. Meteen te downloaden en aan te passen in Canva.",
            link: "Naar de shop",
            img: "/foto/stationery-stack.webp",
            alt: "Stapel getekende uitnodigingen en menukaarten",
          },
        ],
      },
      spotlight: {
        eyebrow: "Live illustratie",
        title: "Het mooiste cadeau is er één",
        titleItalic: "dat uw gasten zien ontstaan.",
        body: "Terwijl het aperitief wordt geschonken, groeit er iets op mijn tekentafel. Gasten komen kijken, wijzen zichzelf aan, blijven hangen. Aan het einde van de avond neemt u geen dienst mee naar huis, maar een origineel.",
        body2: "Ik werk in aquarel — warm, licht en persoonlijk. Ik teken het koppel, de locatie of de gasten, afhankelijk van wat uw dag nodig heeft.",
        points: [
          "Ter plaatse getekend, in aquarel",
          "Portretten voor uw gasten om mee te nemen",
          "België, Nederland en internationale locaties",
          "Origineel + digitale versie inbegrepen",
        ],
        cta: "Vraag beschikbaarheid",
        img: "/foto/live-studio.webp",
        imgAlt: "Evelien tekent live aan haar verlichte tekentafel tijdens een avondevent",
      },
      gallery: {
        eyebrow: "Portfolio",
        title: "Een greep uit het werk",
        cta: "Vraag beschikbaarheid",
        shots: [
          { src: "/foto/bride-watching.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/card-in-hand.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/arch-warm.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/table-setting.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/hands.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/poster-goesto.webp", span: "", ratio: "aspect-[3/4]" },
        ],
      },
      process: {
        eyebrow: "Zo verloopt het",
        title: "Van eerste gesprek tot ingelijst",
        steps: [
          {
            n: "01",
            title: "Kennismaking",
            text: "We plannen een gesprek van twintig minuten. U vertelt over uw dag, ik denk mee over wat past.",
          },
          {
            n: "02",
            title: "Voorstel op maat",
            text: "U krijgt een helder voorstel: stijl, formaat, aantal uren en prijs. Geen verrassingen achteraf.",
          },
          {
            n: "03",
            title: "De dag zelf",
            text: "Ik installeer mij discreet, teken live en lever aan het einde van de avond een afgewerkt origineel af.",
          },
        ],
      },
      quote: {
        text: "Onze gasten praten er nu nog over. Evelien tekende de hele avond door en iedereen ging naar huis met iets in de hand.",
        author: "Lien & Bram",
        detail: "Huwelijk, Oost-Vlaanderen",
      },
      shop: {
        eyebrow: "Templates",
        title: "Zelf aan de slag",
        body: "Voor wie het graag zelf in handen neemt: digitale templates voor uitnodigingen, menukaarten, tafelnummers en geboortekaartjes. Meteen downloaden, aanpassen in Canva, klaar voor de drukker.",
        cta: "Bekijk de templates",
        soon: "Binnenkort beschikbaar",
      },
      about: {
        eyebrow: "Over Eve",
        title: "Aangenaam, ik ben Evelien",
        body: "Vanuit mijn studio in Sint-Pauwels teken ik dagen die mensen niet willen vergeten. Wat begon met kaartjes voor vrienden groeide uit tot live illustratie op huwelijken door heel België en daarbuiten.",
        body2: "Ik werk graag persoonlijk en in kleine aantallen — zodat elk beeld écht over die ene dag gaat.",
        cta: "Lees mijn verhaal",
        img: "/foto/eve-portrait.webp",
        imgAlt: "Portret van Evelien De Smet",
      },
      cta: {
        title: "Zullen we eens praten?",
        body: "Plan een vrijblijvende kennismaking van twintig minuten. Vertel me over uw dag, en ik laat u weten wat er mogelijk is.",
        primary: "Kennismaking plannen",
        secondary: "Stuur een bericht",
      },
    },

    business: {
      nav: [
        { label: "Waarom", href: "#live" },
        { label: "Toepassingen", href: "#aanbod" },
        { label: "Portfolio", href: "#werk" },
        { label: "Over Eve", href: "#over" },
      ],
      navCta: "Offerte aanvragen",
      ornaments: {
        heroMain: "/illustraties/dinner.webp",
        heroFloat: "/illustraties/cat.webp",
        spotA: "/illustraties/dog.webp",
        spotB: "/illustraties/lemons.webp",
        quote: "/illustraties/lemons.webp",
        about: "/illustraties/cat.webp",
      },
      hero: {
        eyebrow: "Live illustratie voor bedrijven",
        titleA: "Een give-away die",
        titleB: "niemand weggooit.",
        lead: "Live getekende aquarelportretten op uw event, beurs of personeelsfeest. Bezoekers wachten in de rij, poseren voor hun tekening en nemen uw merk mee naar hun bureau.",
        ctaPrimary: "Bekijk toepassingen",
        ctaHref: "#aanbod",
        ctaSecondary: "Offerte aanvragen",
        caption: "Getekend ter plaatse — met uw huisstijl op elk exemplaar",
        img: "/foto/biz-setup.webp",
        imgAlt: "Evelien tekent live tijdens een bedrijfsevent",
      },
      strip: ["Beurzen", "Productlanceringen", "Personeelsfeesten", "Klantenevents"],
      services: {
        eyebrow: "Toepassingen",
        title: "Waar live illustratie het verschil maakt",
        lead: "Overal waar u wilt dat mensen blijven staan, iets meenemen en het achteraf nog delen.",
        items: [
          {
            n: "01",
            title: "Beurzen & stands",
            text: "Een tekenaar op uw stand trekt bezoekers aan zonder dat u ze moet aanspreken. Ze komen kijken, blijven wachten en gaan in gesprek terwijl ik teken.",
            link: "Vraag een voorstel",
            img: "/foto/biz-display.webp",
            alt: "Live getekende portretten opgehangen op een event",
          },
          {
            n: "02",
            title: "Events & lanceringen",
            text: "Bij een productlancering of klantenevent geeft live illustratie uw avond een tastbaar hoogtepunt — en levert het meteen social content op.",
            link: "Vraag een voorstel",
            img: "/foto/biz-drawing.webp",
            alt: "Evelien tekent een portret tijdens een avondevent",
          },
          {
            n: "03",
            title: "Branded give-aways",
            text: "Elk portret krijgt uw logo, kleuren of campagnelijn mee. Een relatiegeschenk dat op een bureau belandt in plaats van in de lade.",
            link: "Vraag een voorstel",
            img: "/foto/biz-cards.webp",
            alt: "Getekende kaarten met huisstijl",
          },
        ],
      },
      spotlight: {
        eyebrow: "Waarom het werkt",
        title: "Mensen bewaren geen flyer.",
        titleItalic: "Een portret van zichzelf wel.",
        body: "De gemiddelde beursgadget overleeft de terugreis niet. Een tekening van de bezoeker zelf, gemaakt terwijl die toekijkt, is persoonlijk — en daardoor onweggooibaar. Uw merk staat eronder en blijft maandenlang zichtbaar.",
        body2: "Bovendien creëert het tekenen zelf een aanleiding tot gesprek. Bezoekers blijven vijf tot tien minuten staan, en dat is precies de tijd die uw team nodig heeft.",
        points: [
          "Uw logo en huisstijl op elk exemplaar",
          "Digitale versies voor uw eigen kanalen",
          "Verzorgde opstelling die bij uw merk past",
          "Ook in het buitenland inzetbaar",
        ],
        cta: "Offerte aanvragen",
        img: "/foto/biz-hand.webp",
        imgAlt: "Close-up van een hand die een portret inkleurt",
      },
      gallery: {
        eyebrow: "Portfolio",
        title: "Werk op locatie",
        cta: "Offerte aanvragen",
        shots: [
          { src: "/foto/biz-display.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/biz-brush.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/sign-bar.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/outdoor-setup.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/live-studio.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/card-in-hand.webp", span: "", ratio: "aspect-[3/4]" },
        ],
      },
      process: {
        eyebrow: "Zo verloopt het",
        title: "Van briefing tot laatste bezoeker",
        steps: [
          {
            n: "01",
            title: "Briefing",
            text: "We bekijken uw event, doelgroep en huisstijl. Ik stel voor wat haalbaar is binnen uw timing en budget.",
          },
          {
            n: "02",
            title: "Branded opzet",
            text: "Uw logo en kleuren worden in het kaartontwerp verwerkt. U krijgt vooraf een proef ter goedkeuring.",
          },
          {
            n: "03",
            title: "Op locatie",
            text: "Ik kom met een verzorgde opstelling, teken doorlopend en lever nadien alle digitale versies aan.",
          },
        ],
      },
      quote: {
        text: "De rij aan onze stand stopte niet. Mensen kwamen terug met collega's en we hebben zelden zoveel gesprekken gehad op één beursdag.",
        author: "Marketingteam",
        detail: "Vakbeurs, Antwerpen",
      },
      about: {
        eyebrow: "Over Eve",
        title: "Aangenaam, ik ben Evelien",
        body: "Vanuit mijn studio in Sint-Pauwels teken ik live op events door heel België en daarbuiten. Ik werk in aquarel — herkenbaar, warm en ver van de standaard eventanimatie.",
        body2: "U krijgt één aanspreekpunt, een verzorgde opstelling die bij uw merk past en een afspraak die nagekomen wordt.",
        cta: "Lees mijn verhaal",
        img: "/foto/eve-studio.webp",
        imgAlt: "Portret van Evelien De Smet aan het werk",
      },
      cta: {
        title: "Een event in het vooruitzicht?",
        body: "Vertel me kort over uw event, datum en verwachte aantal bezoekers. U krijgt een concreet voorstel met prijs en timing.",
        primary: "Offerte aanvragen",
        secondary: "Stuur een bericht",
      },
    },
  },

  en: {
    common: {
      tagline: "Live illustration & stationery",
      switchToBusiness: "For companies",
      switchToWedding: "For couples",
      footer: {
        nav: "Navigation",
        contact: "Contact",
        legal: "Terms & conditions",
        privacy: "Privacy policy",
        rights: "All rights reserved.",
      },
    },

    choice: {
      intro: "What brings you here?",
      hint: "Choose a direction",
      panels: [
        {
          key: "wedding",
          to: "/huwelijk",
          eyebrow: "For couples",
          label: "Weddings",
          note: "Live illustration, invitations & stationery",
          img: "/foto/bride-watching.webp",
        },
        {
          key: "business",
          to: "/bedrijven",
          eyebrow: "For companies",
          label: "Companies",
          note: "Events, trade fairs & branded give-aways",
          img: "/foto/biz-setup.webp",
        },
      ],
    },

    wedding: {
      nav: [
        { label: "Live illustration", href: "#live" },
        { label: "Stationery", href: "#aanbod" },
        { label: "Portfolio", href: "#werk" },
        { label: "Templates", href: "#templates" },
        { label: "About Eve", href: "#over" },
      ],
      navCta: "Book an intro call",
      ornaments: {
        heroMain: "/illustraties/couple.webp",
        heroFloat: "/illustraties/cupid.webp",
        spotA: "/illustraties/dog.webp",
        spotB: "/illustraties/cat.webp",
        quote: "/illustraties/cupid.webp",
        about: "/illustraties/cupid.webp",
      },
      hero: {
        eyebrow: "Live illustration for weddings",
        titleA: "Drawn live,",
        titleB: "kept forever.",
        lead: "Watercolour illustrations created on the spot at your wedding. Your guests watch their portrait appear, take it home, and are still talking about it months later.",
        ctaPrimary: "See my work",
        ctaHref: "#werk",
        ctaSecondary: "Book an intro call",
        caption: "Live illustration on location — each portrait in a handful of minutes",
        img: "/foto/hero-eve.webp",
        imgAlt: "Evelien drawing live watercolour portraits at her table",
      },
      strip: ["Weddings", "Belgium & abroad", "Bespoke stationery", "Watercolour"],
      services: {
        eyebrow: "The offer",
        title: "Three ways to work together",
        lead: "From an illustrator at your party to stationery that sets the tone — all by the same hand, with the same care.",
        items: [
          {
            n: "01",
            title: "Live illustration",
            text: "I draw your guests on the spot in watercolour. Entertainment during the reception and a keepsake everyone takes home.",
            link: "Discover live illustration",
            img: "/foto/line-lights.webp",
            alt: "Live drawn portraits pegged on a string of lights at a wedding",
          },
          {
            n: "02",
            title: "Wedding stationery",
            text: "Bespoke invitations, menu cards, table numbers and a 'Map of Us' — entirely shaped around your story and your venue.",
            link: "Discover the stationery",
            img: "/foto/menu-table.webp",
            alt: "Illustrated menu card on a laid wedding table",
          },
          {
            n: "03",
            title: "Templates",
            text: "Ready-to-use digital designs for those who'd rather do it themselves. Download instantly and edit in Canva.",
            link: "Visit the shop",
            img: "/foto/stationery-stack.webp",
            alt: "Stack of illustrated invitations and menu cards",
          },
        ],
      },
      spotlight: {
        eyebrow: "Live illustration",
        title: "The finest gift is the one",
        titleItalic: "your guests watch being made.",
        body: "While the drinks are poured, something grows on my drawing table. Guests come over, point themselves out, linger. At the end of the night you don't take home a service — you take home an original.",
        body2: "I work in watercolour: warm, light and personal. I draw the couple, the venue or the guests, depending on what your day needs.",
        points: [
          "Drawn on site, in watercolour",
          "Portraits for your guests to take home",
          "Belgium, the Netherlands and abroad",
          "Original plus digital file included",
        ],
        cta: "Check availability",
        img: "/foto/live-studio.webp",
        imgAlt: "Evelien drawing live at her lit table during an evening event",
      },
      gallery: {
        eyebrow: "Portfolio",
        title: "A glimpse of the work",
        cta: "Check availability",
        shots: [
          { src: "/foto/bride-watching.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/card-in-hand.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/arch-warm.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/table-setting.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/hands.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/poster-goesto.webp", span: "", ratio: "aspect-[3/4]" },
        ],
      },
      process: {
        eyebrow: "How it works",
        title: "From first call to framed",
        steps: [
          {
            n: "01",
            title: "Intro call",
            text: "We schedule twenty minutes. You tell me about your day, and I think along about what fits.",
          },
          {
            n: "02",
            title: "Tailored proposal",
            text: "You receive a clear proposal: style, format, hours and price. No surprises afterwards.",
          },
          {
            n: "03",
            title: "The day itself",
            text: "I set up discreetly, draw live, and hand over a finished original at the end of the evening.",
          },
        ],
      },
      quote: {
        text: "Our guests are still talking about it. Evelien drew all evening and everyone went home with something in their hands.",
        author: "Lien & Bram",
        detail: "Wedding, East Flanders",
      },
      shop: {
        eyebrow: "Templates",
        title: "Do it yourself",
        body: "For those who like to take the reins: digital templates for invitations, menu cards, table numbers and birth announcements. Download instantly, edit in Canva, ready for print.",
        cta: "Browse the templates",
        soon: "Coming soon",
      },
      about: {
        eyebrow: "About Eve",
        title: "Nice to meet you, I'm Evelien",
        body: "From my studio in Sint-Pauwels I draw days people don't want to forget. What started as cards for friends grew into live illustration at weddings across Belgium and beyond.",
        body2: "I like to work personally and in small numbers — so every image is truly about that one day.",
        cta: "Read my story",
        img: "/foto/eve-portrait.webp",
        imgAlt: "Portrait of Evelien De Smet",
      },
      cta: {
        title: "Shall we talk?",
        body: "Book a free twenty-minute intro call. Tell me about your day, and I'll let you know what's possible.",
        primary: "Book an intro call",
        secondary: "Send a message",
      },
    },

    business: {
      nav: [
        { label: "Why it works", href: "#live" },
        { label: "Applications", href: "#aanbod" },
        { label: "Portfolio", href: "#werk" },
        { label: "About Eve", href: "#over" },
      ],
      navCta: "Request a quote",
      ornaments: {
        heroMain: "/illustraties/dinner.webp",
        heroFloat: "/illustraties/cat.webp",
        spotA: "/illustraties/dog.webp",
        spotB: "/illustraties/lemons.webp",
        quote: "/illustraties/lemons.webp",
        about: "/illustraties/cat.webp",
      },
      hero: {
        eyebrow: "Live illustration for companies",
        titleA: "A give-away nobody",
        titleB: "throws away.",
        lead: "Live watercolour portraits at your event, trade fair or staff party. Visitors queue up, pose for their drawing and carry your brand back to their desk.",
        ctaPrimary: "See applications",
        ctaHref: "#aanbod",
        ctaSecondary: "Request a quote",
        caption: "Drawn on site — carrying your brand on every piece",
        img: "/foto/biz-setup.webp",
        imgAlt: "Evelien drawing live during a corporate event",
      },
      strip: ["Trade fairs", "Product launches", "Staff parties", "Client events"],
      services: {
        eyebrow: "Applications",
        title: "Where live illustration makes the difference",
        lead: "Anywhere you want people to stop, take something with them and share it afterwards.",
        items: [
          {
            n: "01",
            title: "Trade fairs & stands",
            text: "An illustrator at your stand draws visitors in without you having to approach them. They watch, they wait, and they start talking while I draw.",
            link: "Request a proposal",
            img: "/foto/biz-display.webp",
            alt: "Live drawn portraits displayed at an event",
          },
          {
            n: "02",
            title: "Events & launches",
            text: "At a product launch or client event, live illustration gives your evening a tangible highlight — and produces social content along the way.",
            link: "Request a proposal",
            img: "/foto/biz-drawing.webp",
            alt: "Evelien drawing a portrait during an evening event",
          },
          {
            n: "03",
            title: "Branded give-aways",
            text: "Every portrait carries your logo, colours or campaign line. A corporate gift that ends up on a desk instead of in a drawer.",
            link: "Request a proposal",
            img: "/foto/biz-cards.webp",
            alt: "Illustrated cards in brand style",
          },
        ],
      },
      spotlight: {
        eyebrow: "Why it works",
        title: "Nobody keeps a flyer.",
        titleItalic: "A portrait of themselves, they do.",
        body: "The average trade-fair gadget doesn't survive the trip home. A drawing of the visitor, made while they watch, is personal — and therefore impossible to throw away. Your brand sits underneath it and stays visible for months.",
        body2: "The drawing itself also creates a reason to talk. Visitors stay for five to ten minutes, and that is exactly the time your team needs.",
        points: [
          "Your logo and brand style on every piece",
          "Digital versions for your own channels",
          "A polished set-up that matches your brand",
          "Available for events abroad too",
        ],
        cta: "Request a quote",
        img: "/foto/biz-hand.webp",
        imgAlt: "Close-up of a hand colouring in a portrait",
      },
      gallery: {
        eyebrow: "Portfolio",
        title: "Work on location",
        cta: "Request a quote",
        shots: [
          { src: "/foto/biz-display.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/biz-brush.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/sign-bar.webp", span: "", ratio: "aspect-[3/4]" },
          { src: "/foto/outdoor-setup.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/live-studio.webp", span: "sm:col-span-2", ratio: "aspect-[3/2]" },
          { src: "/foto/card-in-hand.webp", span: "", ratio: "aspect-[3/4]" },
        ],
      },
      process: {
        eyebrow: "How it works",
        title: "From briefing to the last visitor",
        steps: [
          {
            n: "01",
            title: "Briefing",
            text: "We look at your event, audience and brand style. I propose what's feasible within your timing and budget.",
          },
          {
            n: "02",
            title: "Branded set-up",
            text: "Your logo and colours are worked into the card design. You approve a proof beforehand.",
          },
          {
            n: "03",
            title: "On location",
            text: "I arrive with a polished set-up, draw continuously and deliver all digital versions afterwards.",
          },
        ],
      },
      quote: {
        text: "The queue at our stand never stopped. People came back with colleagues and we've rarely had so many conversations in a single fair day.",
        author: "Marketing team",
        detail: "Trade fair, Antwerp",
      },
      about: {
        eyebrow: "About Eve",
        title: "Nice to meet you, I'm Evelien",
        body: "From my studio in Sint-Pauwels I draw live at events across Belgium and beyond. I work in watercolour — recognisable, warm and a long way from standard event entertainment.",
        body2: "You get one point of contact, a polished set-up that matches your brand, and an agreement that is kept.",
        cta: "Read my story",
        img: "/foto/eve-studio.webp",
        imgAlt: "Portrait of Evelien De Smet at work",
      },
      cta: {
        title: "An event coming up?",
        body: "Tell me briefly about your event, the date and the expected number of visitors. You'll get a concrete proposal with price and timing.",
        primary: "Request a quote",
        secondary: "Send a message",
      },
    },
  },
} as const;

/** Both audiences share the same section shape, so one page shell renders either. */
export type PageCopy = (typeof copy)["nl"]["wedding"] | (typeof copy)["nl"]["business"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof copy)["nl"] };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");
  const t = copy[lang] as (typeof copy)["nl"];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
