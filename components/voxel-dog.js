import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = ({ interactive = false }) => {
  const refContainer = useRef()
  const rendererRef = useRef(null)
  const initializedRef = useRef(false)
  const [loading, setLoading] = useState(true)
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [_controls, setControls] = useState()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    const renderer = rendererRef.current
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (!container || initializedRef.current) return
    initializedRef.current = true

      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, prefersReducedMotion ? 1.2 : 1.8))
      renderer.setSize(scW, scH)
      renderer.outputColorSpace = THREE.SRGBColorSpace
      const mountNode = document.createElement('div')
      mountNode.style.position = 'absolute'
      mountNode.style.inset = '0'
      mountNode.style.pointerEvents = interactive ? 'auto' : 'none'
      container.appendChild(mountNode)
      mountNode.appendChild(renderer.domElement)
      rendererRef.current = renderer

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const scene = new THREE.Scene()

      const ambientLight = new THREE.AmbientLight(0xb8c6bb, 0.9)
      const greenRimLight = new THREE.DirectionalLight(0x2d9957, 0.95)
      greenRimLight.position.set(5, 5, 4)
      const redFillLight = new THREE.PointLight(0xa6121f, 1.0, 30, 1.8)
      redFillLight.position.set(-3, 2.5, 2.5)
      scene.add(ambientLight)
      scene.add(greenRimLight)
      scene.add(redFillLight)

      const createGlowTexture = () => {
        const glowCanvas = document.createElement('canvas')
        glowCanvas.width = 1024
        glowCanvas.height = 1024
        const ctx = glowCanvas.getContext('2d')
        const gradient = ctx.createRadialGradient(512, 512, 70, 512, 512, 500)
        gradient.addColorStop(0, 'rgba(200, 28, 42, 0.9)')
        gradient.addColorStop(0.35, 'rgba(166, 18, 31, 0.45)')
        gradient.addColorStop(1, 'rgba(166, 18, 31, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 1024, 1024)
        const texture = new THREE.CanvasTexture(glowCanvas)
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.generateMipmaps = false
        return texture
      }

      const createWatermelonTexture = () => {
        const c = document.createElement('canvas')
        c.width = 256
        c.height = 256
        const x = c.getContext('2d')

        // Flesh
        x.beginPath()
        x.moveTo(36, 190)
        x.arc(128, 190, 92, Math.PI, 2 * Math.PI, false)
        x.closePath()
        x.fillStyle = '#c62236'
        x.fill()

        // White rind
        x.beginPath()
        x.arc(128, 190, 98, Math.PI, 2 * Math.PI, false)
        x.arc(128, 190, 90, 2 * Math.PI, Math.PI, true)
        x.closePath()
        x.fillStyle = '#dff2e4'
        x.fill()

        // Green rind
        x.beginPath()
        x.arc(128, 190, 106, Math.PI, 2 * Math.PI, false)
        x.arc(128, 190, 98, 2 * Math.PI, Math.PI, true)
        x.closePath()
        x.fillStyle = '#2d9957'
        x.fill()

        // Seeds
        x.fillStyle = '#130c0d'
        const seeds = [
          [92, 165], [112, 153], [132, 150], [152, 157], [171, 169],
        ]
        seeds.forEach(([sx, sy]) => {
          x.beginPath()
          x.ellipse(sx, sy, 4, 7, 0.2, 0, Math.PI * 2)
          x.fill()
        })

        // Tiny leaf
        x.beginPath()
        x.moveTo(188, 108)
        x.quadraticCurveTo(212, 88, 218, 112)
        x.quadraticCurveTo(202, 124, 188, 108)
        x.fillStyle = '#52c37a'
        x.fill()

        const tex = new THREE.CanvasTexture(c)
        tex.minFilter = THREE.LinearFilter
        tex.magFilter = THREE.LinearFilter
        tex.generateMipmaps = false
        return tex
      }

      const watermelonBuddy = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: createWatermelonTexture(),
          transparent: true,
          depthWrite: false,
        })
      )
      watermelonBuddy.scale.set(1.35, 1.35, 1)
      scene.add(watermelonBuddy)

      const spiderAura = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: createGlowTexture(),
          transparent: true,
          opacity: 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
      )
      spiderAura.scale.set(7.2, 7.2, 1)
      spiderAura.position.set(0, 1.0, -0.34)
      scene.add(spiderAura)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.82
      controls.enablePan = false
      controls.enableDamping = true
      controls.dampingFactor = 0.055
      controls.minDistance = 8
      controls.maxDistance = 26
      controls.target = target
      setControls(controls)

      const pointer = {
        x: 0,
        y: 0,
        targetIntensity: 0,
        intensity: 0,
      }

      const particleCount = 140
      const particleGeometry = new THREE.BufferGeometry()
      const particlePositions = new Float32Array(particleCount * 3)
      const particleColors = new Float32Array(particleCount * 3)
      const particleVelocities = new Float32Array(particleCount * 3)
      const particleLife = new Float32Array(particleCount)
      for (let i = 0; i < particleCount; i += 1) {
        const i3 = i * 3
        particlePositions[i3] = 0
        particlePositions[i3 + 1] = 0
        particlePositions[i3 + 2] = 0
        const isRed = i % 2 === 0
        particleColors[i3] = isRed ? 0.95 : 0.2
        particleColors[i3 + 1] = isRed ? 0.24 : 0.75
        particleColors[i3 + 2] = isRed ? 0.29 : 0.36
      }
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
      const seedBurst = new THREE.Points(particleGeometry, particleMaterial)
      seedBurst.position.set(0, 1.12, 0.25)
      seedBurst.renderOrder = 12
      scene.add(seedBurst)

      const timer = new THREE.Timer()
      let spider = null
      let lookImpulse = 0
      let nextLookSnap = 0.8

      const applySpiderShader = model => {
        model.traverse(child => {
          if (!child.isMesh || !child.material) return
          const materials = Array.isArray(child.material) ? child.material : [child.material]
          materials.forEach(material => {
            if (!material || !material.isMeshStandardMaterial) return
            material.onBeforeCompile = shader => {
              shader.uniforms.uTime = { value: 0 }
              shader.uniforms.uHover = { value: 0 }

              shader.vertexShader = shader.vertexShader
                .replace(
                  '#include <common>',
                  `#include <common>
                  varying vec3 vViewNormal;`
                )
                .replace(
                  '#include <beginnormal_vertex>',
                  `#include <beginnormal_vertex>
                  vViewNormal = normalize(normalMatrix * normal);`
                )

              shader.fragmentShader = shader.fragmentShader
                .replace(
                  '#include <common>',
                  `#include <common>
                  uniform float uTime;
                  uniform float uHover;
                  varying vec3 vViewNormal;`
                )
                .replace(
                  '#include <dithering_fragment>',
                  `
                  float shimmer = 0.5 + 0.5 * sin(uTime * 2.4 + vViewPosition.y * 3.1);
                  vec3 viewDir = normalize(vViewPosition);
                  float rim = pow(1.0 - abs(dot(normalize(vViewNormal), viewDir)), 2.2);
                  gl_FragColor.rgb += vec3(0.08, 0.2, 0.1) * shimmer * (0.45 + uHover * 1.25);
                  gl_FragColor.rgb += vec3(0.3, 0.12, 0.16) * rim * (0.45 + uHover * 1.35);
                  #include <dithering_fragment>
                  `
                )
              material.userData.shader = shader
            }
            material.needsUpdate = true
          })
        })
      }

      const spawnSeedBurst = () => {
        for (let i = 0; i < particleCount; i += 1) {
          const i3 = i * 3
          const theta = Math.random() * Math.PI * 2
          const spread = Math.random() * 1.65 + 0.85
          const elev = Math.random() * 0.6 - 0.1
          particlePositions[i3] = (Math.random() - 0.5) * 0.24
          particlePositions[i3 + 1] = Math.random() * 0.24
          particlePositions[i3 + 2] = (Math.random() - 0.5) * 0.24
          particleVelocities[i3] = Math.cos(theta) * spread + pointer.x * 0.5
          particleVelocities[i3 + 1] = Math.abs(elev) * 2.7 + 1.5
          particleVelocities[i3 + 2] = Math.sin(theta) * spread + pointer.y * 0.5
          particleLife[i] = 1.45
        }
        particleMaterial.opacity = 1.35
        particleGeometry.attributes.position.needsUpdate = true
      }

      const handlePointerMove = event => {
        const rect = container.getBoundingClientRect()
        const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const ny = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
        const centeredX = (nx + 0.11) * 0.82
        const centeredY = (ny - 0.48) * 0.82
        pointer.x = THREE.MathUtils.clamp(centeredX, -1, 1)
        pointer.y = THREE.MathUtils.clamp(centeredY, -1, 1)
        const dist = Math.sqrt(pointer.x * pointer.x + pointer.y * pointer.y)
        pointer.targetIntensity = THREE.MathUtils.clamp(1.15 - dist * 1.6, 0, 1)
      }

      const handlePointerLeave = () => {
        pointer.targetIntensity = 0
      }

      const handlePointerDown = () => {
        spawnSeedBurst()
      }

      if (interactive) {
        container.addEventListener('pointermove', handlePointerMove)
        container.addEventListener('pointerleave', handlePointerLeave)
        container.addEventListener('pointerdown', handlePointerDown)
      }

      loadGLTFModel(scene, '/spider.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(spiderObject => {
        spider = spiderObject
        applySpiderShader(spiderObject)
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        timer.update()
        const dt = timer.getDelta()
        const elapsed = timer.getElapsed()

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          pointer.intensity += (pointer.targetIntensity - pointer.intensity) * 0.085
          controls.autoRotateSpeed = THREE.MathUtils.lerp(
            controls.autoRotateSpeed,
            0.82 + pointer.intensity * 0.95,
            0.06
          )
          controls.update()
        }

        if (spider) {
          if (!prefersReducedMotion) {
            spider.position.y = 0.08 * Math.sin(elapsed * 1.3)
            spider.rotation.x = pointer.y * 0.12
            spider.rotation.z = pointer.x * 0.14

            if (elapsed > nextLookSnap && pointer.targetIntensity > 0.35) {
              lookImpulse = (Math.random() * 2 - 1) * 0.22
              nextLookSnap = elapsed + 1.2 + Math.random() * 1.8
            }
            lookImpulse *= 0.9
            spider.rotation.y += lookImpulse

            watermelonBuddy.position.set(
              Math.cos(elapsed * 1.05) * 2.1,
              1.42 + Math.sin(elapsed * 2.1) * 0.16,
              Math.sin(elapsed * 1.05) * 1.5
            )
            watermelonBuddy.material.rotation = Math.sin(elapsed * 1.8) * 0.1

            spiderAura.material.opacity = pointer.intensity * 0.72
            spiderAura.scale.setScalar(6.2 + pointer.intensity * 1.6)
          }

          spider.traverse(child => {
            if (!child.isMesh || !child.material) return
            const materials = Array.isArray(child.material) ? child.material : [child.material]
            materials.forEach(material => {
              if (material?.userData?.shader) {
                material.userData.shader.uniforms.uTime.value = elapsed
                material.userData.shader.uniforms.uHover.value = pointer.intensity
              }
            })
          })
        }

        greenRimLight.intensity = 1.1 + pointer.intensity * 0.9
        redFillLight.intensity = 1.0 + pointer.intensity * 1.2

        let livingParticles = 0
        for (let i = 0; i < particleCount; i += 1) {
          if (particleLife[i] <= 0) continue
          livingParticles += 1
          particleLife[i] = Math.max(0, particleLife[i] - dt * 0.95)
          const i3 = i * 3
          particlePositions[i3] += particleVelocities[i3] * dt
          particlePositions[i3 + 1] += particleVelocities[i3 + 1] * dt
          particlePositions[i3 + 2] += particleVelocities[i3 + 2] * dt
          particleVelocities[i3 + 1] -= dt * 2.15
        }
        if (livingParticles > 0) {
          particleGeometry.attributes.position.needsUpdate = true
          particleMaterial.opacity = 1.15 * particleLife.reduce((a, b) => a + b, 0) / particleCount
        } else {
          particleMaterial.opacity = 0
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        if (interactive) {
          container.removeEventListener('pointermove', handlePointerMove)
          container.removeEventListener('pointerleave', handlePointerLeave)
          container.removeEventListener('pointerdown', handlePointerDown)
        }
        particleGeometry.dispose()
        particleMaterial.dispose()
        renderer.dispose()
        rendererRef.current = null
        initializedRef.current = false
        if (mountNode && mountNode.parentNode === container) {
          container.removeChild(mountNode)
        }
      }
  }, [prefersReducedMotion, interactive])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer
      ref={refContainer}
      pointerEvents={interactive ? 'auto' : 'none'}
    >
      {loading && <DogSpinner />}
    </DogContainer>
  )
}

export default VoxelDog
