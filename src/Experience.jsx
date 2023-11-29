import { PresentationControls, OrbitControls, Stage } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Machine from "./Machine.jsx";

export default function Experience() {

    return <>

        <color attach="background" args={["#111111"]} />
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Stage
            environment={null}
            intensity={0.8}
        >
            <PresentationControls
                snap={true}
                polar={[0, 0, 0]}
            >
                <Machine />
            </PresentationControls>
        </Stage>

    </>
}