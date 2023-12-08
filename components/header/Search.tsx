const Search = () => {
  return (
    <div className="flex-1 hidden md:flex">
      <input
        className="py-2 px-3 border-none outline-none flex flex-1 rounded-l"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className="p-2 text-sm bg-early-dawn-700 rounded-r text-early-dawn-100">
        Ara
      </button>
    </div>
  );
};

export default Search;
