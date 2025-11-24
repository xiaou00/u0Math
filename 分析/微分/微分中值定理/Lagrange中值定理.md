#分析 

>[!theorem] Lagrange中值定理
>若实函数$f(x):\R\supset U\to\R$在闭区间$[a,b]$上连续, 并在其内部$(a,b)$[[微分|可微]], 则存在$\xi\in(a,b)$, 使得
>$$\D_x f(\xi)=\frac{f(b)-f(a)}{b-a}$$
>即如下图所示:
>```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[domain=-5:5,scale=0.7]
\draw[very thin,color=gray] (-3+0.1,-3+0.1) grid (3-0.1,3-0.1);
\draw[->] (-3-0.1,0) -- (3+0.1,0) node[right] {};
\draw[->] (0,-3-0.1) -- (0,3+0.1) node[above] {};
\draw[red,thick,domain=-1.35:2,samples=50] plot (\x,{(\x-1)^3+2*(\x-1)^2-0.5});
\draw[thick] (0,0.5)--(1.8,{0.8^3+2*0.8^2-0.5});
\filldraw (0,0.5) circle (1pt) node[left] {$a$};
\filldraw (1.8,{0.8^3+2*0.8^2-0.5}) circle (1pt) node[right] {$b$};
\draw[thick] ({1.102-0.7},{-0.478-0.7*0.44})--({1.102+0.7},{-0.478+0.7*0.44});
\filldraw (1.102,-0.478) circle (1pt) node[below] {$\xi$};
\end{tikzpicture}
\end{document}
>```

>[!proof]
>设过点$(a,f(a)),(b,f(b))$的直线为$l(x)$. 令$g(x)=l(x)-f(x)$. 此时$g(a)=g(b)=0$. 由[[Rolle中值定理]]即证.

>[!corollary] 推论1
>设实函数$f$在$[a,b]$上连续, $(a,b)$上可微, 则$f$在$[a,b]$上为常值函数当且仅当其在$(a,b)$上导数为0.

