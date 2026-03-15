import React, { createContext, useContext, useState, useCallback } from 'react';
import { Employee, mockEmployees } from '@/data/employees';

interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (emp: Omit<Employee, 'id' | 'dataCadastro'>) => { success: boolean; error?: string };
  updateEmployee: (id: string, emp: Omit<Employee, 'id' | 'dataCadastro'>) => { success: boolean; error?: string };
  deleteEmployee: (id: string) => void;
  getEmployee: (id: string) => Employee | undefined;
}

const EmployeeContext = createContext<EmployeeContextType | null>(null);

export const useEmployees = () => {
  const ctx = useContext(EmployeeContext);
  if (!ctx) throw new Error('useEmployees must be within EmployeeProvider');
  return ctx;
};

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);

  const checkDuplicate = (email: string, cpf: string, excludeId?: string) => {
    const dupEmail = employees.find(e => e.email === email && e.id !== excludeId);
    if (dupEmail) return 'Já existe um funcionário com este e-mail';
    const dupCpf = employees.find(e => e.cpf === cpf && e.id !== excludeId);
    if (dupCpf) return 'Já existe um funcionário com este CPF';
    return null;
  };

  const addEmployee = useCallback((emp: Omit<Employee, 'id' | 'dataCadastro'>) => {
    const error = checkDuplicate(emp.email, emp.cpf);
    if (error) return { success: false, error };
    const newEmp: Employee = {
      ...emp,
      id: String(Date.now()),
      dataCadastro: new Date().toISOString().split('T')[0],
    };
    setEmployees(prev => [newEmp, ...prev]);
    return { success: true };
  }, [employees]);

  const updateEmployee = useCallback((id: string, emp: Omit<Employee, 'id' | 'dataCadastro'>) => {
    const error = checkDuplicate(emp.email, emp.cpf, id);
    if (error) return { success: false, error };
    setEmployees(prev => prev.map(e => e.id === id ? { ...e, ...emp } : e));
    return { success: true };
  }, [employees]);

  const deleteEmployee = useCallback((id: string) => {
    setEmployees(prev => prev.filter(e => e.id !== id));
  }, []);

  const getEmployee = useCallback((id: string) => {
    return employees.find(e => e.id === id);
  }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee, getEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
