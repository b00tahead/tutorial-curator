import FeaturedTutorials from '@/components/FeaturedTutorials'
import Hero from '@/components/Hero'
import Search from '@/components/Search'

export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center justify-center gap-y-12">
      <Hero />
      <Search />
      <FeaturedTutorials />
    </main>
  )
}
