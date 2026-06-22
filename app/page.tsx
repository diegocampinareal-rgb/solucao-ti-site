import Image from 'next/image';

const WHATSAPP = 'https://wa.me/558331131839?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

const Icon = ({ name, size = 24 }: { name: string; size?: number }) => {
  const paths: Record<string, React.ReactNode> = {
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />,
    laptop: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M2 20h20"/></>,
    chip: <><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></>,
    apple: <><path d="M12 20.5c-1.2 0-2.2-.8-3.4-.8-1.3 0-2.4.8-3.5.8C3.2 20.5 1 16 1 12.7 1 9.5 3 7.8 5.1 7.8c1.2 0 2.4.8 3.2.8.8 0 2.2-1 3.7-.9.6 0 2.4.2 3.6 2-3.2 1.8-2.7 6.2.5 7.4-.6 1.5-2.4 3.4-4.1 3.4Z"/><path d="M11.9 3.2c.9-1.1 2.4-1.9 3.7-2-.2 1.5-.9 2.9-1.8 3.8-1 1-2.3 1.8-3.7 1.7-.1-1.4.7-2.7 1.8-3.5Z"/></>,
    game: <><path d="M6 11h4M8 9v4"/><path d="M15 12h.01M18 10h.01"/><path d="M5 6h14a4 4 0 0 1 3.8 5.3l-2 6A2.5 2.5 0 0 1 16.5 18L14 15H10l-2.5 3a2.5 2.5 0 0 1-4.3-.7l-2-6A4 4 0 0 1 5 6Z"/></>,
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5-5L7 4l3 3 2.7-2.7a4 4 0 0 0-5 5L1.4 15.6a2 2 0 0 0 0 2.8l4.2 4.2a2 2 0 0 0 2.8 0l6.3-6.3a4 4 0 0 0 5-5L17 14l-3-3 2.7-2.7Z" />,
    truck: <><path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></>,
    star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2l-5-4.9 6.9-1L12 2Z" />,
    insta: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
};

const services = [
  { icon: 'laptop', title: 'Notebooks', text: 'Tela, teclado, carcaça, SSD, memória, bateria, limpeza e reparo eletrônico.', tags: ['Reparo de placa', 'Upgrades', 'Todas as marcas'] },
  { icon: 'game', title: 'Notebooks Gamer', text: 'Diagnóstico avançado, conectores, limpeza completa, pasta térmica e desempenho.', tags: ['Acer Nitro', 'Dell G', 'ROG & mais'] },
  { icon: 'apple', title: 'MacBooks', text: 'Reparo eletrônico, tela, bateria, teclado, recuperação de placas e limpeza.', tags: ['MacBook Air', 'MacBook Pro', 'Placa lógica'] },
  { icon: 'chip', title: 'Placas de Vídeo', text: 'Reparo de RTX e RX, componentes, BIOS, oxidação e diagnóstico de bancada.', tags: ['RTX 20/30/40', 'AMD RX', 'Sem vídeo'] },
  { icon: 'wrench', title: 'Computadores Gamer', text: 'Montagem personalizada, upgrade, diagnóstico, prevenção e reparo de placas.', tags: ['Montagem', 'Performance', 'Manutenção'] },
  { icon: 'game', title: 'Consoles & Smartphones', text: 'PlayStation 4 e 5, Xbox, iPhone, Samsung e Xiaomi.', tags: ['Conectores', 'Eletrônica', 'Diagnóstico'] },
];

const problems = ['Notebook não liga', 'MacBook sem imagem', 'Placa de vídeo sem vídeo', 'Computador travando', 'Superaquecimento', 'Tela quebrada', 'Bateria viciada', 'Equipamento oxidado', 'Lentidão extrema'];

const reviews = [
  { initials: 'ND', name: 'Natan Dias', time: '8 meses atrás', text: 'Pessoal da Solução TI de parabéns! Atendimento exemplar. Levei minha RX 580 Gigabyte 8GB para conserto, pois ligava mas sem sinal de vídeo. O Diego conseguiu consertar e hoje ela voltou a voar baixo. Atualmente rodando muito bem a 60FPS/1080p Silent Hill Remake. Voltarei a fazer negócio com certeza.' },
  { initials: 'AJ', name: 'AJR', time: '1 ano atrás', text: 'Serviço excepcional, recomendo demais! Me salvaram de comprar outra GPU! A minha GTX 1070 voltou nova, após ter a primeira falha com 7 anos de uso! Equipe experiente, com mais de 15 anos de mercado. Atendimento nota 1000, acompanhando tudo pelo WhatsApp!' },
  { initials: 'RL', name: 'rapha Leão', time: '3 semanas atrás', text: 'Levei meu iPhone para conserto, desde a recepção até mesmo o conserto em si do aparelho foram impecáveis!' },
  { initials: 'DS', name: 'Demóstenes Santos', time: '9 meses atrás', text: 'Precisei desentortar alguns pinos de um processador e o serviço foi feito com rapidez e qualidade. A minha experiência foi muito boa, desde o atendimento até a resolução do problema.' },
  { initials: 'VD', name: 'VIDADEDJ', time: '8 meses atrás', text: 'Fui bem atendido e deram uma atenção real ao problema do meu computador. Resolvendo assim o problema sem condenar peças desnecessárias.' },
  { initials: 'AH', name: 'Arthur Honorato', time: '1 ano atrás', text: 'Levei meu notebook para conserto e fiquei extremamente satisfeito com o atendimento e a qualidade do serviço prestado. Desde o primeiro contato, a equipe foi muito atenciosa, transparente e prestativa, explicando cada etapa do processo com clareza. O reparo foi feito com rapidez e eficiência, e meu notebook voltou funcionando perfeitamente. Sem dúvida, recomendo a loja para quem busca um serviço de qualidade, com honestidade e preço justo.' },
  { initials: 'JP', name: 'João Paulo', time: '1 ano atrás', text: 'Venho expressar minha gratidão pelo excelente atendimento recebido na loja Solução TI, em João Pessoa. Desde o primeiro contato, fui tratado com profissionalismo, respeito e um alto nível de dedicação. Gostaria de destacar a transparência e a confiança que Diego e Marc demonstraram durante todo o processo de atendimento. Recomendo fortemente a Solução TI para quem busca um atendimento diferenciado, ágil e confiável.' },
];

const faqs = [
  ['Vocês fazem orçamento sem compromisso?', 'Sim. Primeiro realizamos a avaliação técnica e apresentamos o orçamento com clareza. O reparo só é iniciado após a sua aprovação.'],
  ['Qual é o prazo para o diagnóstico?', 'O prazo varia conforme o equipamento e a complexidade do defeito. Ao recebermos o aparelho, nossa equipe informa a previsão e mantém você atualizado.'],
  ['A Solução TI oferece garantia?', 'Sim. Os serviços contam com garantia de até 90 dias, conforme o tipo de reparo e as condições informadas na ordem de serviço.'],
  ['Posso enviar meu equipamento de outro estado?', 'Sim. Recebemos equipamentos de todo o Brasil pelos Correios e transportadoras. Nossa equipe orienta sobre embalagem, identificação e envio.'],
  ['Vocês consertam notebook que não liga?', 'Sim. Fazemos diagnóstico avançado de alimentação, curto, BIOS, placa-mãe, conectores e outros componentes eletrônicos.'],
  ['Fazem reparo em MacBook?', 'Sim. Trabalhamos com reparo eletrônico, recuperação de placa lógica, tela, bateria, teclado e limpeza especializada de MacBooks.'],
  ['Consertam placas de vídeo RTX 3060 e RTX 3070?', 'Sim. Atendemos RTX 2060, 3060, 3070, 3080, 3090 e a linha RTX 40, além de diversos modelos AMD RX.'],
  ['Minha placa de vídeo está sem vídeo. Tem conserto?', 'Em muitos casos, sim. Avaliamos alimentação, memória, GPU, BIOS, oxidação e componentes da placa para identificar a causa real.'],
  ['Vocês recuperam equipamentos oxidados?', 'Realizamos limpeza técnica e recuperação eletrônica após contato com líquidos ou maresia. A viabilidade depende do nível de dano encontrado.'],
  ['Fazem upgrade de SSD e memória?', 'Sim. Avaliamos a compatibilidade do equipamento e indicamos a configuração com melhor custo-benefício para o seu uso.'],
  ['Atendem empresas e assistências técnicas?', 'Sim. Atendemos empresas, profissionais e assistências parceiras que precisam de diagnóstico e reparo eletrônico especializado.'],
  ['Os dados do meu notebook ficam seguros?', 'Tratamos cada equipamento com confidencialidade e cuidado. Ainda assim, recomendamos manter backup atualizado sempre que o equipamento permitir.'],
  ['Quais formas de pagamento são aceitas?', 'As opções são informadas no orçamento. Fale com nossa equipe no WhatsApp para consultar as condições disponíveis para o seu serviço.'],
  ['Preciso agendar o atendimento?', 'O contato prévio pelo WhatsApp é recomendado para agilizar sua triagem e orientar corretamente a entrega ou o envio.'],
  ['Vocês atendem qualquer marca de notebook?', 'Atendemos as principais marcas do mercado. Envie marca, modelo e sintomas pelo WhatsApp para confirmarmos o atendimento.'],
  ['Como acompanho o reparo?', 'Nossa equipe mantém você informado durante as etapas principais: recebimento, diagnóstico, orçamento, aprovação e conclusão.'],
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
const businessSchema = { '@context': 'https://schema.org', '@type': 'ElectronicsStore', name: 'Solução TI', url: 'https://www.orcamentosolucaotipb.com.br', telephone: '+55-83-3113-1839', description: 'Assistência técnica premium especializada em reparos eletrônicos avançados.', address: { '@type': 'PostalAddress', addressLocality: 'João Pessoa', addressRegion: 'PB', addressCountry: 'BR' }, areaServed: 'BR', sameAs: ['https://www.instagram.com/solucaotipb'] };

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

    <div className="topbar"><span className="pulse" /> Atendimento nacional • Recebemos equipamentos de todo o Brasil</div>
    <header className="header shell">
      <a href="#inicio" className="brand" aria-label="Solução TI - início"><Image className="brand-logo" src="/logo-solucao-ti-light.png" width={3261} height={1123} alt="Solução TI" priority /></a>
      <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#processo">Como funciona</a><a href="#avaliacoes">Avaliações</a><a href="#faq">Dúvidas</a></nav>
      <a className="btn btn-small" href={WHATSAPP} target="_blank" rel="noreferrer"><Icon name="phone" size={18}/> Falar com especialista</a>
    </header>

    <section className="hero" id="inicio">
      <Image src="/laboratorio-bancada.jpg" alt="Laboratório real da Solução TI com equipamentos profissionais para reparo eletrônico" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay" />
      <div className="shell hero-content">
        <div className="eyebrow"><span /> Engenharia eletrônica aplicada ao reparo</div>
        <h1>Não trocamos peças<br/>no escuro. <em>Encontramos a causa.</em></h1>
        <p className="hero-lead">Assistência premium para <strong>MacBooks, notebooks de alto desempenho e placas de vídeo</strong>. Seu equipamento é tratado com método, precisão e transparência.</p>
        <div className="hero-actions"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Falar com um especialista <Icon name="arrow"/></a><a className="btn btn-ghost" href="tel:+558331131839"><Icon name="phone"/> (83) 3113-1839</a></div>
        <div className="hero-proof"><div><strong>+20</strong><span>anos de<br/>experiência</span></div><i/><div><strong>90</strong><span>dias de<br/>garantia*</span></div><i/><div><strong>BR</strong><span>atendimento<br/>nacional</span></div></div>
      </div>
      <div className="hero-status"><span className="pulse"/><div><small>LABORATÓRIO ESPECIALIZADO</small><strong>Diagnóstico em nível de componente</strong></div></div>
    </section>

    <section className="trust-strip"><div className="shell"><span><Icon name="shield"/> Garantia de até 90 dias</span><span><Icon name="chip"/> Equipamentos profissionais</span><span><Icon name="map"/> Atendimento em todo o Brasil</span><span><Icon name="check"/> Orçamento sem compromisso</span></div></section>

    <section className="lab-editorial" id="laboratorio">
      <div className="shell lab-intro">
        <div className="lab-copy">
          <span className="kicker">ESTRUTURA REAL. MÉTODO REAL.</span>
          <h2>O valor do seu equipamento exige <em>mais que uma bancada.</em></h2>
          <p>Na Solução TI, MacBooks, notebooks de alto desempenho e placas de vídeo são recebidos em uma estrutura dedicada ao diagnóstico eletrônico avançado.</p>
          <div className="lab-signals"><span><b>01</b> Bancadas especializadas</span><span><b>02</b> Microscopia e precisão</span><span><b>03</b> Ambiente climatizado</span></div>
          <a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Converse com quem entende do seu equipamento <Icon name="arrow"/></a>
        </div>
        <figure className="lab-photo lab-photo-main"><Image src="/laboratorio-amplo.jpg" alt="Visão ampla das bancadas do laboratório da Solução TI" fill sizes="(max-width: 900px) 100vw, 55vw"/><figcaption><span>LABORATÓRIO SOLUÇÃO TI</span><b>João Pessoa • PB</b></figcaption></figure>
      </div>
      <div className="shell lab-gallery">
        <figure className="lab-photo lab-photo-wide"><Image src="/laboratorio-bancada.jpg" alt="Bancada com microscópios, instrumentos de medição e estações de reparo" fill sizes="(max-width: 700px) 100vw, 48vw"/><figcaption><span>DIAGNÓSTICO AVANÇADO</span><b>Equipamentos profissionais</b></figcaption></figure>
        <figure className="lab-photo lab-photo-tall"><Image src="/fachada-solucao-ti.jpg" alt="Recepção da Solução TI Assistência Técnica Premium" fill sizes="(max-width: 700px) 100vw, 25vw"/><figcaption><span>ATENDIMENTO PRESENCIAL</span><b>Uma estrutura que você pode visitar</b></figcaption></figure>
        <figure className="lab-photo lab-photo-detail"><Image src="/laboratorio-tecnico.jpg" alt="Área técnica para manutenção de notebooks e computadores" fill sizes="(max-width: 700px) 100vw, 25vw"/><figcaption><span>ÁREA TÉCNICA</span><b>Organização por etapa de serviço</b></figcaption></figure>
      </div>
    </section>

    <section className="section light" id="servicos"><div className="shell">
      <div className="section-head"><div><span className="kicker">ESPECIALIDADES</span><h2>Precisão técnica para o que<br/>parecia <em>sem solução.</em></h2></div><p>Do diagnóstico ao teste final, cada equipamento passa por um processo técnico criterioso em nosso laboratório.</p></div>
      <div className="service-grid">{services.map((s, i) => <article className={`service-card ${i === 3 ? 'featured' : ''}`} key={s.title}><div className="service-icon"><Icon name={s.icon} size={28}/></div><span className="service-number">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p><div className="tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div><a href={WHATSAPP} target="_blank" rel="noreferrer">Consultar reparo <Icon name="arrow" size={18}/></a></article>)}</div>
    </div></section>

    <section className="section dark problems"><div className="shell two-col"><div><span className="kicker blue">DIAGNÓSTICO CERTO MUDA TUDO</span><h2>O problema aparece.<br/><em>A causa, nem sempre.</em></h2><p>Trocar peças por tentativa custa tempo e dinheiro. Nossa equipe investiga o defeito na origem para indicar o reparo correto.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Descreva o problema no WhatsApp <Icon name="arrow"/></a></div><div className="problem-list">{problems.map((p, i) => <div key={p}><span>{String(i + 1).padStart(2, '0')}</span>{p}<Icon name="check" size={20}/></div>)}</div></div></section>

    <section className="section process" id="processo"><div className="shell"><div className="center-head"><span className="kicker">DO CONTATO À ENTREGA</span><h2>Um processo claro.<br/><em>Sem surpresas.</em></h2><p>Você sabe o que está acontecendo em cada etapa.</p></div><div className="timeline">{['Entre em contato','Envie ou traga','Diagnóstico técnico','Receba o orçamento','Reparo aprovado','Teste e entrega'].map((x, i) => <div className="step" key={x}><span>{i + 1}</span><div className="step-line"/><h3>{x}</h3><p>{['Conte o que aconteceu e envie fotos pelo WhatsApp.','Orientamos a entrega ou o envio com segurança.','Nossa bancada identifica a origem do defeito.','Explicamos o serviço antes de qualquer execução.','Após sua autorização, iniciamos o trabalho.','Validamos o equipamento e entregamos com garantia.'][i]}</p></div>)}</div></div></section>

    <section className="national"><div className="national-grid"/><div className="shell national-content"><div><span className="kicker blue">DE JOÃO PESSOA PARA TODO O BRASIL</span><h2>Seu equipamento pode estar longe.<br/><em>Nossa solução, não.</em></h2><p>Recebemos notebooks, MacBooks e placas de vídeo de qualquer estado pelos Correios e transportadoras.</p><ul><li><Icon name="check"/> Orientação para embalar com segurança</li><li><Icon name="check"/> Confirmação no recebimento</li><li><Icon name="check"/> Acompanhamento pelo WhatsApp</li><li><Icon name="check"/> Devolução protegida após os testes</li></ul><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><Icon name="truck"/> Quero enviar meu equipamento</a></div><div className="map-card"><div className="map-orbit o1"/><div className="map-orbit o2"/><span className="map-pin"><Icon name="location" size={32}/></span><strong>João Pessoa</strong><small>PARAÍBA • BRASIL</small><div className="route r1"/><div className="route r2"/><div className="route r3"/></div></div></section>

    <section className="section light" id="avaliacoes"><div className="shell"><div className="section-head reviews-head"><div><span className="kicker">CONFIANÇA COMPROVADA</span><h2>Quem confia,<br/><em>recomenda.</em></h2></div><div className="google-rating"><b><span className="google-g">G</span> Google</b><div><strong>5★</strong><span className="stars">★★★★★</span><small>Avaliações reais no Google</small></div></div></div><div className="reviews">{reviews.map((review, i) => <article className={i === 1 ? 'review-main' : ''} key={review.name}><div className="review-top"><div className="stars" aria-label="5 estrelas">★★★★★</div><small>{review.time}</small></div><p>“{review.text}”</p><footer><span>{review.initials}</span><div><strong>{review.name}</strong><small>Avaliação pública • Google</small></div></footer></article>)}</div><p className="review-note">Avaliações públicas reais, transcritas do perfil da Solução TI no Google.</p></div></section>

    <section className="section dark faq" id="faq"><div className="shell faq-grid"><div><span className="kicker blue">DÚVIDAS FREQUENTES</span><h2>Antes de enviar,<br/><em>você pode querer saber.</em></h2><p>Não encontrou sua dúvida? Fale diretamente com nossa equipe técnica.</p><a className="btn btn-outline" href={WHATSAPP} target="_blank" rel="noreferrer">Perguntar no WhatsApp <Icon name="arrow"/></a></div><div className="accordions">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="cta"><div className="cta-glow"/><div className="shell"><span className="kicker">SEU EQUIPAMENTO MERECE UM DIAGNÓSTICO DE VERDADE</span><h2>Vamos encontrar a solução?</h2><p>Conte o que está acontecendo. Nossa equipe responde e orienta o próximo passo.</p><a className="btn btn-white" href={WHATSAPP} target="_blank" rel="noreferrer"><Icon name="phone"/> Falar agora no WhatsApp <Icon name="arrow"/></a><small>Orçamento sem compromisso • Atendimento humanizado</small></div></section>

    <footer className="footer"><div className="shell footer-grid"><div><a href="#inicio" className="brand light-brand"><Image className="brand-logo footer-logo" src="/logo-solucao-ti-light.png" width={3261} height={1123} alt="Solução TI — Assistência Técnica Premium" /></a><p>Reparos eletrônicos avançados com precisão, transparência e compromisso.</p></div><div><b>Especialidades</b><a href="#servicos">Notebooks e MacBooks</a><a href="#servicos">Placas de vídeo</a><a href="#servicos">Computadores gamer</a><a href="#servicos">Consoles e smartphones</a></div><div><b>Atendimento</b><a href="tel:+558331131839">(83) 3113-1839</a><a href="https://instagram.com/solucaotipb" target="_blank" rel="noreferrer"><Icon name="insta" size={17}/> @solucaotipb</a><span>João Pessoa — PB</span><span>Envios de todo o Brasil</span></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Solução TI. Todos os direitos reservados.</span><span>Diagnóstico técnico • Transparência • Garantia</span></div></footer>

    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a Solução TI no WhatsApp"><Icon name="phone" size={28}/><span>Fale conosco<small>Normalmente respondemos rápido</small></span></a>
  </main>;
}
