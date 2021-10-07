import { getSession, signIn } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";

const Login = () => {
  const router = useRouter();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const usernameValue = usernameRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();

    if (usernameValue && passwordValue) {
      signIn("login", {
        token: "123",
        redirect: false
      });
      router.push(`/`);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form action="#" method="post" onSubmit={handleFormSubmit}>
        <label>
          Username
          <input ref={usernameRef} type="text" name="username" placeholder="Max123" />
        </label>
        <label>
          Password
          <input ref={passwordRef} type="password" name="password" placeholder="123456" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export async function getServerSideProps({req}) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
  return {
    props: {}
  }
}

export default Login;