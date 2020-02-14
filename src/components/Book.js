import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
 
export default function Book() {
 const [bookData, setBookData] = useState({});
 let { isbn } = useParams();
 
 useEffect(() => {
   const getData = async () => {
     const result = await axios.get(
       `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`
     );
 
     const { details } = result.data[`ISBN:${isbn}`];
    //  let tempVariable = result.data[`ISBN:${isbn}`];
    //  tempVariable = tempVariable.details;
    //  let details = tempVariable;
    //  console.log(details);
     setBookData(details);
   };
   getData();
 }, [isbn]);
 
 return (
   <Fragment>
     {bookData && (
       <>
         <h1>{bookData.title}</h1>
       </>
     )}
   </Fragment>
 );
}
