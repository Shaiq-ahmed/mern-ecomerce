const products = [
  {
    name: 'Dell Inspiron 3511 Core i3 ',
    slug: 'dell-corei3-11Gen-4GB',
    category: 'Laptops',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_a2t4lTlBY0w8FSD1hYLSaSJF9wzB7i9z54hajG4D.jpg',
    price: 'Rs. 90,000',
    countInStock: 2,
    brand: 'DELL',
    rating: 4.5,
    numReviews: 5,
    description: `Brand	Dell
    
            Processor	Intel Core i3 11th Generation
            
            Memory	4GB
            
            Hard Drive	1TB
            
            Screen Size	15.6"
            
            Warranty	1 Year Warranty`,
  },
  {
    name: 'MacBook Pro 2020',
    slug: 'macbookpro-2020',
    category: 'Laptops',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_lNxw3WQGh1hwDBnIZXtSyek1IyCWO1AlirE3pkGO.jpg',
    price: 'Rs. 120,000',
    countInStock: 2,
    brand: 'Apple',
    rating: 4,
    numReviews: 8,
    description:
      'Apple MacBook Air MGNE3 M1 Chip 8GB 512GB SSD 13.3-Inch Retina IPS Display With Touch ID 2020',
  },
  {
    name: 'Dell Latitude 7420 Corei5',
    slug: 'Dell-Latitude-7420-Core-i5-11th-Gen',
    category: 'Laptops',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_wVzaYxF0HAj5xU5TLez3crl4uZtC8JtpijHTsqZS.jpg',
    price: 'Rs. 180,000',
    countInStock: 2,
    brand: 'DELL',
    rating: 3,
    numReviews: 11,
    description: `Product Family: Dell Latitude 7420
            Product type: Notebook
            Processor family: 11th Generation IntelÂ® (4 Core, 8M cache, base 2.6GHz, up to 4.4GHz, vPro)
            Processor model: Coreâ„¢ i5-1145G7
            Display diagonal: 14.0" FHD(1920x1080) AG, SLP, Non-Touch, ComfortView Plus,WVA,400nits, FHD IR Cam,Mic,WLAN,CF
            HD type: Full HD
            Display resolution: 1920 x 1080 pixels
            Internal memory: 16 GB
            Internal memory type: Non-ECC, Integrated
            Total storage capacity: 256GB M.2 PCIe NVMe Class 40 Solid State Drive
            Storage media: SSD
            On-board graphics adapter model: IntelÂ® IrisÂ® XE Graphics for i5-1145G7 vPro Processor with 16GB Memory for Laptop
            
            3 Year International Warranty`,
  },
  {
    name: 'Huawei GT2 Pro ',
    slug: 'Huawei-GT2-Pro-SmartWatch',
    category: 'Accessories',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_m4D3syVuTNQOCKratf24eerQtVasb1L76Gj8bg84.jpg',
    price: 'Rs. 30,000',
    countInStock: 2,
    brand: 'Huawei',
    rating: 4.5,
    numReviews: 11,
    description: `1.39 inch AMOLED 454 x 454 HD
    
          The AMOLED touchscreen supports slide and touch gestures.
          
          Memory
          
          4 GB
          
          *The available memory capacity is less than this value because the system software takes up part of the space.
          
          Speaker
          
          Speaker Supported
          
          Connectivity
          
          GPS Supported
          
          Bluetooth 5.1, BLE / BR / EDR
          
          Sensors
          
          Accelerometer sensor
          
          Gyroscope sensor
          
          Geomagnetic sensor
          
          Optical heart rate sensor
          
          Air pressure sensor
          
          Button
          
          Power button, function button
          
          System requirements
          
          Android 5.0 or later
          
          iOS 9.0 or later
          
          BATTERY LIFE
          
          14 days for typical use.`,
  },
  {
    name: 'Apple Watch Series 5',
    slug: 'apple-watch-series-5',
    category: 'Accessories',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_Cw1REgrgvx0FIalI9fJARYQ7rVZedI2IJPIY9OGt.png',
    price: 'Rs. 72,000',
    countInStock: 10,
    brand: 'Apple',
    rating: 4.5,
    numReviews: 6,
    description: `Always-on Retina display has nearly 20% more screen area than Series 6,
          n making everything easier to see and use The most crack-resistant front crystal yet on an Apple Watch, IP6X dust resistance, and swimproof design, 
          Measure your blood oxygen with a powerful sensor and app
          Take an ECG anytime, anywhere
          Get high and low heart rate, and irregular heart rhythm notifications
          Stay in the moment with the new Mindfulness app, and reach your sleep goals with the Sleep app
          Track new tai chi and pilates workouts, in addition to favorites like running, yoga, swimming, and dance
          Track your daily activity on Apple Watch, and see your trends in the Fitness app on iPhone
          Sync your favorite music, podcasts, and audiobooks`,
  },
  {
    name: 'Huawei Fit Smart',
    slug: 'huawei-fit-smart',
    category: 'Accessories',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_sEC6s4LVLExQSz9lmRRl5heqdpAjVg7dc5YGO2mc.jpg',
    price: 'Rs. 17,000',
    countInStock: 10,
    brand: 'Huawei',
    rating: 4.5,
    numReviews: 6,
    description: `Huawei Fit Smart Fitness Watch`,
  },
  {
    name: 'Converse Chuck Taylor',
    slug: 'converse-chuck-taylor-all-star-shoes',
    category: 'Shoes',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_96gzRCtl2rTcTak8XjpWZgOLLKWArDpICqonLF2P.jpg',
    price: 'Rs. 20,000',
    countInStock: 2,
    brand: 'Converse',
    rating: 3,
    numReviews: 11,
    description: 'Converse Chuck Taylor All Star Shoes',
  },
  {
    name: 'Lacoste Court Sneaker',
    slug: 'Lacoste Court Slam 120 2 Lace-up Low Top Sneaker White/Green',
    category: 'Shoes',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_1YzeoXXFd7wOPAHr9QJKjneBQiVqAnZSSWRzVaoz.jpg',
    price: 'Rs. 42,000',
    countInStock: 2,
    brand: 'Converse',
    rating: 4.5,
    numReviews: 11,
    description: 'Lacoste Court Slam 120 2 Lace-up Low Top Sneaker White/Green',
  },
  {
    name: 'TCL Smart HD LED TV 40-inch',
    slug: 'TCL-40S65A-Smart-HD-LED-TV-40-inch-With-Official-Warranty',
    category: 'Laptops',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_Rmoc1PMH1vsTTpvOhiYRDKendc1cr637lEAFRVXo.jpg',
    price: 'Rs. 53,999',
    countInStock: 2,
    brand: 'TCL',
    rating: 4.5,
    numReviews: 12,
    description: 'TCL 40S65A Smart HD LED TV 40-inch With Official Warranty',
  },
  {
    name: 'Markhor Pine Green Shirt',
    slug: 'Markhor-Pine-Green-Men-Shirt',
    category: 'Shirts',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_sQIjHtSKMlp9JklHgav7IQPfKa2gWOYQNWLfm7TV.jpg',
    price: 'Rs. 2,800',
    countInStock: 2,
    brand: 'Markhor',
    rating: 2,
    numReviews: 10,
    description: `Markhor Pine Green Men’s Shirt`,
  },
  {
    name: 'Hollister Logo ',
    slug: 'Hollister-Logo-Tape-Graphic-Tee',
    category: 'Shoes',
    image: 'https://hafscollection.com/wp-content/uploads/2021/11/30-4.png',
    price: 'Rs. 3,100',
    countInStock: 2,
    brand: 'Hafs Collections',
    rating: 4.5,
    numReviews: 11,
    description: 'Hollister Logo Tape Graphic Tee',
  },
  {
    name: 'Huawei Wireless Headphones',
    slug: 'Huawei-FreeBuds-Studio-Wireless-Headphones',
    category: 'Laptops',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_TmRdOP59niD0wUswG430PExmHvYyXzciwsKWuUMa.jpg',
    price: 'Rs. 39,999',
    countInStock: 2,
    brand: 'Huawei',
    rating: 3.5,
    numReviews: 9,
    description: 'Huawei FreeBuds Studio Wireless Headphones',
  },
  {
    name: 'Samsung Galaxy S22 Ultra',
    slug: 'Samsung-Galaxy-S22-Ultra-(12GB,256GB)-With-Official-Warranty',
    category: 'Mobile',
    image:
      'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_w0WocTtWsQkC6dfNQjkP3hs8X6z3Ts4lx6pf3gPB.png',
    price: 'Rs. 244,999',
    countInStock: 2,
    brand: 'Samsing',
    rating: 2.5,
    numReviews: 4,
    description: 'Samsung Galaxy S22 Ultra (12GB,256GB) With Official Warranty',
  },
];

module.exports = products;
