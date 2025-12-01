# Copilot Instructions for NOVA

## Project Overview

- **NOVA** is a cross-platform (iOS, Android, Web) app built with [Expo](https://expo.dev), [React Native](https://reactnative.dev/), and [expo-router](https://docs.expo.dev/router/introduction/).
- Uses **file-based routing**: screens are organized in the `app/` directory. Folder names in parentheses (e.g., `(tabs)`, `(auth)`, `(main)`) define navigation groups.
- The project supports light/dark themes, custom icons, and platform-specific UI via hooks and components in `hooks/`, `constants/`, and `components/`.

## Key Architecture & Patterns

- **Navigation**: Managed by `expo-router` using file/folder structure in `app/`. Layouts (`_layout.tsx`) define navigation containers (e.g., tabs, stacks).
- **Theming**: Use `useThemeColor`, `useColorScheme`, and `Colors` from `constants/theme.ts` for consistent color and font handling.
- **Platform-specific code**: Use `.ios.tsx`/`.tsx` file extensions for platform overrides (see `components/ui/icon-symbol.ios.tsx`).
- **Context**: App-wide state (e.g., auth) is managed via React context in `src/context/` (see `AuthContext.tsx`).
- **Reusable UI**: Place shared UI in `components/` and `components/ui/`.

## Developer Workflows

- **Install dependencies**: `npm install`
- **Start development server**: `npx expo start`
- **Platform targets**:
  - Android: `npm run android`
  - iOS: `npm run ios`
  - Web: `npm run web`
- **Linting**: `npm run lint` (uses `eslint-config-expo`)
- **Reset project**: `npm run reset-project` (moves current app to `app-example/` and creates a fresh `app/`)

## Project Conventions

- **Absolute imports**: Use `@/` as the root alias (see `tsconfig.json`).
- **Component theming**: Always use `ThemedText` and `ThemedView` for text and view elements to support dark/light mode.
- **Navigation**: Use `Link` from `expo-router` for navigation and deep linking.
- **Haptics**: Use `HapticTab` for tab bar buttons to provide haptic feedback on iOS.
- **Image assets**: Place in `assets/images/` and use `@2x`, `@3x` suffixes for density.
- **No custom test setup**: No test scripts or frameworks are present by default.

## Integration & Dependencies

- **Major dependencies**: `expo`, `expo-router`, `react-native`, `react-native-reanimated`, `expo-symbols`, `@expo/vector-icons`, `axios`.
- **Platform icons**: Use `IconSymbol` for cross-platform icon rendering (maps SF Symbols to Material Icons on non-iOS).
- **Web browser integration**: Use `ExternalLink` to open links in-app or in the system browser as appropriate.

## Examples

- **Tab navigation**: `app/(tabs)/_layout.tsx`
- **Auth flow**: `app/(auth)/*.tsx`
- **Themed component**: `components/themed-text.tsx`, `components/themed-view.tsx`
- **Parallax/animation**: `components/parallax-scroll-view.tsx`, `components/hello-wave.tsx`

## VS Code Setup

- Recommended extension: `expo.vscode-expo-tools` (see `.vscode/extensions.json`)
- Auto-format and organize imports on save (see `.vscode/settings.json`)

---

For more, see [Expo docs](https://docs.expo.dev/) and comments in `README.md` and code files.
