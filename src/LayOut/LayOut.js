/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import BeforeLoginRoutes from "../Routes/BeforeLoginRoutes";
import ClientRoutes from "../Routes/ClientRoutes";
import TalentRoutes from "./../Routes/TalentRoutes";
import Loader from "./../Components/SharedComponents/Loader/Loader";

export default function LayOut() {
  const [usr, setUsr] = useState(null);
  const [usrType, setUsrType] = useState("");

  const getUserType = (collectionName) => {
    if (collectionName) {
      db
        .collection(collectionName)
        .doc(auth.currentUser.uid)
        .get()
        .then(res => {
          setUsrType(res.data()?.userType)
        })
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUsr(user);
        getUserType(user.displayName);
      }
    });
  }, [])


  // return (
  //   <>
  //     {console.log(usrType)}
  //     {
  //       usr
  //         ? usrType === 'talent'
  //           ? <TalentRoutes />
  //           : usrType === 'client'
  //             ? <ClientRoutes />
  //             : <TalentRoutes />
  //         : <BeforeLoginRoutes />

  //     }
  //   </>
  // );


  if (usr) {
    if (usrType === "talent") {
      return <TalentRoutes />
    } else if (usrType === "client") {
      return <ClientRoutes />
    } else {
      return <Loader />
    }
  } else {
    return <BeforeLoginRoutes />
  }
}
