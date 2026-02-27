import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleSubmit() {
    if (query.trim() === "") return;
    onSearch(query.trim());
    setQuery("");
  }

  return (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSubmit()}
        placeholder="Buscar una ciudad..."
        disabled={isLoading}
      />
      <button onClick={handleSubmit} disabled={isLoading}>
        <Search size={16} />
        {isLoading ? "Buscando..." : "Buscar"}
      </button>
    </div>
  );
}