export const itemsData = [
  // --- DRINKS (Category ID: 1) ---
  {
    name_en: "Classic Brown Sugar Boba",
    name_uk: "Класичний баббл ті з коричневим цукром",
    name_ru: "Классический баббл ти с коричневым сахаром",
    shortDesc_en: "Our best-selling milk tea with warm pearls.",
    shortDesc_uk: "Наш бестселер: молочний чай з теплими перлинами.",
    shortDesc_ru: "Наш бестселлер: молочный чай с теплыми жемчужинами.",
    desc_en:
      "Authentic black tea blended with creamy milk and lined with our signature house-made brown sugar syrup. Includes a double serving of warm, chewy tapioca pearls.",
    desc_uk:
      "Автентичний чорний чай, змішаний з ніжним молоком та фірмовим домашнім сиропом із коричневого цукру. Включає подвійну порцію теплих перлин тапіоки.",
    desc_ru:
      "Аутентичный черный чай, смешанный с нежным молоком и фирменным домашним сиропом из коричневого цукра. Включает двойную порцию теплых жемчужин тапиоки.",
    price: 650,
    salePrice: 550,
    weight: "500 ml",
    image: "categories/drinks.webp",
    alt_en: "Classic brown sugar milk tea with stripes of syrup",
    alt_uk: "Класичний молочний чай з сиропом та тапіокою",
    alt_ru: "Классический молочный чай с сиропом и тапиокой",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "popular" },
        { slug: "sale" },
        { slug: "cold-drink" },
        { slug: "caramel" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "15g",
          ingredient: { connect: { name_en: "Black Tea Leaf" } },
        },
        { amount: "250ml", ingredient: { connect: { name_en: "Whole Milk" } } },
        {
          amount: "2 portions",
          ingredient: { connect: { name_en: "Brown Sugar Boba" } },
        },
      ],
    },
  },
  {
    name_en: "Thai Royal Milk Tea",
    name_uk: "Тайський королівський молочний чай",
    name_ru: "Тайский королевский молочный чай",
    shortDesc_en: "Traditional spiced Thai tea with condensed milk.",
    shortDesc_uk: "Традиційний пряний тайський чай зі згущеним молоком.",
    shortDesc_ru: "Традиционный пряный тайский чай со сгущенным молоком.",
    desc_en:
      "Distinctive orange-colored Thai tea brewed with star anise and crushed tamarind, sweetened with condensed milk and served over ice.",
    desc_uk:
      "Особливий помаранчевий тайський чай, заварений з анісом та тамариндом, підсолоджений згущеним молоком та поданий з льодом.",
    desc_ru:
      "Особенный оранжевый тайский чай, заваренный с анисом и тамариндом, подслащенный сгущенным молоком и поданный со льдом.",
    price: 620,
    salePrice: 520,
    weight: "500 ml",
    image: "categories/drinks.webp",
    alt_en: "Orange Thai tea with ice cubes",
    alt_uk: "Помаранчевий тайський чай з кубиками льоду",
    alt_ru: "Оранжевый тайский чай с кубиками льда",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "spicy" },
        { slug: "cold-drink" },
        { slug: "refreshing" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "20g", ingredient: { connect: { name_en: "Thai Tea Mix" } } },
        {
          amount: "50ml",
          ingredient: { connect: { name_en: "Condensed Milk" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Classic Tapioca Pearls" } },
        },
      ],
    },
  },
  {
    name_en: "Taro Cream Cheese Foam",
    name_uk: "Таро з сирною пінкою",
    name_ru: "Таро с сырной пенкой",
    shortDesc_en: "Sweet purple taro with a salty cheese top.",
    shortDesc_uk: "Солодке фіолетове таро з солоною сирною пінкою.",
    shortDesc_ru: "Сладкое фиолетовое таро с соленой сырной пенкой.",
    desc_en:
      "Rich and creamy purple taro milk topped with a thick layer of our signature salty-sweet cream cheese foam.",
    desc_uk:
      "Насичене вершкове молоко таро, вкрите густим шаром нашої фірмової солодко-солоної сирної пінки.",
    desc_ru:
      "Насыщенное сливочное молоко таро, покрытое густым слоем нашей фирменной сладко-соленой сырной пенки.",
    price: 750,
    salePrice: 600,
    weight: "450 ml",
    image: "categories/drinks.webp",
    alt_en: "Purple drink with white thick foam on top",
    alt_uk: "Фіолетовий напій з білою густою пінкою зверху",
    alt_ru: "Фиолетовый напиток с белой густой пенкой сверху",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "creamy" },
        { slug: "sale" },
        { slug: "cold-drink" },
        { slug: "popular" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "30g", ingredient: { connect: { name_en: "Taro Paste" } } },
        { amount: "200ml", ingredient: { connect: { name_en: "Whole Milk" } } },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Cheese Foam" } },
        },
      ],
    },
  },
  {
    name_en: "Passion Fruit Jasmine Burst",
    name_uk: "Жасминовий вибух маракуйї",
    name_ru: "Жасминовый взрыв маракуйи",
    shortDesc_en: "Tart passion fruit with floral jasmine tea.",
    shortDesc_uk: "Кислинка маракуйї з квітковим жасминовим чаєм.",
    shortDesc_ru: "Кислинка маракуйи с цветочным жасминовым чаем.",
    desc_en:
      "Refreshing cold-brewed jasmine green tea with fresh passion fruit pulp and crunchy seeds.",
    desc_uk:
      "Освіжаючий холодний зелений чай з жасмином, м'якоттю свіжої маракуйї та кісточками.",
    desc_ru:
      "Освежающий холодный зеленый чай с жасмином, мякотью свежей маракуйи и косточками.",
    price: 580,
    salePrice: 480,
    weight: "500 ml",
    image: "categories/drinks.webp",
    alt_en: "Clear fruit tea with passion fruit seeds",
    alt_uk: "Прозорий фруктовий чай з насінням маракуйї",
    alt_ru: "Прозрачный фруктовый чай с семенами маракуйи",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "refreshing" },
        { slug: "fruity" },
        { slug: "cold-drink" },
        { slug: "sour" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "10g",
          ingredient: { connect: { name_en: "Jasmine Green Tea" } },
        },
        {
          amount: "40g",
          ingredient: { connect: { name_en: "Passion Fruit Pulp" } },
        },
      ],
    },
  },
  {
    name_en: "Tropical Mango Jasmine Tea",
    name_uk: "Тропічний жасминовий чай з манго",
    name_ru: "Тропический жасминовый чай с манго",
    shortDesc_en: "Exotic blend of jasmine tea and mango chunks.",
    shortDesc_uk: "Екзотичне поєднання жасминового чаю та шматочків манго.",
    shortDesc_ru: "Экзотическое сочетание жасминового чая и кусочков манго.",
    desc_en:
      "Floral jasmine green tea base infused with sweet mango puree, topped with fresh mango pieces and crystal boba for a perfect chew.",
    desc_uk:
      "Квітковий зелений чай з жасмином, змішаний з солодким пюре манго, шматочками свіжого манго та кристальною бобою для ідеальної текстури.",
    desc_ru:
      "Цветочный зеленый чай с жасмином, смешанный с сладким пюре манго, кусочками свежего манго и кристальной бобой для идеальной текстуры.",
    price: 680,
    salePrice: 580,
    weight: "500 ml",
    image: "categories/drinks.webp",
    alt_en: "Bright yellow tea with mango and clear pearls",
    alt_uk: "Яскравий жовтий чай з манго та прозорими кульками",
    alt_ru: "Яркий желтый чай с манго и прозрачными шариками",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "fruity" },
        { slug: "refreshing" },
        { slug: "cold-drink" },
        { slug: "sale" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "10g",
          ingredient: { connect: { name_en: "Jasmine Green Tea" } },
        },
        { amount: "50g", ingredient: { connect: { name_en: "Mango Puree" } } },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Crystal Boba" } },
        },
      ],
    },
  },
  {
    name_en: "Coffee Boba Bliss",
    name_uk: "Кавова Боба Блісс",
    name_ru: "Кофейная Боба Блисс",
    shortDesc_en: "Strong roasted coffee with brown sugar pearls.",
    shortDesc_uk: "Міцна обсмажена кава з перлинами в коричневому цукрі.",
    shortDesc_ru: "Крепкий обжаренный кофе с жемчужинами в коричневом сахаре.",
    desc_en:
      "Freshly roasted coffee beans extract mixed with whole milk and our signature warm brown sugar boba. A caffeine kick with a sweet twist.",
    desc_uk:
      "Екстракт свіжообсмажених кавових зерен, змішаний з незбираним молоком та нашою фірмовою теплою бобою в коричневому цукрі. Кофеїновий заряд із солодким акцентом.",
    desc_ru:
      "Экстракт свежеобжаренных кофейных зерен, смешанный с цельным молоком и нашей фирменной теплой бобой в коричневом сахаре.",
    price: 700,
    salePrice: 650,
    weight: "450 ml",
    image: "categories/drinks.webp",
    alt_en: "Layered coffee drink with dark pearls at the bottom",
    alt_uk: "Шаруватий кавовий напій з темними кульками на дні",
    alt_ru: "Слоистый кофейный напиток с темными шариками на дне",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "popular" },
        { slug: "cold-drink" },
        { slug: "caramel" },
        { slug: "nutty" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "18g",
          ingredient: { connect: { name_en: "Roasted Coffee Beans" } },
        },
        { amount: "200ml", ingredient: { connect: { name_en: "Whole Milk" } } },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Brown Sugar Boba" } },
        },
      ],
    },
  },
  {
    name_en: "Matcha Coconut Cloud",
    name_uk: "Матча Кокосова Хмара",
    name_ru: "Матча Кокосовое Облако",
    shortDesc_en: "Vegan matcha latte with creamy coconut milk.",
    shortDesc_uk: "Веганський матча латте на вершковому кокосовому молоці.",
    shortDesc_ru: "Веганский матча латте на сливочном кокосовом молоке.",
    desc_en:
      "Ceremonial grade matcha whisked to perfection and layered with chilled coconut milk. Naturally creamy and completely dairy-free.",
    desc_uk:
      "Матча церемоніального сорту, збита до ідеалу, та поєднана з охолодженим кокосовим молоком. Природно ніжна та повністю без лактози.",
    desc_ru:
      "Матча церемониального сорта, взбитая до идеала, и соединенная с охлажденным кокосовым молоком. Естественно нежная и без лактозы.",
    price: 740,
    salePrice: 640,
    weight: "450 ml",
    image: "categories/drinks.webp",
    alt_en: "Green matcha latte with white coconut milk layers",
    alt_uk: "Зелений матча латте з білими шарами кокосового молока",
    alt_ru: "Зеленый матча латте с белыми слоями кокосового молока",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "vegan" },
        { slug: "lactose-free" },
        { slug: "creamy" },
        { slug: "cold-drink" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "3g",
          ingredient: {
            connect: { name_en: "Matcha Powder (Ceremonial Grade)" },
          },
        },
        {
          amount: "300ml",
          ingredient: { connect: { name_en: "Coconut Milk" } },
        },
      ],
    },
  },
  {
    name_en: "Berry Jasmine Popping Tea",
    name_uk: "Ягідний жасминовий чай з джус-боллами",
    name_ru: "Ягодный жасминовый чай с джус-боллами",
    shortDesc_en: "Fruity green tea with strawberry popping boba.",
    shortDesc_uk: "Фруктовий зелений чай з полуничними джус-боллами.",
    shortDesc_ru: "Фруктовый зеленый чай с клубничными джус-боллами.",
    desc_en:
      "A refreshing jasmine tea mixed with fresh strawberry bits and popping boba that burst with juice. A playful and light drink.",
    desc_uk:
      "Освіжаючий жасминовий чай зі шматочками свіжої полуниці та джус-боллами, що вибухають соком. Грайливий та легкий напій.",
    desc_ru:
      "Освежающий жасминовый чай с кусочками свежей клубники и джус-боллами, взрывающимися соком. Игривый и легкий напиток.",
    price: 600,
    salePrice: 500,
    weight: "500 ml",
    image: "categories/drinks.webp",
    alt_en: "Pink fruit tea with red popping boba",
    alt_uk: "Рожевий фруктовий чай з червоними джус-боллами",
    alt_ru: "Розовый фруктовый чай с красными джус-боллами",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "fruity" },
        { slug: "refreshing" },
        { slug: "sale" },
        { slug: "limited" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "10g",
          ingredient: { connect: { name_en: "Jasmine Green Tea" } },
        },
        {
          amount: "30g",
          ingredient: { connect: { name_en: "Fresh Strawberry" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Popping Boba (Strawberry)" } },
        },
      ],
    },
  },
  {
    name_en: "Lychee Oolong Refresher",
    name_uk: "Освіжаючий улун з лічі",
    name_ru: "Освежающий улун с личи",
    shortDesc_en: "Floral oolong tea with sweet lychee syrup.",
    shortDesc_uk: "Квітковий чай улун із солодким сиропом лічі.",
    shortDesc_ru: "Цветочный чай улун со сладким сиропом личи.",
    desc_en:
      "Premium oolong tea base combined with sweet lychee syrup and chewy coconut jelly. Light, floral, and aromatic.",
    desc_uk:
      "Преміальний чай улун у поєднанні з солодким сиропом лічі та жувальним кокосовим желе. Легкий, квітковий та ароматний.",
    desc_ru:
      "Премиальный чай улун в сочетании со сладким сиропом личи и жевательным кокосовым желе.",
    price: 590,
    salePrice: 500,
    weight: "500 ml",
    image: "categories/drinks.webp",
    alt_en: "Clear tea with white jelly cubes",
    alt_uk: "Прозорий чай з білими кубиками желе",
    alt_ru: "Прозрачный чай с белыми кубиками желе",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "refreshing" },
        { slug: "fruity" },
        { slug: "cold-drink" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "12g", ingredient: { connect: { name_en: "Oolong Tea" } } },
        {
          amount: "30ml",
          ingredient: { connect: { name_en: "Lychee Syrup" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Coconut Jelly" } },
        },
      ],
    },
  },
  {
    name_en: "Classic Hot Milk Tea",
    name_uk: "Класичний гарячий молочний чай",
    name_ru: "Классический горячий молочный чай",
    shortDesc_en: "Warm and comforting traditional milk tea.",
    shortDesc_uk: "Теплий та затишний традиційний молочний чай.",
    shortDesc_ru: "Теплый и уютный традиционный молочный чай.",
    desc_en:
      "Strongly brewed black tea leaves mixed with steamed whole milk and a touch of brown sugar. Perfect for a chilly day.",
    desc_uk:
      "Міцно заварене листя чорного чаю, змішане з гарячим незбираним молоком та дрібкою коричневого цукру. Ідеально для прохолодного дня.",
    desc_ru:
      "Крепко заваренные листья черного чая, смешанные с горячим цельным молоком и щепоткой коричневого сахара.",
    price: 550,
    salePrice: 450,
    weight: "400 ml",
    image: "categories/drinks.webp",
    alt_en: "Steaming cup of milk tea",
    alt_uk: "Чашка гарячого молочного чаю, що парує",
    alt_ru: "Дымящаяся чашка горячего молочного чая",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [{ slug: "hot-drink" }, { slug: "creamy" }],
    },
    itemIngredients: {
      create: [
        {
          amount: "15g",
          ingredient: { connect: { name_en: "Black Tea Leaf" } },
        },
        { amount: "200ml", ingredient: { connect: { name_en: "Whole Milk" } } },
      ],
    },
  },
  {
    name_en: "Roasted Hazelnut Latte",
    name_uk: "Фундуковий латте",
    name_ru: "Фундучный латте",
    shortDesc_en: "Rich espresso with roasted hazelnut aroma.",
    shortDesc_uk: "Насичений еспресо з ароматом смаженого фундука.",
    shortDesc_ru: "Насыщенный эспрессо с ароматом жареного фундука.",
    desc_en:
      "Double shot of roasted coffee beans with steamed oat milk and premium hazelnut syrup. A nutty caffeine boost.",
    desc_uk:
      "Подвійна порція свіжообсмаженої кави з вівсяним молоком та преміальним фундуковим сиропом. Горіховий заряд енергії.",
    desc_ru:
      "Двойная порция свежеобжаренного кофе с овсяным молоком и премиальным фундучным сиропом.",
    price: 680,
    salePrice: 540,
    weight: "350 ml",
    image: "categories/drinks.webp",
    alt_en: "Hot coffee latte with foam heart",
    alt_uk: "Гарячий латте з серцем на пінці",
    alt_ru: "Горячий латте с сердечком на пенке",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "hot-drink" },
        { slug: "nutty" },
        { slug: "popular" },
        { slug: "sale" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "18g",
          ingredient: { connect: { name_en: "Roasted Coffee Beans" } },
        },
        { amount: "150ml", ingredient: { connect: { name_en: "Oat Milk" } } },
      ],
    },
  },
  {
    name_en: "Pure Jasmine Hot Tea",
    name_uk: "Чистий жасминовий чай",
    name_ru: "Чистый жасминовый чай",
    shortDesc_en: "Premium floral green tea, served hot.",
    shortDesc_uk: "Преміальний квітковий зелений чай, подається гарячим.",
    shortDesc_ru: "Премиальный цветочный зеленый чай, подается горячим.",
    desc_en:
      "High-quality Jasmine Green Tea leaves steeped at the perfect temperature to preserve delicate floral notes.",
    desc_uk:
      "Високоякісне листя жасминового зеленого чаю, заварене при ідеальній температурі для збереження ніжних квіткових нот.",
    desc_ru:
      "Высококачественные листья жасминового зеленого чая, заваренные при идеальной температуре.",
    price: 480,
    salePrice: 390,
    weight: "400 ml",
    image: "categories/drinks.webp",
    alt_en: "Clear hot tea in a glass cup",
    alt_uk: "Прозорий гарячий чай у скляній чашці",
    alt_ru: "Прозрачный горячий чай в стеклянной чашке",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "hot-drink" },
        { slug: "refreshing" },
        { slug: "sugar-free" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "12g",
          ingredient: { connect: { name_en: "Jasmine Green Tea" } },
        },
      ],
    },
  },
  {
    name_en: "Caramel Macchiato Boba",
    name_uk: "Карамельний макіато з бобою",
    name_ru: "Карамельный маккиато с бобой",
    shortDesc_en: "Sweet caramel coffee with chewy boba.",
    shortDesc_uk: "Солодка карамельна кава з тягучою бобою.",
    shortDesc_ru: "Сладкий карамельный кофе с тягучей бобой.",
    desc_en:
      "A hot, decadent mix of espresso, caramel syrup, and warm brown sugar boba. The ultimate comfort drink.",
    desc_uk:
      "Гаряча суміш еспресо, карамельного сиропу та теплої боби з коричневим цукром. Напій для справжнього затишку.",
    desc_ru:
      "Горячая смесь эспрессо, карамельного сиропа и теплой бобы с коричневым сахаром.",
    price: 720,
    salePrice: 590,
    weight: "450 ml",
    image: "categories/drinks.webp",
    alt_en: "Hot coffee with caramel drizzle and pearls",
    alt_uk: "Гаряча кава з карамеллю та перлинами",
    alt_ru: "Горячий кофе с карамелью и жемчужинами",
    category: {
      connect: { slug: "drinks" },
    },
    tags: {
      connect: [
        { slug: "hot-drink" },
        { slug: "caramel" },
        { slug: "popular" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "18g",
          ingredient: { connect: { name_en: "Roasted Coffee Beans" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Brown Sugar Boba" } },
        },
      ],
    },
  },

  // --- PASTRY (Category ID: 2) ---
  {
    name_en: "Classic French Croissant",
    name_uk: "Класичний французький круасан",
    name_ru: "Классический французский круассан",
    shortDesc_en: "Buttery, flaky, and golden perfection.",
    shortDesc_uk: "Вершковий, хрусткий та ідеально золотавий.",
    shortDesc_ru: "Сливочный, хрустящий и идеально золотистый.",
    desc_en:
      "Traditional French pastry made with premium high-fat butter. 24 layers of delicate, crispy dough with a soft, airy honeycomb interior.",
    desc_uk:
      "Традиційна французька випічка на преміальному маслі. 24 шари ніжного хрусткого тіста з повітряною текстурою всередині.",
    desc_ru:
      "Традиционная французская выпечка на премиальном масле. 24 слоя нежного хрустящего теста с воздушной текстурой внутри.",
    price: 350,
    salePrice: 300,
    weight: "110 g",
    image: "categories/pastry.webp",
    alt_en: "Golden flaky croissant on a white plate",
    alt_uk: "Золотистий круасан на білій тарілці",
    alt_ru: "Золотистый круассан на белой тарелке",
    category: {
      connect: { slug: "pastry" },
    },
    tags: {
      connect: [{ slug: "popular" }, { slug: "nutty" }],
    },
    itemIngredients: {
      create: [
        {
          amount: "45g",
          ingredient: { connect: { name_en: "French Butter" } },
        },
        { amount: "65g", ingredient: { connect: { name_en: "Wheat Flour" } } },
      ],
    },
  },
  {
    name_en: "Pistachio Raspberry Danish",
    name_uk: "Фісташковий даніш з малиною",
    name_ru: "Фисташковый даниш с малиной",
    shortDesc_en: "Sweet pistachio cream with tart raspberries.",
    shortDesc_uk: "Солодкий фісташковий крем з кислинкою малини.",
    shortDesc_ru: "Сладкий фисташковый крем с кислинкой малины.",
    desc_en:
      "Crispy puff pastry filled with smooth pistachio frangipane and topped with fresh raspberries and crushed pistachios.",
    desc_uk:
      "Хрустке листкове тісто, наповнене ніжним фісташковим франжипаном, прикрашене свіжою малиною та подрібненою фісташкою.",
    desc_ru:
      "Хрустящее слоеное тесто, наполненное нежным фисташковым франжипаном, украшенное свежей малиной и дроблеными фисташками.",
    price: 480,
    salePrice: 400,
    weight: "140 g",
    image: "categories/pastry.webp",
    alt_en: "Square pastry with green cream and red berries",
    alt_uk: "Квадратна випічка з зеленим кремом та ягодами",
    alt_ru: "Квадратная выпечка с зеленым кремом и ягодами",
    category: {
      connect: { slug: "pastry" },
    },
    tags: {
      connect: [
        { slug: "new" },
        { slug: "nutty" },
        { slug: "fruity" },
        { slug: "sale" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "30g",
          ingredient: { connect: { name_en: "Pistachio Cream" } },
        },
        {
          amount: "20g",
          ingredient: { connect: { name_en: "Fresh Strawberry" } },
        },
        { amount: "40g", ingredient: { connect: { name_en: "Wheat Flour" } } },
      ],
    },
  },
  {
    name_en: "Savory Salmon & Avocado Croissant",
    name_uk: "Круасан-сендвіч з лососем та авокадо",
    name_ru: "Круассан-сэндвич с лососем и авокадо",
    shortDesc_en: "Hearty croissant sandwich for a full meal.",
    shortDesc_uk: "Поживний круасан-сендвіч для повноцінного обіду.",
    shortDesc_ru: "Сытный круассан-сэндвич для полноценного обеда.",
    desc_en:
      "Our classic croissant filled with premium smoked salmon, smashed avocado, cream cheese, and fresh microgreens.",
    desc_uk:
      "Наш класичний круасан, наповнений копченим лососем преміум-класу, м'яким авокадо, вершковим сиром та свіжою мікрозеленню.",
    desc_ru:
      "Наш классический круассан, наполненный копченым лососем премиум-класса, мягким авокадо, сливочным сыром и свежей микрозеленью.",
    price: 950,
    salePrice: 850,
    weight: "280 g",
    image: "categories/pastry.webp",
    alt_en: "Large croissant sandwich with salmon and greens",
    alt_uk: "Великий круасан-сендвіч з рибою та зеленню",
    alt_ru: "Большой круассан-сэндвич с рыбой и зеленью",
    category: {
      connect: { slug: "pastry" },
    },
    tags: {
      connect: [{ slug: "popular" }, { slug: "refreshing" }],
    },
    itemIngredients: {
      create: [
        {
          amount: "50g",
          ingredient: { connect: { name_en: "Smoked Salmon" } },
        },
        { amount: "40g", ingredient: { connect: { name_en: "Avocado" } } },
        { amount: "30g", ingredient: { connect: { name_en: "Cream Cheese" } } },
      ],
    },
  },
  {
    name_en: "Double Belgian Chocolate Croissant",
    name_uk: "Подвійний шоколадний круасан",
    name_ru: "Двойной шоколадный круассан",
    shortDesc_en: "Rich Belgian chocolate inside and out.",
    shortDesc_uk: "Насичений бельгійський шоколад всередині та зовні.",
    shortDesc_ru: "Насыщенный бельгийский шоколад внутри и снаружи.",
    desc_en:
      "Flaky chocolate-infused dough filled with premium Belgian chocolate ganache and topped with dark chocolate drizzle.",
    desc_uk:
      "Листкове шоколадне тісто, наповнене ганашем із бельгійського шоколаду та вкрите темним шоколадом.",
    desc_ru:
      "Слоеное шоколадное тесто, наполненное ганашем из бельгийского шоколада и покрытое темным шоколадом.",
    price: 450,
    salePrice: 380,
    weight: "130 g",
    image: "categories/pastry.webp",
    alt_en: "Dark chocolate croissant with cocoa dusting",
    alt_uk: "Шоколадний круасан, посипаний какао",
    alt_ru: "Шоколадный круассан, посыпанный какао",
    category: {
      connect: { slug: "pastry" },
    },
    tags: {
      connect: [{ slug: "chocolate" }, { slug: "popular" }, { slug: "sale" }],
    },
    itemIngredients: {
      create: [
        {
          amount: "35g",
          ingredient: { connect: { name_en: "Belgian Chocolate" } },
        },
        {
          amount: "40g",
          ingredient: { connect: { name_en: "French Butter" } },
        },
        { amount: "50g", ingredient: { connect: { name_en: "Wheat Flour" } } },
      ],
    },
  },
  {
    name_en: "Almond Frangipane Danish",
    name_uk: "Мигдалевий даніш",
    name_ru: "Миндальный даниш",
    shortDesc_en: "Sweet almond cream with roasted flakes.",
    shortDesc_uk: "Солодкий мигдалевий крем з обсмаженими пластівцями.",
    shortDesc_ru: "Сладкий миндальный крем с обжаренными хлопьями.",
    desc_en:
      "Traditional Danish pastry filled with rich almond frangipane and topped with a generous amount of sliced roasted almonds.",
    desc_uk:
      "Традиційна випічка з насиченим мигдалевим франжипаном, щедро прикрашена обсмаженими шматочками мигдалю.",
    desc_ru:
      "Традиционная выпечка с насыщенным миндальным франжипаном, щедро украшенная обжаренными кусочками миндаля.",
    price: 420,
    salePrice: 320,
    weight: "125 g",
    image: "categories/pastry.webp",
    alt_en: "Sweet pastry with almond slices",
    alt_uk: "Солодка випічка з мигдалевими пластівцями",
    alt_ru: "Сладкая выпечка с миндальными хлопьями",
    category: {
      connect: { slug: "pastry" },
    },
    tags: {
      connect: [{ slug: "nutty" }, { slug: "creamy" }],
    },
    itemIngredients: {
      create: [
        {
          amount: "40g",
          ingredient: { connect: { name_en: "Almond Frangipane" } },
        },
        { amount: "45g", ingredient: { connect: { name_en: "Wheat Flour" } } },
      ],
    },
  },
  {
    name_en: "Cheddar & Ham Breakfast Croissant",
    name_uk: "Круасан з чеддером та шинкою",
    name_ru: "Круассан с чеддером и ветчиной",
    shortDesc_en: "Classic savory breakfast combo.",
    shortDesc_uk: "Класичне поєднання для ситного сніданку.",
    shortDesc_ru: "Классическое сочетание для сытного завтрака.",
    desc_en:
      "Golden butter croissant baked with premium ham and melted cheddar cheese. Best served warm.",
    desc_uk:
      "Золотистий вершковий круасан, запечений з шинкою та розплавленим сиром чеддер. Смакує найкраще гарячим.",
    desc_ru:
      "Золотистый сливочный круассан, запеченный с ветчиной и расплавленным сыром чеддер. Вкуснее всего горячим.",
    price: 650,
    salePrice: 600,
    weight: "180 g",
    image: "categories/pastry.webp",
    alt_en: "Savory croissant with melted cheese and ham",
    alt_uk: "Солоний круасан з розплавленим сиром та шинкою",
    alt_ru: "Соленый круассан с расплавленным сыром и ветчиной",
    category: {
      connect: { slug: "pastry" },
    },
    tags: {
      connect: [{ slug: "limited" }, { slug: "popular" }],
    },
    itemIngredients: {
      create: [
        { amount: "40g", ingredient: { connect: { name_en: "Ham" } } },
        {
          amount: "30g",
          ingredient: { connect: { name_en: "Cheddar Cheese" } },
        },
        {
          amount: "40g",
          ingredient: { connect: { name_en: "French Butter" } },
        },
      ],
    },
  },

  // --- MOCHI (Category ID: 3) ---
  {
    name_en: "Signature Taro Mochi",
    name_uk: "Фірмове моті з таро",
    name_ru: "Фирменное моти с таро",
    shortDesc_en: "Soft rice cake with sweet taro filling.",
    shortDesc_uk: "М'яке рисове тістечко з солодкою начинкою таро.",
    shortDesc_ru: "Мягкое рисовое пирожное со сладкой начинкой таро.",
    desc_en:
      "Chewy, handmade purple rice dough filled with a smooth, earthy taro root paste. Naturally gluten-free and vegan.",
    desc_uk:
      "Тягуче рисове тісто ручної роботи, наповнене ніжною пастою з кореня таро. Без глютену та продуктів тваринного походження.",
    desc_ru:
      "Тягучее рисовое тесто ручной работы, наполненное нежной пастой из корня таро. Без глютена и продуктов животного происхождения.",
    price: 300,
    salePrice: 250,
    weight: "45 g",
    image: "categories/mochi.webp",
    alt_en: "Purple round mochi balls",
    alt_uk: "Фіолетові кульки моті",
    alt_ru: "Фиолетовые шарики моти",
    category: {
      connect: { slug: "mochi" },
    },
    tags: {
      connect: [
        { slug: "new" },
        { slug: "vegan" },
        { slug: "lactose-free" },
        { slug: "gluten-free" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "25g", ingredient: { connect: { name_en: "Taro Paste" } } },
      ],
    },
  },
  {
    name_en: "Dark Chocolate Ice Cream Mochi",
    name_uk: "Моті-морозиво з чорним шоколадом",
    name_ru: "Моти-мороженое с темным шоколадом",
    shortDesc_en: "Chilled mochi with 70% dark chocolate.",
    shortDesc_uk: "Холодне моті з 70% чорним шоколадом.",
    shortDesc_ru: "Холодное моти с 70% темным шоколадом.",
    desc_en:
      "A thin layer of cocoa-infused mochi dough wrapped around a core of rich dark chocolate gelato. Keep frozen.",
    desc_uk:
      "Тонкий шар какао-тіста моті навколо насиченого джелато з чорного шоколаду. Зберігати замороженим.",
    desc_ru:
      "Тонкий слой какао-теста моти вокруг насыщенного джелато из темного шоколада. Хранить замороженным.",
    price: 350,
    salePrice: 280,
    weight: "50 g",
    image: "categories/mochi.webp",
    alt_en: "Dark chocolate mochi dusted with cocoa",
    alt_uk: "Шоколадне моті в какао-порошку",
    alt_ru: "Шоколадное моти в какао-порошке",
    category: {
      connect: { slug: "mochi" },
    },
    tags: {
      connect: [
        { slug: "chocolate" },
        { slug: "popular" },
        { slug: "sale" },
        { slug: "cold-drink" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "15g",
          ingredient: { connect: { name_en: "Belgian Chocolate" } },
        },
        {
          amount: "30g",
          ingredient: { connect: { name_en: "Vanilla Ice Cream" } },
        },
      ],
    },
  },
  {
    name_en: "Sweet Red Bean Mochi",
    name_uk: "Моті з пастою Анко",
    name_ru: "Моти с пастой Анко",
    shortDesc_en: "Traditional Japanese mochi with red bean.",
    shortDesc_uk: "Традиційне японське моті з червоною квасолею.",
    shortDesc_ru: "Традиционное японское моти с красной фасолью.",
    desc_en:
      "Classic mochi filled with sweet and smooth azuki red bean paste (Anko). The most authentic Japanese taste.",
    desc_uk:
      "Класичне моті, наповнене солодкою та ніжною пастою з бобів адзукі (Анко). Найбільш автентичний японський смак.",
    desc_ru:
      "Классическое моти, наполненное сладкой и нежной пастой из бобов адзуки (Анко). Самый аутентичный японский вкус.",
    price: 320,
    salePrice: 300,
    weight: "45 g",
    image: "categories/mochi.webp",
    alt_en: "Classic mochi with red filling",
    alt_uk: "Класичне моті з червоною начинкою",
    alt_ru: "Классическое моти с красной начинкой",
    category: {
      connect: { slug: "mochi" },
    },
    tags: {
      connect: [
        { slug: "vegan" },
        { slug: "gluten-free" },
        { slug: "refreshing" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "25g",
          ingredient: { connect: { name_en: "Sweet Red Bean Paste (Anko)" } },
        },
      ],
    },
  },
  {
    name_en: "Mango Passion Fruit Mochi",
    name_uk: "Моті Манго-Маракуйя",
    name_ru: "Моти Манго-Маракуйя",
    shortDesc_en: "Tropical burst of mango and passion fruit.",
    shortDesc_uk: "Тропічний вибух манго та маракуйї.",
    shortDesc_ru: "Тропический взрыв манго и маракуйи.",
    desc_en:
      "Sun-ripened mango dough filled with a tangy passion fruit puree and fresh mango bits. Sweet, sour, and incredibly refreshing.",
    desc_uk:
      "Тісто зі стиглого манго, наповнене кисленьким пюре маракуйї та шматочками свіжого манго. Солодке, кисле та неймовірно освіжаюче.",
    desc_ru:
      "Тесто из спелого манго, наполненное кисленьким пюре маракуйи и кусочками свежего манго. Сладкое, кислое и невероятно освежающее.",
    price: 340,
    salePrice: 300,
    weight: "45 g",
    image: "categories/mochi.webp",
    alt_en: "Bright orange mochi balls",
    alt_uk: "Яскраві помаранчеві кульки моті",
    alt_ru: "Яркие оранжевые шарики моти",
    category: {
      connect: { slug: "mochi" },
    },
    tags: {
      connect: [
        { slug: "fruity" },
        { slug: "refreshing" },
        { slug: "vegan" },
        { slug: "gluten-free" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "15g", ingredient: { connect: { name_en: "Mango Puree" } } },
        {
          amount: "10g",
          ingredient: { connect: { name_en: "Passion Fruit Pulp" } },
        },
      ],
    },
  },
  {
    name_en: "Black Sesame Earth",
    name_uk: "Чорний кунжут",
    name_ru: "Черный кунжут",
    shortDesc_en: "Nutty and roasty black sesame flavor.",
    shortDesc_uk: "Горіховий та смажений смак чорного кунжуту.",
    shortDesc_ru: "Ореховый и жареный вкус черного кунжута.",
    desc_en:
      "Traditional gray mochi dough filled with a rich, roasted black sesame paste. A deep, nutty dessert for true connoisseurs.",
    desc_uk:
      "Традиційне сіре тісто моті, наповнене насиченою пастою зі смаженого чорного кунжуту. Глибокий горіховий десерт для справжніх поціновувачів.",
    desc_ru:
      "Традиционное серое тесто моти, наполненное насыщенной пастой из жареного черного кунжута. Глубокий ореховый десерт для настоящих ценителей.",
    price: 320,
    salePrice: 250,
    weight: "45 g",
    image: "categories/mochi.webp",
    alt_en: "Gray mochi dusted with black sesame seeds",
    alt_uk: "Сіре моті, посипане насінням чорного кунжуту",
    alt_ru: "Серое моти, посыпанное семенами черного кунжута",
    category: {
      connect: { slug: "mochi" },
    },
    tags: {
      connect: [
        { slug: "nutty" },
        { slug: "sale" },
        { slug: "vegan" },
        { slug: "gluten-free" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "25g", ingredient: { connect: { name_en: "Black Sesame" } } },
      ],
    },
  },
  {
    name_en: "Exotic Durian King",
    name_uk: "Екзотичний Король Дуріан",
    name_ru: "Экзотический Король Дуриан",
    shortDesc_en: "The king of fruits in a soft mochi.",
    shortDesc_uk: "Король фруктів у м'якому моті.",
    shortDesc_ru: "Король фруктов в мягком моти.",
    desc_en:
      "For the brave ones: soft dough filled with premium durian fruit pulp. Creamy, custard-like texture with a unique pungent aroma.",
    desc_uk:
      "Для сміливих: м'яке тісто, наповнене м'якоттю дуріана преміум-класу. Кремова текстура, схожа на заварний крем, з унікальним різким ароматом.",
    desc_ru:
      "Для смелых: мягкое тесто, наполненное мякотью дуриана премиум-класса. Кремовая текстура, похожая на заварной крем, с уникальным резким ароматом.",
    price: 450,
    salePrice: 350,
    weight: "50 g",
    image: "categories/mochi.webp",
    alt_en: "Pale yellow mochi balls",
    alt_uk: "Світло-жовті кульки моті",
    alt_ru: "Светло-желтые шарики моти",
    category: {
      connect: { slug: "mochi" },
    },
    tags: {
      connect: [{ slug: "limited" }, { slug: "creamy" }, { slug: "fruity" }],
    },
    itemIngredients: {
      create: [
        { amount: "20g", ingredient: { connect: { name_en: "Durian Fruit" } } },
        {
          amount: "10g",
          ingredient: { connect: { name_en: "Non-Dairy Creamer" } },
        },
      ],
    },
  },
  {
    name_en: "Strawberry Cheesecake Mochi",
    name_uk: "Полуничний чізкейк моті",
    name_ru: "Клубничный чизкейк моти",
    shortDesc_en: "Creamy cheese and fresh strawberry jam.",
    shortDesc_uk: "Вершковий сир та свіжий полуничний джем.",
    shortDesc_ru: "Сливочный сыр и свежий клубничный джем.",
    desc_en:
      "Pink mochi dough filled with a smooth cream cheese center and a core of fresh strawberry jam. A western twist on a Japanese classic.",
    desc_uk:
      "Рожеве тісто моті, наповнене ніжним вершковим сиром та серцевиною зі свіжого полуничного джему. Західна інтерпретація японської класики.",
    desc_ru:
      "Розовое тесто моти, наполненное нежным сливочным сыром и сердцевиной из свежего клубничного джема. Западная интерпретация японской классики.",
    price: 360,
    salePrice: 310,
    weight: "50 g",
    image: "categories/mochi.webp",
    alt_en: "Pink mochi with creamy filling",
    alt_uk: "Рожеве моті з кремовою начинкою",
    alt_ru: "Розовое моти с кремовой начинкой",
    category: {
      connect: { slug: "mochi" },
    },
    tags: {
      connect: [
        { slug: "popular" },
        { slug: "creamy" },
        { slug: "sale" },
        { slug: "fruity" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "20g", ingredient: { connect: { name_en: "Cream Cheese" } } },
        {
          amount: "15g",
          ingredient: { connect: { name_en: "Fresh Strawberry" } },
        },
      ],
    },
  },

  // --- TAPIOCA DESSERTS (Category ID: 4) ---
  {
    name_en: "Mango Sago Pudding",
    name_uk: "Манговий саго-пудинг",
    name_ru: "Манговый саго-пудинг",
    shortDesc_en: "Classic Hong Kong style tapioca bowl.",
    shortDesc_uk: "Класичний десерт з тапіокою у гонконзькому стилі.",
    shortDesc_ru: "Классический десерт с тапиокой в гонконгском стиле.",
    desc_en:
      "A refreshing bowl of creamy coconut milk, fresh mango pomelo juice, small sago pearls, and large tapioca boba.",
    desc_uk:
      "Освіжаючий десерт на основі кокосового молока, соку манго, дрібних перлин саго та великої тапіоки.",
    desc_ru:
      "Освежающий десерт на основе кокосового молока, сока манго, мелких жемчужин саго и крупной тапиоки.",
    price: 800,
    salePrice: 650,
    weight: "350 g",
    image: "categories/tapioca.webp",
    alt_en: "Yellow dessert bowl with white pearls",
    alt_uk: "Жовта десертна чаша з білими перлинами",
    alt_ru: "Желтая десертная чаша с белыми жемчужинами",
    category: {
      connect: { slug: "tapioca" },
    },
    tags: {
      connect: [
        { slug: "fruity" },
        { slug: "lactose-free" },
        { slug: "popular" },
        { slug: "sale" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "100ml",
          ingredient: { connect: { name_en: "Coconut Milk" } },
        },
        { amount: "50g", ingredient: { connect: { name_en: "Mango Puree" } } },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Classic Tapioca Pearls" } },
        },
      ],
    },
  },
  {
    name_en: "Coconut Grass Jelly Bowl",
    name_uk: "Боул з кокосом та трав'яним желе",
    name_ru: "Боул с кокосом и травяным желе",
    shortDesc_en: "Traditional Asian dessert bowl.",
    shortDesc_uk: "Традиційний азійський десертний боул.",
    shortDesc_ru: "Традиционный азиатский десертный боул.",
    desc_en:
      "Chilled coconut milk served with herbal grass jelly, taro paste, and chewy crystal boba. Perfectly balanced sweetness.",
    desc_uk:
      "Охолоджене кокосове молоко з трав'яним желе, пастою таро та жувальною кристальною бобою. Ідеально збалансована солодкість.",
    desc_ru:
      "Охлажденное кокосовое молоко с травяным желе, пастой таро и жевательной кристальной бобой.",
    price: 750,
    salePrice: 700,
    weight: "320 g",
    image: "categories/tapioca.webp",
    alt_en: "Dessert bowl with dark jelly and white milk",
    alt_uk: "Десертний боул з темним желе та білим молоком",
    alt_ru: "Десертный боул с темным желе и белым молоком",
    category: {
      connect: { slug: "tapioca" },
    },
    tags: {
      connect: [
        { slug: "refreshing" },
        { slug: "vegan" },
        { slug: "lactose-free" },
        { slug: "limited" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "120ml",
          ingredient: { connect: { name_en: "Coconut Milk" } },
        },
        { amount: "60g", ingredient: { connect: { name_en: "Grass Jelly" } } },
        { amount: "30g", ingredient: { connect: { name_en: "Taro Paste" } } },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Crystal Boba" } },
        },
      ],
    },
  },
  {
    name_en: "Classic Red Bean Sago Bowl",
    name_uk: "Класичний боул з тапіокою та Анко",
    name_ru: "Классический боул с тапиокой и Анко",
    shortDesc_en: "Traditional Asian sweet bean & coconut dessert.",
    shortDesc_uk: "Традиційний азійський десерт з квасолею та кокосом.",
    shortDesc_ru: "Традиционный азиатский десерт с фасолью и кокосом.",
    desc_en:
      "A thick and comforting coconut milk base filled with sweet red bean paste (Anko), warm tapioca pearls, and soft coconut jelly.",
    desc_uk:
      "Густа основа з кокосового молока, наповнена солодкою пастою Анко, теплими перлинами тапіоки та ніжним кокосовим желе.",
    desc_ru:
      "Густая основа из кокосового молока, наполненная сладкой пастой Анко, теплыми жемчужинами тапиоки и нежным кокосовым желе.",
    price: 720,
    salePrice: 620,
    weight: "340 g",
    image: "categories/tapioca.webp",
    alt_en: "White coconut dessert with dark red beans",
    alt_uk: "Білий кокосовий десерт з темно-червоною квасолею",
    alt_ru: "Белый кокосовый десерт с темно-красной фасолью",
    category: {
      connect: { slug: "tapioca" },
    },
    tags: {
      connect: [
        { slug: "vegan" },
        { slug: "lactose-free" },
        { slug: "creamy" },
        { slug: "nutty" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "100ml",
          ingredient: { connect: { name_en: "Coconut Milk" } },
        },
        {
          amount: "40g",
          ingredient: { connect: { name_en: "Sweet Red Bean Paste (Anko)" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Classic Tapioca Pearls" } },
        },
        {
          amount: "30g",
          ingredient: { connect: { name_en: "Coconut Jelly" } },
        },
      ],
    },
  },
  {
    name_en: "Choco-Boba Coconut Pudding",
    name_uk: "Шоко-Боба кокосовий пудинг",
    name_ru: "Шоко-Боба кокосовый пудинг",
    shortDesc_en: "Guilty pleasure with chocolate and pearls.",
    shortDesc_uk: "Солодка насолода з шоколадом та перлинами.",
    shortDesc_ru: "Сладкое наслаждение с шоколадом и жемчужинами.",
    desc_en:
      "Decadent dessert combining Belgian chocolate drizzle, creamy coconut milk, brown sugar boba, and a scoop of vanilla ice cream.",
    desc_uk:
      "Десерт, що поєднує бельгійський шоколад, вершкове кокосове молоко, бобу з коричневим цукром та кульку ванільного морозива.",
    desc_ru:
      "Десерт, сочетающий бельгийский шоколад, сливочное кокосовое молоко, бобу с коричневым сахаром и шарик ванильного мороженого.",
    price: 850,
    salePrice: 700,
    weight: "380 g",
    image: "categories/tapioca.webp",
    alt_en: "Chocolate and milk swirl with dark boba",
    alt_uk: "Шоколадно-молочний мікс з темною бобою",
    alt_ru: "Шоколадно-молочный микс с темной бобой",
    category: {
      connect: { slug: "tapioca" },
    },
    tags: {
      connect: [
        { slug: "chocolate" },
        { slug: "creamy" },
        { slug: "popular" },
        { slug: "sale" },
      ],
    },
    itemIngredients: {
      create: [
        {
          amount: "80ml",
          ingredient: { connect: { name_en: "Coconut Milk" } },
        },
        {
          amount: "25g",
          ingredient: { connect: { name_en: "Belgian Chocolate" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Brown Sugar Boba" } },
        },
        {
          amount: "1 scoop",
          ingredient: { connect: { name_en: "Vanilla Ice Cream" } },
        },
      ],
    },
  },
  {
    name_en: "Strawberry Crystal Refresher Bowl",
    name_uk: "Полуничний боул з кристальною бобою",
    name_ru: "Клубничный боул с кристальной бобой",
    shortDesc_en: "Light and fruity berry tapioca bowl.",
    shortDesc_uk: "Легкий та фруктовий ягідний боул з тапіокою.",
    shortDesc_ru: "Легкий и фруктовый ягодный боул с тапиокой.",
    desc_en:
      "A vibrant bowl of fresh strawberry puree, light oat milk, strawberry popping boba, and chewy crystal boba.",
    desc_uk:
      "Яскравий боул зі свіжого полуничного пюре, легкого вівсяного молока, полуничних джус-боллів та жувальної кристальної боби.",
    desc_ru:
      "Яркий боул из свежего клубничного пюре, легкого овсяного молока, клубничных джус-боллов и жевательной кристальной бобы.",
    price: 780,
    salePrice: 730,
    weight: "330 g",
    image: "categories/tapioca.webp",
    alt_en: "Pink dessert with red and clear pearls",
    alt_uk: "Рожевий десерт з червоними та прозорими перлинами",
    alt_ru: "Розовый десерт с красными и прозрачными жемчужинами",
    category: {
      connect: { slug: "tapioca" },
    },
    tags: {
      connect: [
        { slug: "fruity" },
        { slug: "refreshing" },
        { slug: "lactose-free" },
        { slug: "new" },
      ],
    },
    itemIngredients: {
      create: [
        { amount: "100ml", ingredient: { connect: { name_en: "Oat Milk" } } },
        {
          amount: "40g",
          ingredient: { connect: { name_en: "Fresh Strawberry" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Popping Boba (Strawberry)" } },
        },
        {
          amount: "1 portion",
          ingredient: { connect: { name_en: "Crystal Boba" } },
        },
      ],
    },
  },
];
