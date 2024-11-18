"use client"; // Ensure this is the correct directive for your setup  
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { useState } from 'react'; // Make sure to import useState  

export default function EticaLandingPage() {
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility  

  const handleChatClick = (e) => {
    const acceptTerms = localStorage.getItem('termsAccepted');
    if (!acceptTerms) {
      e.preventDefault();
      setModalOpen(true); // Open modal when clicking the button if acceptTerms is not set }
    }
  };

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
          <h2 className="text-2xl font-semibold mb-4">Comece Agora: Faça da Ética um Valor Pessoal e Profissional</h2>
          <p className="text-muted-foreground mb-6">
            Clique no botão abaixo para abrir um chat onde você pode perguntar qualquer coisa! O assistente irá responder de maneira ética, orientando você sobre como realizar tarefas ou responder questionamentos com base em princípios de respeito, honestidade e responsabilidade. Agir com ética no dia a dia é fundamental para transformar vidas e criar um ambiente positivo ao nosso redor. Vamos juntos promover a ética em todas as nossas ações!
          </p>
          <Link href="/chat" passHref>   
              <Button size="lg" onClick={handleChatClick}>Chat</Button>
          </Link>  
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
      </main>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Close modal  
        title="Termos de Uso do Sistema"
      >
        Ao utilizar esta inteligência artificial generativa, você aceita os seguintes termos: compromete-se a usar a IA de forma ética e responsável, evitando qualquer conteúdo que seja ofensivo, ilegal ou prejudicial a terceiros. O conteúdo gerado é de sua responsabilidade, e você deve garantir que não infringe direitos autorais ou outras leis de propriedade intelectual. Embora a IA forneça informações e respostas úteis, você reconhece suas limitações e recomenda-se usar julgamento crítico ao considerar as sugestões apresentadas. A IA não se responsabiliza por danos, perdas ou consequências decorrentes do uso das informações fornecidas. Você também concorda em não compartilhar informações pessoais sensíveis ou confidenciais durante as interações, assegurando a privacidade e segurança dos dados. Ao continuar usando esta tecnologia, você confirma que leu, entendeu e concorda com estes termos.      
        </Modal>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Ética em Ação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}  
