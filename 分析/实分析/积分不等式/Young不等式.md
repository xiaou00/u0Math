#分析 

>[!theorem] Young不等式
>设$p,q\in(1,+\infty)$, 且满足[[共轭指数]]关系: $1/p+1/q=1$. 则对任意非负[[实数]]$a,b\in[0,+\infty)$, 有不等式
>$$ab\le\frac{a^p}{p}+\frac{b^q}{q}$$
>成立. 等号成立当且仅当$a^p=b^q$.

>[!proof]
>由于$f(x)=\ln{x}$是凹函数, 从而由[[Jensen不等式]], 
>$$f\left(\sum_{i=1}^n{t_ix_i}\right)\ge\sum_{i=1}^n{t_if(x_i)}$$
>此处取$n=2, t_1=1 /p, t_2=1 /q$, 它们是有效的权重, 因为它们和为1, 符合Jensen不等式条件. 代入$x_1=a^p,x_2=b^q$有
>$$\ln\left(\frac1pa^p+\frac1qb^q\right)\ge\frac1p\ln{a^p}+\frac1q\ln{b^q}=\ln{a}+\ln{b}=\ln{ab}$$
>取指数有
>$$\frac1pa^p+\frac1qb^q\ge ab$$
>就证明了定理. 容易证明等号成立的条件.

