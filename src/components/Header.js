import React from "react";
const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out!");
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="bg-[rgba(234,250,237,1)] px-4 py-2 flex items-center justify-between sticky top-0 z-50">
        <div className="font-bold">
          <img
            src="logo.jpeg"
            alt="Logo"
            width={200}
            height={200}
            className=""
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>
      <hr className="text-[rgba(28,94,85,255)] border-2 border-[rgba(28,94,85,255)]" />
    </div>
  );
};

export default Header;
