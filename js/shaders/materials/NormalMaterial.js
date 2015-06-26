var NormalMaterial = {
    uniforms: {
        shininess: { type: 'opacity', value : 1 },
    },
 
    vertexShader: [
        "varying vec3 vNormal;",

        "void main() {",

            "vNormal = normalize( normalMatrix * normal );",

            "vec4 mvPosition;",

            "#ifdef USE_SKINNING",

                "mvPosition = modelViewMatrix * skinned;",

            "#endif",

            "#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )",

                "mvPosition = modelViewMatrix * vec4( morphed, 1.0 );",

            "#endif",

            "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )",

                "mvPosition = modelViewMatrix * vec4( position, 1.0 );",

            "#endif",

            "gl_Position = projectionMatrix * mvPosition;"

        "}"
    ].join("\n"),
 
    fragmentShader: [
            "uniform float opacity;",
            "varying vec3 vNormal;",

            "void main() {",

                "gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",

            "}"
    ].join("\n")
};