```tikz
\usepackage{pgfplots}
\def\R{4}
\def\r{2}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}[scale=0.6]
    \begin{axis}[
        colormap/blackwhite,
        axis equal,
        axis lines=none,
        shader=flat,
    ]
    \addplot3[
        surf,%mesh
        domain=-1:1,
        domain y=-pi:pi,
        shader=flat,
        z buffer=sort,
        samples=18,
        samples y=18,        
    ]({(2+x*cos(deg(y/2)))*cos(deg(y))},
    {(2+x*cos(deg(y/2)))*sin(deg(y))},
    {x*sin(deg(y/2))});
    \end{axis}
\end{tikzpicture}
\end{document}
```

