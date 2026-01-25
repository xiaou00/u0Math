#代数 
$$\newcommand{\Hom}{\mathrm{Hom}}$$
>[!def] Hom复形
>设 $X^\bullet,Y^\bullet$ 为 $\mathsf{Ch}(\mathfrak A)$ 的对象, 对每个 $n\in\Z$ 定义
>$$\Hom^n(X,Y):=\prod_{k\in\Z}{\Hom_{\frak A}(X^k,Y^{k+n})}$$
>态射的逐项合成给出
>$$\begin{aligned}
\Hom^n(Y,Z)\times\Hom^m(X,Y)&\to\Hom^{n+m}(X,Z)\\
(g,f)&\mapsto gf:=(g^{k+m}f^k)_{k\in\Z}
\end{aligned}\tag{O}$$
>注意到, $d_X=(d_X^k)_k\in\Hom^1(X,X)$, 对于 $d_Y$ 亦然. 于是可以定义
>$$\begin{aligned}
d^n=d^n_{\Hom^\bullet(X,Y)}:\Hom^n(X,Y)&\to\Hom^{n+1}(X,Y)\\
f&\mapsto d_Yf-(-1)^nfd_X
\end{aligned}$$
>显然运算 (O) 满足结合律核对加法的分配律. 给定 $\mathsf{Ch}(\mathfrak A)$ 中的态射 $u:\underline X\to X$ 和 $v:Y\to\underline Y$, 分别可视为 $\Hom^0(\underline X,X)$ 和 $\Hom^0(Y,\underline Y)$ 的元素. 则对每个 $n\in\Z$ 都有同态
>$$\begin{aligned}
\Hom^n(u,v):\Hom^n(X,Y)&\to\Hom^n(\underline X,\underline Y)\\
f&\mapsto vfu
\end{aligned}$$
>以上资料 $(\Hom^n(X,Y),d^n)_{n\in\Z}$ 给出了 $\mathsf{Ch}(\mathsf{AbGrp})$ 中的对象, 称之为 $X^\bullet$ 到 $Y^\bullet$ 的**Hom复形** (Hom complex). 当 $X,Y$ 变动时, 此构造为加性函子
>$$\Hom^\bullet:\mathsf{Ch}(\mathfrak A)^{\mathrm{op}}\times\mathsf{Ch}(\mathfrak{A})\to\mathsf{Ch}(\mathsf{AbGrp})$$

>[!pf]
>我们来验证其确实为复形和函子. 先验证 $d^{n+1}d^n=0$, 因为 $d^{2}_Y=0=d^2_X$, 直接计算可得
>$$\begin{aligned}
d^{n+1}(d^nf)=&d_Y(d_Yf-(-1)^nfd_X)-(-1)^{n+1}(d_Yf-(-1)^nfd_X)d_X\\
=&(-1)^{n+1}d_Yfd_X-(-1)^{n+1}d_Yfd_X=0
\end{aligned}$$
>下面证明函子性. 考虑图表
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[cramped,row sep=large] {\mathrm{Hom}^n(X^\bullet,Y^\bullet)} && {\mathrm{Hom}^n(\underline{X}^\bullet,\underline{Y}^\bullet)} \\ \\ {\mathrm{Hom}^{n+1}(X^\bullet,Y^\bullet)} && {\mathrm{Hom}^{n+1}(\underline{X}^\bullet,\underline{Y}^\bullet)} \arrow["{\mathrm{Hom}^{n}(u,v)}", from=1-1, to=1-3] \arrow["{d^n}"', from=1-1, to=3-1] \arrow["{\underline d^n}", from=1-3, to=3-3] \arrow["{\mathrm{Hom}^{n+1}(u,v)}"', from=3-1, to=3-3] \end{tikzcd} \end{document}
>```
>由于 $d_Xu=ud_{\underline X},vd_Y=d_{\underline Y}v$, 显然图表交换.

初次见到Hom复形的定义或许会觉得很神秘, 不过稍微拆解一下这个定义就会显得自然很多: 首先, Hom复形的引入初衷是将态射"对象化". Hom复形将原本的态射变成了复形里的点. 不妨将 $\Hom^\bullet(X,Y)$ 比作一个架子, 那么第0层 $\Hom^0(X,Y)$ 中就是全体 $X$ 到 $Y$ 的横向桥梁 (分次映射), 第一层 $\Hom^1(X,Y)$ 中就是全体斜向桥梁... 而微分 $d_{\Hom}$ 则是基于这之上定义的, 满足Leibniz法则的导子, 并且满足 $d_\Hom^2=0$. 

下面的定理有助于我们更好地理解Hom复形:

>[!thm] 定理1
>设 $n,m\in\Z$ 而 $f\in\Hom^n(X,Y)$, 将 $f$ 等同于 $\Hom^{n-m}(X,Y[m])$ 的元素 $\underline f=(f^k)_k$, 或 $\Hom^{n-m}(X[-m],Y)$ 的元素 $\overline f=(f^{k-m})_k$. 即$$\begin{aligned}
d_{\Hom^\bullet(X,Y[m])}^{n-m}\underline f&\longleftrightarrow(-1)^md_{\Hom^\bullet(X,Y)}^nf\\
d_{\Hom^\bullet(X[-m],Y)}^{n-m}\overline f&\longleftrightarrow d_{\Hom^\bullet(X,Y)}^nf
\end{aligned}$$
>那么 $\Hom^\bullet(X,Y[m])=\Hom^\bullet(X,Y)[m]\simeq\Hom^\bullet(X[-m],Y)$.

>[!pf]
>以第一式为例
>$$(d_{\Hom^\bullet(X,Y[m])}^{n-m}\underline f)^k=d_{Y[m]}^{k+n-m}\underline f^k-(-1)^{n-m}\underline f^{k+1}d_X^k:X^k\to Y^{k+n+1}$$
>显然这也等于
>$$(-1)^m(d_Y^{k+n}f^k-(-1)^nf^{k+1}d_X^k)$$
>关于 $\overline f$ 可作类似论证, 只不过由于缺少符号 $(-1)^m$, 结果由相等变为同构.

>[!thm] 定理2 (Leibniz律)
>设 $X^\bullet,Y^\bullet,Z^\bullet$ 为复形, $(g,f)\in\Hom^n(Y,Z)\times\Hom^m(X,Y)$, 则由 (O) 定义的乘法, 下等式在 $\Hom^{n+m+1}(X,Z)$ 中成立
>$$d^{n+m}(gf)=(d^ng)f+(-1)^ng(d^mf)$$

>[!pf]
>直接计算即可.

>[!thm] 定理3
>设 $n\in\Z$ 而 $f\in\Hom^n(X,Y)$, 则 $d^nf=0$ 等价于 $f\in\Hom(X,Y[n])$.

>[!pf]
>由定理1, 将 $f$ 视为 $\Hom^0(X,Y[n])$ 的元素, 从而问题归约为 $n=0$ 情形, 并且显然
>$$d^0f=0\iff d_Yf=fd_X$$

>[!cor] 推论1
>在Hom复形中, $g:X^\bullet\to Y^\bullet$ 是链映射当且仅当 $d_{\Hom^\bullet(X,Y)}(g)=0$.

>[!pf]
>设 $g$ 是链映射, 那么 $g\in\Hom^0(X,Y)$, 显然 $g\in\Hom(X,Y)$, 由定理3立即得出结论.

