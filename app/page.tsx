"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, BarChart2, Zap, Shield, Bot, Github, Twitter, Linkedin, Facebook } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col dark bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between ml-10">
          <div className="flex items-center gap-1.5">
            <Image
              src="/Logo-MoonRock.png"
              width={24}
              height={24}
              alt="MoonRock Logo"
              className="relative"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              MoonRock
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Funcionalidades
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Testemunhos
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Planos
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="w-full py-16 md:py-28 lg:py-36 xl:py-52 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay"></div>
          <div className="container px-4 md:px-6 relative z-10 ml-24">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_700px] lg:gap-16 xl:grid-cols-[1.3fr_900px]">
              <div className="flex flex-col justify-center space-y-4 pr-8">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
                  Simplifique Seu Trabalho, Aumente Sua Produtividade 
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Uma plataforma completa e personalizada de gerenciamento de negócios que ajuda equipes a colaborar, monitorar o progresso e entregar resultados
                  mais rapidamente.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="gap-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                  >
                    Impulsione Seu Negócio <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    Saiba Mais
                  </Button>
                </div>
                <p className="text-xs text-zinc-500">Teste gratuito por 14 dias.</p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <Image
                  src="/dashboard.png"
                  width={1600}
                  height={1600}
                  alt="Dashboard Preview"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last border border-zinc-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white">
                  Funcionalidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
                  Tudo Que Você Precisa Para Gerenciar Sua Empresa
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A MoonRock combina funcionalidades poderosas com uma interface intuitiva e personalizada para
                  ajudar sua equipe a entregar melhores resultados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/80 transition-colors h-full">
                <CardHeader className="pb-2">
                  <BarChart2 className="h-6 w-6 text-purple-500 mb-2" />
                  <CardTitle className="text-white">Análise em Tempo Real</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Obtenha insights instantâneos sobre o desempenho do projeto com painéis e relatórios personalizáveis.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/80 transition-colors h-full">
                <CardHeader className="pb-2">
                  <Bot className="h-6 w-6 text-purple-500 mb-2" />
                  <CardTitle className="text-white">Módulos IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Utilize inteligência artificial para melhorar a eficiência e a precisão em atendimentos e tarefas repetitivas.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/80 transition-colors h-full">
                <CardHeader className="pb-2">
                  <Shield className="h-6 w-6 text-purple-500 mb-2" />
                  <CardTitle className="text-white">Segurança Empresarial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Mantenha seus dados seguros com recursos de segurança de nível empresarial e certificações de conformidade.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/80 transition-colors h-full">
                <CardHeader className="pb-2">
                  <Zap className="h-6 w-6 text-purple-500 mb-2" />
                  <CardTitle className="text-white">Automação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Automatize tarefas e fluxos de trabalho repetitivos para economizar tempo e reduzir erros humanos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white">
                  Testemunhos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
                  Confiança dos Nossos Clientes
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja o que nossos clientes falam sobre como a MoonRock transformou o gerenciamento de seus negócios.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-zinc-800/30 border-purple-500/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-70"></div>
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Sarah Johnson"
                        className="relative rounded-full border border-zinc-700"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Sarah Cardoso</CardTitle>
                      <CardDescription className="text-zinc-400">Gerente de Produtos | Transnova</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">
                    "A MoonRock mudou completamente nossa rotina aqui, minha equipe está muito mais produtiva agora.
                    A interface intuitiva tornou a adesão bem simples, sem muito treinamento para a equipe."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800/30 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25"></div>
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="David Chen"
                        className="relative rounded-full border border-zinc-700"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Davi Freire</CardTitle>
                      <CardDescription className="text-zinc-400">Líder de Operação | CobraFácil</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">
                    "Consegui automatizar a maior parte da minha operação, me diminuindo o tempo gasto e a quantidade de
                    pessoas necessárias. Agora meu pessoal pode focar e melhorar nossos resultados."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800/30 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25"></div>
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Maria Rodriguez"
                        className="relative rounded-full border border-zinc-700"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">Marcela Rodrigues</CardTitle>
                      <CardDescription className="text-zinc-400">Dra. e Propietária | VitaMente</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">
                    "Sinceramente, no começo pensei que esse tipo de serviço fosse apenas para grandes empresas, mas encontrei
                    uma solução que se adequa a minha necessidade. As IAs cuidam de toda a parte de agenda e atendimento, amei!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white">
                  Planos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
                  Preços simples e transparentes
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha o plano ideal para seu negócio. Experimente um teste gratuito de 14 dias.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/80 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">ChatRock</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">R$249</span>
                    <span className="text-zinc-400">/mensais</span>
                  </div>
                  <CardDescription className="text-zinc-400">
                    Plataforma de comunicação multicanal que centraliza e organiza conversas com clientes, integrando o WhatsApp.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Até 6 colaboradores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Gestão de equipes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Automatizações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Segurança e Controle</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white">Comece Aqui</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 border-0 relative backdrop-blur-sm hover:from-zinc-800 hover:to-zinc-900 transition-colors">
                <div className="absolute inset-0.5 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 opacity-20"></div>
                <div className="absolute inset-0 rounded-[7px] border border-purple-500/50"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">MoonRock Lab</CardTitle>
                    <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs text-white">
                      Popular
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">R$499</span>
                    <span className="text-zinc-400">/mensais</span>
                  </div>
                  <CardDescription className="text-zinc-400">
                    CRM com recursos avançados para gerenciamento de clientes e vendas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Até 11 colaboradores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Dashboard personalizada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Gestão financeira</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Controle de funcionários e clientes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">ChatRock incluso</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="relative">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                    Comece Aqui
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/80 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Módulos IA</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">Customizado</span>
                  </div>
                  <CardDescription className="text-zinc-400">
                    Inclua módulos de inteligência artificial atender seus clientes, automatizar tarefas, e muito mais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Reduz seu gasto com pessoas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Minimiza erros</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Aumenta a eficiência de tempo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span className="text-zinc-300">Integrações personalizadas</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white">Fale conosco</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 mix-blend-overlay"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
                  Pronto Para Seu Negócio Atingir a Lua?
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Embarque no futuro e junte-se às equipes que já transformaram seu gerenciamento de negócios com a MoonRock.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="gap-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                >
                  Comece seu teste grátis <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  Tire suas dúvidas
                </Button>
              </div>
              <p className="text-xs text-zinc-500">Teste gratuito por 14 dias.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-800 bg-black py-12 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/Logo-MoonRock.png"
                  width={24}
                  height={24}
                  alt="MoonRock Logo"
                  className="relative"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  MoonRock
                </span>
              </div>
              <p className="text-sm text-zinc-400">Engenharia digital para um amanhã conectado.</p>
              <div className="flex gap-4">
                <Link href="https://x.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://facebook.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Produto</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Funcionalidades
                </Link>
                <Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Planos
                </Link>
                <Link href="#testimonials" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Testemunhos
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Empresa</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Sobre
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Carreiras
                </Link>
                <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} MoonRock. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
