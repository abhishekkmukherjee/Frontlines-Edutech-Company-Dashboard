import React from 'react';

const CompanyTable = ({ companies }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Employees</th>
            <th>Revenue</th>
            <th>Founded</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>
                <div>
                  <div style={{ fontWeight: '500', color: '#111827' }}>{company.name}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {company.description}
                  </div>
                </div>
              </td>
              <td>
                <span className="badge">
                  {company.industry}
                </span>
              </td>
              <td style={{ color: '#111827' }}>
                {company.location}
              </td>
              <td style={{ color: '#111827' }}>
                {company.employees.toLocaleString()}
              </td>
              <td style={{ color: '#111827' }}>
                {company.revenue}
              </td>
              <td style={{ color: '#111827' }}>
                {company.founded}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;