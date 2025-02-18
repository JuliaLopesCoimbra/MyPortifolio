"use client";

export default function Header({ showHeader }) {
  return (
    <div
      className={`z-20 fixed top-0 left-0 w-full  text-white pr-4 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
      <a href="/">
    <img src="/img/logo.png" alt="Logo" className="w-30 h-20 cursor-pointer" />
</a>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="hover:underline bg-black bg-opacity-10 rounded p-2 hover:bg-gray-500 hover:text-white transition duration-300"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="/home"
                className="hover:underline bg-black bg-opacity-10 rounded p-2 hover:bg-gray-500 hover:text-white transition duration-300"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:underline bg-black bg-opacity-10 rounded p-2 hover:bg-gray-500 hover:text-white transition duration-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
