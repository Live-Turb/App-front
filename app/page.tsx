import { Metadata } from "next"
import { ClientPage } from "./ClientPage"

export const metadata: Metadata = {
  title: "LiveTurb - Espionagem de Anúncios e VSL em Live",
  description: "A ferramenta de espionagem de ofertas mais completa do Brasil. Transforme VSLs em Lives e aumente suas conversões.",
  openGraph: {
    title: "LiveTurb - Espionagem de Anúncios e VSL em Live",
    description: "A ferramenta de espionagem de ofertas mais completa do Brasil. Transforme VSLs em Lives e aumente suas conversões.",
    images: ["/og-image.png"],
  },
}

export default function Home() {
  return <ClientPage />
}

