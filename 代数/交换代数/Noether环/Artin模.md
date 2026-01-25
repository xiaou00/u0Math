---
aliases:
  - Artin环
---
#代数 

>[!def] Artin模
>设 $M$ 是 $R$-[[模]], 若 $M$ 的任意子模降链
>$$M_1\supset M_2\supset\cdots$$
>都是稳定的, 即存在 $r\ge 1$ 使得 $M_r=M_{r+1}=\cdots$, 则称 $M$ 为**Artin模**(Artin module), 如果[[环]] $R$ 是Artin模, 则称 $R$ 为**Artin环**(Artin ring).

完全类似于Noether模中的情形, 有:

>[!thm] 定理1
>$M$ 是Artin模当且仅当 $M$ 的任意子模族对于包含关系都有极小元.

>[!thm] 定理2
>设 $N$ 是 $M$ 的子模, 则 $M$ 是Artin模当且仅当 $N$ 和 $M/N$ 是Artin模.

>[!thm] 定理3
>设
>$$0\to M'\xrightarrow{f} M\xrightarrow{g} M''\xrightarrow{\epsilon} 0$$
>是 $R$-模的短[[正合序列|正合列]], 则 $M$ 是Artin模当且仅当 $M',M''$ 都是Artin模.

