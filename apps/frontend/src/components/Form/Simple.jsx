import { useForm } from "react-hook-form";
import "./form.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <label className="hook__text">Message</label>
      <input
        type="message"
        className="hook__input"
        {...register("message", { required: true })}
      />
      {errors.message && (
        <p className="hook__error">Field is required</p>
      )}

      <button className="hook__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
