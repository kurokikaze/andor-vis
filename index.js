const graph = require('./graph');

const CONNECTIVITY_MAP_PATH = './data/pathMapGraph.txt';
const ROADS_MAP_PATH = './data/directMapGraph.txt';

const mapGraph = graph.readGraph(CONNECTIVITY_MAP_PATH);
const roadsGraph = graph.readGraph(ROADS_MAP_PATH);

const getRoadStep = function(node) {
	return graph.getRoadStep(roadsGraph, node);
}

const getAvailableNodes = function(node) {
	return graph.getAvailableNodes(mapGraph, node);
}