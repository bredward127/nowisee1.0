import coverImg from './assets/images/now_i_see_cover_1784594781418.jpg';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'now-i-see-hardcover',
    title: 'Now I See — Hardcover Edition',
    price: 24.99,
    category: 'Books',
    image: coverImg,
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
    description: 'The complete, uncompromised paperback edition of the memoir. Perfect for reading on the go, highlighting, and passing on to loved ones.',
    features: [
      'Soft-touch premium matte cover',
      'Easy-to-read elegant typography',
      'Lightweight and perfect for sharing',
      'Full 197 pages of testimony'
    ],
    inStock: true
  },
  {
    id: 'prod-1',
    title: 'Scripture Verse Soy Candle',
    price: 17.31,
    category: 'Candles',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
    description: 'Hand-poured soy candle in a clear jar printed with a rotating scripture verse; clean-burn cotton wick, 40+ hour burn time.',
    features: [
      'Hand-poured 100% natural soy wax',
      'Soothing clean-burning cotton wick',
      'Rotating selection of inspiring scripture verses',
      '40+ hours of tranquil burn time'
    ],
    inStock: true
  },
  {
    id: 'prod-2',
    title: 'Faith Over Fear Wall Cross (12")',
    price: 25.46,
    category: 'Wall Decor',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=600&q=80',
    description: 'Distressed wood-finish wall cross with raised lettering, ready to hang, a popular entryway or living-room piece.',
    features: [
      'Distressed rustic wood finish',
      'Elegantly raised lettering "Faith Over Fear"',
      'Ready-to-hang pre-installed hardware',
      'An inspiring entryway or living room statement'
    ],
    inStock: true
  },
  {
    id: 'prod-3',
    title: '"Bible in a Year" Guided Study Journal',
    price: 20.37,
    category: 'Journals',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80',
    description: '52-week guided reading plan with daily reflection prompts and note space, spiral-bound for laying flat.',
    features: [
      '52-week comprehensive reading plan',
      'Daily reflection prompts & prayer prompts',
      'Spiral-bound to lie perfectly flat',
      'Premium heavy paper to prevent ink bleed'
    ],
    inStock: true
  },
  {
    id: 'prod-4',
    title: 'Cross Pendant Necklace, Silver-Plated',
    price: 19.35,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    description: 'Classic cross pendant on an 18-inch chain, lobster clasp, comes in a gift-ready box.',
    features: [
      'Classic polished cross design',
      '18-inch delicate silver-plated chain',
      'Secure lobster clasp closure',
      'Arrives in an elegant gift-ready presentation box'
    ],
    inStock: true
  },
  {
    id: 'prod-5',
    title: '"Blessed" Ceramic Coffee Mug',
    price: 15.27,
    category: 'Drinkware',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    description: '11 oz ceramic mug with a simple faith-forward message, microwave and dishwasher safe.',
    features: [
      'Durable 11 oz premium ceramic construction',
      'Simple, elegant faith-forward message',
      'Microwave and dishwasher safe',
      'Ergonomic comfort handle for quiet mornings'
    ],
    inStock: true
  },
  {
    id: 'prod-6',
    title: 'Wooden Cross Keychain, Set of 3',
    price: 10.18,
    category: 'Keepsakes',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
    description: 'Small carved wood crosses on a keyring, an easy stocking-stuffer or small-group gift.',
    features: [
      'Crafted from genuine natural wood',
      'Smooth carved tactile worry finish',
      'Sturdy keyring attachment',
      'Perfect gift for church groups or stocking stuffers'
    ],
    inStock: true
  },
  {
    id: 'prod-7',
    title: 'Inspirational Adult Coloring Book: Psalms',
    price: 10.18,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    description: '30 hand-illustrated designs paired with Psalm verses, single-sided pages for framing finished art.',
    features: [
      '30 custom hand-illustrated devotional designs',
      'Paired with selected verses from the Psalms',
      'Single-sided thick pages to prevent bleed-through',
      'Standard size suitable for framing finished art'
    ],
    inStock: true
  },
  {
    id: 'prod-8',
    title: 'Faith Comfort Throw Blanket, 50x60"',
    price: 28.52,
    category: 'Home Textiles',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=600&q=80',
    description: 'Soft fleece throw woven with a scripture verse border, machine washable.',
    features: [
      'Ultra-soft plush cozy fleece throw',
      'Woven border featuring scripture verses',
      'Machine washable and colorfast',
      'Generous 50" x 60" size for study times'
    ],
    inStock: true
  },
  {
    id: 'prod-9',
    title: '"Grace" Canvas Tote Bag',
    price: 17.31,
    category: 'Bags',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    description: 'Heavyweight cotton canvas tote with reinforced handles, roomy enough for a Bible and study journal.',
    features: [
      'Heavyweight natural cotton canvas',
      'Reinforced handles for holding books',
      'Spacious interior for Bibles and notebooks',
      'Minimalist aesthetic featuring "Grace" typography'
    ],
    inStock: true
  },
  {
    id: 'prod-10',
    title: 'Beaded Cross Charm Bracelet',
    price: 13.24,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80',
    description: 'Stretch bead bracelet with a small cross charm, adjustable one-size-fits-most fit.',
    features: [
      'Stretch-to-fit natural beads',
      'Detailed miniature cross accent charm',
      'Comfortable one-size-fits-most design',
      'Ideal daily reminder of faith and devotion'
    ],
    inStock: true
  },
  {
    id: 'prod-11',
    title: 'Scripture Christmas Ornament Set (6pc)',
    price: 14.25,
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=600&q=80',
    description: 'Six glass ornaments each printed with a different verse, boxed for storage and gifting.',
    features: [
      'Set of 6 delicate hand-crafted glass ornaments',
      'Each printed with a unique encouraging verse',
      'Includes hanging ribbon loops',
      'Safely packaged in a divided storage box'
    ],
    inStock: true
  },
  {
    id: 'prod-12',
    title: '"Faith It Til You Make It" Phone Case',
    price: 16.29,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80',
    description: 'Slim-fit protective case available across popular phone models, matte finish.',
    features: [
      'Slim-profile impact-resistant defense shell',
      'Premium elegant matte finish',
      'Available for popular phone models',
      'Precise button and camera port cutouts'
    ],
    inStock: true
  },
  {
    id: 'prod-13',
    title: 'Boxed Encouragement Greeting Cards (12pk)',
    price: 11.20,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
    description: 'Twelve assorted faith-themed cards with envelopes, covering birthdays, sympathy, and general encouragement.',
    features: [
      '12 assorted faith-themed greeting designs',
      'Covers birthdays, sympathy, and general support',
      'Includes 12 premium envelope wrappers',
      'Thick cardstock material with blank interior space'
    ],
    inStock: true
  },
  {
    id: 'prod-14',
    title: 'Praying Hands Resin Figurine',
    price: 23.42,
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80',
    description: 'Hand-painted resin figurine, a traditional shelf or side-table piece for a faith-centered home.',
    features: [
      'Exquisite detailed hand-painted resin artistry',
      'Traditional peaceful pose of praying hands',
      'Compact size for study desk, mantle, or side-tables',
      'Brings a calming spiritual atmosphere to any room'
    ],
    inStock: true
  },
  {
    id: 'prod-15',
    title: 'Comfort & Prayer Gift Basket',
    price: 35.65,
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    description: 'Curated basket with a devotional, candle, and mug, arranged and ready to give for grief or encouragement.',
    features: [
      'Curated selection: a daily devotional guide, soy candle, and mug',
      'Beautifully arranged in a woven handbasket',
      'Gift-ready wrapping for bereavement or encouragement',
      'Each basket is packed with prayers from our family'
    ],
    inStock: true
  },
  {
    id: 'prod-16',
    title: 'Scripture Bookmark Set (10pc, metal tassel)',
    price: 9.16,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
    description: 'Ten metal bookmarks each stamped with a verse, tasseled, fits any standard book or Bible.',
    features: [
      'Set of 10 durable bookmark cards',
      'Each individually printed with comforting scripture',
      'Features elegant silver and gold metal tassels',
      'Perfect for marking spots in Bibles or hymnals'
    ],
    inStock: true
  },
  {
    id: 'prod-17',
    title: '"This Home Believes" Wall Plaque',
    price: 22.41,
    category: 'Wall Decor',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    description: 'Wood-look wall plaque with routed lettering, pre-drilled for hanging.',
    features: [
      'Rustic wood-grain look plaque',
      'Precision routed lettering "This Home Believes"',
      'Pre-drilled mounting holes for simple setup',
      'A lovely statement piece for hallways or entryways'
    ],
    inStock: true
  },
  {
    id: 'prod-18',
    title: '"Pray About Everything" Pocket Prayer Card Set',
    price: 11.20,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
    description: 'Wallet-sized cards with short prayers for common situations, held together on a ring.',
    features: [
      'Wallet-sized deck of high-quality prayer cards',
      'Short prayers addressing everyday moments and trials',
      'Securely held together on a metal binder ring',
      'Portable encouragement to carry in wallets or purses'
    ],
    inStock: true
  },
  {
    id: 'prod-19',
    title: 'Chamomile & Scripture Tea Gift Set',
    price: 23.42,
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'Boxed tea sampler paired with a small verse booklet, a gentle sympathy or thinking-of-you gift.',
    features: [
      'Organic soothing chamomile loose leaf tea blend',
      'Includes a miniature scripture pocket devotional',
      'Includes a sleek mesh tea ball infuser',
      'Presented in a rustic kraft gift box'
    ],
    inStock: true
  },
  {
    id: 'prod-20',
    title: 'Rustic Wood Cross, 3-Piece Wall Set',
    price: 30.56,
    category: 'Wall Decor',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=600&q=80',
    description: 'Three graduated wood crosses designed to hang as a cluster, distressed farmhouse finish.',
    features: [
      'Three graduated wooden crosses',
      'Distressed farmhouse finish in warm tones',
      'Designed to hang as an elegant wall cluster',
      'Adds a historic spiritual vibe to your home'
    ],
    inStock: true
  },
  {
    id: 'prod-21',
    title: '"Faith Over Fear" Engraved Cuff Bracelet',
    price: 17.31,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    description: 'Adjustable stainless cuff with an engraved verse, hypoallergenic finish.',
    features: [
      'Adjustable premium stainless steel cuff',
      'Sleek and polished inside and out',
      'Engraved with the reminder "Faith Over Fear"',
      'Hypoallergenic, tarnish-resistant daily wear'
    ],
    inStock: true
  },
  {
    id: 'prod-22',
    title: 'Personalized Family Prayer Journal',
    price: 23.42,
    category: 'Journals',
    image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&w=600&q=80',
    description: 'Undated journal with space to record prayer requests and answered prayers, name customization on the cover.',
    features: [
      'Undated custom pages with prompts',
      'Spacious sections for prayer requests and answers',
      'Name customization header area on the cover',
      'Rich textured leather-bound wrap cover'
    ],
    inStock: true
  },
  {
    id: 'prod-23',
    title: '"Be Still" Scripture Wall Canvas Print',
    price: 27.50,
    category: 'Wall Decor',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
    description: 'Gallery-wrapped canvas, ready to hang, a soft focal piece for a bedroom or reading nook.',
    features: [
      'Gallery-wrapped premium artist canvas',
      'Soft aesthetic typography of Psalm 46:10',
      'Sturdy wooden frame - ready to hang immediately',
      'Perfect focal art for bedrooms or reading nooks'
    ],
    inStock: true
  },
  {
    id: 'prod-24',
    title: 'LED Flameless Prayer Candle, Set of 2',
    price: 19.35,
    category: 'Candles',
    image: 'https://images.unsplash.com/photo-1508808785717-3bf7fb473ebf?auto=format&fit=crop&w=600&q=80',
    description: 'Battery-operated pillar candles with a timer function, safe for homes with kids or pets.',
    features: [
      'Battery-operated realistic flickering LED candles',
      'Built-in automated timer function (6h on / 18h off)',
      'Safe alternative for homes with children or pets',
      'Beautifully wrapped with prayer verse decorations'
    ],
    inStock: true
  },
  {
    id: 'prod-25',
    title: 'Cross Rosary Beads, Classic White',
    price: 12.22,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional five-decade rosary with a crucifix centerpiece, comes in a small pouch.',
    features: [
      'Traditional five-decade rosary design',
      'Luminous white polished round glass beads',
      'Detailed metal crucifix centerpiece',
      'Comes with a soft velvet drawstring pouch'
    ],
    inStock: true
  },
  {
    id: 'prod-26',
    title: '"Blessed Mama" Enamel Mug',
    price: 16.29,
    category: 'Drinkware',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=600&q=80',
    description: '12 oz enamel camp-style mug, popular Mother\'s Day and baby-shower gift.',
    features: [
      'Classic camp-style 12 oz enamel cup',
      'Extremely lightweight and shatterproof',
      'Popular Mother\'s Day, baby shower, or birthday gift',
      'Sleek silver rim accent border'
    ],
    inStock: true
  },
  {
    id: 'prod-27',
    title: 'Daily Devotional for Women, 365 Days',
    price: 17.31,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80',
    description: 'One short reading per day with a closing reflection question, ribbon-marked hardcover.',
    features: [
      'One short inspirational daily reading',
      'Closing daily reflection questions & bible verses',
      'Premium embossed hardcover with ribbon marker',
      'Written to support women in their daily walk of faith'
    ],
    inStock: true
  },
  {
    id: 'prod-28',
    title: 'Faith-Based Journaling Bible, Wide Margin',
    price: 35.65,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80',
    description: 'Full-text Bible with wide ruled margins for notes and lettering, ribbon marker, hardcover.',
    features: [
      'Full-text Bible translation',
      'Wide ruled margins for personal notes and doodles',
      'Heavy ink-proof cream paper pages',
      'Satin ribbon bookmark marker'
    ],
    inStock: true
  },
  {
    id: 'prod-29',
    title: 'Scripture Verse Wind Chime',
    price: 25.46,
    category: 'Outdoor Decor',
    image: 'https://images.unsplash.com/photo-1473286835901-04adb1afab02?auto=format&fit=crop&w=600&q=80',
    description: 'Metal wind chime with a verse-engraved center disc, weather-resistant for porch or garden.',
    features: [
      'Metal wind chime tuned to a peaceful scale',
      'Windcatcher center disc engraved with scripture',
      'Weather-resistant components for patio, porch, or garden',
      'Fills the air with soothing musical faith tones'
    ],
    inStock: true
  },
  {
    id: 'prod-30',
    title: '"Fear Not" Cross Pendant Keychain',
    price: 11.20,
    category: 'Keepsakes',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80',
    description: 'Brushed-metal keychain with a cross and short verse stamp, a simple graduation or travel gift.',
    features: [
      'Brushed-metal key tag with a mini silver cross',
      'Engraved with the command "Fear Not"',
      'Robust metal construction for durability',
      'A practical and meaningful graduation or travel gift'
    ],
    inStock: true
  },
  {
    id: 'prod-31',
    title: 'Faith Family Photo Frame, Scripture Border',
    price: 19.35,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    description: '4x6 tabletop frame with a printed verse border, wood-look finish.',
    features: [
      'Holds a standard 4x6 tabletop photograph',
      'Printed border with encouraging family scripture',
      'Warm wood-look finish with easel stand back',
      'Preserves precious family memories in faith'
    ],
    inStock: true
  },
  {
    id: 'prod-32',
    title: 'Inspirational Coffee & Cocoa Mug Gift Set',
    price: 28.52,
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&w=600&q=80',
    description: 'Mug paired with two packets of cocoa and a verse card, boxed and ready to give.',
    features: [
      'Elegantly printed ceramic faith mug',
      'Two premium packets of hot cocoa mix',
      'Printed scripture verse cards',
      'Arrives fully wrapped and ribboned for gifting'
    ],
    inStock: true
  },
  {
    id: 'prod-33',
    title: 'Praying Angel Figurine, Hand-Painted',
    price: 25.46,
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80',
    description: 'Hand-painted resin angel in a kneeling pose, a common sympathy or baptism gift.',
    features: [
      'Detailed hand-painted resin sculpture',
      'Angel in a peaceful kneeling posture of prayer',
      'A beautiful sympathy, baptism, or comfort gift',
      'Smooth ivory stone-look finish'
    ],
    inStock: true
  },
  {
    id: 'prod-34',
    title: 'Scripture Verse Sticky Notes & Planner Set',
    price: 13.24,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1484480974693-2ca0a79f34c1?auto=format&fit=crop&w=600&q=80',
    description: 'Undated weekly planner pad bundled with matching verse sticky notes.',
    features: [
      'Undated weekly horizontal planner block pad',
      'Matching set of colorful scripture sticky note pads',
      'Keeps your weekly schedule centered on God\'s word',
      'Convenient desktop size for home or office'
    ],
    inStock: true
  },
  {
    id: 'prod-35',
    title: '"Trust in the Lord" Garden Stone',
    price: 20.37,
    category: 'Outdoor Decor',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=600&q=80',
    description: 'Cast resin stepping stone with a raised verse, weatherproof for garden or entry path.',
    features: [
      'Cast resin stepping stone with a raised verse design',
      'Weatherproof construction for outdoor durability',
      'Raised "Trust in the Lord" centerpiece text',
      'Enhances garden pathways, flower beds, or entryways'
    ],
    inStock: true
  },
  {
    id: 'prod-36',
    title: 'Cross Charm Anklet',
    price: 11.20,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    description: 'Delicate chain anklet with a small cross charm, adjustable clasp.',
    features: [
      'Delicate polished chain anklet design',
      'Miniature silver cross charm dangle',
      'Adjustable clasp chain (fits most sizes)',
      'A lovely faith statement for warm weather'
    ],
    inStock: true
  },
  {
    id: 'prod-37',
    title: 'Devotional Coloring Journal for Teens',
    price: 12.22,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
    description: 'Combines short devotionals with coloring pages and guided prompts aimed at teen readers.',
    features: [
      'Short devotionals speaking directly to teen challenges',
      'Intricate coloring scenes that encourage quiet reflection',
      'Guided journaling pages to capture private prayers',
      'Beautiful cover art with layout for coloring'
    ],
    inStock: true
  },
  {
    id: 'prod-38',
    title: '"God\'s Got This" Throw Pillow Cover',
    price: 17.31,
    category: 'Home Textiles',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
    description: '18x18 linen-look pillow cover, zippered, insert sold separately.',
    features: [
      'Crafted from high-grade 18x18 linen-look fabric',
      'Featuring "God\'s Got This" premium printing',
      'Concealed matching zipper for easy pillow insertion',
      'Machine-washable cover (hang dry recommended)'
    ],
    inStock: true
  },
  {
    id: 'prod-39',
    title: 'Communion Gift Set with Cross Bookmark',
    price: 20.37,
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=600&q=80',
    description: 'Small boxed set with a devotional booklet and a metal cross bookmark, sized for a first-communion gift.',
    features: [
      'Curated devotional booklet designed for beginners',
      'Shining metal polished cross page bookmark',
      'Elegantly wrapped inside a satin gift-box lining',
      'Perfect celebratory keepsake for baptisms and communions'
    ],
    inStock: true
  },
  {
    id: 'prod-40',
    title: 'Scripture Verse Car Air Freshener, 3-Pack',
    price: 9.16,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511139088625-54477756e66c?auto=format&fit=crop&w=600&q=80',
    description: 'Hanging car air fresheners printed with verses, three scents per pack.',
    features: [
      'Hanging vertical cards featuring scripture designs',
      'Contains 3 premium comforting fragrances',
      'Equipped with pre-tied elastic hanging bands',
      'Durable scent technology that lasts for weeks'
    ],
    inStock: true
  },
  {
    id: 'prod-41',
    title: '"Faith Walks" Engraved Wood Sign',
    price: 24.44,
    category: 'Wall Decor',
    image: 'https://images.unsplash.com/photo-1531685222403-f928502d2b30?auto=format&fit=crop&w=600&q=80',
    description: 'Laser-engraved pine sign with sawtooth hanger on the back, ready to display.',
    features: [
      'Crafted from real natural-grain solid pine wood',
      'Precisely laser-etched "Walk By Faith, Not By Sight"',
      'Sawtooth hanging bracket mounted on the reverse',
      'Adds clean farmhouse warmth to halls or galleries'
    ],
    inStock: true
  },
  {
    id: 'prod-42',
    title: 'Beaded Prayer Bracelet with Cross Charm',
    price: 14.25,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
    description: 'Natural-stone bead bracelet with a small cross charm, stretch fit.',
    features: [
      'Made of polished premium solid stone beads',
      'Detailed hanging antique-silver cross charm',
      'Snug comfortable stretch wire base',
      'Serves as an elegant daily companion for prayer'
    ],
    inStock: true
  },
  {
    id: 'prod-43',
    title: '"New Believer" Starter Bible & Journal Set',
    price: 30.56,
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    description: 'Paperback Bible bundled with a beginner\'s reading plan and a companion journal, boxed.',
    features: [
      'Easy-to-follow paperback introductory translation Bible',
      'Coordinating lined journal with scripture footnotes',
      'Beginner-friendly 30-day starting roadmap leaflet',
      'Arrives complete in a professional presentation carton'
    ],
    inStock: true
  },
  {
    id: 'prod-44',
    title: 'Scripture Verse Ceramic Trinket Dish',
    price: 13.24,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80',
    description: 'Small ceramic dish for rings or keys, verse printed along the rim.',
    features: [
      'Fired glazed high-quality glossy white porcelain',
      'Fine gold trim highlight border band',
      'Printed with Psalm 23:3 scripture lettering',
      'Sized for nightstands, sinks, or vanity counters'
    ],
    inStock: true
  },
  {
    id: 'prod-45',
    title: '"Blessed Beyond Measure" Wall Sticker Decal',
    price: 15.27,
    category: 'Wall Decor',
    image: 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&w=600&q=80',
    description: 'Removable vinyl wall decal, matte finish, application tool included.',
    features: [
      'Industrial grade removable self-adhesive vinyl film',
      'Flat matte charcoal finish looks professionally painted',
      'Squeegee tool included for bubble-free application',
      'Safe for household drywall surfaces'
    ],
    inStock: true
  },
  {
    id: 'prod-46',
    title: 'Cross Stress Relief Fidget Set',
    price: 10.18,
    category: 'Keepsakes',
    image: 'https://images.unsplash.com/photo-1606103901416-ff4e7cb803a6?auto=format&fit=crop&w=600&q=80',
    description: 'Pocket-sized wood cross fidget pieces on a cord, a quiet comfort item for anxious moments.',
    features: [
      'Tactile olive wood holding worry crosses',
      'Strung securely on a durable black woven string',
      'Contoured to fit snugly between fingers',
      'A silent and personal sensory item'
    ],
    inStock: true
  },
  {
    id: 'prod-47',
    title: 'Scripture Verse Notepad & Pen Gift Set',
    price: 12.22,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    description: 'Magnetic notepad paired with a matching verse-printed pen, kitchen or office use.',
    features: [
      '50 sheet tear-off pad with magnetic backing panel',
      'Premium metal clip-on pen printed with scripture',
      'Thick clean lined paper sheets',
      'Great for shopping lists, quick verses, or notes'
    ],
    inStock: true
  },
  {
    id: 'prod-48',
    title: '"Faith Family Home" Doormat',
    price: 28.52,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&w=600&q=80',
    description: 'Coir entry mat with a routed verse design, non-slip backing.',
    features: [
      'Coarse heavy-duty premium coconut coir fibers',
      'Anti-slip protective rubber bottom grid',
      'Clean carved "Faith Family Home" lettering',
      'Resistant to outdoor weather and mud'
    ],
    inStock: true
  },
  {
    id: 'prod-49',
    title: 'Praise & Worship Devotional Journal Bundle',
    price: 19.35,
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1498079022511-d743407947f1?auto=format&fit=crop&w=600&q=80',
    description: 'Guided worship journal paired with a printed lyric booklet for reflection.',
    features: [
      'Elegant daily worship journaling sections',
      'Included booklet featuring words to beloved hymns',
      'Designed to companion quiet daily devotions',
      'Lay-flat spine makes writing easy'
    ],
    inStock: true
  },
  {
    id: 'prod-50',
    title: '"I Can Do All Things" Athletic Water Bottle',
    price: 18.33,
    category: 'Drinkware',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    description: '24 oz insulated stainless bottle with a verse print, leak-proof lid.',
    features: [
      'Double-wall vacuum-insulated stainless steel construction',
      'Keeps hot tea warm for 12h or cold water chilled for 24h',
      'Spill-proof flip lid with safety lock',
      'Features Philippians 4:13 decorative lettering'
    ],
    inStock: true
  }
];
