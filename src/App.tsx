import { A, Route, Router } from '@solidjs/router';
import { Show } from 'solid-js';
import { css } from '../styled-system/css';
import { flex } from '../styled-system/patterns';
import AuthClient from './user/AuthClient.tsx';
import SignIn from './user/SignIn.tsx';

// Panda CSS css() returns a static class string — safe to define at module scope outside components
const linkClass = css({
  _dark: { color: 'pink.400' },
  _hover: { textDecoration: 'none' },
  color: 'pink.700',
  textDecoration: 'underline',
});

// Thin wrapper around @solidjs/router's <A> component with consistent link styling
const Link = (props: { children: unknown; class?: string; href: string; target?: string }) => (
  <A
    class={`${linkClass}${props.class ? ` ${props.class}` : ''}`}
    href={props.href}
    target={props.target}
  >
    {props.children as string}
  </A>
);

const codeClass = css({
  _dark: { bg: 'neutral.700', borderColor: 'pink.400', color: 'pink.400' },
  bg: 'neutral.100',
  border: '1px solid',
  borderColor: 'pink.700',
  borderRadius: 'sm',
  color: 'pink.700',
  fontFamily: 'mono',
  paddingX: '1',
  paddingY: '1',
});

// Card layout class — includes dark mode variant via the _dark condition
const cardClass = css({
  _dark: {
    bg: 'neutral.800',
    borderColor: 'neutral.600',
    shadow: 'none',
  },
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: '2xl',
  margin: '6',
  marginX: 'auto',
  padding: '4',
  shadow: 'md',
  width: '2/3',
});

// Home route — session is a SolidJS signal accessor; call session() to read the current value
const Home = () => {
  const session = AuthClient.useSession();

  return (
    <div class={cardClass}>
      <div class={flex({ align: 'center', gap: '4', justify: 'space-between' })}>
        <h1 class={css({ fontSize: '4xl' })}>Welcome</h1>
      </div>
      <p class={css({ marginY: '4' })}>
        <em>Minimal, fast, sensible defaults.</em>
      </p>
      <p class={css({ marginY: '4' })}>
        Using{' '}
        <Link href="https://vitejs.dev/" target="_blank">
          Vite
        </Link>
        ,{' '}
        <Link href="https://www.solidjs.com/" target="_blank">
          SolidJS
        </Link>
        ,{' '}
        <Link href="https://www.typescriptlang.org/" target="_blank">
          TypeScript
        </Link>
        ,{' '}
        <Link href="https://panda-css.com/" target="_blank">
          Panda CSS
        </Link>
        , and{' '}
        <Link href="https://www.better-auth.com/" target="_blank">
          Better Auth
        </Link>
        .
      </p>
      <p class={css({ marginY: '4' })}>
        Change <code class={codeClass}>src/App.tsx</code> for live updates.
      </p>
      <div>
        <Show fallback={<SignIn />} when={session()?.data?.user}>
          {(user) => (
            <div class={flex({ direction: 'column', gap: '3' })}>
              <div>Hello, {user().name}</div>
              <div>
                <a
                  class={css({
                    _dark: { color: 'pink.400' },
                    color: 'pink.700',
                    cursor: 'pointer',
                  })}
                  onClick={() => AuthClient.signOut()}
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </Show>
      </div>
      <p class={css({ marginY: '4' })}>
        <Link href="/about">About this template</Link>
      </p>
    </div>
  );
};

// About route — simple static page
const About = () => (
  <div
    class={css({
      _dark: {
        bg: 'neutral.800',
        borderColor: 'neutral.600',
        shadow: 'none',
      },
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: 'sm',
      margin: '6',
      marginX: 'auto',
      padding: '4',
      shadow: 'md',
      width: '2/3',
    })}
  >
    <h1 class={css({ fontSize: '4xl' })}>About</h1>
    <p class={css({ marginY: '4' })}>🤘</p>
    <p class={css({ marginY: '4' })}>
      <Link href="/">Home</Link>
    </p>
  </div>
);

// Root component — sets up client-side routing with @solidjs/router
export default function App() {
  return (
    <Router>
      <Route component={Home} path="/" />
      <Route component={About} path="/about" />
    </Router>
  );
}
