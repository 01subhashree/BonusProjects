/* eslint-disable react/prop-types */
export default function Button({ clickHandler, value }) {
  return (
    <>
      <button onClick={clickHandler}>{value}</button>
    </>
  );
}
