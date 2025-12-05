#分析 
##### 前置
- [[有界变差函数]]

>[!theorem] Jordan分解定理
>$f\in{\rm BV}[a,b]$当且仅当$f(x)=g(x)-h(x)$, 其中$g(x)$与$h(x)$是$[a,b]$上的递增实函数.

>[!proof]
>设$f\in{\rm BV}[a,b]$, 令
>$$g(x)=\frac12\bigvee_a^x(f)+\frac12f(x),\quad h(x)=\frac12\bigvee_a^x(f)-\frac12f(x)$$
>显然$f(x)=g(x)-h(x)$, 当$a\le x\le y\le b$时, 总有$$\begin{aligned}
2(h(y)-h(x))&=\bigvee_a^y(f)-\bigvee_a^x(f)-f(y)+f(x)\\
&\ge\bigvee_a^y(f)-|f(y)-f(x)|\ge 0
\end{aligned}$$
>这说明$h(x)$在$[a,b]$上单增, 容易证明$g(x)$也满足该条件.
>
>---
>设$f(x)=g(x)-h(x)$, 其中$g(x),h(x)$都是$[a,b]$上单调增的实函数, 显然$g,h\in{\rm BV}[a,b]$, 从而$f\in{\rm BV}(a,b)$.

>[!theorem] Jordan分解定理, 测度形式
>[[广义测度]]$\mu$的上变差$\mu^+$, 下变差$\mu^-$和全变差$|\mu|$都是(非负)[[测度]], 对每一个可测集$E$, 有
>$$\mu(E)=\mu^+(E)-\mu^-(E)$$
>若$\mu$是有限的或[[σ-有限]]的, 则$\mu^+,\mu^-$也是有限的或σ-有限的, $\mu^+,\mu^-$中至少一个是有限的.

>[!proof]
>显然$\mu$的变差都是非负的, 若每一个可测集可以表示为可数个具有有限$\mu$值的可测集值并, 则由[[广义测度|此页面定理1]], $\mu^+$和$\mu^-$也满足同样的条件. 由$\mu^+$和$\mu^-$的定义, 可以直接推出$\mu=\mu^+-\mu^-$, 因为$\mu$在$\pm\infty$中至多只能取一个值, 由此可见集函数$\mu^+$和$\mu^-$至少有一个恒有限. 于是$\mu^+,\mu^-$具有可数可加性, 定理得证.

>[!definition] Jordan分解
>设$\mu$是广义测度, 则$\mu$一定可以表示为两个测度之差$\mu^+-\mu^-$, 这一过程称为**Jordan分解**(Jordan decomposition).

