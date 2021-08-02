import { db } from "../firebase/firebase-config"

const loadingWeare = async () => {
    const getWeare = await db.collection(`/weare/`).get();
    const weare = [];
    getWeare.forEach(p => {
        weare.push({
            id: p.id,
            ...p.data()
        })
    })
    return weare;
}

export default loadingWeare