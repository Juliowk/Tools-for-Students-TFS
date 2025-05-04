import { Card, Col, Row } from "react-bootstrap";
import { BsChatLeftText } from "react-icons/bs";
import { CiCalculator2 } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";

import "./flipcard.css";

const Desktop = () => {
  return (
    <>
      <p className="fs-1">
        Mathematics <CiCalculator2 />
      </p>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <a
            href="https://www.geogebra.org/calculator"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">GeoGebra</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <CiCalculator2 size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Una geometria, álgebra e cálculo em um só lugar:
                        construa e mova figuras, resolva funções e visualize
                        gráficos com facilidade. Simule conceitos avançados e
                        aprofunde seu entendimento de forma clara e intuitiva
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://photomath.com/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Photomath</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <CiCalculator2 size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Tire uma foto da equação e veja como ele resolve passo a
                        passo! Com tecnologia OCR, reconhece equações
                        manuscritas ou digitadas e oferece soluções interativas,
                        além de explicar cada etapa de forma clara, facilitando
                        o aprendizado.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://www.wolframalpha.com/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Wolfram Alpha</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <CiCalculator2 size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Responde a consultas detalhadas em matemática, desde
                        cálculos diferenciais até estatísticas. Além de resolver
                        problemas complexos, também oferece suporte em física,
                        química e análise de dados, tornando o aprendizado mais
                        completo e acessível.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://pt.khanacademy.org/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Khan Academy</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <CiCalculator2 size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Com vídeos e exercícios para diversas disciplinas, do
                        ensino fundamental a áreas avançadas como física e
                        economia. Adaptada a diferentes estilos de aprendizagem,
                        permitindo que os estudantes pratiquem no seu próprio
                        ritmo.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1 text-end">
        Languages <BsChatLeftText />
      </p>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <a
            href="https://conjugacao.reverso.net/conjugacao-portugues.html"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Conjugador Reverso</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <BsChatLeftText size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Mostra todas as formas verbais e exemplos práticos,
                        ajudando no desenvolvimento da escrita e corrigindo
                        erros gramaticais comuns.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://pt.duolingo.com/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Duolingo</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <BsChatLeftText size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Com lições personalizadas por inteligência artificial,
                        adapta-se ao seu nível de conhecimento. Além de
                        vocabulário e gramática, inclui exercícios de audição e
                        pronúncia para melhorar sua fluência de forma divertida.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://www.spanishdict.com/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">SpanishDict</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <BsChatLeftText size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Com dicionário, explicações gramaticais e exercícios
                        interativos, além de tradutor para facilitar o
                        aprendizado. Explore seções sobre verbos irregulares,
                        tempos verbais e expressões comuns no espanhol falado
                        para melhorar sua fluência.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://pt.khanacademy.org/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Khan Academy</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <BsChatLeftText size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Com vídeos e exercícios para diversas disciplinas, do
                        ensino fundamental a áreas avançadas como física e
                        economia. Adaptada a diferentes estilos de aprendizagem,
                        permitindo que os estudantes pratiquem no seu próprio
                        ritmo.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>
      </Row>

      <hr className="w-50 mx-auto mt-5" />

      <p className="fs-1">
        Geography <GiEarthAmerica />
      </p>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <a
            href="https://www.google.com.br/earth/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Google Earth</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <GiEarthAmerica size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Visualize mapas e imagens de satélite em 3D, analise
                        mudanças geográficas ao longo do tempo e faça visitas
                        virtuais a pontos turísticos e históricos ao redor do
                        planeta.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://www.seterra.com/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Seterra</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <GiEarthAmerica size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Memorize mapas, capitais e bandeiras com quizzes
                        interativos e desafios cronometrados. Explore países,
                        estados, regiões e bandeiras internacionais enquanto
                        fortalece seu conhecimento geográfico.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a className="link-dark link-underline link-underline-opacity-0">
            <p className="fs-3 text-center mb-2">Ainda não declarado</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <FaRegLightbulb size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Em breve uma nova ferramenta.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>

        <Col>
          <a
            href="https://pt.khanacademy.org/"
            target="_blank"
            className="link-dark link-underline link-underline-opacity-0"
          >
            <p className="fs-3 text-center mb-2">Khan Academy</p>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="bg-body-tertiary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Title className="fs-1">
                        <GiEarthAmerica size={50} />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="bg-body-secondary shadow h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
                      <Card.Text className="text-center">
                        Com vídeos e exercícios para diversas disciplinas, do
                        ensino fundamental a áreas avançadas como física e
                        economia. Adaptada a diferentes estilos de aprendizagem,
                        permitindo que os estudantes pratiquem no seu próprio
                        ritmo.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
