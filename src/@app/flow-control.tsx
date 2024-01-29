import { type JSXOutput, component$ } from "@builder.io/qwik";

export function Show(props: {
  when: boolean;
  children?: JSXOutput;
  else?: any;
}) {
  return props.when ? props.children : props.else;
}

export function For(props: {
  each?: any[];
  children: (item: any, index: number, collection: any[]) => any;
}) {
  return props.each?.map(props.children);
}

export const Repeat = component$(() => {
  return <></>;
});
