
import Container from "./components/Container";
import ProfileCard from "./components/ProfileCard";
import Hero from "./components/Hero";
import LinesBackground from "./components/LinesBackground";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Hero />
      <LinesBackground />
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-2 gap-4">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </Container>
      </section>

    </div>
  );
}
