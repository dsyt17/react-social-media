import React from "react";
import { Field } from "redux-form";
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

export const Textarea = ({ input, meta, ...props }) => {
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

export const Input = ({ input, meta, ...props }) => {
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

export const createField = (
  palceholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        palceholder={palceholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />{" "}
      {text}
    </div>
  );
};
