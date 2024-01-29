import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BlogIndex } from "~/components/BlogIndex";
import { RefreshButton } from "~/components/RefreshButton";
import {
  Toggle,
  // ToggleSignal as Toggle,
} from "~/components/Toggle";
import { ArticlePreview } from "~/components/ArticlePreview";

import type { File } from "~/@db";
import { getFiles } from "~/@db";
import { For, Show } from "~/@app/flow-control";
export default component$(() => {
  const files = useSignal<File[]>();

  useTask$(async () => {
    // get latest values
    files.value = await getFiles();
  });

  return (
    <>
      <div>
        <BlogIndex>
          <div q:slot="refresh">
            <RefreshButton
              onClick$={async () => {
                // get latest values from client on click
                files.value = await getFiles();
              }}
            />
          </div>

          {/* thanks jsx */}
          <Show when={Boolean(files.value)}>
            <For each={files.value!}>
              {(file, i) => (
                <Toggle key={file.name} filename={file.name}>
                  <ArticlePreview filename={file.name} value={file.preview}>
                    Loading...
                  </ArticlePreview>
                </Toggle>
              )}
            </For>
          </Show>
        </BlogIndex>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
