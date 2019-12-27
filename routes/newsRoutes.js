const express = require("express");
const router = express.Router();
const newsData = require('../data/news');

router.get('/', async (req,res) => {
    try {
        const getNews = await newsData.getAllNewsArticles("");
        const firstNews = await newsData.getFirstNewsArticle("");
        
        return res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/sports', async (req,res) => {
    try {
        const getNews = await newsData.getAllNewsArticles("category=sports&");
        const firstNews = await newsData.getFirstNewsArticle("category=sports&");
        
        return res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/business', async (req,res) => {
    try {
        const getNews = await newsData.getAllNewsArticles("category=business&");
        const firstNews = await newsData.getFirstNewsArticle("category=business&");

        
        return res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/technology', async (req,res) => {
    try {
        const getNews = await newsData.getAllNewsArticles("category=technology&");
        const firstNews = await newsData.getFirstNewsArticle("category=technology&");

        
        return res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/health', async (req,res) => {
    try {
        const getNews = await newsData.getAllNewsArticles("category=health&");
        const firstNews = await newsData.getFirstNewsArticle("category=health&");

        
        return res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/entertainment', async (req,res) => {
    try {
        const getNews = await newsData.getAllNewsArticles("category=entertainment&");
        const firstNews = await newsData.getFirstNewsArticle("category=entertainment&");

       
        return res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.get('/science', async (req,res) => {
    try {
        const getNews = await newsData.getAllNewsArticles("category=science&");
        const firstNews = await newsData.getFirstNewsArticle("category=science&");

        
        return res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})

router.post('/search', async (req,res) => {
    try {
        let x = req.body.searchQuery;
        let str = "q=" + req.body.searchQuery+"&";
        console.log("hello"+x+" "+str);
        const getNews = await newsData.getAllSearchedArticles(str);
        const firstNews = await newsData.getSearchedArticle(str);

        
        return  res.status(200).render("home", {title:"News", getNews,firstNews});
    } catch (e) {
        res.status(404).json({error: e.message});
    }
})




module.exports = router;