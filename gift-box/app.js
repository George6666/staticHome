const products = [
  {
    id: "blossom-tea",
    name: "春日花茶礼盒",
    price: "¥268",
    tag: "人气礼盒",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    summary: "严选花草茶、手工曲奇与丝带贺卡，适合生日、拜访和下午茶聚会。",
    highlights: ["6 款花草茶包", "手工黄油曲奇", "定制祝福卡", "礼袋随盒附赠"],
    story: "柔和花香搭配酥脆甜点，打开盒子的第一刻就像收到一束轻盈的春天。"
  },
  {
    id: "candle-night",
    name: "香氛夜读礼盒",
    price: "¥398",
    tag: "质感之选",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1200&q=80",
    summary: "香氛蜡烛、木质书签与手账本组合，送给重视生活仪式感的人。",
    highlights: ["大豆蜡香氛杯", "胡桃木书签", "布面手账本", "烫金礼盒包装"],
    story: "适合在夜晚点亮，香气沉稳不张扬，让一份礼物陪对方慢慢安静下来。"
  },
  {
    id: "coffee-brunch",
    name: "咖啡早安礼盒",
    price: "¥328",
    tag: "商务友好",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    summary: "精品挂耳咖啡、坚果与杯垫套装，适合团队福利和商务答谢。",
    highlights: ["10 包精品挂耳", "混合坚果罐", "皮革杯垫", "企业卡片可定制"],
    story: "把清晨的第一杯咖啡做得更正式，也让商务关系里的感谢显得自然体面。"
  },
  {
    id: "porcelain-home",
    name: "白瓷家居礼盒",
    price: "¥468",
    tag: "新居推荐",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80",
    summary: "白瓷杯碟、棉麻餐巾和扩香石组合，适合乔迁、婚礼与家居场景。",
    highlights: ["白瓷杯碟一组", "棉麻餐巾两条", "花园调扩香石", "缓冲礼盒内托"],
    story: "克制的白瓷和柔软织物放在一起，让家里的日常餐桌多一点漂亮秩序。"
  },
  {
    id: "sweet-party",
    name: "甜品派对礼盒",
    price: "¥298",
    tag: "节日限定",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    summary: "马卡龙、巧克力与果酱礼盒，适合节日聚会与闺蜜分享。",
    highlights: ["彩色马卡龙", "黑巧薄片", "莓果果酱", "派对祝福贴纸"],
    story: "明亮、甜美、容易分享，适合在节日气氛里成为桌面上的小焦点。"
  },
  {
    id: "wellness-bath",
    name: "疗愈沐浴礼盒",
    price: "¥358",
    tag: "放松好礼",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    summary: "浴盐、护手霜与柔软毛巾组合，适合关怀、慰问和自用犒赏。",
    highlights: ["矿物浴盐", "植物护手霜", "长绒棉毛巾", "香气说明卡"],
    story: "把关心做成可触摸的东西，从热水、香气和柔软感开始，简单但很有用。"
  }
];

const channels = [
  { name: "小红书", label: "看买家图文", url: "https://www.xiaohongshu.com", tone: "red" },
  { name: "抖音", label: "看短视频展示", url: "https://www.douyin.com", tone: "black" },
  { name: "淘宝", label: "进入淘宝店铺", url: "https://www.taobao.com", tone: "orange" },
  { name: "京东", label: "进入京东店铺", url: "https://www.jd.com", tone: "crimson" }
];

const productGrid = document.querySelector("#productGrid");
const channelGrid = document.querySelector("#channelGrid");
const detailShell = document.querySelector("#detailShell");

function renderProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = products.map((product) => `
    <article class="product-card">
      <a href="./detail.html?id=${product.id}" aria-label="查看${product.name}详情">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-info">
          <span class="tag">${product.tag}</span>
          <h3>${product.name}</h3>
          <p>${product.summary}</p>
          <div class="product-meta">
            <strong>${product.price}</strong>
            <span>查看详情</span>
          </div>
        </div>
      </a>
    </article>
  `).join("");
}

function renderChannels() {
  if (!channelGrid) return;

  channelGrid.innerHTML = channels.map((channel) => `
    <article class="channel-card ${channel.tone}">
      <div class="qr" aria-label="${channel.name}二维码占位">
        <span></span><span></span><span></span><span></span>
      </div>
      <div>
        <h3>${channel.name}</h3>
        <p>${channel.label}</p>
        <a href="${channel.url}" target="_blank" rel="noopener noreferrer">立即前往</a>
      </div>
    </article>
  `).join("");
}

function renderDetail() {
  if (!detailShell) return;

  const params = new URLSearchParams(window.location.search);
  const product = products.find((item) => item.id === params.get("id")) || products[0];
  document.title = `${product.name} - 礼遇盒子`;

  detailShell.innerHTML = `
    <section class="detail-hero">
      <div class="detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="detail-content">
        <a class="back-link" href="./index.html#products">返回列表</a>
        <span class="tag">${product.tag}</span>
        <h1>${product.name}</h1>
        <p class="detail-summary">${product.summary}</p>
        <strong class="detail-price">${product.price}</strong>
        <div class="detail-actions">
          <a class="primary-action" href="./index.html#channels">关注购买</a>
          <a class="ghost-action" href="./index.html">回到首页</a>
        </div>
      </div>
    </section>
    <section class="detail-section">
      <div>
        <p class="eyebrow">Gift Story</p>
        <h2>礼盒灵感</h2>
        <p>${product.story}</p>
      </div>
      <div>
        <p class="eyebrow">Inside The Box</p>
        <h2>盒内配置</h2>
        <ul class="highlight-list">
          ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

renderProducts();
renderChannels();
renderDetail();
