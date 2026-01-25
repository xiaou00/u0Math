<%*
let value = await tp.system.prompt("输入大小"); 
%>
```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[domain=-<% value %>:<% value %>,scale=1]
\draw[very thin,color=gray] (-<% value %>+0.1,-<% value %>+0.1) grid (<% value %>-0.1,<% value %>-0.1);
\draw[->] (-<% value %>-0.1,0) -- (<% value %>+0.1,0) node[right] {};
\draw[->] (0,-<% value %>-0.1) -- (0,<% value %>+0.1) node[above] {};
\draw[red,thick,domain=-<% value %>:<% value %>] plot (\x,{\x});
\end{tikzpicture}
\end{document}
```
