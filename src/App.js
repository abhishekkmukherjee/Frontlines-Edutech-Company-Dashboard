import React, { useState, useEffect, useMemo } from 'react';
import { companies } from './data/mockData';
import FilterControls from './components/FilterControls';
import CompanyCard from './components/CompanyCard';
import CompanyTable from './components/CompanyTable';
import LoadingSpinner from './components/LoadingSpinner';
import Pagination from './components/Pagination';

function App() {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);
  
  const itemsPerPage = 6;

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort companies
  const filteredAndSortedCompanies = useMemo(() => {
    let filtered = companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustry === 'All Industries' || company.industry === selectedIndustry;
      const matchesLocation = selectedLocation === 'All Locations' || company.location === selectedLocation;
      
      return matchesSearch && matchesIndustry && matchesLocation;
    });

    // Sort companies
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedIndustry, selectedLocation, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedCompanies.length / itemsPerPage);
  const paginatedCompanies = filteredAndSortedCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedIndustry, selectedLocation, sortBy, sortOrder]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <svg style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
            Something went wrong
          </h3>
          <p style={{ color: '#6b7280' }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="flex flex-between flex-center">
            <div>
              <h1 className="gradient-text" style={{ fontSize: '32px', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>
                Company Dashboard
              </h1>
              <p style={{ color: '#6b7280', margin: '8px 0 0 0', fontSize: '16px', fontWeight: '400' }}>
                Discover and explore companies across industries
              </p>
            </div>
            
            {/* View Toggle */}
            <div className="flex flex-center" style={{ gap: '12px' }}>
              <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>View:</span>
              <div className="flex" style={{ background: 'rgba(255, 255, 255, 0.5)', borderRadius: '16px', padding: '4px' }}>
                <button
                  onClick={() => setViewMode('cards')}
                  className={viewMode === 'cards' ? 'btn btn-primary' : 'btn'}
                  style={{ 
                    borderRadius: '12px', 
                    margin: 0,
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  <svg style={{ width: '16px', height: '16px', marginRight: '6px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
                  </svg>
                  Cards
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={viewMode === 'table' ? 'btn btn-primary' : 'btn'}
                  style={{ 
                    borderRadius: '12px', 
                    margin: 0,
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  <svg style={{ width: '16px', height: '16px', marginRight: '6px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18m-9 8h9" />
                  </svg>
                  Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        {/* Filter Controls */}
        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {/* Results Summary */}
        <div style={{ marginBottom: '25px' }}>
          <p style={{ color: '#6b7280' }}>
            Showing {filteredAndSortedCompanies.length} companies
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedIndustry !== 'All Industries' && ` in ${selectedIndustry}`}
            {selectedLocation !== 'All Locations' && ` located in ${selectedLocation}`}
          </p>
        </div>

        {/* Loading State */}
        {isLoading && <LoadingSpinner />}

        {/* No Results */}
        {!isLoading && filteredAndSortedCompanies.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <svg style={{ width: '64px', height: '64px', margin: '0 auto', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              No companies found
            </h3>
            <p style={{ color: '#6b7280', fontSize: '16px' }}>Try adjusting your search criteria or filters to find more results.</p>
          </div>
        )}

        {/* Companies Display */}
        {!isLoading && filteredAndSortedCompanies.length > 0 && (
          <>
            {viewMode === 'cards' ? (
              <div className="grid grid-3" style={{ marginBottom: '30px' }}>
                {paginatedCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            ) : (
              <div style={{ marginBottom: '30px' }}>
                <CompanyTable companies={paginatedCompanies} />
              </div>
            )}

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={filteredAndSortedCompanies.length}
              itemsPerPage={itemsPerPage}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
        marginTop: '48px',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.05)'
      }}>
        <div className="container" style={{ padding: '24px' }}>
          <p style={{ textAlign: 'center', color: '#6b7280', margin: 0, fontSize: '14px' }}>
            © 2025 Company Dashboard. Built with React and modern CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
