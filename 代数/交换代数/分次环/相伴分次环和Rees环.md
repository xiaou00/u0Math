---
aliases:
  - 相伴分次环
  - Rees环
---
#代数 

我们研究两类特殊的环. 相伴分次环的核心动机为线性化, 而Rees环的动机在于研究吹胀操作.

>[!def] 相伴分次环
>设 $R$ 是[[Noether模|Noether环]], $I$ 是 $R$ 的一个[[理想]], 则令
>$$\mc G_I(R)=\bigoplus_{n\ge 0}{I^n/I^{n+1}},\quad I^0=R$$
>则 $\mc G_I(R)$ 是一个[[分次环]], 称为 $I$ 的**相伴分次环**.

>[!def] Rees环
>设 $R$ 是[[Noether模|Noether环]], $I$ 是 $R$ 的一个[[理想]], 则令
>$$\mc R_I(R)=\bigoplus_{n\ge 0}I^nt^n,\quad I^0=R,\quad t \text{ is variable}$$
>则 $\mc R_I(R)$ 是分次环, 称为 $I$ 的**Rees环**.

类似地, 设 $R$ 是Noether环, 设 $M$ 是有限生成的 $R$ 模
$$\mc G_I(M)=\bigoplus_{n\ge0}{I^nM/I^{n+1}M}$$
以及
$$\mc R_I(M)=\bigoplus_{n\ge 0}{I^nMt^n}$$
显然容易验证他们分别是有限生成的分次 $\mc G_I(R)$ 模和 $\mc R_I(R)$ 模.