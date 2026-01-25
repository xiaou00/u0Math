#代数 
$$\newcommand{\F}{\mathbb F}\newcommand{\V}{\mathbb V}\newcommand{\I}{\mathbb I}$$
>[!thm] Hilbert零点定理 (Hilbert's Nullstellensatz)
>设 $\F$ 是[[代数闭域]], $J$ 是 $\F[x_1,\ldots,x_n]$ 的一个[[理想]], 则
>$$\I(\V(J))=\sqrt{J}$$

这个定理是交换代数何代数几何的基石. 它无非是表明了三件事:

- 只要代数上不矛盾, 多项式方程组在 $\C$ 上有解.
- 几何上的代数集和根理想是一一对应的.
- 我们可以完美地对应几何和代数问题.

>[!lem] 引理1
>设 $F\subset K\subset A$ 都是[[域]], 设 $A$ 是有限生成的 $F$-代数, 又是 $K$ 上的有限生成[[模]], 则 $K$ 也是有限生成的 $F$ 代数.

>[!pf]
>不妨令 $A=F[a_1,\ldots,a_n]$. $A=Kb_1+\cdots+Kb_m$. 则
>$$\begin{aligned}
a_i=&\sum_{j=1}^m{k_{ij}b_j},\quad k_{ij}\in K,\quad i=1,2,\ldots,n\\
b_sb_t=&\sum_{l=1}^m{k_{stl}b_l},\quad k_{stl}\in K,\quad s,t=1,2,\ldots,m
\end{aligned}$$
>再令
>$$K_0=F[\,k_{ij},k_{stl}\mid i=1,\ldots,n\,;\,j,s,t,l=1,\ldots,m\,]$$
>则 $A$ 是一个 $K_0$-模, $K$ 是 $A$ 的 $K_0$-子模. 由[[Hilbert基定理]], $K_0$ 是Noether环, 注意到由于 $A$ 中的元素都是 $a_1,\ldots,a_n$ 在 $F$ 上的多项式. 再代入上等式, 注意到 $A$ 是由 $b_1,\ldots,b_m$ 生成的 $K_0$ 模, 从而 $A$ 是有限生成的 $K_0$-模, 从而是Noether $K_0$-模. 从而其子模也是有限生成的 $K_0$-模. 而 $K_0$ 是有限生成的 $F$-代数, 从而 $K$ 是有限生成的 $F$-代数.

>[!lem] 引理2
>设 $F$ 是域, $A\supset F$ 是有限生成的 $F$ 代数, 若 $A$ 也是域, 则 $A$ 必然是 $F$ 的[[代数扩张]].

>[!pf]
>不妨对 $n$ 用归纳法, 当 $n=1$ 时, 若 $a_1$ 在 $F$ 上不是代数的, 则 $F[a_1]\cong F[x]$, 其中 $x$ 是不定元, 然而 $F[x]$ 不是域, 例如 $x$ 就在 $F[x]$ 中不可逆. 从而 $a_1$ 在 $F$ 上必然是代数的.
>
>现在假设 $n>1$ 且结论对 $n-1$ 成立, 若 $a_1,\ldots,a_n$ 在 $F$ 上都是代数的, 则结论成立. 若非如此, 不失一般性, 不妨设 $a_1$ 在 $F$ 上不是代数的, 令 $K=F(a_1)$, 则 $K$ 是 $A$ 的子域且 $A=K[a_1,\ldots,a_n]$. 于是由归纳假设, $A$ 是 $K$ 的代数扩域, 从而 $K$ 是有限生成的 $K$-模. 由引理1知 $K$ 是有限生成的 $F$-代数.
>
>设 $x$ 为不定元, 则 $F(x)$ 不是有限生成的 $F$-代数, 假设
>$$F(x)=F\left[\frac{f_1(x)}{g_1(x)},\ldots,\frac{f_r(x)}{g_r(x)}\right],\quad f_1,\ldots,f_r,g_1,\ldots,g_r\in F[x]$$
>取不可约多项式 $p(x)$ 使其与 $g_1(x),\ldots,g_r(x)$ 都互素, 则 $\dfrac1{p(x)}$ 不能表示为$\dfrac{f_1(x)}{g_1(x)},\ldots,\dfrac{f_r(x)}{g_r(x)}$ 的多项式的形式, 矛盾.

>[!thm] Hilbert零点定理, 弱形式
>设 $F$ 是代数闭域, $I$ 是 $F[x_1,\ldots,x_n]$ 的一个真理想, 则 $\V(I)\ne\O$.

>[!pf]
>由 $I$ 是真理想, 存在 $F[x_1,\ldots,x_n]$ 的极大理想 $\mathfrak m$ 使得 $I\subset\mathfrak m$. 由于 $\V(\mathfrak m)\subset\V(I)$, 所有只需对极大理想 $\mathfrak m$ 证明 $\V(\mathfrak m)\ne \O$.
>
>显然由极大理想的性质, $F[x_1,\ldots,x_n]/\mathfrak m$ 是一个域并且是 $F$ 的扩域 (将 $a$ 与 $a+\mathfrak m$ 等同), 则由引理2, $F[x_1,\ldots,x_n]/\mathfrak m$ 是 $F$ 的代数扩域, 然而 $F$ 是代数闭域, 因此 $F=F[x_1,\ldots,x_n]/\mathfrak m$. 因此存在 $a_i\in F\,(i=1,\ldots,n)$ 使得 $x_i+\mathfrak m=a_i+\mathfrak m$. 即 $x_i-a_i\in\mathfrak m,\,i=1,\ldots,n$. 从而 $\langle x_1-a_1,\ldots,x_n-a_n\rangle\subset\mathfrak m$, 但是 $\langle x_1-a_1,\ldots,x_n-a_n\rangle$ 是极大理想, 于是 $\mathfrak m=\langle x_1-a_1,\ldots,x_n-a_n\rangle$, 因此 $\V(\mathfrak m)=\set{\langle a_1,\ldots,a_n\rangle}\ne \O$.

我们来给出原定理的证明:

>[!pf]
>显然 $\sqrt{J}\subset\I(\V(J))$. 再设 $f\in \I(\V(J))$, 考虑 $n+1$ 个变元的多元多项式环$F[x_1,\ldots,x_n,x_{n+1}]$的理想
>$$K=\langle J,x_{n+1}f-1\rangle=JF[x_{n+1}]+\langle x_{n+1}f-1\rangle$$
>若 $(a_1,\ldots,a_n,a_{n+1})\in\V(K)$, 则
>$$(a_1,\ldots,a_n)\in\V(J),\quad a_{n+1}f(a_1,\ldots,a_n)-1=0$$
>而由 $f\in\I(\V(J))$ 知 $f(a_1,\ldots,a_n)=0$, 从而由上式的 $-1=0$. 这个矛盾说明 $\V(K)=\O$, 从而由定理的弱形式可得 $K=F[x_1,\ldots,x_n,x_{n+1}]$. 即 $1\in K$, 于是存在 $g\in J,h\in F[x_{n+1}],k\in F[x_1,\ldots,x_n,x_{n+1}]$ 使得
>$$1=gh+k(x_{n+1}f-1)$$
>在上式中令 $x_{n+1}=1/f$ 得 $1=gh(1/f)$. 因此若 $\deg h=N$, 则 $f^N\in J$, 于是 $f\in\sqrt{J}$, 这就证明了 $\I(\V(J))=\sqrt{J}$.

