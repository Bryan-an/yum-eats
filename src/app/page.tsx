import TopNavComponent from '@/components/app/top-nav';

export default function HomePage() {
  return (
    <>
      <TopNavComponent />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
