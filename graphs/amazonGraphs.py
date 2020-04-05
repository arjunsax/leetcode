from collections import defaultdict
def construct_graph(numRouters, links):
  graph = defaultdict(list)
  graph = [[0]*numRouters for i in range(numRouters)]
  for i in links:
    graph[i[0] - 1].append(i[1] - 1)
    graph[i[1] - 1].append(i[0] - 1)
  return graph

def is_connected(numRouters, graph, start_node, deleted_node):
  visited = set()
  queue = [start_node]
  while len(queue):
    current_node = queue.pop(0)
    visited.add(current_node)
    for node in graph[current_node]:
      if node not in visited and node != deleted_node:
        queue.append(node)
  if len(visited) == numRouters: return True
  return False

graph = construct_graph(numRouters, links)
critical_routers = []
for i in range(numRouters):
  start_node = 0
  if i == 0: start_node = 1
  if not is_connected(numRouters - 1, graph, start_node, i ): critical_routers.append(i+1)