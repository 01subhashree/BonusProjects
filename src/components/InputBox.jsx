/* eslint-disable react/prop-types */
export default function FormInput({ changeHandler, placeholder, type }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={changeHandler}
    ></input>
  );
}
