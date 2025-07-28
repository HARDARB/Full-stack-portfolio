import { Footer } from "../Footer";
import { ArticleNewsletter } from "./ArticleMainHome";
import { HeroHome } from "./HeroHome";
import NewsletterSection from "./NewLetterHome";
import { StackHome } from "./StackHome";

export default function MainHome() {
  return (
    <div>
    <HeroHome />

    <div>
      <StackHome />
      <ArticleNewsletter />
      <NewsletterSection />
      <Footer />
    </div>
    </div>
  )
}

