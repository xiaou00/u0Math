#分析 
##### 前置
- [[赋范空间]], [[拓扑空间]], [[度量空间]], [[完备空间]]

>[!def] Banach空间
>若赋范空间$X$在其范数诱导的拓扑下是完备的, 则称$X$是一个**Banach空间**(Banach space).

以下定理是显然的:

>[!thm] 定理1
>若$X\ne\set{\vec 0}$, 则[[算子空间]]$\mc L(X,Y)$是Banach空间当且仅当$Y$是Banach空间.

>[!pf]
>这是[[完备空间|此页面定理3]]的直接推论.

>[!thm] 定理2
>设 $X,Y$ 是Banach空间, 则其积空间 $X\times Y$ 在配备范数:
>1. $l_1$ 型范数 $\norm{(x,y)}_1=\lVert{x}\rVert_X+\lVert{y}\rVert_Y$.
>2. $l_p$ 型范数 $\norm{(x,y)}_p=\left(\lVert{x}\rVert_X+\lVert{y}\rVert_Y\right)^{1/p}$.
>3. $l_\infty$ 型范数 $\norm{(x,y)}_\infty=\max\set{\lVert{x}\rVert_X,\lVert{y}\rVert_Y}$.
>
>后构成的赋范空间依然是Banach空间.

>[!pf]
>容易验证上述的范数两两等价, 并且由 $l_\infty$ 范数下的情况, 由于Cauchy列 $\set{(x_n,y_n)}\subset X\times Y$ 在分量空间中的投影 $\set{x_n},\set{y_n}$ 必收敛, 从而
>$$\norm{(x_n,y_n)-(x,y)}_\infty=\max\set{\norm{x_n-x}_X,\norm{y_n-y}_Y}$$
>当 $n\to\infty$ 时上式右端两项都趋于零, 从而左端也趋于零. 故完备.

由闭子空间的性质立即有:

>[!thm] 定理3
>Banach空间 $X$ 的[[闭子空间]]是Banach空间.
