import React from "react";
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
        <input {...input} {...props} />
      </div>
      {error && <span>{meta.error}</span>}
    </div>
  );
};
