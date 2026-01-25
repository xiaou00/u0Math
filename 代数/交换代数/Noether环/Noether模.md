---
aliases:
  - Noether环
---
#代数 

>[!def] Noether模
>设 $M$ 是 $R$-[[模]], 若 $M$ 的任意子模升链
>$$M_1\subset M_2\subset\cdots$$
>都是稳定的, 即存在 $r\ge 1$ 使得 $M_r=M_{r+1}=\cdots$, 则称 $M$ 为**Noether模**(Noetherian module), 如果[[环]] $R$ 是Noether模, 则称 $R$ 为**Noether环**(Noetherian ring).

例如, 有限维的[[线性空间]]就不存在严格递增的无限子空间链, 因此有限维的线性空间是Noether模.

>[!thm] 定理1
>$M$ 是Noether模当且仅当 $M$ 的一些子模组成的任意集合关于包含关系都有极大元.

> [!pf]
> 假设对任意 $M$ 的子模组成的集合都有极大元, 设
> $$M_1\subset M_2\subset\cdots$$
> 是 $M$ 的子模升链, 考虑 $\set{M_n\mid n=1,2,\ldots}$, 由假设, 这个集合关于包含关系有极大元, 设 $M_r$ 是该极大元, 则由极大元性质 $M_r=M_{r+1}=\cdots$. 
> 
> 反之, 设 $M$ 是 Noether模, $\mc M=\set{M_\alpha\mid \alpha\in S}$ 是 $M$ 的子模族, 若$\mc M$无极大元, 则任取 $M_{\alpha_1}\in\mc M$ 都存在 $M_{\alpha_2}\in\mc M$ 使得 $M_{\alpha_1}\subsetneq M_{\alpha_2}$, 从而可反复选取之构成不稳定升链
> $$M_{\alpha_1}\subsetneq M_{\alpha_2}\subsetneq\cdots$$
> 与Noether模的升链条件相悖, 故 $\mc M$ 必有极大元.

>[!thm] 定理2
>$M$ 是Noether模当且仅当 $M$ 的子模都是有限生成的.

>[!pf]
>假设 $M$ 是Noether模, 设 $N$ 是 $M$ 的任意一个子模. 任取 $m_1\in N$, 若 $N\ne\langle m_1\rangle$, 则取 $m_2\in N\setminus\langle m_1\rangle$, 若 $N\ne\langle m_1,m_2\rangle$ 则往复, 若该过程可以无限持续, 则有 $M$ 的子模的严格升链
>$$\langle m_1\rangle\subsetneq\langle m_1,m_2\rangle\subsetneq\langle m_1,m_2,m_3\rangle\subsetneq\cdots$$
>这与Noether模的升链条件相悖, 故$N$有限生成.
>
>反之, 若 $M$ 的任意子模都是有限生成的, 设
>$$M_1\subset M_2\subset\cdots$$
>为 $M$ 的子模升链. 令 $N=\bigcup_{n=1}^\infty{M_n}$, 容易验证 $N$ 是 $M$ 的子模, 由假设 $N$ 是有限生成的, 故存在 $m_1,\ldots,m_r\in N$ 使得 $N=\langle m_1,\ldots,m_r\rangle$. 由于
>$$m_i\in\bigcup_{n=1}^\infty{M_n},\quad i=1,2,\ldots$$
>从而存在 $s\ge 1$ 使得 $m_i\in M_s,i=1,2,\ldots,r$. 因而 $M_s=M_{s+1}=\cdots$. 从而 $M$ 是Noether模.

>[!thm] 定理3
>设 $N$ 是 $M$ 的子模, 则 $M$ 是Noether模当且仅当 $N$ 和 $M/N$ 是Noether模.

>[!pf]
>假设 $M$ 是Noether模, 由于 $N$ 的子模也是 $M$ 的子模, 从而 $N$ 也是Noether模. 又由于 $M/N$ 的子模可以唯一地表示为 $K/N$, 其中 $K$ 也是子模且 $N\hookrightarrow K\hookrightarrow M$, 从而 $M/N$ 的任意子模升链可表示为
>	$$M_1/N\subset M_2/N\subset\cdots\tag{I}$$
>	
>则 $N\subset M_1\subset M_2\subset\cdots$ 是 $M$ 的子模升链, 由假设该链是稳定的, 从而 $M/N$ 的子模升链 (I) 也是稳定的, 从而 $M/N$ 是Noether模.
>
>反之, 假设 $N$ 和 $M/N$ 是Noether的. 设
>$$M_1\subset M_2\subset\cdots$$
>是 $M$ 的任一子模升链, 则
>$$M_1\cap N\subset M_2\cap N\subset\cdots$$
>是 $N$ 的子模升链, 于是由 $N$ 的Noether性, 存在 $r_1\ge 1$ 使得 $M_{r_1}\cap N=M_{r_1+1}\cap N=\cdots$. 再令 $\overline{M_i}=(M_i+N)/N,\,i=1,2,\ldots$. 则
>$$\overline{M_1}\subset\overline{M_2}\subset\cdots$$
>构成的是 $M/N$ 的子模升链. 于是根据假设, 存在 $r_2\ge 1$ 使得 $\overline{M_{r_2}}=\overline{M_{r_2+1}}=\cdots$. 不妨令 $r=\max\set{r_1,r_2}$. 则对任意 $n\ge r$ 都有
>$$M_n\cap N=M_{n+1}\cap N,\quad(M_n+N)/N=(M_{n+1}+N)/N$$
>由上面两个等式, 我们可以证明必有 $M_n=M_{n+1}$ :
>
>由第二个等式得 $M_n+N=M_{n+1}+N$. 由于 $M_{n+1}\supset M_n$, 于是 $M_n+N=M_{n+1}+N$ 可推得 $M_{n+1}=M_n+(M_{n+1}\cap N)$, 再由第一个等式即得 $M_{n+1}=M_n$.

>[!thm] 定理4
>设
>$$0\to M'\xrightarrow{f} M\xrightarrow{g} M''\xrightarrow{\epsilon} 0$$
>是 $R$-模的短[[正合序列|正合列]], 则 $M$ 是Noether模当且仅当 $M',M''$ 都是Noether模.

>[!pf]
>由该列正合, 有 $\im f=\ker g$. 先设 $M$ 是Noether模, 
>
>由[[第一同构定理]], $\ker\epsilon=\im g\cong\coim g$, 于是 $M''\cong M/\ker g$, 且 $g$ 是满态射, 由定理3知 $M/\ker g$ 是Noether模, 于是 $M''$ 是Noether模.
>对偶地, 显然 $f$ 是单态射, 可将 $M'$ 视为 $M$ 的一个子模, 显然 $M'$ 作为子模也是Noether模.
>
>反之, 设 $M',M''$ 都是Noether模, 考虑 $M$ 中的链 $N_1\subset N_2\subset\cdots$.
>考虑 $g(N_i)$, 由于 $g(N_i)$ 是 $M''$ 的子模且 $M''$ 是Noether的, 从而
>$$g(N_1)\subset g(N_2)\subset\cdots$$
>稳定, 设其在 $n_1$ 处稳定. 再考虑 $f^{-1}(N_i\cap\im f)$, 同样地论证可以得出
>$$f^{-1}(N_1\cap\im f)\subset f^{-1}(N_2\cap\im f)\subset\cdots$$
>稳定, 设其在 $n_2$ 处稳定, 设 $n=\max\set{n_1,n_2}$. 用定理3同样的论证法即可.

>[!thm] 定理5
>若 $M_i\,(i=1,\ldots,n)$ 都是Noether模, 则[[双积|直和]]
>$$\bigoplus_{i=1}^n{M_i}$$
>也是Noether模.

>[!pf]
>注意到若 $M,N$ 是 $R$-模, 则有自然的短正合列
>$$0\to M\to M\oplus N\to N\to 0$$
>由定理4归纳即证.

>[!cor] 推论1
>Noether环上的有限生成模都是Noether模.

