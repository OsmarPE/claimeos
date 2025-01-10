
import Container from "./components/Container";
import ProfileCard from "./components/ProfileCard";
import Hero from "./components/Hero";
import LinesBackground from "./components/LinesBackground";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Profiles from "./components/Profiles";
import Claimeos from "./components/Claimeos";
export default function Home() {


  return (
    <main className="min-h-screen ">
      <Hero />
      <LinesBackground />
      <Container>

        <Tabs defaultValue="account">
          <TabsList className="grid w-[400px] grid-cols-2">
            <TabsTrigger value="account">Streamers</TabsTrigger>
            <TabsTrigger value="password">Lista de Claimeos</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Profiles />
          </TabsContent>
          <TabsContent value="password">
            <Claimeos />
          </TabsContent>
        </Tabs>
      </Container>
     

    </main>
  );
}
