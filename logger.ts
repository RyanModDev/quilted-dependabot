import { bold, green, red } from "kleur/colors";

export const success = (a: string) => {
  console.log(bold(green("✔")) + " " + a);
};

export const error = (a: string) => {
  console.log(bold(red("✘")) + " " + a);
};
