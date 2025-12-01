import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { ReactNode } from "react";

type AuthContextType = {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
