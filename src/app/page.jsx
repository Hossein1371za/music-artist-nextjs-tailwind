import Albums from "@/components/albums/Albums";
import Blog from "@/components/blog/Blog";
import Events from "@/components/events/Events";
import Hero from "@/components/Hero";
import Player from "@/components/Player";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <div className="h-[500px]"></div>
    </main>
  );
}
