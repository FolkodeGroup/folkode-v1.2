"use client";
import Image from "next/image";
import { FaRegLightbulb, FaHandsHelping, FaRegStar } from "react-icons/fa";
import { Handshake, Star, Lightbulb, ChevronsLeft, ChevronsRight } from "lucide-react"

export default function AboutSection() {

  return (
    <section id="sobre-nosotros" className="w-full">
      <div className="aboutWrap">
        {/* Header  */}
        <div className="
          py-2
          flex 
          justify-center
          bg-[rgb(11,79,85)]
          blur-2
          rounded-t-3xl
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
            <div className="lg:max-w-[1300px] lg:mx-auto lg:grid lg:grid-cols-[1.05fr_1fr] lg:gap-[2.6rem] items-center  flex flex-col items-center gap-10 lg:gap-20">
              {/* Imagen + triángulos */}
              <div className="aboutImgZone">
                <Image
                  src="/shapes/PolygonLeft.svg"
                  alt=""
                  width={350}
                  height={200}
                  className="absolute left-[-20px] md:left-[-90px] lg:left-[-70px] xl:left-[-120px] md:top-[50px] w-[150px] md:w-[200px] lg:w-[300px] xl:w-[350px] h-[200px] md:h-auto"
                />
                <Image
                  src="/shapes/PolygonTopRight.svg"
                  alt=""
                  width={125}
                  height={200}
                  className="absolute right-[-20px] md:right-[-30px] lg:right-[-25px] xl:right-[-2rem] top-[-30px] md:top-[-30px] lg:top-[-30px] z-4 w-[60px] lg:w-[70px] xl:w-[5rem]"
                />
                <Image
                  src="/shapes/PolygonRight.svg"
                  alt=""
                  width={125}
                  height={200}
                  className="absolute right-[-20px] md:right-[-30px] lg:right-[-25px] xl:right-[-2rem] bottom-[-20px] md:bottom-[-40px] w-[125px] lg:w-[140px] xl:w-[300px]"
                />

                <div className="aboutImgHover ">
                  <Image
                    src="/images/grupo.png"
                    alt="Equipo Folkode"
                    width={900}
                    height={600}
                    className="aboutImg border-[3px,solid,#025159] "
                    priority
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="aboutTextFull z-20 max-w-xl space-y-6 text-white">

                <p className="text-xl font-semibold">
                  Creamos soluciones digitales modernas, funcionales y centradas en el usuario.
                </p>

                <p className="text-lg text-white/80 leading-relaxed">
                  Somos un equipo apasionado por el desarrollo web y el diseño UX/UI. 
                  Combinamos tecnología de vanguardia con una estética cuidada para crear 
                  productos que realmente funcionen.
                </p>

                <p className="text-lg text-white/80 leading-relaxed">
                  <strong className="text-white">
                    Trabajamos junto a clientes y empresas
                  </strong>{" "}
                  para entender sus necesidades, identificar sus dolencias y transformar 
                  esas dificultades en herramientas digitales eficientes, seguras y fáciles de usar.
                </p>

                <p className="italic text-white">
                  Construir productos que no solo funcionen, sino que inspiren.
                  <br />
                  <span className="font-medium">
                    En Folkode, tu visión es nuestra misión.
                  </span>
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
