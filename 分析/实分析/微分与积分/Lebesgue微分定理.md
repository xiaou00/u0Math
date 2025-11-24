#分析 

>[!theorem] Lebesgue微分定理
>设$f\in\ms L^1(\R^d)$, 则对于开球$B$, 
>$$\lim_{\underset{B\ni x}{m(B)\to0}}{\frac1{m(B)}\int_{B}{f(t)\,\d t}}=f(x)\quad\rm a.e.$$

>[!proof]
>即证明
>$$\lim_{\delta\to0}{\sup_{\underset{B\ni x}{m(B)<\delta}}{\left|\frac1{m(B)}\int_{B}{f(t)\,\d t}-f(x)\right|}}=0\quad \rm a.e.$$
>即上式不成立的点测度为0, 我们令
>$$E_\alpha=\set{x:\lim_{\delta\to0}{\sup_{\underset{B\ni x}{m(B)<\delta}}{\left|\frac1{m(B)}\int_{B}{f(t)\,\d t}-f(x)\right|>2\alpha}}}$$
>只需证明
>$$m(E_\alpha)=0,\quad\forall \alpha\ge0$$
>即可. 我们先固定$\alpha$, 由于紧支连续函数$\csp_c(\R^d)$在$\ms L^1(\R^d)$中稠密, 从而对任意$\epsilon$可以选取紧支连续函数$g$使得$\norm{f-g}_1<\epsilon$. 又由于$g$的连续性蕴含了对所有$x$,
>$$\lim_{\underset{B\ni x}{m(B)\to0}}{\frac1{m(B)}\int_{B}g(t){\,\d t}}=g(x)$$
>显然我们可以将差
>$$\frac1{m(B)}\int_{B}g(t){\,\d t}-f(x)$$
>改写为
>$$\frac1{m(B)}\int_{B}{(f(t)-g(t))\,\d t}+\frac1{m(B)}\int_{B}{g(t)\,\d t}-g(x)+g(x)-f(x)$$
>我们发现
>$$\limsup_{\underset{B\ni x}{m(B)\to0}}{\left|\frac1{m(B)}\int_{B}{f(t)\,\d t}-f(x)\right|}\le (f-g)^*(x)+|g(x)-f(x)|$$
>其中$*$表示[[Hardy-Littlewood极大函数]]. 因此若
>$$F_\alpha=\set{x:(f-g)^*(x)>\alpha}\quad\text{且}\quad G_\alpha=\set{x:|f(x)-g(x)|>\alpha}$$
>显然$E_\alpha\subset F_\alpha\cup G_\alpha$, 这是因为若$u_1,u_2$是正的, 则$u_1+u>2\alpha$仅当至少有一个$u_i>\alpha$时成立. 另一方面, 由[[Chebyshev不等式]],
>$$m(G_\alpha)\le\frac1\alpha\norm{f-g}_1$$
>由[[Hardy-Littlewood极大函数]]的弱型估计,
>$$m(F_\alpha)\le\frac A\alpha\norm{f-g}_1$$
>由于我们选取的$g$满足$\norm{f-g}_1<\epsilon$, 从而
>$$m(E_\alpha)\le\frac A\alpha\epsilon+\frac1\alpha\epsilon$$
>由于$\epsilon$是任意的, 从而$m(E_\alpha)=0$.
