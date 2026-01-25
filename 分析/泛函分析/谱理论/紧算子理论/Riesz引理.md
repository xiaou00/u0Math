#分析 

>[!thm] Riesz引理
>设 $X$ 是[[赋范空间]], $Y$ 是 $X$ 的真子空间, 则存在 $x\in X$ 使得
>$$\lVert{x}\rVert=1\quad\text{且}\quad d(x,Y)=\inf_{y\in Y}{\norm{x-y}}>\frac12$$

>[!pf]
>首先由 $Y$ 是 $X$ 的真子空间, 从而存在一个向量 $v\in X$ 但 $v\notin Y$. 考虑范数诱导的度量 $d$, 不妨设 $d=\inf_{y\in Y}{\norm{v-y}}$, 由于 $Y$ 是闭子空间, $d>0$.
>由下确界定义, 一定存在某个 $y_0\in Y$ 使得
>$$d\le\norm{v-y_0}<\frac d{1-\epsilon}$$
>令 $x=\dfrac{v-y_0}{\norm{v-y_0}}$ 为单位向量, 显然对于任何 $y\in Y$,
>$$\norm{x-y}=\norm{\frac{v-y_0}{\norm{v-y_0}}-y}=\frac1{\norm{v-y_0}}\norm{v-(y_0+\norm{v-y_0}y)}$$
>由于 $y_0\in Y$ 且 $Y$ 是子空间, 从而 $y'=y_0+\norm{v+y_0}y$ 仍然属于 $Y$, 由 $d$ 定义, $\norm{v-y'}\ge d$, 从而有
>$$\norm{x-y}\ge\frac d{\norm{v-y_0}}$$
>并且只需取 $\epsilon=1/2$ 边得 $\norm{v-y_0}<2d$. 从而证毕.

