#代数 

>[!thm] Nakayama引理 (Nakayama Lemma)
>设 $M$ 是有限生成的 $R$-[[模]], $I$ 是 $R$ 的[[理想]], 若 $I\subset J(R)$, ([[Jacobson根]]) 使得 $IM=M$, 则 $M=0$.

>[!pf]
>设 $M=\langle m_1,\ldots,m_n\rangle$, 不妨设 $m_1,\ldots,m_n$ 是 $M$ 的个数最少的生成元族, 假设 $M\ne 0$, 则 $n>0$, 由 $IM=M$, $m_n\in IM$. 于是
>$$m_n=a_1m_1+\cdots+a_nm_n,\quad a_i\in I,\quad i=1,2,\ldots,n$$
>从而 $(1-a_n)m_n=a_1m_1+\cdots+a_{m-1}m_{n-1}$. 由于 $I\subset J(R)$, 从而 $1-a_n$ 是可逆元. 从而
>$$m_n\in \langle m_1,\ldots,m_{n-1}\rangle$$
>与 $n$ 极小性相悖, 从而 $M=0$.

>[!cor] 推论1
>设 $M$ 是有限生成的 $R$-模, $I\subset J(R)$ 是 $R$ 的一个理想, $N$ 是 $M$ 的子模, 如果 $M=IM+N$, 则 $M=N$
