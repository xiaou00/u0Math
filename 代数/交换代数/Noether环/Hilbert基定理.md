#代数 
$$\newcommand{\V}{\mathbb V}\newcommand{\I}{\mathbb I}$$
>[!thm] Hilbert基定理 (Hilbert's Basis Theorem)
>若 $R$ 是[[Noether模|Noether环]], 则多项式环 $R[x]$ 也是Noether环.

>[!pf]
>不妨设 $I$ 是 $R[x]$ 的一个理想, 我们来证明 $I$ 是有限生成的, 这样由[[Noether模|此页面定理2]]即得 $R[x]$ 是Noether环.
>不妨设 $J$ 是 $I$ 中全体首项系数组成的集合, 对于 $a,b\in J$, 不妨设
>$$f=ax^n+\cdots,\quad g=bx^m+\cdots$$
>是他们对应的 $I$ 中多项式. 不失一般性, 假设 $n\ge m$, 可以构造多项式 $h=f+x^{n-m}g$, 由于 $I$ 是理想, 容易得出 $h\in I$. 从而 $a+b\in J$. 对于 $a\in J,r\in R$. 只需考虑 $r\cdot f$ 即可. 从而 $J$ 是 $R$ 的理想.
>
>由条件, $J$ 是有限生成的, 不妨令 $J=\langle a_1,\ldots,a_r\rangle$, 则有
>$$f_i=a_ix^{s_i}+\cdots+c\in I,\quad i=1,2,\ldots,r$$
>再令
>$$\begin{aligned}
&I'=\langle f_1,\ldots,f_r\rangle\\
&K=R+Rx+\cdots+Rx^{s-1},\quad s=\max\set{s_i}
\end{aligned}$$
>下面证明 $I=I'+(I\cap K)$, 显然 $I'+(I\cap K)\subset I$, 另一方面对任意 $f\in I$ 令
>$$f=ax^t+\cdots+c,\quad a\ne 0$$
>则 $a\in J$, 于是存在 $b_i\in R,\, i=1,2,\ldots,r$ 使得
>$$a=b_1a_1+\cdots+b_ra_r$$
>若 $t\ge s$, 则
>$$g=f-\sum_{i=1}^r{b_ix^{t-s_i}f_i\in I}$$
>但 $\deg g\le\deg f$, 从而有限步后总存在 $h\in I'$ 使得 $f-h\in I$ 且 $\deg(f-h)<s$. 即
>$$f-h=c_0+c_1x+\cdots+c_{s-1}x^{s-1},\quad c_i\in R$$
>从而 $f-h\in I\cap K$, 从而 $I=I'+(I\cap K)$.
>
>注意到, $K$ 是有限生成的 $R$ 模, 从而是Noether $R$ 模, 故其子模 $I\cap K$ 也是有限生成的, 从而有 $g_1,\cdots,g_l\in I$ 使得 $I\cap K=Rg_1+\cdots+Rg_l$. 于是
>$$I=\langle f_1,\ldots,f_r\rangle+Rg_1+\cdots+Rg_l\subset\langle f_1,\cdots,f_r,g_1,\cdots,g_l\rangle$$
>又有 $\langle f_1,\ldots,f_r,g_1,\cdots,g_l\rangle\subset I$, 这就证明了 $I$ 有限生成, 从而 $R[x]$ 是Noether环.

>[!cor] 推论1
>若 $\mathbb F$ 是[[域]], 则 $\mathbb F[x_1,\ldots,x_n]$ 是Noether环.

>[!pf]
>显然 $\mathbb F$ 作为一维线性空间是Noether环, 则由Hilbert基定理得 $\mathbb F[x_1]$ 是Noether环, 而
>$$\mathbb F[x_1,\ldots,x_n]=\mathbb F[x_1][x_2]\cdots[x_n]$$
>故由Hilbert基定理, 归纳即得 $\mathbb F[x_1,\ldots,x_n]$ 是Noether的.

>[!cor] 推论2
>每个[[代数集]]都是有限个[[代数超平面]]的交. 即对任意理想 $I$, 存在 $f_1,\ldots,f_r\in I$ 使得
>$$\V(I)=\V(f_1)\cap\cdots\cap\V(f_r)$$

>[!pf]
>设 $\V\subset \mathbb F^n$ 是一个代数集, 则有 $\mathbb F[x_1,\ldots,x_n]$ 的一个理想 $I$ 使得 $V=V(I)$, 由上推论, $I$ 是有限生成的, 从而存在 $f_1,\ldots,f_r\in I$ 使得 $I=\langle f_1,\ldots,f_r\rangle$. 于是
>$$\V=\V(f_1,\ldots,f_r)=\V(f_1)\cap\cdots\cap\V(f_r)$$
>证毕.

>[!cor] 推论3
>Noether环上的有限生成代数也是Noether环.

>[!pf]
>设 $R$ 是Noether环, $A$ 是有限生成的 $R$-代数, 则有环满同态
>$$R[x_1,\ldots,x_n]\twoheadrightarrow A$$
>由Hilbert基定理, $R[x_1,\ldots,x_n]$ 是Noether的, 从而 $A$ 是Noether的.

