const graphlib = require('graphlib-dot');
const fs = require('fs');

const readGraph = function(path) {
	const text = fs.readFileSync(path, 'ascii');
	return graphlib.read(text);
}

const getRoadStep = function(roadsGraph, node) {
	const roadOutNode = roadsGraph._out[node.toString()];
	return Object.values(roadOutNode)[0].w;
}

const getAvailableNodes = function(mapGraph, node) {
	const nodeName = node.toString();
	return Object.values(mapGraph._edgeObjs)
		.filter(function(edge) { return edge.v == nodeName || edge.w == nodeName; })
		.map(function(edge){ return edge.w == nodeName ? edge.v : edge.w});
}

module.exports = {
	readGraph,
	getRoadStep,
	getAvailableNodes,
};
