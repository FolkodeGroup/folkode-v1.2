"use client";
import Image from "next/image";
import { FaRegLightbulb, FaHandsHelping, FaRegStar } from "react-icons/fa";
import { Handshake, Star, Lightbulb, ChevronsLeft, ChevronsRight } from "lucide-react"

export default function AboutSection() {

  return (
    <section id="sobre-nosotros" className="aboutBleed">
      <div className="aboutWrap">
        {/* Header  */}
        <div className="
          py-2
          flex 
          justify-center
          bg-[linear-gradient(to_bottom,rgba(11,79,85,0.9),rgb(43,90,93),rgb(74,129,86,79%))]
          shadow-[0_1px_15px_10px_#025159]
          blur-2
        ">
          <h2 className="aboutHeaderTitle text-[1rem] md:text-[2rem] flex items-center sd:text">
            <ChevronsLeft size={50} className="chevrons-icon scale-[.6] md:scale-[.8]"/>
            Sobre nosotros
            <ChevronsRight size={50} className="chevrons-icon scale-[.6] md:scale-[.8]"/>
          </h2>
        </div>

        {/* Card completa */}
        <div className="aboutCardFull">
          {/* Parte oscura */}
          <div className="aboutTopFull md:p-[4.6rem_4vw_4.6rem]">
            <div className="aboutGridFull">
              {/* Imagen + triángulos */}
              <div className="aboutImgZone">
                <Image
                  src="/shapes/PolygonLeft.svg"
                  alt=""
                  width={350}
                  height={200}
                  className="absolute left-[-20px] md:left-[-90px]  md:top-[50px] w-[150px] md:w-[350px] h-[200px] md:h-auto"
                />
                <Image
                  src="/shapes/PolygonTopRight.svg"
                  alt=""
                  width={125}
                  height={200}
                  className="absolute right-[-20px] md:right-[-60px] top-[-30px] md:top-[-60px] z-4 w-[60px] md:w-[125px]"
                />
                <Image
                  src="/shapes/PolygonRight.svg"
                  alt=""
                  width={125}
                  height={200}
                  className="absolute right-[-20px] md:right-[-70px] bottom-[-20px] md:bottom-[-40px] w-[125px] md:w-[300px]"
                />

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
                <Lightbulb size={35}/>
                <h4>Innovación constante</h4>
                <p>Usamos las últimas tecnologías para soluciones robustas y escalables.</p>
              </div>

              <div className="aboutIconItem">
                <Handshake size={35} />
                <h4>Colaboración activa</h4>
                <p>Trabajamos junto a nuestros clientes para entender y superar sus expectativas.</p>
              </div>

              <div className="aboutIconItem">
                <Star size={35}/>
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
