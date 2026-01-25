#代数拓扑 

>[!thm] 边界映射的Leibniz律
>若 $\p$ 是边界映射, $X,Y$ 是闭的[[拓扑空间]], 则
>$$\p(X\times Y)=\p X\times Y\cup X\times \p Y$$

>[!pf]
>显然
>$$\begin{aligned}
\p(X\times Y)=&\overline{X\times Y}\setminus(X\times Y)^\circ
=(\overline X\times\overline Y)\setminus(X^\circ\times Y^\circ)\\
=&((\overline X\setminus X^\circ)\times\overline Y)\cup(\overline X\times(\overline Y\setminus Y^\circ))=\p X\times Y\cup X\times\p Y
\end{aligned}$$
