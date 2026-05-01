#代数几何 

在线性空间中, 单个线性方程组总是只切出一个余维数 $0$ 或 $1$ 的子空间. Krull主理想定理就是这个想法的泛化

>[!thm] Krull主理想定理, 几何版本 (Krull's Principal Ideal Theorem, Geometric Version)
>设 $X$ 是一个[[Noether概形|局部Noether概形]], $f$ 是其上一个代数函数. 则 $V(f)$ 的全体不可约分量的[[余维数]]为 $0$ 或 $1$.

>[!thm] Krull主理想定理, 代数版本 (Krull's Principal Ideal Theorem, Algebraic Version)
>设 $R$ 是[[Noether模|Noether环]], $x\in R$, 任何包含 $(x)$ 且极小的素理想 $\mf q$ 余维数至多为 $1$.

定理的证明涉及一个引理:

>[!lem] 引理1
>设 $R$ 是Noether环, $\mf p$ 是一个素理想, 则对 $n\in\N$, 令 $\mf p^{(n)}=\mf p^nR_{\mf p}\cap R$, 则
>$$\mf p^{(n)}R_{\mf p}=(\mf pR_\mf p)^n$$

>[!pf] Pf.(引理)
>显然, $\mf p^{(n)}\subset \mf p^nR_{\mf p}$, 所以 $\mf p^{(n)}R_{\mf p}\subset \mf p^nR_{\mf p}=(\mf pR_{\mf p})^n$. 反之, 令 $a/s\in\mf p^nR_{\mf p}=(\mf pR_{\mf p})^n$, 其中 $a\in\mf p^n$, $s\notin\mf p$. 这会导致 $a\in\mf p^{(n)}$, 从而 $a/s=a\cdot1/s\in\mf p^{(n)}R_{\mf p}$.

>[!pf] Pf.(原定理)
>假设存在一个素理想链 $\mf p_0\subset \mf p\subset \mf q$, 且 $\mf q$ 是满足 $(x)\subset\mf q$ 的极小素理想. 考虑 $R_{\mf q}$, 这是一个局部环. 以及其极大理想 $\mf qR_{\mf q}$, 所有信息都将被保持, 因此可以设 $(R,\mf m)$ 是局部Noether环, $(x)\subset\mf m$ 是极小的且 $\mf p_0\subset \mf p\subset \mf m$. 用 $R/\mf p_0$ 替换 $R$, 从而 $R/\mf p_0$ 是局部的, 我们有
>$$0\subset\mf p/\mf p_0\subset\mf m/\mf p_0$$
>并且 $\overline x\subset\mf m/\mf p_0$. 并且 $(R,\mf m)$ 是一个无零因子环, 且$(x)\subset\mf m$ 满足极小性, 并且 $0\subset \mf p\subset \mf m$. 若我们能证明 $\mf p=0$, 就能证明原结论.
>
>于是考虑 $\overline{\mf p^{(t)}}\subset R/(x)$. 一个理想的降链, 从而存在 $n$ 使得 $\overline{\mf p^{(t)}}=\overline{\mf p^{(t+1)}}$, 对任意 $t\ge n$ 成立, 因为 $R/(x)$ 是Artin环, 从而 $\mf p^{(t)}+(x)=\mf p^{(t+1)}+(x)$, 对任何 $v\in\mf p^{(t)}$, 存在 $w\in\mf p^{(t+1)}$ 使得 $v=w+xr$. 从而 $v-w=xr\in\mf p^{(t)}$, 但是 $x\notin\mf p=\sqrt{\mf p^{(t)}}$, 从而 $r\in\mf p^{(t)}$, 由主理想的定义确保, 这说明 $\mf p^{(t)}\subset \mf p^{(t+1)}+x\mf p^{(t)}$, 从而
>$$\frac{\mf p^{(t)}}{\mf p^{(t+1)}}=x\frac{\mf p^{(t)}}{\mf p^{(t+1)}}$$
>由[[Nakayama引理]], $\mf p^{(t)}=\mf p^{(t+1)}=\mf p^{(n)}$ 对于任何 $t\ge n$ 成立, 令 $J=\cap\mf p^{(t)}=\mf p^{(n)}$, 由于 $R$ 是无零因子环, 从而 $R\to R_{\mf p}$ 是内射, 于是
>$$J=\cap\mf p^{(t)}\subset\cap\mf p^{(t)}R_{\mf p}$$
>从而在 $R_\mf p$ 中, $\mf p^{(t)}R_\mf p=(\mf pR_{\mf p})^t$, 由引理, $J\subset\cap(\mf pR_\mf p)^t=0$, 从而 $0=J=\mf p^{(n)}$, 于是 $\mf p^{n}\subset\mf p^{(n)}=0$, 从而 $\mf p=0$.
