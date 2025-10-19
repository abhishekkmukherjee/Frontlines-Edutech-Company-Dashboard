# Company Dashboard

A modern, responsive React application for displaying and filtering company data. Built with React.js, Tailwind CSS, and featuring advanced filtering, sorting, and pagination capabilities.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Advanced Filtering**: Filter companies by name, industry, and location
- **Smart Search**: Search across company names and descriptions
- **Flexible Sorting**: Sort by name, employee count, founding year, or industry
- **Multiple View Modes**: Switch between card and table layouts
- **Pagination**: Navigate through large datasets efficiently
- **Loading States**: Smooth loading animations and error handling
- **Modern UI**: Clean, professional interface built with Tailwind CSS

## 🛠️ Technologies Used

- **Frontend**: React.js (Hooks, Context API)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Data**: Mock API with simulated network delays
- **Icons**: Heroicons (via Tailwind)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd company-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CompanyCard.js   # Individual company card component
│   ├── CompanyTable.js  # Table view for companies
│   ├── FilterControls.js # Search and filter controls
│   ├── LoadingSpinner.js # Loading state component
│   └── Pagination.js    # Pagination component
├── data/
│   └── mockData.js      # Mock company data and constants
├── hooks/
│   └── useCompanies.js  # Custom hook for company data management
├── services/
│   └── api.js           # API service layer (mock implementation)
├── App.js               # Main application component
├── index.js             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎯 Key Features Explained

### Filtering System
- **Text Search**: Real-time search across company names and descriptions
- **Industry Filter**: Dropdown to filter by specific industries
- **Location Filter**: Dropdown to filter by company locations
- **Combined Filters**: All filters work together seamlessly

### Sorting Options
- Sort by company name (A-Z or Z-A)
- Sort by employee count (ascending/descending)
- Sort by founding year (oldest/newest first)
- Sort by industry (alphabetical)

### View Modes
- **Card View**: Visual cards showing company details with icons
- **Table View**: Compact table format for quick scanning

### Pagination
- Configurable items per page (currently set to 6)
- Smart pagination controls with page numbers
- Results summary showing current range
- Smooth scrolling to top on page change

## 🔧 Customization

### Adding New Companies
Edit `src/data/mockData.js` to add new companies to the dataset:

```javascript
{
  id: 13,
  name: "Your Company Name",
  industry: "Your Industry",
  location: "Your Location",
  employees: 1000,
  founded: 2020,
  revenue: "$10M",
  description: "Your company description"
}
```

### Modifying Filters
Update the `industries` and `locations` arrays in `mockData.js` to add new filter options.

### Styling Changes
The project uses Tailwind CSS. Modify component classes or extend the Tailwind configuration in `tailwind.config.js`.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: Single column layout, simplified navigation
- **Tablet**: Two-column card grid, condensed filters
- **Desktop**: Three-column card grid, full feature set

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📈 Performance Optimizations

- **useMemo**: Expensive filtering and sorting operations are memoized
- **Pagination**: Large datasets are split into manageable chunks
- **Lazy Loading**: Components render only visible items
- **Debounced Search**: Search input has built-in debouncing (can be added)

## 🔮 Future Enhancements

- [ ] Add company detail modal/page
- [ ] Implement infinite scroll option
- [ ] Add data export functionality (CSV/PDF)
- [ ] Include company logos and images
- [ ] Add advanced analytics dashboard
- [ ] Implement real backend API integration
- [ ] Add user authentication and favorites
- [ ] Include company comparison feature

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built with ❤️ by [Abhishek Mukherjee]

---

**Live Demo**: https://frontlines-edutech-company-dashboar.vercel.app/
**Repository**: https://github.com/abhishekkmukherjee/Frontlines-Edutech-Company-Dashboard

