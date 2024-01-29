export function RefreshButton() {
  return (
    <button
      onClick$={() => {
        console.log("click");
      }}
    >
      Refresh
    </button>
  );
}
