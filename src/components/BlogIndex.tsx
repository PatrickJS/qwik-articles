import { Slot, component$ } from "@builder.io/qwik";

export const BlogIndex = component$(() => {
  return (
    <>
      <div>
        <h1>Blog</h1>
        <div class="p-5">
          <Slot name="refresh" />
        </div>
        <hr />
        <div class="p-5">
          <Slot />
        </div>
      </div>
    </>
  );
});
