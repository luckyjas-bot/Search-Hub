// data.js - 存放你的品牌库

// 品牌数据
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
        name: "Blancpain",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/blancpain1735/",
        facebook: "https://www.facebook.com/Blancpain/",
        tiktok: { url: "https://www.tiktok.com/@blancpain",Note: "no content"},
        twitter: "https://x.com/Blancpain1735",
        youtube: "https://www.youtube.com/@blancpain/videos",
        linkedin: "https://www.linkedin.com/company/blancpain/posts/?feedView=all",
        weibo: "https://weibo.com/u/2102760441",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c6a32b00000000012023b15"
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
        twitter: { url: "https://x.com/Clinique", Note: "2020-01"},
        youtube: "https://www.youtube.com/Clinique",
        linkedin: "https://www.linkedin.com/company/clinique/posts/?feedView=all",
        weibo: "https://weibo.com/u/1689210504",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/57d3f9865e87e7389277aaaf?xsec_token=ABsakb6J0wmMv5aLUodsRpSQw6EZ-ZFh035QPujEUd-Oo%3D&xsec_source=pc_search"
    },

    {
        name: "Jaeger-LeCoultre",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/jaegerlecoultre/",
        facebook: "https://www.facebook.com/vacheronconstantin/",
        tiktok: { url: "https://www.tiktok.com/@jaegerlecoultre", Note: "no content" },
        twitter: "https://x.com/jaegerlecoultre",
        youtube: "https://www.youtube.com/@jaegerlecoultre/videos",
        linkedin: "https://www.linkedin.com/company/vacheron-constantin/posts/?feedView=all",
        weibo: "https://weibo.com/jaegerlecoultrechina?JLCclick=Footer",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/6080015200000000010055ee"
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
        name: "Louis Vuitton",
        client: ["LVMH", "Prada", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu", "Salvatore"],      // 负责人
        instagram: "https://www.instagram.com/louisvuitton/",
        facebook: "https://www.facebook.com/LouisVuitton/",
        tiktok: "https://www.tiktok.com/@louisvuitton?lang=en",
        twitter: [
                { url: "https://x.com/LouisVuitton", region: "Global", priority: true },
                { url: "https://x.com/LouisVuitton_JP", region: "Japan", priority: true },
                ],
        youtube: "https://www.youtube.com/@louisvuitton",
        linkedin: "https://www.linkedin.com/company/louis-vuitton/posts/?feedView=all",
        weibo: "https://weibo.com/louisvuitton",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b40d11de8ac2b0d7d1b9520?xsec_token=ABiQddVf7z2BswZmk5jfWhYXi0pLkShz9lgIzu5FkzBK8%3D&xsec_source=pc_search"
    },

    {
        name: "Prada",
        client: ["LVMH", "Prada", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu", "Salvatore"],      // 负责人
        instagram: "https://www.instagram.com/prada/",
        facebook: "https://www.facebook.com/Prada/",
        tiktok: "https://www.tiktok.com/@prada?lang=en",
        twitter: [
                { url: "https://x.com/Prada", region: "Global", priority: true },
                { url: "https://x.com/prada_japan", region: "Japan", priority: true },
                ],
        youtube: "https://www.youtube.com/@Prada",
        linkedin: "https://www.linkedin.com/company/pradagroup/posts/?feedView=all",
        weibo: "https://weibo.com/pradaofficial",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5bdd17b66c202a000160f944"
    },

    {
        name: "Prada Beauty",
        client: ["LVMH", "Prada", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu", "Salvatore"],      // 负责人
        instagram: "https://www.instagram.com/pradabeauty/",
        facebook: "https://www.facebook.com/Pradabeautyofficial",
        tiktok: "https://www.tiktok.com/@pradabeauty?lang=en",
        twitter: null,
        youtube: "https://www.youtube.com/@pradabeauty",
        linkedin: null,
        weibo: "https://weibo.com/u/7769327151",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5f01603000000000010028e2?xsec_token=AB8Nfdh4ncSM9ohaT_4kTChraxgFwCK5Bk2XOrPHBLLvY%3D&xsec_source=pc_search"
    },

    {
        name: "Saint Laurent Paris",
        client: ["LVMH", "Prada", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu", "Salvatore"],      // 负责人
        instagram: "https://www.instagram.com/ysl/?hl=en",
        facebook: "https://www.facebook.com/ysl/?locale=fr_FR",
        tiktok: "https://www.tiktok.com/@ysl?lang=en",
        twitter: "https://x.com/YSL",
        youtube: "https://www.youtube.com/@yvessaintlaurent",
        linkedin: "https://www.linkedin.com/company/yves-saint-laurent/posts/?feedView=all",
        weibo: "https://weibo.com/officialysl",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5e7cd9950000000001005553?xsec_token=ABMcLqZe53NWnkjpLGlWOkPWEwxdF2C4p0qDqe5VXn9j8%3D&xsec_source=pc_search"
    },
    {
        name: "Tory Burch",
        client: ["LVMH"],        // 所属客户
        owner: ["Danyu", "Salvatore"],      // 负责人
        instagram: "https://www.instagram.com/toryburch/",
        facebook: "https://www.facebook.com/toryburch/",
        tiktok: "https://www.tiktok.com/@toryburch?lang=en",
        twitter: "https://x.com/toryburch",
        youtube: "https://www.youtube.com/@ToryBurch",
        linkedin: "https://www.linkedin.com/company/tory-burch/posts/?feedView=all",
        weibo: "https://weibo.com/toryburch",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5ce4b04b000000001702a165"
    },
    {
        name: "Valentino",
        client: ["LVMH", "Prada", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu", "Salvatore"],      // 负责人
        instagram: "https://www.instagram.com/maisonvalentino/?hl=en",
        facebook: "https://www.facebook.com/valentino/",
        tiktok: "https://www.tiktok.com/@valentino?lang=en",
        twitter: "https://x.com/MaisonValentino",
        youtube: "https://www.youtube.com/@valentino/featured",
        linkedin: "https://www.linkedin.com/company/valentino/posts/?feedView=all",
        weibo: "https://weibo.com/valentinoofficial",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5d9dbbba0000000001002ef0"
    },
    {
        name: "Bottega Veneta",
        client: ["Prada", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu", "Alejandra"],      // 负责人
        instagram: "hhttps://www.instagram.com/newbottega/",
        facebook: "https://www.facebook.com/bottegaveneta",
        tiktok: null,
        twitter: null,
        youtube: "https://www.youtube.com/@BottegaVeneta",
        linkedin: "https://www.linkedin.com/company/bottega-veneta/posts/?feedView=all",
        weibo: "https://weibo.com/u/7821671028",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5e7d5dea000000000100bfaa"
    },
    {
        name: "Bulgari",
        client: ["LVMH", "Swarovski", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/bvlgari/",
        facebook: "https://www.facebook.com/Bulgari/",
        tiktok: "https://www.tiktok.com/@bvlgari?lang=en",
        twitter: { url: "https://x.com/Bulgariofficial", Note: "2025-03" },
        youtube: "https://www.youtube.com/@bvlgariofficial",
        linkedin: "https://www.linkedin.com/company/bottega-veneta/posts/?feedView=all",
        weibo: [              
            { url: "https://weibo.com/bulgari", Note: "Official", region: "Official", priority: true },                              
            { url: "https://weibo.com/u/6418607905", Note: "Fragrance", region: "Fragrance", priority: true },  
            ],
        Xiaohongshu: [              
            { url: "https://www.xiaohongshu.com/user/profile/5ea953c20000000001009739", Note: "Official", region: "Official", priority: true },                              
            { url: "https://www.xiaohongshu.com/user/profile/5572845a62a60c08c19841bf?xsec_token=ABQ4GLOK7EiGReUxevAGPM-w37B3se1ln-YQKlt1aMqbE%3D&xsec_source=pc_search", Note: "Fragrance", region: "Fragrance", priority: true },  
            ]
    },
    {
        name: "Cartier",
        client: ["LVMH", "Swarovski", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/cartier/",
        facebook: "https://www.facebook.com/cartier.france",
        tiktok: "https://www.tiktok.com/@cartier?lang=en",
        twitter: "https://x.com/Cartier",
        youtube: "https://www.youtube.com/@cartier/videos",
        linkedin: "https://www.linkedin.com/company/cartier/posts/?feedView=all",
        weibo: "https://weibo.com/u/2142012291",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/595654bb6a6a696bf631333d"
    },
    {
        name: "TAG Heuer",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/tagheuer/",
        facebook: "https://www.facebook.com/TAGHeuer/",
        tiktok: "https://www.tiktok.com/@tagheuer?lang=en",
        twitter: "https://x.com/TAGHeuer",
        youtube: "https://www.youtube.com/@tagheuer/videos",
        linkedin: "https://www.linkedin.com/company/tag-heuer/posts/?feedView=all",
        weibo: "https://weibo.com/u/1579993125",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5d7606c2000000000101b1c8"
    },
    {
        name: "Rolex",
        client: ["LVMH", "Chanel Fashion", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/rolex/", 
        facebook: "https://www.facebook.com/rolex/",
        tiktok: {url: "https://www.tiktok.com/@rolex?lang=en", Note: "no content"},
        twitter: "https://x.com/ROLEX",
        youtube: "https://www.youtube.com/rolex",
        linkedin: "https://www.linkedin.com/company/rolex/posts/?feedView=all",
        weibo: "https://weibo.com/u/6273255109",
        Xiaohongshu: null
    },
    {
        name: "Omega",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/omega/", 
        facebook: "https://www.facebook.com/omega/",
        tiktok: "https://www.tiktok.com/@omega?lang=en",
        twitter: "https://x.com/omegawatches",
        youtube: "https://www.youtube.com/@OMEGA/videos",
        linkedin: "https://www.linkedin.com/company/omega-sa/posts/?feedView=all",
        weibo: "https://weibo.com/u/3679459427",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b080da9db2e60799d364583"
    },
    {
        name: "Hublot",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/hublot/", 
        facebook: "https://www.facebook.com/Hublot/",
        tiktok: "https://www.tiktok.com/@hublot?lang=en",
        twitter: "https://x.com/Hublot",
        youtube: "https://www.youtube.com/@hublot/videos",
        linkedin: "https://www.linkedin.com/company/hublot/posts/?feedView=all",
        weibo: "https://weibo.com/n/%E5%AE%87%E8%88%B6%E8%A1%A8",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5facb031000000000101f84c"
    },
    {
        name: "Van Cleef & Arpels",
        client: ["LVMH", "Swarovski", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/vancleefarpels/",
        facebook: "https://www.facebook.com/profile.php?id=100064912201715&brand_redir=68441743439#",
        tiktok: "https://www.tiktok.com/@vancleefarpels",
        twitter: { url: "https://x.com/vancleefarpels", Note: "2024-05"},
        youtube: "https://www.youtube.com/@vancleefarpels/videos",
        linkedin: "https://www.linkedin.com/company/cartier/posts/?feedView=all",
        weibo: "https://weibo.com/u/2653491890",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/584bab8d82ec39206c07264c"
    },
    {
        name: "Repossi",
        client: ["LVMH"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/repossi/",
        facebook: "https://www.facebook.com/Repossi/",
        tiktok: "https://www.tiktok.com/@repossi",
        twitter: null,
        youtube: "https://www.youtube.com/@repossi7621/videos",
        linkedin: "https://www.linkedin.com/company/repossi/posts/?feedView=all",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Graff Diamonds",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/graff/", 
        facebook: "https://www.facebook.com/graff/",
        tiktok: "https://www.tiktok.com/@graffdiamonds",
        twitter: null,
        youtube: "https://www.youtube.com/@graff/videos",
        linkedin: "https://www.linkedin.com/company/graff/posts/?feedView=all",
        weibo: "https://weibo.com/graff",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5ec35761000000000101d06b"
    },
    {
        name: "Fred",
        client: ["LVMH"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/fredjewelry/", 
        facebook: "https://www.facebook.com/FredJewelryFR/",
        tiktok: "https://www.tiktok.com/@fredjewelry?lang=en",
        twitter: { url: "https://x.com/FREDjewelry", Note: "2020-10"},
        youtube: "https://www.youtube.com/c/FREDJewelry",
        linkedin: "https://www.linkedin.com/company/fredjewelry/posts/?feedView=all",
        weibo: "https://weibo.com/u/6162914258",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b8c161dd49ec20001540127"
    },
    {
        name: "Chow Tai Fook",
        client: ["LVMH", "Swarovski", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/chowtaifookjewellery/",
        facebook: "https://www.facebook.com/CHOWTAIFOOK/",
        tiktok: null,
        twitter: null,
        youtube: "https://www.youtube.com/@chowtaifook1929/videos",
        linkedin: "https://www.linkedin.com/company/chowtaifook/posts/?feedView=all",
        weibo: "https://weibo.com/n/%E5%91%A8%E5%A4%A7%E7%A6%8F",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5bda982821d2b100018ebe72"
    },
    {
        name: "Chaumet",
        client: ["LVMH", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/chaumetofficial/",
        facebook: "https://www.facebook.com/chaumet.fr",
        tiktok: "https://www.tiktok.com/@chaumet?lang=en",
        twitter: "https://x.com/Chaumet",
        youtube: "https://www.youtube.com/user/Chaumet/videos",
        linkedin: "https://www.linkedin.com/company/chaumet/posts/?feedView=all",
        weibo: "https://weibo.com/u/2155043231",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5f4d243a000000000101c786"
    },
    {
        name: "Tiffany & Co.",
        client: ["LVMH", "Swarovski", "Richemont"],        // 所属客户
        owner: ["Danyu"],      // 负责人
        instagram: "https://www.instagram.com/tiffanyandco/",
        facebook: "https://www.facebook.com/Tiffany/",
        tiktok: "https://www.tiktok.com/@tiffanyandco?lang=en",
        twitter: "https://x.com/TiffanyAndCo",
        youtube: "https://www.youtube.com/@TiffanyandCo/videos",
        linkedin: "https://www.linkedin.com/company/tiffany-and-co/posts/?feedView=all",
        weibo: "https://weibo.com/u/2492431184",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c284605000000000600e8aa"
    },
    {
        name: "Berluti",
        client: ["LVMH"], // 所属客户
        owner: ["Danyu","Alejandra"],   // 负责人
        instagram: "https://www.instagram.com/berluti/",
        facebook: "https://www.facebook.com/berluti",
        tiktok: null, 
        twitter: null, 
        youtube: "https://www.youtube.com/@berluti/videos",
        linkedin: "https://www.linkedin.com/company/berluti/",
        weibo: "https://weibo.com/berlutiofficial",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/59929283e8ac2b568393e155"
    },
    {
        name: "Ulta",
        client: ["LVMH"], 
        owner: ["Charlotte"],     
        instagram: [
            {url: "https://www.instagram.com/ultabeauty/", region: "Global", priority: true},
            {url: "https://www.instagram.com/ultabeautymx", region: "Mexico", priority: true},
            {url: "https://www.instagram.com/ultabeautymiddleeast/", region: "Middle East", priority: true},
        ],
        facebook: "https://www.facebook.com/UltaBeauty",
        tiktok: "https://www.tiktok.com/@ultabeauty",
        twitter: { url: "https://twitter.com/ultabeauty", Note: "2024-12"},
        youtube: "https://www.youtube.com/@ultabeauty",
        linkedin: "https://www.linkedin.com/company/ulta/",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Sephora",
        client: ["LVMH"], 
        owner: ["Charlotte"],     
        instagram: [
            { url: "https://www.instagram.com/sephora/", region: "Global", priority: true },
            { url: "https://www.instagram.com/sephorafrance/", region: "France", priority: true },
            { url: "https://www.instagram.com/sephoracollection/", region: "Collection", priority: false }
        ],
        facebook: "https://www.facebook.com/sephorafrance",
        tiktok: "https://www.tiktok.com/@sephora",
        twitter: "https://twitter.com/Sephora",
        youtube: "https://www.youtube.com/@Sephora",
        linkedin: "https://www.linkedin.com/company/sephora/",
        weibo: "https://weibo.com/u/1829867530",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b30dcc6e8ac2b23eff107ca"
    },



];

// 自动按品牌名称 (name) 排序 A-Z
BRANDS_DATA.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // 转为大写确保排序准确
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

