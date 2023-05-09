/* eslint-disable react/prop-types */
export default function FormInput({ changeHandler, placeholder, type }) {
  return (
    <input
      style={{
        width: "18rem",
        height: "2rem",
        border: "1px solid",
        padding: "1.3rem",
        fontSize: "1rem",
      }}
      placeholder={placeholder}
      type={type}
      onChange={changeHandler}
    ></input>
  );
}
