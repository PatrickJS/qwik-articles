import type { JSXOutput } from "@builder.io/qwik";
import {
  type Signal,
  sync$,
  // $,
  // component$,
  // Slot,
  // useSignal,
} from "@builder.io/qwik";
interface Props {
  ref?: Signal<HTMLDivElement | undefined>;
  filename?: string;
  value?: string;
  hidden?: boolean;
  children?: JSXOutput;
}

// without signal
export const Toggle = ({ children, filename, hidden = true }: Props) => {
  return (
    <div class="w-full rounded bg-black p-4 shadow">
      <button
        class="cursor-pointer text-lg font-bold text-blue-500 hover:text-blue-600"
        onClick$={[
          sync$((_evt: Event, target: Element) => {
            const div = target.nextElementSibling as HTMLDivElement;
            div!.hidden = !div!.hidden;
          }),
        ]}
      >
        {filename}
      </button>
      <div class="mt-2 text-white" hidden={hidden}>
        {children}
      </div>
    </div>
  );
};

// with signal
// export const ToggleSignal = component$(({ filename, hidden = true }: Props) => {
//   const toggleHidden = useSignal(hidden);
//   return (
//     <div class="w-full rounded bg-black p-4 shadow">
//       <button
//         class="cursor-pointer text-lg font-bold text-blue-500 hover:text-blue-600"
//         onClick$={() => {
//           toggleHidden.value = !toggleHidden.value;
//         }}
//       >
//         {filename}
//       </button>
//       <div class="mt-2 text-white" hidden={toggleHidden.value}>
//         <Slot />
//       </div>
//     </div>
//   );
// });
