import { Scene, PerspectiveCamera, WebGLRenderer } from "three"

export const scene = new Scene()
export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000,
)

// Our three renderer
let renderer: WebGLRenderer

/// Can be viewed here
const init = async () => {
  renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
}

// Can be viewed here
const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
