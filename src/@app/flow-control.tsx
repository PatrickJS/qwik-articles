import { component$, type Signal, type JSXOutput } from "@builder.io/qwik";

export function Show(props: {
  when: boolean;
  "bind:when": Signal<boolean | undefined>;
  children?: JSXOutput;
  else?: JSXOutput;
}) {
  if (props["bind:when"] !== undefined) {
    return props["bind:when"].value ? props.children : props.else;
  }
  return props.when ? props.children : props.else;
}

export function For<T>(props: {
  each?: T[];
  "bind:each"?: Signal<T[] | undefined>;
  children: (item: T, index: number, collection: T[]) => JSXOutput;
}) {
  if (props["bind:each"] !== undefined) {
    return props["bind:each"].value?.map(props.children);
  }
  return props.each?.map(props.children);
}

export const Repeat = component$(() => {
  return <></>;
});
