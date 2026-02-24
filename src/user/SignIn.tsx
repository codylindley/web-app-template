import { createSignal } from 'solid-js';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';
import AuthClient from './AuthClient.tsx';

// Panda CSS class for form inputs — shared between text inputs and the submit button
const inputClass = css({
  _dark: { borderColor: 'pink.400', color: 'pink.400' },
  border: '1px solid',
  borderColor: 'pink.700',
  borderRadius: 'sm',
  color: 'pink.700',
  fontFamily: 'mono',
  padding: '2',
});

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

// Sign-in form using SolidJS createSignal for controlled inputs and Better Auth for authentication
export default function SignIn() {
  // Controlled input signals — in SolidJS, read with email(), write with setEmail(value)
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  // Submit handler — calls Better Auth email/password sign-in
  const signIn = async (event: SubmitEvent) => {
    event.preventDefault();

    await AuthClient.signIn.email(
      {
        email: email(),
        password: password(),
      },
      {
        onError: () => {},
        onRequest: () => {},
        onSuccess: () => {},
      },
    );
  };

  return (
    <div class={flex({ direction: 'column', gap: '4' })}>
      <h2
        class={css({
          fontSize: 'lg',
          fontWeight: 'bold',
        })}
      >
        Sign In{' '}
        <span class={css({ fontSize: 'sm', fontWeight: 'normal' })}>
          (See{' '}
          <a href="https://github.com/nkzw-tech/server-template" rel="noreferrer" target="_blank">
            <code class={codeClass}>nkzw-tech/server-template</code>
          </a>
          )
        </span>
      </h2>
      <form class={flex({ gap: '4' })} onSubmit={signIn}>
        <input
          class={inputClass}
          onInput={(e) => setEmail(e.currentTarget.value)}
          placeholder="email"
          type="email"
          value={email()}
        />
        <input
          class={inputClass}
          onInput={(e) => setPassword(e.currentTarget.value)}
          placeholder="password"
          type="password"
          value={password()}
        />
        <button class={inputClass} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
