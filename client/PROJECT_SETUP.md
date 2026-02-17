# Positiev Web - Project Setup

## ✅ Completed Setup

### Technology Stack
- **Next.js 14.2.35** - React framework with App Router
- **React 18** - Latest React version
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing

### Design System

#### Colors
- **Primary**: `#f48c79` (Coral/Salmon)
- **Complementary**: `#79c4f4` (Sky Blue)
- **Light Primary**: `#f7b5a6`
- **Dark Primary**: `#d65a3d`
- **Grays**: Light (#f0f0f0), Medium (#d1d1d1), Dark (#333333)

#### Typography
- **Body Font**: Poppins (weights: 400, 500, 600, 700)
- **Heading Font**: Playfair Display (weights: 400, 500, 600, 700)
- **Responsive Font Sizes**: Using clamp() for fluid typography
  - Hero: 4.77rem - 6rem
  - Section: 3.81rem - 4rem
  - Features: 3.05rem - 5rem
  - Title: 2.44rem - 2.8rem
  - And more...

### Project Structure
```
client/
├── app/
│   ├── layout.jsx          # Root layout with fonts
│   ├── page.jsx            # Home page
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── Button.jsx          # Reusable button component
│   └── Container.jsx       # Container wrapper component
├── public/                 # Static assets
├── .eslintrc.json         # ESLint configuration
├── tailwind.config.js     # Tailwind customization
├── postcss.config.js      # PostCSS configuration
├── next.config.js         # Next.js configuration
├── jsconfig.json          # Path aliases (@/*)
└── package.json           # Dependencies

```

### Key Features
1. **ESLint Integration** - Automatic code linting
2. **Path Aliases** - Use `@/` for imports (e.g., `@/components/Button`)
3. **Responsive Typography** - Fluid font sizes using clamp()
4. **Custom Color Palette** - Based on primary color #f48c79
5. **Google Fonts** - Optimized loading with next/font
6. **Component Library** - Started with Button and Container components

### Available Scripts
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Getting Started
1. Navigate to the client folder:
   ```bash
   cd client
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

### Next Steps
- Add more components to `/components`
- Create additional pages in `/app`
- Add static assets to `/public`
- Install additional dependencies as needed
- Configure environment variables (.env.local)

### Reference Project
Based on: `D:\Work\WebFudge\Clients\Plantozone\plantozone-web\client`

---

**Note**: All dependencies are installed and ESLint is configured and verified with no errors.
