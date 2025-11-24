#分析 

本页面主要讨论一个问题: 令$f\in\ms L^1$, 令
$$F(x)=\int_{a}^{x}{f(t)\,\d t}$$
是否一定有等式
$$\dd x{}F(x)=f(x)\quad \rm a.e.$$
显然在一元实函数的情形下, 
$$\frac{F(x+h)-F(x)}{h}=\frac1h\int_{x}^{x+h}{f(t)\,\d t}$$
记$I=(x,x+h)$, 从而
$$\frac1{m(I)}\int_I{f(t)\,\d t}$$
于是问题转化为
$$\lim_{\underset{x\in I}{m(I)\to0}}{\frac1{m(I)}\int_{I}{f(t)\,\d t}}=f(x)$$
推广到$\R^d$,
$$\lim_{\underset{B\ni x}{m(B)\to0}}{\frac1{m(B)}\int_{B}{f(t)\,\d t}}=f(x)$$
是否成立? 对哪些$x$成立? 为此, 我们引入以下概念:

>[!definition] Hardy-Littlewood极大函数
>设$f\in\ms L^1$是$\R^d$上的可积函数, 定义
>$$Mf(x)=\sup_{B\ni x}{\frac1{m(B)}\int_{B}{|f(t)|\,\d t}},\quad x\in \R^d$$

>[!theorem] 定理1 (Hardy-Littlewood极大函数的基本性质)
>设$f\in\ms L^1(\R^d)$, 则
>1. $Mf$是可测的.
>2. $Mf(x)<\infty$ a.e.
>3. (弱型估计)不等式
>$$m\set{x\in\R^d:Mf(x)>\alpha}\le\frac{3^d}{\alpha}\norm{f}_{\ms L^1}$$
>对任意$\alpha>0$成立.

>[!proof]
>我们记
>$$E_\alpha=\set{x\in\R^d:Mf(x)>\alpha}$$
>我们想证明$E_\alpha$是开集. 任取$x'\in E_\alpha$, 由定义有
>$$\sup_{B\ni x'}{\frac1{m(B)}\int_{B}{|f|}}>\alpha$$
>故存在$B_0\ni x'$使得
>$$\frac1{m(B_0)}\int_{B_0}{|f|}>\alpha$$
>现在任取$x\in B_0$,
>$$\sup_{B\ni x}{\frac1{m(B)}\int_{B}{f(t)\,\d t\ge\frac1{m(B_0)}\int_{B_0}{f(t)\,\d t}}}>\alpha$$
>即
>$$Mf(x)>\alpha$$
>因此对任意$x\in B_0$都有$Mf(x)>\alpha$, 从而$B_0\subset E_\alpha$, 于是$E_\alpha$是开集.
>
>---
>我们直接证明(3), 这是因为若(3)成立, 
>$$m\set{x\in\R^d:Mf(x)=\infty}=m\left(\bigcap_{n=1}^\infty{E_\alpha}\right)=\lim_{n\to\infty}{m(E_\alpha)}\le\lim_{n\to\infty}{\frac{3^d}{n}\norm{f}_1}=0$$
>成立. 对任意$x\in E_\alpha$, 有球$B_x\ni x$, 满足
>$$\frac1{m(B_x)}\int_{B_x}{|f|}>\alpha$$
>显然$\set{B_x}$覆盖$E_\alpha$, 固定一个紧集$K\subset E_\alpha$, 从而由[[Vitali覆盖引理]]$K\subset\bigcup_{j=1}^N{B_j}$,
>$$m(K)\le3^d\sum_{j=1}^km({B_i}_j)\le\frac{3^d}{\alpha}\sum_{j=1}^k\int_{{B_i}_j}{|f|}\le\frac{3^d}{\alpha}\int_{\R^d}{|f|}$$
>显然取$\overline{\mc B(0,N)}\cap E_\alpha$是单调递增的, 
>$$m(E_\alpha)=\lim_{N\to\infty}{m(\overline{B_N}\cap E_\alpha)}\le\lim_{n\to\infty}{\frac{3^d}{\alpha}\norm{f}_1}=\frac{3^d}{\alpha}\norm{f}_1$$

