"use client"
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useEffect } from 'react'
import { Group, SpotLight, Points } from 'three'
import { HelmetModel } from './Models/HelmetModel'

const AnimatedHelmetWrapper = () => {
  const groupRef = useRef<Group>(null)
  const [scale, setScale] = React.useState(0.13);
  const [positionY, setPositionY] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScale(0.08);
        setPositionY(0.7);
      } else {
        setScale(0.13);
        setPositionY(0);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.05;
      groupRef.current.position.y = positionY + Math.sin(time * 0.4) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={scale} position={[0, positionY, 0]}>
      <HelmetModel />
    </group>
  );
};

const DynamicLight = () => {
  const lightRef = useRef<SpotLight>(null)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 0.5) * 5;
      lightRef.current.position.z = Math.cos(time * 0.5) * 5;
    }
  });
  
  return (
    <spotLight
      ref={lightRef}
      position={[5, 5, 5]}
      angle={0.5}
      penumbra={1}
      intensity={2}
      castShadow
      color="#ff6b35"
    />
  );
};

const Particles = () => {
  const particlesRef = useRef<Points>(null)
  // Generate stable random positions only once per mount
  const positions = React.useMemo(() => {
    const arr = new Float32Array(1000 * 3);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 30;
      arr[i + 1] = (Math.random() - 0.5) * 30;
      arr[i + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ff6b35" transparent opacity={0.6} />
    </points>
  );
};

const Helmet = () => {
  const [canvasKey, setCanvasKey] = React.useState(0);
  React.useEffect(() => {
    const handleResize = () => setCanvasKey(k => k + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Track if desktop (width > 768px)
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth > 768 : true
  );
  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Canvas 
      key={canvasKey}
      camera={{ position: [0, 0, 8], fov: 45 }}
      shadows
    >
      <ambientLight intensity={1.2} />
      <directionalLight 
        position={[5, 10, 7]} 
        intensity={2.5} 
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, -5, 5]} intensity={1.5} color="#aeefff" />
      <pointLight position={[-6, 2, 6]} intensity={1.2} color="#ffb347" />
      <DynamicLight />
      <fog attach="fog" args={['#000000', 8, 25]} />
      <Particles />
      <AnimatedHelmetWrapper />
      {isDesktop && (
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      )}
    </Canvas>
  )
}

export default Helmet