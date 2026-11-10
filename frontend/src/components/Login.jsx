const Login = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-base-content/70 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
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
              <div className="flex justify-between items-center mb-2">
                <label className="label p-0">
                  <span className="label-text">Password</span>
                </label>
              </div>

              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn btn-primary w-full">Sign In</button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="link link-primary font-semibold">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
