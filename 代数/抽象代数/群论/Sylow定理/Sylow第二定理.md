#代数 #群论 

下面的定理说明了[[Sylow p-子群]]的极大性.

>[!theorem] Sylow第二定理 (Sylow's Second Theorem)
>设[[群|有限群]]$G$的阶为$n$, $p$是一个质数, 且在$n$中最高次数为$l$. 则
>1. 群$G$的[[p-群|p-子群]]一定包含于$G$的某个Sylow p-子群中.
>2. 群$G$的任意两个Sylow p-子群共轭.

>[!proof]
>证明(1). 设$H$是$G$的任意一个$p^k$阶子群, $1\le k\le l$. 任取$G$的一个Sylow p-子群$P$, 不妨考虑p-群$H$在$(G/P)_l$上的左[[平移作用]]:
$$h\circ (gP)=(hg)P$$
由[[p-群|此页面定理1]], 有
$$|\fix G\Omega|\equiv|(G/P)_l|\equiv m\not\equiv0\pmod p$$
从而一定存在$aP\in\fix G\Omega$. 即, 对任意$h\in H$有$h\circ(aP)=aP$, 也即$(ha)P=aP$, 从而$a^{-1}ha\in P$. 由此得出对任意$h\in H$有$h\in aPa^{-1}$, 因此
$$H\subset aPa^{-1}$$
即$H$包含在$G$的一个Sylow p-子群$aPa^{-1}$中.
证明(2). 设$P_1,P_2$是两个Sylow p-子群, 只需调用(1)的结论, 将$P_1$视作上述的$H$, $P_2$视作上述的$P$, 就证明了存在$a\in G$使得$P_1\subset aP_2a^{-1}$, 又由于共轭是双射, 从而$|P_1|=|aP_2a^{-1}|$, 这就证明了$P_1=aP_2a^{-1}$, 即$P_1,P_2$共轭.

>[!corollary] 推论1
>有限群$G$的Sylow p-子群是正规子群当且仅当$G$的Sylow p-子群个数为1.

>[!proof]
>$P$是正规子群当且仅当其对共轭封闭, 结合上述定理即证.

