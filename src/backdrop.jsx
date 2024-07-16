/* eslint-disable react/prop-types */
export default function Backdrop({ toggleBackdrop }) {
  return <aside className="backdrop" onClick={toggleBackdrop}></aside>;
}
