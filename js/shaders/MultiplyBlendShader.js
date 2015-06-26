var MultiplyBlendShader = {
    uniforms: {
        tDiffuse: { type: "t", value: 0, texture: null }, // The base scene buffer
        tDiffuse2: { type: "t", value: 1, texture: null }, // The second scene buffer
    },
 
    vertexShader: [
        "varying vec2 vUv;",
 
        "void main() {",
 
            "vUv = vec2( uv.x, uv.y );",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
 
        "}"
    ].join("\n"),
 
    fragmentShader: [
        "uniform sampler2D tDiffuse;",
        "uniform sampler2D tDiffuse2;",
 
        "varying vec2 vUv;",
 
        "void main() {",
 
            "vec4 texel = texture2D( tDiffuse, vUv );",
            "vec4 texel2 = texture2D( tDiffuse2, vUv );",
            "gl_FragColor = vec4(texel2.rgb * texel.rgb, texel2.a);", 
        "}"
    ].join("\n")
};