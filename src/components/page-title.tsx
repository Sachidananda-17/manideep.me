import { Reveal } from "./reveal";

export function PageTitle({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <Reveal className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
