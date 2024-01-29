import { component$, sync$ } from "@builder.io/qwik";

export const RefreshButton = component$((props: any) => {
  const loading$ = sync$((_evt: Event, target: HTMLButtonElement) => {
    const span = target.querySelector("span");
    target.disabled = span!.hidden;
    span!.hidden = !span!.hidden;
  });
  return (
    <button onClick$={[loading$, props.onClick$, loading$]}>
      Refresh <span hidden>(loading...)</span>
    </button>
  );
});
