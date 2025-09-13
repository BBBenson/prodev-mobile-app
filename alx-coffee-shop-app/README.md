# alx-coffee-shop-app

A React Native mobile app built with Expo, Expo Router, and NativeWind (TailwindCSS), inspired by the Coffee Shop Figma UI kit.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npx expo start
   ```
3. Scan the QR code with Expo Go on your device.

## Folder Structure
- `app/` — Screens (Expo Router)
- `components/` — Reusable UI components
- `assets/` — Images and icons (add from Figma)
- `constants/` — Static data/config
- `styles/` — Custom styles
- `interfaces/` — TypeScript types

## Configuration
- `tailwind.config.js` — TailwindCSS config for NativeWind
- `babel.config.js` — Babel config with NativeWind plugin
- `nativewind-env.d.ts` — NativeWind TypeScript support
- `metro.config.js` — Metro bundler config

## Assets
Download and add images/icons from the Figma design to the `assets/` directory.

## License
MIT
