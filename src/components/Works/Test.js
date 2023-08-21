import React, { useState } from "react";
import "./Test.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function Test() {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState("");
  const [productType, setProductType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [products, setProducts] = useState([]);

  const skinTypeOptions = [
    { id: 1, text: "Dry" },
    { id: 2, text: "Sensitive" },
    { id: 3, text: "Oily" },
  ];

  const productTypeOptions = [
    { id: 1, text: "Moisturizer" },
    { id: 2, text: "Cleanser" },
    { id: 3, text: "Serum" },
    { id: 4, text: "Face Mask" },
    { id: 5, text: "Eyecream" },
    { id: 6, text: "Sunscreen" },
  ];

  const priceRangeOptions = [
    { id: 1, text: "Under Rs.100" },
    { id: 2, text: "Under Rs.200" },
    { id: 3, text: "Above Rs.200" },
  ];

  const productsData = [
    {
      skinType: "Dry",
      productType: "Moisturizer",
      priceRange: "Under Rs.100",
      productName: "Ponds Light Moisturizer",
      productImage: "https://m.media-amazon.com/images/I/51bq2zBKxRL._SL1000_.jpg",
    },
    {
      skinType: "Dry",
      productType: "Moisturizer",
      priceRange: "Under Rs.200",
      productName: "The Face Shop Chia Seed No Shine Intense Hydrating Cream",
      productImage: "https://opt.toiimg.com/recuperator/img/toi/m-67852380/67852380.jpg&width=500&resizemode=4",
    },
    {
      skinType: "Dry",
      productType: "Cleanser",
      priceRange: "Under Rs.100",
      productName: "Pond's Pure White Anti-Pollution + Purity Face Wash",
      productImage: "https://m.media-amazon.com/images/I/419gpkL6AhL.jpg",
    },
    {
      skinType: "Dry",
      productType: "Cleanser",
      priceRange: "Under Rs.200",
      productName: "Cetaphil Gentle Skin Cleanser",
      productImage: "https://images-static.nykaa.com/media/catalog/product/0/f/0f5611fNYCETA0000010a_1.jpg",
    },
    {
      skinType: "Dry",
      productType: "Cleanser",
      priceRange: "Above Rs.200",
      productName: "Neutrogena Hydro Boost Gentle Cleansing Lotion",
      productImage: "https://m.media-amazon.com/images/I/71cge1rV+fL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      skinType: "Dry",
      productType: "Serum",
      priceRange: "Under Rs.100",
      productName: "Minimalist 2% Hyaluronic Acid Serum",
      productImage: "https://cdn.shopify.com/s/files/1/0723/8595/4114/products/0c77c5ab8310ce4e6378c8b5f5001b9c.webp?v=1679472371&width=1445",
    },
    {
      skinType: "Dry",
      productType: "Serum",
      priceRange: "Under Rs.200",
      productName: "Blue Nectar Kumkumadi Radiance Glow Night Serum",
      productImage: "https://4.bp.blogspot.com/-J_P6qieto7E/V9qZ_9kEy2I/AAAAAAAAP-Y/yYDLbrzayFsUiIBoc26KNpDgCRkDz3_RQCEw/s1600/blue-nectar-kumkumdi-night-serum4.JPG",
    },
    {
      skinType: "Dry",
      productType: "Serum",
      priceRange: "Above Rs.200",
      productName: "WOW Skin Science Hyaluronic Acid Water Gel",
      productImage: "https://www.jiomart.com/images/product/600x600/rvvsqhkmsg/wow-skin-science-hyaluronic-acid-face-serum-soothing-repairing-dry-and-aging-skin-for-all-skin-types-no-parabens-silicones-mineral-oil-glass-bottle-30ml-product-images-orvvsqhkmsg-p594618914-4-202210190238.jpg",
    },
    {
      skinType: "Dry",
      productType: "Face Mask",
      priceRange: "Under Rs.100",
      productName: "Good Vibes Deep Cleansing Face Mask",
      productImage: "https://n1.sdlcdn.com/imgs/j/m/g/Good-Vibes-Face-Mask-60-SDL135772198-1-ac33b.jpg",
    },
    {
      skinType: "Dry",
      productType: "Face Mask",
      priceRange: "Under Rs.200",
      productName: "Mamaearth Ubtan Face Mask",
      productImage: "https://cdn.shopify.com/s/files/1/0493/6381/2514/products/MamaEarth-1_eebea812-81a1-420e-a5f9-8069cb762d50_1024x.jpg?v=1625586067",
    },
    {
      skinType: "Dry",
      productType: "Face Mask",
      priceRange: "Above Rs.200",
      productName: "Forest Essentials Facial Ubtan Multani Mitti",
      productImage: "https://img.tatacliq.com/images/i7/658Wx734H/MP000000010359896_658Wx734H_202110151155501.jpeg",
    },
    {
      skinType: "Dry",
      productType: "Eyecream",
      priceRange: "Under Rs.100",
      productName: "Himalaya Herbals Under Eye Cream",
      productImage: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/vafysku8wv1ksf0trw02.jpg",
    },
    {
      skinType: "Dry",
      productType: "Eyecream",
      priceRange: "Under Rs.200",
      productName: "Mamaearth Under eye cream",
      productImage: "https://m.media-amazon.com/images/I/61RuaNSg--L._SL1200_.jpg",
    },
    {
      skinType: "Dry",
      productType: "Eyecream",
      priceRange: "Above Rs.200",
      productName: "Himalaya Herbals Youth Eternity Under Eye Cream",
      productImage: "https://m.media-amazon.com/images/I/81dQZg3N8WL._SY679_.jpg",
    },
    {
      skinType: "Dry",
      productType: "Sunscreen",
      priceRange: "Under Rs.100",
      productName: "Neutrogena Ultra Sheer Dry Touch Sunblock SPF 50+",
      productImage: "https://m.media-amazon.com/images/I/412h8vXYtqL._SX679_.jpg",
    },
    {
      skinType: "Dry",
      productType: "Sunscreen",
      priceRange: "Under Rs.200",
      productName: "Nivea Sun Protect & Moisture Sunscreen Lotion",
      productImage: "https://static.thcdn.com/images/large/original//productimg/1600/1600/14293266-1055043892418031.jpg",
    },
    {
      skinType: "Dry",
      productType: "Sunscreen",
      priceRange: "Above Rs.200",
      productName: "Neutrogena Oil-Free Moisture Sunscreen SPF 15",
      productImage: "https://m.media-amazon.com/images/I/71ofj5UC4RL._SL1500_.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Moisturizer",
      priceRange: "Under Rs.100",
      productName: "Himalaya Herbals Nourishing Skin Cream",
      productImage: "https://m.media-amazon.com/images/I/61zcdr1PZwS._SL1500_.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Moisturizer",
      priceRange: "Under Rs.200",
      productName: "Cetaphil Moisturizing Cream",
      productImage: "https://cdn.shopify.com/s/files/1/0066/3191/5610/products/cetaphil-moisturizing-cream.png?v=1643135963",
    },
    {
      skinType: "Sensitive",
      productType: "Moisturizer",
      priceRange: "Above Rs.200",
      productName: "Cetaphil Daily Advance Ultra Hydrating Lotion",
      productImage: "https://m.media-amazon.com/images/I/71nFm1pAlDL._SL1500_.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Cleanser",
      priceRange: "Under Rs.100",
      productName: "Himalaya Herbals Gentle Exfoliating Daily Face Wash",
      productImage: "https://freshlee.in/3905-large_default/himalaya-herbals-gentle-exfoliating-daily-face-wash-100ml.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Cleanser",
      priceRange: "Under Rs.200",
      productName: "Cetaphil Gentle Skin Cleanser",
      productImage: "https://cdn.shopify.com/s/files/1/0066/3191/5610/products/cetaphil-moisturizing-cream.png?v=1643135963",
    },
    {
      skinType: "Sensitive",
      productType: "Cleanser",
      priceRange: "Above Rs.200",
      productName: "Bioderma Sensibio H2O Micellar Water",
      productImage: "https://www.bigbasket.com/media/uploads/p/l/40164976_1-bioderma-sensibio-h2o.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Serum",
      priceRange: "Under Rs.100",
      productName: "Good Vibes Aloe Vera Soothing Serum",
      productImage: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/342793/good-vibes-aloe-vera-moisturizing-emulgel-face-serum-hydrating-moisturizing-brightening-no-parabens-no-sulphates-no-animal-testing-10-ml_1_display_1672984388_2e31d8e7.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Serum",
      priceRange: "Under Rs.200",
      productName: "Plum Green Tea Clear Face Serum",
      productImage: "https://m.media-amazon.com/images/I/51qBGVIi8cL._SL1100_.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Serum",
      priceRange: "Above Rs.200",
      productName: "WOW Skin Science Vitamin C Serum",
      productImage: "https://m.media-amazon.com/images/I/81oATVwFq5L._SL1500_.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Face Mask",
      priceRange: "Under Rs.100",
      productName: "WOW Skin Science Vitamin C Serum",
      productImage: "https://m.media-amazon.com/images/I/81oATVwFq5L._SL1500_.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Face Mask",
      priceRange: "Under Rs.200",
      productName: "Innisfree My Real Squeeze Mask - Aloe",
      productImage: "https://www.netmeds.com/images/product-v1/600x600/1013370/innisfree_my_real_squeeze_mask_aloe_20_ml_439302_0_0.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Face Mask",
      priceRange: "Above Rs.200",
      productName: "Himalaya Herbals Almond & Cucumber Peel-Off Mask",
      productImage: "https://ayurvedamegastore.com/image/cache/catalog/himalaya/almond-cucumber-peel-off-mask-600x711.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Eyecream",
      priceRange: "Under Rs.100",
      productName: "Himalaya Herbals Under Eye Cream",
      productImage: "https://cdn.shopify.com/s/files/1/0493/6381/2514/products/HimalayaUnderEyeCream-15ml_1024x.jpg?v=1647667136",
    },
    {
      skinType: "Sensitive",
      productType: "Eyecream",
      priceRange: "Under Rs.200",
      productName: "Biotique Bio Almond Soothing and Nourishing Eye Cream",
      productImage: "https://www.netmeds.com/images/product-v1/600x600/407051/biotique_bio_almond_soothing_nourishing_eye_cream_15_gm_0.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Eyecream",
      priceRange: "Above Rs.200",
      productName: "Plum E-Luminence Simply Supple Eye Cream",
      productImage: "https://cdn.shopify.com/s/files/1/0390/2985/products/hydration_e-luminence-cleansing-balm_listing-images_1100X1100_7442a0ba-7340-4fd8-8d33-db026613864f_1024x1024.jpg?v=1654578910",
    },
    {
      skinType: "Sensitive",
      productType: "Sunscreem",
      priceRange: "Under Rs.100",
      productName: "Lotus Herbals Safe Sun 3-in-1 Matte Look Daily Sunblock SPF 40",
      productImage: "https://m.media-amazon.com/images/I/617LFlYw2gL.jpg",
    },
    {
      skinType: "Sensitive",
      productType: "Sunscreen",
      priceRange: "Under Rs.200",
      productName: "Neutrogena UltraSheer Dry Touch Sunblock SPF 50+",
      productImage: "https://images-static.nykaa.com/media/catalog/product/5/9/59f542c86800687900_1.jpg?tr=w-500,pr-true",
    },
    {
      skinType: "Sensitive",
      productType: "Eyecream",
      priceRange: "Above Rs.200",
      productName: "La Roche-Posay Anthelios XL SPF 50+ Fluid",
      productImage: "https://m.media-amazon.com/images/I/71z7bbhqMHL.jpg",
    },
    {
      skinType: "Oily",
      productType: "Moisturizer",
      priceRange: "Under Rs.100",
      productName: "Himalaya Herbals Oil-Free Radiance Gel Cream",
      productImage: "https://rukminim1.flixcart.com/image/416/416/moisturizer-cream/g/v/x/himalaya-50-oil-free-radiance-gel-cream-original-imaedug54tpjhpug.jpeg?q=70",
    },
    {
      skinType: "Oily",
      productType: "Moisturizer",
      priceRange: "Under Rs.200",
      productName: "Lotus Herbals Alphamoist Alpha Hydroxy Skin Renewal Oil-Free Moisturizer",
      productImage: "https://images.meesho.com/images/products/111889583/evuju_256.webp",
    },
    {
      skinType: "Oily",
      productType: "Moisturizer",
      priceRange: "Above Rs.200",
      productName: "Lacto Calamine Oil Balance Lotion",
      productImage: "https://m.media-amazon.com/images/I/81W6LkPtw-L._AC_SS300_.jpg",
    },
    {
      skinType: "Oily",
      productType: "Cleanser",
      priceRange: "Under Rs.100",
      productName: "Clean & Clear Foaming Face Wash",
      productImage: "https://m.media-amazon.com/images/I/71n5s5HjPML._SL1500_.jpg",
    },
    {
      skinType: "Oily",
      productType: "Cleanser",
      priceRange: "Under Rs.200",
      productName: "Nivea Milk Delights Fine Gramflour Face Wash",
      productImage: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/9906057a.jpg",
    },
    {
      skinType: "Oily",
      productType: "Cleanser",
      priceRange: "Above Rs.200",
      productName: "Cetaphil Oily Skin Cleanser",
      productImage: "https://static.thcdn.com/images/large/original//productimg/1600/1600/13810032-6045005274116335.jpg",
    },
    {
      skinType: "Oily",
      productType: "Serum",
      priceRange: "Under Rs.100",
      productName: "Garnier Skin Naturals Light Complete Vitamin C Booster Serum",
      productImage: "https://m.media-amazon.com/images/I/51dmhEKOQ2L._SL1000_.jpg",
    },
    {
      skinType: "Oily",
      productType: "Serum",
      priceRange: "Under Rs.200",
      productName: "Good Vibes Niacinamide Brightening Serum",
      productImage: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/275486/good-vibes-skin-glow-serum-vitamin-c-and-vitamin-b3-30-ml-1_7_display_1625205776_2536ddc9.jpg",
    },
    {
      skinType: "Oily",
      productType: "Serum",
      priceRange: "Above Rs.200",
      productName: "Neutrogena Oil-Free Acne Stress Control Power-Clear Scrub",
      productImage: "https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/1280x1280/products/24636/35718/71Iu4ZHZDNL__34544.1656729595.jpg?c=1&imbypass=on",
    },
    {
      skinType: "Oily",
      productType: "Face Mask",
      priceRange: "Under Rs.100",
      productName: "Himalaya Herbals Purifying Neem Mask",
      productImage: "https://www.moremuscle.com/57298/purifiying-neem-mask.jpg",
    },
    {
      skinType: "Oily",
      productType: "Face Mask",
      priceRange: "Under Rs.200",
      productName: "Mamaearth Charcoal Natural Face Mask",
      productImage: "https://m.media-amazon.com/images/I/51n5IBtBeBL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      skinType: "Oily",
      productType: "Face Mask",
      priceRange: "Above Rs.200",
      productName: "Mamaearth Charcoal, Coffee, and Clay Face Mask",
      productImage: "https://m.media-amazon.com/images/I/51XUbKzfUzL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      skinType: "Oily",
      productType: "Eyecream",
      priceRange: "Under Rs.100",
      productName: "Biotique Bio Seaweed Revitalizing Anti-Fatigue Eye Gel",
      productImage: "https://cdn.shopify.com/s/files/1/0582/1779/1697/products/51PGRyQ0J6L._SL1000_600x.jpg?v=1645857695",
    },
    {
      skinType: "Oily",
      productType: "Eyecream",
      priceRange: "Under Rs.200",
      productName: "Himalaya Herbals Under Eye Cream",
      productImage: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/vafysku8wv1ksf0trw02.jpg",
    },
    {
      skinType: "Oily",
      productType: "Eyecream",
      priceRange: "Above Rs.200",
      productName: "Himalaya Herbals Under Eye Cream",
      productImage: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/vafysku8wv1ksf0trw02.jpg",
    },
    {
      skinType: "Oily",
      productType: "Sunscreen",
      priceRange: "Under Rs.100",
      productName: "Nivea Sun Protect & Refresh Invisible Cooling Sun Spray",
      productImage: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM0ZDBhZDcwYmU3NzM0NTEwMWNkODc2LW5pdmVhLXN1bi1zY3JlZW4tc3VuLXByb3RlY3QtYW1wLmpwZw.jpg",
    },
    {
      skinType: "Oily",
      productType: "Sunscreen",
      priceRange: "Under Rs.200",
      productName: "Neutrogena UltraSheer Dry-Touch Sunblock SPF 50+",
      productImage: "https://m.media-amazon.com/images/I/61dSZR8IqbL.jpg",
    },
    {
      skinType: "Oily",
      productType: "Sunscreen",
      priceRange: "Above Rs.200",
      productName: "Lotus Herbals Safe Sun UV Screen Matte Gel SPF 50",
      productImage: "https://www.bigbasket.com/media/uploads/p/l/40142258_1-lotus-herbals-safe-sun-uv-screen-matte-gel-pa-spf-50.jpg",
    },
    
    
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // filter products based on user's input
    const filteredProducts = productsData.filter(
      (product) =>
        product.skinType === skinType &&
        product.productType === productType &&
        product.priceRange === priceRange
    );
    setProducts(filteredProducts);
    setStep(4);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-group">
            <label htmlFor="skinType" className="pad">What's your skin type?</label><br/><br/><br/>
            <select
              id="skinType"
              className="form-control"
              value={skinType}
              onChange={(event) => setSkinType(event.target.value)}
              required
            >
              <option value="">-- Select skin type --</option>
              {skinTypeOptions.map((option) => (
                <option key={option.id} value={option.text}>
                  {option.text}
                </option>
              ))}
            </select><br/><br/><br/>
            <button className="btn btn-primary" onClick={() => setStep(2)}>
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="form-group">
            <label htmlFor="productType">Which product type do you want?</label><br/><br/><br/>
            <select
              id="productType"
              className="form-control"
              value={productType}
              onChange={(event) => setProductType(event.target.value)}
              required
            >
              <option value="">-- Select product type --</option>
              {productTypeOptions.map((option) => (
                <option key={option.id} value={option.text}>
                  {option.text}
                </option>
              ))}
            </select><br/><br/><br/>
            <button className="btn btn-primary" onClick={() => setStep(3)}>
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="form-group">
            <label htmlFor="priceRange">What's your price range?</label><br/><br/><br/>
            <select
              id="priceRange"
              className="form-control"
              value={priceRange}
              onChange={(event) => setPriceRange(event.target.value)}
              required
            >
              <option value="">-- Select price range --</option>
              {priceRangeOptions.map((option) => (
                <option key={option.id} value={option.text}>
                  {option.text}
                </option>
              ))}
            </select><br/><br/><br/>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        );
      case 4:
        return (
          <div className="result">
            <h2 className="h2re">Results</h2>
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="product-card">
                  <img className="imgwh" src={product.productImage} alt={product.productName} />
                  <h3>{product.productName}</h3>
                </div>
              ))
            ) : (
              <p>No products found for your selection.</p>
            )}
            <button className="btn btn-primary" onClick={() => setStep(1)}>
              Start Over
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  return(
    renderStep()
    )
}

export default Test;
