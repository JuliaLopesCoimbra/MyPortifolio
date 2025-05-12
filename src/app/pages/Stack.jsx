import React, { useState, useEffect, useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initBgColor = '#ffffff';
const snapGrid = [20, 20];

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const Stack = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const baseX = 0;
    const midX = 250;
    const detailX = 550;

    setNodes([
      // Entrada principal
      { id: '1', type: 'input', data: { label: 'MINHA STACK' }, position: { x: baseX, y: 300 }, sourcePosition: 'right', style: { background: '#dbeafe', color: '#000', border: '1px solid #ccc' }, },

      // Categorias principais
      { id: '2', type: 'default', data: { label: 'Front-End' }, position: { x: midX, y: 0 }, sourcePosition: 'right', targetPosition: 'left',style: { background: '#fef9c3', color: '#000', border: '1px solid #ccc' }, },
      { id: '3', type: 'default', data: { label: 'Back-End' }, position: { x: midX, y: 150 }, sourcePosition: 'right', targetPosition: 'left',style: { background: '#fcd34d', color: '#000', border: '1px solid #ccc' }, },
      { id: '4', type: 'default', data: { label: 'Banco de Dados' }, position: { x: midX, y: 300 }, sourcePosition: 'right', targetPosition: 'left' ,style: { background: '#bbf7d0', color: '#000', border: '1px solid #ccc' },},
      { id: '6', type: 'default', data: { label: 'Mobile' }, position: { x: midX, y: 450 }, sourcePosition: 'right', targetPosition: 'left',style: { background: '#e0e7ff', color: '#000', border: '1px solid #ccc' }, },
      { id: '7', type: 'default', data: { label: 'Plataformas Extras' }, position: { x: midX, y: 600 }, sourcePosition: 'right', targetPosition: 'left',style: { background: '#fbcfe8', color: '#000', border: '1px solid #ccc' }, },

      // Front-End filhos
      { id: '2a', type: 'output', data: { label: 'React' }, position: { x: detailX, y: -80 }, targetPosition: 'left' },
      { id: '2b', type: 'output', data: { label: 'Next.js' }, position: { x: detailX, y: -40 }, targetPosition: 'left' },
      { id: '2c', type: 'output', data: { label: 'Tailwind CSS' }, position: { x: detailX, y: 0 }, targetPosition: 'left' },
      { id: '2d', type: 'output', data: { label: 'Bootstrap' }, position: { x: detailX, y: 40 }, targetPosition: 'left' },
      { id: '2e', type: 'output', data: { label: 'HTML' }, position: { x: detailX, y: 80 }, targetPosition: 'left' },
      { id: '2f', type: 'output', data: { label: 'CSS' }, position: { x: detailX, y: 120 }, targetPosition: 'left' },

      // Back-End filhos
      { id: '3a', type: 'output', data: { label: 'Node.js' }, position: { x: detailX, y: 160 }, targetPosition: 'left' },
      { id: '3b', type: 'output', data: { label: 'Python' }, position: { x: detailX, y: 200 }, targetPosition: 'left' },
      { id: '3c', type: 'output', data: { label: 'Java' }, position: { x: detailX, y: 240 }, targetPosition: 'left' },
      { id: '3d', type: 'output', data: { label: 'Spring Boot' }, position: { x: detailX, y: 280 }, targetPosition: 'left' },
      { id: '3e', type: 'output', data: { label: 'Firebase / FastAPI' }, position: { x: detailX, y: 320 }, targetPosition: 'left' },
      { id: '3f', type: 'output', data: { label: 'PHP' }, position: { x: detailX, y: 360 }, targetPosition: 'left' },
      { id: '3g', type: 'output', data: { label: 'TypeScript' }, position: { x: detailX, y: 360 }, targetPosition: 'left' },
      // Banco de Dados filhos
      { id: '4a', type: 'output', data: { label: 'MySQL Workbench' }, position: { x: detailX, y: 400 }, targetPosition: 'left' },
      { id: '4b', type: 'output', data: { label: 'phpMyAdmin' }, position: { x: detailX, y: 440 }, targetPosition: 'left' },
      { id: '4c', type: 'output', data: { label: 'AWS S3' }, position: { x: detailX, y: 480 }, targetPosition: 'left' },
      { id: '4d', type: 'output', data: { label: 'PostgreSQL' }, position: { x: detailX, y: 520 }, targetPosition: 'left' },

      // Mobile filhos
      { id: '6a', type: 'output', data: { label: 'React Native' }, position: { x: detailX, y: 560 }, targetPosition: 'left' },
      { id: '6b', type: 'output', data: { label: 'Flutter (Dart)' }, position: { x: detailX, y: 600 }, targetPosition: 'left' },

      // Extras filhos
      { id: '7a', type: 'output', data: { label: 'Figma' }, position: { x: detailX, y: 640 }, targetPosition: 'left' },
      { id: '7b', type: 'output', data: { label: 'Obsidian' }, position: { x: detailX, y: 680 }, targetPosition: 'left' },
      { id: '7c', type: 'output', data: { label: 'Excel' }, position: { x: detailX, y: 720 }, targetPosition: 'left' },
      { id: '7d', type: 'output', data: { label: 'Projeção Mapeada' }, position: { x: detailX, y: 760 }, targetPosition: 'left' },
      { id: '7e', type: 'output', data: { label: 'Git/GitHub' }, position: { x: detailX, y: 760 }, targetPosition: 'left' },
    ]);

    setEdges([
      // Principal para categorias
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
      { id: 'e1-4', source: '1', target: '4', animated: true },
      { id: 'e1-6', source: '1', target: '6', animated: true },
      { id: 'e1-7', source: '1', target: '7', animated: true },

      // Front-End filhos
      { id: 'e2-a', source: '2', target: '2a', animated: true },
      { id: 'e2-b', source: '2', target: '2b', animated: true },
      { id: 'e2-c', source: '2', target: '2c', animated: true },
      { id: 'e2-d', source: '2', target: '2d', animated: true },
      { id: 'e2-e', source: '2', target: '2e', animated: true },
      { id: 'e2-f', source: '2', target: '2f', animated: true },

      // Back-End filhos
      { id: 'e3-a', source: '3', target: '3a', animated: true },
      { id: 'e3-b', source: '3', target: '3b', animated: true },
      { id: 'e3-c', source: '3', target: '3c', animated: true },
      { id: 'e3-d', source: '3', target: '3d', animated: true },
      { id: 'e3-e', source: '3', target: '3e', animated: true },
      { id: 'e3-f', source: '3', target: '3f', animated: true },
      { id: 'e3-g', source: '3', target: '3g', animated: true },

      // Banco de Dados filhos
      { id: 'e4-a', source: '4', target: '4a', animated: true },
      { id: 'e4-b', source: '4', target: '4b', animated: true },
      { id: 'e4-c', source: '4', target: '4c', animated: true },
      { id: 'e4-d', source: '4', target: '4d', animated: true },

      // Mobile filhos
      { id: 'e6-a', source: '6', target: '6a', animated: true },
      { id: 'e6-b', source: '6', target: '6b', animated: true },

      // Extras filhos
      { id: 'e7-a', source: '7', target: '7a', animated: true },
      { id: 'e7-b', source: '7', target: '7b', animated: true },
      { id: 'e7-c', source: '7', target: '7c', animated: true },
      { id: 'e7-d', source: '7', target: '7d', animated: true },
      { id: 'e7-e', source: '7', target: '7e', animated: true },
    ]);
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );

  return (
    <div style={{ width: '100%', height: '100vh', background: '#fff', border: '1px solid #ccc' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        snapToGrid
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap nodeColor={() => '#fff'} nodeStrokeColor={() => '#555'} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Stack;
