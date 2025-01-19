import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const progress = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: "14px",
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 50,
          }}
        >
          {progress.progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
