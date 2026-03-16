#代数 

>[!thm] Artin-Rees引理
>设 $R$ 是一个[[Noether模|Noether环]], $I$ 是 $R$ 的一个[[理想]], $M$ 是一个有限生成的 $R$ 模, $N$ 是 $M$ 的子模. 则存在 $k\ge 0$ 使得对任意 $n\ge k$ 都有
>$$N\cap I^nM=I^{n-k}(N\cap I^kM)$$

>[!pf]
>令 
>$$\mc N=\bigoplus_{n\ge 0}{(N\cap I^nM)t^n}$$
>由于
>$$I(N\cap I^nM)\subset IN\cap I^{n+1}M\subset N\cap I^{n+1}M$$
>从而作为 $\mc R_I(R)$ 模的话, $\mc N$ 是 $\mc R_I(M)$ 的子模, 由于 $\mc R_I(M)$ 是[[Noether模]], 从而 $\mc N$ 是有限生成的模, 假设 $\mc N$ 可以由 $\alpha_1,\ldots,\alpha_s$ 生成, 都是齐次元, 且次数都小于 $k$, 则 $\mc N$ 可以由其次数小于 $k$ 的部分
>$$\bigoplus_{m<k}{(N\cap I^mM)t^m}$$
>生成, 注意到对任意 $n\ge k$, $\bigoplus_{m<k}{(N\cap I^mM)t^m}$ 生成的子模的次数为 $n$ 的其次部分就是
>$$I^{n-k}(N\cap I^kM)t^n$$
>所以对任意 $n\ge k$ 都有 $N\cap I^nM=I^{n-k}(N\cap I^kM)$.

