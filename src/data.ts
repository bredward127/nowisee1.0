import coverImg from './assets/images/book_cover.jpg';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // -------------------------------------------------------------
  // CATEGORY 1: Books (Toni ME Taylor Memoirs & Companions)
  // -------------------------------------------------------------
  {
    id: 'now-i-see-hardcover',
    title: 'Now I See — Hardcover Edition',
    price: 24.99,
    category: 'Books',
    image: coverImg,
    fallbackImage: coverImg,
    description: 'The premium, durable hardcover edition of Toni ME Taylor’s spiritual memoir. Beautifully printed with high-quality binding, shimmering foil highlights, and vibrant lettering.',
    features: [
      'Gold foil display highlights',
      'Elegant cream-colored archival pages',
      'Durable library-quality library binding',
      'Includes the personal introductory letter'
    ],
    inStock: true
  },
  {
    id: 'now-i-see-paperback',
    title: 'Now I See — Paperback Edition',
    price: 14.99,
    category: 'Books',
    image: coverImg,
    fallbackImage: coverImg,
    description: 'The complete, uncompromised paperback edition of the memoir. Perfect for reading on the go, highlighting, and passing on to loved ones.',
    features: [
      'Soft-touch premium matte cover',
      'Easy-to-read elegant typography',
      'Lightweight and perfect for sharing',
      'Full 197 pages of testimony'
    ],
    inStock: true
  },

  // -------------------------------------------------------------
  // CATEGORY 2: Haitian Creole Bibles
  // -------------------------------------------------------------
  {
    id: 'haitian-creole-bible-standard',
    title: 'Haitian Creole Bible (La Bib La) — Standard Hardcover',
    price: 14.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_bible_la_bib_la_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'The complete Holy Bible translated into Haitian Creole (La Bib La translation). Designed for church congregations and individual study, featuring a durable binding and clear typography.',
    features: [
      'Complete Old and New Testaments',
      'Faithful Haitian Creole translation (La Bib La)',
      'Highly durable hardcover binding built for church use',
      'Cross-references, footnoted translations, and maps'
    ],
    inStock: true
  },
  {
    id: 'haitian-creole-bible-large',
    title: 'Haitian Creole Bible (La Bib La) — Giant Print Edition',
    price: 22.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_giant_print_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&w=600&q=80',
    description: 'A special large-print edition of the Haitian Creole Holy Bible (La Bib La). Perfect for elders, public reading, and comfortable study.',
    features: [
      'Giant 14-point clear-print font size',
      'Complete text of La Bib La translation',
      'Double-column layout with easy-to-read formatting',
      'Ribbon marker and elegant gold spine lettering'
    ],
    inStock: true
  },
  {
    id: 'haitian-creole-new-testament',
    title: 'Haitian Creole New Testament with Psalms & Proverbs',
    price: 4.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_new_testament_paperback.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    description: 'A lightweight and cost-effective paperback edition of the New Testament, Psalms, and Proverbs in Haitian Creole, ideal for outreach ministries and pocket carrying.',
    features: [
      'Includes New Testament, Psalms, and Proverbs',
      'Compact, travel-friendly softcover paperback',
      'Affordable bulk pricing for community distribution',
      'Clear, modern-reading layout with introductory guide'
    ],
    inStock: true
  },
  {
    id: 'haitian-creole-english-bilingual',
    title: 'Haitian Creole / English Bilingual New Testament',
    price: 12.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_english_bilingual_new_testament.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    description: 'Side-by-side bilingual edition featuring the Haitian Creole La Bib La text and the English Good News Translation (GNT). Perfect for language learners and multicultural communities.',
    features: [
      'Side-by-side column text presentation',
      'Haitian Creole (La Bib La) + English (Good News Translation)',
      'Durable and clean flexible vinyl cover',
      'Includes helpful cross-lingual dictionary and maps'
    ],
    inStock: true
  },
  {
    id: 'haitian-creole-bible-leather',
    title: 'Haitian Creole Bible (La Bib La) — Premium Leathertone',
    price: 29.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_leather_burgundy.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80',
    description: 'An elegant, luxury-bound edition of La Bib La in a soft, burnished burgundy leathertone cover. Ideal for gifts, special landmarks, and lifelong personal study.',
    features: [
      'Luxurious, water-resistant leather-feel burgundy cover',
      'Gilded golden page edges with a matching ribbon marker',
      'Words of Christ printed in bold red letter alignment',
      'Comes in a presentation gift box with personal registry'
    ],
    inStock: true
  },
  {
    id: 'haitian-creole-audio-new-testament',
    title: 'Haitian Creole Audio New Testament (MP3 CD Pack)',
    price: 19.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_audio_bible.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
    description: 'A beautifully narrated audio edition of the Haitian Creole New Testament, professionally voiced and recorded. Perfect for daily listening, commutes, and visually impaired individuals.',
    features: [
      'High-fidelity digital recordings across multiple CDs',
      'Clear, natural pronunciation by native Haitian speakers',
      'Divided cleanly into chapters for easy navigation',
      'Includes handy travel storage binder and study map'
    ],
    inStock: true
  },
  {
    id: 'haitian-creole-children-illustrated',
    title: 'Haitian Creole Children’s Illustrated Bible (La Bib Timoun Yo)',
    price: 11.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_kids_bible.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    description: 'An engaging, colorful Bible storytelling collection written specifically for children. Translated into clear, easy-to-read Haitian Creole to foster family reading sessions.',
    features: [
      'Contains 60 of the most loved Bible narrative accounts',
      'Vibrant full-page historical illustrations on every page',
      'Simple, clear language tailored for young minds',
      'Perfect for Sunday schools and family prayer tables'
    ],
    inStock: true
  },
  {
    id: 'haitian-creole-pocket-new-testament',
    title: 'Haitian Creole Pocket New Testament (Blue Vinyl)',
    price: 3.99,
    category: 'Haitian Creole Bibles',
    image: 'https://www.bibles.com/media/catalog/product/h/a/haitian_creole_pocket_vinyl.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80',
    description: 'An ultra-compact, travel-friendly edition of the Haitian Creole New Testament, bound in a protective and sturdy navy blue vinyl protective cover.',
    features: [
      'Complete New Testament text in a pocket profile',
      'Durable, waterproof flexible vinyl protective shield',
      'Weighs less than 4 ounces, ideal for travel carrying',
      'Includes reading schedule guides and outreach logs'
    ],
    inStock: true
  },

  // -------------------------------------------------------------
  // CATEGORY 3: English Bibles
  // -------------------------------------------------------------
  {
    id: 'esv-pew-bible-black',
    title: 'ESV Pew Bible — Classic Black Hardcover',
    price: 10.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_pew_bible_black.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1438210125605-fa95267e3a41?auto=format&fit=crop&w=600&q=80',
    description: 'The standard ESV Pew Bible with a durable black hardcover. Highly cost-effective for congregations, displaying clear typography on white archival paper.',
    features: [
      'English Standard Version (ESV) translation',
      'Extremely durable hardcover casing built for daily wear',
      'Classic double-column layout with section headers',
      'Readable 8.5-point type font size'
    ],
    inStock: true
  },
  {
    id: 'esv-economy-bible-paperback',
    title: 'ESV Economy Bible — Outreach Softcover',
    price: 2.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_economy_bible_paperback.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'A low-cost, light-volume outreach Bible in the English Standard Version. Engineered specifically for distribution, mission trips, and community gifts.',
    features: [
      'Full Old and New Testaments in ESV text',
      'Lightweight, highly budget-friendly paperback cover',
      'Features a helpful plan of salvation guide',
      'Double-column, clear font layout format'
    ],
    inStock: true
  },
  {
    id: 'kjv-standard-pew-bible',
    title: 'KJV Standard Pew Bible — Burgundy Hardcover',
    price: 10.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/k/j/kjv_pew_bible_burgundy.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
    description: 'A classic, long-lasting burgundy hardcover pew Bible in the beloved King James Version (KJV). Features crisp printing, maps, and study resources.',
    features: [
      'Authorized King James Version text',
      'Sturdy fabric hardcover binding with gold lettering',
      'Includes list of key scriptures and colorful maps',
      'Clean double-column format with cross-references'
    ],
    inStock: true
  },
  {
    id: 'kjv-gift-award-bible',
    title: 'KJV Gift and Award Bible — Black Imitation Leather',
    price: 6.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/k/j/kjv_gift_award_leather.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    description: 'The perfect milestone gift, featuring a black imitation leather cover, special presentation pages, and a concise dictionary/concordance resource block.',
    features: [
      'Soft-touch durable black imitation leather cover',
      'Presentation page for graduation, baptism, or marriage',
      'Words of Christ printed in bold red lettering',
      'Includes a helpful topical scripture finder index'
    ],
    inStock: true
  },
  {
    id: 'niv-pew-bible-blue',
    title: 'NIV Pew Bible — Royal Blue Hardcover',
    price: 12.49,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/n/i/niv_pew_bible_blue.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1438210125605-fa95267e3a41?auto=format&fit=crop&w=600&q=80',
    description: 'The standard pew Bible in the New International Version (NIV), featuring a sturdy royal blue hardcover with gold foiled lettering designed for daily corporate assembly.',
    features: [
      'Most modern New International Version (NIV) text',
      'High-quality, durable cloth hardcover binding',
      'Optimal 9-point Comfort Print font readability',
      'Comes with full-color visual maps of biblical lands'
    ],
    inStock: true
  },
  {
    id: 'niv-outreach-bible-softcover',
    title: 'NIV Outreach Bible — Low-Cost Softcover',
    price: 3.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/n/i/niv_outreach_bible_paperback.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
    description: 'A highly budget-friendly, full-text New International Version (NIV) Bible in a durable softcover, specifically optimized for evangelism outreach and high-volume distribution.',
    features: [
      'Full Old and New Testaments in the trusted NIV translation',
      'Lightweight paperback format perfect for sharing',
      'Includes introductory articles, maps, and plan of salvation',
      'Double-column, clear-font text with minimal weight'
    ],
    inStock: true
  },
  {
    id: 'gnt-standard-bible-hardcover',
    title: 'GNT Standard Holy Bible — Green Hardcover',
    price: 9.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/g/n/gnt_standard_bible_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'The Good News Translation (GNT) standard hardcover, highly prized for its simple, contemporary language and expressive, unique line drawings throughout.',
    features: [
      'Highly readable Good News Translation (GNT) English',
      'Over 200 classic Annie Vallotton sketch illustrations',
      'Chronological history timelines and reading schemes',
      'Rigid forest green hardcover designed for heavy study'
    ],
    inStock: true
  },
  {
    id: 'cev-standard-bible-paperback',
    title: 'CEV Standard Holy Bible — Flexible Paperback',
    price: 7.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/c/e/cev_standard_bible_paperback.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    description: 'The Contemporary English Version (CEV) is translated to be easily read aloud and understood by all ages. Features a lightweight, flexible softcover.',
    features: [
      'Optimized translation flow for spoken/oral readings',
      'Lightweight and perfect for daily study carrying',
      'Includes a glossary of difficult biblical terms',
      'Comes with standard historical timelines and maps'
    ],
    inStock: true
  },
  {
    id: 'nasb-pew-bible-hardcover',
    title: 'NASB Pew Bible — Classic Navy Hardcover',
    price: 13.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/n/a/nasb_pew_bible_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1438210125605-fa95267e3a41?auto=format&fit=crop&w=600&q=80',
    description: 'The New American Standard Bible (NASB), famous for its literal, word-for-word accuracy. Standard navy hardcover designed for church pew stands.',
    features: [
      'Faithful literal NASB 1995 translation text',
      'Robust cloth binding with gold embossed lettering',
      'Clear double-column design with section outlines',
      'Archival-grade paper built to withstand generations'
    ],
    inStock: true
  },
  {
    id: 'nlt-pew-bible-brown',
    title: 'NLT Pew Bible — Warm Brown Hardcover',
    price: 11.99,
    category: 'English Bibles',
    image: 'https://www.bibles.com/media/catalog/product/n/l/nlt_pew_bible_brown.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80',
    description: 'The New Living Translation (NLT) features dynamic equivalence translation that is incredibly warm and modern. Bound in a beautiful brown hardcover.',
    features: [
      'Highly engaging and conversational NLT text flow',
      'Sturdy textured brown cloth cover binding',
      'Designed to match traditional and contemporary pews',
      'Features a quick-access scripture topical index'
    ],
    inStock: true
  },

  // -------------------------------------------------------------
  // CATEGORY 4: Spanish Bibles
  // -------------------------------------------------------------
  {
    id: 'rvr1960-santa-biblia-hardcover',
    title: 'Spanish Santa Biblia RVR 1960 — Hardcover',
    price: 9.99,
    category: 'Spanish Bibles',
    image: 'https://www.bibles.com/media/catalog/product/r/v/rvr1960_santa_biblia_hardcover_black.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
    description: 'La Santa Biblia en español, traducción Reina Valera 1960. Una edición económica de tapa dura, ideal para estudio personal, obsequios y congregaciones.',
    features: [
      'Texto completo de la traducción Reina Valera 1960',
      'Tapa dura duradera diseñada para uso prolongado',
      'Secciones de ayuda al lector y mapas a color',
      'Tipografía clara y de lectura agradable'
    ],
    inStock: true
  },
  {
    id: 'rvr1960-santa-biblia-economica',
    title: 'Spanish RVR 1960 Santa Biblia — Economical Softcover',
    price: 3.99,
    category: 'Spanish Bibles',
    image: 'https://www.bibles.com/media/catalog/product/r/v/rvr1960_santa_biblia_economica.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    description: 'Una Santa Biblia muy económica en la traducción clásica Reina Valera 1960. Ideal para campañas de evangelización y distribución comunitaria masiva.',
    features: [
      'Texto íntegro de la clásica versión Reina Valera 1960',
      'Portada rústica de papel suave, ligera y fácil de llevar',
      'Incluye plan de salvación y guía de lectura rápida',
      'Excelente relación calidad-precio para ministerios'
    ],
    inStock: true
  },
  {
    id: 'rvr1960-large-print-leather',
    title: 'Spanish Reina Valera 1960 — Large Print Leathertone',
    price: 19.99,
    category: 'Spanish Bibles',
    image: 'https://www.bibles.com/media/catalog/product/r/v/rvr1960_large_print_leathertone_brown.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    description: 'Una elegante Biblia de estudio Reina Valera 1960 con letra grande (12 puntos), encuadernada en fina piel sintética marrón con cantos dorados.',
    features: [
      'Letra grande de 12 puntos para máxima legibilidad',
      'Encuadernación de lujo en imitación piel marrón',
      'Palabras de Cristo resaltadas en color rojo',
      'Contiene concordancia amplia y mapas detallados'
    ],
    inStock: true
  },
  {
    id: 'rvr1960-bilingual-bible',
    title: 'Spanish / English Bilingual Bible (RVR1960/KJV)',
    price: 21.99,
    category: 'Spanish Bibles',
    image: 'https://www.bibles.com/media/catalog/product/r/v/rvr1960_bilingual_bible.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    description: 'Biblia bilingüe paralela de dos columnas. Presenta la clásica traducción española Reina Valera 1960 al lado de la clásica versión inglesa King James Version.',
    features: [
      'Texto en columnas paralelas frente a frente (Español/Inglés)',
      'Reina Valera 1960 + King James Version (KJV)',
      'Tapa dura resistente con letras doradas grabadas',
      'Glosario integrado y referencias cruzadas bilingües'
    ],
    inStock: true
  },
  {
    id: 'nvi-santa-biblia-tapa-blanda',
    title: 'Spanish Santa Biblia NVI — Tapa Blanda',
    price: 8.99,
    category: 'Spanish Bibles',
    image: 'https://www.bibles.com/media/catalog/product/n/v/nvi_santa_biblia_tapa_blanda.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'La Nueva Versión Internacional (NVI) en español es muy valorada por su excelente equilibrio entre fidelidad y facilidad de lectura moderna.',
    features: [
      'Texto completo en traducción contemporánea NVI',
      'Tapa blanda de tacto sedoso y durabilidad flexible',
      'Notas a pie de página aclaratorias sobre términos hebreos',
      'Ideal para jóvenes y personas que inician su estudio'
    ],
    inStock: true
  },
  {
    id: 'rvr1960-pocket-bible-zipper',
    title: 'Spanish RVR 1960 Pocket Bible (Zippered Vinyl)',
    price: 14.49,
    category: 'Spanish Bibles',
    image: 'https://www.bibles.com/media/catalog/product/r/v/rvr1960_pocket_bible_zipper.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80',
    description: 'Biblia de tamaño bolsillo en estuche protector de vinilo con cremallera de alta calidad para proteger las páginas contra polvo, dobleces y rasgaduras.',
    features: [
      'Tamaño bolsillo ultra-compacto perfecto para viajes',
      'Cierre con cremallera completa que protege las hojas',
      'Cantos plateados metálicos elegantes',
      'Contiene breves introducciones a cada libro bíblico'
    ],
    inStock: true
  },

  // -------------------------------------------------------------
  // CATEGORY 5: Study & Devotional Bibles
  // -------------------------------------------------------------
  {
    id: 'esv-study-bible-hardcover',
    title: 'ESV Study Bible — Premium Hardcover Edition',
    price: 44.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_study_bible_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80',
    description: 'The ESV Study Bible features 20,000+ study notes, 80,000+ cross-references, 200+ full-color maps, charts, and comprehensive articles written by leading biblical scholars.',
    features: [
      'Comprehensive study notes on every single page',
      'Full-color theological maps, charts, and illustrations',
      'Complete English Standard Version (ESV) text',
      'High-quality Smyth-sewn archival-grade binding'
    ],
    inStock: true
  },
  {
    id: 'esv-scripture-journal-romans',
    title: 'ESV Scripture Journal: Romans',
    price: 5.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_scripture_journal_romans.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    description: 'Features the complete biblical text of the Book of Romans on the left-hand side, paired with lightly lined blank grid pages on the right-hand side for your sermon and study notes.',
    features: [
      'Complete Book of Romans in the ESV translation',
      'Generous wide margins and full lined page for journaling',
      'Elegant matte paperback softcover with gold accents',
      'Premium thick cream paper that prevents ink bleeding'
    ],
    inStock: true
  },
  {
    id: 'esv-scripture-journal-matthew',
    title: 'ESV Scripture Journal: Matthew',
    price: 5.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_scripture_journal_matthew.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    description: 'The complete Gospel of Matthew in single-column layout, opposite lined archival writing pages. Ideal for comprehensive sermon series study and personal reflections.',
    features: [
      'Full book of Matthew in readable single-column font',
      'Lined notebook pages opposite every scriptural page',
      'Textured paperback casing, classic minimalist style',
      'Sturdy heavy-stock paper suitable for fountain pens'
    ],
    inStock: true
  },
  {
    id: 'esv-scripture-journal-john',
    title: 'ESV Scripture Journal: John',
    price: 5.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_scripture_journal_john.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    description: 'The Gospel of John, known for its rich Christological theological deep-dives, displayed side-by-side with lined notebook pages for recording active spiritual studies.',
    features: [
      'Full text of John in modern, literal ESV alignment',
      'Lightly lined cream writing paper opposite each scriptural fold',
      'Compact notebook weight, easy to tuck into Bibles',
      'No ink-bleed design with high opacity page layout'
    ],
    inStock: true
  },
  {
    id: 'esv-scripture-journal-genesis',
    title: 'ESV Scripture Journal: Genesis',
    price: 5.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_scripture_journal_genesis.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    description: 'Begin study of the scriptures at the very first book. Features the complete text of Genesis paired with lined space for family origins and biblical covenants research notes.',
    features: [
      'Complete Book of Genesis in traditional ESV text',
      'Wide-ruled lined journaling layout on right-hand folds',
      'Perfect for deep biblical roots and ancestry study',
      'Foil-stamped matte cover with durable lay-flat binding'
    ],
    inStock: true
  },
  {
    id: 'niv-life-application-study-bible',
    title: 'NIV Life Application Study Bible (Hardcover)',
    price: 39.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/n/i/niv_life_application_study_bible.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80',
    description: 'The world’s best-selling application study Bible. Contains over 10,000 real-life application notes, profiles of biblical characters, and detailed topical indexes.',
    features: [
      'In-depth application notes that explain contemporary relevance',
      'Extensive biography lists of key biblical heroes',
      'Full-color maps, visual timelines, and clear charts',
      'Excellent for daily application and devotional study'
    ],
    inStock: true
  },
  {
    id: 'kjv-study-bible-leathertone',
    title: 'KJV Study Bible — Premium Full-Color Leathertone',
    price: 34.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/k/j/kjv_study_bible_leathertone.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    description: 'The timeless King James Version text alongside modern full-color illustrations, archeological photos, center-column cross-references, and clear study notes.',
    features: [
      'Classic KJV translation with red-letter words of Christ',
      'Dozens of high-resolution archeological study photos',
      'Stunning wood-burned design leathertone cover',
      'Complete concordance and massive topical index'
    ],
    inStock: true
  },
  {
    id: 'gnt-daily-devotional-bible',
    title: 'GNT Daily Devotional Bible — Walk with God',
    price: 16.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/g/n/gnt_daily_devotional_bible.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'Organized into 365 daily reading portions. Each section contains Old Testament, New Testament, Psalms, and Proverbs snippets paired with a practical spiritual devotional.',
    features: [
      'Convenient 365 daily structured reading layouts',
      'Combines diverse scripture chunks with reflective prompts',
      'Includes beautiful visual drawings to supplement prayer times',
      'Sturdy cloth binding with ribbon mark spacer'
    ],
    inStock: true
  },
  {
    id: 'christian-journal-notes-prayer',
    title: 'Floral Quiet Time Prayer Journal & Notebook',
    price: 8.99,
    category: 'Study & Devotional Bibles',
    image: 'https://www.bibles.com/media/catalog/product/c/h/christian_journal_notes_prayer.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    description: 'A beautiful, lay-flat writing journal with scripture passages printed at the footer of each page. Perfect for prayer lists, sermon recording, and daily gratitude journaling.',
    features: [
      'Elegant hand-painted watercolor floral cover casing',
      '160 ruled writing pages with biblical quotes at bottom',
      'Durable elastic closure band and expandable document pouch',
      'Acid-free thick cardstock prevents fountain ink bleed'
    ],
    inStock: true
  },

  // -------------------------------------------------------------
  // CATEGORY 6: Children & Youth Bibles
  // -------------------------------------------------------------
  {
    id: 'gnt-childrens-illustrated',
    title: 'GNT Children’s Illustrated Bible — Hardcover',
    price: 15.99,
    category: 'Children & Youth Bibles',
    image: 'https://www.bibles.com/media/catalog/product/g/n/gnt_childrens_illustrated_bible.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    description: 'The Good News Translation (GNT) Children’s Bible features beautiful, colorful full-page illustrations and children-friendly guides that make the scriptures accessible for young readers.',
    features: [
      'Dozens of vibrant full-color biblical illustrations',
      'Written in the highly accessible Good News Translation (GNT)',
      'Includes kid-friendly dictionary, timelines, and study tools',
      'Robust hardcover binding perfect for Sunday school'
    ],
    inStock: true
  },
  {
    id: 'cev-youth-devotional-bible',
    title: 'CEV Youth Devotional Bible — Softcover',
    price: 13.99,
    category: 'Children & Youth Bibles',
    image: 'https://www.bibles.com/media/catalog/product/c/e/cev_youth_devotional_bible.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    description: 'Contemporary English Version (CEV) Youth Bible features hundreds of devotions, reading plans, and reflective journal prompts specifically tailored to high school and college students.',
    features: [
      'Over 365 daily youth-focused devotional readings',
      'Clear, modern Contemporary English Version translation',
      'Discussion questions, prayers, and real-life topic indexes',
      'Durable, flexible softcover perfect for student bags'
    ],
    inStock: true
  },
  {
    id: 'esv-childrens-bible-hardcover',
    title: 'ESV Children’s Holy Bible (Hardcover with Guides)',
    price: 14.99,
    category: 'Children & Youth Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_childrens_bible_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    description: 'The full text of the English Standard Version (ESV) paired with 24 pages of beautiful color illustrations, dictionary articles, and basic guides to scriptural history.',
    features: [
      'Complete, unmodified ESV biblical text translation',
      '24 colorful plates depicting critical Old/New covenant scenes',
      'Designed for children ages 6 to 11 for transition reading',
      'Durable, child-resistant rigid hardcover binding'
    ],
    inStock: true
  },
  {
    id: 'bible-stories-little-hands',
    title: 'Bible Stories for Little Hands — Durable Board Book',
    price: 7.99,
    category: 'Children & Youth Bibles',
    image: 'https://www.bibles.com/media/catalog/product/b/i/bible_stories_little_hands.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    description: 'An extremely durable, heavy board book containing simplified Bible stories with interactive questions and touchable details for toddlers.',
    features: [
      'Simple, active-voice vocabulary tailored for toddlers',
      'Sturdy extra-thick board pages that clean easily',
      'Vibrant colors and highly expressive artwork layout',
      'Features short prayers at the end of each narrative portion'
    ],
    inStock: true
  },
  {
    id: 'action-bible-comic-book',
    title: 'The Action Bible — Comic Book Illustrated Edition',
    price: 22.99,
    category: 'Children & Youth Bibles',
    image: 'https://www.bibles.com/media/catalog/product/a/c/action_bible_comic_book.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    description: 'An award-winning comic book Bible illustrated by Marvel artist Sergio Cariello. Over 215 chronological narratives designed to captivate visual learners and preteens.',
    features: [
      'Stunning graphic novel illustrations on heavy clay pages',
      'Highly dramatic, faith-faithful action story pacing',
      'Over 750 pages of chronological, cinematic scriptural history',
      'Vibrant colors that leap off the page to hold attention'
    ],
    inStock: true
  },

  // -------------------------------------------------------------
  // CATEGORY 7: Compact & Pocket Bibles
  // -------------------------------------------------------------
  {
    id: 'military-camoflage-new-testament',
    title: 'KJV Military Pocket New Testament (Camouflage Cover)',
    price: 4.50,
    category: 'Compact & Pocket Bibles',
    image: 'https://www.bibles.com/media/catalog/product/m/i/military_new_testament_camo_kjv.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&w=600&q=80',
    description: 'A rugged, pocket-sized King James Version New Testament with Psalms and Proverbs, featuring a water-resistant digital camouflage cover designed for military deployment and outdoor usage.',
    features: [
      'KJV New Testament, Psalms, and Proverbs',
      'Rugged water-resistant digital camouflage design cover',
      'Compact military-grade sizing to fit pocket or rucksack',
      'Includes special military prayers and active service registry'
    ],
    inStock: true
  },
  {
    id: 'gnt-pocket-new-testament-blue',
    title: 'GNT Pocket New Testament — Compact Blue Vinyl',
    price: 2.99,
    category: 'Compact & Pocket Bibles',
    image: 'https://www.bibles.com/media/catalog/product/g/n/gnt_pocket_new_testament_blue_vinyl.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80',
    description: 'Good News Translation (GNT) Pocket New Testament. Extremely compact and lightweight, featuring a protective navy blue vinyl slip cover, ideal for active travelers.',
    features: [
      'Full New Testament text in the modern GNT translation',
      'Waterproof navy blue textured vinyl slip jacket',
      'Ultra-slim profile that easily slips into pockets or bags',
      'Includes a quick-reference alphabetical guide to key passages'
    ],
    inStock: true
  },
  {
    id: 'esv-pocket-new-testament-psalms',
    title: 'ESV Pocket New Testament with Psalms (Black Leather)',
    price: 8.99,
    category: 'Compact & Pocket Bibles',
    image: 'https://www.bibles.com/media/catalog/product/e/s/esv_pocket_new_testament_psalms.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80',
    description: 'An elegant, high-grade genuine leather-feeling pocket New Testament. Beautiful gold gilt lines with complete Book of Psalms and Proverbs.',
    features: [
      'Contains full New Testament text, Psalms, and Proverbs in ESV',
      'Smooth, high-end black bonded leather wrapper feel',
      'Gilded silver edges and a satin silver bookmark ribbon',
      'Super-slim thickness (less than 0.35 inches total)'
    ],
    inStock: true
  },
  {
    id: 'kjv-pocket-new-testament-red-letter',
    title: 'KJV Pocket New Testament — Deluxe Red Letter Edition',
    price: 5.49,
    category: 'Compact & Pocket Bibles',
    image: 'https://www.bibles.com/media/catalog/product/k/j/kjv_pocket_new_testament_red_letter.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80',
    description: 'The King James Version New Testament in pocket profile. Features traditional red-letter highlighting of the direct spoken words of Christ.',
    features: [
      'Authorized King James Version (KJV) New Testament text',
      'Red-letter text highlighting of Jesus’ spoken words',
      'Deep brown leatherette protective cover',
      'Includes helpful thematic index for quick comfort searches'
    ],
    inStock: true
  },
  {
    id: 'cev-compact-bible-zipper',
    title: 'CEV Compact Bible (Black Zippered Cover)',
    price: 12.99,
    category: 'Compact & Pocket Bibles',
    image: 'https://www.bibles.com/media/catalog/product/c/e/cev_compact_bible_zipper.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80',
    description: 'The complete Old and New Testaments in Contemporary English. Features a compact size and a protective metal-tooth zipper wrapper.',
    features: [
      'Complete Holy Bible in modern, active-word CEV English',
      'Enclosed zippered binder protects margins and spine',
      'Includes special reading charts and daily guidance pages',
      'Small, versatile footprint ideal for camping or travel bags'
    ],
    inStock: true
  },

  // -------------------------------------------------------------
  // CATEGORY 8: Specialty & Foreign Bibles
  // -------------------------------------------------------------
  {
    id: 'french-la-sainte-bible-hardcover',
    title: 'French La Sainte Bible — Louis Segond Classic',
    price: 14.99,
    category: 'Specialty & Foreign Bibles',
    image: 'https://www.bibles.com/media/catalog/product/f/r/french_la_sainte_bible_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'La Sainte Bible en français, version de référence Louis Segond. Una excelente edición de tapa dura para estudio pastoral y congregaciones francófonas.',
    features: [
      'Texte intégral de la version classique de Louis Segond (1910)',
      'Reliure cartonnée très solide et élégante avec détails dorés',
      'Contient des cartes bibliques colorées et des plans d’étude',
      'Idéal pour les francophones et l’apprentissage de la langue'
    ],
    inStock: true
  },
  {
    id: 'portuguese-biblia-sagrada-hardcover',
    title: 'Portuguese Bíblia Sagrada — Almeida Revista',
    price: 14.99,
    category: 'Specialty & Foreign Bibles',
    image: 'https://www.bibles.com/media/catalog/product/p/o/portuguese_biblia_sagrada_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'A Bíblia Sagrada em português, tradução clássica João Ferreira de Almeida (Revista e Atualizada). Edição capa dura com folha branca especial.',
    features: [
      'Texto completo da tradução Almeida Revista e Atualizada (ARA)',
      'Capa dura preta robusta projetada para longa durabilidade',
      'Inclui seção de concordância bíblica e mapas temáticos',
      'Excelente legibilidade e tipografia clara'
    ],
    inStock: true
  },
  {
    id: 'chinese-english-bilingual-bible',
    title: 'Chinese / English Bilingual Bible (Union / ESV)',
    price: 24.99,
    category: 'Specialty & Foreign Bibles',
    image: 'https://www.bibles.com/media/catalog/product/c/h/chinese_english_bilingual_bible_union_esv.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    description: 'Features the complete Chinese Union Version (CUV) in simplified characters side-by-side with the English Standard Version (ESV). Complete double-column layout.',
    features: [
      'Parallel text layout with Chinese CUV and English ESV text',
      'Simplified Chinese characters with Pinyin helps',
      'Hardcover cloth binding with elegant protective slip cover',
      'Includes cross-cultural theological dictionary index'
    ],
    inStock: true
  },
  {
    id: 'arabic-standard-bible-hardcover',
    title: 'Arabic Standard Holy Bible — Van Dyck Hardcover',
    price: 16.99,
    category: 'Specialty & Foreign Bibles',
    image: 'https://www.bibles.com/media/catalog/product/a/r/arabic_standard_bible_hardcover.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'The standard classical translation of the Holy Bible in Arabic (Smith & Van Dyck translation). Elegantly bound in a dark green vinyl-wrapped hardcover.',
    features: [
      'Complete Arabic Smith & Van Dyck translation text',
      'Classical Arabic script alignment with clear voweling guides',
      'Durable vinyl-coated hardcover for lifelong preservation',
      'Includes detailed maps of the Middle Eastern lands'
    ],
    inStock: true
  },
  {
    id: 'tagalog-standard-bible-paperback',
    title: 'Tagalog Holy Bible (Magandang Balita Biblia)',
    price: 9.49,
    category: 'Specialty & Foreign Bibles',
    image: 'https://www.bibles.com/media/catalog/product/t/a/tagalog_standard_bible_paperback.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544965838-54ef841b24f6?auto=format&fit=crop&w=600&q=80',
    description: 'Ang Banal na Biblia sa wikang Tagalog (Magandang Balita Biblia translation), widely popular for its clear contemporary prose throughout the Philippines.',
    features: [
      'Complete Old and New Testaments in Tagalog',
      'Highly accessible, clear language modern translation',
      'Lightweight paperback cover, excellent for daily use',
      'Includes helpful historical word index list'
    ],
    inStock: true
  }
];
