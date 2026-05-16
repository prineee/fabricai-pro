import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react"
  
  import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth"
  
  import type { User } from "firebase/auth"
  
  import { auth } from "../lib/firebase"
  
  type AuthContextType = {
    user: User | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
  }
  
  const AuthContext = createContext<AuthContextType | null>(null)
  
  export function AuthProvider(props: any) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      })
  
      return () => unsubscribe()
    }, [])
  
    async function login(email: string, password: string) {
      await signInWithEmailAndPassword(auth, email, password)
    }
  
    async function logout() {
      await signOut(auth)
    }
  
    return (
      <AuthContext.Provider
        value={{
          user,
          loading,
          login,
          logout,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    )
  }
  
  export function useAuth() {
    const context = useContext(AuthContext)
  
    if (!context) {
      throw new Error("useAuth must be used inside AuthProvider")
    }
  
    return context
  }