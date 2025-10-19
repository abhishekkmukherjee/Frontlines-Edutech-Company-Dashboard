import React from 'react';
import { industries, locations } from '../data/mockData';

const FilterControls = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedIndustry, 
  setSelectedIndustry, 
  selectedLocation, 
  setSelectedLocation,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder
}) => {
  return (
    <div className="card">
      <h2 className="gradient-text" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>
        Filter & Search Companies
      </h2>
      
      <div className="filters">
        {/* Search Input */}
        <div style={{ gridColumn: 'span 2' }}>
          <label htmlFor="search" style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Search Companies
          </label>
          <div style={{ position: 'relative' }}>
            <svg 
              style={{ 
                position: 'absolute', 
                left: '16px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                width: '18px', 
                height: '18px', 
                color: '#9ca3af' 
              }} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              id="search"
              placeholder="Search by company name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input"
              style={{ paddingLeft: '48px' }}
            />
          </div>
        </div>

        {/* Industry Filter */}
        <div>
          <label htmlFor="industry" style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Industry
          </label>
          <select
            id="industry"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="select"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label htmlFor="location" style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Location
          </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="select"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Controls */}
        <div>
          <label htmlFor="sort" style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Sort By
          </label>
          <div className="flex" style={{ gap: '8px' }}>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select"
              style={{ flex: 1 }}
            >
              <option value="name">Name</option>
              <option value="employees">Employees</option>
              <option value="founded">Founded</option>
              <option value="industry">Industry</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="btn"
              title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
              style={{ 
                minWidth: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {sortOrder === 'asc' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;