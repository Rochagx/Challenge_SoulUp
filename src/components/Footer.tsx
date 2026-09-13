import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.svg";

export interface FooterLink {
  label: string;
  to: string;
}

interface FooterProps {
  description: string;
  firstColumnTitle: string;
  firstColumnLinks: FooterLink[];
  copyrightSeparator?: string;
}

const EQUIPE_LINKS: FooterLink[] = [
  { label: "Integrantes", to: "/integrantes" },
  { label: "FAQ", to: "/faq" },
  { label: "Contato", to: "/contato" },
];

export default function Footer({
  description,
  firstColumnTitle,
  firstColumnLinks,
  copyrightSeparator = "+",
}: FooterProps) {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-deep pb-6 pt-10 text-white/85">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-10">
          <div>
            <img src={logoWhite} alt="SoulUp" className="h-7 w-auto" />
            <p className="mt-3 text-sm text-white/70">{description}</p>
          </div>

          <div>
            <h4 className="mb-4 text-base text-white">{firstColumnTitle}</h4>
            <ul className="list-none">
              {firstColumnLinks.map((link) => (
                <li key={link.to} className="mb-2">
                  <Link to={link.to} className="text-sm text-white/75 hover:text-mint">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base text-white">Equipe</h4>
            <ul className="list-none">
              {EQUIPE_LINKS.map((link) => (
                <li key={link.to} className="mb-2">
                  <Link to={link.to} className="text-sm text-white/75 hover:text-mint">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {anoAtual} Challenge SoulUp {copyrightSeparator} NextCode · Turma 1TDSPO
        </div>
      </div>
    </footer>
  );
}
