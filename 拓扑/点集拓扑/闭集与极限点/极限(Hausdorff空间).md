#点集拓扑 #极限

>[!lemma] 引理
>若$X$是一个[[Hausdorff空间]], 则$X$中的点列$\set{x_n}$要么不收敛, 要么[[收敛(一般拓扑空间)|收敛]]到一个唯一的点.

>[!proof]
>假设点列$\set{x_n}$收敛到$x,x'$, 其中$x\ne x'$, 那么由Hausdorff条件, 存在$x,x'$的邻域$U,U'$无交. 那么对于$x$的邻域$U$, 由收敛的条件知总存在正整数$N$使得$n>N$时$x_n\in U$, 即$x_n\notin U'$, 推出$\set{x_n}$不收敛到$x'$. 故$\set{x_n}$只收敛到唯一的点.

因此, 我们可以良定义一下概念:

>[!definition] 极限
>Hausdorff空间$X$中的点列$\set{x_n}$若收敛到$X$中的一点$x$, 就称该点列的**极限**(limit)为$x$, 记作$x_n\to x$或$\lim_{n\to\infty}{x_n}=x$.



