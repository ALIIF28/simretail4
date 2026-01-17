# Design System - Sistem Informasi Manajemen Retail

## Design Philosophy

### Visual Language
- **Modern Minimalism**: Clean, uncluttered interface yang fokus pada fungsionalitas
- **Professional Warmth**: Menggabungkan efisiensi bisnis dengan kehangatan human-centered design
- **Data-Driven Clarity**: Visual hierarchy yang memudahkan pembacaan data dan informasi
- **Intuitive Navigation**: User flow yang natural dan predictable

### Color Palette

#### Primary Colors (Warm & Energetic)
- **Primary Orange**: `#FF6B35` - Untuk CTA buttons, highlights, active states
- **Secondary Coral**: `#FF8E53` - Untuk secondary actions, hover states
- **Accent Gold**: `#FFB366` - Untuk success states, positive indicators

#### Neutral Colors (Clean & Professional)
- **Deep Charcoal**: `#2C3E50` - Primary text, headers
- **Medium Gray**: `#7F8C8D` - Secondary text, labels
- **Light Gray**: `#ECF0F1` - Background sections, dividers
- **Pure White**: `#FFFFFF` - Main background, cards

#### Status Colors (Semantic)
- **Success Green**: `#27AE60` - Completed transactions, positive stock
- **Warning Amber**: `#F39C12` - Low stock, pending verification
- **Error Red**: `#E74C3C` - Errors, critical alerts
- **Info Blue**: `#3498DB` - Information, links

### Typography

#### Font Pairing
- **Display Font**: `'Poppins', sans-serif` - Untuk headers, titles, navigation
- **Body Font**: `'Inter', sans-serif` - Untuk body text, data, labels
- **Monospace**: `'JetBrains Mono', monospace` - Untuk kode, angka, data

#### Type Scale
- **Hero Title**: 3.5rem (56px) - Bold
- **Page Title**: 2.5rem (40px) - SemiBold
- **Section Title**: 1.875rem (30px) - SemiBold
- **Card Title**: 1.25rem (20px) - Medium
- **Body Large**: 1.125rem (18px) - Regular
- **Body Regular**: 1rem (16px) - Regular
- **Body Small**: 0.875rem (14px) - Regular
- **Caption**: 0.75rem (12px) - Medium

### Layout & Spacing

#### Grid System
- **Container Max Width**: 1200px
- **Breakpoints**: 
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+

#### Spacing Scale (8px base unit)
- **xs**: 4px - Tight spacing
- **sm**: 8px - Small spacing
- **md**: 16px - Medium spacing
- **lg**: 24px - Large spacing
- **xl**: 32px - Extra large spacing
- **2xl**: 48px - Section spacing
- **3xl**: 64px - Major section spacing

## Visual Effects & Animations

### Background Effects
- **Primary**: Animated gradient flow dengan warna-warna cerah
- **Secondary**: Particle system untuk dashboard backgrounds
- **Texture**: Subtle noise overlay untuk depth

### Animation Library Usage

#### Anime.js Effects
- **Card Hover**: Scale (1.05x) + shadow expansion
- **Button Click**: Ripple effect dari center
- **Page Transitions**: Fade + slide (300ms ease-out)
- **Data Loading**: Stagger animation untuk list items

#### Matter.js Physics
- **Product Drop**: Animasi barang masuk ke cart
- **Stock Movement**: Physics-based transitions
- **Success Celebrations**: Particle burst effects

#### P5.js Creative Coding
- **Hero Background**: Generative pattern animation
- **Data Visualization**: Custom chart animations
- **Interactive Elements**: Mouse-following effects

#### ECharts.js Visualizations
- **Sales Charts**: Line dan bar charts dengan smooth transitions
- **Stock Visualization**: Heatmap untuk inventory levels
- **Performance Metrics**: Gauge charts untuk KPIs
- **Interactive Tooltips**: Rich data overlays

### Hover Effects
- **Cards**: 3D tilt (5deg) + depth shadow
- **Buttons**: Color shift + scale (1.02x)
- **Images**: Ken Burns effect (zoom + pan)
- **Data Points**: Glow effect + tooltip

### Scroll Animations
- **Reveal Animation**: Fade-in + translateY (16px)
- **Stagger Delay**: 100ms antara elements
- **Trigger Point**: 60% viewport height
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

## Component Design

### Cards
- **Border Radius**: 12px
- **Shadow**: 0 4px 6px rgba(0, 0, 0, 0.1)
- **Padding**: 24px
- **Background**: White dengan subtle gradient

### Buttons
- **Primary**: Orange background, white text, 8px padding
- **Secondary**: White background, orange border, orange text
- **Ghost**: Transparent background, orange text
- **Border Radius**: 8px untuk semua variants

### Forms
- **Input Fields**: 12px border radius, subtle inner shadow
- **Labels**: Medium weight, medium gray color
- **Focus States**: Orange border, glow effect
- **Validation**: Inline messages dengan status colors

### Data Tables
- **Header**: SemiBold weight, medium gray background
- **Rows**: Alternating white dan light gray
- **Hover**: Subtle orange highlight
- **Borders**: 1px solid light gray

## Imagery & Icons

### Image Treatment
- **Hero Images**: High contrast, warm tones
- **Product Images**: Clean white backgrounds
- **Background Images**: Subtle, low opacity overlays
- **User Avatars**: Circular dengan colored borders

### Icon Style
- **Style**: Outline icons dengan 2px stroke
- **Size**: 24px standard, 32px untuk large
- **Color**: Inherits text color atau status colors
- **Animation**: Subtle hover scale effects

## Responsive Behavior

### Mobile Adaptations
- **Navigation**: Bottom tab bar
- **Cards**: Full width dengan reduced padding
- **Typography**: Reduced scale (80% dari desktop)
- **Touch Targets**: Minimum 44px untuk semua interactive elements

### Tablet Adaptations
- **Layout**: Collapsible sidebar navigation
- **Cards**: 2-column grid
- **Charts**: Simplified views
- **Spacing**: Reduced vertical spacing

## Accessibility Standards

### Color Contrast
- **Text on White**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Clear focus indicators

### Motion Preferences
- **Reduced Motion**: Alternatives untuk users dengan motion sensitivity
- **Essential Animations**: Loading states, feedback animations tetap dijaga
- **Optional Decorations**: Background animations dapat di-disable

## Brand Elements

### Logo Treatment
- **Primary Logo**: Wordmark dengan icon
- **Icon Mark**: Simplified untuk small applications
- **Color Variations**: Full color, mono, reversed

### Voice & Tone
- **Professional**: Tetap formal untuk business context
- **Approachable**: Language yang friendly dan helpful
- **Clear**: Direct communication tanpa jargon
- **Encouraging**: Positive reinforcement untuk user actions