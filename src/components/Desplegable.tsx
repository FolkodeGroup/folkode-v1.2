'use client'
import { motion } from 'framer-motion'
import React, { useState, useRef } from "react";
import { Link as ScrollLink } from 'react-scroll';

export default function Desplegable() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Funciones para manejar hover
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    const menuRef = useRef<HTMLDivElement>(null);

    // Configuración de offset para react-scroll según viewport
    const getScrollOffset = () => {
        if (typeof window === 'undefined') return 196; 
        
        const width = window.innerWidth;
        if (width >= 768) return 196; // Desktop
        if (width >= 421) return 136; // Tablet
        return 110; // Móvil
    };

    return (
        <div 
            ref={menuRef} 
            style={{ position: "relative", display: "inline-block", height: "100%", width: "100%"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                type="button"
                className="btn-desplegable"
            >
                <span>Sobre Folkode</span>
            </button>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.01 }}
                    style={{
                        position: "absolute",
                        top: "100%",
                        right: '-5.3rem',
                        zIndex: 10,
                        width: "12.5rem",
                        background: "#025159",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                        display: "flex",
                        flexDirection: "column",
                        transform: "skew(40deg)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ul className="btn-desplegable-abierto" style={{ width: "100%", textAlign: "center", margin: 0, padding: 0, paddingBottom:"10px" }}>
                        <li className="py-[.5rem] text-body-desplegable" style={{ width: "100%" ,transition:".5s"}}>
                            <ScrollLink
                                to="sobre-folkode"
                                spy={true}
                                smooth={true}
                                offset={-getScrollOffset()}
                                duration={800}
                                activeClass="active"
                                style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#fff', textDecoration: 'none'}}
                            >
                                Nosotros
                            </ScrollLink>
                        </li>
                        <li className="py-[.5rem] text-body-desplegable" style={{ width: "100%" ,transition:".5s"}}>
                            <ScrollLink
                                to="nuestro-equipo"
                                spy={true}
                                smooth={true}
                                offset={-getScrollOffset()}
                                duration={800}
                                activeClass="active"
                                style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#fff', textDecoration: 'none'}}
                            >
                                Nuestro Equipo
                            </ScrollLink>
                        </li>
                        <li className="py-[.5rem] text-body-desplegable" style={{ width: "100%" ,transition:".5s"}}>
                            <ScrollLink
                                to="que-ofrecemos"
                                spy={true}
                                smooth={true}
                                offset={-getScrollOffset()}
                                duration={800}
                                activeClass="active"
                                style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#fff', textDecoration: 'none'}}
                            >
                                Que Ofrecemos
                            </ScrollLink>
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
}