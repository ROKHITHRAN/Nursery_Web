import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react"
import { db } from "../../firebase/config";

export const UseFireStore=(fbcollection)=>{
    
    const[document,setDocument] = useState(null);
    const[error,setError] = useState(null);
    
    const collectionRef = collection(db,fbcollection);
    const AddDocument = async(docu)=>{
        try{
            const doc = await addDoc(collectionRef,docu);
            setDocument(doc);
            console.log(doc.id);
        }
        catch(err)
        {
            setError(err.message);
        }
    }
    const DeleteDocument = async(id)=>{
        const documentRef = doc(db,fbcollection,id);
        try{
            await deleteDoc(documentRef);
        }
        catch(err)
        {
            setError(err.message);
        }
    }
    return {AddDocument,document,error,DeleteDocument};
}