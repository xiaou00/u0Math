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

