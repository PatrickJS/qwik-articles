import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { getFile, type File } from "~/@db";

export default component$(() => {
  const file = useSignal<File>();

  useTask$(async () => {
    // get latest values
    file.value = await getFile();
  });

  return (
    <article>
      <h1>Something</h1>
      <p>{file.value?.contents}</p>
    </article>
  );
});
