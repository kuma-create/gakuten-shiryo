import { notFound } from "next/navigation";
import PresentationLayout from "@/components/PresentationLayout";

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    // slides.tsx の default export は <Slides /> コンポーネント
    const mod = await import(`../${params.slug}/slides`);
    const Slides = mod.default;
    const title = mod.deckTitle ?? "株式会社Make Culture　中途紹介事業";

    return (
        <Slides />
    );
  } catch {
    notFound();
  }
}