import { server$ } from "@builder.io/qwik-city";
import { generateRandomObjects } from "./utils";
import { isServer } from "@builder.io/qwik/build";

export interface File {
  name: string;
  preview?: string;
  contents?: string;
}
let count = 0;

// fake random data
if (isServer) {
  setInterval(() => {
    count++;
  }, 5000);
}

export const getFiles = server$(async () => {
  const FILES: File[] = generateRandomObjects(3, 10);
  const randomIndex = Math.floor(Math.random() * FILES.length);
  FILES.forEach((file, index) => {
    file.name = "file-" + index + ".txt";
    if (randomIndex === index && randomIndex !== 0) {
      file.name = count + "----" + file.name;
    }
    file.preview = file.contents?.slice(0, 50);
  });
  await new Promise((resolve) => setTimeout(resolve, 100));
  return FILES;
});

export const getFile = server$(async () => {
  const FILES: File[] = generateRandomObjects(1, 1);
  await new Promise((resolve) => setTimeout(resolve, 100));
  return FILES[0];
});
