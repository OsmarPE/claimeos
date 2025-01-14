
import Container from "./components/Container";
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

interface Props {
  params: {[key: string]: string | string[] | undefined};
  searchParams: Promise<{[key: string]: string | string[] | undefined}> 
}

export default async function Home({params, searchParams}:Props) {

  const search =  await searchParams
  const { date } = search

  return (
    <main className="min-h-screen ">
      <Hero />

      <Container>
        <Tabs defaultValue="account">
          <TabsList className="grid max-w-[400px] grid-cols-2 w-full">
            <TabsTrigger value="account">Streamers</TabsTrigger>
            <TabsTrigger value="password">Lista de Claimeos</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Profiles />
          </TabsContent>
          <TabsContent value="password">
            <Claimeos date={date as string} />
          </TabsContent>
        </Tabs>
      </Container>
    </main>
  );
}
