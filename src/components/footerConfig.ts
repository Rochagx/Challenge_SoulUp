import type { FooterLink } from "./Footer";

interface FooterConfig {
  description: string;
  firstColumnTitle: string;
  firstColumnLinks: FooterLink[];
  copyrightSeparator: string;
}

const PAGINAS_LINKS: FooterLink[] = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Plataforma", to: "/plataforma" },
  { label: "Validar Ação", to: "/validar" },
  { label: "Ranking", to: "/ranking" },
];

const DESCRICAO_PADRAO =
  "Gamificação sustentável que conecta atitudes ecológicas a recompensas reais.";

const CONFIG_POR_ROTA: Record<string, FooterConfig> = {
  "/": {
    description:
      "A primeira rede social de impacto sustentável do planeta. Atitudes verdes valem pontos, ranking e recompensas reais.",
    firstColumnTitle: "Plataforma",
    firstColumnLinks: [
      { label: "Simulador", to: "/plataforma" },
      { label: "Validar Ação", to: "/validar" },
      { label: "Ranking", to: "/ranking" },
      { label: "Sobre", to: "/sobre" },
    ],
    copyrightSeparator: "+",
  },
  "/sobre": {
    description: DESCRICAO_PADRAO,
    firstColumnTitle: "Páginas",
    firstColumnLinks: PAGINAS_LINKS,
    copyrightSeparator: "+",
  },
  "/integrantes": {
    description: DESCRICAO_PADRAO,
    firstColumnTitle: "Páginas",
    firstColumnLinks: PAGINAS_LINKS,
    copyrightSeparator: "+",
  },
  "/faq": {
    description:
      "O lugar para se conectar e transformar seu tempo em benefícios reais para você e para o planeta.",
    firstColumnTitle: "Páginas",
    firstColumnLinks: PAGINAS_LINKS,
    copyrightSeparator: "·",
  },
  "/contato": {
    description: DESCRICAO_PADRAO,
    firstColumnTitle: "Páginas",
    firstColumnLinks: PAGINAS_LINKS,
    copyrightSeparator: "·",
  },
  "/plataforma": {
    description: DESCRICAO_PADRAO,
    firstColumnTitle: "Páginas",
    firstColumnLinks: PAGINAS_LINKS,
    copyrightSeparator: "+",
  },
  "/ranking": {
    description: DESCRICAO_PADRAO,
    firstColumnTitle: "Páginas",
    firstColumnLinks: PAGINAS_LINKS,
    copyrightSeparator: "+",
  },
  "/validar": {
    description: DESCRICAO_PADRAO,
    firstColumnTitle: "Plataforma",
    firstColumnLinks: [
      { label: "Simulador", to: "/plataforma" },
      { label: "Validar Ação", to: "/validar" },
      { label: "Ranking", to: "/ranking" },
    ],
    copyrightSeparator: "+",
  },
};

const FALLBACK: FooterConfig = CONFIG_POR_ROTA["/sobre"];

export function getFooterConfig(pathname: string): FooterConfig {
  return CONFIG_POR_ROTA[pathname] ?? FALLBACK;
}
