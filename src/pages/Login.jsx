import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {
    setUser,
    loading,
    setLoading,
    signIn,
    resetPassword,
    signInWithGoogle,
    signInWithFacebook,
  } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from.pathname || '/'
  
  const emailRef = useRef()
    //handleSubmit
    const handleSubmit = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, {replace: true});
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.message);
          setLoading(false);
        });
    };

  //handle google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from, {replace: true});
      })
      .catch((err) => {
        setLoading(false)
        console.log(err.message);
        toast.error(err.message);
      });
  };

  //handle facebook login
  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then(result => {
        setUser(result.user)
      console.log(result);
      navigate(from, {replace: true});
      })
      .catch(err => {
      setLoading(false)
      console.log(err.message);
      toast.error(err.message)
    })
  }

    //handle reset password
    const handleReset = () => {
      const email = emailRef.current.value;
      resetPassword(email)
        .then(() => {
          toast.success("Check Your Email For Reset!!");
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.message);
          setLoading(false);
        });
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Please Login!! to enter your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter your Password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary w-full rounded-md py-3 text-white"
            >
              {loading ? <ImSpinner9 className="m-auto animate-spin" size={24}/> : 'Login'}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button onClick={handleReset} className="text-xs hover:underline hover:text-red-500 hover:font-bold text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-stone-400"></div>
        </div>
        <div className="flex justify-center items-center space-x-2 border m-3 p-2 gap-2">
          <button onClick={handleGoogleSignIn}>
            <FcGoogle size={30} />
          </button>
          <button onClick={handleFacebookLogin}>
             <GrFacebook size={30} />
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Dont have an account?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-red-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
