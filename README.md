# NightShield 🛡️

**AI Surveillance That Protects Venues Before It's Too Late**

NightShield is a cutting-edge AI surveillance platform designed to provide real-time threat detection and security protection for venues including nightclubs, casinos, event venues, and more. The platform leverages advanced artificial intelligence to identify potential security threats before incidents occur, ensuring the safety of patrons and staff.

## 🚀 Features

- **Real-time AI Surveillance**: Advanced threat detection using computer vision and machine learning
- **Proactive Security**: Identifies potential incidents before they happen
- **Multi-venue Support**: Designed for nightclubs, casinos, event venues, and entertainment spaces
- **Modern UI/UX**: Beautiful, responsive interface built with Next.js and Tailwind CSS
- **Performance Optimized**: Built with Turbopack for lightning-fast development and builds
- **Mobile Responsive**: Optimized experience across all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4 with React 19
- **Styling**: Tailwind CSS 4 with custom typography system
- **Animations**: Framer Motion, GSAP, AOS (Animate On Scroll)
- **Icons**: Tabler Icons, Lucide React, Iconify
- **Fonts**: Inter, Montserrat, Oswald, DM Sans (Google Fonts)
- **Build Tool**: Turbopack (Next.js built-in)
- **Language**: TypeScript
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm (version 8.0 or higher)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nightsheild.git
   cd nightsheild
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run lint:fonts` - Check for font usage consistency
- `npm run lint:all` - Run all linting checks

## 🏗️ Project Structure

```
nightsheild/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── about/             # About page
│   │   ├── features/          # Features page
│   │   ├── pricing/           # Pricing page
│   │   └── ...                # Other pages
│   ├── components/            # React components
│   │   ├── Layout/            # Layout components (Navbar, Footer)
│   │   ├── NightShield/       # Feature-specific components
│   │   └── ui/                # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   └── utils/                 # Helper utilities
├── public/                    # Static assets
│   ├── images/               # Image assets
│   └── favicon.png          # Site favicon
├── scripts/                  # Build and utility scripts
└── ...                      # Configuration files
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Typography**: Custom font scale with Inter, Montserrat, Oswald, and DM Sans
- **Colors**: Dark theme with red accent colors for security/vigilance
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The application can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configurations:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Next.js Configuration

The project includes optimized Next.js configuration in `next.config.ts`:
- Image optimization enabled
- Custom image sizes and formats
- ESLint configuration for builds

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Tabler Icons](https://tabler-icons.io/) and [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**NightShield** - Protecting venues with the power of AI surveillance technology.
