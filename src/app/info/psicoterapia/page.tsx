import { BlogBody } from "@/components/Blog/BlogBody";
import { BlogHighlight } from "@/components/Blog/BlogHighlight";
import { BlogParagraph } from "@/components/Blog/BlogParagraph";
import { BlogTitle } from "@/components/Blog/BlogTitle";

export default function foo() {
  return (
    <main className="pt-20 pb-32">
      <BlogBody>
        <BlogTitle className="">O que é a psicoterapia? (Jung, 1935)</BlogTitle>

        <BlogParagraph>
          Há bem pouco tempo, os clínicos bem intencionados ainda recomendavam
          espaço "ar puro", "aplicações de água fria" e "psicoterapia", tudo de
          uma vez só, cada vez que um caso se complicava misteriosamente, devido
          a um fenômeno psíquico. Olhando mais de perto, o que naquele tempo se
          entendia por psicoterapia, era uma espécie de conselho energético ou
          benevolente paternal, imitando, talvez, a Dubois na forma de convencer
          o doente de que o sintoma "era apenas psíquico" e, portanto, não
          passava de imaginação doentia.
        </BlogParagraph>

        <BlogParagraph>
          [...] Hoje em dia, a psicoterapia, é uma ciência e um método
          científico, ao passo que antigamente a "psicoterapia" parecia estar ao
          alcance de qualquer pessoa. O conhecimento mais profundo da natureza
          das neuroses e das complicações psíquicas de certas doenças físicas
          mudou a índole do tratamento e diferenciou-a consideravelmente. De
          acordo com a antiga teoria da sugestão, era preciso reagir aos
          sintomas, reprimindo-os. Esta concepção foi substituída pela concepção
          psicanalítica de Freud, que sabia que{" "}
          <BlogHighlight>
            a causa da doença não era afastada pela repressão do sintoma, e que
            este era mais um sinal, um indício direto ou indireto das causas da
            doença.
          </BlogHighlight>{" "}
          Esta é a concepção mais recente, isto é, o ponto de vista geralmente
          aceito, de uns trinta anos para cá. Revolucionou a terapia, na medida
          em que existia a conscientização das causas, contrariando totalmente a
          terapia por sugestão.
        </BlogParagraph>

        <BlogParagraph>[...]</BlogParagraph>

        <BlogParagraph>
          <BlogHighlight>
            A tomada de consciência das causas, exigida pela terapia freudiana,
            tornou-se o leitmotiv e a condição básica preliminar de todas as
            formas mais recentes de psicoterapia.
          </BlogHighlight>{" "}
          A pesquisa feita nos últimos cinquenta anos, no campo da
          psicopatologia; provou de maneira incontestável que os principais
          processos etiológicos são essencialmente de natureza inconsciente, por
          um lado, e a experiência prática deixou evidente, por outro, que a
          conscientização dos conteúdos ou processos etiológicos é um fator
          terapêutico de importância maior, na prática, do que a sugestão. No
          decorrer dos últimos 25 a 30 anos operou-se, por conseguinte, uma
          mudança no campo da psicoterapia, em detrimento da sugestão direta, e
          a favor de todas as formas de terapia baseadas na conscientização das
          causas patogênicas.
        </BlogParagraph>

        <BlogTitle>Fonte</BlogTitle>
        <BlogParagraph>
          Jung, C.G. <span className="font-bold">O que é a psicoterapia?</span>{" "}
          Schweizerische Arztezeiting fur Standesfragen, XVI, 1935, 26, p.335.
        </BlogParagraph>
      </BlogBody>
    </main>
  );
}
