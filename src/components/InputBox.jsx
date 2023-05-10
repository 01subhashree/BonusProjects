/* eslint-disable react/prop-types */
export default function FormInput({ changeHandler, placeholder, type }) {
  return (
    <input
      style={{
        width: "12rem",
        height: "1rem",
        border: "1px solid",
        padding: "1.3rem",
        fontSize: "1rem",
        color: "black",
      }}
      placeholder={placeholder}
      type={type}
      onChange={changeHandler}
    ></input>
  );
}
