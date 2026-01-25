#分析 

p.s. 注意区分本页面与环论中的Hilbert基定理.

>[!def] Hilbert基
>给定[[Hilbert空间]]$\mc H$的一组[[规范正交]]的集合$E$, 若$E$的有限线性组合([[张成]])的空间在$\mc H$中[[稠密集|稠密]], 即
>$$\overline{\span{E}}=\mc H$$
>则称$E$是$\mc H$的一组**Hilbert基**(Hilbert basis). 显然绝大多数情况, 我们假设$\mc H$是[[可分集]]时, 标准正交基是可数的向量列$\set{e_n}$.

显然, 若我们有了一组规范正交基$\set{e_n}$, 则$f\in H$可以表示为
$$f=\sum_{k=1}^\infty{a_ke_k}$$
其中$a_k\in\mathbb K$为底域. 上式两边取内积, 就得到了一个重要的恒等式:

>[!prop] 性质1
>对于$f\in H$, $e_k\in\set{e_n}$, 若$f$分解如下
>$$f=\sum_{k=1}^\infty{a_ke_k}$$
>则$f$对每个基向量的内积就是对应的标量.
>$$\langle f,e_k\rangle=a_k$$

>[!thm] 定理1
>每个[[Hilbert空间]]$\mc H$都存在一个Hilbert基.

>[!pf]
>设$\ms F$是$\mc H$中全体[[规范正交]]集构成的族, 在$\ms F$上按照集合的包含定义偏序, 给定$\ms F$的一个全序子族, 此子集族中所有集合的并包含子集族中的每个子集, 并且仍在$\ms F$中. 由[[Zorn引理]], 存在一个极大的标准正交集, 我们断言每个极大的标准正交基$\set{x_j}$的[[线性张&闭线性张|闭线性张]]是整个空间$\mc H$. 由反证法, 假设存在$y$不属于$\set{x_j}$的闭线性张$X$, 定义
>$$a_j=\langle y,x_j\rangle$$
>由[[Bessel不等式]]成立,
>$$\sum{|a_k|^2}\le\lVert{y}\rVert^2$$
>从而
>$$x=\sum{a_kx_k}$$
>是一个$\mc H$中向量, 并且
>$$\langle y-x,x_j\rangle=\langle y,x_j\rangle-\langle x,x_j\rangle=a_j-a_j=0$$
>这说明$y-x$与全体$x_j$正交, 由假设$y\notin X$, 而$x\in X$, 于是$y-x$非零.
>$$\frac{y-x}{\lVert{y-x}\rVert}$$
>可以加入到正交集$\set{x_j}$, 与其极大性矛盾.

