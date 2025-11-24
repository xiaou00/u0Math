#代数 #群论 

>[!definition] p-群
>设$G$为[[群|有限群]], 且$|G|=p^m$对于某个质数$p$, $m\in\Z_+$, 就称$G$是一个**p-群**(p-group).

>[!theorem] 定理1
>若p-群$G$在有限集合$\Omega$上有一个[[群作用]], 则
>$$|\fix G\Omega|\equiv|\Omega|\pmod{p}$$

>[!proof]
>写出该作用的类方程
>$$|\Omega|=|\fix G\Omega|+\sum_{i=1}^r|\orb{x_i}{G}|$$
>其中每个$\orb{x_i}G>1$, 这是因为若$\orb{x_i}G=1$, 那么$x_i$是一个不动点. 又由[[轨道-稳定子定理]], $\orb{x_i}G\Big|\,|G|$, 而$|G|=p^m$, 由质数性质知$p\mid \orb{x_i}G$. 这就证明了结论.

>[!corollary] 推论1
>p-群必有非平凡的[[群中心]].

>[!proof]
>考虑p-群$G$上的共轭作用, 我们知道共轭作用的不动点集为$\mc Z(G)$ ([[群中心|此页面定理4]]). 由上述定理可知
>$$|\mc Z(G)|\equiv|G|\equiv0\pmod p$$
>又由于$\mc Z(G)$是$G$的子群, 因此$|\mc Z(G)|=p^s(s>0)$, 证毕.



