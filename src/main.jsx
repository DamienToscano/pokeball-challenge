import { Canvas } from '@react-three/fiber'
import './index.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [- 0.5, 0.25, -1.5]
			}}
		>
			<Experience />
		</Canvas>
		<Footer />
	</React.StrictMode>,
)
