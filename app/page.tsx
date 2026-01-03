import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Manufacturing } from "@/components/manufacturing"
import { Automation } from "@/components/automation"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Manufacturing />
      <Automation />
      <Team />
      <Contact />
      <FAQ />
      <News />
      <Partners />
      <Footer />
    </div>
  )
}
