"use client";
import Image from "next/image";
import { FaRegLightbulb, FaHandsHelping, FaRegStar } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="aboutBleed">
      <div className="aboutWrap">
        {/* Header  */}
        <div className="aboutHeader">
          <h2 className="aboutHeaderTitle">
            <span className="aboutHeaderArrow">{"<<"}</span>
            Sobre nosotros
            <span className="aboutHeaderArrow">{">>"}</span>
          </h2>
        </div>

        {/* Card completa */}
        <div className="aboutCardFull">
          {/* Parte oscura */}
          <div className="aboutTopFull">
            <div className="aboutGridFull">
              {/* Imagen + triángulos */}
              <div className="aboutImgZone">
                <span className="aboutTri aboutTriBackLeft" />
                <span className="aboutTri aboutTriBackBottom" />
                <span className="aboutTri aboutTriFrontCorner" />

                <div className="aboutImgHover">
                  <Image
                    src="/images/equipo-folkode.jpg"
                    alt="Equipo Folkode"
                    width={900}
                    height={600}
                    className="aboutImg"
                    priority
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="aboutTextFull">
                <p>
                  Somos un equipo apasionado por el desarrollo web moderno y el diseño centrado en el usuario.
                  Creamos soluciones digitales que combinan funcionalidad, estética y tecnología de vanguardia.
                </p>

                <p>
                  Trabajamos junto a clientes y empresas para entender sus necesidades, identificar sus dolencias y
                  transformar esas dificultades en herramientas digitales eficientes, seguras y fáciles de usar.
                </p>

                <p className="aboutTextStrong">
                  Construir productos que no solo funcionen, sino que inspiren y conecten con las personas.
                  En Folkode, tu visión es nuestra misión.
                </p>
              </div>
            </div>
          </div>

          {/* Base verde + iconos */}
          <div className="aboutBottomFull">
            <div className="aboutIconsFull">
              <div className="aboutIconItem">
                <div className="aboutIconCircle">
                  <FaRegLightbulb />
                </div>
                <h4>Innovación constante</h4>
                <p>Usamos las últimas tecnologías para soluciones robustas y escalables.</p>
              </div>

              <div className="aboutIconItem">
                <div className="aboutIconCircle">
                  <FaHandsHelping />
                </div>
                <h4>Colaboración activa</h4>
                <p>Trabajamos junto a nuestros clientes para entender y superar sus expectativas.</p>
              </div>

              <div className="aboutIconItem">
                <div className="aboutIconCircle">
                  <FaRegStar />
                </div>
                <h4>Compromiso con la calidad</h4>
                <p>Cada línea de código refleja nuestra dedicación a la excelencia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
