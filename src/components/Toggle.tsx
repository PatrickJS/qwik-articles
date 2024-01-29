import { type Signal, component$, Slot, useSignal } from "@builder.io/qwik";
interface Props {
  ref?: Signal<HTMLDivElement | undefined>;
  filename?: string;
  hidden?: boolean;
}
export const Toggle = component$(({ filename, hidden = true }: Props) => {
  const toggle = useSignal(hidden);
  return (
    <div class="w-full rounded bg-black p-4 shadow">
      <button
        class="cursor-pointer text-lg font-bold text-blue-500 hover:text-blue-600"
        onClick$={() => {
          toggle.value = !toggle.value;
        }}
      >
        {filename}
      </button>
      <div class="mt-2 text-white" hidden={toggle.value}>
        <Slot />
      </div>
    </div>
  );
});
