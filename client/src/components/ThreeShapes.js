import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeShapes = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredObject = null;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const spotlight = new THREE.SpotLight(0xffffff, 0.3);
    spotlight.position.set(-5, 15, 10);
    spotlight.angle = Math.PI / 16;
    spotlight.penumbra = 0.1;
    scene.add(spotlight);
    
    const frustumSize = 10;
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Colors from the design
    const pink = new THREE.Color('#FFB5BA');
    const blue = new THREE.Color('#b0ccfd');
    const yellow = new THREE.Color('#f0fca4');
    const green = new THREE.Color('#B5FFD9');
    const solidPurple = new THREE.Color('#cfbffc');

    const createDonutWithCaps = (radius, tubeRadius, arc, segments, color) => {
      const group = new THREE.Group();
      
      const torusGeometry = new THREE.TorusGeometry(radius, tubeRadius, 64, 64, arc);
      const torusMaterial = new THREE.MeshPhongMaterial({ 
        color, 
        side: THREE.DoubleSide,
        emissive: color,
        emissiveIntensity: 0.82,
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      group.add(torus);
      
      const cap1Pos = [radius, 0, 0];
      const cap2Pos = [
        Math.cos(arc) * radius,
        Math.sin(arc) * radius,
        0
      ];
      
      const sphereGeometry = new THREE.SphereGeometry(tubeRadius, 32, 32);
      const sphereMaterial = new THREE.MeshPhongMaterial({ 
        color,
        shininess: 0,
        emissive: color,
        emissiveIntensity: 0.82
      });
      
      const cap1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
      cap1.position.set(...cap1Pos);
      group.add(cap1);
      
      const cap2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
      cap2.position.set(...cap2Pos);
      group.add(cap2);

      group.userData.originalPosition = new THREE.Vector3();
      group.userData.originalRotation = new THREE.Euler();
      group.userData.isAnimating = false;
      
      return group;
    };

    const yellowDonut = createDonutWithCaps(2.7, 1.3, Math.PI, 100, yellow);
    yellowDonut.position.set(6, 5, 0);
    yellowDonut.rotation.z = Math.PI * -0.65;
    yellowDonut.userData.originalPosition.copy(yellowDonut.position);
    yellowDonut.userData.originalRotation.copy(yellowDonut.rotation);
    scene.add(yellowDonut);

    const greenDonut = createDonutWithCaps(3, 1.12, Math.PI * 2, 100, green);
    greenDonut.position.set(-7, 4.6, 0);
    greenDonut.rotation.z = -Math.PI * 0.25;
    greenDonut.userData.originalPosition.copy(greenDonut.position);
    greenDonut.userData.originalRotation.copy(greenDonut.rotation);
    scene.add(greenDonut);

    const purpleDonut = createDonutWithCaps(2.7, 1.3, Math.PI * 1.06, 100, solidPurple);
    purpleDonut.position.set(-5.9, -5.1, 0);
    purpleDonut.rotation.z = Math.PI * -0.4;
    purpleDonut.userData.originalPosition.copy(purpleDonut.position);
    purpleDonut.userData.originalRotation.copy(purpleDonut.rotation);
    scene.add(purpleDonut);

    const sphereGeometry = new THREE.SphereGeometry(1.2, 30, 30);
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      color: pink,
      transparent: true,
      opacity: 0.9
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 4.5, 0);
    sphere.userData.originalPosition = sphere.position.clone();
    scene.add(sphere);

    const threeQuarter = createDonutWithCaps(2.7, 1.25, Math.PI * 1.45, 100, blue);
    threeQuarter.position.set(5.5, -2, 0);
    threeQuarter.rotation.z = Math.PI * -1.15;
    threeQuarter.userData.originalPosition.copy(threeQuarter.position);
    threeQuarter.userData.originalRotation.copy(threeQuarter.rotation);
    scene.add(threeQuarter);

    camera.position.z = 10;
    camera.lookAt(0, 0, 0);

    // Hover animation function
    const startHoverAnimation = (object) => {
      if (!object.userData.isAnimating) {
        object.userData.isAnimating = true;
        object.userData.animationStartTime = Date.now();
      }
    };

    const updateHoverAnimation = (object) => {
      if (object.userData.isAnimating) {
        const elapsed = Date.now() - object.userData.animationStartTime;
        const duration = 1500; 
        
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const ease = Math.sin(progress * Math.PI);
          
          const offsetX = Math.sin(elapsed * 0.005) * 0.05;
          const offsetY = Math.cos(elapsed * 0.005) * 0.05;
          const rotationOffset = Math.sin(elapsed * 0.005) * 0.02;

          object.position.x = object.userData.originalPosition.x + (offsetX * ease);
          object.position.y = object.userData.originalPosition.y + (offsetY * ease);
          
          if (object !== sphere) { 
            object.rotation.z = object.userData.originalRotation.z + (rotationOffset * ease);
          }
        } else {
          // Reset animation state
          object.userData.isAnimating = false;
          object.position.copy(object.userData.originalPosition);
          if (object !== sphere) {
            object.rotation.copy(object.userData.originalRotation);
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Update hover animations
      [yellowDonut, greenDonut, purpleDonut, sphere, threeQuarter].forEach(object => {
        updateHoverAnimation(object);
      });

      // Base subtle floating animation
      greenDonut.position.y += Math.sin(Date.now() * 0.0009) * 0.001;
      sphere.position.y += Math.sin(Date.now() * 0.0008) * 0.003;
      threeQuarter.rotation.z = Math.PI * -1.10 + Math.sin(Date.now() * 0.0006) * 0.12;
      threeQuarter.position.y = -3.2;
      purpleDonut.rotation.z = Math.PI * -0.4 + Math.sin(Date.now() * 0.0006) * 0.05;
      yellowDonut.rotation.z = Math.PI * -0.65 + Math.sin(Date.now() * 0.0006) * 0.05;

      renderer.render(scene, camera);
    };

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let rootObject = intersects[0].object;
        while (rootObject.parent && rootObject.parent !== scene) {
          rootObject = rootObject.parent;
        }

        if (hoveredObject !== rootObject) {
          hoveredObject = rootObject;
          startHoverAnimation(rootObject);
        }
      } else {
        hoveredObject = null;
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      camera.left = frustumSize * aspect / -2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
    />
  );
};

export default ThreeShapes;