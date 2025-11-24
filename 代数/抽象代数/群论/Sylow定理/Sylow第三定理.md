#代数 #群论 

Sylow定理组的第三个定理研究了[[Sylow p-子群]]的个数.

>[!theorem] Sylow第三定理 (Sylow's Third Theorem)
>设[[群|有限群]]$G$的阶$n=p^lm$, 其中$\gcd(p,m)=1$, $p$为质数, $m,l$为正整数. 则$G$的Sylow p-子群总数$r$模$p$同余于$1$, 且$r$是$m$的因子, 即
>$$\begin{cases}
r\equiv 1\pmod p\\ \\
r\mid m
\end{cases}$$

>[!proof]
>考虑全体Sylow p-子群的集合$\Omega=\set{\enum{P}{r}}$, 于是$|\Omega|=r$. 现在考虑群$P_1$在$\Omega$上的[[共轭作用]], 对任意$a\in P_1$, 令
>$$a\circ P_i\mapsto aP_ia^{-1}$$
>我们来求$P_1$的[[不动点集]]$\fix {P_1}\Omega$. 对于$Q\in \Omega$, 有
>$$\begin{aligned}
Q\in\fix{P_1}\Omega&\iff a\circ Q=Q,\quad\forall a\in P_1\\
&\iff aQa^{-1}=Q,\quad\forall a\in P_1\\
&\iff a\in\mc N_G(Q),\quad\forall a\in P_1\\
&\iff P_1\subset\mc N_G(Q)
\end{aligned}$$
>其中$\mc N_G(Q)$是$Q$在$G$中的[[正规化子]]. 由[[正规化子|此页面定理1]]得$Q\lhd\mc N_G(Q)$. 由于$P_1, Q$都是$G$的Sylow p-子群, 从而它们也是$\mc N_G(Q)$的Sylow p-子群(显然的). 由[[Sylow第二定理|Sylow第二定理的推论]], $Q=P_1$, 从而$\fix {P_1}\Omega=\set{P_1}$. 由[[p-群|此页面定理1]]就证明了
>$$r=|\Omega|\equiv|\fix{P_1}\Omega|\equiv 1\pmod p$$
>由于$\mc N_G(P_1)$是$P_1$所有共轭子群组成的稳定子(定义), 共轭子群的个数即为轨道的长度$|\orb{P_1}{G}|$, 由[[轨道-稳定子定理]],
>$$r=|\orb{P_1}{G}|=[G:\mc N_G(P_1)]$$
>从而$r\,\Big|\,|G|$, 即$r\mid p^lm$, 又由于$r\equiv 1\pmod 1$, 从而$\gcd(r,p)=1$. 这就证明了$r\mid m$.



