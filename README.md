# Starter Kit for Vite, SolidJS, TypeScript, Panda CSS and Node.js ESM

_Minimal, sensible defaults, fast._

<img src="https://github.com/user-attachments/assets/9a19ed15-1fcd-447e-bcd9-b1d9f7902555"  width="49%" />
<img src="https://github.com/user-attachments/assets/6ec7a315-5650-4d46-aedf-82b7c16f52ae"  width="49%" />

## Technologies

- <a href="https://vitejs.dev/">Vite</a>
- <a href="https://www.solidjs.com/">SolidJS</a>
- <a href="https://panda-css.com/">Panda CSS</a> for styling
- <a href="https://github.com/nkzw-tech/fbtee">fbtee</a> for i18n
- <a href="https://www.better-auth.com/">Better Auth</a> for authentication (SolidJS integration)
- <a href="https://github.com/solidjs/solid-router">@solidjs/router</a> for routing
- <a href="https://www.typescriptlang.org">TypeScript</a>
- <a href="https://pnpm.io/">pnpm</a>

Check out the [`nkzw-tech/server-template`](https://github.com/nkzw-tech/server-template) for a GraphQL based server with Pothos and Prisma, or the [`nkzw-tech/expo-app-template`](https://github.com/nkzw-tech/expo-app-template) for building mobile apps.

## Setup

- Press the "Use this template" button on the top of this repository's GitHub page.
- Run `pnpm install` (or `npm install` if you don't use `pnpm`). This automatically runs `panda codegen` via the `prepare` script, generating the `styled-system/` directory.
- `pnpm dev` for development.
- Use `pnpm test` to run tests.
- `pnpm build` for production builds.
- Run `pnpm panda:codegen` manually to regenerate styles after editing `panda.config.ts`.

_Note: You can install `pnpm` via `homebrew` on macOS: `brew install pnpm`._

_Note: To manually regenerate the Panda CSS output, run `pnpm panda:codegen`._

## Panda CSS

Styles are defined using the `css()` utility and pattern helpers (e.g., `flex()`) imported from `../styled-system/css` and `../styled-system/patterns`.

- The `styled-system/` directory is **auto-generated** — do not edit it manually. Run `pnpm panda:codegen` to regenerate it.
- The Panda config lives in `panda.config.ts` with `jsxFramework: 'solid'`.
- Global CSS cascade layers are declared in `src/App.css`.

## SolidJS Notes (coming from React)

- SolidJS does **not** use a Virtual DOM — reactivity is fine-grained and based on signals.
- Use `createSignal`, `createMemo`, `createEffect` instead of `useState`, `useMemo`, `useEffect`.
- Use `<Show>` for conditional rendering and `<For>` for list rendering instead of ternaries and `.map()`.
- There is **no React Compiler** — SolidJS does not need one.

## Protips for the fastest Developer Experience

- Use [`npm-run-all2`](https://github.com/bcomnes/npm-run-all2) to parallelize local test runs.
- Use `oxlint` for linting and `oxfmt` for formatting.
- Use `swc` with `ts-node` for fast node scripts with [ESM](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/). See below ↓

## I'm not using Better Auth

You can simply remove everything related to Better Auth in the `src/user` directory.

## Run node scripts with ESM and TypeScript, fast.

Create a `script.ts` file, run `chmod x script.ts` and execute it via `./script.ts`.

```
#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('Your code goes here.');
```

Use this to restart your scripts instantly when a file changes:

```
#!/usr/bin/env NODE_ENV=development node --watch --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('This processes instantly restarts when a file changes.');
```
