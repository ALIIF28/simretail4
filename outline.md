# Website Structure Outline - Sistem Informasi Manajemen Retail

## File Structure

```
/mnt/okcomputer/output/
├── index.html              # Landing page utama
├── kasir.html             # Dashboard Kasir
├── gudang.html            # Dashboard Staf Gudang
├── admin.html             # Dashboard Admin
├── owner.html             # Dashboard Owner
├── main.js                # Main JavaScript file
├── resources/             # Assets folder
│   ├── hero-bg.jpg        # Hero background image
│   ├── kasir-icon.png     # Icon untuk role kasir
│   ├── gudang-icon.png    # Icon untuk role gudang
│   ├── admin-icon.png     # Icon untuk role admin
│   ├── owner-icon.png     # Icon untuk role owner
│   └── product-*.jpg      # Product images untuk demo
├── interaction.md         # UX design documentation
├── design.md             # Visual design system
└── outline.md            # This file
```

## Page Breakdown

### 1. index.html - Landing Page

#### Sections:
1. **Navigation Bar**
   - Logo/Site title
   - Navigation menu
   - Role switcher dropdown

2. **Hero Section**
   - Animated background (P5.js)
   - Main heading: "Sistem Informasi Manajemen Retail"
   - Subtitle dengan masalah yang dipecahkan
   - CTA button untuk explore roles

3. **Problem Statement Section**
   - 3 masalah utama dengan visual cards
   - Animasi scroll reveal
   - Statistics dengan counter animation

4. **Solution Overview Section**
   - 4 role cards (Kasir, Gudang, Admin, Owner)
   - Hover effects dengan 3D tilt
   - Click untuk navigate ke dashboard masing-masing

5. **Benefits Section**
   - 3 manfaat utama sistem
   - Icon dengan animasi
   - Progress bars untuk visualisasi

6. **Footer**
   - Informasi kelompok
   - Copyright
   - Social links

#### Interactive Elements:
- Role selection cards dengan hover dan click
- Animated statistics counters
- Smooth scroll navigation
- Background particle animation

### 2. kasir.html - Dashboard Kasir

#### Layout:
1. **Header**
   - Role indicator
   - User info
   - Back to home button

2. **POS Interface**
   - Product search bar dengan barcode simulation
   - Product grid (15+ items)
   - Shopping cart dengan add/remove functionality
   - Payment calculator

3. **Transaction History**
   - Recent transactions list
   - Receipt generator
   - Print simulation

#### Interactive Features:
- Product search dengan real-time filtering
- Add to cart dengan physics animation (Matter.js)
- Quantity adjustment dengan smooth transitions
- Payment process simulation
- Receipt modal dengan print animation

### 3. gudang.html - Dashboard Staf Gudang

#### Layout:
1. **Header**
   - Role indicator dan navigation

2. **Stock Management Panel**
   - Stock entry form
   - Product inventory grid
   - Stock level indicators (color-coded)

3. **Barcode Generator**
   - Input form untuk produk baru
   - Barcode generation
   - Print preview

4. **Stock History**
   - Timeline pergerakan stok
   - Filter by date/product
   - Export functionality

#### Interactive Features:
- Form validation dengan real-time feedback
- Stock level visual indicators
- Barcode generator dengan canvas
- Stock history timeline dengan filtering
- Low stock alerts dengan notification

### 4. admin.html - Dashboard Admin

#### Layout:
1. **Header**
   - Role indicator dan admin tools

2. **Transaction Verification**
   - Data table dengan sorting/filtering
   - Status indicators
   - Bulk action buttons

3. **User Management**
   - User list dengan permissions
   - Add/edit user forms
   - Role assignment

4. **System Logs**
   - Audit trail
   - Activity monitoring
   - Error tracking

5. **Report Generation**
   - Report templates
   - Date range picker
   - Export options

#### Interactive Features:
- Data table dengan advanced filtering
- Modal dialogs untuk user management
- Real-time activity monitoring
- Report generation dengan progress indicators
- Bulk operations dengan confirmation

### 5. owner.html - Dashboard Owner

#### Layout:
1. **Header**
   - Role indicator dan executive summary

2. **Analytics Dashboard**
   - Sales performance charts (ECharts.js)
   - Revenue metrics
   - Profit analysis

3. **Inventory Overview**
   - Stock levels visualization
   - Product performance
   - Category breakdown

4. **Decision Support**
   - Restock recommendations
   - Performance alerts
   - Trend analysis

5. **KPI Dashboard**
   - Key performance indicators
   - Goal tracking
   - Comparative analysis

#### Interactive Features:
- Interactive charts dengan drill-down
- Real-time data updates (simulated)
- Date range filtering
- Comparative analysis tools
- Export functionality untuk reports

## JavaScript Functionality (main.js)

### Core Functions:
1. **Navigation**
   - Smooth page transitions
   - Role switching
   - History management

2. **Animations**
   - Page load animations
   - Scroll reveal effects
   - Hover interactions
   - Loading states

3. **Data Management**
   - Mock data generation
   - Local storage untuk session
   - State management untuk dashboards

4. **Interactive Components**
   - Modal management
   - Form validation
   - Chart updates
   - Notification system

5. **Utility Functions**
   - Date formatting
   - Number formatting
   - Currency conversion
   - Barcode generation

## Content Requirements

### Mock Data:
- 50+ produk dengan berbagai kategori
- Transaction history (100+ records)
- User database (20+ users)
- Stock movement logs
- Sales analytics data

### Images:
- Hero background image
- Role icons (4 pieces)
- Product images (50+ pieces)
- User avatars
- Background textures

### Text Content:
- Product descriptions
- User names dan roles
- Transaction details
- System notifications
- Help text dan tooltips

## Technical Specifications

### Libraries:
1. **Anime.js** - Animations dan transitions
2. **Matter.js** - Physics simulations
3. **P5.js** - Creative coding effects
4. **ECharts.js** - Data visualization
5. **Pixi.js** - High-performance graphics
6. **Splide.js** - Carousels dan sliders
7. **Shader-park** - Background effects

### Responsive Design:
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1200px
- Flexible grid system
- Touch-friendly interactions

### Performance:
- Optimized images
- Lazy loading untuk heavy components
- Efficient animation loops
- Minimal DOM manipulation

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features dengan polyfills jika diperlukan
- CSS Grid dan Flexbox
- Progressive enhancement

## Development Workflow

1. **Phase 1**: Landing page dengan basic interactions
2. **Phase 2**: Individual dashboard pages
3. **Phase 3**: Cross-page navigation dan state management
4. **Phase 4**: Advanced interactions dan animations
5. **Phase 5**: Testing, optimization, dan polish

## Quality Assurance

### Testing Checklist:
- All navigation links berfungsi
- Interactive elements responsive
- Animations smooth dan performant
- Data visualization accurate
- Mobile responsiveness
- Accessibility compliance
- Cross-browser compatibility

### Performance Metrics:
- Page load time < 3 seconds
- Animation frame rate > 60fps
- Responsive design berfungsi di semua breakpoints
- No JavaScript errors di console