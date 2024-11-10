import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function EticaLandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">A Importância da Ética</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Por que a Ética é Essencial em Nossas Vidas?</h2>
          <p className="text-muted-foreground">
            A ética é a base de toda convivência saudável e justa. No trabalho, na escola, nas relações pessoais e nos negócios, agir de forma ética significa respeitar o próximo, ser transparente e fazer escolhas que promovam o bem-estar de todos. Em um mundo cada vez mais interconectado, a ética se torna um guia essencial para construir confiança, gerar impacto positivo e criar um ambiente onde todos possam prosperar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Benefícios de Agir com Ética no Dia a Dia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Fortalece as Relações</CardTitle>
              </CardHeader>
              <CardContent>
                Atitudes éticas promovem confiança e respeito, criando vínculos mais sólidos e duradouros, seja com clientes, colegas ou parceiros.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contribui para o Crescimento</CardTitle>
              </CardHeader>
              <CardContent>
                Profissionais que valorizam a ética em suas ações são mais reconhecidos, alcançam melhores oportunidades e constroem uma reputação sólida e respeitável.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Aumenta a Confiança</CardTitle>
              </CardHeader>
              <CardContent>
                Em um ambiente onde a ética é valorizada, as pessoas se sentem seguras para se expressar, colaborar e contribuir, o que resulta em uma melhor produtividade e satisfação geral.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cria um Mundo Melhor</CardTitle>
              </CardHeader>
              <CardContent>
                Agir com ética vai além dos interesses individuais – contribui para uma sociedade mais justa, equitativa e pacífica. Pequenas atitudes éticas no dia a dia têm o poder de transformar a sociedade como um todo.
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Comece Agora: Faça da Ética um Valor Pessoal e Profissional</h2>
          <p className="text-muted-foreground mb-6">
            Agir com ética no dia a dia é uma escolha que transforma vidas e impacta positivamente o ambiente ao nosso redor. Seja você um estudante, profissional, empresário ou cidadão, a ética é um guia poderoso para construir um futuro melhor. Vamos juntos promover a ética em todas as nossas ações e inspirar os outros a fazerem o mesmo!
          </p>
          <Link href="/chat" passHref>
            <Button size="lg">Chat</Button>
          </Link>
        </section>
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Ética em Ação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}