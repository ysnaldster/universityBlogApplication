import { db } from "../firebase/firebase-config"

const loadingArticles = async () => {
    const getArticles = await db.collection(`/articles/`).get();
    const articles = [];
    getArticles.forEach(p => {
        articles.push({
            id: p.id,
            ...p.data()
        })
    })
    return articles;
}

export default loadingArticles