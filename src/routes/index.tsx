import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BlogIndex } from "~/components/BlogIndex";
import { RefreshButton } from "~/components/RefreshButton";
import { Toggle } from "~/components/Toggle";
import { ArticlePreview } from "~/components/ArticlePreview";

export default component$(() => {
  return (
    <>
      <div>
        <BlogIndex>
          <RefreshButton />
          <hr />
          <Toggle>
            <ArticlePreview filename="something.mdx">Loading...</ArticlePreview>
          </Toggle>

          <Toggle>
            <ArticlePreview filename="something.mdx">Loading...</ArticlePreview>
          </Toggle>

          <Toggle>
            <ArticlePreview filename="something.mdx">Loading...</ArticlePreview>
          </Toggle>
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
