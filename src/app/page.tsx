import { DeliveryComponent } from './_components/delivery';
import { FeaturedComponent } from './_components/featured';
import { TopNavComponent } from './_components/top-nav';

export default function HomePage() {
  return (
    <>
      <TopNavComponent />
      <FeaturedComponent />
      <DeliveryComponent />
    </>
  );
}
