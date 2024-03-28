import { effect, signal } from "@preact/signals";
import { invoke } from "deco-sites/deco-camp-fe/runtime.ts";

export const total = signal(0);

effect(() => {
  const updateTotal = async () => {
    const totalLikes = await invoke["deco-sites/deco-camp-fe"].loaders
      .totalLikesLoader();
    total.value = totalLikes.total;
  };

  updateTotal();
  setInterval(updateTotal, 30000);
});

export const useTotalLikes = () => {
  return { total };
};
