import Icon from "../components/Icon";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import useDocumentMeta from "../hooks/useDocumentMeta";
import foto1 from "../assets/integrante-1.jpg";
import foto2 from "../assets/integrante-2.jpg";
import foto3 from "../assets/integrante-3.jpeg";
import foto4 from "../assets/integrante-4.jpg";
import foto5 from "../assets/integrante-5.jpeg";

interface Integrante {
  nome: string;
  foto: string;
  rm: string;
  github: string;
  linkedin: string;
}

const INTEGRANTES: Integrante[] = [
  {
    nome: "Guilherme dos Santos Rocha",
    foto: foto1,
    rm: "RM 570005 · Turma 1TDSPO",
    github: "https://github.com/Rochagx",
    linkedin: "https://www.linkedin.com/in/guilherme-rocha-tech/",
  },
  {
    nome: "Giovanni Della Crucce Azevedo Santana",
    foto: foto3,
    rm: "RM 572752 · Turma 1TDSPO",
    github: "https://github.com/giovannidcas",
    linkedin: "https://www.linkedin.com/in/giovanni-santana-7bb590249/",
  },
  {
    nome: "César Anastácio dos Anjos Ledres",
    foto: foto2,
    rm: "RM 573833 · Turma 1TDSPO",
    github: "https://github.com/cesarledres",
    linkedin: "https://www.linkedin.com/in/césar-ledres-679240318/",
  },
  {
    nome: "Caio Gonçalves Feixas",
    foto: foto4,
    rm: "RM 569956 · Turma 1TDSPO",
    github: "https://github.com/Caiofeixas",
    linkedin: "https://www.linkedin.com/in/caio-gonçalves-450008322/",
  },
  {
    nome: "Théo Caria Gonçalves",
    foto: foto5,
    rm: "RM 572914 · Turma 1TDSPO",
    github: "https://github.com/theo4321",
    linkedin: "https://www.linkedin.com/in/theo-caria-801834395/",
  },
];

export default function Integrantes() {
  useDocumentMeta(
    "Integrantes — SoulUp",
    "Conheça a equipe que desenvolveu a plataforma SoulUp: nomes, RMs, turma e contatos profissionais.",
  );

  return (
    <section className="py-16">
      <Container>
        <SectionHeading>
          <h1>Equipe NextCode</h1>
          <p className="mx-auto max-w-[640px]">
            Cinco estudantes de Análise e Desenvolvimento de Sistemas — FIAP,
            turma 1TDSPO — unidos pela missão de transformar atitudes em
            impacto.
          </p>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INTEGRANTES.map((integrante) => (
            <article
              className="animate-fadeUp rounded-md border border-borderc bg-surface p-6 text-center shadow-soft-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-md"
              key={integrante.nome}
            >
              <div className="mx-auto mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-[3px] border-mint shadow-soft-sm">
                <img
                  src={integrante.foto}
                  alt={`Foto de ${integrante.nome}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 font-display font-semibold text-deep">
                {integrante.nome}
              </h3>
              <p className="mb-4 text-[0.85rem] text-muted">{integrante.rm}</p>
              <div className="flex justify-center gap-3">
                <a
                  href={integrante.github}
                  target="_blank"
                  rel="noopener"
                  aria-label={`GitHub de ${integrante.nome.split(" ")[0]}`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-bg text-deep transition-all hover:scale-110 hover:bg-teal hover:text-white"
                >
                  <Icon name="github" style={{ width: "20px", height: "20px" }} />
                </a>
                <a
                  href={integrante.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label={`LinkedIn de ${integrante.nome.split(" ")[0]}`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-bg text-deep transition-all hover:scale-110 hover:bg-teal hover:text-white"
                >
                  <Icon name="linkedin" style={{ width: "20px", height: "20px" }} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
