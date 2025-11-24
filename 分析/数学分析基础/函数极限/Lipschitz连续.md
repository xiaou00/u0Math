#分析 

>[!theorem] Lipschitz连续定理
>设实函数$f$在$\R$的区间$I$上有定义. 若存在$K>0$使得对于任意$x_1,x_2\in I$都有
>$$|f(x_1)-f(x_2)|\le K|x_1-x_2|$$
>则$f(x)$在$I$上[[一致连续]].

>[!proof]
>对任意$\epsilon>0$, 取$\delta=\epsilon/K>0$, 从而对任意$x_1,x_2\in I$, 当$|x_1-x_2|<\delta$时
>$$|f(x_1)-f(x_2)|\le K|x_1-x_2|<K\delta=\epsilon$$
>这就证明了定理.

※上述条件称为Lipschitz条件.
 