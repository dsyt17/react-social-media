import React from "react";
import { Field, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";
import classses from "./FormsControls.module.scss";

// export const FormControl = ({ input, meta, ...props }) => {
//   const error = meta.touched && meta.error;
//   return (
//     <div
//       className={classses.form_control + " " + (error ? classses.error : "")}
//     >
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {error && <span>{meta.error}</span>}
//     </div>
//   );
// }

export const Textarea: React.FC<WrappedFieldProps> = ({
  input,
  meta,
  ...props
}) => {
  const error = meta.touched && meta.error;
  return (
    <div
      className={classses.form_control + " " + (error ? classses.error : "")}
    >
      <div>
        <textarea {...input} {...props} />
      </div>
      {error && <span>{meta.error}</span>}
    </div>
  );
};

export const Input: React.FC<WrappedFieldProps> = ({
  input,
  meta,
  ...props
}) => {
  const error = meta.touched && meta.error;
  return (
    <div
      className={classses.form_control + " " + (error ? classses.error : "")}
    >
      <div>
        <input className={classses.input} {...input} {...props} />
      </div>
      {error && <span>{meta.error}</span>}
    </div>
  );
};

export function createField<FormKeysType extends string>(
  placeholder: string | undefined,
  name: FormKeysType,
  validators: Array<FieldValidatorType>,
  component: string | React.FC<WrappedFieldProps> | React.Component,
  type = "text",
  props = {},
  text = ""
) {
  return (
    <div>
      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
}
