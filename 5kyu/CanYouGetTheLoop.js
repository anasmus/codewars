function loop_size(node) {
    let index = 0;
    const map = new Map();
    for (let currentNode = node; true; currentNode = currentNode.getNext()) {
        if (map.get(currentNode)) {
            return index - map.get(currentNode);
        }
        else {
            map.set(currentNode, index++);
        }
    }
}