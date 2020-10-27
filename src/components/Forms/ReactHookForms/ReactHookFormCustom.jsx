import React from "react";
import Input from '../FormComponents/Input/input';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import { basicValidationSchema } from '../validation/basicFormValidator';
import { PasswordStrength, validatePassword } from '../PasswordStrength/PasswordStrength';
import './ReactHookForm.scss';

function ReactHookCustom() {
  const {
    control,
    register,
    errors,
    handleSubmit,
    getValues,
    formState,
    reset,
  } = useForm({
    resolver: yupResolver(basicValidationSchema)
  });

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Username*/}
        <div className="form-group">
          <Controller
              control={control}
              defaultValue=""
              name="userName"
              register={register}
              render={props => (
                <Input 
                    className="form-control"
                    required
                    label="User Name"
                    placeholder="Insert Username"
                    name="userName"
                    type="text"
                    onChange={e => props.onChange(e)}
                    value={props.value}
                    errorMessage={errors.userName?.message}
                />
              )}
            />
        </div>

        {/*Email*/}
        <div className="form-group">
          <Controller
              control={control}
              defaultValue=""
              name="email"
              register={register}
              render={props => (
                <Input 
                    className="form-control"
                    required
                    label="Email"
                    placeholder="Insert Email"
                    name="email"
                    type="text"
                    onChange={e => props.onChange(e)}
                    value={props.value}
                    errorMessage={errors.email?.message}
                />
              )}
            />
        </div>

        {/*Password*/}
        <div className="form-group">
          <Controller
              control={control}
              defaultValue=""
              name="password"
              register={register}
              render={props => (
                <Input 
                    className="form-control"
                    required
                    label="Password"
                    placeholder="Insert Password"
                    name="password"
                    type="text"
                    onChange={validatePassword}
                    value={props.value}
                    errorMessage={errors.password?.message}
                />
              )}
            />
        </div>

        {/*Confirm Password*/}
        <div className="form-group">
          <Controller
              control={control}
              defaultValue=""
              name="confirmPassword"
              register={register}
              render={props => (
                <Input 
                    className="form-control"
                    required
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="text"
                    onChange={e => props.onChange(e)}
                    value={props.value}
                    errorMessage={errors.confirmPassword?.message}
                />
              )}
            />
        </div>

        <PasswordStrength />

        <div className="form-btn-group">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReactHookCustom;