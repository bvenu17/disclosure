const axios = require('axios');

const getAllNewsArticles = async (str) => {
    let allArticles = [];
    const url = 'https://newsapi.org/v2/top-headlines?country=us&'+str+'apiKey=df3e49ce0dbe4aa1ac58cf1f606f85f4';
    const res = await axios.get(url);

    for(let i=1;i<res.data.articles.length;i++) {
        allArticles.push(res.data.articles[i]);
    }
    return allArticles;
}

const getFirstNewsArticle = async (str) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&'+str+'apiKey=df3e49ce0dbe4aa1ac58cf1f606f85f4';
    const res = await axios.get(url);
    return res.data.articles[0];
}

const getAllSearchedArticles = async (str) => {
    let allArticles = [];
    const url = 'https://newsapi.org/v2/everything?'+str+'apiKey=df3e49ce0dbe4aa1ac58cf1f606f85f4';
    const res = await axios.get(url);

    for(let i=1;i<res.data.articles.length;i++) {
        allArticles.push(res.data.articles[i]);
    }
    return allArticles;
}

const getSearchedArticle = async (str) => {
    const url = 'https://newsapi.org/v2/everything?'+str+'apiKey=df3e49ce0dbe4aa1ac58cf1f606f85f4';
    const res = await axios.get(url);
    return res.data.articles[0];
}


module.exports = {
    getAllNewsArticles,
    getFirstNewsArticle,
    getSearchedArticle,
    getAllSearchedArticles
}