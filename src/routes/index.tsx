import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BlogIndex } from "~/components/BlogIndex";
import { RefreshButton } from "~/components/RefreshButton";
import { Toggle } from "~/components/Toggle";
import { ArticlePreview } from "~/components/ArticlePreview";

import type { File } from "~/@db";
import { getFiles } from "~/@db";
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
          {files.value?.map((file, i) => (
            <Toggle key={file.name} filename={file.name} hidden={i !== 0}>
              <ArticlePreview filename={file.name} value={file.preview}>
                Loading...
              </ArticlePreview>
            </Toggle>
          ))}
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
