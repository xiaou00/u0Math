#度量空间 

>[!theorem] Peano曲线定理
>设$I=[0,1]$, 存在连续的满射$f:I\to I^2$.

**Proof.**

I. 我们先来描述关于道路的一种特殊运算$g$, 它是将线段$[a,b]$映射到某个$[l,r]^2$中的映射, 构造上, 由两段直线的截的粘合, 从而是连续的.

```tikz
\begin{document}
\begin{tikzpicture}

    \draw[thick] (-1,0)--(1,0);

    \draw[thick] (-1,-0.1)--(-1,0.1) node[above] at (-1,-0.6) {$a$};

    \draw[thick] (1,-0.1)--(1,0.1) node[above] at (1,-0.6) {$b$};

    \draw[thick] (0,0)--(0,0.1);

  

    \draw[thick,->] (1.5,0.5) to[bend left=30] node[above] {$g$} (2.5,0.5);

  

    \draw[thick] (3,-1)--(3,1)--(5,1)--(5,-1)--cycle;

  

    \filldraw[red] (4,0) circle (1pt);

    \filldraw[red] (3,-1) circle (1pt);

    \filldraw[red] (5,-1) circle (1pt);

  

    \draw[thick,red] (3,-1)--(4,0);

    \draw[thick,red] (4,0)--(5,-1);

\end{tikzpicture}
\end{document}
```
规定$g'$是如下的替换:
```tikz
\begin{document}
\begin{tikzpicture}

    \draw[very thin, gray] (3,-1) grid (5,1);

  

    \draw[thick] (-1,0)--(1,0);

    \draw[thick] (-1,-0.1)--(-1,0.1) node[above] at (-1,-0.6) {$a$};

    \draw[thick] (1,-0.1)--(1,0.1) node[above] at (1,-0.6) {$b$};

    \draw[thick] (0,-0.1)--(0,0.1);

  

    \draw[thick] (0.25,0)--(0.25,0.1);

    \draw[thick] (0.5,0)--(0.5,0.1);

    \draw[thick] (0.75,0)--(0.75,0.1);

    \draw[thick] (-0.25,0)--(-0.25,0.1);

    \draw[thick] (-0.5,0)--(-0.5,0.1);

    \draw[thick] (-0.75,0)--(-0.75,0.1);

  

    \draw[thick,->] (1.5,0.5) to[bend left=30] node[above] {$g'$} (2.5,0.5);

  

    \draw[thick] (3,-1)--(3,1)--(5,1)--(5,-1)--cycle;

  

    \filldraw[red] (3,-1) circle (1pt);

    \filldraw[red] (3.5,-0.5) circle (1pt);

    \filldraw[red] (3,0) circle (1pt);

    \filldraw[red] (3.5,0.5) circle (1pt);

    \filldraw[red] (4,0) circle (1pt);

    \filldraw[red] (4.5,0.5) circle (1pt);

    \filldraw[red] (5,0) circle (1pt);

    \filldraw[red] (4.5,-0.5) circle (1pt);

    \filldraw[red] (5,-1) circle (1pt);

  

    \draw[thick,red] (3,-1)--(3.5,-0.5)--(3,0)--(3.5,0.5)--(4,0)--(4.5,0.5)--(5,0)--(4.5,-0.5)--(5,-1);

\end{tikzpicture}
\end{document}
```

它由四条三角道路粘合而成, 故也是连续的. 我们可以把这个操作推广到任意两个相邻边, 但这写起来比较麻烦, 于是略.

II. 现在我们定义函数列, $f_n:I\to I^2$, 不妨令$f_0,f_1$就是上述两张图中的映射, 其中$a=0,b=1$. 第三个函数$f_2$对$f_1$图中每个子正方形再进行一次给定的运算:

```tikz
\begin{document}
\begin{tikzpicture}

    \draw[very thin, gray] (-2,-2) grid (2,2);

    \draw[thick] (-2,-2)--(-2,2)--(2,2)--(2,-2)--cycle;

  

    \draw[thick,->] (-3.5,0.5) to[bend left=30] node[above] {$f_2$} (-2.5,0.5);

  

    \draw[thick] (-8,0)--(-4,0);

    \draw[thick] (-8,-0.2)--(-8,0.2);

    \draw[thick] (-4,-0.2)--(-4,0.2);

    \foreach \i in {0,1,2,3}{

        \draw[thick] ({-7.75+\i},0)--({-7.75+\i},0.1);

        \draw[thick] ({-7.5+\i},0)--({-7.5+\i},0.1);

        \draw[thick] ({-7.25+\i},0)--({-7.25+\i},0.1);

    }

    \foreach \i in {1,2,3}{

        \draw[thick] ({-8+\i},0)--({-8+\i},0.2);

    }

    \draw[thick, red]

      (-2,-2)--(-1.5,-1.5)--(-1,-2)--(-0.5,-1.5)--(-1,-1)--(-0.5,-0.5)--(-1,0)--(-1.5,-0.5)--(-2,0)

    --(-1.5,0.5)--(-2,1)--(-1.5,1.5)--(-1,1)--(-0.5,1.5)--(0,1)--(-0.5,0.5)--(0,0)

    --(0.5,0.5)--(0,1)--(0.5,1.5)--(1,1)--(1.5,1.5)--(2,1)--(1.5,0.5)--(2,0)

    --(1.5,-0.5)--(1,0)--(0.5,-0.5)--(1,-1)--(0.5,-1.5)--(1,-2)--(1.5,-1.5)--(2,-2);

\end{tikzpicture}
\end{document}
```

如此往复, 一般地, $f_n$是$4^n$条三角形道路, 每一个都落在边长$\frac{1}{2^n}$的正方形中.

III. 用$d(\vec x,\vec y)$表示$\R^2$中的[[Chebyshev度量]]
$$d(\vec x,\vec y)=\max\set{|x_1-y_1|,|x_2-y_2|}$$
它是[[完备空间|完备]]的, 我们用$\rho$表示$\csp(I,I^2)$对应的[[完备函数空间|上确界度量]]
$$\rho(f,g)=\sup\set{d(f(t),g(t))\mid t\in I}$$
我们断言$f_n$是$\rho$下的Cauchy列. $f_n$变化到$f_{n+1}$时, 由于$f_n$的每个小三角形道路都落在边长$1 /2^n$的某个小正方形中, 变化到$f_{n+1}$不会超出这个范围, 因此$f_{n+1}(t)$和$f_n(t)$之间的距离最多为$1 /2^n$, 从而
$$\rho(f_n,f_{n+1})\le 1 /2^n$$
从而$f_n$是一个Cauchy列. 因为对任意$n,m$有
$$\rho(f_n,f_{n+m})\le \frac{1}{2^n}+\frac{1}{2^{n+1}}+\cdots+\frac{1}{2^{n+m-1}}<\frac{2}{2^n}$$
IV. 由于$\csp(I,I^2)$完备, $(f_n)\to f\in\csp(I,I^2)$. 我们证明$f$是满射:

设$\vec x\in I^2$, 要证$\vec x\in f(I)$. 对于给定的$n$, 道路$f_n$必能到达距离点$\vec x$为$1/2^n$范围内, 从而可以证明, 对任意$\epsilon>0$, $\vec x$的$\epsilon$-邻域都与$f(I)$相交, 选取充分大的$N$使得
$$\rho(f_N,f)< \frac{\epsilon}{2}\quad\text{且}\quad\frac{1}{2^N}< \frac{\epsilon}{2}$$
据前, 存在点$t_0\in I$使得$d(\vec x,f_N(t_0))\le\frac{1}{2^N}$. 因为对于所有的$t$, 有$d(f_N(t),f(t))< \frac{\epsilon}{2}$, 所以
$$d(\vec x,f(t_0))< \epsilon$$
从而$\vec x$的$\epsilon$-邻域与$f(I)$相交.

于是$\vec x$属于$\clos{f(I)}$, 由于$I$紧致$f(I)$紧致从而是闭集, 于是$\vec x\in f(I)$.