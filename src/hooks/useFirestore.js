import { useState } from 'react';
import { useEffect } from 'react';
import {projectFirestore,projectStorage} from '../firebase/config';

const useFirestore = collection => {
    const [docs, setdocs] = useState([]);
    useEffect(() => {
        let documents = [];
        const ref = projectFirestore.collection(collection)
        .orderBy('createAt','desc')
        .onSnapshot(snap=>{
            snap.forEach(doc=>{
                documents.push({id:doc.id,...doc.data()});
            })
            setdocs(documents);
        })
    }, [collection])

    return docs;
}
export default useFirestore;
