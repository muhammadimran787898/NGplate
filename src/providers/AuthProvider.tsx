import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setUser, setLoading, RootState } from "@/store"
import { apiClient } from "@/api/client"

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          // Replace with actual user info endpoint
          const response = await apiClient.get("/api/auth/me");
          dispatch(setUser(response.data));
        } catch (error) {
          console.error("Auth initialization failed:", error);
          dispatch(setUser(null)); // Clear if token is invalid or request fails
        } finally {
          dispatch(setLoading(false));
        }
      } else {
        dispatch(setLoading(false));
      }
    };

    fetchUser();
  }, [token, dispatch]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
