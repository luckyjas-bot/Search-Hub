// data.js - 存放你的品牌库

// 1. 网页界面选择语言
const UI_TEXT = {
    en: {
        title: "SEARCH FILTER",
        placeholder: "Search brands...",
        brandName: "Brand"
    },
    zh: {
        title: "搜索筛选",
        placeholder: "搜索品牌...",
        brandName: "品牌"
    },
    fr: {
        title: "FILTRE DE RECHERCHE",
        placeholder: "Rechercher des marques...",
        brandName: "Marque"
    }
};


// 2. 品牌数据保持不变（如果品牌名本身需要翻译，也可以按类似结构修改）
const BRANDS_DATA = [
    {
        name: "Acqua di Parma",
        client: ["LVMH", "Puig"],         // 所属客户
        owner: ["Adeline"],      // 负责人
        instagram: "https://www.instagram.com/acquadiparma/",
        linkedin: "https://www.linkedin.com/company/acqua-di-parma/",
        weibo: "https://weibo.com/acquadiparma"
    },
    {
        name: "Aesop",
        client: ["LVMH"],        // 所属客户
        owner: ["Adeline"],      // 负责人
        instagram: "https://www.instagram.com/aesopskincare/",
        linkedin: "https://www.linkedin.com/company/aesop/",
        weibo: "https://weibo.com/aesop"
    },
    {
        name: "Zenith",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/zenithwatches/",
        facebook: "https://www.facebook.com/ZenithWatches/",
        tiktok: "https://www.tiktok.com/@zenithwatches?lang=en",
        twitter: "https://x.com/ZenithWatches",
        youtube: "https://www.youtube.com/@zenithwatches/videos",
        linkedin: "https://www.linkedin.com/company/official-zenith-branch-of-lvmh-swiss-manufactures-sa/posts/?feedView=all",
        weibo: "https://weibo.com/u/2116791882",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5e68a15900000000010076ad"
    },
        {
        name: "Vacheron Constantin",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/zenithwatches/",
        linkedin: "https://www.linkedin.com/company/zenithwatches/",
        weibo: "https://weibo.com/u/2116791882"
    }
];