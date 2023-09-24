import { CategoriesComponent } from './_components/categories';
import { DeliveryComponent } from './_components/delivery';
import { FeaturedComponent } from './_components/featured';
import { FooterComponent } from './_components/footer';
import { MealComponent } from './_components/meal';
import { NewsLetterComponent } from './_components/news-letter';
import { TopNavComponent } from './_components/top-nav';
import { TopPicksComponent } from './_components/top-picks';

export default function HomePage() {
  return (
    <>
      <TopNavComponent />
      <FeaturedComponent />
      <DeliveryComponent />
      <TopPicksComponent />
      <MealComponent />
      <CategoriesComponent />
      <NewsLetterComponent />
      <FooterComponent />
    </>
  );
}
