#点集拓扑 
##### 前置:
- [[度量空间]]
- [[紧致性]]
- [[有界与直径]]

>[!lemma] Lebesgue数引理
>设度量空间$(X,d)$, $\ms{A}$为$X$的开覆盖. 若$X$是紧致的, 则存在$\delta>0$使得$X$的每一个直径小于$\delta$的子集都包含在$\ms{A}$的某个元素之中.
>
>将这个数$\delta$称为开覆盖$\ms{A}$的一个**Lebesgue数**(Lebesgue number).

>[!proof]
>设$\ms{A}$是$X$的开覆盖, 若$X\in\ms{A}$则任意正数都是$\ms{A}$的Lebesgue数. 于是下设$X\notin\ms{A}$.
>
>由$X$紧致, 选取$\ms{A}$中$X$的有限子覆盖$\set{\enum{A}{n}}$. 再对于每个$i$, 取$C_i=X-A_i$. 定义$f(x)$为$d(x,C_i)$的平均数, 即以下映射$$\begin{aligned}f:X&\longrightarrow\R\\ x&\longmapsto\frac1n\sum_{i=1}^n{d(x,C_i)}\end{aligned}$$
>我们接下来证明, 对每一个$x$有$x>0$. 事实上, 任给$x\in X$, 取$i$使得$x\in A_i$, 再选取$\epsilon$使得$x$的$\epsilon$-邻域包含于$A_i$, 则$d(x,C_i)\ge\epsilon$, 从而一定有$f(x)\ge\frac\epsilon n$.
>因为$f$是连续的, 由[[极值定理]], 他有极小值$\delta$, 下面证明$\delta$是Lebesgue数.
>设$B$为$X$中一个直径小于$\delta$的子集, 在$B$中取一点$x_0$, 则$B$包含于$x_0$的$\epsilon$-邻域中, 那么显然
>$$\delta\le f(x_0)\le d(x_0,C_m)$$
>其中$d(x_0,C_m)$是所有$d(x_0,C_i)$中的最大者. 那么$x_0$的$\delta$-邻域包含在$\ms{A}$的元素$A_m=X-C_m$之中.

