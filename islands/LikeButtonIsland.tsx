import { useSignal } from "@preact/signals";
import { SendEventOnClick } from "deco-sites/deco-camp-fe/components/Analytics.tsx";
import Icon from "deco-sites/deco-camp-fe/components/ui/Icon.tsx";
import { invoke } from "deco-sites/deco-camp-fe/runtime.ts";
import { useId } from "deco-sites/deco-camp-fe/sdk/useId.ts";
import { total } from "deco-sites/deco-camp-fe/sdk/useTotalLikes.ts";
import { useEffect } from "preact/hooks";
import { Flip, toast, ToastContainer } from "react-toastify";

export interface LikeButtonIslandProps {
  productID: string;
}

function LikeButtonIsland({ productID }: LikeButtonIslandProps) {
  const selected = useSignal(false);
  const quantity = useSignal(0);
  const id = useId();

  // deno-lint-ignore no-explicit-any
  const Toast = ToastContainer as any;

  useEffect(() => {
    const updateTotals = async () => {
      const totalLikes = await invoke["deco-sites/deco-camp-fe"].loaders
        .totalLikesLoader();
      const totalLikesProduct = await invoke["deco-sites/deco-camp-fe"].loaders
        .totalLikesProductLoader({ productID });
      total.value = totalLikes.total;
      quantity.value = totalLikesProduct.product;
    };

    updateTotals();
    setInterval(updateTotals, 30000);
  });

  const handleToggleLike = async (e: MouseEvent) => {
    e.preventDefault();
    const result = await invoke["deco-sites/deco-camp-fe"].actions
      .sendLikesAction({ productID });
    selected.value = true;
    total.value = result.total;
    quantity.value = result.product;

    toast.success("Agradecemos pelo seu voto!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
  };

  return (
    <>
      <button
        id={id}
        class="absolute left-4 sm:left-auto sm:right-4 top-4 flex items-center justify-center gap-1 p-1 sm:p-2 rounded bg-neutral sm:bg-white min-w-14"
        onClick={(e) => handleToggleLike(e)}
      >
        <SendEventOnClick
          id={id}
          event={{
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            name: "post_score",
            params: {
              // deno-lint-ignore ban-ts-comment
              // @ts-ignore
              score: quantity.value + 1,
              level: 5,
              character: String(productID),
            },
          }}
        />
        {!selected.value
          ? <Icon id="MoodSmile" width={24} height={24} />
          : <Icon id="MoodCheck" width={24} height={24} />}
        <span
          class={`min-w-4 text-center text-xs font-thin ${
            !selected.value ? "text-gray-500" : "text-secondary"
          }`}
        >
          {quantity.value}
        </span>
      </button>

      <Toast />
    </>
  );
}

export default LikeButtonIsland;
