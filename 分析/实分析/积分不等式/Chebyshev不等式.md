#分析 

>[!theorem] Chebyshev不等式
>设$f\in \ms L^1$是[[Lebesgue积分|Lebesgue可积]]的函数, $(X,\mc M,\mu)$是[[测度空间]], 则
>$$\mu\set{x:|f(x)|>\alpha}\le\frac1\alpha\norm{f}_1$$

>[!proof]
>令$E_\alpha=\set{x:|f(x)|>\alpha}$显然
>$$\int_X{|g|\,\d\mu}\ge\int_{E_\alpha}{|g|\,\d\mu}>\int_{E_\alpha}{\alpha\,\d\mu}=m(E_\alpha)\cdot\alpha$$
>即证.

