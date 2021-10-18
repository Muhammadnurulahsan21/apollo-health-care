import React, { createContext } from "react";
import useFireBase from "../UseFirebase/UseFireBase";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const {children} = props;
  const allCOntexts = useFireBase();
  return <AuthContext.Provider value={allCOntexts}>
      {children}
      </AuthContext.Provider>;
};

export default AuthProvider;
