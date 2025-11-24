#点集拓扑 

我们来证明[[Ascoli定理]]的经典形式, 广义的形式证明依赖于Tychonoff定理 (AC), 然而这个版本不需要.

>[!lemma] 引理1
>设$X$是一个空间, $(Y,d)$是[[度量空间]]. 设$X,Y$紧致, 如果$\mb F$是$\csp(X,Y)$的[[等度连续]]子集, 那么关于$d$的一致度量和上确界度量, $\mb F$是[[完全有界]]的.

>[!proof]
>由于$X$是紧致的, 可以在$\csp(X,Y)$上定义上确界度量$\rho$, 关于$\rho$完全有界当且仅当关于$\bar\rho$完全有界. 对于$\epsilon<1$, 关于$\rho$的每一个$\epsilon$-球也是关于$\bar\rho$的一个$\epsilon$-球, 反之亦成立. 因此我们始终使用度量$\rho$,
>
>设$\mb F$等度连续, 给定$\epsilon>0$, 用关于度量$\rho$的有限多个开$\epsilon$-球覆盖$\mb F$.
>令$\delta=\frac13\epsilon$, 任给$a\in X$存在$a$的相应领域$U_a$使得对任意$x\in U_a$和任意$f\in\mb F$有$d(f(x),f(a))<\delta$. 于是可以找到有限多个邻域$U_a,a=a_1,\ldots,a_k$<span style="color:rgb(128,128,128)">(紧致性)</span>组成$X$的一个覆盖, 用$U_i$表示$U_{a_i}$. 选取直径小于$\delta$的有限个开集$\enum{V}{m}$覆盖$Y$.
>
>设$J$是全体函数$\alpha:\set{1,\ldots,k}\to\set{1,\ldots,m}$的集合, 给定$\alpha\in J$, 若存在$\mb F$中的一个函数$f$使得对于每一个$i=1,\ldots,k$有$f(a_i)\in V_{\alpha(i)}$, 便选取一个这样的函数, 记为$f_\alpha$. 集合$\set{f_\alpha}$是由集合$J$的一个子集$J'$加标的, 所以是有限的.  我们断言开球$\mc{B}_\rho(f_\alpha,\epsilon), \alpha\in J'$覆盖$\mb F$.
>
>设$f$是$\mb F$的一个元素, 对于每一个$i=1,2,\ldots,k$, 选取整数$\alpha(i)$使得$f(a_i)\in V_{\alpha(i)}$, 则函数$\alpha$在$J'$中, 我们断言: $f$属于球$\mc{B}_\rho(f_\alpha,\epsilon)$.
> 设$x$是$X$的一个点, 选取$i$使得$x\in U_i$, 于是
> $$\begin{aligned}
d(f(x),f(a_i))<\delta\\
d(f(a_i),f_\alpha(a_i))<\delta\\
d(f_\alpha(a_i),f_\alpha(x))<\delta
\end{aligned}$$
>第一个和第三个不等式成立是因为$x\in U_i$, 第二个不等式成立是因为$f(a_i)$和$f_\alpha(a_i)$都属于$V_{\alpha(i)}$. 综上, $d(f(x),f_\alpha(x))<\epsilon$, 因为对所有的$x\in X$以上不等式成立, 从而
>$$\rho(f,f_\alpha)=\max\set{d(f(x),f_\alpha(x))}<\epsilon$$
>因此属于开球$\mc{B}_\rho(f_\alpha,\epsilon)$.

>[!definition] 点态有界
>设空间$X$, 度量空间$(Y,d)$. $\csp(X,Y)$的子集$\mb F$若满足: 对于每一个$x\in X$, $Y$的子集
>$$\mb F_a=\set{f(a)\mid f\in\mb F}$$

>[!theorem] Ascoli定理 经典形式 (Ascoli theorem, classical version)
>设$X$是紧致空间, $(\R^n,d)$表示关于常规度量或Chebychev度量的Euclid空间. 赋予$\csp(X,\R^n)$相应的一致拓扑, 那么$\csp(X,\R^n)$的子空间$\mb F$有紧致闭包当且仅当$\mb F$关于$d$等度连续且点态有界.

>[!proof]
>因为$X$紧致, 在$\csp(X,\R^n)$上定义上确界度量$\rho$, 赋予$\csp(X,\R^n)$一致拓扑, 我们始终用$\mb{G}$来表示$\bf F$在$\csp(X,\R^n)$中的闭包
>
>---
>I. 先证明若$\mb G$紧致, 则关于$d$, $\mb G$是等度连续并且点态有界的, 再根据$\mb F\subset\mb G$就证明了$\mb F$的等度连续且点态有界, 从而证明定理的必要性.
>由[[完全有界|此页面定理1]], $\mb G$紧致$\implies\mb G$关于$\rho$和$\bar\rho$完全有界. 再由[[等度连续|此页面引理1]], 可见$\mb G$关于$d$等度连续. $\mb G$紧致蕴含$\mb G$关于$\rho$有界, 由此可见$\mb{G}$在$d$下点态有界. 这是因为对于任意$f,g\in\mb{G}$有$\rho(f,g)\le M$, 那么特别地, $d(f(a),g(a))\le M$, 因此$\mb G$直径最多为$M$.
>
>---
>II. 证明若$\mb F$关于$d$是等度连续和点态有界的, 则$\mb G$也是等度连续和点态有界的.
>我们先验证等度连续, 给定$x_0\in X$和$\epsilon>0$, 选取$x_0$的一个邻域$U$, 使得对所有的$x\in U$和$f\in\mb F$有$d(f(x),f(x_0))<\epsilon /3$, 任意给定$g\in\mb G$, 选取$f\in\mb F$使得$\rho(f,g)<\epsilon /3$. 由三角不等式, 对任意$x\in U$有$d(g(x),g(x_0))<\epsilon$, 从而$\mb G$在$x_0$等度连续.
>
>---
>证明点态有界, 给定$a$, 选取$M$, 使得$\mb F_a$的直径不大于$M$. 任意给定$g,g'\in\mb G$, 选取$f,f'\in\mb F$使得$\rho(f,g)<1$和$\rho(f',g')<1$. 因为$d(f(a),f'(a))\le M$, 所以$d(g(a),g'(a))\le M+2$. 再由$g$和$g'$是任意的得出$\diam\mb G_a\le M+2$.
>
>---
>III. 证明若$\mb{G}$是等度连续的并且点态有界, 则存在$\R^n$的紧致子空间$Y$, 包含着所有集合$g(X)$的并, 其中$g\in\mb G$.
>对于每一个$a\in X$选取邻域$U_a$, 使得对于所有$x\in U_a$和$g\in\mb G$有$d(g(x),g(a))<1$. 因为$X$是紧致的, 所以可以选取有限多个此类邻域覆盖$X$, 不妨设其下标为$a=\enum{a}{k}$. 因为$\mb{G}_{a_i}$有界, 从而其有限并也有界. 设其包含于$\R^n$中以原点为球心, $N$为半径的球中, 从而对于所有的$g\in\mb G$, 集合$g(X)$包含于以原点为球心, 以$N+1$为半径的球中. 于是对于所有的$g\in\mb G$, 集合$g(X)$包含于以原点为球心, $N+1$为半径的球中. 令$Y$为这个球的闭包即可.
>
>---
>IV. 证明充分性. 设$\mb F$等度连续且点态有界, 我们证明关于$\rho$, $\mb G$是完备的且完全有界. 由[[完全有界|此页面定理1]], $\mb G$紧致:
>完备性容易得到, 因为$\mb G$本身就是$(\csp(X,\R^n),\rho)$的一个闭子空间.
>下面验证完全有界性: 根据(II)可见$\mb G$在度量$d$下是等度连续且点态有界的, 由(III)得存在$\R^n$的子空间$Y$使得$\mb G\subset \csp(X,Y)$. 由此页面引理1, $\mb G$等度连续蕴含$\mb G$关于$\rho$完全有界.

>[!corollary] 推论1
>设$X$紧致, $d$为$\R^n$上Euclid度量, 赋予$\csp(X,\R^n)$对应的一致拓扑. 则$\csp(X,\R^n)$的子空间$\mb F$紧致, 当且仅当其关于上确界度量$\rho$是闭的和有界的, 关于$d$是[[等度连续]]的.

>[!proof]
>若$\mb F$紧致, 则其必定闭且有界, 由Ascoli定理(经典)可见其等度连续. 反之若$\mb F$是闭的, 则$\mb F=\clos{\mb F}$, 若其关于$\rho$有界, 则关于$d$点态有界, 同时是等度连续的, 由Ascoli定理(经典)即证明结论.

