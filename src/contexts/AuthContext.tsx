import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
  resetPassword: (email: string) => void;
  getUsers: () => Promise<User[]>;
  updateUserRole: (userId: string, newRole: 'user' | 'admin') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string) => {
    // Simulating API call
    if (email === 'admin@example.com' && password === 'password') {
      const user: User = { id: '1', name: 'Admin User', email, role: 'admin' };
      localStorage.setItem('token', 'fake-jwt-token');
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const register = (name: string, email: string, password: string) => {
    // Simulating API call
    const user: User = { id: Date.now().toString(), name, email, role: 'user' };
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    setIsAuthenticated(true);
  };

  const resetPassword = (email: string) => {
    // Simulating API call
    alert(`Password reset link sent to ${email}`);
  };

  const getUsers = async (): Promise<User[]> => {
    // Simulating API call
    return [
      { id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
      { id: '2', name: 'Regular User', email: 'user@example.com', role: 'user' },
    ];
  };

  const updateUserRole = async (userId: string, newRole: 'user' | 'admin'): Promise<void> => {
    // Simulating API call
    console.log(`Updated user ${userId} role to ${newRole}`);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register, resetPassword, getUsers, updateUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};