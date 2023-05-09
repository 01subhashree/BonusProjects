/* eslint-disable react/prop-types */
export default function Button({ clickHandler, value }) {
  return (
    <>
      <button style={{ backgroundColor: "salmon" }} onClick={clickHandler}>
        {value}
      </button>
    </>
  );
}
