import { useEffect, useRef } from "react";

const Navbar = ({ search, setSearch }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={ref}
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
