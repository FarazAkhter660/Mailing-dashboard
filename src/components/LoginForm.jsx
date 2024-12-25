import { useForm } from "react-hook-form";

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="p-4 bg-gray-800 text-white rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label className="block text-sm mb-2">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-2 bg-gray-700 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Password</label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-2 bg-gray-700 rounded-lg"
          required
        />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-600 rounded-lg">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
