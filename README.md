# Knights-Travails

## Project

A web window where you can pick your starting and ending location, and the program will find the fastest way a knight can go from your starting location to the goal.

## Demo 

You can run the project [here](https://muudar.github.io/knights-travails/)

This site was built using [GitHub Pages](https://pages.github.com/). 

## Algorithms:

This project represents the chessboard as a **directed graph** . Every move costs the same so we can assume all edges have a weight of 1.

I used dijkstra's algorithm to find the shortest path here, which runs in **O(V + E l o g V)** , However it is not the only algorithm you have to use.

It was possible to use BFS as it finds the shortest solution in **Undirected Unweighted graphs**. DFS , however, would not find the shortest path.

## Technologies: 

<div >
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png" alt="webpack" title="webpack"/></code>
</div>

## Notes:

This project was part of [The Odin Project CS Course](https://www.theodinproject.com/dashboard)
