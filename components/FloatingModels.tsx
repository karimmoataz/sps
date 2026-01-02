"use client";
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { TrophyModel } from './Models/TrophyModel';
import { ShieldModel } from './Models/ShieldModel';
import { SwordModel } from './Models/SwordModel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTrophy = () => {
  return (
    <group scale={0.4} position={[0, 0, 0]} rotation={[5, 0, 3]}>
      <TrophyModel />
    </group>
  );
};

const AnimatedShield = () => {
  return (
    <group scale={0.003} position={[0, 0, 0]}>
      <ShieldModel />
    </group>
  );
};

const AnimatedSword = () => {
  return (
    <group scale={0.003} position={[0, 0, 0]} rotation={[0, 1.5, 0.5]}>
      <SwordModel />
    </group>
  );
};

const FloatingModels = () => {
  const trophyRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const swordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Trophy animation - moves between sections
      if (trophyRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          }
        });

        tl.to(trophyRef.current, { x: '-10vw', y: '5vh', duration: 1 })
          .to(trophyRef.current, { x: '5vw', y: '15vh', duration: 1 })
          .to(trophyRef.current, { x: '-5vw', y: '25vh', duration: 1 })
          .to(trophyRef.current, { x: '10vw', y: '35vh', duration: 1 });
      }

      // Shield animation - moves between sections
      if (shieldRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          }
        });

        tl.to(shieldRef.current, { x: '15vw', y: '0vh', duration: 1 })
          .to(shieldRef.current, { x: '-10vw', y: '10vh', duration: 1 })
          .to(shieldRef.current, { x: '20vw', y: '20vh', duration: 1 })
          .to(shieldRef.current, { x: '5vw', y: '30vh', duration: 1 });
      }

      // Sword animation - moves between sections
      if (swordRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          }
        });

        tl.to(swordRef.current, { x: '10vw', y: '10vh', duration: 1 })
          .to(swordRef.current, { x: '-15vw', y: '18vh', duration: 1 })
          .to(swordRef.current, { x: '5vw', y: '28vh', duration: 1 })
          .to(swordRef.current, { x: '-10vw', y: '38vh', duration: 1 });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Trophy */}
      <div 
        ref={trophyRef}
        className="fixed top-[5vh] right-[10vw] w-56 h-56 md:w-72 md:h-72 pointer-events-none z-[100]"
        style={{ willChange: 'transform' }}
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={5} />
          <directionalLight position={[5, 5, 5]} intensity={8} color="#ffffff" />
          <directionalLight position={[-5, -5, 5]} intensity={6} color="#ffd700" />
          <pointLight position={[-5, -5, 5]} intensity={5} color="#ffaa00" />
          <pointLight position={[5, 5, -5]} intensity={5} color="#ffffff" />
          <spotLight position={[0, 10, 0]} intensity={8} angle={0.5} penumbra={1} color="#ffffff" />
          <AnimatedTrophy />
        </Canvas>
      </div>

      {/* Shield */}
      <div 
        ref={shieldRef}
        className="fixed top-[10vh] left-[10vw] w-64 h-64 md:w-80 md:h-80 pointer-events-none z-[100]"
        style={{ willChange: 'transform' }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={5} />
          <directionalLight position={[5, 5, 5]} intensity={8} color="#ffffff" />
          <directionalLight position={[-5, 5, 5]} intensity={6} color="#ff6b35" />
          <pointLight position={[-5, 0, 5]} intensity={6} color="#ff8c00" />
          <pointLight position={[5, 0, -5]} intensity={5} color="#ffffff" />
          <spotLight position={[0, 10, 0]} intensity={8} angle={0.5} penumbra={1} color="#ffffff" />
          <AnimatedShield />
        </Canvas>
      </div>

      {/* Sword */}
      <div 
        ref={swordRef}
        className="fixed top-[20vh] right-[15vw] w-48 h-48 md:w-60 md:h-60 pointer-events-none z-[100]"
        style={{ willChange: 'transform' }}
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={5} />
          <directionalLight position={[3, 3, 5]} intensity={10} color="#ffffff" />
          <directionalLight position={[-3, 3, 5]} intensity={8} color="#c0c0c0" />
          <pointLight position={[0, -3, 3]} intensity={6} color="#ffffff" />
          <pointLight position={[3, 3, -3]} intensity={5} color="#ffffff" />
          <spotLight position={[0, 10, 5]} intensity={10} angle={0.5} penumbra={1} color="#ffffff" />
          <AnimatedSword />
        </Canvas>
      </div>
    </>
  );
};

export default FloatingModels;
