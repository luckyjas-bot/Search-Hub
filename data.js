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


// 2. 品牌数据
const BRANDS_DATA = [
    {
        name: "Acqua di Parma",
        client: ["LVMH", "Puig"],         // 所属客户
        owner: ["Adeline"],      // 负责人
        instagram: "https://www.instagram.com/acquadiparma/",
        facebook: "https://www.facebook.com/acquadiparma",
        tiktok: null,
        twitter: null,
        youtube: "https://www.youtube.com/@AcquadiParmaOfficial/videos",
        linkedin: "https://www.linkedin.com/company/acqua-di-parma/",
        weibo: "https://weibo.com/acquadiparma",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5634fb2d9eb57874db2489c4"
    },
    
    {
        name: "Aesop",
        client: ["LVMH", "Puig", "L'Occitane"],        // 所属客户
        owner: ["Adeline"],      // 负责人
        instagram: "https://www.instagram.com/aesop/",
        facebook: "https://www.facebook.com/Aesop",
        tiktok: null,
        twitter: null,
        youtube: null,
        linkedin: "https://www.linkedin.com/company/aesop/",
        weibo: "https://weibo.com/u/6083296652",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/58955bdb5e87e72b32713270"
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
        instagram: "https://www.instagram.com/vacheronconstantin/",
        facebook: "https://www.facebook.com/vacheronconstantin/",
        tiktok: "https://www.tiktok.com/@vacheronconstantin",
        twitter: "https://x.com/Vacheron1755",
        youtube: "https://www.youtube.com/@vacheronconstantin/videos",
        linkedin: "https://www.linkedin.com/company/vacheron-constantin/posts/?feedView=all",
        weibo: "https://weibo.com/u/3236334782",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/56e278e9aed75865e025d524"
    },
    {
        name: "Jaeger-LeCoultre",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/jaegerlecoultre/",
        facebook: "https://www.facebook.com/vacheronconstantin/",
        tiktok: { url: "https://www.tiktok.com/@jaegerlecoultre", updated: "no content" },
        twitter: "https://x.com/jaegerlecoultre",
        youtube: "https://www.youtube.com/@jaegerlecoultre/videos",
        linkedin: "https://www.linkedin.com/company/vacheron-constantin/posts/?feedView=all",
        weibo: "https://weibo.com/jaegerlecoultrechina?JLCclick=Footer",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/6080015200000000010055ee"
    },
    {
        name: "Clinique",
        client: ["Chanel Beauty"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: [
                { url: "https://www.instagram.com/clinique/", region: "Global", priority: true },
                { url: "https://www.instagram.com/cliniqueuk/", region: "UK",priority: true },
                { url: "https://www.instagram.com/cliniquejp/", region: "Japan",priority: true },
                { url: "https://www.instagram.com/cliniquegermany/", region: "Germany",priority: true },
                { url: "https://www.instagram.com/clinique_es/", region: "Spain",priority: false },
                { url: "https://www.instagram.com/cliniquefrance/", region: "France",priority: false },
                { url: "https://www.instagram.com/clinique_in/", region: "India",priority: false },
                { url: "https://www.instagram.com/cliniquesg/", region: "Singapore",priority: false },
                { url: "https://www.instagram.com/cliniqueanz/", region: "Australia",priority: false },
                { url: "https://www.instagram.com/cliniqueph/", region: "Philippines",priority: false },
                { url: "https://www.instagram.com/cliniquekorea/", region: "Korea",priority: false },                
                { url: "https://www.instagram.com/cliniquetw/", region: "Taiwan",priority: false }
            ],
        facebook: "https://www.facebook.com/cliniquetw/?brand_redir=6391689884",
        tiktok: "https://www.tiktok.com/@clinique",
        twitter: { url: "https://x.com/Clinique", updated: "2020-01"},
        youtube: "https://www.youtube.com/Clinique",
        linkedin: "https://www.linkedin.com/company/clinique/posts/?feedView=all",
        weibo: "https://weibo.com/u/1689210504",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/57d3f9865e87e7389277aaaf?xsec_token=ABsakb6J0wmMv5aLUodsRpSQw6EZ-ZFh035QPujEUd-Oo%3D&xsec_source=pc_search"
    }
];