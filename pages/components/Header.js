export default function Header({ onSearch }) {
  return (
    <header className="header">
      <h1>DANCINGBOTS</h1>
      <input
        aria-label="Search Input"
        placeholder="Search Bots"
        type="search"
        spellCheck="false"
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </header>
  );
}
