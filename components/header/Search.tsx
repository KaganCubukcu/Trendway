const Search = () => {
  return (
    <div className="flex-1 hidden md:flex">
      <input
        className="py-2 px-3 border-none outline-none flex flex-1"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className="p-2 text-sm border border-transparent">Ara</button>
    </div>
  );
};

export default Search;
