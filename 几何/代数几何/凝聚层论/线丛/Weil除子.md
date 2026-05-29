---
aliases:
  - 除子
---
a
#代数几何 

**注.** 本页面中, 我们只讨论[[Noether概形|Noether]][[正则概形]].

>[!def] Weil除子
>我们定义一个**Weil除子** (Weil divisor) 为概形 $X$ 的[[余维数]] $1$ 的不可约闭子集的形式 $\Z$-线性组合, 即一个Weil除子定义为形如
>$$\sum_{\begin{gathered}Y\subset X,\,\mathrm{closed}\\ \mathrm{codimension}\, 1\end{gathered}}{n_Y[Y]}$$
>的对象, 其中 $n_Y\in\Z$, 且除了有限多个 $Y$ 外的 $n_Y=0$. $X$ 的全体Weil除子显然构成一个[[Abel群]], 记作 $\Weil X$.
>
>单个不可约的余维数 $1$-闭子集就是**不可约Weil除子/素除子** (irreducible). 若一个Weil除子 $D=\sum n_Y[Y]$ 满足每个 $n_Y\ge 0$, 则称这个除子 $D$ 是**有效的** (effective). 记作 $D\ge 0$, 记号 $D_1\ge D_2$ 意味着 $D_1-D_2\ge 0$.
>
>Weil除子 $D$ 的支撑 $\Supp D$ 是子集 $\bigcup_{n_Y\ne 0}{Y}$. 若 $U\subset X$ 是一个开集, 我们定义限制映射
>$$\Weil X\to\Weil U$$
>为 $\sum n_Y[Y]\mapsto\sum_{Y\cap U\ne\O}n_Y[Y\cap U]$.

显然, 若 $X$ 是一条曲线, 那么Weil除子无非就是闭点的线性组合.

>[!con] 例1
>$\bb P^n_k$ 上的不可约除子与 $k[x_0,\ldots,x_n]$ 中的不可约其次多项式对应, 在乘 $k^\times$ 中非零标量的意义下唯一.

上述例子中的对应就是通过取零点集构造的. 设
$$S=k[x_0,\ldots,x_n]$$
对一个非零齐次多项式 $f\in S_d$, 其在射影空间中的超曲面 $V_+(f)$ 有映射 $f\mapsto V_+(f)$, 如果 $f$ 是不可约齐次多项式, 那么理想 $(f)\subset k[x_0,\ldots, x_n]$ 是一个齐次素理想, 因此 $V_+(f)$ 是 $\bb P^n_k$ 是一个不可约的闭子簇, 又因为它由一个非零方程切出, 所以它是余维数 $1$ 的闭子簇, 也就是一个不可约的Weil除子. 反之也显然.

