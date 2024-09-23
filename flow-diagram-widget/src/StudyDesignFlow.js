import React from 'react';
import ReactFlow, {
  Handle,
  Position,
  MarkerType,
  Background,
  Controls
} from 'reactflow';
import 'reactflow/dist/style.css';

const invisibleHandleStyle = { opacity: 0};

const nodeTypes = {
  customNode: ({ data }) => (
    <div
      className={`px-4 py-3 shadow-md border-2 ${data.borderColor} flex items-center justify-center`}
      style={{
        backgroundColor: data.bgColor,
        width: data.width || 'auto',
        height: data.height || 'auto',
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '18px' // Increased font size
      }}
    >
      <div className={`font-bold ${data.textColor}`}>{data.label}</div>
      <Handle type="target" position={Position.Top} style={invisibleHandleStyle} />
      <Handle type="source" position={Position.Bottom} style={invisibleHandleStyle} />
    </div>
  ),
  smallNode: ({ data }) => (
    <div
      className="px-3 py-2 shadow-sm bg-white flex items-center justify-center"
      style={{
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '18px' // Increased font size
      }}
    >
      {data.label}
      <Handle type="target" position={Position.Top} style={invisibleHandleStyle} />
      <Handle type="source" position={Position.Bottom} style={invisibleHandleStyle} />
    </div>
  ),
  textNode: ({ data }) => (
    <div
      className={`${data.textColor} flex items-center justify-center`}
      style={{
        backgroundColor: data.bgColor,
        padding: '6px',
        width: '140px', // Increased width
        height: '100%',
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '18px' // Increased font size
      }}
    >
      {data.label}
      <Handle type="target" position={Position.Top} style={invisibleHandleStyle} />
    </div>
  ),
};

const defaultEdgeStyle = {
  strokeWidth: 2,
};

const defaultMarkerEndStyle = {
  strokeWidth: 2,
};

const initialNodes = [
  { id: 'A', type: 'customNode', position: { x: 400, y: 0 }, data: { label: 'Did investigator assign exposures?', borderColor: 'border-purple-300', textColor: 'text-purple-700', bgColor: '#dcd4f7', width: '250px' } },
  { id: 'A1', type: 'smallNode', position: { x: 300, y: 130 }, data: { label: 'Yes' } },
  { id: 'A2', type: 'smallNode', position: { x: 750, y: 130 }, data: { label: 'No' } },
  { id: 'B', type: 'customNode', position: { x: 100, y: 240 }, data: { label: 'Experimental study', borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '180px' } },
  { id: 'C', type: 'customNode', position: { x: 800, y: 240 }, data: { label: 'Observational study', borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '180px' } },
  { id: 'D', type: 'customNode', position: { x: 200, y: 330 }, data: { label: 'Random allocation?', borderColor: 'border-purple-300', textColor: 'text-purple-700', bgColor: '#dcd4f7', width: '180px' } },
  { id: 'G', type: 'customNode', position: { x: 600, y: 330 }, data: { label: 'Comparison group?', borderColor: 'border-purple-300', textColor: 'text-purple-700', bgColor: '#dcd4f7', width: '180px' } },
  { id: 'D1', type: 'smallNode', position: { x: 150, y: 430 }, data: { label: 'Yes' } },
  { id: 'D2', type: 'smallNode', position: { x: 300, y: 430 }, data: { label: 'No' } },
  { id: 'G1', type: 'smallNode', position: { x: 550, y: 430 }, data: { label: 'Yes' } },
  { id: 'G2', type: 'smallNode', position: { x: 850, y: 430 }, data: { label: 'No' } },
  { id: 'E', type: 'customNode', position: { x: 1, y: 530 }, data: { label: <>Randomised<br />controlled trial</>, borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '150px' } },
  { id: 'F', type: 'customNode', position: { x: 240, y: 530 }, data: { label: <>Non-randomised<br />controlled trial</>, borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '150px' } },
  { id: 'H', type: 'customNode', position: { x: 491, y: 530 }, data: { label: 'Analytical study', borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '150px' } },
  { id: 'I', type: 'customNode', position: { x: 900, y: 530 }, data: { label: 'Descriptive', borderColor: 'border-gray-300', textColor: 'text-gray-700', bgColor: '#e1e1e1', width: '150px' } },
  { id: 'E1', type: 'textNode', position: { x: 9, y: 640 }, data: { label: <>Regression<br />HR<br />t-test<br />ANOVA<br />Chi-Square<br />ITT</>, textColor: 'text-red-500', bgColor: '#f7c1c1' } },
  { id: 'F1', type: 'textNode', position: { x: 248, y: 640 }, data: { label: <>Regression<br />HR<br />t-test<br />ANOVA<br />Chi-Square<br />ITT</>, textColor: 'text-red-500', bgColor: '#f7c1c1' } },
  { id: 'K', type: 'customNode', position: { x: 440, y: 640 }, data: { label: 'Cohort', borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '80px' } },
  { id: 'L', type: 'customNode', position: { x: 540, y: 640 }, data: { label: 'Case-control', borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '110px' } },
  { id: 'M', type: 'customNode', position: { x: 680, y: 640 }, data: { label: 'Cross-sectional', borderColor: 'border-blue-300', textColor: 'text-blue-700', bgColor: '#a2d9f7', width: '130px' } },
  { id: 'I1', type: 'textNode', position: { x: 920, y: 640 }, data: { label: <>Summary<br />statistics</>, textColor: 'text-gray-700', bgColor: '#e1e1e1' } },
  { id: 'K1', type: 'textNode', position: { x: 430, y: 740 }, data: { label: <>Regression<br />HR<br />t-test<br />ANOVA<br />Chi-Square<br />RR</>, textColor: 'text-red-500', bgColor: '#f7c1c1' } },
  { id: 'L1', type: 'textNode', position: { x: 620, y: 740 }, data: { label: <>Regression<br />(esp. Logistic)<br />t-test<br />Chi-Square<br />McNemar's<br />OR</>, textColor: 'text-red-500', bgColor: '#f7c1c1' } },
  { id: 'M1', type: 'textNode', position: { x: 800, y: 750 }, data: { label: <>Regression<br />t-test<br />Chi-Square<br />OR</>, textColor: 'text-red-500', bgColor: '#f7c1c1' } },
];

const initialEdges = [
  { id: 'A-A1', source: 'A', target: 'A1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'A1-B', source: 'A1', target: 'B', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'A-A2', source: 'A', target: 'A2', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'A2-C', source: 'A2', target: 'C', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'B-D', source: 'B', target: 'D', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'C-G', source: 'C', target: 'G', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'D-D1', source: 'D', target: 'D1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'D1-E', source: 'D1', target: 'E', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'D-D2', source: 'D', target: 'D2', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'D2-F', source: 'D2', target: 'F', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'G-G1', source: 'G', target: 'G1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'G1-H', source: 'G1', target: 'H', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'G-G2', source: 'G', target: 'G2', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'G2-I', source: 'G2', target: 'I', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'H-K', source: 'H', target: 'K', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'H-L', source: 'H', target: 'L', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'H-M', source: 'H', target: 'M', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'E-E1', source: 'E', target: 'E1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'F-F1', source: 'F', target: 'F1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'K-K1', source: 'K', target: 'K1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'L-L1', source: 'L', target: 'L1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'M-M1', source: 'M', target: 'M1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
  { id: 'I-I1', source: 'I', target: 'I1', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed }, style: defaultEdgeStyle, markerEndStyle: defaultMarkerEndStyle},
];

export default function StudyDesignFlow() {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        minZoom={0.5}
        maxZoom={2}
        defaultZoom={1}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
