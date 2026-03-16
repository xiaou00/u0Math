#代数 

>[!def] Hilbert级数
>设 $M=\bigoplus_{n\ge 0}{M_n}$ 是[[分次环|分次模]]. $\ell(M_n)$ 是[[合成列]]长度 (维数). 则形式幂级数
>$$H_m(t):=\sum_{n=0}^\infty{\ell(M_n)t^n}$$
>成为 $M$ 的**Hilbert级数**(Hilbert series).

>[!thm] 定理1 (Hilbert, Serre)
>设 $R=\bigoplus_{n\ge 0}{R_n}$ 是一个Noether分次环, $M=\bigoplus_{n\ge0}{M_n}$ 是一个有限生成的分次 $R$ 模. 假设 $R$ 作为 $R_0$ 代数可以由 $R_1$ 中的 $s$ 个元素 $x_1,\ldots,x_s$ 生成, 且每个 $M_n$ 作为 $R_0$ 模都具有有限长度, 则 $H_M(t)$ 是 $t$ 的有理多项式
>$$H_M(t)=\frac{f(t)}{(1-t)^s}$$
>其中 $f(t)\in\Z[t]$.

>[!pf]
>若 $s=0$ 则 $R=R_0$ 当 $n$ 充分大时必然有 $M_n=0$, 所以 $H_M(t)\in\Z[t]$, 结论成立.
>假设 $s>0$ 且结论对于 $s-1$ 成立, 则
>$$\ell(M'_n)-\ell(M_n)+\ell(M_{n+1})-\ell(M''_{n+1})=0$$
>对所有 $n\ge0$ 成立, 从而对上式乘 $t$ 再求和, 有
>$$tH_{M'}(t)-tH_M(t)+H_M(t)-H_{M''}(t)=g(t)\in\Z[t]$$
>则有
>$$H_M(t)=\frac1{1-t}(g(t)+H_{M''}(t)-tH_{M'}(t))$$
>对 $M'$ 和 $M''$ 应用归纳假设, 代入即得结论对 $M$ 成立.

