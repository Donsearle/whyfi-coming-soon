import { useEffect, useRef } from 'react';

export default function NeuroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
    const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
    let uniforms: any;
    let gl: WebGLRenderingContext;

    function initShader() {
      const vsSource = `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
          vUv = .5 * (a_position + 1.);
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `;

      const fsSource = `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
          return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        float neuro_shape(vec2 uv, float t, float p) {
          vec2 sine_acc = vec2(0.);
          vec2 res = vec2(0.);
          float scale = 8.;
          for (int j = 0; j < 15; j++) {
            uv = rotate(uv, 1.);
            sine_acc = rotate(sine_acc, 1.);
            vec2 layer = uv * scale + float(j) + sine_acc - t;
            sine_acc += sin(layer) + 2.4 * p;
            res += (.5 + .5 * cos(layer)) / scale;
            scale *= (1.2);
          }
          return res.x + res.y;
        }

        void main() {
          vec2 uv = .5 * vUv;
          uv.x *= u_ratio;

          vec2 pointer = vUv - u_pointer_position;
          pointer.x *= u_ratio;
          float p = clamp(length(pointer), 0., 1.);
          p = .5 * pow(1. - p, 2.);

          float t = .001 * u_time;
          vec3 color = vec3(0.);

          float noise = neuro_shape(uv, t, p);

          noise = 1.2 * pow(noise, 3.);
          noise += pow(noise, 10.);
          noise = max(.0, noise - .5);
          noise *= (1. - length(vUv - .5));

          // WhyFi purple/fuchsia palette
          color = vec3(0.45, 0.04, 0.72); // #7209b7
          color += vec3(0.23, 0.05, 0.64) * sin(3.0 * u_scroll_progress + 1.5); // #3a0ca3 variation

          color = color * noise;

          gl_FragColor = vec4(color, noise);
        }
      `;

      gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        console.error("WebGL is not supported by your browser.");
        return null;
      }

      function createShader(gl: WebGLRenderingContext, sourceCode: string, type: number) {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error("Shader error: " + gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      }

      const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
      const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

      if (!vertexShader || !fragmentShader) return null;

      function createShaderProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        const program = gl.createProgram();
        if (!program) return null;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          console.error("Shader link error: " + gl.getProgramInfoLog(program));
          return null;
        }
        return program;
      }

      const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
      if (!shaderProgram) return null;

      uniforms = getUniforms(shaderProgram);

      function getUniforms(program: WebGLProgram) {
        let uniforms: any = {};
        let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
          let uniformInfo = gl.getActiveUniform(program, i);
          if (uniformInfo) {
            uniforms[uniformInfo.name] = gl.getUniformLocation(program, uniformInfo.name);
          }
        }
        return uniforms;
      }

      const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);
      const vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      gl.useProgram(shaderProgram);

      const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
      gl.enableVertexAttribArray(positionLocation);

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      return gl;
    }

    function render() {
      const currentTime = performance.now();
      pointer.x += (pointer.tX - pointer.x) * .2;
      pointer.y += (pointer.tY - pointer.y) * .2;
      gl.uniform1f(uniforms.u_time, currentTime);
      gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
      gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      if (uniforms && gl) {
        gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    }

    function setupEvents() {
      const updateMousePosition = (eX: number, eY: number) => {
        pointer.tX = eX;
        pointer.tY = eY;
      };

      window.addEventListener("pointermove", e => updateMousePosition(e.clientX, e.clientY));
      window.addEventListener("touchmove", e => updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
      window.addEventListener("click", e => updateMousePosition(e.clientX, e.clientY));
    }

    gl = initShader();
    if (gl) {
      setupEvents();
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      render();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-95"
      style={{ zIndex: 0 }}
    />
  );
}