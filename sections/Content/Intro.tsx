export interface IntroProps {
  text: string;
  subheading?: string;
  alignment: "Left" | "Center" | "Right";
}

const ALIGNMENT_TEXT = {
  Left: "items-start text-start",
  Center: "items-center text-center",
  Right: "items-end text-end",
};

export default function Intro({
  text =
    "Lorem ipsum dolor sit amet consectetur. Placerat ornare diam nulla fringilla gravida justo elementum. Ut sed in.",
  subheading,
  alignment = "Left",
}: IntroProps) {
  return (
    <section class="bg-base-100">
      <div class="container w-full px-4 md:px-0 mx-auto py-8 lg:py-10">
        <div
          class={`flex flex-col gap-6 ${ALIGNMENT_TEXT[alignment ?? "Left"]}`}
        >
          <h1 class="font-bold text-base-content text-[40px] leading-[120%]">
            {text}
          </h1>
          {subheading && (
            <p class="text-base-content text-[18px]">{subheading}</p>
          )}
        </div>
      </div>
    </section>
  );
}
