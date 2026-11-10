const SignUp = () => {
  return (
    <div className="min-h-6 bg-base-200 flex items-center justify-center px-6">
      <div className="card w-full max-w-sm h-auto bg-base-100 shadow-2xl">
        <div className="card-body">
          {/* Logo / Brand */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p className="text-base-content/70 mt-2">
              Join us and start your journey today
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn btn-primary w-full mt-2">
              Create Account
            </button>
          </form>

          {/* Divider
          <div className="divider">OR</div>

          {/* Social Login */}
          {/* <div className="space-y-3">
            <button className="btn btn-outline w-full">
              Continue with Google
            </button>

            <button className="btn btn-outline w-full">
              Continue with GitHub
            </button>
          </div> */} 

          {/* Login Link */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="link link-primary font-semibold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;