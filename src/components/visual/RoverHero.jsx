import { useEffect, useRef, useState } from 'react';
import './RoverHero.css';

const RoverHero = ({ title }) => {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const motionRef = useRef(null);
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    motionRef.current?.(playing);
  }, [playing]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlaying(!preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      const [THREE, { GLTFLoader }] = await Promise.all([
        import('three'),
        import('three/addons/loaders/GLTFLoader.js'),
      ]);
      if (disposed) return;

      const canvas = canvasRef.current;
      const stage = stageRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-2, 2, 1, -1, 0.1, 20);
      camera.position.z = 6;
      scene.add(new THREE.HemisphereLight(0xffffff, 0x617175, 2));
      const light = new THREE.DirectionalLight(0xffffff, 2);
      light.position.set(-3, 5, 4);
      scene.add(light);
      const material = new THREE.MeshStandardMaterial({ color: 0xd0d8d8, roughness: 0.8, metalness: 0.1 });
      let model;
      let frame = 0;
      let angle = 0.65;
      let previousTime = 0;
      let visible = true;
      let moving = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let aspect = 2;

      const render = () => {
        if (!model) return;
        const depth = Math.sin(angle);
        const orbitWidth = Math.min(aspect * 0.57, Math.max(0, aspect - 0.7));
        model.position.set(Math.cos(angle) * orbitWidth, -depth * 0.42, 0);
        model.rotation.set(0.23, -angle * 1.8 + 0.6, -0.1);
        model.scale.setScalar(0.83 + depth * 0.08);
        canvas.style.zIndex = depth < 0 ? '0' : '2';
        renderer.render(scene, camera);
      };

      const tick = (time) => {
        frame = 0;
        if (previousTime) angle += Math.min(time - previousTime, 50) * 0.00022;
        previousTime = time;
        render();
        if (moving && visible && !document.hidden) frame = requestAnimationFrame(tick);
      };

      const sync = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        previousTime = 0;
        if (model && moving && visible && !document.hidden) frame = requestAnimationFrame(tick);
      };
      motionRef.current = (value) => { moving = value; sync(); };

      const resize = () => {
        const { width, height } = stage.getBoundingClientRect();
        aspect = width / height;
        camera.left = -aspect;
        camera.right = aspect;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
        render();
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(stage);
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
      observer.observe(stage);
      document.addEventListener('visibilitychange', sync);

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        resizeObserver.disconnect();
        document.removeEventListener('visibilitychange', sync);
        motionRef.current = null;
        model?.traverse((child) => { if (child.isMesh) child.geometry.dispose(); });
        material.dispose();
        renderer.dispose();
      };

      const gltf = await new GLTFLoader().loadAsync('/models/rover.glb');
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((original) => original.dispose());
          if (disposed) child.geometry.dispose();
          else child.material = material;
        }
      });
      if (disposed) return;
      model = gltf.scene;
      scene.add(model);
      resize();
      setStatus('ready');
      sync();
    };

    start().catch(() => {
      cleanup();
      cleanup = () => {};
      if (!disposed) setStatus('unavailable');
    });
    return () => { disposed = true; cleanup(); };
  }, []);

  return (
    <div className="rover-hero">
      <div className="rover-hero-stage" ref={stageRef}>
        <span className="rover-hero-word" aria-hidden="true">Rover</span>
        <canvas ref={canvasRef} className="rover-hero-canvas" aria-hidden="true" />
      </div>
      <h1 className="rover-hero-title" aria-label={title}>
        <span aria-hidden="true">{title.split(' - ')[1]}</span>
      </h1>
      <div className="rover-hero-details">
        <a href="https://www.waveshare.com/wiki/UGV-Rover">Stock UGV model ↗</a>
        {status === 'ready' && (
          <button type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause rover animation' : 'Play rover animation'}>
            {playing ? 'Pause motion' : 'Play motion'}
          </button>
        )}
      </div>
    </div>
  );
};

export default RoverHero;
