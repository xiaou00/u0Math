#分析 

p.s. 注意区分本页面与环论中的Hilbert基定理.

>[!definition] 规范正交基
>给定[[Hilbert空间]]$\mc H$的一组[[规范正交]]的集合$E$, 若$E$的有限线性组合([[张成]])的空间在$\mc H$中[[稠密集|稠密]], 即
>$$\overline{\span{E}}=\mc H$$
>则称$E$是$\mc H$的一组**标准正交基**(orthonormal basis). 显然绝大多数情况, 我们假设$\mc H$是[[可分集]]时, 标准正交基是可数的向量列$\set{e_n}$.

显然, 若我们有了一组规范正交基$\set{e_n}$, 则$f\in H$可以表示为
$$f=\sum_{k=1}^\infty{a_ke_k}$$
其中$a_k\in\mathbb K$为底域. 上式两边取内积, 就得到了一个重要的恒等式:

>[!proposition] 性质1
>对于$f\in H$, $e_k\in\set{e_n}$, 若$f$分解如下
>$$f=\sum_{k=1}^\infty{a_ke_k}$$
>则$f$对每个基向量的内积就是对应的标量.
>$$\langle f,e_k\rangle=a_k$$


