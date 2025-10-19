import { useState, useEffect, useCallback } from 'react';
import { apiService } from '../services/api';

export const useCompanies = (filters = {}) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  const fetchCompanies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiService.getCompanies(filters);
      
      setCompanies(response.data);
      setTotal(response.total);
    } catch (err) {
      setError(err.message || 'Failed to fetch companies');
      setCompanies([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  const refetch = useCallback(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return {
    companies,
    loading,
    error,
    total,
    refetch
  };
};

export default useCompanies;