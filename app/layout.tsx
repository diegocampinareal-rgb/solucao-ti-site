import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.orcamentosolucaotipb.com.br'),
  title: { default: 'Assistência Técnica em João Pessoa | Solução TI', template: '%s | Solução TI' },
  description: 'Especialistas em conserto de notebooks, MacBooks e placas de vídeo em João Pessoa. Diagnóstico avançado, garantia de até 90 dias e atendimento para todo o Brasil.',
  keywords: ['assistência técnica notebook João Pessoa', 'conserto de notebook João Pessoa', 'reparo de MacBook João Pessoa', 'reparo de placa de vídeo', 'conserto RTX 3060', 'conserto RTX 3070', 'reparo eletrônico notebook', 'reparo placa mãe notebook'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'pt_BR', url: '/', siteName: 'Solução TI',
    title: 'Solução TI — Reparo Eletrônico Avançado',
    description: 'Mais de 20 anos recuperando notebooks, MacBooks e placas de vídeo com transparência e garantia.',
    images: [{ url: '/laboratorio-bancada.jpg', width: 1856, height: 1392, alt: 'Laboratório especializado da Solução TI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Solução TI — Reparo Eletrônico Avançado', description: 'Assistência técnica premium em João Pessoa com atendimento nacional.', images: ['/laboratorio-bancada.jpg'] },
  icons: { icon: '/logo-solucao-ti-primary.png', apple: '/logo-solucao-ti-primary.png' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07111f' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        {gtmId && <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script>}
        {gaId && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}</Script></>}
        <Script id="whatsapp-tracking" strategy="afterInteractive">{`document.addEventListener('click',function(e){var a=e.target.closest('a[href*="wa.me"]');if(a){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'whatsapp_click',cta_text:(a.innerText||a.getAttribute('aria-label')||'WhatsApp').trim(),page_location:window.location.href});}});`}</Script>
        {gtmId && <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>}
        {children}
      </body>
    </html>
  );
}
