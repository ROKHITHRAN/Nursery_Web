import React, { useEffect, useState } from "react";
import {collection, collectionGroup, doc, onSnapshot} from 'firebase/firestore'
import { db } from "../../firebase/config";
export const UseFectch = (fbcollection)=>{
    const[documents,setDocuments] = useState([]);
    useEffect(
        ()=>{
                let collectionRef = collection(db,fbcollection);
                const unsub = onSnapshot(collectionRef,(snapshot) =>{     //helps to subscribe to db
                    let results = [];
                    snapshot.docs.forEach((doc)=>{
                        results.push({...doc.data(),id:doc.id})
                    })
                    setDocuments(results);
                })
                return ()=> unsub();                                      //clean up - unsubscribe
        },[fbcollection]
    )
    return documents;
}