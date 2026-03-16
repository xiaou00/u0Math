#代数 

>[!thm] Krull定理
>设 $R$ 是[[Noether模|Noether环]], $I$ 是 $R$ 的一个[[理想]], $M$ 是有限生成的 $R$ 模. 若 $I\subset J(R)$, 则 
>$$\bigcap_{n\ge 0}{I^nM}=0$$

>[!pf]
>令 $N=\bigcap_{n\ge 0}{I^nM}$, 由[[Artin-Rees引理]], 存在 $k\ge 0$ 使得对任意 $n\ge k$ 有
>$$N\cap I^nM=I^{n-k}(N\cap I^kM)$$
>于是对任意 $n>k$ 都有 $N\cap I^nM\subset IN$. 但 $N\cap I^nM=N$, 从而 $N=IN$, 由[[Nakayama引理]], $N=0$.


