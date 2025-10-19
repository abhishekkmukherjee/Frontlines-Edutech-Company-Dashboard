import { companies } from '../data/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  // Get all companies with optional filters
  async getCompanies(filters = {}) {
    await delay(500); // Simulate network delay
    
    let filteredCompanies = [...companies];
    
    // Apply filters
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredCompanies = filteredCompanies.filter(company =>
        company.name.toLowerCase().includes(searchTerm) ||
        company.description.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.industry && filters.industry !== 'All Industries') {
      filteredCompanies = filteredCompanies.filter(company =>
        company.industry === filters.industry
      );
    }
    
    if (filters.location && filters.location !== 'All Locations') {
      filteredCompanies = filteredCompanies.filter(company =>
        company.location === filters.location
      );
    }
    
    // Apply sorting
    if (filters.sortBy) {
      filteredCompanies.sort((a, b) => {
        let aValue = a[filters.sortBy];
        let bValue = b[filters.sortBy];
        
        if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        
        if (filters.sortOrder === 'desc') {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        } else {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }
      });
    }
    
    return {
      data: filteredCompanies,
      total: filteredCompanies.length,
      success: true
    };
  },

  // Get a single company by ID
  async getCompanyById(id) {
    await delay(300);
    
    const company = companies.find(c => c.id === parseInt(id));
    
    if (!company) {
      throw new Error('Company not found');
    }
    
    return {
      data: company,
      success: true
    };
  },

  // Get industry statistics
  async getIndustryStats() {
    await delay(400);
    
    const stats = companies.reduce((acc, company) => {
      if (!acc[company.industry]) {
        acc[company.industry] = {
          count: 0,
          totalEmployees: 0,
          companies: []
        };
      }
      
      acc[company.industry].count++;
      acc[company.industry].totalEmployees += company.employees;
      acc[company.industry].companies.push(company.name);
      
      return acc;
    }, {});
    
    return {
      data: stats,
      success: true
    };
  }
};

export default apiService;