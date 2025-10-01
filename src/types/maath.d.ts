declare module 'maath/random' {
  export function inSphere(
    buffer: Float32Array,
    options?: { radius?: number }
  ): Float32Array;
  
  export function inBox(
    buffer: Float32Array,
    options?: { sides?: [number, number, number] }
  ): Float32Array;
  
  export function onSphere(
    buffer: Float32Array,
    options?: { radius?: number }
  ): Float32Array;
}

declare module 'maath/random/dist/maath-random.esm' {
  export * from 'maath/random';
}
