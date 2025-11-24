#代数 #群论 

下面的定理刻画了[[Sylow p-子群]]的存在性.

>[!theorem] Sylow第一定理 (Sylow’s First Theorem)
>设$p$是[[群|有限群]]$G$的阶$n$的一个质因数, 且在$n$中最大次数为$l$, 则对于$1\le k\le l$, 群$G$必然有$p^k$阶子群, 故也含有Sylow p-子群.

>[!hint] 想法
>如果群$G$在某个集合$\Omega$上有[[群作用]], 则$\Omega$的某个元素$x$的[[稳定子]]$\stab xG$就是$G$的一个子群, 关键在于集合$\Omega$的选取.

>[!proof]
>设$\Omega$是$G$上的全体$p^k$元子集组成的集合, 因此$\Omega$的一个运算形如
$$A=\set{\enum{a}{p^k}}$$
显然$|\Omega|=\binom{n}{p^k}$,  对于$g\in G$, 令
$$g\circ A=\set{ga_1,ga_2,\ldots,ga_{p^k}}$$
显然上式给出了$G$在$\Omega$上的一个作用, 从而可以写出对应的[[类方程]]:
$$|\Omega|=\sum_{i=1}^r{|\orb{A_i}G|}$$
其中$\set{A_1,A_2,\ldots,A_r}$是作用的完全代表系. 由[[Sylow p-子群|此页面引理]]得
$$p^{l-k+1}\,\not\Big|\, |\Omega|$$
这表明至少有一条轨道$\orb{A_j}G$满足$p^{l-k+1}\nmid|\orb{A_j}G|$. 由[[轨道-稳定子定理]], 有
$$|G|=n=|\orb{A_j}G|\cdot|\stab{A_j}G|$$
※由于$p^l$恰好整除$n$, 且$|\orb{A_j}G|$含有的$p$因子至多为$p^{l-k}$, 因此$|\stab{A_j}G|$中含有的$p$因子至少为$p^k$, 即
$$|\stab{A_j}G|=p^kq\ge p^k$$
另一方面, 对任意$g\in\stab{A_j}G$, 有$g\circ A_j=A_j$, 因此对于$a\in A_j$必有$ga\in A_j$, 从而
$$\stab{A_j}Ga=\set{ga\mid g\in \stab{A_j}G}\subset A_j$$
于是
$$|\stab{A_j}Ga|\le|A_j|=p^k$$
又由于陪集$\stab{A_j}Ga$与$\stab{A_j}G$有相同的阶, 因此
$$|\stab{A_j}G|\le p^k$$
综上, $|\stab{A_j}G|=p^k$, 这表明$\stab{A_j}G$就是我们所要求的子群.