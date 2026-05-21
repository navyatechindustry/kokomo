/**
 * Cafe Kokomo — Modern Tropical Luxury Interaction Script
 */

// Meticulously curated brand dataset mapping exact folder assets to premium editorial experiences
const CATEGORY_MAP = {
  'coffee': 'menu/coffee/',
  'signature-drinks': 'menu/signature-drinks/',
  'small-plates': 'menu/small-plates/',
  'desserts': 'menu/desserts/'
};

const FALLBACK_REGISTRY = {
  'coffee': [
    'espresso.jpg',
    'cappuccino.jpg',
    'coldbrew.jpg',
    'coffee_capucinno.jpeg',
    '2026-03-04.jpg',
    'IMG_20210923_173059_815.jpg',
    'unnamed_(11).jpg'
  ],
  'signature-drinks': [
    'matcha.jpg',
    'mocktail.jpg',
    'smoothie.jpg',
    'eclairs_shake.jpeg',
    'hazlenut_chocolate.jpeg',
    'hot_chocolate.jpeg',
    'hotchoc.jpg',
    'img_2.jpg',
    'img_4.jpg',
    'img_13.jpg',
    'img_17.jpg',
    'img_20.jpg',
    'img_22.jpg',
    'nutella_cheesecake.png',
    'oreo_shake.jpeg',
    'soiced_guava.jpeg',
    'very_berry_shake.jpeg',
    'unnamed_(2).jpg',
    'unnamed_(7).jpg',
    '2021-12-08.jpg',
    '2022-04-11.jpg',
    '2022-08-09.jpg',
    'Screenshot 2026-05-21 011956.png',
    'Screenshot 2026-05-21 012004.png',
    'Screenshot 2026-05-21 012035.png'
  ],
  'small-plates': [
    'pizza.jpg',
    'salad.jpg',
    'pasta.jpg',
    'burger.jpg',
    'toast.jpg',
    'pancakes.jpg',
    'veg_bao.jpeg',
    'loaded_fries.jpeg',
    'loaded_nachos.jpeg',
    'hummus_and_pita.jpeg',
    'nachos_with_hummus.jpg',
    'crunch_blobs.jpg',
    'img_8.jpg',
    'img_9.jpg',
    'img_16.jpg',
    'img_19.jpg',
    'img_21.jpg',
    'unnamed.jpg',
    'unnamed_(3).jpg',
    'unnamed_(6).jpg',
    'unnamed_(8).jpg',
    'unnamed_(9).jpg',
    '2022-04-21.jpg',
    '2024-05-04.png',
    'Screenshot 2026-05-21 012016.png',
    'Screenshot 2026-05-21 012101.png',
    'Screenshot 2026-05-21 012111.png',
    'Screenshot 2026-05-21 012126.png',
    'Screenshot 2026-05-21 012137.png'
  ],
  'desserts': [
    'dessert.jpg',
    'unnamed_(5).jpg',
    'Screenshot 2026-05-21 012043.png',
    'Screenshot 2026-05-21 114728.png',
    'Screenshot 2026-05-21 114739.png'
  ]
};

const METADATA_REGISTRY = {
  // Coffee
  'espresso.jpg': {
    title: "Single Origin Espresso",
    price: "₹240",
    desc: "Pure, intense double shot pulled from micro-lot Ethiopian Arabica beans with vibrant notes of citrus and jasmine.",
    tag: "Micro-Lot",
    badge: "Sought After"
  },
  'cappuccino.jpg': {
    title: "Velvet Cappuccino",
    price: "₹290",
    desc: "Meticulously textured micro-foam over a rich double ristretto base, dusted with organic raw cacao.",
    tag: "Classic"
  },
  'coldbrew.jpg': {
    title: "Kyoto Cold Brew",
    price: "₹320",
    desc: "Slow-dripped for 16 hours over raw limestone, yielding a remarkably smooth, sweet cup with chocolate undertones.",
    tag: "Slow Brew",
    badge: "Signature"
  },
  'coffee_capucinno.jpeg': {
    title: "Kokomo. Specialty Flat White",
    price: "₹310",
    desc: "A velvety pour of steamed milk over double shot ristretto, balancing sweet nuttiness and robust espresso body.",
    tag: "Barista Special"
  },
  '2026-03-04.jpg': {
    title: "Artisanal Pour Over",
    price: "₹280",
    desc: "Slow hand-poured single-origin roast, highlighting delicate notes of peach and summer florals.",
    tag: "Hand Poured"
  },
  'IMG_20210923_173059_815.jpg': {
    title: "Limestone Macchiato",
    price: "₹260",
    desc: "A bold double shot stained with a dollop of organic textured coconut milk foam.",
    tag: "Macchiato"
  },
  'unnamed_(11).jpg': {
    title: "Vanilla Bean Latte",
    price: "₹340",
    desc: "House-steeped Madagascar vanilla bean syrup folded into micro-foamed milk and our signature house espresso.",
    tag: "Sweet Curation"
  },

  // Signature Drinks
  'matcha.jpg': {
    title: "Ceremonial Stone Matcha",
    price: "₹380",
    desc: "Pure Japanese Uji matcha whisked traditionally in stoneware, served over organic oat milk with a touch of wild honey.",
    tag: "Pure Curation",
    badge: "Best Seller"
  },
  'mocktail.jpg': {
    title: "Botanical Hibiscus Elixir",
    price: "₹360",
    desc: "Cold-pressed hibiscus extract, wild rose petals, sparkling alkaline water, and a hint of fresh mint.",
    tag: "Botanical"
  },
  'smoothie.jpg': {
    title: "Canopy Greens Smoothie",
    price: "₹350",
    desc: "Organic baby spinach, celery, fresh green apple, avocado, coconut water, and cold-pressed ginger.",
    tag: "Raw Energy"
  },
  'eclairs_shake.jpeg': {
    title: "Kokomo. Éclair Shake",
    price: "₹420",
    desc: "Indulgent luxury shake infused with French pastry eclairs, dark chocolate ganache, and Madagascar vanilla cream.",
    tag: "Luxury Shake",
    badge: "Indulgent"
  },
  'hazlenut_chocolate.jpeg': {
    title: "Toasted Hazelnut Hot Chocolate",
    price: "₹390",
    desc: "Single-origin Belgian dark chocolate melted with organic milk and infused with slow-roasted Piedmont hazelnut butter.",
    tag: "Hot Brew"
  },
  'hot_chocolate.jpeg': {
    title: "Signature Vakola Hot Chocolate",
    price: "₹380",
    desc: "Luxurious, thick sipping chocolate made from 72% Venezuelan cacao, served with a house-toasted marshmallow.",
    tag: "Thick Sip"
  },
  'hotchoc.jpg': {
    title: "Spiced Maya Hot Cocoa",
    price: "₹390",
    desc: "Rich dark chocolate with warm spices, Ceylon cinnamon, and a delicate touch of red chili.",
    tag: "Warm Spiced"
  },
  'img_2.jpg': {
    title: "Cold Pressed Wellness Elixir",
    price: "₹320",
    desc: "A clean, energizing blend of fresh turmeric root, ginger, raw honey, and cold-pressed citrus juice.",
    tag: "Wellness"
  },
  'img_4.jpg': {
    title: "Iced Butterfly Pea Latte",
    price: "₹360",
    desc: "Visually stunning layered butterfly pea flower tea with organic oat milk and natural vanilla.",
    tag: "Layered Infusion"
  },
  'img_13.jpg': {
    title: "Citrus Lavender Tonic",
    price: "₹340",
    desc: "Hand-picked lavender sprigs, fresh lime squeeze, elderflower tonic, and sparkling mountain spring water.",
    tag: "Refreshing"
  },
  'img_17.jpg': {
    title: "Kokomo. Signature Iced Mocha",
    price: "₹380",
    desc: "Our classic cold brew layered with thick dark chocolate ganache and lightly whipped sea-salt cream.",
    tag: "Chilled Craft"
  },
  'img_20.jpg': {
    title: "Rose Cardamom Shakerato",
    price: "₹340",
    desc: "Double espresso shaken with ice, organic milk, and a delicate touch of home-distilled rose and cardamom water.",
    tag: "Shaken"
  },
  'img_22.jpg': {
    title: "Jungle Avocado Cream Shake",
    price: "₹410",
    desc: "Creamy Hass avocado blended with sweet coconut milk, organic honey, and a dusting of green cardamom.",
    tag: "Creamy Curation"
  },
  'nutella_cheesecake.png': {
    title: "Nutella Cheesecake Shake",
    price: "₹440",
    desc: "Decadent liquid dessert blending baked cream cheese, slow-churned vanilla cream, and rich layers of Nutella.",
    tag: "Premium Shake"
  },
  'oreo_shake.jpeg': {
    title: "Artisanal Oreo Cookie Shake",
    price: "₹380",
    desc: "Gourmet double-chocolate cookie shake topped with hand-crushed cocoa cookies and vanilla bean whip.",
    tag: "Classic Shake"
  },
  'soiced_guava.jpeg': {
    title: "Spiced Guava Canopy Cooler",
    price: "₹360",
    desc: "Fresh pink guava juice infused with local spices, bird's eye chili rim, and sparkling club soda.",
    tag: "Aesthetic Cooler"
  },
  'very_berry_shake.jpeg': {
    title: "Forest Berry Mascarpone Shake",
    price: "₹420",
    desc: "A luxurious blend of wild blackberries, raspberries, and sweet Italian mascarpone cream.",
    tag: "Mascarpone"
  },
  'unnamed_(2).jpg': {
    title: "Saffron Cardamom Infusion",
    price: "₹340",
    desc: "Warm, aromatic infusion of Kashmiri saffron stamens, green cardamom, and local wildflower honey.",
    tag: "Botanical Warm"
  },
  'unnamed_(7).jpg': {
    title: "Tropical Passionfruit Fizz",
    price: "₹360",
    desc: "Tangy passionfruit pulp, fresh mint leaves, coconut water, and a splash of organic elderflower syrup.",
    tag: "Effervescent"
  },
  '2021-12-08.jpg': {
    title: "Keto Almond Butter Shake",
    price: "₹420",
    desc: "House-ground raw almond butter, coconut cream, MCT oil, and a dash of ground Ceylon cinnamon.",
    tag: "Keto Friendly"
  },
  '2022-04-11.jpg': {
    title: "Mint Matcha Frappe",
    price: "₹390",
    desc: "Blended ceremonial matcha with organic milk, fresh garden mint, and a touch of agave nectar.",
    tag: "Ceremonial Blend"
  },
  '2022-08-09.jpg': {
    title: "Iced Spiced Chai Latte",
    price: "₹360",
    desc: "Our secret blend of 7 warm spices brewed slow, chilled, and layered with creamy milk over ice.",
    tag: "Spiced Latte"
  },
  'Screenshot 2026-05-21 011956.png': {
    title: "Kokomo. Botanical Punch",
    price: "₹380",
    desc: "A signature blend of wild berries, fresh citrus juices, and aromatic botanicals.",
    tag: "Canopy Signature"
  },
  'Screenshot 2026-05-21 012004.png': {
    title: "Emerald Garden Cooler",
    price: "₹370",
    desc: "Fresh cucumber juice, sweet basil extract, lime squeeze, and sparkling mountain spring water.",
    tag: "Fresh Squeeze"
  },
  'Screenshot 2026-05-21 012035.png': {
    title: "Rose Petal Iced Tea",
    price: "₹350",
    desc: "Chilled organic black tea infused with dried rosebuds and a hint of fresh lychee juice.",
    tag: "Visual Floral"
  },

  // Small Plates
  'pizza.jpg': {
    title: "Truffle Mushroom Flatbread",
    price: "₹580",
    desc: "Stone-baked sourdough base, wild porcini and shiitake, fresh mozzarella, truffle oil, and baby arugula.",
    tag: "Sourdough",
    badge: "House Favorite"
  },
  'salad.jpg': {
    title: "Canopy Green Avocado Salad",
    price: "₹480",
    desc: "Sliced Hass avocado, heirloom tomatoes, mixed garden greens, raw seeds, and citrus-herb vinaigrette.",
    tag: "Garden Fresh"
  },
  'pasta.jpg': {
    title: "Artisanal Pistachio Pesto Pasta",
    price: "₹560",
    desc: "Fresh hand-rolled pasta tossed in a rich, creamy wild basil and toasted pistachio pesto, finished with pecorino romano.",
    tag: "Handcrafted"
  },
  'burger.jpg': {
    title: "The Kokomo. Wagyu Burger",
    price: "₹680",
    desc: "Premium house-ground patty, toasted brioche, aged white cheddar, caramelized balsamic onions, and truffle aioli.",
    tag: "Gourmet Grill",
    badge: "Premium Cuts"
  },
  'toast.jpg': {
    title: "Aesthetic Sourdough Avocado Toast",
    price: "₹440",
    desc: "Toasted local country sourdough, smashed organic avocados, heirloom cherry tomatoes, organic seeds, and micro-shoots.",
    tag: "Editorial Craft"
  },
  'pancakes.jpg': {
    title: "Wild Berry Canopy Pancakes",
    price: "₹460",
    desc: "Fluffy soufflé-style pancakes served with fresh forest berry compote and whipped organic mascarpone cheese.",
    tag: "Sweet Canopy"
  },
  'veg_bao.jpeg': {
    title: "Steamed Shiitake Bao",
    price: "₹420",
    desc: "Soft pillows of steamed wheat buns stuffed with slow-braised shiitake mushrooms, pickled cucumber, and dark soy glaze.",
    tag: "Steamed Bun"
  },
  'loaded_fries.jpeg': {
    title: "Truffle Parmesan Hand-Cut Fries",
    price: "₹380",
    desc: "Crispy double-cooked Russet potato skin-on fries, tossed in white truffle oil and finely grated 24-month aged Parmigiano.",
    tag: "Truffle Hand-Cut"
  },
  'loaded_nachos.jpeg': {
    title: "Kokomo. Canopy Loaded Nachos",
    price: "₹460",
    desc: "Stone-ground yellow corn chips topped with fresh avocado mash, house-pickled jalapenos, fresh tomato salsa, and warm cheese sauce.",
    tag: "Shareable"
  },
  'hummus_and_pita.jpeg': {
    title: "Artisanal Hummus & Warm Pita",
    price: "₹440",
    desc: "Velvety smooth chickpea and organic tahini dip, extra virgin olive oil, sumac, served with house-made warm sourdough pita.",
    tag: "Mediterranean"
  },
  'nachos_with_hummus.jpg': {
    title: "Mediterranean Corn Crisps",
    price: "₹420",
    desc: "Stone-ground corn chips served alongside our velvety smooth house hummus and a zesty green herb sauce.",
    tag: "Light Bite"
  },
  'crunch_blobs.jpg': {
    title: "Crispy Cauliflower Fritters",
    price: "₹410",
    desc: "Lightly battered cauliflower florets tossed in a sweet-spicy gochujang glaze and toasted sesame.",
    tag: "Glazed Fritter"
  },
  'img_8.jpg': {
    title: "Baked Sweet Potato Wedges",
    price: "₹380",
    desc: "Oven-roasted organic sweet potato wedges seasoned with smoked paprika, sea salt, served with herb garlic dip.",
    tag: "Oven Roasted"
  },
  'img_9.jpg': {
    title: "Quinoa Pomegranate Buddha Bowl",
    price: "₹490",
    desc: "Steamed organic red quinoa, fresh avocado, ruby pomegranate seeds, roasted almonds, and light ginger sesame dressing.",
    tag: "Wellness Bowl"
  },
  'img_16.jpg': {
    title: "Smoked Salmon Crostini",
    price: "₹540",
    desc: "Artisanal toasted sourdough points topped with whipped herb cream cheese, premium Norwegian smoked salmon, and fresh dill.",
    tag: "Crostini"
  },
  'img_19.jpg': {
    title: "Crispy Tofu Bao Triad",
    price: "₹420",
    desc: "Three steamed fluffy buns filled with crispy panko tofu, sriracha aioli, and sweet-sour pickled cabbage.",
    tag: "Panko Tofu"
  },
  'img_21.jpg': {
    title: "Burrata & Heirloom Caprese",
    price: "₹520",
    desc: "Creamy Italian burrata cheese, sliced heirloom red and yellow tomatoes, fresh basil leaves, and age-old Modena balsamic glaze.",
    tag: "Burrata Curation"
  },
  'unnamed.jpg': {
    title: "Signature House French Toast",
    price: "₹460",
    desc: "Thick slice of brioche soaked in vanilla bean custard, pan-griddled, finished with warm organic maple syrup and fresh fruit.",
    tag: "Brioche Toast"
  },
  'unnamed_(3).jpg': {
    title: "Cottage Cheese Skewers",
    price: "₹440",
    desc: "Grilled organic cottage cheese cubes marinated in warm Indian spices, served with fresh mint yogurt chutney.",
    tag: "Grilled Spiced"
  },
  'unnamed_(6).jpg': {
    title: "Mediterranean Mezze Platter",
    price: "₹580",
    desc: "A curation of classic hummus, smoked eggplant mutabbal, pickled olives, roasted peppers, and warm handmade flatbreads.",
    tag: "Mezze Curation"
  },
  'unnamed_(8).jpg': {
    title: "Baked Macaroni & Gruyere",
    price: "₹490",
    desc: "Elbow pasta tossed in a luxurious five-cheese sauce of cheese and Gruyere, baked with a herb crumb.",
    tag: "Baked Pasta"
  },
  'unnamed_(9).jpg': {
    title: "Wild Mushroom Arancini",
    price: "₹460",
    desc: "Crispy breaded risotto balls stuffed with sauteed forest mushrooms and gooey mozzarella center, over rich marinara.",
    tag: "Risotto Balls"
  },
  '2022-04-21.jpg': {
    title: "Summer Garden Gazpacho",
    price: "₹360",
    desc: "Chilled organic tomato, cucumber, bell pepper soup infused with extra virgin olive oil, served with toasted sourdough.",
    tag: "Chilled Soup"
  },
  '2024-05-04.png': {
    title: "Avocado Egg Canopy Benedict",
    price: "₹480",
    desc: "Toasted English muffin, sliced Hass avocado, perfectly poached farm eggs, covered in velvet hollandaise sauce.",
    tag: "Poached Curation"
  },
  'Screenshot 2026-05-21 012016.png': {
    title: "Gourmet Garden Wrap",
    price: "₹440",
    desc: "Organic spinach tortilla wrapped with grilled garden vegetables, avocado mash, feta cheese crumble, and tahini sauce.",
    tag: "Healthy Wrap"
  },
  'Screenshot 2026-05-21 012101.png': {
    title: "Crispy Basil Pesto Bruschetta",
    price: "₹410",
    desc: "Toasted rustic sourdough rubbed with garlic, topped with marinated cherry tomatoes, basil, and a drizzle of olive oil.",
    tag: "Bruschetta"
  },
  'Screenshot 2026-05-21 012111.png': {
    title: "Spiced Chicken Bao Duo",
    price: "₹480",
    desc: "Two steamed buns stuffed with slow-cooked shredded chicken in a spicy, rich house barbecue sauce and pickled radish.",
    tag: "Bao Trio"
  },
  'Screenshot 2026-05-21 012126.png': {
    title: "Kokomo. Club Sandwich",
    price: "₹520",
    desc: "Triple-decker toasted bread filled with grilled chicken breast, fried egg, mature cheddar, leaf lettuce, and fresh herb mayo.",
    tag: "Club Classic"
  },
  'Screenshot 2026-05-21 012137.png': {
    title: "Mediterranean Falafel Plate",
    price: "₹460",
    desc: "Crispy chickpea falafel balls served on a bed of baby greens with a side of house hummus, pickles, and warm pita.",
    tag: "Falafel Specialty"
  },

  // Desserts
  'dessert.jpg': {
    title: "Saffron Panna Cotta",
    price: "₹440",
    desc: "Silky, slow-set organic cream infused with authentic Kashmiri saffron stamens, topped with edible 24K gold leaf and roasted pistachios.",
    tag: "Canopy Gold",
    badge: "Signature"
  },
  'unnamed_(5).jpg': {
    title: "Decadent Cocoa Fudge Brownie",
    price: "₹390",
    desc: "Warm, rich dark chocolate fudge brownie served with a scoop of slow-churned Madagascar vanilla bean gelato.",
    tag: "Warm Cocoa"
  },
  'Screenshot 2026-05-21 012043.png': {
    title: "Salted Caramel Tart",
    price: "₹420",
    desc: "Crisp pastry shell filled with soft, buttery salted caramel, topped with dark chocolate glaze and Maldon sea salt.",
    tag: "House Tart"
  },
  'Screenshot 2026-05-21 114728.png': {
    title: "Organic Pistachio Affogato",
    price: "₹380",
    desc: "A scoop of organic hand-churned Sicilian pistachio gelato, drowned in a double shot of our hot single-origin espresso.",
    tag: "Espresso Drowned",
    badge: "New Curation"
  },
  'Screenshot 2026-05-21 114739.png': {
    title: "Flaked Coconut Tres Leches",
    price: "₹420",
    desc: "Sponge cake soaked in three premium milks, topped with fresh whipped cream and toasted Balinese coconut flakes.",
    tag: "Balinese Curation"
  }
};

let ALL_MENU_ITEMS = [];

document.addEventListener("DOMContentLoaded", () => {
  // 0. Deactivate luxury preloader after elegant fade transition
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("fade-out");
    }, 1200);
  }

  // 1. Render all menu items dynamically using the async curator system
  initDynamicMenu();
  
  // 2. Initialize all luxury interaction modules
  initLenisScroll();
  initCustomCursor();
  initStickyHeader();
  initHeroSlider();
  initScrollReveals();
  initMenuFilters();
  initMobileNav();
  setupCopyrightYear();
  initOrderOnlinePopup();
  initMagneticButtons();
  
  // 3. Set up click-to-lightbox behavior using robust event delegation
  const menuGrid = document.getElementById("menu-grid");
  if (menuGrid) {
    menuGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".menu-card");
      if (!card) return;
      
      const title = card.getAttribute("data-title");
      const price = card.getAttribute("data-price");
      const image = card.getAttribute("data-image");
      const desc = card.getAttribute("data-desc");
      
      openLightbox(title, price, image, desc);
    });
  }
});

/* ==========================================
   DYNAMIC MENU SCANNER & AUTO-CURATOR SYSTEM
   ========================================== */
async function initDynamicMenu() {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;
  
  // Render high-end elegant loading state
  menuGrid.innerHTML = `
    <div class="menu-loader">
      <div class="menu-loader-spinner"></div>
      <span style="font-size: 0.75rem; letter-spacing: 0.25em;">Curating Sensory Curation...</span>
    </div>
  `;
  
  const scanPromises = Object.keys(CATEGORY_MAP).map(async (category) => {
    const folderPath = CATEGORY_MAP[category];
    let files = [];
    
    try {
      // Fetch directory index listing
      const response = await fetch(folderPath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("text/html")) {
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const links = Array.from(doc.querySelectorAll("a"));
        
        files = links
          .map(a => {
            let href = "";
            try {
              href = decodeURIComponent(a.getAttribute("href"));
            } catch (e) {
              href = a.getAttribute("href");
            }
            if (!href) return null;
            const parts = href.split("/");
            return parts[parts.length - 1];
          })
          .filter(name => {
            if (!name) return false;
            const lower = name.toLowerCase();
            return (lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".png") || lower.endsWith(".webp")) && !lower.includes("?");
          });
      }
      
      if (!files || files.length === 0) {
        throw new Error("Empty index or non-HTML response parsed");
      }
    } catch (err) {
      console.warn(`Dynamic scanning inactive for "/${folderPath}" folder. Activating premium metadata registry fallback.`);
      files = FALLBACK_REGISTRY[category] || [];
    }
    
    // Auto-curator curation & object construction
    return files.map(fileName => {
      const imagePath = folderPath + fileName;
      let meta = METADATA_REGISTRY[fileName];
      
      if (!meta) {
        // Auto-curate unlisted file
        let nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
        let cleanedName = nameWithoutExt.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
        let capitalizedTitle = cleanedName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        if (capitalizedTitle.startsWith("Screenshot") || capitalizedTitle.match(/^IMG[_\d]+/i)) {
          capitalizedTitle = "Special Canopy Selection";
        }
        
        meta = {
          title: capitalizedTitle,
          price: "₹380",
          desc: "An organic sensory curation prepared meticulously by our chef under the Cafe Kokomo. canopy.",
          tag: "Chef Special",
          badge: "New Curation"
        };
      }
      
      return {
        category: category,
        image: imagePath,
        title: meta.title,
        price: meta.price,
        desc: meta.desc,
        tag: meta.tag,
        badge: meta.badge || null
      };
    });
  });
  
  try {
    const results = await Promise.all(scanPromises);
    ALL_MENU_ITEMS = results.flat();
    renderMenuItems(ALL_MENU_ITEMS);
  } catch (error) {
    console.error("Critical error in Cafe Kokomo. dynamic curation:", error);
    menuGrid.innerHTML = `
      <div class="menu-loader" style="animation: none;">
        <span style="font-size: 0.8rem; color: var(--color-black);">The menu is currently undergoing sensory calibration. Please check back shortly.</span>
      </div>
    `;
  }
}

function handleImageError(img, title) {
  const container = img.parentElement;
  if (!container) return;
  container.innerHTML = `
    <div class="menu-fallback-placeholder">
      <span class="fallback-initials">${title.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}</span>
      <span class="fallback-text">Cafe Kokomo.</span>
    </div>
  `;
}

function renderMenuItems(items) {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;
  
  menuGrid.innerHTML = "";
  
  const activeBtn = document.querySelector(".filter-btn.active");
  const activeCategory = activeBtn ? activeBtn.getAttribute("data-category") : "coffee";
  
  const filteredItems = items.filter(item => item.category === activeCategory);
  
  if (filteredItems.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-secondary); font-family: var(--font-sans);">
        <p>No items found in this curation.</p>
      </div>
    `;
    return;
  }
  
  filteredItems.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "menu-card cursor-trigger";
    card.setAttribute("data-category", item.category);
    card.setAttribute("data-title", item.title);
    card.setAttribute("data-price", item.price);
    card.setAttribute("data-image", item.image);
    card.setAttribute("data-desc", item.desc);
    
    // Add default invisible styles that we animate cascadingly
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    
    card.innerHTML = `
      <div class="menu-img-container">
        <div class="menu-img-shimmer"></div>
        <img src="${item.image}" alt="${item.title}" loading="lazy" onload="if(this.previousElementSibling) this.previousElementSibling.remove()" onerror="handleImageError(this, '${item.title}')">
      </div>
      ${item.badge ? `<div class="menu-badge">${item.badge}</div>` : ''}
      <div class="menu-info">
        <div class="menu-meta">
          <h3 class="menu-title">${item.title}</h3>
          <span class="menu-price">${item.price}</span>
        </div>
        <p class="menu-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-tag">${item.tag}</span>
          <div class="menu-explore-icon">&rarr;</div>
        </div>
      </div>
    `;
    
    menuGrid.appendChild(card);
    
    // Smooth cascade load for initial render
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, idx * 40);
  });
}

/* ==========================================
   LENIS SMOOTH SCROLL ENGINE
   ========================================== */
function initLenisScroll() {
  if (typeof Lenis === 'undefined') {
    console.warn("Lenis library not loaded.");
    return;
  }
  
  window.lenis = new Lenis({
    duration: 1.2,
    lerp: 0.08,
    smoothWheel: true,
    syncTouch: true
  });

  function raf(time) {
    window.lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Hook scroll-linked parallax animations beautifully inside Lenis
  window.lenis.on('scroll', (e) => {
    updateHeroParallax(e.scroll);
  });
}

function updateHeroParallax(scrollY) {
  const heroSlider = document.getElementById("hero-slider");
  if (heroSlider) {
    // Elegant physical parallax translation on the hero slide container
    heroSlider.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
  }
}

/* ==========================================
   CUSTOM INTERACTIVE CURSOR
   ========================================== */
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  if (!cursor) return;

  // Track mouse coordinates
  window.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Premium modern body-wide event delegation for cursor hover state
  document.body.addEventListener("mouseover", (e) => {
    const trigger = e.target.closest(".cursor-trigger, a, button, select, input, textarea, .menu-card, .gallery-item, .testimonial-card, .footer-social-link, .order-card");
    if (trigger) {
      document.body.classList.add("cursor-hover");
    } else {
      document.body.classList.remove("cursor-hover");
    }
  });
}

/* ==========================================
   STICKY FLOATING HEADER TRANSITION
   ========================================== */
function initStickyHeader() {
  const header = document.getElementById("header-nav");
  const hero = document.getElementById("hero");
  if (!header) return;

  let lastScrollY = window.scrollY;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;
    const triggerHeight = hero ? (hero.offsetHeight - header.offsetHeight) : 50;
    
    // Toggle scrolled state past the 100vh hero threshold
    if (currentScrollY >= triggerHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Dynamic scroll hide/show layout system (slide off-screen on scroll down)
    if (currentScrollY > triggerHeight && currentScrollY > lastScrollY + 10) {
      header.classList.add("header-hidden");
    } else if (currentScrollY < lastScrollY - 5) {
      header.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", updateHeader);
  window.addEventListener("resize", updateHeader);
  updateHeader(); // Run initially on load
}

/* ==========================================
   TACTILE MAGNETIC BUTTON EFFECTS (DESKTOP)
   ========================================== */
function initMagneticButtons() {
  // Gracefully bypass magnetic offsets on touch-only devices
  if (window.matchMedia("(hover: none)").matches) return;

  const magneticElements = document.querySelectorAll(
    ".btn, .menu-explore-icon, .order-modal-close, .footer-social-link, .logo-wrapper, .filter-btn"
  );

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Elastic magnetic pull vector coordinate offset (25% displacement factor)
      el.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
      el.style.transition = "transform 0.1s ease-out";
    });

    el.addEventListener("mouseleave", () => {
      // Fluid spring reset back to neutral element centroid
      el.style.transform = "";
      el.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    });
  });
}

/* ==========================================
   AMBIENT HERO SLIDER INTERACTION
   ========================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;

  let currentSlide = 0;
  const slideInterval = 6000; // 6 seconds for soft ambient cross-fade

  setInterval(() => {
    // Fade out current slide
    slides[currentSlide].classList.remove("active");
    
    // Increment index
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Fade in next slide
    slides[currentSlide].classList.add("active");
  }, slideInterval);
}

/* ==========================================
   SMOOTH EDITORIAL SCROLL REVEALS
   ========================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null, // browser viewport
    threshold: 0.15, // 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach((element) => {
    revealObserver.observe(element);
  });
}

/* ==========================================
   DYNAMIC SIGNATURE MENU CATEGORY FILTERS
   ========================================== */
function initMenuFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;
      
      // Toggle active button style
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Add a smooth cinematic fade transition to grid
      menuGrid.style.opacity = "0";
      menuGrid.style.transform = "translateY(10px)";
      
      // Perform a smooth scroll position reset on the mobile layout
      menuGrid.scrollTo({ left: 0, behavior: "smooth" });

      setTimeout(() => {
        // Render new filtered items
        renderMenuItems(ALL_MENU_ITEMS);
        
        // Remove styling blocks to let renderMenuItems cascading handles kick in
        menuGrid.style.opacity = "1";
        menuGrid.style.transform = "translateY(0)";
      }, 300); // Wait for transition
    });
  });
}

/* ==========================================
   FULLSCREEN PREVIEW LIGHTBOX MODAL
   ========================================== */
function openLightbox(title, price, imgPath, descText) {
  const lightbox = document.getElementById("menu-lightbox");
  const lImage = document.getElementById("lightbox-img");
  const lTitle = document.getElementById("lightbox-title");
  const lPrice = document.getElementById("lightbox-price");
  const lDesc = document.getElementById("lightbox-desc");

  if (!lightbox || !lImage || !lTitle || !lPrice || !lDesc) return;

  // Assign data
  lImage.src = imgPath;
  lImage.alt = title;
  lTitle.textContent = title;
  lPrice.textContent = price;
  lDesc.textContent = descText;

  // Open modal
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden"; // Lock page scroll
  
  if (window.lenis) {
    window.lenis.stop();
  }
}

function closeLightbox(event) {
  const lightbox = document.getElementById("menu-lightbox");
  if (!lightbox) return;

  // Close only if clicking the dark backdrop (the lightbox container itself)
  // or any element inside the close button or reservation button
  if (
    event.target === lightbox ||
    event.target.closest(".lightbox-close") ||
    event.target.closest(".btn")
  ) {
    lightbox.classList.remove("open");
    document.body.style.overflow = ""; // Restore page scroll
    
    if (window.lenis) {
      window.lenis.start();
    }
  }
}

/* ==========================================
   EXCLUSIVE RESERVATION WHATSAPP COMPILER
   ========================================== */
function compileWhatsAppBooking(event) {
  event.preventDefault();

  const nameInput = document.getElementById("booking-name");
  const guestsInput = document.getElementById("booking-guests");
  const dateInput = document.getElementById("booking-date");
  const timeInput = document.getElementById("booking-time");
  const notesInput = document.getElementById("booking-notes");

  if (!nameInput || !guestsInput || !dateInput || !timeInput) return;

  const name = nameInput.value.trim();
  const guests = guestsInput.value;
  const dateVal = dateInput.value;
  const time = timeInput.value;
  const notes = notesInput.value.trim();

  // Format date elegantly (YYYY-MM-DD -> DD MMM YYYY)
  let formattedDate = dateVal;
  if (dateVal) {
    const d = new Date(dateVal);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    formattedDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  // Build high-end aesthetic WhatsApp message
  let message = `Hello Cafe Kokomo. Concierge,\n\n`;
  message += `I would like to request an exclusive reservation under your tropical canopy:\n\n`;
  message += `• Name: ${name}\n`;
  message += `• Guests: ${guests} seating\n`;
  message += `• Date: ${formattedDate}\n`;
  message += `• Time: ${time}\n`;
  
  if (notes) {
    message += `• Special Curation Requests: "${notes}"\n`;
  }
  
  message += `\nThank you, please confirm availability.`;

  // Encode message for URL parameters
  const encodedText = encodeURIComponent(message);
  
  // Official Cafe Kokomo. Whatsapp Number (concierge)
  const whatsappNumber = "918591515657"; 
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  // Open in a new tab
  window.open(whatsappURL, "_blank");
}

/* ==========================================
   MOBILE NAVIGATION MENU INTERACTION
   ========================================== */
function initMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  if (!toggle || !drawer) return;

  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
    
    if (window.lenis) {
      if (isOpen) {
        window.lenis.stop();
      } else {
        window.lenis.start();
      }
    }
  });
}

function toggleMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");

  if (toggle && drawer) {
    toggle.classList.remove("active");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
    
    if (window.lenis) {
      window.lenis.start();
    }
  }
}

/* ==========================================
   UTILITY METHODS
   ========================================== */
function scrollToStory() {
  const storySection = document.getElementById("brand-story");
  if (storySection) {
    storySection.scrollIntoView({ behavior: "smooth" });
  }
}

function setupCopyrightYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
}

/* ==========================================
   EXCLUSIVE INTERACTIVE LOCATION FETCHER
   ========================================== */
function fetchDistanceToKokomo() {
  const statusPane = document.getElementById("location-fetcher-status");
  const btn = document.getElementById("fetch-location-btn");
  const mapContainer = document.getElementById("google-map");
  
  if (!statusPane || !btn) return;
  
  // Make the map coloured instantly when clicked
  if (mapContainer) {
    mapContainer.classList.add("coloured");
  }
  
  statusPane.style.display = "block";
  statusPane.innerHTML = `<span style="display:inline-block; animation: spin 1s linear infinite; margin-right: 5px;">⏳</span> Accessing your precise location...`;
  btn.disabled = true;
  
  if (!navigator.geolocation) {
    statusPane.innerHTML = `
      📍 <span class="status-highlight">Sanctuary Pinpoint!</span><br>
      Cafe Kokomo. is pinned at Pratap CHS Limited.<br>
      Click below to open directions and start navigating.<br>
      <a href="https://www.google.com/maps/dir/?api=1&destination=Pratap+CHS+Limited+Santacruz+East+Mumbai" target="_blank" class="btn btn-solid btn-small cursor-trigger" style="margin-top:0.8rem; display:inline-block; font-size: 0.8rem; padding: 0.5rem 1rem;">
        <span>Start Navigation</span>
      </a>
    `;
    btn.style.display = "none";
    return;
  }
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;
      
      // Cafe Kokomo. exact coordinates at Pratap CHS Limited (Vakola, Santacruz East)
      const destLat = 19.055424;
      const destLng = 72.849187;
      
      // Calculate distance using Haversine formula
      const R = 6371; // Earth's radius in km
      const dLat = (destLat - userLat) * Math.PI / 180;
      const dLon = (destLng - userLng) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(userLat * Math.PI / 180) * Math.cos(destLat * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const distance = R * c; // Distance in km
      
      // Elegant response output
      let formattedDist = distance.toFixed(1);
      let timeEst = Math.round(distance * 3); // Approx 3 mins per km in Mumbai traffic
      if (timeEst < 5) timeEst = 5; // Minimum estimated 5 minutes
      
      statusPane.innerHTML = `
        📍 <span class="status-highlight">Location Fetched!</span><br>
        You are <span class="status-highlight">${formattedDist} km</span> away from the sanctuary.<br>
        Estimated driving time: <span class="status-highlight">${timeEst} mins</span>.<br>
        <a href="https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=Pratap+CHS+Limited+Santacruz+East+Mumbai" target="_blank" class="btn btn-solid btn-small cursor-trigger" style="margin-top:0.8rem; display:inline-block; font-size: 0.8rem; padding: 0.5rem 1rem;">
          <span>Start Navigation</span>
        </a>
      `;
      btn.style.display = "none"; // Hide standard button after success
    },
    (error) => {
      console.error(error);
      
      // Graceful fallback states the building name and provides navigation without showing errors
      statusPane.innerHTML = `
        📍 <span class="status-highlight">Sanctuary Pinpoint!</span><br>
        Cafe Kokomo. is pinned at Pratap CHS Limited.<br>
        Click below to open directions and start navigating.<br>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Pratap+CHS+Limited+Santacruz+East+Mumbai" target="_blank" class="btn btn-solid btn-small cursor-trigger" style="margin-top:0.8rem; display:inline-block; font-size: 0.8rem; padding: 0.5rem 1rem;">
          <span>Start Navigation</span>
        </a>
      `;
      btn.style.display = "none"; // Hide standard button since fallback is active
    },
    {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 0
    }
  );
}

/* ==========================================
   L. FOOTER ORDER ONLINE POPUP SYSTEM
   ========================================== */
function initOrderOnlinePopup() {
  const orderBtn = document.getElementById("footer-order-online");
  if (orderBtn) {
    orderBtn.addEventListener("click", openOrderModal);
  }
}

function openOrderModal() {
  if (document.getElementById("order-online-modal")) return;

  const overlay = document.createElement("div");
  overlay.id = "order-online-modal";
  overlay.className = "order-modal-overlay";
  
  overlay.innerHTML = `
    <div class="order-modal-popup" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
      <button class="order-modal-close cursor-trigger" id="order-modal-close-btn" aria-label="Close modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <h2 class="order-modal-title" id="order-modal-title">Order Online</h2>
      <p class="order-modal-subtitle">Experience the sensory curation of Cafe Kokomo. in the comfort of your sanctuary.</p>
      
      <div class="order-platforms">
        <a href="https://www.zomato.com/mumbai/cafe-kokomo-santacruz-east" target="_blank" rel="noopener" class="order-card cursor-trigger" id="platform-zomato">
          <div class="order-card-img-wrapper">
            <img src="assets/order/image1.png" alt="Zomato" class="order-card-img" loading="lazy">
          </div>
          <h3 class="order-card-name">Zomato</h3>
        </a>
        
        <a href="https://www.swiggy.com/city/mumbai/cafe-kokomo-santacruz-east-rest431996" target="_blank" rel="noopener" class="order-card cursor-trigger" id="platform-swiggy">
          <div class="order-card-img-wrapper">
            <img src="assets/order/image2.png" alt="Swiggy" class="order-card-img" loading="lazy">
          </div>
          <h3 class="order-card-name">Swiggy</h3>
        </a>
        
        <a href="https://cafekokomo.dotpe.in/" target="_blank" rel="noopener" class="order-card cursor-trigger" id="platform-dotpe">
          <div class="order-card-img-wrapper">
            <img src="assets/order/image3.png" alt="DotPe" class="order-card-img" loading="lazy">
          </div>
          <h3 class="order-card-name">DotPe</h3>
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add("order-modal-open");
  
  if (window.lenis) {
    window.lenis.stop();
  }

  // Trigger animations in consecutive animation frames to ensure compatibility
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add("show");
    });
  });

  const closeBtn = document.getElementById("order-modal-close-btn");
  const zomatoCard = document.getElementById("platform-zomato");
  const swiggyCard = document.getElementById("platform-swiggy");
  const dotpeCard = document.getElementById("platform-dotpe");
  
  const focusableElements = [closeBtn, zomatoCard, swiggyCard, dotpeCard];
  
  if (closeBtn) {
    closeBtn.focus();
  }

  const closeHandler = () => {
    closeOrderModal(overlay);
  };

  closeBtn.addEventListener("click", closeHandler);
  
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeHandler();
    }
  });

  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      closeHandler();
    }
    
    if (e.key === "Tab") {
      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
  };

  document.addEventListener("keydown", keydownHandler);
  overlay._keydownHandler = keydownHandler;
}

function closeOrderModal(overlay) {
  if (!overlay) return;

  overlay.classList.remove("show");
  overlay.classList.add("hide");

  document.body.classList.remove("order-modal-open");
  
  if (window.lenis) {
    window.lenis.start();
  }

  if (overlay._keydownHandler) {
    document.removeEventListener("keydown", overlay._keydownHandler);
  }

  setTimeout(() => {
    overlay.remove();
  }, 450);
}
