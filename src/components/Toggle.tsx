export function Toggle(props: { children: any }) {
  return (
    <div>
      <button
        onClick$={() => {
          console.log("click");
        }}
      >
        Toggle
      </button>
      <div>{props.children}</div>
    </div>
  );
}
