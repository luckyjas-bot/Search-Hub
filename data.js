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
            { url: "https://www.instagram.com/sephoracollection/", region: "Collection", 
                priority: true,
                subLogo: "images/sephora-collection.jpg" },
            { url: "https://www.instagram.com/sephoramiddleeast", region: "Middle East", priority: true },
            { url: "https://www.instagram.com/sephorauk", region: "UK", priority: true },
            { url: "https://www.instagram.com/sephoracanada", region: "Canada", priority: true },
            { url: "https://www.instagram.com/sephoramx", region: "Mexico", priority: true },
            { url: "https://www.instagram.com/sephoraaus/", region: "Australia", priority: true },
            { url: "https://www.instagram.com/sephoranz/", region: "New Zealand", priority: true },
            { url: "https://www.instagram.com/sephoraph/", region: "Philippines", priority: true },
            { url: "https://www.instagram.com/sephoraitalia/", region: "Italy", priority: true },
            { url: "https://www.instagram.com/sephoragreece/", region: "Greece", priority: true },
            { url: "https://www.instagram.com/sephoramy/", region: "Malaysia", priority: true },
            { url: "https://www.instagram.com/sephora_india/", region: "India", priority: true },
            { url: "https://www.instagram.com/sephoraidn/", region: "Indonesia", priority: true },
            { url: "https://www.instagram.com/sephora_spain/", region: "Spain", priority: true },
            { url: "https://www.instagram.com/sephoraswitzerland/", region: "Switzerland", priority: true },
            { url: "https://www.instagram.com/sephora_vietnam/", region: "Vietnam", priority: false, Note:"2022" },
            { url: "https://www.instagram.com/sephoraportugal/", region: "Portugal", priority: true },
            { url: "https://www.instagram.com/sephorabrasil/", region: "Brazil", priority: true },
        ],
        facebook: "https://www.facebook.com/sephorafrance",
        tiktok: "https://www.tiktok.com/@sephora",
        twitter: "https://twitter.com/Sephora",
        youtube: "https://www.youtube.com/@Sephora",
        linkedin: "https://www.linkedin.com/company/sephora/",
        weibo: "https://weibo.com/u/1829867530",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b30dcc6e8ac2b23eff107ca"
    },
    {
        name: "Nordstrom",
        client: ["LVMH"], 
        owner: ["Charlotte"],     
        instagram: "https://www.instagram.com/nordstrom/",
        facebook: "https://www.facebook.com/Nordstrom",
        tiktok: "https://www.tiktok.com/@nordstrom",
        twitter: "https://twitter.com/Nordstrom",
        youtube: "https://www.youtube.com/@nordstrom",
        linkedin: "https://www.linkedin.com/company/nordstrom/",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Nocibé",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/nocibe_france/",
        facebook: "https://www.facebook.com/nocibe",
        tiktok: "https://www.tiktok.com/@nocibe_france",
        twitter: "https://twitter.com/Nocibe",
        youtube: "https://www.youtube.com/@NocibeOfficiel",
        linkedin: "https://www.linkedin.com/company/nocibe/",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Net-a-porter",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/netaporter/",
        facebook: "https://www.facebook.com/netaporter",
        tiktok: "https://www.tiktok.com/@netaporter",
        twitter: "https://twitter.com/NETAPORTER",
        youtube: "https://www.youtube.com/@NET-A-PORTER",
        linkedin: "https://www.linkedin.com/company/net-a-porter/",
        weibo: "https://weibo.com/u/2662330667",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5dc247ae000000000100b3df"
    },
    {
        name: "Neiman Marcus",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/neimanmarcus/",
        facebook: "https://www.facebook.com/neimanmarcus",
        tiktok: "https://www.tiktok.com/@neimanmarcus",
        twitter: "https://twitter.com/neimanmarcus",
        youtube: "https://www.youtube.com/@NeimanMarcus/videos",
        linkedin: "https://www.linkedin.com/company/neimanmarcusgroup/",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Mytheresa",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: [
            { url: "https://www.instagram.com/mytheresa.com/", region: "Global", priority: true },
            { url: "https://www.instagram.com/mytheresa.men/", region: "Men", Note: "Men", priority: true }, 
            { url: "https://www.instagram.com/mytheresa.store/", region: "Global", Note: "Store", priority: true }
        ],
        facebook: "https://www.facebook.com/mytheresa",
        tiktok: "https://www.tiktok.com/@mytheresa.com",
        twitter: "https://twitter.com/mytheresa_com",
        youtube: "https://www.youtube.com/@mytheresa_com",
        linkedin: "https://www.linkedin.com/company/mytheresa-com/posts/?feedView=all",
        weibo: "https://weibo.com/u/5721570203",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c4462f4000000000600497a"
    },
    {
        name: "Marionnaud",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/marionnaudfr/",
        facebook: "https://www.facebook.com/Marionnaud.France",
        tiktok: "https://www.tiktok.com/@marionnaud_maroc",
        twitter: "https://twitter.com/Marionnaud_Fr",
        youtube: "https://www.youtube.com/@MarionnaudFranceTV",
        linkedin: "https://www.linkedin.com/company/marionnaud/",
        weibo: "https://weibo.com/u/7316798466",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5d79aa6d0000000001009268"
    },
    {
        name: "Le Bon Marché",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/lebonmarcherivegauche/",
        facebook: "https://www.facebook.com/lebonmarche",
        tiktok: "https://www.tiktok.com/@lebonmarcherivegauche",
        twitter: "https://twitter.com/lebonmarche",
        youtube: "https://www.youtube.com/@LeBonMarcheRiveGauche",
        linkedin: "https://www.linkedin.com/company/le-bon-marche/",
        weibo: "https://weibo.com/u/6011930896",
        Xiaohongshu: null
    },
    {
        name: "La Samaritaine",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/samaritaineparis/",
        facebook: "https://www.facebook.com/samaritaineparis",
        tiktok: "https://www.tiktok.com/@samaritaineparis",
        twitter: "https://twitter.com/Samaritaine",
        youtube: "https://www.youtube.com/@SamaritaineParis",
        linkedin: "https://www.linkedin.com/company/samaritaineparis/",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Galeries Lafayette",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/galerieslafayette/",
        facebook: "https://www.facebook.com/galerieslafayette",
        tiktok: "https://www.tiktok.com/@galerieslafayette",
        twitter: "https://twitter.com/Galeries_Laf",
        youtube: "https://www.youtube.com/@GaleriesLafayette",
        linkedin: "https://www.linkedin.com/company/galeries-lafayette/",
        weibo: "https://weibo.com/u/3086942997",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/57ae38a282ec394aad793768"
    },
    {
        name: "Farfetch",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/farfetch/",
        facebook: "https://www.facebook.com/Farfetch",
        tiktok: "https://www.tiktok.com/@farfetch",
        twitter: "https://twitter.com/farfetch",
        youtube: "https://www.youtube.com/@farfetch",
        linkedin: "https://www.linkedin.com/company/farfetch.com/posts/?feedView=all",
        weibo: "https://weibo.com/u/3790692600",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5bd12f2035c11a00018239c9"
    },
    {
        name: "24S",
        client: ["LVMH"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/24s/",
        facebook: "https://www.facebook.com/24sofficiel",
        tiktok: "https://www.tiktok.com/@24s",
        twitter: "https://twitter.com/24S_official",
        youtube: "https://www.youtube.com/@24Sofficial",
        linkedin: "https://www.linkedin.com/company/24s/",
        weibo: "https://weibo.com/u/7782344643",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/6070f0fe0000000001004223"
    },
    {
        name: "JACQUEMUS",
        client: ["LVMH","Chanel Beauty"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/jacquemus/",
        facebook: "https://www.facebook.com/JACQUEMUS",
        tiktok: "https://www.tiktok.com/@jacquemus",
        twitter: "https://twitter.com/jacquemus",
        youtube: "https://www.youtube.com/@jacquemus8588",
        linkedin: "https://www.linkedin.com/company/jacquemus/posts/?feedView=all",
        weibo: null,
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/63f59c06000000000f011034"
    },
    {
        name: "Miu Miu",
        client: ["Prada","Richemont"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/miumiu/",
        facebook: "https://www.facebook.com/MiuMiu/",
        tiktok: "https://www.tiktok.com/@miumiu?lang=en",
        twitter: "https://x.com/MIUMIUofficial",
        youtube: "https://www.youtube.com/@miumiu",
        linkedin: "https://www.linkedin.com/showcase/miumiu/posts/",
        weibo: "https://weibo.com/u/5813004880",
        Xiaohongshu: "https://xhslink.com/m/6957k0S4BKS"
    },
    {
        name: "Versace",
        client: ["Prada"],
        owner: ["Charlotte", "Alejandra"],
        instagram: "https://www.instagram.com/versace/",
        facebook: "https://www.facebook.com/versace",
        tiktok: "https://www.tiktok.com/@versace",
        twitter: "https://x.com/Versace?lang=en",
        youtube: "https://www.youtube.com/@Versace",
        linkedin: "https://www.linkedin.com/company/versace/",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Harry Winston",
        client: ["Richemont"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/harrywinston/",
        facebook: "https://www.facebook.com/HarryWinston",
        tiktok: null, 
        twitter: "https://x.com/harrywinston",
        youtube: "https://www.youtube.com/harrywinston",
        linkedin: "https://www.linkedin.com/company/harry-winston/posts/?feedView=all",
        weibo: "https://weibo.com/u/2510493882",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5d05d51300000000100116e5"
    },
    {
        name: "ZARA",
        client: ["Lacoste"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/zara/",
        facebook: "https://www.facebook.com/Zara",
        tiktok: "https://www.tiktok.com/@zara",
        twitter: "https://twitter.com/ZARA",
        youtube: "https://www.youtube.com/@zara",
        linkedin: "https://www.linkedin.com/company/zara-sa/posts/?feedView=all",
        weibo: "https://weibo.com/u/1744769622",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c2d0262000000000703cf19"
    },
    {
        name: "H&M",
        client: ["Lacoste"],
        owner: ["Charlotte"],
        instagram: [
            { url: "https://www.instagram.com/hm/", region: "Global", priority: true },
            { url: "https://www.instagram.com/hm_kids/", region: "Kids", Note: "Kids" },
            { url: "https://www.instagram.com/hm_man/", region: "Men", Note: "Men" }
        ],
        facebook: "https://www.facebook.com/francehm",
        tiktok: "https://www.tiktok.com/@hm",
        twitter: null,
        youtube: null,
        linkedin: "https://www.linkedin.com/company/h&m/",
        weibo: null,
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5bc0c6ed12c57b00017ea806"
    },
    {
        name: "TOMMY HILFIGER",
        client: ["Lacoste"],
        owner: ["Charlotte"],
        instagram: "https://www.instagram.com/tommyhilfiger/",
        facebook: "https://www.facebook.com/tommyhilfiger",
        tiktok: "https://www.tiktok.com/@tommyhilfiger",
        twitter: "https://twitter.com/TommyHilfiger",
        youtube: "https://www.youtube.com/@TommyHilfiger",
        linkedin: "https://www.linkedin.com/company/tommy-hilfiger/",
        weibo: "https://weibo.com/tommyhilfiger",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b89fe0478427c0001b60571"
    },
    {
        name: "Ole Henriksen",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/olehenriksen",
        facebook: "https://www.facebook.com/olehenriksen",
        tiktok: "https://www.tiktok.com/@olehenriksen",
        twitter: "https://twitter.com/olehenriksen",
        youtube: "https://www.youtube.com/@OleHenriksenSkincare",
        linkedin: null,
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "SK-II",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: [
            { url: "https://www.instagram.com/skii", region: "Global", priority: true },
            { url: "https://www.instagram.com/skii.usa/", region: "USA", priority: true},
            { url: "https://www.instagram.com/skii.india/", region: "India", priority: true},
            { url: "https://www.instagram.com/skii.jpn/", region: "Japan", priority: true}
        ],
        facebook: "https://www.facebook.com/Skiiglobal",
        tiktok: null,
        twitter: null,
        youtube: "https://www.youtube.com/skiiofficial",
        linkedin: null,
        weibo: "https://weibo.com/u/1892423355",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c7668240000000010013b27"
    },
    {
        name: "Sisley",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/sisleyparisofficial",
        facebook: "https://www.facebook.com/SisleyParisFrance",
        tiktok: "https://www.tiktok.com/@sisleyparisofficial",
        twitter: null,
        youtube: "https://www.youtube.com/@sisleyparisofficial",
        linkedin: "https://www.linkedin.com/company/sisley/posts/?feedView=all",
        weibo: "https://weibo.com/u/1901597310",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b20c6cf11be102c978c838f"
    },
    {
        name: "Marc Jacobs Beauty",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/marcjacobsfragrances",
        facebook: "https://www.facebook.com/MarcJacobsFragrances",
        tiktok: "https://www.tiktok.com/@marcjacobsfragrances",
        twitter: null,
        youtube: "https://www.youtube.com/@MarcJacobsBeauty",
        linkedin: null,
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Make Up For Ever",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/makeupforever",
        facebook: "https://www.facebook.com/makeupforeverfrance",
        tiktok: "https://www.tiktok.com/@makeupforever", 
        twitter: "https://twitter.com/makeupforever",
        youtube: "https://www.youtube.com/makeupforever",
        linkedin: "https://www.linkedin.com/company/make-up-for-ever/posts/?feedView=all",
        weibo: "https://weibo.com/u/1880845233",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b31b3cee8ac2b05b8d1f14e"
    },
    {
        name: "MAC",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: [
            { url: "https://www.instagram.com/maccosmetics", region: "Global", priority: true },
            { url: "https://www.instagram.com/maccosmeticsusa/", region: "USA", priority: true },
            { url: "https://www.instagram.com/maccosmeticsbrasil/", region: "Brazil", priority: true },
            { url: "https://www.instagram.com/maccosmeticsturkiye/", region: "Turkey",priority: true },
            { url: "https://www.instagram.com/maccosmeticsafrica/", region: "Africa", priority: true },
            { url: "https://www.instagram.com/maccosmeticsitalia/", region: "Italy", priority: true },
            { url: "https://www.instagram.com/maccosmeticsthailand/", region: "Thailand", priority: true },
            { url: "https://www.instagram.com/maccosmetics_es/", region: "Spain", priority: true },
            { url: "https://www.instagram.com/maccosmeticsanz/", region: "Australia", priority: true },
            { url: "https://www.instagram.com/maccosmeticsgreece/", region: "Greece", priority: true },
            { url: "https://www.instagram.com/maccosmeticsnl/", region:  "Netherlands", priority: true },
            { url: "https://www.instagram.com/maccosmeticssg/", region: "Singapore", priority: true },
            { url: "https://www.instagram.com/maccosmeticsco/", region: "Colombia", priority: true },
            { url: "https://www.instagram.com/maccosmeticstaiwan/", region: "Taiwan", priority: true },
            { url: "https://www.instagram.com/maccosmeticsindia/", region: "India", priority: true },
            { url: "https://www.instagram.com/maccosmeticsmalaysia/", region: "Malaysia", priority: true },
            { url: "https://www.instagram.com/maccosmeticsjapan/", region: "Japan", priority: true },
            { url: "https://www.instagram.com/maccosmeticsfrance/", region: "France", priority: true }
        ],
        facebook: "https://www.facebook.com/MACCosmeticsFranceOfficiel/",
        tiktok: "https://www.tiktok.com/@maccosmetics",
        twitter: null,
        youtube: "https://www.youtube.com/@maccosmetics",
        linkedin: "https://www.linkedin.com/company/mac-cosmetics/posts/?feedView=all",
        weibo: "https://weibo.com/u/2330209620",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5bc07f449c8603000108d433"
    },
    {
        name: "La Mer",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: [
            { url: "https://www.instagram.com/lamer", region: "Global", priority: true },
            { url: "https://www.instagram.com/lamerthailandofficial/", region: "Thailand", priority: true },
            { url: "https://www.instagram.com/lamermy/", region: "Malaysia", priority: true },
            { url: "https://www.instagram.com/lamerhkofficial/", region: "Hong Kong", priority: true },
            { url: "https://www.instagram.com/lamertaiwan/", region: "Taiwan", priority: true }
        ],
        facebook: "https://www.facebook.com/LaMerFrance/",
        tiktok: "https://www.tiktok.com/@lamer",
        twitter: null,
        youtube: "https://www.youtube.com/@LaMerOfficial",
        linkedin: null,
        weibo: "https://weibo.com/u/1689520375",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5baf432750dfbf000167c980"
    },
    {
        name: "Lancôme",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/lancomeofficial",
        facebook: "https://www.facebook.com/lancomefrance",
        tiktok: "https://www.tiktok.com/@lancome.official",
        twitter: null,
        youtube: "https://www.youtube.com/@LancomeInternational",
        linkedin: "https://www.linkedin.com/company/lanc%C3%B4me/posts/?feedView=all",
        weibo: "https://weibo.com/u/1742666164",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b9a0af31a43810001f90218"
    },
    {
        name: "L'Oréal Paris",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/lorealparis",
        facebook: "https://www.facebook.com/LOrealParisFrance/",
        tiktok: [
            { url: "https://www.tiktok.com/@lorealparis", region: "Global", priority: true },
            { url: "https://www.tiktok.com/@lorealparisid_shop", region: "Indonesia", priority: true }
        ],
        twitter: { url: "https://x.com/LOrealParisTH", Note: "Thailand" },
        youtube: "https://www.youtube.com/@OfficialLOrealParis/videos",
        linkedin: "https://www.linkedin.com/company/lor%C3%A9al/posts/?feedView=all",
        weibo: "https://weibo.com/u/1732472555",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/59c27d9d51783a6295c39e11"
    },
    {
        name: "Kiehl's",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: [
            { url: "https://www.instagram.com/kiehls", region: "Global", priority: true },
            { url: "https://www.instagram.com/kiehlsfrance/", region: "France", priority: true },
            { url: "https://www.instagram.com/kiehls.dach/", region: "DACH", priority: true },
            { url: "https://www.instagram.com/kiehlsitaly/", region: "Italy", priority: true },
            { url: "https://www.instagram.com/kiehlsczsk/", region: "Czechia", priority: true },
            { url: "https://www.instagram.com/kiehlsthailand/", region: "Thailand", priority: true },
            { url: "https://www.instagram.com/kiehlsphilippines/", region: "Philippines", priority: true },
            { url: "https://www.instagram.com/kiehlshk/", region: "Hong Kong", priority: true },
            { url: "https://www.instagram.com/kiehlsid/", region: "Indonesia", priority: true },
            { url: "https://www.instagram.com/kiehlsuki/", region: "UK", priority: true },
            { url: "https://www.instagram.com/kiehlsargentina/", region: "Argentina", priority: true },
            { url: "https://www.instagram.com/kiehlsturkiye/", region: "Turkey", priority: true },
            { url: "https://www.instagram.com/kiehls.rs/", region: "Serbia", priority: true },
            { url: "https://www.instagram.com/kiehlsspain/", region: "Spain", priority: true },
            { url: "https://www.instagram.com/mykiehls/", region: "Malaysia", priority: true },
            { url: "https://www.instagram.com/kiehls.hr/", region: "Croatia", priority: true },
            { url: "https://www.instagram.com/kiehlspolska/", region: "Poland", priority: true },
            { url: "https://www.instagram.com/kiehlsindia/", region: "India", priority: true },
            { url: "https://www.instagram.com/kiehlsromania/", region: "Romania", priority: true },
            { url: "https://www.instagram.com/kiehlsanz/", region: "Australia", priority: true },
            { url: "https://www.instagram.com/kiehlsmx/", region: "Mexico", priority: true }
        ],
        facebook: "https://www.facebook.com/KiehlsFrance/",
        tiktok: "https://www.tiktok.com/@kiehls",
        twitter: "https://twitter.com/kiehls",
        youtube: "https://www.youtube.com/@KiehlsNYC",
        linkedin: "https://www.linkedin.com/company/kiehl-s-since-1851/posts/?feedView=all",
        weibo: "https://weibo.com/u/1606713092",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/54e5dc12a46e966d4b41b6ea"
    },
    {
        name: "Kenzo Parfums",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/kenzoparfums",
        facebook: "https://www.facebook.com/kenzoparfums.france/",
        tiktok: null,
        twitter: null,
        youtube: "https://www.youtube.com/@kenzoparfums",
        linkedin: "https://www.linkedin.com/showcase/kenzo-parfums/posts/?feedView=all",
        weibo: "https://weibo.com/u/2279946754",
        Xiaohongshu: null
    },
    {
        name: "Guerlain",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/Guerlain",
        facebook: "https://www.facebook.com/Guerlain",
        tiktok: "https://www.tiktok.com/@Guerlain",
        twitter: "https://twitter.com/Guerlain",
        youtube: "https://www.youtube.com/@Guerlain",
        linkedin: "https://www.linkedin.com/company/guerlain/posts/?feedView=all",
        weibo: "https://weibo.com/u/1874305853",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5b84c6663ff3e5000112cbb3"
    },
    {
        name: "Givenchy Parfums",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/givenchybeauty",
        facebook: "https://www.facebook.com/givenchybeauty.france/",
        tiktok: "https://www.tiktok.com/@givenchybeauty",
        twitter: null,
        youtube: "https://www.youtube.com/@givenchybeauty",
        linkedin: "https://www.linkedin.com/showcase/parfums-givenchy/posts/?feedView=all",
        weibo: "https://weibo.com/u/1922825090",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c88c8a70000000016010d97"
    },
    {
        name: "Fresh",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: "https://www.instagram.com/freshbeauty",
        facebook: "https://www.facebook.com/FreshBeautyFR/",
        tiktok: "https://www.tiktok.com/@freshbeauty",
        twitter: null,
        youtube: "https://www.youtube.com/@freshbeauty",
        linkedin: "https://www.linkedin.com/company/freshbeauty/posts/?feedView=all",
        weibo: "https://weibo.com/u/2519667102",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5bebb8e7660b8b0001b0b72b"
    },
    {
        name: "Fenty Beauty",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: [
            { url: "https://www.instagram.com/fentybeauty", region: "Global", priority: true },
            { url: "https://www.instagram.com/fentybeautyme/", region: "Middle East", priority: true }
        ],
        facebook: "https://www.facebook.com/fentybeauty",
        tiktok: "https://www.tiktok.com/@fentybeauty",
        twitter: null,
        youtube: "https://www.youtube.com/@fentybeauty",
        linkedin: null,
        weibo: "https://weibo.com/u/7079600519",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5cd4e3f7000000001002868f"
    },
    {
        name: "Estée Lauder",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: [
            { url: "https://www.instagram.com/esteelauder", region: "Global", priority: true },
            { url: "https://www.instagram.com/esteelauder_sg/", region: "Singapore", priority: true },
            { url: "https://www.instagram.com/esteelaudergermany/", region: "Germany", priority: true },
            { url: "https://www.instagram.com/esteelauderuk/", region: "UK", priority: true },
            { url: "https://www.instagram.com/esteelauderturkiye/", region: "Turkey", priority: true },
            { url: "https://www.instagram.com/esteelauderid/", region: "Indonesia", priority: true },
            { url: "https://www.instagram.com/esteelaudertw/", region: "Taiwan", priority: true },
            { url: "https://www.instagram.com/esteelauderitalia/", region: "Italy", priority: true },
            { url: "https://www.instagram.com/esteelauderth/", region: "Thailand", priority: true },
            { url: "https://www.instagram.com/esteelauderkz/", region: "Kazakhstan", priority: true },
            { url: "https://www.instagram.com/esteelaudervn/", region: "Vietnam", priority: true },
            { url: "https://www.instagram.com/esteelaudercanada/", region: "Canada", priority: true },
            { url: "https://www.instagram.com/esteelauderisrael/", region: "Israel", priority: true },
            { url: "https://www.instagram.com/esteelauderswitzerland/", region: "Switzerland", priority: true },
            { url: "https://www.instagram.com/esteelaudermx/", region: "Mexico", priority: true },
            { url: "https://www.instagram.com/esteelaudermy/", region: "Malaysia", priority: true },
            { url: "https://www.instagram.com/esteelauderpanama/", region: "Panama", priority: true },
            { url: "https://www.instagram.com/esteelauderperu/", region: "Peru", priority: true },
            { url: "https://www.instagram.com/esteelauderjapan/", region: "Japan", priority: true },
            { url: "https://www.instagram.com/esteelauderin/", region: "India", priority: true },
            { url: "https://www.instagram.com/esteelaudersa/", region: "South Africa", priority: true },
            { url: "https://www.instagram.com/esteelauderkr/", region: "Korea", priority: true }
        ],
        facebook: "https://www.facebook.com/EsteeLauder/",
        tiktok: "https://www.tiktok.com/@esteelauder",
        twitter: null,
        youtube: "https://www.youtube.com/@esteelauder",
        linkedin: "https://www.linkedin.com/company/the-estee-lauder-companies-inc/posts/?feedView=all",
        weibo: "https://weibo.com/u/1793598474",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5c3eb2260000000007025621"
    },
    {
        name: "Clarins",
        client: ["LVMH"],
        owner: ["Jingyi"],
        instagram: [
            { url: "https://www.instagram.com/clarinsofficial", region: "Global", priority: true },
            { url: "https://www.instagram.com/clarinsfr/", region: "France", priority: true },
            { url: "https://www.instagram.com/clarinsgermany/", region: "Germany", priority: true },
            { url: "https://www.instagram.com/clarinsusa/", region: "USA", priority: true },
            { url: "https://www.instagram.com/clarinsth/", region: "Thailand", priority: true },
            { url: "https://www.instagram.com/clarinsid/", region: "Indonesia", priority: true },
            { url: "https://www.instagram.com/clarinsespana/", region: "Spain", priority: true },
            { url: "https://www.instagram.com/clarinsuk/", region: "UK", priority: true },
            { url: "https://www.instagram.com/clarinsitalia/", region: "Italy", priority: true },
            { url: "https://www.instagram.com/clarinsmiddleeast/", region: "Middle East", priority: true },
            { url: "https://www.instagram.com/clarinsmalaysia/", region: "Malaysia", priority: true },
            { url: "https://www.instagram.com/clarinsmx/", region: "Mexico", priority: true },
            { url: "https://www.instagram.com/clarinsbrasil/", region: "Brazil", priority: true },
            { url: "https://www.instagram.com/clarinsportugal/", region: "Portugal", priority: true },
            { url: "https://www.instagram.com/clarinsindia/", region: "India", priority: true },
            { url: "https://www.instagram.com/clarinsjp/", region: "Japan", priority: true },
            { url: "https://www.instagram.com/clarinssg/", region: "Singapore", priority: true },
            { url: "https://www.instagram.com/clarinscanada/", region: "Canada", priority: true },
            { url: "https://www.instagram.com/clarinsireland/", region: "Ireland", priority: true }
        ],
        facebook: "https://www.facebook.com/ClarinsFrance",
        tiktok: "https://www.tiktok.com/@clarinsofficial",
        twitter: "https://twitter.com/ClarinsFR",
        youtube: "https://www.youtube.com/clarinsofficial",
        linkedin: "https://www.linkedin.com/company/groupe-clarins/posts/?feedView=all",
        weibo: "https://weibo.com/u/1684832145",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/55ab65b7f5a263424545ef6b"
    },
    {
        name: "Tudor",
        client: ["LVMH", "Richemont"],
        owner: ["Jingyi"],
        official_web: "https://www.tudorwatch.com/fr",
        instagram: "https://www.instagram.com/tudorwatch/",
        facebook: "https://www.facebook.com/tudorwatch/",
        tiktok: "https://www.tiktok.com/@tudorwatch",
        twitter: null,
        youtube: "https://www.youtube.com/user/TudorWatch",
        linkedin: "https://www.linkedin.com/company/tudor-watch/posts/?feedView=all",
        weibo: "https://weibo.com/tudor",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/565aa4dc0cdc2b6461f8ba92"
    },
    {
        name: "Away",
        client: ["LVMH"],
        owner: ["Jingyi", "Salvatore"],
        instagram: "https://www.instagram.com/away/",
        facebook: "https://www.facebook.com/away/",
        tiktok: "https://www.tiktok.com/@away",
        twitter: "https://twitter.com/away",
        youtube: "https://www.youtube.com/@away-travel/videos",
        linkedin: "https://www.linkedin.com/company/away/posts/?feedView=all",
        weibo: null,
        Xiaohongshu: null
    },
    {
        name: "Balenciaga",
        client: ["LVMH", "Chanel Fashion"],
        owner: ["Jingyi","Salvatore"],
        instagram: "https://www.instagram.com/balenciaga/",
        facebook: "https://www.facebook.com/Balenciaga/",
        tiktok: "https://www.tiktok.com/@balenciaga",
        twitter: null,
        youtube: "https://www.youtube.com/@balenciaga",
        linkedin: "https://www.linkedin.com/company/balenciaga/posts/?feedView=all",
        weibo: "https://weibo.com/officialbalenciaga",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/56573321f53ee035c74b0ff2"
    },
    {
        name: "Burberry",
        client: ["LVMH"],
        owner: ["Jingyi", "Salvatore"],
        instagram: "https://www.instagram.com/burberry/",
        facebook: "https://www.facebook.com/Burberry/",
        tiktok: "https://www.tiktok.com/@burberry",
        twitter: [
            { url: "https://twitter.com/Burberry", region: "Global", priority: true },
            { url: "https://twitter.com/Burberry_Japan", region: "Japan", priority: true }
        ],
        youtube: "https://www.youtube.com/@Burberry",
        linkedin: "https://www.linkedin.com/company/burberry/posts/?feedView=all",
        weibo: "https://weibo.com/burberry",
        Xiaohongshu: "https://www.xiaohongshu.com/user/profile/5d4a832e000000001200b997"
    },
    {
        name: "Burberry Beauty",
        client: ["LVMH"],
        owner: ["Jingyi", "Salvatore"],
        instagram: "https://www.instagram.com/burberrybeauty/",
        facebook: null,
        tiktok: null,
        twitter: null,
        youtube: null,
        linkedin: null,
        weibo: null,
        Xiaohongshu: null
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

