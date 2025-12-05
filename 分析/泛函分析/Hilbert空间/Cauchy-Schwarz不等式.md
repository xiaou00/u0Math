#不等式 

>[!theorem] Cauchy-Schwarz不等式
>设$V$是复[[内积空间]], $\mb v,\mb w\in V$, 则一定有
>$$\lVert{\vec v}\rVert\cdot\lVert{\vec w}\rVert\ge |\langle\mb v,\mb w\rangle|$$
>等号成立当且仅当$\mb v,\mb w$[[线性相关]].

>[!proof]
>若$\mb v=\mb w=\mb 0$, 由内积定义, 原定理成立.
>
>假若$\mb v\ne \mb 0, \mb w\ne \mb 0$, 考虑
>$$e_\vec v=\frac1{\lVert\mb v\rVert}\cdot\mb v\quad e_\vec w=\frac1{\lVert\mb w\rVert}\cdot\mb w$$
>(单位化), 令$\alpha=\langle e_\vec v,e_\vec w\rangle$. 根据定义有$$\begin{aligned}
&\langle e_\vec v+(-\alpha)\cdot e_\vec w,e_\vec v+(-\alpha)\cdot e_\vec w\rangle\\
=&\langle e_\vec v,e_\vec v\rangle+\langle e_\vec v,(-\alpha)\cdot e_\vec w\rangle+\langle(-\alpha)\cdot e_\vec w,e_\vec v\rangle+\langle(-\alpha)\cdot e_\vec w,(-\alpha)\cdot e_\vec w\rangle\\
=&1-\bar\alpha\alpha-\alpha\bar\alpha+\alpha\bar \alpha
=1-|\alpha|^2
=1-\left(\frac{|\langle\vec v,\vec w\rangle|}{\lVert{\vec v}\rVert\cdot\lVert{\vec w}\rVert}\right)^2\ge0
\end{aligned}$$
>从而$\frac{|\langle\vec v,\vec w\rangle|}{\lVert\vec v\rVert\cdot\lVert\vec w\rVert}\le 1\implies|\langle\vec v,\vec w\rangle|\le \lVert\vec v\rVert\cdot\lVert\vec w\rVert$.

>[!theorem] Cauchy-Schwarz不等式, 经典形式
>对于$a_1,\ldots,a_n,b_1,\ldots,b_n\in\R$, 有
>$$\left(\sum_{i=1}^n{a_ib_i}\right)^2\le \left(\sum_{i=1}^n{a_i^2}\right)\left(\sum_{i=1}^n{b_i^2}\right)$$

